import { Link } from 'react-router-dom'
// Icons
import { MdOutlineEmail, MdGpsFixed } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'
import { IoCall, IoCallOutline, IoSend } from 'react-icons/io5'

// Themes
import { defaultTheme } from '../../themes/default'

// Styles
import { FooterContainerStyles } from './styles'

// Routas
import { routsNameMain } from '../../data/routsName'

// Images
import imgLogoSemNome from '../../../public/it_logo.svg'

function FooterMain() {
  return (
    <>
      <FooterContainerStyles>
        <div className="containerTop">
          <div className="containerInfoTchossy">
            <img
              src={imgLogoSemNome}
              alt="Tchossy"
              style={{ maxWidth: '100px' }}
            />

            <p>Kandengue atrevido, chegar atrasado? Duvido!</p>

            <div className="containerSocialMedia">
              <a
                href="https://www.facebook.com/profile.php?id=100068921798475&mibextid=LQQJ4d"
                target="_blank"
              >
                <BsFacebook />
              </a>

              <a
                href="https://instagram.com/kandengue_atrevido_transporte?utm_source=qr&igshid=MThlNWY1MzQwNA=="
                target="_blank"
              >
                <BsInstagram />
              </a>

              <a href="https://wa.me/244938624620" target="_blank">
                <BsWhatsapp />
              </a>

              <a href="">
                <FaTiktok />
              </a>
            </div>
          </div>

          <div className="containerLinks">
            <h3>Links</h3>

            <ul>
              <Link to={routsNameMain.about as string}>Sobre nós</Link>
              <Link to={routsNameMain.services as string}>Serviço</Link>
              <Link to={routsNameMain.becomeDriver as string}>Tornar-se estafeta</Link>

              <Link to={routsNameMain.contact as string}>Contacto</Link>
            </ul>
          </div>

          <div className="containerNewsletter">
            <h3>Newsletter</h3>

            <p>
              Inscreva-se para nossas últimas notícias e artigos. Não vamos
              enviar e-mails de span
            </p>

            <div className="containerSendNewsletter">
              <input type="text" placeholder="Digite o seu email" />
              <button>
                <IoSend />
              </button>
            </div>

            <div className="containerConcordTerms">
              <input type="checkbox" name="" id="" />
              <p>Concordo com todos os termos e políticas da empresa</p>
            </div>
          </div>

          <div className="containerContact">
            <h3>Contacto</h3>

            <ul>
              <a target="_blank" href="tel:938624620">
                <IoCall /> +244 938 624 620
              </a>
              <a target="_blank" href="mailto:info@kandengueatrevido.com">
                <MdOutlineEmail /> info@kandengueatrevido.com
              </a>
              <a target="_blank" href="https://goo.gl/maps/1Uvj3cRqNQPEKzoB7">
                <MdGpsFixed /> Angola, Luanda, Nova Vida, Rua 16
              </a>
            </ul>
          </div>
        </div>

        <div className="containerBottom">
          <p>Almeida & Menezes @ Todos direitos reservados 2023</p>
          <a
            href="https://rafaelpilartes.com/"
            target="_blank"
            style={{ color: '#C5161D', fontWeight: 600 }}
          >
            Desenvolvido por Rafael Pilartes
          </a>
        </div>
      </FooterContainerStyles>
    </>
  )
}

export default FooterMain
