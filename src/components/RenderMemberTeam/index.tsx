import React, { useContext, useState } from 'react'

import { CardContainer } from './styles'

interface RenderMemberTeamInterface {
  photo: string
  name: string
  memberFunction: string
}

const RenderMemberTeam: React.FC<RenderMemberTeamInterface> = ({
  photo,
  name,
  memberFunction
}): JSX.Element => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={photo} alt="" />
      </div>
      <div className="containerRight">
        <h2> {name} </h2>
        <p> {memberFunction} </p>
      </div>
    </CardContainer>
  )
}

export default RenderMemberTeam
