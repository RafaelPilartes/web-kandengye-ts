import { ButtonHTMLAttributes, ReactNode } from 'react'

import { cn } from '../../utils/cn'

export type ButtonVariant = 'primary' | 'outline' | 'light' | 'dark' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  /** Ocupa toda a largura do contentor. */
  block?: boolean
  icon?: ReactNode
  /** Ícone à direita do texto — para "Continuar", "Enviar" e afins. */
  iconEnd?: ReactNode
  children: ReactNode
}

/*
 * O efeito de preenchimento a varrer o botão saiu. Era o que restava do
 * desenho antigo e, ao lado de um tipo de letra desta escala, lia-se como
 * ruído. Uma troca de cor limpa diz o mesmo e não disputa a atenção.
 */
const variants: Record<ButtonVariant, string> = {
  primary: 'bg-red text-white hover:bg-red-deep',
  outline: 'border-2 border-ink bg-transparent text-ink hover:bg-ink hover:text-white',
  light: 'bg-white text-ink hover:bg-mute-line',
  dark: 'bg-ink text-white hover:bg-red',
  ghost: 'bg-transparent text-ink hover:text-red'
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-base',
  lg: 'px-8 py-4 text-lede'
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  block = false,
  icon,
  iconEnd,
  children,
  className,
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      aria-busy={isLoading || undefined}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full border-0 font-semibold',
        'transition-colors duration-200',
        'disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        sizes[size],
        block && 'w-full',
        className
      )}
      {...rest}
    >
      {isLoading ? <Spinner /> : icon}
      <span>{children}</span>
      {!isLoading && iconEnd}
    </button>
  )
}

/** Três pontos a pulsar — substitui o `BeatLoader` do react-spinners. */
function Spinner() {
  return (
    <span className="flex items-center gap-1" role="status" aria-label="A carregar">
      {[0, 150, 300].map(delay => (
        <span
          key={delay}
          style={{ animationDelay: `${delay}ms` }}
          className="h-1.5 w-1.5 animate-bounce rounded-full bg-current"
        />
      ))}
    </span>
  )
}

export default Button
