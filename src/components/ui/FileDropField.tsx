import { DragEvent, useEffect, useId, useState } from 'react'
import { FaDownload } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'

import { cn } from '../../utils/cn'

interface FileDropFieldProps {
  label: string
  files: File[]
  onFilesChange: (files: File[]) => void
  accept?: string
  multiple?: boolean
  /** `preview` mostra miniaturas; `list` mostra os nomes em etiquetas. */
  display?: 'list' | 'preview'
  required?: boolean
  className?: string
}

/**
 * Area de largar ficheiros. Antes este bloco estava copiado tres vezes por
 * formulario, e mais duas vezes noutro formulario — com a marcacao inteira
 * repetida e os estilos em `style={{}}` inline.
 */
export function FileDropField({
  label,
  files,
  onFilesChange,
  accept,
  multiple = true,
  display = 'list',
  required,
  className
}: FileDropFieldProps) {
  const inputId = useId()
  const [isDragging, setIsDragging] = useState(false)

  function addFiles(fileList: FileList | null) {
    if (!fileList?.length) return
    onFilesChange([...files, ...Array.from(fileList)])
  }

  function removeAt(index: number) {
    onFilesChange(files.filter((_, i) => i !== index))
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDragging(false)
    addFiles(event.dataTransfer.files)
  }

  return (
    <div className={cn('w-full', className)}>
      <span className="field-label">
        {label}
        {required && <span className="ml-0.5 text-base-error">*</span>}
      </span>

      <label
        htmlFor={inputId}
        onDragOver={event => {
          event.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={cn(
          'flex w-full cursor-pointer flex-col items-center justify-center gap-3',
          'rounded-2xl border border-dashed border-mute-line bg-black/[0.02] p-8',
          'text-center transition-colors',
          'hover:border-red hover:bg-black/[0.04]',
          isDragging && 'border-red bg-red/5'
        )}
      >
        {display === 'preview' && files.length > 0 ? (
          <FilePreviews files={files} onRemove={removeAt} />
        ) : files.length > 0 ? (
          <FileChips files={files} onRemove={removeAt} />
        ) : (
          <span className="flex flex-col items-center gap-2 text-mute">
            <FaDownload aria-hidden className="text-title-m text-red" />
            <span className="text-base font-medium text-ink">
              Clique para escolher {multiple ? 'ficheiros' : 'um ficheiro'}
            </span>
            <span className="text-sm text-mute-light">
              ou arraste{multiple ? '-os' : '-o'} para aqui
            </span>
          </span>
        )}

        <input
          id={inputId}
          type="file"
          hidden
          accept={accept}
          multiple={multiple}
          onChange={event => {
            addFiles(event.target.files)
            // Permite voltar a escolher o mesmo ficheiro depois de o remover.
            event.target.value = ''
          }}
        />
      </label>
    </div>
  )
}

function FileChips({
  files,
  onRemove
}: {
  files: File[]
  onRemove: (index: number) => void
}) {
  return (
    <span className="flex flex-wrap items-center justify-center gap-2">
      {files.map((file, index) => (
        <span
          key={`${file.name}-${index}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-black/5 px-3 py-1 text-sm text-ink"
        >
          {file.name}
          <button
            type="button"
            aria-label={`Remover ${file.name}`}
            onClick={event => {
              event.preventDefault()
              event.stopPropagation()
              onRemove(index)
            }}
            className="text-mute-light transition-colors hover:text-base-error"
          >
            <IoCloseCircle size={18} />
          </button>
        </span>
      ))}
    </span>
  )
}

function FilePreviews({
  files,
  onRemove
}: {
  files: File[]
  onRemove: (index: number) => void
}) {
  const previews = useObjectUrls(files)

  return (
    <span className="flex flex-wrap items-center justify-center gap-4">
      {previews.map((url, index) => (
        <span key={url} className="relative block">
          <img
            src={url}
            alt={files[index]?.name ?? ''}
            className="h-28 w-28 rounded-xl object-cover"
          />
          <button
            type="button"
            aria-label={`Remover ${files[index]?.name ?? 'ficheiro'}`}
            onClick={event => {
              event.preventDefault()
              event.stopPropagation()
              onRemove(index)
            }}
            className="absolute -right-2 -top-2 rounded-full bg-white text-red shadow-card"
          >
            <IoCloseCircle size={24} />
          </button>
        </span>
      ))}
    </span>
  )
}

/**
 * URLs de pre-visualizacao com limpeza garantida — sem isto, cada ficheiro
 * escolhido deixava um blob preso em memoria ate ao refresh da pagina.
 */
export function useObjectUrls(files: File[]): string[] {
  const [urls, setUrls] = useState<string[]>([])

  useEffect(() => {
    const created = files.map(file => URL.createObjectURL(file))
    setUrls(created)
    return () => created.forEach(url => URL.revokeObjectURL(url))
  }, [files])

  return urls
}

export default FileDropField
