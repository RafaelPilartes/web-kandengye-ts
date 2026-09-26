import { useNavigate } from 'react-router-dom'

import Illustration404 from '../components/Illustration404'
import Button from '../components/ui/Button'

function FourOhFour() {
  const navigate = useNavigate()

  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-center bg-ink bg-[radial-gradient(ellipse_at_50%_-10%,rgba(197,22,29,0.45),transparent_65%)]">
      <div className="flex w-full max-w-[724px] flex-col items-center justify-center gap-5 px-4 py-2.5 text-center">
        <Illustration404 />

        <h1 className="font-title text-display-sm font-extrabold text-white">
          Página não encontrada
        </h1>
        <p className="max-w-[46ch] text-lede text-white/60">
          O endereço pode estar errado, ou a página pode ter mudado de sítio.
        </p>

        <Button variant="primary" onClick={() => navigate(-1)}>
          Voltar atrás
        </Button>
      </div>
    </section>
  )
}

export default FourOhFour
