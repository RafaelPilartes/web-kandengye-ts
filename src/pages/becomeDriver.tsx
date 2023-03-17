import { useEffect, useState } from 'react'

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

// Styles
import { ContainerBecomeDriver } from '../styles/pages/BecomeDriverStyles'
import { BsCheck2Circle, BsFillCheckCircleFill } from 'react-icons/bs'
import { GiSmartphone } from 'react-icons/gi'
import { MdComputer, MdDesignServices } from 'react-icons/md'
import ButtonSeeMore from '../components/buttons/ButtonSeeMore'
import { routsNameMain } from '../data/routsName'
import CountUp from 'react-countup'
import { NavLink } from '../components/NavLink'
import { FaDownload } from 'react-icons/fa'

// Images

function BecomeDriver() {
  const initialValues = {
    firstName: '',
    lastName: '',
    gender: 'male',
    country: 'Canada',
    hobby: ''
  }
  const top100Films = [
    { label: 'Benguela', year: 1994 },
    { label: 'Bié', year: 1972 },
    { label: 'Bengo', year: 1974 },
    { label: 'Cabinda', year: 2008 },
    { label: 'Cuando', year: 2002 },
    { label: 'Cuanza', year: 1995 },
    { label: 'Cuanza', year: 1991 },
    { label: 'Cunene', year: 1946 },
    { label: 'Huila', year: 1997 },
    { label: 'Huambo', year: 1995 },
    { label: 'Lunda Norte', year: 1994 },
    { label: 'Lunda Sul', year: 2001 },
    { label: 'Luanda', year: 1998 },
    { label: 'Malanje', year: 1998 },
    { label: 'Moxico', year: 1998 },
    { label: 'Namibe', year: 1998 },
    { label: 'Uíge', year: 1968 },
    { label: 'Zaire', year: 1998 }
  ]

  const [formValues, setFormValues] = useState(initialValues)
  const [isSend, setIsSend] = useState<boolean>(false)
  const [haveError, setHaveError] = useState<boolean>(false)

  // Photo
  const [filePhotoSelect, setFilePhotoSelect] = useState<string>(
    'https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg'
  )
  // Photo Vehicle
  const [filePhotoVehicleSelect, setFilePhotoVehicleSelect] = useState<any[]>(
    []
  )
  // CV
  const [fileCVSelect, setFileCVSelect] = useState<string>('')
  const [fileCVName, setFileCVName] = useState<string>('')
  // BI
  const [filBISelect, setFilBISelect] = useState<string>('')
  const [filBIName, setFilBIName] = useState<string>('')

  const handleInputChange = (event: any) => {
    const { name, value } = event.target

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  // Image
  const onImageChangeDrag = (event: any) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files
    setFilePhotoSelect(URL.createObjectURL(file))
  }
  const onImageChange = (event: any) => {
    const [file] = event.target.files
    setFilePhotoSelect(URL.createObjectURL(file))
  }
  // Image
  const onImageVehicleChangeDrag = (event: any) => {
    event.preventDefault()
    console.log(event.dataTransfer.files)

    const files = Array.from(event.dataTransfer.files)
    setFilePhotoVehicleSelect([...filePhotoVehicleSelect, ...files])
  }
  const onImageVehicleChange = (event: any) => {
    event.preventDefault()

    console.log(event.target.files[0])

    const files = event.target.files

    setFilePhotoVehicleSelect([...filePhotoVehicleSelect, ...files])
  }

  // CV
  const onFileCVChangeDrag = (event: any) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files
    setFileCVSelect(URL.createObjectURL(file))
    setFileCVName(file.name)
  }
  const onFileCVChange = (event: any) => {
    const [file] = event.target.files
    setFileCVSelect(URL.createObjectURL(file))
    setFileCVName(file.name)
  }

  // BI
  const onFileBIChangeDrag = (event: any) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files
    setFilBISelect(URL.createObjectURL(file))
    setFilBIName(file.name)
  }
  const onFileBIChange = (event: any) => {
    const [file] = event.target.files
    setFilBISelect(URL.createObjectURL(file))
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
        <div key={index} className="containerPhotos">
          <img src={photo} alt="" />
        </div>
      )
    }
  )

  const handleSubmit = (event: any) => {
    event.preventDefault()
    setIsSend(true)

    console.log(formValues)

    setTimeout(() => {
      setIsSend(false)
    }, 2000)
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerBecomeDriver>
      <HeroSection
        backgroundImage="https://www.companiesmadesimple.com/project/blog/wp-content/uploads/2015/04/unnamed-1.jpg"
        title="Formulário"
        base1="Torne-se um motorista"
      />

      <section className="BecomeDriver">
        <div className="containerContent">
          <div className="containerBecomeDriver">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">Formulário para candidatar-se</h1>
              <h1 data-aos="fade-up">
                á <strong>Moto-Táxi</strong>
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
                  <img src={filePhotoSelect} alt="" />

                  <input
                    hidden
                    type="file"
                    id="photoUser"
                    accept="image"
                    onChange={onImageChange}
                    required
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
                  error={haveError}
                />

                <TextField
                  name="name"
                  className="widCem"
                  required
                  id="outlined-required"
                  label="Ultimo Nome"
                />
              </div>

              <TextField
                name="email"
                className="widCem"
                required
                id="outlined-required"
                type="email"
                label="E-mail"
              />

              <TextField
                className="widCem"
                required
                id="outlined-required"
                label="Número de telefone"
                type="number"
              />

              <Autocomplete
                disablePortal
                className="widCem"
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={params => (
                  <TextField {...params} label="Província" />
                )}
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
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Masculino"
                  />
                </RadioGroup>
              </div>

              <label
                htmlFor="inputTagBI"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onFileCVChangeDrag}
              >
                <div className="btnFile">
                  <FaDownload />
                  <span>
                    {fileCVName
                      ? fileCVName
                      : 'Adicionar seu Bilhete de identidade'}
                  </span>

                  <input
                    type="file"
                    id="inputTagBI"
                    accept="application/pdf"
                    onChange={onFileCVChange}
                    style={{ display: 'none' }}
                  />
                </div>
                <p className="littleText">ou solte as imagens aqui</p>
              </label>

              <label
                htmlFor="inputTagCV"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onFileBIChangeDrag}
              >
                <div className="btnFile">
                  <FaDownload />
                  <span>
                    {filBIName ? filBIName : 'Adicionar seu currículo'}
                  </span>

                  <input
                    type="file"
                    hidden
                    id="inputTagCV"
                    accept="application/pdf"
                    onChange={onFileBIChange}
                  />
                </div>
                <p className="littleText">ou solte as imagens aqui</p>
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
                    accept="image"
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
