import { useNavigate } from 'react-router-dom'
import Illustration404 from '../components/Illustration404'
import ButtonBase from '../components/buttons/ButtonBase'
import { NotFoundContainer } from '../styles/pages/404'
import { defaultTheme } from '../themes/default'

function FourOhFour() {
  const router = useNavigate()

  async function goBack() {
    router(-1)
  }

  return (
    <NotFoundContainer>
      <div className="containerIllustration404">
        <Illustration404 />

        <h1>oops!</h1>
        <p>Esta página que você solicitou não pôde ser encontrada</p>

        <ButtonBase
          value={'Voltar para o Inicio'}
          onClick={goBack}
          colorBase={defaultTheme.colors['brand-primary']}
          colorSecondary={defaultTheme.colors['brand-primary-dark']}
          textColor={defaultTheme.colors['base-white']}
        />
      </div>
    </NotFoundContainer>
  )
}

export default FourOhFour
