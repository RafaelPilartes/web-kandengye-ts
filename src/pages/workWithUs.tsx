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
import { ApplicationInterface } from '../interfaces/IApplication'

// Styles
import { ContainerWorkWithUs } from '../styles/pages/WorkWithUsStyles'
import { FaDownload } from 'react-icons/fa'
import { provinces } from '../data/labelProvince'

// Images
import heroBg4 from '../assets/header/hero_bg_1.jpg'
import { useApplicationsViewModel } from '../viewModels/ApplicationViewModel'
import { useFileUploadViewModel } from '../viewModels/FileUploadViewModel'
import { validationFile, validationFileImage } from '../utils/file'
import { showToast, showToastLoading, updateToast } from '../utils/toasts'

function WorkWithUs() {
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
    useState<ApplicationInterface>(initialValues)
  const [isSend, setIsSend] = useState<boolean>(false)
  const [haveError, setHaveError] = useState<boolean>(false)

  // Photo
  const [filePhotoSelect, setFilePhotoSelect] = useState<File | undefined>()
  const [imagePreview, setImagePreview] = useState<string>(
    'httpss://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg'
  )

  // CV
  const [fileCVSelect, setFileCVSelect] = useState<File | undefined>()
  const [fileCVName, setFileCVName] = useState<string>('')
  // BI
  const [filBISelect, setFilBISelect] = useState<File | undefined>()
  const [filBIName, setFilBIName] = useState<string>('')

  // Image
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]

    if (!file) return

    const { error, message } = validationFileImage(file, 6)

    if (error) {
      showToast('error', message)
      return
    }

    setFilePhotoSelect(file)
    setImagePreview(URL.createObjectURL(file))
  }

  // CV
  const onFileCVChangeDrag = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files

    setFileCVSelect(file)
    setFileCVName(file.name)
  }
  const onFileCVChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const { error, message } = validationFile(file, 6)

    if (error) {
      showToast('error', message)
      return
    }

    setFileCVSelect(file)
    setFileCVName(file.name)
  }

  // BI
  const onFileBIChangeDrag = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault()

    const [file] = event.dataTransfer.files

    setFilBISelect(file)
    setFilBIName(file.name)
  }
  const onFileBIChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const { error, message } = validationFile(file, 6)

    if (error) {
      showToast('error', message)
      return
    }

    setFilBISelect(file)
    setFilBIName(file.name)
  }

  const handleDragOver = (event: any) => {
    event.preventDefault()
  }
  const handleDragLeave = () => {
    // fazer algo quando o mouse sai da área de soltar
  }

  // Function Upload Photo
  async function handleUpload(
    selectedFile: File,
    folder?: string
  ): Promise<{
    urlFile: string
    pathFile: string
  }> {
    if (!selectedFile) showToast('error', 'Ficheiro não selecionada')

    const toastId = showToastLoading(`Fazendo upload de ${selectedFile.name}`)
    try {
      const { url, path } = await uploadByUserRef({
        file: selectedFile,
        uploadType: 'applications',
        userRef: formValues.email,
        folder: folder
      })

      if (!url || !path) {
        updateToast(
          toastId,
          'error',
          uploadError ? uploadError : 'Houve algum erro no upload do ficheiro'
        )
        throw new Error('Erro ao carregar ficheiro: retorno inválido')
      }

      const urlFile = url as string
      const pathFile = path as string

      updateToast(
        toastId,
        'success',
        `Ficheiro ${selectedFile.name} carregado com sucesso`
      )
      return {
        urlFile,
        pathFile
      }
    } catch (err) {
      console.error('Erro no upload:', err)
      updateToast(toastId, 'error', 'Erro ao carregar ficheiro')
      throw err // mantém consistência de Promise
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!filePhotoSelect) {
      showToast('warning', 'Imagem nao selecionada')
      return
    }
    if (!filBISelect) {
      showToast('warning', 'BI nao selecionada')
      return
    }
    if (!fileCVSelect) {
      showToast('warning', 'CV nao selecionada')
      return
    }

    try {
      setIsSend(true)

      // >> Image candidacy <<
      const { urlFile: imageUrl } = await handleUpload(
        filePhotoSelect,
        'general_services/photo_candidacy'
      )

      if (!imageUrl) {
        showToast('error', 'Houve algum erro no upload da imagem')
        return
      }

      // >> IdentityCard <<
      const { urlFile: identityCardUrl } = await handleUpload(
        filBISelect,
        'general_services/identity_card'
      )

      if (!identityCardUrl) {
        showToast('error', 'Houve algum erro no upload do BI')
        return
      }

      // >> Curriculum <<
      const { urlFile: curriculumUrl } = await handleUpload(
        fileCVSelect,
        'general_services/curriculum'
      )

      if (!curriculumUrl) {
        showToast('error', 'Houve algum erro no upload do CV')
        return
      }

      newCandidacy(imageUrl, identityCardUrl, curriculumUrl)
    } catch (error: any) {
      showToast('error', error.message || 'Erro ao salvar documento')
    } finally {
      setIsSend(false)
    }
  }

  async function newCandidacy(
    photo: string,
    identity_card: string,
    curriculum: string
  ) {
    const newData: any = {
      photo: photo,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      email: formValues.email,
      phone: formValues.phone,
      province: formValues.province,
      gender: formValues.gender,
      status: 'pending',
      identity_card: identity_card,
      curriculum: curriculum,
      application_areas: formValues.application_areas,
      type_candidacy: formValues.type_candidacy
    }

    if (newData.application_areas == '') {
      showToast('warning', 'Seleciona uma area de candidatura')
    }

    const toastId = showToastLoading(`Enviando candidatura`)
    try {
      await createApplication.mutateAsync(newData)

      if (createApplication.isError) {
        showToast('error', 'Houve algum erro ao enviar a candidatura')
      } else {
        showToast('success', 'Candidatura enviada com sucesso!')

        setIsSend(false)

        updateToast(toastId, 'success', 'Candidatura enviada com sucesso!')

        setTimeout(() => {
          window.location.reload()
        }, 4000)
      }
    } catch (error) {
      updateToast(toastId, 'error', 'Erro ao carregar ficheiros')

      console.error(error)
    }
  }

  useEffect(() => {
    setIsSend(false)
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerWorkWithUs>
      <ToastContainer />

      <HeroSection
        backgroundImage={heroBg4}
        title="Formulário"
        base1="Trabalhar connosco"
      />

      <section className="WorkWithUs">
        <div className="containerContent">
          <div className="containerWorkWithUs">
            <div className="descriptionSection">
              <h1 data-aos="fade-up">
                <strong>CANDIDATURA GERAL</strong>
              </h1>
            </div>

            <form onSubmit={handleSubmit}>
              <div
                className="sectionPhoto"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                // onDrop={onImageChangeDrag}
              >
                <label className="containerPhotoUser" htmlFor="photoUser">
                  <img src={imagePreview} alt="" />

                  <input
                    hidden
                    type="file"
                    id="photoUser"
                    name="photoUser"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                </label>
                <div className="photoTexts">
                  <span className="bigText">Sua fotografia</span>
                  <span className="littleText">
                    Selecione ou solte as imagens aqui
                  </span>
                </div>
              </div>

              <div className="row">
                <TextField
                  name="name"
                  className="widCem"
                  required
                  variant="outlined"
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
                  variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
                renderInput={params => (
                  <TextField {...params} variant="outlined" label="Província" />
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
                renderInput={params => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Áreas de candidatura"
                  />
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
                    control={<Radio color="error" />}
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
                    control={<Radio color="error" />}
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
                      : 'Adicionar seu Bilhete de identidade (BI)'}
                  </span>

                  <input
                    type="file"
                    hidden
                    id="inputTagBI"
                    accept="image/*,.pdf"
                    onChange={onFileBIChange}
                  />
                </div>
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
                    {fileCVName ? fileCVName : 'Adicionar seu currículo (CV)'}
                  </span>

                  <input
                    type="file"
                    id="inputTagCV"
                    accept="image/*,.pdf"
                    onChange={onFileCVChange}
                    style={{ display: 'none' }}
                  />
                </div>
              </label>

              <BaseButton
                name="Enviar candidatura"
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
