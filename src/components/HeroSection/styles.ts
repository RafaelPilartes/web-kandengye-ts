import styled, { css } from 'styled-components'

interface IHero {
  backgroundImage: string
}

export const HeroContainerStyles = styled.section<IHero>`
  position: relative;
  width: 100%;
  height: 18rem;

  ${({ backgroundImage }) =>
    css`
      background-image: url(${backgroundImage});
    `}

  /* background-image: url('https://themerange.net/wp/montro/wp-content/uploads/2022/05/1.jpg'); */

  .infoHero {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.8rem;

    .path,
    a {
      color: #fff;
      font-size: 0.9rem;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;
      z-index: 3;
    }

    h1 {
      color: #fff;
      font-size: 2.6rem;
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      z-index: 3;
    }
  }

  .shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(41, 0, 0, 0.8);
  }
`
