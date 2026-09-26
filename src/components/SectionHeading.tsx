import { cn } from '../utils/cn'

interface SectionHeadingProps {
  /**
   * Rótulo curto acima do título. Use-o só quando diz alguma coisa que o
   * título não diz — não como enfeite.
   */
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'dark',
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex w-full flex-col',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            'mb-3 text-sm font-semibold',
            tone === 'light' ? 'text-red' : 'text-red'
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          'font-title text-display-sm font-extrabold tracking-tight',
          tone === 'light' ? 'text-white' : 'text-ink'
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-5 max-w-[62ch] text-lede',
            align === 'center' && 'mx-auto',
            tone === 'light' ? 'text-white/65' : 'text-mute'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
