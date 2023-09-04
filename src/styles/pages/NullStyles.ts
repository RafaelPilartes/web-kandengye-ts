import styled from 'styled-components'

export const ContainerNullArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  section {
    position: relative;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .containerTitleSection {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.8rem;

      h4 {
        position: relative;

        font-size: 2.6rem;
        color: ${({ theme }) => theme.colors['brand-primary']};

        padding-left: 2.6rem;
      }
      h1 {
        font-size: 2.8rem;
        color: ${({ theme }) => theme.colors['base-title']};
      }
    }
  }

  .NullArea {
    background-image: url('/images/background/striped-bg.jpg');

    .containerNullArea {
      position: relative;

      width: 100%;
      margin: 2rem 0 4rem 0;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .col {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 2rem;
      }

      .row {
        width: 100%;
        max-width: 90rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
      }

      .descriptionSection {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1.6rem;

        max-width: 700px;

        h1 {
          color: #0a2338;
          font-size: 2.8rem;
          font-weight: 700;
          text-align: center;

          strong {
            color: ${({ theme }) => theme.colors['brand-primary']};
          }
        }
      }

      form {
        width: 100vw;
        max-width: 52rem;
        background-color: #fff;
        border-radius: 2rem;
        -webkit-box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.03);
        box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.03);

        display: flex;
        flex-direction: column;
        gap: 2rem;

        padding: 4rem;
        margin: 2rem;

        .rowSpace {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .btnFile {
          max-width: 24rem;
          padding: 1.6rem;

          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;

          gap: 0.6rem;

          border: 0.12rem solid ${({ theme }) => theme.colors['brand-primary']};
          border-radius: 0.4rem;

          color: ${({ theme }) => theme.colors['brand-primary']};

          svg {
            font-size: 1.2rem;

            margin-right: 0.6rem;
          }

          span {
            width: 14rem;
          }
        }

        .areaPhotos {
          width: 100%;
          padding: 1.6rem;

          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;

          border: 0.12rem solid ${({ theme }) => theme.colors['brand-primary']};
          border-radius: 0.4rem;

          color: ${({ theme }) => theme.colors['brand-primary']};

          .containerPhotos {
            position: relative;

            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
              width: 18rem;
              height: 14rem;
              margin: 14px 0;
              object-fit: cover;
              margin-left: 16px;
              border-radius: 2rem;

              border: 0.4rem solid #fff;
              -webkit-box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.08);
              box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.08);
            }
          }
        }
        .sectionPhoto {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }
        .containerPhotoUser {
          position: relative;

          display: flex;
          flex-direction: column;
          justify-content: center;

          img {
            width: 12rem;
            height: 12rem;
            margin: 14px 0;
            object-fit: cover;
            margin-left: 16px;
            border-radius: 100%;

            border: 0.4rem solid #fff;
            -webkit-box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.12);
            box-shadow: 1px 1px 25px -5px rgba(0, 0, 0, 0.12);
          }
        }

        .bigText {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .littleText {
          font-size: 0.9rem;
          font-weight: 400;
        }
      }

      .widCem {
        width: 100%;
        background-color: #fff;
        border: none;
      }
    }
  }
`
