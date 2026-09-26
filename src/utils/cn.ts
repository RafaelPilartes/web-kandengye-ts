/**
 * Junta classes condicionais numa so string. Ignora `false`, `null` e
 * `undefined`, para que `cond && 'classe'` possa ser usado directamente.
 *
 * Nao resolve conflitos entre utilitarios Tailwind (nao e o `tailwind-merge`):
 * quando duas classes competem, a ultima declarada no CSS e que ganha, nao a
 * ultima nesta lista. Onde isso importar, passa-se a classe certa de origem.
 */
export type ClassValue = string | false | null | undefined

export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(' ')
}
