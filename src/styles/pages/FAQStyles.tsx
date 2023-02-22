import styled from 'styled-components'
import { NavLink } from '../../components/NavLink'

export const ContainerFAQ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

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

  .container {
    width: 95%;
    max-width: 1390px;

    display: flex;
    padding: 3rem 2rem;
    margin: 2rem 0;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .faqs {
    width: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0rem;
  }
`

export const ContainerListFAQ = styled.div`
  width: 100%;
  margin-top: 2.6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2.6rem;
  flex-flow: row wrap;

  strong {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #1f1f1fc6;
  }
`

export const ContainerFilter = styled.div`
  max-width: 20%;
  min-width: 24rem;
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;

  strong {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    color: #1f1f1fc6;
  }

  .sectionFilter {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;

    border: 0.1rem solid #ddd;

    .headerTotal {
      position: relative;
      width: 100%;
      padding: 1rem 0;

      border-bottom: 0.1rem solid #ddd;

      ::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: -2px;
        width: 30%;
        height: 0.2rem;
        background-color: ${props => props.theme.colors['brand-primary']};
      }
    }

    .containerToChecked {
      ul {
        .listarPopularPosts {
          margin: 3rem 0;
        }
      }
    }
    .containerSearch {
      padding: 0.4rem 1rem;
      gap: 0.1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      border: 0.1rem solid #ddd;

      .searchInput {
        width: 100%;
        border: none;
        outline: none;
      }

      svg {
        color: ${props => props.theme.colors['brand-primary']};

        :active {
          color: #ddd;
        }
      }
    }
  }

  @media (max-width: 780px) {
    min-width: 100%;
  }
`
export const SLink = styled.span`
  padding: 0.7rem 0;
  color: #111;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  cursor: pointer;
  transition: 0.4s ease;

  :hover {
    color: ${props => props.theme.colors['brand-primary']};
    transform: translateX(0.4rem);
  }
`
