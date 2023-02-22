import styled from 'styled-components'

export const NotFoundContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-color: #141019;
  background: radial-gradient(
      at 50% -20%,
      ${({ theme }) => theme.colors['brand-primary-light']},
      ${({ theme }) => theme.colors['brand-primary-dark']}
    )
    fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .containerIllustration404 {
    width: 100%;
    max-width: 724px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1.2rem;
    padding: 0.6rem 1rem;

    h1 {
      color: ${({ theme }) => theme.colors['base-white']};
      font-family: 'Roboto', sans-serif;
      text-transform: uppercase;
      font-size: 4rem;
      font-weight: 900;
    }
    p {
      font-family: 'Catamaran', sans-serif;
      color: ${({ theme }) => theme.colors['base-white']};
    }
  }
`

export const ButtonGoBackContainer = styled.button`
  padding: 0.6rem 1rem;
  border: 0.1rem solid ${({ theme }) => theme.colors['brand-secondary']};
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
