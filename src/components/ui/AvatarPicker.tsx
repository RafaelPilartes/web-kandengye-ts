import { DragEvent, useEffect, useId, useState } from 'react'
import { FaCamera } from 'react-icons/fa'

import { cn } from '../../utils/cn'

interface AvatarPickerProps {
  file: File | null
  onFileChange: (file: File | null) => void
  label?: string
  hint?: string
  className?: string
}

/**
 * Escolha da fotografia de perfil, com pre-visualizacao.
 *
 * Estava copiada em tres formularios. Em todos eles a pre-visualizacao
 * arrancava num URL com `httpss://` — nunca carregava — e o
 * `URL.createObjectURL` nunca era libertado.
 */
export function AvatarPicker({
  file,
  onFileChange,
  label = 'A sua fotografia',
  hint = 'Clique ou arraste a imagem para aqui',
  className
}: AvatarPickerProps) {
  const inputId = useId()
  const [isDragging, setIsDragging] = useState(false)
  const [preview, setPreview] = useState<string | null>(null)

  useEffect(() => {
    if (!file) {
      setPreview(null)
      return
    }

    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault()
    setIsDragging(false)
    const [dropped] = Array.from(event.dataTransfer.files)
    if (dropped) onFileChange(dropped)
  }

  return (
    <label
      htmlFor={inputId}
      onDragOver={event => {
        event.preventDefault()
        setIsDragging(true)
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={cn(
        'flex cursor-pointer flex-row items-center gap-8 rounded-2xl border border-dashed',
        'border-mute-line bg-black/[0.02] p-8 transition-colors',
        'hover:border-red hover:bg-black/[0.04]',
        isDragging && 'border-red bg-red/5',
        className
      )}
    >
      <span className="relative flex h-32 w-32 shrink-0 items-center justify-center overflow-hidden rounded-full border-[0.4rem] border-white bg-mute-line shadow-card">
        {preview ? (
          <img src={preview} alt="" className="h-full w-full object-cover" />
        ) : (
          <FaCamera aria-hidden className="text-title-m text-mute-light" />
        )}
      </span>

      <span className="flex flex-col gap-1">
        <span className="text-title-xs font-semibold text-ink">
          {label}
        </span>
        <span className="text-sm font-normal text-mute">{hint}</span>
        {file && (
          <span className="mt-1 text-sm text-mute-light">{file.name}</span>
        )}
      </span>

      <input
        id={inputId}
        type="file"
        hidden
        accept="image/png, image/jpeg, image/jpg"
        onChange={event => {
          const [selected] = Array.from(event.target.files ?? [])
          if (selected) onFileChange(selected)
          event.target.value = ''
        }}
      />
    </label>
  )
}

export default AvatarPicker
