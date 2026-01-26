import React, { memo } from 'react'
import { servicesType } from '../../models/types/servicesType'

import { CardContainer } from './styles'

interface RenderServicesInterface {
  imgUrl: string
  title: string
  description: string
  icon: any
}

const RenderServices = memo(({ services }: servicesType) => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={services.imgUrl} alt={services.name} loading="lazy" />
        <div className="shadow"></div>
      </div>
      <div className="containerFloat">
        <div className="containerInfo">
          <h2> {services.name} </h2>
          <p> {services.role} </p>
        </div>
      </div>
    </CardContainer>
  )
})

RenderServices.displayName = 'RenderServices'

export default RenderServices
