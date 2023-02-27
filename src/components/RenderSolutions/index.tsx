import React, { useContext, useState } from 'react'

import { CardContainer } from './styles'

interface RenderServicesInterface {
  imgUrl: string
  title: string
  description: string
  icon: any
}

const RenderServices: React.FC<RenderServicesInterface> = ({
  imgUrl,
  title,
  description,
  icon
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={imgUrl} alt="" />
        <div className="shadow"></div>
      </div>
      <div className="containerFloat">
        <span>{icon}</span>
        <div className="containerInfo">
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
      </div>
    </CardContainer>
  )
}

export default RenderServices
