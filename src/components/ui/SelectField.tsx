import { SelectHTMLAttributes, useId } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

import { cn } from '../../utils/cn'

export interface SelectOption {
  label: string
  value?: string
}

interface SelectFieldProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
  placeholder?: string
  error?: string
}

/**
 * Substitui o `Autocomplete` do MUI. As listas deste site sao curtas e
 * fechadas (18 provincias, meia duzia de tipos de servico) — um `select`
 * nativo e mais acessivel, funciona bem no telemovel e nao traz biblioteca.
 */
export function SelectField({
  label,
  options,
  placeholder = 'Seleccione uma opção',
  error,
  id,
  className,
  required,
  ...rest
}: SelectFieldProps) {
  const generatedId = useId()
  const fieldId = id ?? generatedId

  return (
    <div className={cn('w-full', className)}>
      <label htmlFor={fieldId} className="field-label">
        {label}
        {required && <span className="ml-0.5 text-base-error">*</span>}
      </label>

      <div className="relative">
        <select
          id={fieldId}
          required={required}
          aria-invalid={error ? true : undefined}
          className={cn(
            'field appearance-none pr-10',
            error && 'field-error',
            // Sem valor escolhido, o placeholder fica com cor de placeholder.
            'invalid:text-mute-light'
          )}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map(option => (
            <option
              key={option.value ?? option.label}
              value={option.value ?? option.label}
            >
              {option.label}
            </option>
          ))}
        </select>
        <IoIosArrowDown
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-mute-light"
        />
      </div>

      {error && <span className="field-hint">{error}</span>}
    </div>
  )
}

export default SelectField
