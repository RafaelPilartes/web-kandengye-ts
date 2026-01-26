// src/services/files.service.ts
import { fileRepository } from '../modules/Api'

/**
 * Resultado padrão do upload
 */
export type UploadResult = {
  url: string
  path: string
}

export class FileService {
  /**
   * Faz upload de um File (browser) para o storage no caminho especificado.
   * Retorna a url pública (download URL) e o path usado.
   */
  async uploadFile(
    file: File,
    folder: string,
    fileName: string = `${file.name}`
  ): Promise<UploadResult> {
    try {
      const path: string = `${folder}/${Date.now()}_${fileName}`
      const url = await fileRepository.uploadFile(file, path)
      return { url, path }
    } catch (err: any) {
      console.error('FileService.uploadFile error:', err)
      throw new Error(err?.message ?? 'Erro ao enviar ficheiro')
    }
  }

  /**
   * Faz upload de um Blob/Uint8Array (útil em React Native) para o storage.
   */
  async uploadBlob(
    blob: Blob | Uint8Array,
    path: string
  ): Promise<UploadResult> {
    try {
      // Alguns DAOs usam uploadBlob; adaptá-lo conforme implementado
      const url = await fileRepository.uploadBlob(blob as any, path)
      return { url, path }
    } catch (err: any) {
      console.error('FileService.uploadBlob error:', err)
      throw new Error(err?.message ?? 'Erro ao enviar blob')
    }
  }

  /**
   * Deleta um ficheiro dado o path (ex: "drivers/documents/abc.jpg")
   */
  async deleteFile(path: string): Promise<void> {
    try {
      await fileRepository.deleteFile(path)
    } catch (err: any) {
      console.error('FileService.deleteFile error:', err)
      throw new Error(err?.message ?? 'Erro ao eliminar ficheiro')
    }
  }

  /**
   * Retorna URL pública de um ficheiro já guardado.
   */
  async getDownloadUrl(path: string): Promise<string> {
    try {
      return await fileRepository.getFileURL(path)
    } catch (err: any) {
      console.error('FileService.getDownloadUrl error:', err)
      throw new Error(err?.message ?? 'Erro ao obter URL do ficheiro')
    }
  }

  /**
   * 🔹 UPLOAD DOCUMENTO: Upload com validações para documentos
   */
  async uploadByUserRef(
    file: File,
    userRef: string,
    uploadType: string,
    folderRef: string = `all`,
    fileName: string = `${file.name}`
  ): Promise<UploadResult> {
    try {
      console.log('📄 UseCase: Iniciando upload:', uploadType)

      if (!userRef || !userRef.trim()) {
        throw new Error('ID do usuário é obrigatório')
      }

      if (!uploadType || !uploadType.trim()) {
        throw new Error('Tipo de documento é obrigatório')
      }

      const folder = `${uploadType}/${userRef}/${folderRef}/${Date.now()}_${fileName}`
      console.log('✅ UseCase: Documento enviado com sucesso')
      const result = await fileRepository.uploadFile(file, folder)

      return { path: folder, url: result }
    } catch (error: any) {
      console.error('❌ UseCase: Erro no upload de documento:', error)
      throw new Error(error.message || 'Falha no upload do documento')
    }
  }
}
