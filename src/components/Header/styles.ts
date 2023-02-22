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
  }

  .containerButton {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
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

      button {
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
      .btn-border {
        background-color: ${({ theme }) => theme.colors['base-white']};
        border: 0.16rem solid ${({ theme }) => theme.colors['brand-primary']};
        color: ${({ theme }) => theme.colors['brand-primary']};

        a {
          color: ${({ theme }) => theme.colors['brand-primary']};
        }
      }
    }
    .containerRight {
      align-items: center;
      justify-content: center;
      gap: 2.2rem;

      a {
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
