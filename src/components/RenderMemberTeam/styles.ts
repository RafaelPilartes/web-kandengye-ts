import styled, { keyframes } from 'styled-components'

export const CardContainer = styled.div`
  flex: 1;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  position: relative;

  border-radius: 0.8rem;

  -webkit-box-shadow: 0px -1px 14px -1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px -1px 14px -1px rgba(0, 0, 0, 0.1);

  transition: ease 0.46s;

  max-width: 26rem;
  min-width: 255px;

  .containerImg {
    width: 100%;
    min-width: 6rem;
    height: auto;

    position: relative;
    object-fit: cover;
    overflow: hidden;

    img {
      width: 100%;

      transition: 0.4s ease;
    }
  }

  :hover {
    .containerImg {
      img {
        transform: scale(1.08);
      }
    }
  }

  .containerRight {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;
    padding: 1rem 2rem;

    background-color: ${({ theme }) => theme.colors['base-white']};

    transition: ease 0.5s;

    h2 {
      font-size: 1.2rem;
      transition: ease 0.5s;
      color: ${props => props.theme.colors['base-title']};

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 1rem;
    }
  }

  :hover {
    .shadow {
      height: calc(100% - 0.2rem);
    }
  }
`
