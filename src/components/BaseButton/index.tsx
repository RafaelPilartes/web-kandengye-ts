import PropTypes from 'prop-types'
import { BaseBtnContainer } from './styles'
import { BeatLoader } from 'react-spinners'
import { defaultTheme } from '../../themes/default'

type baseButtonType = {
  name: string
  onClickButton?: any
  disabled?: boolean
  isLoading?: boolean
  colorTxt?: string
  colorBg?: string
}

function BaseButton({
  name,
  onClickButton,
  disabled,
  colorTxt,
  colorBg,
  isLoading
}: baseButtonType) {
  return (
    <BaseBtnContainer
      colorTxt={colorTxt}
      colorBg={colorBg}
      onClick={onClickButton}
      disabled={disabled}
    >
      {isLoading ? (
        <>
          <BeatLoader size={10} color={defaultTheme.colors['base-white']} />
        </>
      ) : (
        <span>{name}</span>
      )}
    </BaseBtnContainer>
  )
}

export default BaseButton
