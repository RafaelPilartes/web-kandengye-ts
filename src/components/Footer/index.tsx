import { FormEvent, useState } from 'react'
import { IoArrowForward, IoCall } from 'react-icons/io5'
import { MdGpsFixed, MdOutlineEmail } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { contactInfo } from '../../data/contactInfo'
import { routsNameMain } from '../../data/routsName'
import { showToast } from '../../utils/toasts'
import SocialLinks from '../SocialLinks'

import logo from '/it_logo.svg'

const footerLinks = [
  { label: 'Sobre nós', to: routsNameMain.about },
  { label: 'Serviços', to: routsNameMain.services },
  { label: 'Ser estafeta', to: routsNameMain.becomeDriver },
  { label: 'Trabalhar connosco', to: routsNameMain.workWithUs },
  { label: 'Contactos', to: routsNameMain.contact },
  { label: 'Privacidade', to: routsNameMain.privacy }
]

const columnTitle = 'mb-5 text-sm font-semibold text-white'

const footerLink =
  'text-base text-white/60 transition-colors duration-200 hover:text-red'

function FooterMain() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-page">
        {/*
          O slogan da casa. Rima, é o que a empresa promete, e estava a 14px
          em cinzento ao lado do logótipo. Agora é a primeira coisa que se lê
          aqui — é o único sítio do rodapé onde se levanta a voz.
        */}
        <div className="border-b border-ink-line py-16 md:py-20">
          <p className="font-title font-extrabold leading-[0.95] tracking-tight text-white">
            {/*
              A rima é uma pergunta e a resposta. A hierarquia é que marca
              isso — a resposta vem maior — em vez de pintar uma palavra de
              vermelho, que seria decoração a fingir de estrutura.
            */}
            <span className="block text-2xl text-white/55 sm:text-3xl">
              Chegar atrasado?
            </span>
            <span className="mt-1 block text-display-sm">Duvido.</span>
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            {/*
              Sem os badges das lojas: a faixa vermelha logo acima já os
              mostra, e repeti-los aqui era pedir a mesma coisa duas vezes
              seguidas.
            */}
            <Link
              to={routsNameMain.becomeDriver}
              className="inline-flex items-center gap-2 rounded-full bg-red px-7 py-3.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-red-deep"
            >
              Tornar-se estafeta
              <IoArrowForward aria-hidden />
            </Link>

            <Link
              to={routsNameMain.contact}
              className="text-base font-semibold text-white underline decoration-red decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-red"
            >
              Ou falar connosco
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 lg:grid-cols-12">
          <div className="col-span-2 lg:col-span-4">
            {/*
              A marca quadrada, e não o logótipo com o nome: o
              `it_logo_name_light.svg` é byte a byte igual ao normal — a
              variante clara nunca chegou a ser feita — e o texto dele é um
              raster escuro, que desaparecia sobre este fundo.
            */}
            <img src={logo} alt="Kandengue Atrevido" className="h-14 w-auto" />
            <p className="mt-5 max-w-[34ch] text-base leading-relaxed text-white/60">
              Moto-táxi e entregas em Luanda, com acompanhamento da corrida do
              início ao fim.
            </p>
            <SocialLinks variant="circle" className="mt-7 gap-3" />
          </div>

          <nav className="lg:col-span-3 lg:col-start-6">
            <h2 className={columnTitle}>Navegar</h2>
            <ul className="flex flex-col gap-3">
              {footerLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className={footerLink}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className={columnTitle}>Falar connosco</h2>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href={contactInfo.phoneHref}
                  className={`${footerLink} flex items-center gap-3`}
                >
                  <IoCall aria-hidden className="shrink-0 text-red" />
                  {contactInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.emailHref}
                  className={`${footerLink} flex items-center gap-3`}
                >
                  <MdOutlineEmail aria-hidden className="shrink-0 text-red" />
                  <span className="break-all">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={contactInfo.locationHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${footerLink} flex items-center gap-3`}
                >
                  <MdGpsFixed aria-hidden className="shrink-0 text-red" />
                  {contactInfo.location}
                </a>
              </li>
            </ul>

            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-7 text-sm text-white/40 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Kandengue Atrevido. Todos os direitos
            reservados.
          </p>
          <a
            href="https://rafaelpilartes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-white"
          >
            Desenvolvido por Rafael Pilartes
          </a>
        </div>
      </div>
    </footer>
  )
}

/**
 * Inscrição na newsletter. Os campos eram decorativos — não tinham estado
 * nem submissão. Continua por ligar a um destino real (`docs/progress.md`).
 */
function NewsletterForm() {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    showToast('info', 'Inscrição registada. Entraremos em contacto em breve.')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      <label
        htmlFor="newsletter-email"
        className="mb-3 block text-sm font-semibold text-white"
      >
        Receber novidades
      </label>

      <div className="flex items-stretch overflow-hidden rounded-full bg-white/10 focus-within:ring-2 focus-within:ring-red">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="O seu e-mail"
          className="w-full min-w-0 border-0 bg-transparent px-5 py-3 text-base text-white placeholder:text-white/40 focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Inscrever na newsletter"
          className="flex shrink-0 items-center justify-center bg-red px-5 text-white transition-colors duration-200 hover:bg-red-deep"
        >
          <IoArrowForward aria-hidden />
        </button>
      </div>
    </form>
  )
}

export default FooterMain
