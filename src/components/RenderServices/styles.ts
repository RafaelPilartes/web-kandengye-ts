import styled, { keyframes } from 'styled-components'

export const ServiceContainer = styled.div`
  position: relative;

  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;

  flex: 1;
  width: 100%;
  max-width: 24rem;
  min-width: 16rem;

  cursor: pointer;

  transition: ease 0.46s;

  .containerImgMember {
    position: relative;
    display: block;
    width: 100%;
    height: auto;

    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;
      vertical-align: middle;
      display: inline-block;
      transition: 0.5s ease;
    }

    .containerSocialMedia {
      position: absolute;
      right: 0;
      bottom: 0;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.2rem;
      padding: 1rem 1rem;

      background-color: ${({ theme }) => theme.colors['base-white']};

      transition: 0.4s ease;
      transform: rotateY(90deg);
      z-index: 2;

      a {
        color: ${({ theme }) => theme.colors['base-title']};
        padding: 0.8rem 0.08rem;

        svg {
          color: ${({ theme }) => theme.colors['base-title']};
          font-size: 1.1rem;

          :hover {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }

        :hover {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }
    }

    .shadow {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0%;
      background-color: #0f0f0f42;
      transition: ease 0.46s;

      z-index: 1;
    }
  }

  .containerContent {
    width: 100%;

    display: flex;
    flex-direction: column;

    .containerInfo {
      width: 100%;

      background-color: ${({ theme }) => theme.colors['base-white']};

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      gap: 1.9rem;
      text-align: left;

      transition: ease 0.5s;

      .content {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;

        h2 {
          font-size: 1.28rem;
          text-transform: capitalize;
          text-align: start;
          font-weight: 600;

          transition: ease 0.5s;
          color: ${props => props.theme.colors['base-title']};

          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          font-size: 0.9rem;
          text-align: justify;
          color: ${props => props.theme.colors['base-title']};
          font-weight: 400;

          line-height: 1.2rem;
          transition: ease 0.5s;
        }
      }

      .containerShare {
        width: 3rem;
        height: 3rem;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.colors['brand-primary']};

        svg {
          font-size: 1rem;
          color: ${({ theme }) => theme.colors['base-white']};

          transition: 0.5s ease;
        }
      }
    }
  }

  :hover {
    .containerSocialMedia {
      transform: rotateY(0deg);
    }

    .containerImgMember {
      img {
        transform: scale(1.04);
      }
    }

    .containerShare {
      svg {
        transform: rotateY(340deg);
      }
    }
    .shadow {
      height: calc(100% - 0.2rem);
    }
  }
`
