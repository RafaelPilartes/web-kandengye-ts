import { appStores } from '../data/contactInfo'
import { cn } from '../utils/cn'

import appStoreBadge from '/images/download/App-Store.png'
import playStoreBadge from '/images/download/google.png'

interface StoreBadgesProps {
  /** `rider` é a app de quem pede a corrida; `driver` é a do estafeta. */
  app?: 'rider' | 'driver'
  className?: string
}

/**
 * As duas lojas, lado a lado. A app deixou de ser só Android — o botão da
 * App Store era uma imagem com `href=""` que recarregava a página.
 */
export function StoreBadges({ app = 'rider', className }: StoreBadgesProps) {
  const store = appStores[app]
  const label = app === 'rider' ? 'Kandengue Atrevido' : 'Kandengue Pro'

  return (
    <div className={cn('flex flex-wrap items-center gap-4', className)}>
      <a
        href={store.android}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} na Google Play`}
        className="transition-opacity duration-200 hover:opacity-80"
      >
        <img
          src={playStoreBadge}
          alt=""
          loading="lazy"
          className="h-[3.25rem] w-auto"
        />
      </a>

      <a
        href={store.ios}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} na App Store`}
        className="transition-opacity duration-200 hover:opacity-80"
      >
        <img
          src={appStoreBadge}
          alt=""
          loading="lazy"
          className="h-[3.25rem] w-auto"
        />
      </a>
    </div>
  )
}

export default StoreBadges
