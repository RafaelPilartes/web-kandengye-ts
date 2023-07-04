import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ContainerContacts = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;

  .hero {
    position: relative;
    width: 100%;
    height: 18rem;

    background-image: url('https://www.shreegovindgroup.com/images/contact-us-banner-1.jpg');

    .infoHero {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 0.8rem;

      .path {
        color: #fff;
        font-size: 0.9rem;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
        display: flex;
        flex-direction: row;
        gap: 0.8rem;
        z-index: 3;
      }

      h1 {
        color: #fff;
        font-size: 2rem;
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
      background-color: rgba(0, 0, 0, 0.8);
    }
  }

  .container {
    display: flex;
    padding: 3rem 2rem;
    margin: 0;
    gap: 2rem;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;

    @media (max-width: 808px) {
      flex-direction: column-reverse;
    }
  }

  iframe {
    width: 100%;
    height: 40rem;
    border: none;
  }
`

export const ContainerLeft = styled.div`
  min-width: 45%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;

  .title {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 2rem;

    .sutTitle {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding-left: 45px;
      padding-right: 2.5rem;
      margin-bottom: 15px;

      p {
        font-size: 1.1rem;
        color: ${props => props.theme.colors['brand-primary']};

        font-weight: 700;
      }
      .left {
        position: absolute;
        right: 0px;
        top: 7px;
        width: 30px;
        height: 7px;
        ::before {
          position: absolute;
          content: '';
          right: 0px;
          top: 0px;
          width: 25px;
          height: 2px;
          background-color: #111111;
        }
        ::after {
          position: absolute;
          content: '';
          right: 0px;
          bottom: 0px;
          width: 100%;
          height: 2px;
          background-color: #111111;
        }
      }
      .right {
        position: absolute;
        left: 0px;
        top: 7px;
        width: 30px;
        height: 7px;
        ::before {
          position: absolute;
          content: '';
          left: 0px;
          top: 0px;
          width: 25px;
          height: 2px;
          background-color: #111111;
        }
        ::after {
          position: absolute;
          content: '';
          left: 0px;
          bottom: 0px;
          width: 100%;
          height: 2px;
          background-color: #111111;
        }
      }
    }

    h1 {
      font-size: 2.1rem;
      font-family: 'Montserrat', sans-serif;
    }
  }

  .containerForm {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    .field {
      width: 100%;
      display: flex;
      justify-content: center;
      flex-direction: column;

      input {
        width: 100%;
        outline: none;
        font-size: 0.9rem;
        font-family: 'Montserrat', sans-serif;
        padding: 0.6rem 0;

        border: none;
        border-bottom: 0.1rem solid #cccccc;

        transition: 0.8s ease;
        :focus {
          border-bottom: 0.1rem solid
            ${props => props.theme.colors['brand-primary']};
        }
      }
    }
  }

  @media (max-width: 808px) {
    width: 100%;
  }
`
export const ContainerRight = styled.div`
  min-width: 45%;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  .title {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;

    .sutTitle {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
      padding-left: 45px;
      padding-right: 2.5rem;
      margin-bottom: 15px;

      p {
        font-size: 1.1rem;
        color: ${props => props.theme.colors['brand-primary']};

        font-weight: 700;
      }
      .left {
        position: absolute;
        right: 0px;
        top: 7px;
        width: 30px;
        height: 7px;
        ::before {
          position: absolute;
          content: '';
          right: 0px;
          top: 0px;
          width: 25px;
          height: 2px;
          background-color: #111111;
        }
        ::after {
          position: absolute;
          content: '';
          right: 0px;
          bottom: 0px;
          width: 100%;
          height: 2px;
          background-color: #111111;
        }
      }
      .right {
        position: absolute;
        left: 0px;
        top: 7px;
        width: 30px;
        height: 7px;
        ::before {
          position: absolute;
          content: '';
          left: 0px;
          top: 0px;
          width: 25px;
          height: 2px;
          background-color: #111111;
        }
        ::after {
          position: absolute;
          content: '';
          left: 0px;
          bottom: 0px;
          width: 100%;
          height: 2px;
          background-color: #111111;
        }
      }
    }

    h1 {
      font-size: 2.1rem;
      font-family: 'Montserrat', sans-serif;
    }
  }

  .containerInfo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    .field {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 0.6rem;

      strong {
        font-size: 1.2rem;

        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.6rem;
      }

      a {
        font-size: 1rem;
        color: #111111;
        margin-left: 2.3rem;
      }
    }
  }
`
export const SButton = styled.button`
  max-width: 10rem;
  position: relative;
  padding: 1rem 1.8rem;
  margin: 2rem 0;
  background-color: ${props => props.theme.colors['brand-primary']};
  border: none;

  cursor: pointer;
  transition: 0.6s ease;

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

  div {
    width: 100%;
    position: relative;
    color: #fff;
    font-size: 0.9rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.6rem;
    letter-spacing: 1px;
    z-index: 1;
  }
`
export const SLink = styled(NavLink)`
  padding: 0.7rem 0;
  color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  transition: 0.4s ease;

  :hover {
    color: ${props => props.theme.colors['brand-primary']};
    transform: translateX(0.4rem);
  }
`
