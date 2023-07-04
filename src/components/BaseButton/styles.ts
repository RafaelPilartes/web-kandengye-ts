import styled, { css } from 'styled-components'

type BaseBtnStyleType = {
  colorTxt?: string
  colorBg?: string
}

export const BaseBtnContainer = styled.button<BaseBtnStyleType>`
  position: relative;
  font-size: 0.9rem;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-black']};
  padding: 0.9rem;

  border: none;
  border-radius: 0.4rem;

  div {
    width: 100%;
    position: relative;
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }

  ${({ colorTxt, colorBg }) =>
    css`
      background-color: ${colorBg
        ? colorBg
        : ({ theme }) => theme.colors['brand-secondary']};
      color: ${colorTxt ? colorTxt : ({ theme }) => theme.colors['base-black']};
    `}

  ::before {
    position: absolute;
    content: '';
    left: 50%;
    right: 50%;
    top: 0;
    width: 3%;
    height: 100%;
    transform: translate(-50%, 0%);
    background-color: transparent;
    border-radius: 0.4rem;
    z-index: 1;
    transition: 0.4s ease;
  }

  :hover::before {
    width: 100%;
    background-color: #000;
  }

  :active::before {
    background-color: #1d1e1d;
  }
`
