import { useContext, useEffect, useState } from 'react'

// Mui
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'

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
import { ListItemIcon } from '@material-ui/core'
import { FiLogOut } from 'react-icons/fi'

const settings = ['P', 'Account', 'Dashboard', 'Logout']

function HeaderMain() {
  const { menuIsVisible, setMenuIsVisible, user, logoutAccunt } =
    useContext(AppContext)
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }
  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const openMenu = () => {
    setMenuIsVisible(true)
  }

  function logout() {
    logoutAccunt()
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
                <BiPhoneCall /> (+244) 938 624 620
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

            {!user && (
              <>
                <a
                  className="btn-background"
                  href={routsNameMain.login as string}
                >
                  Entrar
                </a>
                <a
                  className="btn-border"
                  href={routsNameMain.register as string}
                >
                  Registrar
                </a>
              </>
            )}
            {user && (
              <Box sx={{ flexGrow: 0 }}>
                <div className="optionContainer">
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Remy Sharp" src={user.photo} />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right'
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem onClick={logout}>
                      <ListItemIcon>
                        <FiLogOut size={20} />
                      </ListItemIcon>
                      Sair
                    </MenuItem>
                  </Menu>
                  <div className="containerBaseInfo">
                    <h4>{` ${user.name}`}</h4>
                    <p>{user.email}</p>
                  </div>
                </div>
              </Box>
            )}
          </div>
        </div>
      </HeaderContainerStyles>
    </>
  )
}

export default HeaderMain
