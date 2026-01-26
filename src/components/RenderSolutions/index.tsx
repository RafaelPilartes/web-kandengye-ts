import React, { memo } from 'react'

import { CardContainer } from './styles'

interface RenderServicesInterface {
  imgUrl: string
  title: string
  description: string
  icon: any
}

const RenderSolutions = memo<RenderServicesInterface>(({
  imgUrl,
  title,
  description,
  icon
}) => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={imgUrl} alt={title} loading="lazy" />
        <div className="shadow"></div>
      </div>
      <div className="containerFloat">
        <div className="containerInfo">
          <h2> {title} </h2>
          <p> {description} </p>
        </div>
      </div>
    </CardContainer>
  )
})

RenderSolutions.displayName = 'RenderSolutions'

export default RenderSolutions
