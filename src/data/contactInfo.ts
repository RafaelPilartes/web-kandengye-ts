/**
 * Contactos e redes sociais da empresa. Estavam escritos a mao no Header e
 * outra vez no Footer — mudar um numero obrigava a lembrar dos dois sitios.
 */

export const contactInfo = {
  phone: '+244 928 888 745',
  phoneDisplay: '(+244) 928 888 745',
  phoneHref: 'tel:+244928888745',
  email: 'comercial@kandengueatrevido.com',
  emailHref: 'mailto:comercial@kandengueatrevido.com',
  location: 'Angola - Luanda',
  locationHref: 'https://goo.gl/maps/1Uvj3cRqNQPEKzoB7',
} as const

/**
 * As lojas. Sao duas aplicacoes: a do passageiro (`rider`) e a do motorista
 * (`driver`). Quem pede uma corrida quer a primeira; quem se candidata a
 * estafeta quer a segunda.
 */
export const appStores = {
  rider: {
    android:
      'https://play.google.com/store/apps/details?id=com.kandengueatrevido.ride&hl=pt',
    ios: 'https://apps.apple.com/ao/app/kandengue-atrevido/id6759246251'
  },
  driver: {
    android:
      'https://play.google.com/store/apps/details?id=com.kandengueatrevido.pro&hl=pt',
    ios: 'https://apps.apple.com/ao/app/kandengue-pro/id6759248689'
  }
} as const

export type SocialNetwork = 'facebook' | 'instagram' | 'whatsapp' | 'tiktok'

export const socialLinks: { network: SocialNetwork; label: string; href: string }[] = [
  {
    network: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1CnTiFmPFf/'
  },
  {
    network: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/kandengueatrevido_delivery?igsh=M3FucGFraDl3ZjRw'
  },
  {
    network: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/+244928888745'
  },
  {
    network: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@kandenguedelivery?_r=1&_t=ZM-930J4VjCscS'
  }
]
