import styled from 'styled-components'

export const ContainerBecomeDriver = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors['base-background']};

  section {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
  }

  .BecomeDriver {
    background: url('/images/background/striped-bg.jpg') fixed;
    background-size: cover;
    min-height: 100vh;

    .containerBecomeDriver {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 2rem auto;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      z-index: 2;

      .descriptionSection {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.2rem;
        margin-bottom: 3rem;
        text-align: center;

        h1 {
          color: #0a2338;
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;

          strong {
            color: ${({ theme }) => theme.colors['brand-primary']};
            position: relative;
            z-index: 1;

            &::after {
              content: '';
              position: absolute;
              bottom: 0.2rem;
              left: 0;
              width: 100%;
              height: 0.4rem;
              background-color: ${({ theme }) => theme.colors['brand-primary-light']};
              opacity: 0.3;
              z-index: -1;
            }
          }
        }
      }

      form {
        width: 100%;
        max-width: 850px;
        background: rgba(255, 255, 255, 0.85);
        backdrop-filter: blur(12px) saturate(180%);
        -webkit-backdrop-filter: blur(12px) saturate(180%);
        border: 1px solid rgba(255, 255, 255, 0.4);
        border-radius: 2.5rem;
        box-shadow: 
          0 20px 50px rgba(0, 0, 0, 0.05),
          0 1px 3px rgba(0, 0, 0, 0.02);

        display: flex;
        flex-direction: column;
        gap: 2.5rem;
        padding: 5rem 4rem;
        transition: transform 0.3s ease;

        @media (max-width: 768px) {
          padding: 3rem 1.5rem;
          gap: 1.5rem;
          border-radius: 1.5rem;
          margin: 1rem;
        }

        .row {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;

          @media (max-width: 600px) {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
        }

        .sectionPhoto {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: rgba(0, 0, 0, 0.02);
          padding: 2rem;
          border-radius: 2rem;
          border: 1px dashed rgba(0, 0, 0, 0.1);
          transition: 0.3s ease;

          &:hover {
            border-color: ${({ theme }) => theme.colors['brand-primary']};
            background: rgba(0, 0, 0, 0.04);
          }

          @media (max-width: 600px) {
            flex-direction: column;
            text-align: center;
          }

          .containerPhotoUser {
            cursor: pointer;
            position: relative;

            img {
              width: 10rem;
              height: 10rem;
              object-fit: cover;
              border-radius: 50%;
              border: 4px solid #fff;
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
              transition: 0.3s ease;
            }

            &:hover img {
              transform: scale(1.05);
              box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
            }
          }

          .photoTexts {
            display: flex;
            flex-direction: column;
            gap: 0.2rem;

            .bigText {
              font-size: 1.25rem;
              font-weight: 700;
              color: #0a2338;
            }

            .littleText {
              font-size: 0.95rem;
              color: ${({ theme }) => theme.colors['base-text']};
              opacity: 0.7;
            }
          }
        }

        .btnFile {
          width: 100%;
          padding: 1.5rem;
          background: #fff;
          border: 2px solid ${({ theme }) => theme.colors['brand-primary-light']};
          border-radius: 1.2rem;
          color: ${({ theme }) => theme.colors['base-title']};
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: 0.3s ease;
          font-weight: 600;

          svg {
            color: ${({ theme }) => theme.colors['brand-primary']};
            font-size: 1.5rem;
          }

          span {
            font-size: 1rem;
          }

          &:hover {
            background: ${({ theme }) => theme.colors['brand-primary-light']};
            color: #fff;
            transform: translateY(-2px);
            box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);

            svg {
              color: #fff;
            }
          }
        }

        .areaPhotos {
          width: 100%;
          min-height: 12rem;
          padding: 2rem;
          border: 2px dashed ${({ theme }) => theme.colors['brand-primary-light']};
          background: rgba(0, 0, 0, 0.02);
          border-radius: 1.5rem;
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: 0.3s ease;

          &:hover {
            border-color: ${({ theme }) => theme.colors['brand-primary']};
            background: rgba(0, 0, 0, 0.04);
          }

          .containerPhotos {
            img {
              width: 12rem;
              height: 9rem;
              object-fit: cover;
              border-radius: 1rem;
              border: 3px solid #fff;
              box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            }
          }

          .placeholderPhotos {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            color: ${({ theme }) => theme.colors['brand-primary']};
            
            svg {
              font-size: 2.5rem;
            }
            
            span {
              font-weight: 600;
              font-size: 1.1rem;
            }
          }
        }

        .widCem {
          width: 100%;
          & .MuiOutlinedInput-root {
            background: #fff;
            border-radius: 1rem;

            &.Mui-focused fieldset {
              border-color: ${({ theme }) => theme.colors['brand-primary']};
              border-width: 2px;
            }
          }
        }
      }
    }
  }
`

