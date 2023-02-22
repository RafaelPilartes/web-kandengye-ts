import { useContext, useEffect, useState } from 'react'

// Moludos de Icons
import { MdEmail, MdAccessTimeFilled } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BiMenuAltLeft, BiPhoneCall, BiSearchAlt } from 'react-icons/bi'

// Toastify
import { ToastContainer, toast } from 'react-toastify'

// Material UI
import 'react-toastify/dist/ReactToastify.css'

// Themes
import { defaultTheme } from '../../themes/default'

// Styles
import { HeaderContainerStyles, SLink, SLinkContainer } from './styles'

// Routes
import { routsNameMain } from '../../data/routsName'

// Context
import { AppContext } from '../../provider/AppProvider'

// Modals
import ModalMenuMobile from '../ModalMenuMobile'

// Images
import imgLogoSemNOme from '../../../public/it_logo_name.svg'
import { GiGps } from 'react-icons/gi'
import { IoLocation } from 'react-icons/io5'

function HeaderMain() {
  const { menuIsVisible, setMenuIsVisible } = useContext(AppContext)

  const openMenu = () => {
    setMenuIsVisible(true)
  }

  useEffect(() => {}, [])

  return (
    <>
      <ToastContainer />

      <ModalMenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

      <HeaderContainerStyles>
        <div className="containerTop">
          <ul className="containerLeft">
            <li>
              <a href="">
                <BiPhoneCall /> (+244) 923 414 621
              </a>
            </li>
            <li> | </li>
            <li>
              <a href="">
                <IoLocation /> Angola, Luanda, Benfica, Av. 21 de Janeiro
              </a>
            </li>
            <li> | </li>
            <li>
              <a href="">
                <MdEmail /> info@kandengue.com
              </a>
            </li>
          </ul>

          <div className="containerRight">
            Siga-nos:
            <BsFacebook />
            <BsInstagram />
            <BsWhatsapp />
            <BsTwitter />
          </div>
        </div>

        <div className="containerButton">
          <a href="/" className="containerLogo">
            <img src={imgLogoSemNOme} alt="Tchossy" />
          </a>

          <nav className="containerCenter">
            <a href="">Inicio</a>
            <a href="">Passageiro</a>
            <a href="">Condutor</a>
            <a href="">Termos & Condições</a>

            <button className="btn-background">
              <a href="">Tornar-se motorista</a>
            </button>
            <button className="btn-border">
              <a href="">Baixar App</a>
            </button>
          </nav>

          <div className="containerRight">
            <a className="btn-background" href="">
              Entrar
            </a>
            <a className="btn-border" href="">
              Registrar
            </a>
          </div>
        </div>
      </HeaderContainerStyles>
    </>
  )
}

export default HeaderMain
