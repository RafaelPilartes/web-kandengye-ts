import React from 'react'
import { SButton } from './styles'

type ButtonBaseType = {
  value: string
  onClick: () => void
  colorBase: string
  colorSecondary: string
  textColor?: string
  textColorSecond?: string
}

function ButtonBase({
  value,
  onClick,
  colorBase,
  colorSecondary,
  textColor,
  textColorSecond
}: ButtonBaseType) {
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

export default ButtonBase
