import React, { useContext, useEffect, useState } from 'react'

import { MenuContainer, SLink, SLinkContainer } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import { routsNameMain } from '../../data/routsName'

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
      label: 'Casa',
      to: routsNameMain.home
    },
    {
      label: 'Sobre',
      to: routsNameMain.about
    },
    {
      label: 'Serviços',
      to: routsNameMain.service
    },
    {
      label: 'Blog',
      to: routsNameMain.blog
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
        <ul>{mapLinks}</ul>
      </SLinkContainer>
    </MenuContainer>
  )
}

export default ModalMenuMobile
