import { useId } from 'react'

import { cn } from '../../utils/cn'

interface RadioOption {
  label: string
  value: string
}

interface RadioGroupFieldProps {
  label: string
  name: string
  options: RadioOption[]
  value?: string
  onChange: (value: string) => void
  required?: boolean
  className?: string
}

export function RadioGroupField({
  label,
  name,
  options,
  value,
  onChange,
  required,
  className
}: RadioGroupFieldProps) {
  const groupId = useId()

  return (
    <fieldset className={cn('w-full', className)} aria-labelledby={groupId}>
      <legend id={groupId} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-base-error">*</span>}
      </legend>

      <div className="flex flex-wrap items-center gap-6">
        {options.map(option => (
          <label
            key={option.value}
            className="flex cursor-pointer items-center gap-2 text-base text-ink"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              required={required}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 cursor-pointer accent-red"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

export default RadioGroupField
