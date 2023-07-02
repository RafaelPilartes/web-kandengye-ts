import { useEffect, useState } from 'react'

// toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Modulos do material
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { Autocomplete } from '@mui/material'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

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
import { ContainerWorkWithUs } from '../styles/pages/WorkWithUsStyles'
import { FaDownload } from 'react-icons/fa'
import { provinces } from '../data/labelProvince'
import axios from 'axios'
import {
  sendCandidacy,
  uploadImageCandidacy,
  uploadPdfCurriculum,
  uploadPdfIdentityCard
} from '../api/server'

function WorkWithUs() {
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
    application_areas: '',
    type_candidacy: 'Serviços Geral'
  }

  const areas = [
    { label: 'Administração ' },
    { label: 'Finanças ' },
    { label: 'Comunicação e imagem ' },
    { label: 'Intercâmbio ' },
    { label: 'Tecnologia e informação ' },
    { label: 'Serviços gerais' }
  ]

  const [formValues, setFormValues] =
    useState<CandidacyInterface>(initialValues)
  const [isSend, setIsSend] = useState<boolean>(false)
  const [haveError, setHaveError] = useState<boolean>(false)

  // Photo
  const [filePhotoSelect, setFilePhotoSelect] = useState<string>('')
  const [photoSelect, setPhotoSelect] = useState<string>(
    'httpss://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg'
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSend(true)

    // for (let pair of formData.entries()) {
    //   console.log(pair[0] + ': ' + pair[1])
    // }

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
          newCandidacy(imageUrl, identityCardUrl, curriculumUrl)
        }
        // >> END -> Curriculum <<
      }
      // >> END -> IdentityCard <<
    }
    // >> END -> Image candidacy <<
  }

  async function newCandidacy(
    photo: string,
    identity_card: string,
    curriculum: string
  ) {
    const newData: CandidacyInterface = {
      photo: photo,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      phone: formValues.phone,
      province: formValues.province,
      gender: formValues.gender,
      identity_card: identity_card,
      curriculum: curriculum,
      application_areas: formValues.application_areas,
      type_candidacy: formValues.type_candidacy
    }

    try {
      const { data } = await sendCandidacy(newData)

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
    } catch (error) {
      // Lógica para tratar erros de requisição
      console.error(error)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerWorkWithUs>
      <ToastContainer />

      <HeroSection
        backgroundImage="httpss://www.companiesmadesimple.com/project/blog/wp-content/uploads/2015/04/unnamed-1.jpg"
        title="Formulário"
        base1="Trabalhar connosco"
      />

      <section className="WorkWithUs">
        <div className="containerContent">
          <div className="containerWorkWithUs">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">Formulário para candidatar-se</h1>
              <h1 data-aos="fade-up">
                e <strong>trabalhar connosco</strong>
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
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
                  required
                  id="outlined-required"
                  label="Primeiro Nome"
                  onChange={e =>
                    setFormValues({
                      ...formValues,
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
                    setFormValues({
                      ...formValues,
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
                  setFormValues({
                    ...formValues,
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
                  setFormValues({
                    ...formValues,
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
                  setFormValues({
                    ...formValues,
                    province: newValue?.label as string
                  })
                }
              />
              <Autocomplete
                disablePortal
                className="widCem"
                id="combo-box-demo"
                options={areas}
                sx={{ width: 300 }}
                renderInput={params => (
                  <TextField {...params} label="Áreas de candidatura" />
                )}
                onChange={(event, newValue) =>
                  setFormValues({
                    ...formValues,
                    application_areas: newValue?.label as string
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
                      setFormValues({
                        ...formValues,
                        gender: 'Feminino'
                      })
                    }
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Masculino"
                    onClick={() =>
                      setFormValues({
                        ...formValues,
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
                    accept="application/pdf"
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
                    {fileCVName ? fileCVName : 'Adicionar seu currículo'}
                  </span>

                  <input
                    type="file"
                    id="inputTagCV"
                    accept="application/pdf"
                    onChange={onFileCVChange}
                    style={{ display: 'none' }}
                  />
                </div>
                <p className="littleText">ou solte o seu currículo aqui</p>
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
    </ContainerWorkWithUs>
  )
}

export default WorkWithUs
