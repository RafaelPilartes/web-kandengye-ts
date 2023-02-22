import React from 'react'
import { SButton } from './styles'

type ButtonSeeMoreType = {
  value: string
  onClick: () => void
  colorBase: string
  colorSecondary: string
  textColor?: string
  textColorSecond?: string
}

function ButtonSeeMore({
  value,
  onClick,
  colorBase,
  colorSecondary,
  textColor,
  textColorSecond
}: ButtonSeeMoreType) {
  return (
    <SButton
      colorBase={colorBase}
      colorSecondary={colorSecondary}
      textColor={textColor}
      textColorSecond={textColorSecond}
      onClick={onClick}
    >
      <span> {value} </span>
    </SButton>
  )
}

export default ButtonSeeMore
