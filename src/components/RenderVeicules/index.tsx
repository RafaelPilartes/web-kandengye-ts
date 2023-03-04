import React, { useContext, useState } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { routsNameMain } from '../../data/routsName'
import { veiculesType } from '../../models/types/veiculesType'
import { defaultTheme } from '../../themes/default'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import { VeiculesContainer } from './styles'

function RenderVeicules({ veicules }: veiculesType) {
  return (
    <VeiculesContainer>
      <a
        href={`${routsNameMain.services as string}${veicules._id}/${
          veicules.name
        }`}
      >
        <div className="containerContent">
          <div className="containerInfo">
            <h2> {veicules.name} </h2>

            <div className="containerImgVeicules">
              <img src={veicules.imgUrl} alt="" />
            </div>

            <p> {veicules.role} </p>

            <ButtonSeeMore
              value={'Agendar esta corrida'}
              onClick={() => null}
              colorBase={defaultTheme.colors['brand-primary']}
              colorSecondary={defaultTheme.colors['brand-super-dark']}
            />
          </div>
        </div>
      </a>
    </VeiculesContainer>
  )
}

export default RenderVeicules
