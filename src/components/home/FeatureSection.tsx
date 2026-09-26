import { BsFillCheckCircleFill } from 'react-icons/bs'
import { IoArrowForward } from 'react-icons/io5'

import { cn } from '../../utils/cn'

export interface FeatureBullet {
  /** Título a negrito antes do texto, quando existe. */
  strong?: string
  text: string
}

interface FeatureSectionProps {
  title: string
  paragraphs: string[]
  bullets?: FeatureBullet[]
  image: string
  imageAlt: string
  /** `right` põe a imagem à direita do texto (por omissão); `left` inverte. */
  imageSide?: 'left' | 'right'
  action?: { label: string; href: string }
  className?: string
}

/**
 * Bloco de texto com imagem ao lado — o padrão das secções "estafeta",
 * "parceiro" e "segurança" da página inicial.
 */
export function FeatureSection({
  title,
  paragraphs,
  bullets = [],
  image,
  imageAlt,
  imageSide = 'right',
  action,
  className
}: FeatureSectionProps) {
  return (
    <section className={cn('bg-white', className)}>
      <div
        className={cn(
          'container-page grid items-center gap-12 py-20 md:py-28 lg:gap-20',
          'lg:grid-cols-2'
        )}
      >
        <div className={cn(imageSide === 'left' && 'lg:order-2')}>
          <h2 className="max-w-[18ch] font-title text-display-sm font-extrabold tracking-tight text-ink">
            {title}
          </h2>

          {paragraphs.map(paragraph => (
            <p
              key={paragraph}
              className="mt-5 max-w-[56ch] text-lede text-mute"
            >
              {paragraph}
            </p>
          ))}

          {bullets.length > 0 && (
            <ul className="mt-9 flex flex-col gap-5">
              {bullets.map(bullet => (
                <li key={bullet.text} className="flex gap-3.5">
                  <BsFillCheckCircleFill
                    aria-hidden
                    className="mt-1 shrink-0 text-red"
                  />
                  <span className="max-w-[52ch]">
                    {bullet.strong && (
                      <span className="block font-semibold text-ink">
                        {bullet.strong}
                      </span>
                    )}
                    <span className="text-base leading-relaxed text-mute">
                      {bullet.text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}

          {action && (
            <a
              href={action.href}
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-semibold text-white transition-colors duration-200 hover:bg-red"
            >
              {action.label}
              <IoArrowForward aria-hidden />
            </a>
          )}
        </div>

        <div className={cn(imageSide === 'left' && 'lg:order-1')}>
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default FeatureSection
