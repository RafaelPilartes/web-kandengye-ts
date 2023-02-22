import styled, { css } from 'styled-components'

interface IBtn {
  colorBase: string
  colorSecondary: string
  textColor?: string
  textColorSecond?: string
}

export const SButton = styled.button<IBtn>`
  position: relative;
  padding: 0.8rem 1.4rem;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.6s ease;

  ::before {
    position: absolute;
    content: '';
    right: 0%;
    bottom: 0;
    width: 100%;
    height: 0;
    z-index: 1;
    transition: 0.4s ease;

    ${({ colorSecondary }) =>
      css`
        background-color: ${colorSecondary};
      `}
  }

  :hover::before {
    height: 100%;
  }

  ${({ colorBase }) =>
    css`
      background-color: ${colorBase};
    `}

  span {
    position: relative;
    padding: 0.2rem 0.4rem;
    ${({ textColor }) =>
      css`
        color: ${textColor ? textColor : '#fff '};
      `}
    font-size: 0.8rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }

  :hover {
    span {
      ${({ textColorSecond }) =>
        css`
          color: ${textColorSecond ? textColorSecond : '#fff '};
        `}
    }
  }
`
