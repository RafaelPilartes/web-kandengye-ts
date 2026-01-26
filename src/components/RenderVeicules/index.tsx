import React, { memo, useCallback } from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaShareAlt } from 'react-icons/fa'
import { routsNameMain } from '../../data/routsName'
import { veiculesType } from '../../models/types/veiculesType'
import { defaultTheme } from '../../themes/default'
import ButtonSeeMore from '../buttons/ButtonSeeMore'
import { VeiculesContainer } from './styles'

const RenderVeicules = memo(({ veicules }: veiculesType) => {
  const handleClick = useCallback(() => null, [])

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
              <img src={veicules.imgUrl} alt={veicules.name} loading="lazy" />
            </div>

            <p> {veicules.role} </p>

            <ButtonSeeMore
              value={'Agendar esta corrida'}
              onClick={handleClick}
              colorBase={defaultTheme.colors['brand-primary']}
              colorSecondary={defaultTheme.colors['brand-super-dark']}
            />
          </div>
        </div>
      </a>
    </VeiculesContainer>
  )
})

RenderVeicules.displayName = 'RenderVeicules'

export default RenderVeicules
