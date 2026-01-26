import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaTiktok } from 'react-icons/fa'

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
import { ListItemIcon } from '@mui/material'
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
              <a target="_blank" href="tel:+244928888745">
                <BiPhoneCall /> (+244) 928 888 745
              </a>
            </li>
            <li> | </li>
            <li>
              <a target="_blank" href="">
                <IoLocation /> Angola - Luanda
              </a>
            </li>
            <li> | </li>
            <li>
              <a target="_blank" href="mailto:comercial@kandengueatrevido.ao">
                <MdEmail /> comercial@kandengueatrevido.ao
              </a>
            </li>
          </ul>

          <div className="containerRight">
            Siga-nos:
            <a
              href="https://www.facebook.com/share/1CnTiFmPFf/"
              target="_blank"
              style={{ color: 'white' }}
            >
              <BsFacebook />
            </a>
            <a
              href="https://www.instagram.com/kandengueatrevido_delivery?igsh=M3FucGFraDl3ZjRw"
              target="_blank"
              style={{ color: 'white' }}
            >
              <BsInstagram />
            </a>
            <a
              href="https://wa.me/+244928888745"
              target="_blank"
              style={{ color: 'white' }}
            >
              <BsWhatsapp />
            </a>
            <a href="https://www.tiktok.com/@kandenguedelivery?_r=1&_t=ZM-930J4VjCscS" target="_blank" style={{ color: 'white' }}>
              <FaTiktok />
            </a>
          </div>
        </div>

        <div className="containerButton">
          <Link to="/" className="containerLogo">
            <img src={imgLogoSemNOme} alt="Tchossy" />
          </Link>

          <nav className="containerCenter">
            <Link to={routsNameMain.home as string}>Inicio</Link>
            <Link to={routsNameMain.about as string}>Sobre nós</Link>
            <Link to={routsNameMain.services as string}>Serviços</Link>
            <Link to={routsNameMain.contact as string}>Contactos</Link>

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

            <a
              href="https://play.google.com/store/apps/details?id=com.kandengueatrevido.ride&hl=pt"
              target="_blank"
              className="btn btn-border"
            >
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
                <Link
                  className="btn-background"
                  to={routsNameMain.login as string}
                >
                  Entrar
                </Link>
                <Link
                  className="btn-border"
                  to={routsNameMain.register as string}
                >
                  Registrar
                </Link>
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
                    <h4>{` ${user.first_name} ${user.last_name}`}</h4>
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
