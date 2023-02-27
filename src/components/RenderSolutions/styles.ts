import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  position: relative;
  max-width: 26rem;
  min-width: 18rem;

  border-radius: 0 0 0.8rem 0.8rem;

  transition: ease 0.46s;

  .containerImg {
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;
    }

    .shadow {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 0%;
      background-color: #0f0f0f42;
      transition: ease 0.46s;
    }
  }

  .containerFloat {
    width: 90%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    position: absolute;
    bottom: -2.6rem;
    left: 0;
    right: 0;
    margin: 0 auto;

    z-index: 20;

    span {
      width: 4rem;
      height: 4rem;

      position: relative;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      background-color: ${({ theme }) => theme.colors['brand-primary']};

      svg {
        color: ${({ theme }) => theme.colors['base-white']};
      }
    }

    .containerInfo {
      width: 100%;
      height: auto;

      background-color: ${({ theme }) => theme.colors['base-white']};

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 0.6rem;
      padding: 1.4rem 1rem;
      text-align: left;

      transition: ease 0.5s;

      h2 {
        font-size: 1.2rem;
        text-align: center;
        transition: ease 0.5s;
        color: ${props => props.theme.colors['base-title']};

        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      p {
        font-size: 1.1rem;
        text-align: center;

        visibility: hidden;
        opacity: 0;
        height: 0;
        overflow: hidden;
        transition: visibility 0s, height 0.5s, opacity 0.5s linear;
      }

      :hover {
        p {
          visibility: visible;
          opacity: 1;
          height: 4rem;
        }
      }

      -webkit-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
      -moz-box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);
      box-shadow: 0px 9px 31px -11px rgba(0, 0, 0, 0.29);

      @media (max-width: 1075px) {
        :hover {
          p {
            visibility: visible;
            opacity: 1;
            height: 5.4rem;
          }
        }
      }
      @media (max-width: 934px) {
        :hover {
          p {
            visibility: visible;
            opacity: 1;
            height: 4rem;
          }
        }
      }
    }
  }

  :hover {
    .shadow {
      height: calc(100% - 0.2rem);
    }
  }
`
