import styled from 'styled-components'

export const ContainerHome = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .whatsappButton {
    width: 68px;
    height: 68px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100px;
    background-color: rgb(5, 212, 5);

    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 999;

    animation: btn-whatsapp 2.6s ease infinite;

    transition: 1.6s;

    span {
      font-size: 79px;
      color: #fff;
    }

    :hover {
      transform: scale(1.08);
      animation: btn-whatsapp none;
    }
  }

  @keyframes btn-whatsapp {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.06);
    }
    100% {
      transform: scale(1);
    }
  }

  .containerSwiper {
    /* height: calc(100vh - 6.6rem); */
  }

  .swiper {
    width: 100vw;
    height: 100%;

    overflow: hidden;
  }
  .swiper-slide {
    position: relative;
    text-align: center;
    font-size: 18px;
    background: #fff;
    overflow: hidden;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    .description {
      position: absolute;
      left: 50px;

      max-width: 600px;

      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 1.4rem;

      color: ${({ theme }) => theme.colors['base-white']};
      text-align: justify;

      z-index: 10;

      span {
      }
      h1 {
        font-size: 3.2rem;
        font-weight: 800;
      }
      button {
        border: none;
        border-radius: 0.4rem;

        transform: skew(-20deg);

        padding: 1rem 2rem;
        font-size: 1rem;
        font-weight: 500;

        background-color: ${({ theme }) => theme.colors['brand-primary']};

        a {
          position: relative;
          padding: -0.2rem 0;

          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1rem;
          font-weight: 500;

          display: inline-block;
          transform: skew(20deg);
        }
      }
    }

    .shadow {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #00000073;
    }
  }
  .swiper-slide img {
    /* position: absolute; */
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .containerContent {
      width: 85%;
      max-width: 1390px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.2rem;

      @media (max-width: 1349px) {
        width: 90%;
      }
    }
    .containerRow {
      width: 100%;

      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      gap: 4rem 1.2rem;

      padding: 1.6rem 0;

      @media (max-width: 1254px) {
        gap: 8rem 2rem;
        /* display: none; */
      }
    }

    .containerTitleSection {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.4rem;

      h4 {
        position: relative;

        font-size: 1rem;
        color: ${({ theme }) => theme.colors['brand-primary']};

        padding-left: 2.6rem;
        ::before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          margin: auto 0;

          height: 0.16rem;
          width: 2rem;
          background-color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }
      h1 {
        font-size: 2.8rem;
        color: ${({ theme }) => theme.colors['base-title']};
      }
    }
    .containerHeader {
      width: 100%;

      display: flex;
      justify-content: space-between;
      flex-direction: row;

      .containerLeft {
        width: 50%;
      }

      .containerRight {
        width: 45%;

        p {
          font-size: 0.9rem;
          font-weight: 400;
          color: ${({ theme }) => theme.colors['base-text']};
          line-height: 2rem;
        }
      }

      @media (max-width: 922px) {
        flex-direction: column;
        gap: 2rem;

        .containerLeft {
          width: 100%;
        }

        .containerRight {
          width: 100%;
        }
      }
    }
  }

  .aboutUs {
    .containerAboutUs {
      position: relative;

      width: 100%;
      margin: 10rem 0;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .contentLeft {
        position: relative;
        width: 50%;
        padding: 0 1.4rem 0 0;

        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;

        .containerImg1 {
          position: relative;
          display: block;

          width: 90%;
          max-height: 26rem;

          object-fit: cover;
          overflow: hidden;

          img {
            vertical-align: middle;
            display: inline-block;
          }
        }

        .containerImg {
          position: absolute;
          bottom: 0;
          left: -2rem;

          border: 8px solid #fff;
          filter: drop-shadow(0px 8px 31px rgba(0, 0, 0, 0.15));

          max-height: 20rem;

          object-fit: cover;
          overflow: hidden;

          img {
            vertical-align: middle;
            display: inline-block;
          }
        }
      }

      .contentRight {
        width: 50%;

        display: flex;
        flex-direction: column;
        gap: 2rem;

        p {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors['base-text']};
          font-weight: 400;
          line-height: 2rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          margin-bottom: 1.6rem;

          li {
            font-size: 0.96rem;
            color: ${({ theme }) => theme.colors['base-text']};
            font-weight: 500;

            display: flex;
            flex-direction: row;
            gap: 0.6rem;

            svg {
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }
      }
    }

    @media (max-width: 1082px) {
      .containerAboutUs {
        flex-direction: column;

        .contentLeft {
          width: 100%;

          padding-bottom: 8rem;
          margin-bottom: 2rem;
        }
        .contentRight {
          width: 100%;
        }
      }
    }

    @media (max-width: 600px) {
      .containerAboutUs {
        .contentLeft {
          margin-bottom: 0rem;
          gap: 1rem;

          .containerImagesBottom {
            position: relative;
            right: 0rem;

            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;

            .containerImg {
              position: relative;
              display: block;

              width: 100%;
              max-height: 26rem;

              object-fit: cover;
              overflow: hidden;

              img {
                vertical-align: middle;
                display: inline-block;
              }
            }
          }
        }
      }
    }
  }

  .ourClients {
    width: 100%;
    margin: 8rem 0 0rem 0;

    .containerClientsRow {
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-top: 2rem;
      padding: 4rem 0rem 0rem 0rem;
      justify-content: center;
      overflow: hidden;

      .alice-carousel__next-btn-item {
        display: none;
      }
      .alice-carousel__prev-btn-item {
        display: none;
      }

      .clients {
        position: relative;
        display: block;

        max-width: 14rem;

        object-fit: cover;
        overflow: hidden;

        transition: 0.4s ease;

        img {
          width: 100%;
          vertical-align: middle;
          display: inline-block;
          pointer-events: none;
        }

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .section1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 2.6rem;

    padding: 2rem 1.4rem;

    @media only screen and (max-width: 1077px) {
      flex-direction: column-reverse;
      img {
        width: 100%;
      }
    }

    .descriptionSection {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      max-width: 700px;

      h1 {
        color: #0a2338;
        font-size: 2.8rem;
        font-weight: 700;

        strong {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      .contentDescriptions {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        p {
          font-size: 1.06rem;
          font-weight: 500;
          line-height: 1.8rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          margin-bottom: 1.6rem;

          li {
            font-size: 0.96rem;
            color: ${({ theme }) => theme.colors['base-text']};
            font-weight: 500;

            display: flex;
            flex-direction: row;
            gap: 0.6rem;

            strong {
              color: ${({ theme }) => theme.colors['base-title']};
            }
            svg {
              margin-top: 0.4rem;
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }
      }

      button {
        max-width: 18rem;
        border: none;
        border-radius: 0.4rem;

        transform: skew(-20deg);

        padding: 0.8rem 1rem;
        font-size: 1rem;
        font-weight: 500;

        a {
          position: relative;
          padding: -0.2rem 0;
          font-size: 1rem;
          font-weight: 500;

          display: inline-block;
          transform: skew(20deg);
        }
      }

      .btn-background {
        background-color: ${({ theme }) => theme.colors['brand-primary']};
        color: ${({ theme }) => theme.colors['base-white']};
        transition: 0.4s ease;

        a {
          color: ${({ theme }) => theme.colors['base-white']};
        }

        :hover {
          background-color: ${({ theme }) =>
            theme.colors['brand-primary-dark']};
        }

        :active {
          background-color: ${({ theme }) =>
            theme.colors['brand-primary-light']};
        }
      }
    }

    img {
      max-height: 30rem;
      border-radius: 1rem;

      :hover {
        /* animation: vibration 1.6s none; */
      }
    }
  }
  .section3 {
    width: 100%;
    padding: 2rem 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
    gap: 2.6rem;

    @media only screen and (max-width: 1077px) {
      flex-direction: column-reverse;
      img {
        width: 100%;
      }
    }

    .descriptionSection {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;

      max-width: 700px;

      h1 {
        color: ${({ theme }) => theme.colors['base-title']};
        font-size: 2.8rem;
        font-weight: 700;

        strong {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      .contentDescriptions {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;

        p {
          font-size: 1.06rem;
          font-weight: 400;
          line-height: 1.8rem;
          color: ${({ theme }) => theme.colors['base-text-bold']};
        }

        ul {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          margin-bottom: 1.6rem;

          li {
            font-size: 0.96rem;
            color: ${({ theme }) => theme.colors['base-text']};
            font-weight: 500;

            display: flex;
            flex-direction: row;
            gap: 0.6rem;

            svg {
              color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }

        button {
          max-width: 18rem;
          border: none;
          border-radius: 0.4rem;

          transform: skew(-20deg);

          padding: 0.8rem 1rem;
          font-size: 1rem;
          font-weight: 500;

          a {
            position: relative;
            padding: -0.2rem 0;
            font-size: 1rem;
            font-weight: 500;

            display: inline-block;
            transform: skew(20deg);
          }
        }

        .btn-background {
          background-color: ${({ theme }) => theme.colors['brand-primary']};
          color: ${({ theme }) => theme.colors['base-white']};
          transition: 0.4s ease;

          a {
            color: ${({ theme }) => theme.colors['base-white']};
          }

          :hover {
            background-color: ${({ theme }) =>
              theme.colors['brand-primary-dark']};
          }

          :active {
            background-color: ${({ theme }) =>
              theme.colors['brand-primary-light']};
          }
        }
      }
    }

    img {
      max-width: 38rem;
      max-height: 30rem;

      border-radius: 1rem;
    }
  }

  .driver {
    margin: 4rem 0;
  }
  .rider {
    margin: 4rem 0;
  }

  .freeConsulting {
    position: relative;
    background-color: ${({ theme }) => theme.colors['brand-primary']};

    overflow: hidden;

    .containerLinesLeft {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 10rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.4;
      }
      .line2 {
        height: calc(100% + 10rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        opacity: 0.3;
      }
    }

    .containerLinesRight {
      position: absolute;
      right: 10rem;
      top: 2rem;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(30deg);

      .line1 {
        height: calc(100% + 14em);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.4;
      }
      .line2 {
        height: calc(100% + 18rem);
        width: 6rem;
        background-color: ${({ theme }) => theme.colors['brand-secondary']};
        opacity: 0.3;
      }

      @media (max-width: 673px) {
        display: none;
      }
    }

    .containerLinesRightInvert {
      position: absolute;
      right: -6rem;
      top: 2rem;
      height: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      transform: rotate(-30deg);

      .line1 {
        height: calc(100% + 14em);
        width: 10rem;
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
        opacity: 0.2;
      }

      @media (max-width: 673px) {
        display: none;
      }
    }

    .contentFreeConsulting {
      position: relative;

      width: 100%;
      max-width: 60rem;
      padding: 5rem 0rem;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        h1 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 2rem;
          font-weight: 700;
        }
        h3 {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1.1rem;
          font-weight: 400;
        }
      }
    }
  }

  .security {
    margin: 4rem 0;
  }

  .ourVeicules {
    width: 100%;
    margin: 8rem 0 0rem 0;

    .containerVeiculesRow {
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      margin-top: 2rem;
      padding: 4rem 0rem 0rem 0rem;
      justify-content: center;
      overflow: hidden;

      .alice-carousel__next-btn-item {
        display: none;
      }
      .alice-carousel__prev-btn-item {
        display: none;
      }

      .veicules {
        position: relative;
        display: block;

        max-width: 14rem;

        object-fit: cover;
        overflow: hidden;

        transition: 0.4s ease;

        img {
          width: 100%;
          vertical-align: middle;
          display: inline-block;
          pointer-events: none;
        }

        :hover {
          transform: scale(1.1);
        }
      }
    }
  }

  .ourBlog {
    width: 100%;
    margin: 10rem 0;

    .containerOurBlog {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`
