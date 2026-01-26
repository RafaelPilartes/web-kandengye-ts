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
  uploadPdfVehicleDoc,
  uploadPdfIdentityCard,
  uploadPdfVehicle
} from '../api/server'

// Images
import heroBg4 from '../assets/header/hero_bg_1.jpg'
import { useApplicationsViewModel } from '../viewModels/ApplicationViewModel'
import { useFileUploadViewModel } from '../viewModels/FileUploadViewModel'
import { showToast, showToastLoading, updateToast } from '../utils/toasts'
import { validationFile } from '../utils/file'
import { ApplicationInterface } from '../interfaces/IApplication'

function BecomeDriver() {
  const { createApplication } = useApplicationsViewModel()
  const { uploadByUserRef, isUploading, uploadError } = useFileUploadViewModel()

  const initialValues: ApplicationInterface = {
    photo: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    province: '',
    gender: '',
    status: 'pending',
    identity_card: '',
    vehicle_Doc: '',
    vehicle_photo: '',
    type_candidacy: 'Motorista'
  }

  const [driverData, setDriverData] =
    useState<ApplicationInterface>(initialValues)

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

  // DocVehicle
  const [fileDocVehicleSelect, setFileDocVehicleSelect] = useState<File[]>([])

  // BI
  const [fileBISelect, setFileBISelect] = useState<File[]>([])

  function handleMultipleFiles(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.DragEvent<HTMLLabelElement>,
    currentFiles: File[],
    maxPerUpload = 6 // limite opcional
  ) {
    event.preventDefault()

    const fileList =
      'dataTransfer' in event ? event.dataTransfer.files : event.target.files

    if (!fileList) return currentFiles

    const newFiles = Array.from(fileList)

    // validação individual
    for (const file of newFiles) {
      const { error, message } = validationFile(file, maxPerUpload)
      if (error) {
        showToast('error', message)
        return currentFiles
      }
    }

    return [...currentFiles, ...newFiles]
  }

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
  const onImageVehicleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilePhotoVehicleSelect(prev => handleMultipleFiles(event, prev))
  }

  const onImageVehicleChangeDrag = (
    event: React.DragEvent<HTMLLabelElement>
  ) => {
    setFilePhotoVehicleSelect(prev => handleMultipleFiles(event, prev))
  }

  // DocVehicle
  const onFileDocVehicleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFileDocVehicleSelect(prev => handleMultipleFiles(event, prev))
  }

  const onFileDocVehicleChangeDrag = (
    event: React.DragEvent<HTMLLabelElement>
  ) => {
    setFileDocVehicleSelect(prev => handleMultipleFiles(event, prev))
  }

  // BI
  const onFileBIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFileBISelect(prev => handleMultipleFiles(event, prev))
  }

  const onFileBIChangeDrag = (event: React.DragEvent<HTMLLabelElement>) => {
    setFileBISelect(prev => handleMultipleFiles(event, prev))
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
          // onClick={() => alert('rrr')}
          key={index}
          className="containerPhotos"
        >
          <img src={photo} alt="" />
        </div>
      )
    }
  )

  async function uploadMultipleFiles(
    selectedFiles: File[],
    folder: string
  ): Promise<{ urlFile: string; pathFile: string }[]> {
    if (!selectedFiles) showToast('error', 'Ficheiros não selecionados')

    try {
      const results: { urlFile: string; pathFile: string }[] = []

      for (const file of selectedFiles) {
        const toastId = showToastLoading(`Fazendo upload de ${file.name}`)
        const { url, path } = await uploadByUserRef({
          file,
          uploadType: 'applications',
          userRef: driverData.email,
          folder
        })
        results.push({
          urlFile: url as string,
          pathFile: path as string
        })
        updateToast(
          toastId,
          'success',
          `Ficheiro ${file.name} carregado com sucesso`
        )
      }

      return results
    } catch (err) {
      console.error('Erro no upload:', err)
      showToast('error', 'Erro ao carregar ficheiros')
      throw err // mantém consistência de Promise
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!filePhotoVehicleSelect.length)
      return showToast('warning', 'Adicione fotos do veículo')

    if (!fileDocVehicleSelect.length)
      return showToast('warning', 'Adicione documentos do veículo')

    if (!fileBISelect.length) return showToast('warning', 'Adicione BI')

    setIsSend(true)

    const toastId = showToastLoading(`Enviando candidatura`)

    try {
      // >> IdentityCard <<
      const vehiclePhotos = await uploadMultipleFiles(
        filePhotoVehicleSelect,
        'driver/vehicle_photos'
      )

      // >> VehicleDoc <<
      const vehicleDocs = await uploadMultipleFiles(
        fileDocVehicleSelect,
        'driver/vehicle_docs'
      )

      // >> Vehicle <<
      const biDocs = await uploadMultipleFiles(
        fileBISelect,
        'driver/identity_card'
      )

      // agora tens arrays certinhos de urls
      const newDriverData: any = {
        ...driverData,
        vehicle_photos: vehiclePhotos.map(f => f.urlFile),
        vehicle_docs: vehicleDocs.map(f => f.urlFile),
        identities_card: biDocs.map(f => f.urlFile)
      }

      await createApplication.mutateAsync(newDriverData)

      if (createApplication.isError) {
        updateToast(
          toastId,
          'error',
          'Houve algum erro ao enviar a candidatura'
        )
      } else {
        updateToast(toastId, 'success', 'Candidatura enviada com sucesso')
      }
    } catch (err) {
      updateToast(toastId, 'error', 'Erro ao enviar candidatura')
      console.error(err)
    } finally {
      setIsSend(false)
    }
  }

  useEffect(() => {
    // console.log(fileBISelect.map((item, index) => item.name))
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
                  name="first_name"
                  className="widCem"
                  required
                  type="text"
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
                  name="last_name"
                  className="widCem"
                  required
                  type="text"
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
                    {fileBISelect.length >= 1
                      ? fileBISelect.map((item, index) => (
                          <span> {item.name}, </span>
                        ))
                      : 'Adicionar seu Bilhete de identidade'}
                  </span>

                  <input
                    type="file"
                    hidden
                    id="inputTagBI"
                    accept="image/*,.pdf"
                    multiple
                    onChange={onFileBIChange}
                  />
                </div>
                <p className="littleText">
                  ou solte o seu Bilhete de identidade aqui
                </p>
              </label>

              <label
                htmlFor="inputTagDocVehicle"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={onFileDocVehicleChangeDrag}
              >
                <div className="btnFile">
                  <FaDownload />
                  <span>
                    {fileDocVehicleSelect.length >= 1
                      ? fileDocVehicleSelect.map((item, index) => (
                          <span> {item.name}, </span>
                        ))
                      : 'Adicionar documento da motorizada'}
                  </span>

                  <input
                    type="file"
                    id="inputTagDocVehicle"
                    accept="image/*,.pdf"
                    multiple
                    onChange={onFileDocVehicleChange}
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
