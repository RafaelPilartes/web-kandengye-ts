import { useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FaDownload, FaMotorcycle } from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom'

import { routsNameMain } from '../../data/routsName'
import { DOWNLOAD_ANCHOR } from '../Header'
import { cn } from '../../utils/cn'

interface ModalMenuMobileProps {
  menuIsVisible: boolean
  setMenuIsVisible: (value: boolean) => void
}

const menu = [
  { label: 'Início', to: routsNameMain.home },
  { label: 'Sobre nós', to: routsNameMain.about },
  { label: 'Serviços', to: routsNameMain.services },
  { label: 'Contactos', to: routsNameMain.contact }
]

function ModalMenuMobile({
  menuIsVisible,
  setMenuIsVisible
}: ModalMenuMobileProps) {
  const close = () => setMenuIsVisible(false)

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'

    // Sem isto o `overflow: hidden` ficava colado ao body se o componente
    // desmontasse com o menu aberto.
    return () => {
      document.body.style.overflowY = 'auto'
    }
  }, [menuIsVisible])

  useEffect(() => {
    if (!menuIsVisible) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuIsVisible(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuIsVisible, setMenuIsVisible])

  return (
    <section
      aria-hidden={!menuIsVisible}
      className={cn(
        // Era um gradiente de preto a vermelho puro atravessado pelo ecrã
        // inteiro; o texto branco em cima do vermelho saturado não tinha
        // contraste. Agora é o mesmo preto do resto do site, com um halo.
        'fixed inset-0 z-[999] flex flex-col justify-center bg-ink',
        'bg-[radial-gradient(ellipse_at_85%_15%,rgba(197,22,29,0.5),transparent_60%)]',
        'transition-opacity duration-300',
        menuIsVisible
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      )}
    >
      <button
        type="button"
        onClick={close}
        aria-label="Fechar menu"
        tabIndex={menuIsVisible ? 0 : -1}
        className="absolute right-6 top-6 z-[5] p-2 text-white/70 transition-colors hover:text-white"
      >
        <AiOutlineClose aria-hidden size={32} />
      </button>

      <nav className="container-page py-6">
        <ul className="flex flex-col items-start justify-center gap-6">
          {menu.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={close}
                tabIndex={menuIsVisible ? 0 : -1}
                className={({ isActive }) =>
                  cn(
                    'block font-title text-[2rem] font-extrabold transition-colors sm:text-[2.75rem]',
                    isActive ? 'text-red' : 'text-white hover:text-red'
                  )
                }
              >
                {label}
              </NavLink>
            </li>
          ))}

          <li>
            <Link
              to={routsNameMain.becomeDriver}
              onClick={close}
              tabIndex={menuIsVisible ? 0 : -1}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-red-deep"
            >
              <FaMotorcycle aria-hidden /> Tornar-se estafeta
            </Link>
          </li>

          <li>
            <Link
              to={DOWNLOAD_ANCHOR}
              onClick={close}
              tabIndex={menuIsVisible ? 0 : -1}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            >
              <FaDownload aria-hidden /> Descarregar a app
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default ModalMenuMobile
