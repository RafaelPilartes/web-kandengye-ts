// Icons
import { MdOutlineEmail, MdGpsFixed } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { IoCall, IoCallOutline, IoSend } from 'react-icons/io5'

// Themes
import { defaultTheme } from '../../themes/default'

// Styles
import { FooterContainerStyles } from './styles'

// Routas
import { routsNameMain } from '../../data/routsName'

// Images
import imgLogoSemNOme from '../../../public/it_logo_name_light.svg'

function FooterMain() {
  return (
    <>
      <FooterContainerStyles>
        <div className="containerTop">
          <div className="containerInfoTchossy">
            <img src={imgLogoSemNOme} alt="Tchossy" />

            <p>
              Trabalhamos com paixão de enfrentar desafios e criar soluções
              inovadoras.
            </p>

            <div className="containerSocialMedia">
              <span>
                <BsFacebook />
              </span>

              <span>
                <BsInstagram />
              </span>

              <span>
                <BsWhatsapp />
              </span>

              <span>
                <BsTwitter />
              </span>
            </div>
          </div>

          <div className="containerLinks">
            <h3>Links</h3>

            <ul>
              <a href={routsNameMain.about}>Sobre nós</a>
              <a href={routsNameMain.services}>Serviço</a>
              <a href={routsNameMain.becomeDriver}>Tornar-se motorista</a>

              <a href={routsNameMain.contact}>Contacto</a>
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
              <a target="_blank" href="tel:929004006">
                <IoCall /> +244 929 004 006
              </a>
              <a target="_blank" href="mailto:info@kandengue.com">
                <MdOutlineEmail /> info@kandengue.com
              </a>
              <a target="_blank" href="https://goo.gl/maps/1Uvj3cRqNQPEKzoB7">
                <MdGpsFixed /> Luanda, Benfica, Avenida 21 de Janeiro
              </a>
            </ul>
          </div>
        </div>

        <div className="containerBottom">
          <p>Almeida & Menezes @ Todos direitos reservados 2023</p>
        </div>
      </FooterContainerStyles>
    </>
  )
}

export default FooterMain
