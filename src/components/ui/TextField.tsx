import { InputHTMLAttributes, ReactNode, useId } from 'react'

import { cn } from '../../utils/cn'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  /** Mensagem de erro. Presente => o campo fica marcado e anunciado como invalido. */
  error?: string
  hint?: string
  icon?: ReactNode
}

export function TextField({
  label,
  error,
  hint,
  icon,
  id,
  className,
  required,
  ...rest
}: TextFieldProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId
  const describedBy = error || hint ? `${fieldId}-hint` : undefined

  return (
    <div className={cn('w-full', className)}>
      <label htmlFor={fieldId} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-base-error">*</span>}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-mute-light">
            {icon}
          </span>
        )}
        <input
          id={fieldId}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn('field', !!icon && 'pl-10', error && 'field-error')}
          {...rest}
        />
      </div>

      {(error || hint) && (
        <span
          id={describedBy}
          className={cn('field-hint', !error && 'text-mute-light')}
        >
          {error ?? hint}
        </span>
      )}
    </div>
  )
}

export default TextField
