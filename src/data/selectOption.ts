import type { OptionType } from '../types/option'

/**
 * Só as opções que o site usa. As restantes (veículos, corridas, funções de
 * admin, meses, anos…) eram cópias do painel sem importadores.
 */
export const ApplicationStatusOptions: OptionType[] = [
  { value: 'pending', label: 'Pendente' },
  { value: 'approved', label: 'Aprovado' },
  { value: 'rejected', label: 'Rejeitado' }
]
