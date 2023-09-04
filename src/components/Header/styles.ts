import styled from 'styled-components'
import { NavLink } from '../NavLink'

// background-color: red;

export const HeaderContainerStyles = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  /* height: 6.8rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors['base-white']};
  border-bottom: 0.08rem solid #ddd;

  z-index: 99;

  .containerContent {
    width: 85%;
    max-width: 1390px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.2rem;

    @media (max-width: 1349px) {
      width: 90%;
    }
  }

  .containerTop,
  .containerLeft,
  .containerCenter,
  .containerRight {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .containerTop {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors['brand-primary']};

    padding: 1rem;

    .containerLeft {
      gap: 1rem;

      li {
        color: ${({ theme }) => theme.colors['base-white']};
        font-size: 1.2rem;

        a {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 0.92rem;
          font-weight: 400;

          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
        }
        svg {
          color: ${({ theme }) => theme.colors['base-white']};
          font-size: 1.16rem;
        }
      }
    }
    .containerRight {
      gap: 1rem;

      color: ${({ theme }) => theme.colors['base-white']};
      font-size: 0.92rem;
      font-weight: 500;
    }

    @media (max-width: 945px) {
      display: none;
    }
  }

  .containerButton {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;

    padding: 1rem;

    .containerLogo {
      width: 18.4rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 2rem;

      font-size: 2rem;
      color: #eee;

      img {
        width: 100%;
        min-width: 10 rem;
        height: auto;
      }
    }
    .containerCenter {
      align-items: center;
      gap: 2.2rem;

      > a {
        position: relative;
        padding: 0.2rem 0;
        color: ${({ theme }) => theme.colors['base-title']};
        font-size: 1rem;
        font-weight: 500;

        ::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0.16rem;
          background-color: ${({ theme }) => theme.colors['brand-primary']};

          transition: 0.4s ease;
        }

        :hover {
          ::before {
            width: 100%;
          }
        }
      }

      .btn {
        border: none;
        border-radius: 0.4rem;

        transform: skew(-20deg);

        padding: 0.8rem 1rem;
        font-size: 1rem;
        font-weight: 500;

        :hover {
          ::before {
            width: 0%;
          }
        }

        span {
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

        span {
          color: ${({ theme }) => theme.colors['base-white']};

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
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
      .btn-border {
        background-color: ${({ theme }) => theme.colors['base-white']};
        border: 0.16rem solid ${({ theme }) => theme.colors['brand-primary']};
        color: ${({ theme }) => theme.colors['brand-primary']};

        a {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }

      @media (max-width: 1380px) {
        display: none;
      }
    }
    .containerRight {
      align-items: center;
      justify-content: center;
      gap: 2.2rem;

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

        padding: 0.8rem 1.4rem;

        border: none;
        border-radius: 0.4rem;

        font-size: 1rem;
        font-weight: 500;
      }

      .btn-background {
        background-color: ${({ theme }) => theme.colors['brand-primary']};
        color: ${({ theme }) => theme.colors['base-white']};
      }
      .btn-border {
        border: 0.16rem solid ${({ theme }) => theme.colors['brand-primary']};
        color: ${({ theme }) => theme.colors['brand-primary']};
      }
    }

    .dropdown {
      position: relative;

      display: inline-block;
      border: none;
      border-radius: 0.4rem;

      padding: 0.8rem 1rem;
      font-size: 1rem;
      font-weight: 500;

      :hover {
        ::before {
          width: 0%;
        }
      }

      span {
        color: ${({ theme }) => theme.colors['base-title']};

        position: relative;
        font-size: 1rem;
        font-weight: 500;

        display: inline-block;
      }

      .dropbtn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        gap: 0.6rem;

        padding: 1.8rem auto;
      }
      .dropdown-content {
        background-color: #f1f1f1;
        min-width: 160px;
        background-color: ${({ theme }) => theme.colors['base-white']};

        border-radius: 0.4rem;
        display: block;
        opacity: 0;
        visibility: hidden;

        margin-top: 1.7rem;

        position: absolute;
        top: 4rem;
        border-top: 0.2rem solid ${({ theme }) => theme.colors['brand-primary']};
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        transition: 0.6s ease;
        z-index: 1;

        a {
          padding: 0.8rem 1rem;
          text-decoration: none;
          display: block;
          background-color: ${({ theme }) => theme.colors['base-white']};
          align-items: center;
          color: ${({ theme }) => theme.colors['base-text']};
          font-size: 1rem;
          border-radius: 0.4rem;
          transition: 0.2s ease;

          :hover {
            color: ${({ theme }) => theme.colors['base-white']};
            background-color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }
      }
      .dropdown-content-tab {
        display: flex;
        opacity: 0;
        visibility: hidden;

        margin-top: 1.7rem;

        flex-direction: row;
        justify-content: center;

        position: absolute;
        top: 4rem;

        margin-left: -100%;

        background-color: ${({ theme }) => theme.colors['base-white']};

        border-radius: 0.4rem;
        border-top: 0.2rem solid ${({ theme }) => theme.colors['brand-primary']};

        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        transition: 0.6s ease;
        z-index: 1;

        .dropdown-content-tab-column {
          width: 100%;
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: start;
          flex-direction: column;
          padding: 1rem 1.4rem 1.6rem 1.4rem;

          min-width: 290px;

          h3 {
            font-size: 1rem;
            color: ${({ theme }) => theme.colors['brand-primary']};
            font-weight: 600;
            padding: 0.8rem 0.8rem;
          }
          span {
            width: 100%;
            font-size: 0.9rem;
            font-weight: 500;
            padding: 0.8rem 0.8rem;
            border-radius: 0.4rem;
            transition: 0.2s ease;

            ::before {
              height: 0rem;
            }

            :hover {
              color: #fff;
              background-color: ${({ theme }) => theme.colors['brand-primary']};
            }
          }
        }
      }

      :hover {
        .dropdown-content {
          visibility: visible;
          opacity: 1;
          top: 1.18rem;
        }
        .dropdown-content-tab {
          visibility: visible;
          opacity: 1;
          top: 1.18rem;
        }

        .dropbtn {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }
    }
  }

  .containerIconMenu {
    display: none;

    svg {
      font-size: 2.6rem;
    }

    @media (max-width: 1380px) {
      display: inline;
    }
  }

  .optionContainer {
    display: flex;
    flex-direction: row;
    align-items: center;

    .containerBaseInfo {
      display: flex;
      margin: 0 16px;
      flex-direction: column;

      cursor: pointer;

      h4 {
        font-size: 1rem;
        font-weight: 800;
      }
      p {
        font-size: 0.8rem;
        font-weight: 400;
      }
    }
  }
`

export const SLinkContainer = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-family: 'Rubik', sans-serif;
  }

  a {
    width: 100%;
    position: relative;

    :hover {
      color: ${props => props.theme.colors['brand-primary']};
    }
  }

  .inactive {
    color: ${props => props.theme.colors['base-text']};
  }
  .active {
    color: ${props => props.theme.colors['brand-primary']};
  }
`

export const SLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;

  font-size: 1rem;
  padding: 0 4rem 0 0;
  transition: ease 0.4s;
`
