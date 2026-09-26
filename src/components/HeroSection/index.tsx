import { Fragment } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom'

import { routsNameMain } from '../../data/routsName'

interface HeroSectionProps {
  backgroundImage: string
  title?: string
  /** Degraus do caminho depois de "Início". */
  breadcrumb?: string[]
}

/**
 * Faixa de topo das páginas internas.
 *
 * O véu era preto opaco a 80% e apagava a fotografia por completo. Passou a
 * um gradiente que escurece só o lado do texto, para a imagem continuar a
 * ser uma imagem.
 */
function HeroSection({ backgroundImage, title, breadcrumb = [] }: HeroSectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <img
        src={backgroundImage}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/25"
      />

      <div className="container-page flex flex-col justify-end py-16 md:py-24">
        <nav
          aria-label="Caminho"
          className="flex flex-row flex-wrap items-center gap-2 text-sm text-white/60"
        >
          <Link
            to={routsNameMain.home}
            className="transition-colors hover:text-white"
          >
            Início
          </Link>

          {breadcrumb.map(step => (
            <Fragment key={step}>
              <IoIosArrowForward aria-hidden className="text-white/30" />
              <span className="text-white">{step}</span>
            </Fragment>
          ))}
        </nav>

        <h1 className="mt-4 font-title text-display-sm font-extrabold tracking-tight text-white">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default HeroSection
