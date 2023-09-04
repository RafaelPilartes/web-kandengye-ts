import { useEffect, useState } from 'react'

// toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Modulos do material
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Theme
import { defaultTheme } from '../themes/default'

// Component
import HeroSection from '../components/HeroSection'
import BaseButton from '../components/BaseButton'

// Interface
import { CandidacyInterface } from '../interfaces/ICandidacy'

// Styles
import { ContainerBecomeDriver } from '../styles/pages/BecomeDriverStyles'
import { FaDownload } from 'react-icons/fa'
import { provinces } from '../data/labelProvince'

// Api
import {
  sendCandidacy,
  uploadImageCandidacy,
  uploadPdfCurriculum,
  uploadPdfIdentityCard,
  uploadPdfVehicle
} from '../api/server'

// Images
import heroBg4 from '../assets/header/hero_bg_1.jpg'

function BecomeDriver() {
  const initialValues: CandidacyInterface = {
    photo: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    province: '',
    gender: '',
    identity_card: '',
    curriculum: '',
    vehicle_photo: '',
    type_candidacy: 'Motorista'
  }

  const [driverData, setDriverData] =
    useState<CandidacyInterface>(initialValues)

  const [isSend, setIsSend] = useState<boolean>(false)
  const [haveError, setHaveError] = useState<boolean>(false)

  // Photo
  const [filePhotoSelect, setFilePhotoSelect] = useState<string>('')
  const [photoSelect, setPhotoSelect] = useState<string>(
    'httpss://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg'
  )

  // Photo Vehicle
  const [filePhotoVehicleSelect, setFilePhotoVehicleSelect] = useState<File[]>(
    []
  )

  // CV
  const [fileCVSelect, setFileCVSelect] = useState<string>('')
  const [fileCVName, setFileCVName] = useState<string>('')
  // BI
  const [filBISelect, setFilBISelect] = useState<string>('')
  const [filBIName, setFilBIName] = useState<string>('')

  // Image
  const onImageChangeDrag = (event: any) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files

    setFilePhotoSelect(file)

    setPhotoSelect(URL.createObjectURL(file))
  }
  const onImageChange = (event: any) => {
    const [file] = event.target.files

    setFilePhotoSelect(file)

    setPhotoSelect(URL.createObjectURL(file))
  }

  // Image Vehicle
  const onImageVehicleChangeDrag = (
    event: React.DragEvent<HTMLLabelElement>
  ) => {
    const files = event.dataTransfer.files
    if (files) {
      const selectedFiles = Array.from(files)
      setFilePhotoVehicleSelect([...filePhotoVehicleSelect, ...selectedFiles])
    }
  }
  const onImageVehicleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()

    const files = event.target.files
    if (files) {
      const selectedFiles = Array.from(files)
      setFilePhotoVehicleSelect(selectedFiles)
    }
  }

  // CV
  const onFileCVChangeDrag = (event: any) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files

    setFileCVSelect(file)
    setFileCVName(file.name)
  }
  const onFileCVChange = (event: any) => {
    const [file] = event.target.files

    setFileCVSelect(file)
    setFileCVName(file.name)
  }

  // BI
  const onFileBIChangeDrag = (event: any) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files

    setFilBISelect(file)
    setFilBIName(file.name)
  }
  const onFileBIChange = (event: any) => {
    const [file] = event.target.files

    setFilBISelect(file)
    setFilBIName(file.name)
  }

  const handleDragOver = (event: any) => {
    event.preventDefault()
  }
  const handleDragLeave = () => {
    // fazer algo quando o mouse sai da área de soltar
  }

  const renderPhotos = filePhotoVehicleSelect.map(
    (file: any, index: number) => {
      const photo = URL.createObjectURL(file)

      return (
        <div
          onClick={() => alert('rrr')}
          key={index}
          className="containerPhotos"
        >
          <img src={photo} alt="" />
        </div>
      )
    }
  )

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSend(true)

    // >> Image candidacy <<
    const imageData = new FormData()
    imageData.append('photoUser', filePhotoSelect)

    const resImage = await uploadImageCandidacy(imageData)

    const imageUrl = resImage.imageUrl
    const message = resImage.msg

    if (resImage.error) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      // >> IdentityCard <<
      const identityCardData = new FormData()
      identityCardData.append('identityCardData', filBISelect)

      const resIdentityCard = await uploadPdfIdentityCard(identityCardData)

      const identityCardUrl = resIdentityCard.pdfUrl
      const messageIdentityCard = resIdentityCard.msg

      if (resIdentityCard.error) {
        toast.error(messageIdentityCard, {
          position: toast.POSITION.TOP_RIGHT
        })
      } else {
        // >> Curriculum <<
        const curriculumData = new FormData()
        curriculumData.append('curriculumData', fileCVSelect)

        const resCurriculum = await uploadPdfCurriculum(curriculumData)

        const curriculumUrl = resCurriculum.pdfUrl
        const messageCurriculum = resCurriculum.msg

        if (resCurriculum.error) {
          toast.error(messageCurriculum, {
            position: toast.POSITION.TOP_RIGHT
          })
        } else {
          // >> Vehicle <<
          const vehicleData = new FormData()

          for (let i = 0; i < filePhotoVehicleSelect.length; i++) {
            vehicleData.append('photosVehicle[]', filePhotoVehicleSelect[i])
          }

          const resVehicle = await uploadPdfVehicle(vehicleData)

          const vehicleUrl = resVehicle.imagesUrl as string[]
          const messageVehicle = resVehicle.msg

          if (resVehicle.error) {
            toast.error(messageVehicle, {
              position: toast.POSITION.TOP_RIGHT
            })
          } else {
            newCandidacy(
              imageUrl,
              identityCardUrl,
              curriculumUrl,
              vehicleUrl.toString()
            )
          }

          // >> END -> Vehicle <<
        }

        // >> END -> Curriculum <<
      }
      // >> END -> IdentityCard <<
    }
    // >> END -> Image candidacy <<

    setTimeout(() => {
      setIsSend(false)
    }, 2000)
  }

  async function newCandidacy(
    photo: string,
    identity_card: string,
    curriculum: string,
    vehicle_photo: string
  ) {
    const newData = {
      photo: photo,
      first_name: driverData.first_name,
      last_name: driverData.last_name,
      email: driverData.email,
      phone: driverData.phone,
      province: driverData.province,
      gender: driverData.gender,
      identity_card: identity_card,
      curriculum: curriculum,
      vehicle_photo: vehicle_photo
    }

    const data = await sendCandidacy(newData)

    console.log(data)

    if (data.error) {
      toast.error(data.msg, {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      toast.success(data.msg, {
        position: toast.POSITION.TOP_RIGHT
      })

      setIsSend(false)

      setTimeout(() => {
        window.location.reload()
      }, 4000)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerBecomeDriver>
      <ToastContainer />

      <HeroSection
        backgroundImage={heroBg4}
        title="Formulário"
        base1="Torne-se um motorista"
      />

      <section className="BecomeDriver">
        <div className="containerContent">
          <div className="containerBecomeDriver">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>CANDIDATURA À ESTAFETA</strong>
              </h1>
            </div>

            <form onSubmit={handleSubmit} id="registerForm">
              <div
                className="sectionPhoto"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onImageChangeDrag}
              >
                <label className="containerPhotoUser" htmlFor="photoUser">
                  <img src={photoSelect} alt="" />

                  <input
                    hidden
                    type="file"
                    id="photoUser"
                    name="photoUser"
                    accept="image"
                    onChange={onImageChange}
                  />
                </label>
                <span className="bigText">Sua fotografia</span>
                <span className="littleText">
                  Selecione ou solte as imagens aqui
                </span>
              </div>

              <div className="row">
                <TextField
                  name="name"
                  className="widCem"
                  id="outlined-required"
                  label="Primeiro Nome"
                  onChange={e =>
                    setDriverData({
                      ...driverData,
                      first_name: e.target.value
                    })
                  }
                  error={haveError}
                />

                <TextField
                  name="name"
                  className="widCem"
                  required
                  id="outlined-required"
                  label="Ultimo Nome"
                  onChange={e =>
                    setDriverData({
                      ...driverData,
                      last_name: e.target.value
                    })
                  }
                />
              </div>

              <TextField
                name="email"
                className="widCem"
                required
                id="outlined-required"
                type="email"
                label="E-mail"
                onChange={e =>
                  setDriverData({
                    ...driverData,
                    email: e.target.value
                  })
                }
              />

              <TextField
                className="widCem"
                required
                id="outlined-required"
                label="Número de telefone"
                type="number"
                onChange={e =>
                  setDriverData({
                    ...driverData,
                    phone: e.target.value
                  })
                }
              />

              <Autocomplete
                disablePortal
                className="widCem"
                id="combo-box-demo"
                options={provinces}
                sx={{ width: 300 }}
                renderInput={params => (
                  <TextField {...params} label="Província" />
                )}
                onChange={(event, newValue) =>
                  setDriverData({
                    ...driverData,
                    province: newValue?.label as string
                  })
                }
              />

              <div className="col">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Feminino"
                    onClick={() =>
                      setDriverData({
                        ...driverData,
                        gender: 'Feminino'
                      })
                    }
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Masculino"
                    onClick={() =>
                      setDriverData({
                        ...driverData,
                        gender: 'Masculino'
                      })
                    }
                  />
                </RadioGroup>
              </div>

              <label
                htmlFor="inputTagBI"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onFileBIChangeDrag}
              >
                <div className="btnFile">
                  <FaDownload />
                  <span>
                    {filBIName
                      ? filBIName
                      : 'Adicionar seu Bilhete de identidade'}
                  </span>

                  <input
                    type="file"
                    hidden
                    id="inputTagBI"
                    accept="image/*,.pdf"
                    onChange={onFileBIChange}
                  />
                </div>
                <p className="littleText">
                  ou solte o seu Bilhete de identidade aqui
                </p>
              </label>

              <label
                htmlFor="inputTagCV"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onFileCVChangeDrag}
              >
                <div className="btnFile">
                  <FaDownload />
                  <span>
                    {fileCVName
                      ? fileCVName
                      : 'Adicionar documento da motorizada'}
                  </span>

                  <input
                    type="file"
                    id="inputTagCV"
                    accept="image/*,.pdf"
                    onChange={onFileCVChange}
                    style={{ display: 'none' }}
                  />
                </div>
                <p className="littleText">
                  ou solte o documento da motorizada aqui
                </p>
              </label>

              <label
                htmlFor="imagesVehicle"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onImageVehicleChangeDrag}
              >
                <div className="areaPhotos">
                  {filePhotoVehicleSelect.length <= 0 && (
                    <>
                      <FaDownload />
                      <span>Fotografia do seu veiculo</span>
                    </>
                  )}
                  {filePhotoVehicleSelect.length >= 1 && renderPhotos}

                  <input
                    type="file"
                    hidden
                    id="imagesVehicle"
                    accept="image/png, image/jpeg, image/jpg"
                    multiple
                    onChange={onImageVehicleChange}
                  />
                </div>
                <span className="littleText">
                  Selecione ou solte as imagens aqui
                </span>
              </label>

              <BaseButton
                name="Enviar formulário"
                isLoading={isSend}
                disabled={isSend}
                colorTxt={defaultTheme.colors['base-white']}
                colorBg={defaultTheme.colors['brand-primary']}
              />
            </form>
          </div>
        </div>
      </section>
    </ContainerBecomeDriver>
  )
}

export default BecomeDriver
