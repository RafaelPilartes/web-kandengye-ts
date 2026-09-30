import { ApplicationStatusOptions } from '../data/selectOption'
import type { ApplicationStatus } from '../types/enum'

/**
 * O site só rotula um estado: o da candidatura, na exportação. Os outros
 * vinte rótulos que aqui viviam eram cópias do painel sem nenhum uso.
 */
export const getApplicationStatusLabel = (value: ApplicationStatus): string => {
  const found = ApplicationStatusOptions.find(option => option.value === value)
  return found ? found.label : value
}
