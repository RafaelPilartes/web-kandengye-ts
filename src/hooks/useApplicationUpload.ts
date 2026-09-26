import { useCallback } from 'react'

import { showToastLoading, updateToast } from '../utils/toasts'
import { useFileUploadViewModel } from '../viewModels/FileUploadViewModel'

/**
 * Envio de ficheiros de uma candidatura, com toast de progresso por ficheiro.
 *
 * Os dois formularios de candidatura tinham cada um a sua versao disto —
 * `handleUpload` num, `uploadMultipleFiles` no outro, com o mesmo corpo.
 */
export function useApplicationUpload(userRef: string) {
  const { uploadByUserRef, uploadError } = useFileUploadViewModel()

  const uploadOne = useCallback(
    async (file: File, folder: string): Promise<string> => {
      const toastId = showToastLoading(`A carregar ${file.name}`)

      try {
        const { url } = await uploadByUserRef({
          file,
          uploadType: 'applications',
          userRef,
          folder
        })

        if (!url) {
          throw new Error(uploadError ?? 'O servidor não devolveu o ficheiro.')
        }

        updateToast(toastId, 'success', `${file.name} carregado`)
        return url as string
      } catch (error) {
        updateToast(toastId, 'error', `Erro ao carregar ${file.name}`)
        throw error
      }
    },
    [uploadByUserRef, uploadError, userRef]
  )

  const uploadMany = useCallback(
    async (files: File[], folder: string): Promise<string[]> => {
      const urls: string[] = []

      for (const file of files) {
        urls.push(await uploadOne(file, folder))
      }

      return urls
    },
    [uploadOne]
  )

  return { uploadOne, uploadMany }
}
