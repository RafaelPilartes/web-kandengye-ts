import styled, { css } from 'styled-components'
import { NavLink } from '../NavLink'

interface IBtn {
  isVisible: boolean
}

export const MenuContainer = styled.section<IBtn>`
  width: 100%;
  height: 100%;
  backdrop-filter: blur(1.17rem);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;

  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgb(121, 9, 9) 53%,
    rgb(255, 0, 0) 95%
  );

  opacity: 0;
  pointer-events: none;

  transition: 0.5s ease;
  transform: translateY(4rem);

  > svg {
    color: #fff;
    position: absolute;
    top: 1rem;
    right: 1rem;
    z-index: 5;
    transform: rotate(45deg);
    transition: 0.7s ease;
  }

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 1.8rem;
    transform: scale(0.7);
    transition: 0.7s ease;

    li {
      list-style: none;

      a {
        color: ${props => props.theme.colors['base-white']};
        font-size: 1.6rem;
        font-weight: 600;
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
        font-size: 1.6rem;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
      }
      :hover {
        background-color: ${({ theme }) => theme.colors['brand-primary-dark']};
      }

      :active {
        background-color: ${({ theme }) => theme.colors['brand-primary-light']};
      }
    }
    .btn-border {
      background-color: ${({ theme }) => theme.colors['base-white']};
      border: 0.16rem solid ${({ theme }) => theme.colors['brand-primary']};
      color: ${({ theme }) => theme.colors['brand-primary']};

      a {
        color: ${({ theme }) => theme.colors['brand-primary']};
        font-size: 1.6rem;
      }
    }
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);

      > svg {
        transform: rotate(0deg);
      }

      ul {
        transform: scale(1);
      }
    `}
`

export const SLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1.6rem 0;

  .inactive {
    position: relative;
    color: ${props => props.theme.colors['base-white']};
    padding: 0 1rem 0.4rem 0;

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.31rem;
      background-color: ${({ theme }) => theme.colors['brand-primary']};

      transition: 0.4s ease;
    }

    :hover {
      ::before {
        width: 100%;
      }
    }
  }
  .active {
    position: relative;
    color: ${props => props.theme.colors['base-white']};
    padding: 0 1rem 0.4rem 0;

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 0.19rem;
      background-color: ${({ theme }) => theme.colors['brand-primary']};

      transition: 0.4s ease;
    }

    ::before {
      width: 100%;
    }
  }
`

export const SLink = styled(NavLink)`
  color: ${props => props.theme.colors['base-text']};
  font-size: 2.5rem;
  font-weight: 600;
`
