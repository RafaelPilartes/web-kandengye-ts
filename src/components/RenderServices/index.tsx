import React, { useContext, useState } from 'react'
import { servicesType } from '../../models/types/servicesType'

import { CardContainer } from './styles'

interface RenderServicesInterface {
  imgUrl: string
  title: string
  description: string
  icon: any
}

function RenderServices({ services }: servicesType) {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={services.imgUrl} alt="" />
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
}

export default RenderServices
