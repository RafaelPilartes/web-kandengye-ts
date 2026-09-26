import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import FooterMain from '../components/Footer'
import HeaderMain from '../components/Header'

function RootLayout() {
  useScrollRestoration()

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderMain />

      {/* `flex-1` mantem o rodape em baixo mesmo em paginas curtas. */}
      <main className="flex-1">
        <Outlet />
      </main>

      <FooterMain />
    </div>
  )
}

/**
 * Leva ao topo a cada mudança de página, e até à âncora quando o endereço
 * traz uma.
 *
 * O React Router não faz nenhuma das duas coisas sozinho: mudar de página
 * mantinha a posição do scroll — só a de contactos é que se corrigia a si
 * própria — e `/#descarregar` não ia a lado nenhum.
 */
function useScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0 })
      return
    }

    /*
     * A âncora pode ainda não existir: as páginas são carregadas com
     * `React.lazy`, e num carregamento a frio de `/#descarregar` o elemento
     * só aparece depois de o pedaço da página chegar. Esperar um tempo fixo
     * acertava umas vezes e falhava outras — por isso procura-se até
     * aparecer, com um tecto de dois segundos.
     */
    const id = hash.slice(1)
    let attempts = 0
    const timer = window.setInterval(() => {
      const target = document.getElementById(id)
      if (target) {
        window.clearInterval(timer)
        target.scrollIntoView({ behavior: 'smooth' })
      } else if (++attempts > 20) {
        window.clearInterval(timer)
      }
    }, 100)

    return () => window.clearInterval(timer)
  }, [pathname, hash])
}

export default RootLayout
