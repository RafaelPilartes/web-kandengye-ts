import React, { memo } from 'react'

import { CardContainer } from './styles'

interface RenderMemberTeamInterface {
  photo: string
  name: string
  memberFunction: string
}

const RenderMemberTeam = memo<RenderMemberTeamInterface>(({
  photo,
  name,
  memberFunction
}) => {
  return (
    <CardContainer>
      <div className="containerImg">
        <img src={photo} alt={name} loading="lazy" />
      </div>
      <div className="containerRight">
        {/* <h2> {name} </h2> */}
        <p> {memberFunction} </p>
      </div>
    </CardContainer>
  )
})

RenderMemberTeam.displayName = 'RenderMemberTeam'

export default RenderMemberTeam
