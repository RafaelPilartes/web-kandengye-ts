import React, { useContext, useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { routsNameMain } from '../../data/routsName'
import { servicesType } from '../../models/types/servicesType'
import { defaultTheme } from '../../themes/default'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import { ServiceContainer } from './styles'

function RenderServices({ services }: servicesType) {
  return (
    <ServiceContainer>
      <a
        href={`${routsNameMain.otherPages.team.details as string}${
          services._id
        }/${services.name}`}
      >
        <div className="containerContent">
          <div className="containerImgMember">
            <img src={services.imgUrl} alt="" />

            <div className="shadow"></div>
          </div>

          <div className="containerInfo">
            <div className="content">
              <h2> {services.name} </h2>
              <p> {services.role} </p>
            </div>

            <ButtonSeeMore
              value={'Ver mais projetos'}
              onClick={() => null}
              colorBase={defaultTheme.colors['brand-primary']}
              colorSecondary={defaultTheme.colors['brand-super-dark']}
            />
          </div>
        </div>
      </a>
    </ServiceContainer>
  )
}

export default RenderServices
