import { useEffect, useRef, useState } from 'react'
import { BiMenuAltLeft } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdPhoneInTalk } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

import { contactInfo } from '../../data/contactInfo'
import { routsNameMain } from '../../data/routsName'
import { cn } from '../../utils/cn'
import ModalMenuMobile from '../ModalMenuMobile'
import SocialLinks from '../SocialLinks'

import logoWithName from '/it_logo_name.svg'

const mainLinks = [
  { label: 'Início', to: routsNameMain.home },
  { label: 'Sobre nós', to: routsNameMain.about },
  { label: 'Serviços', to: routsNameMain.services },
  { label: 'Contactos', to: routsNameMain.contact }
]

const applyLinks = [
  {
    label: 'Ser estafeta',
    description: 'Conduzir e ganhar o seu kumbu',
    to: routsNameMain.becomeDriver
  },
  {
    label: 'Trabalhar connosco',
    description: 'Vagas nas áreas de suporte',
    to: routsNameMain.workWithUs
  }
]

// A app existe nas duas lojas, por isso o botão do cabeçalho leva à secção
// que mostra as duas, em vez de escolher uma por quem está a ver.
export const DOWNLOAD_ANCHOR = '/#descarregar'

function HeaderMain() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  // A faixa de contactos recolhe assim que a pagina sai do topo: devolve
  // altura ao conteudo sem tirar o acesso ao telefone, que fica na barra.
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <ModalMenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <header className="sticky top-0 z-[99] w-full bg-white">
        {/*
          Faixa de contactos. Antes carregava telefone, morada e e-mail — a
          morada e o e-mail repetem-se no rodape e nao se clicam aqui. Fica
          so o que se usa: ligar, e seguir.
        */}
        <div
          className={cn(
            'hidden overflow-hidden bg-ink transition-[height] duration-300 lg:block',
            isScrolled ? 'h-0' : 'h-11'
          )}
        >
          <div className="container-page flex h-11 items-center justify-between">
            <a
              href={contactInfo.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              <MdPhoneInTalk aria-hidden className="text-red" />
              {contactInfo.phoneDisplay}
            </a>

            <div className="flex items-center gap-4">
              <span className="text-sm text-white/50">Siga-nos</span>
              <SocialLinks className="gap-3.5 text-white/70" />
            </div>
          </div>
        </div>

        <div className="border-b border-mute-line">
          <div className="container-page flex items-center justify-between gap-6 py-4">
            <Link
              to={routsNameMain.home}
              className="shrink-0"
              aria-label="Kandengue Atrevido — início"
            >
              <img
                src={logoWithName}
                alt="Kandengue Atrevido"
                className="h-10 w-auto sm:h-[3.25rem]"
              />
            </Link>

            <nav className="hidden items-center gap-8 xl:flex">
              {mainLinks.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === routsNameMain.home}
                  className={({ isActive }) =>
                    cn(
                      // A marca da pagina activa assenta na aresta inferior do
                      // header, como um marcador de percurso.
                      'relative py-6 text-base font-medium transition-colors',
                      'after:absolute after:inset-x-0 after:-bottom-px after:h-[3px] after:bg-red',
                      'after:origin-left after:scale-x-0 after:transition-transform after:duration-200',
                      'hover:text-red hover:after:scale-x-100',
                      isActive ? 'text-red after:scale-x-100' : 'text-ink'
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}

              <ApplyDropdown />
            </nav>

            <div className="flex items-center gap-3">
              <Link
                to={DOWNLOAD_ANCHOR}
                className="hidden rounded-full bg-red px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-red-deep sm:block"
              >
                Descarregar a app
              </Link>

              <button
                type="button"
                onClick={() => setMenuIsVisible(true)}
                aria-label="Abrir menu"
                className="-mr-2 p-2 text-ink transition-colors hover:text-red xl:hidden"
              >
                <BiMenuAltLeft aria-hidden size={34} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

/**
 * Menu "Candidatar-se". Abre no hover com rato e no clique com teclado ou
 * toque. Cada opção diz o que é, porque "Para Motorista" e "Serviços Geral"
 * não distinguiam nada para quem chega de fora.
 */
function ApplyDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen(open => !open)}
        className={cn(
          'flex items-center gap-2 py-6 text-base font-medium transition-colors',
          isOpen ? 'text-red' : 'text-ink hover:text-red'
        )}
      >
        Candidatar-se
        <IoIosArrowDown
          aria-hidden
          className={cn('text-sm transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>

      <div
        className={cn(
          'absolute left-0 top-full w-[19rem] overflow-hidden rounded-2xl bg-white shadow-dropdown',
          'ring-1 ring-mute-line transition-all duration-200',
          isOpen
            ? 'visible translate-y-0 opacity-100'
            : 'invisible -translate-y-2 opacity-0'
        )}
      >
        {applyLinks.map(({ label, description, to }) => (
          <Link
            key={to}
            to={to}
            onClick={() => setIsOpen(false)}
            className="group block border-b border-mute-line px-5 py-4 transition-colors last:border-b-0 hover:bg-red-wash"
          >
            <span className="block font-semibold text-ink transition-colors group-hover:text-red">
              {label}
            </span>
            <span className="mt-0.5 block text-sm text-mute">{description}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HeaderMain
