import { TextareaHTMLAttributes, useId } from 'react'

import { cn } from '../../utils/cn'

interface TextAreaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export function TextAreaField({
  label,
  error,
  id,
  className,
  required,
  rows = 5,
  ...rest
}: TextAreaFieldProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId

  return (
    <div className={cn('w-full', className)}>
      <label htmlFor={fieldId} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-base-error">*</span>}
      </label>
      <textarea
        id={fieldId}
        rows={rows}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${fieldId}-hint` : undefined}
        className={cn('field resize-y', error && 'field-error')}
        {...rest}
      />
      {error && (
        <span id={`${fieldId}-hint`} className="field-hint">
          {error}
        </span>
      )}
    </div>
  )
}

export default TextAreaField
