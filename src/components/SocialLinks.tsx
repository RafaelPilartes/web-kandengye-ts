import { IconType } from 'react-icons'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

import { SocialNetwork, socialLinks } from '../data/contactInfo'
import { cn } from '../utils/cn'

const icons: Record<SocialNetwork, IconType> = {
  facebook: BsFacebook,
  instagram: BsInstagram,
  whatsapp: BsWhatsapp,
  tiktok: FaTiktok
}

interface SocialLinksProps {
  /**
   * `plain` herda a cor de quem o contém — quem o usa é que decide; `circle`
   * desenha o botão redondo do rodapé.
   */
  variant?: 'plain' | 'circle'
  className?: string
}

export function SocialLinks({ variant = 'plain', className }: SocialLinksProps) {
  return (
    <div className={cn('flex flex-row items-center gap-3', className)}>
      {socialLinks.map(({ network, label, href }) => {
        const Icon = icons[network]

        return (
          <a
            key={network}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={
              variant === 'plain'
                ? 'text-current opacity-80 transition-opacity duration-200 hover:opacity-100'
                : 'flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors duration-200 hover:border-red hover:bg-red hover:text-white'
            }
          >
            <Icon aria-hidden />
          </a>
        )
      })}
    </div>
  )
}

export default SocialLinks
