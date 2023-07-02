import { useContext, useEffect, useState } from 'react'

// Moludos de Icons
import { MdEmail, MdAccessTimeFilled } from 'react-icons/md'
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { BiMenuAltLeft, BiPhoneCall, BiSearchAlt } from 'react-icons/bi'
import { FaDownload } from 'react-icons/fa'

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
import { AiFillCar } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

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
              <a href="tel:929004006">
                <BiPhoneCall /> (+244) 929 004 006
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
            <a href={routsNameMain.home}>Inicio</a>
            <a href={routsNameMain.about}>Sobre nós</a>
            <a href={routsNameMain.services}>Serviços</a>
            <a href={routsNameMain.contact}>Contactos</a>

            <div className="dropdown">
              <span className="dropbtn">
                Candidatar-se
                <IoIosArrowDown />
              </span>
              <div className="dropdown-content">
                <SLink href={routsNameMain.becomeDriver as string}>
                  Para Motorista
                </SLink>
                <SLink href={routsNameMain.workWithUs as string}>
                  Serviços Geral
                </SLink>
              </div>
            </div>

            <a href={''} className="btn btn-border">
              <span>
                <FaDownload /> Baixar App
              </span>
            </a>
          </nav>

          <div className="containerRight">
            <span className="containerIconMenu">
              <BiMenuAltLeft className="iconsMenu" onClick={openMenu} />
            </span>

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
