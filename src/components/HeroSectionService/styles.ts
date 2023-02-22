import styled, { css } from 'styled-components'
import { NavLink } from '../../NavLink'

interface IHero {
  backgroundImage: string
  shadow?: boolean
}

export const HeroContainerStyles = styled.section<IHero>`
  position: relative;
  width: 100%;
  height: 30rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 3;

  ${({ backgroundImage }) =>
    css`
      background-image: url(${backgroundImage});
      background-size: cover;
      background-repeat: no-repeat;
    `}

  /* background-image: url('https://themerange.net/wp/montro/wp-content/uploads/2022/05/1.jpg'); */

  .containerMaxWidth {
    width: 95%;
    max-width: 1390px;
    z-index: 3;
  }

  .infoHero {
    width: 100%;
    max-width: 600px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1.6rem;

    h1 {
      color: #fff;
      font-size: 2.8rem;
      font-family: 'Montserrat', sans-serif;
      z-index: 3;
    }
    p {
      color: #fff;
      font-size: 1.4rem;
      font-family: 'Montserrat', sans-serif;
      z-index: 3;
    }

    .containerBtn {
      z-index: 3;
    }
  }

  .shadow {
    ${({ shadow }) =>
      css`
        display: ${shadow ? 'none' : null};
      `}

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(7, 0, 41, 0.8);
  }
`
