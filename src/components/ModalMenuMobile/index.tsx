import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuContainer, SLink, SLinkContainer } from './styles'
import { AiFillCar, AiOutlineClose } from 'react-icons/ai'
import { routsNameMain } from '../../data/routsName'
import { FaDownload, FaMotorcycle } from 'react-icons/fa'

interface ModalMenuMobileInterface {
  menuIsVisible: boolean
  setMenuIsVisible: (value: any) => void
}

const ModalMenuMobile: React.FC<ModalMenuMobileInterface> = ({
  menuIsVisible,
  setMenuIsVisible
}): JSX.Element => {
  const menu = [
    {
      label: 'Inicio',
      to: routsNameMain.home
    },
    {
      label: 'Sobre nós',
      to: routsNameMain.about
    },
    {
      label: 'Serviços',
      to: routsNameMain.services
    },
    {
      label: 'Contactos',
      to: routsNameMain.contact
    }
  ]

  const closeNave = () => {
    setMenuIsVisible(false)
  }
  const mapLinks = menu.map((item, index) => (
    <li key={index}>
      <SLink onClick={closeNave} href={item.to as string}>
        {item.label}
      </SLink>
    </li>
  ))

  const closeMenu = () => {
    setMenuIsVisible(false)
  }

  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <MenuContainer isVisible={menuIsVisible}>
      <AiOutlineClose size={45} onClick={closeMenu} />
      <SLinkContainer>
        <ul>
          {mapLinks}
          <button className="btn-background">
            <Link onClick={closeNave} to={routsNameMain.becomeDriver as string}>
              <FaMotorcycle /> Torna-se estafeta
            </Link>
          </button>
          <button className="btn-border">
            <a
              href="https://play.google.com/store/apps/details?id=com.kandengueatrevido.ride&hl=pt"
              target="_blank"
            >
              <FaDownload /> Baixar App
            </a>
          </button>
        </ul>
      </SLinkContainer>
    </MenuContainer>
  )
}

export default ModalMenuMobile
