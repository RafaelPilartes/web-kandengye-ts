import { useContext, useEffect, useState } from 'react'

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
import BaseButton from '../components/BaseButton'

// Interface
import { UserInterface } from '../interfaces/IUser'

// Styles
import { ContainerNullArea } from '../styles/pages/NullStyles'
import { provinces } from '../data/labelProvince'
import { sendUser, uploadImageUser } from '../api/server'
import { AppContext } from '../provider/AppProvider'

function Register() {
  const initialValues: UserInterface = {
    photo: '',
    name: '',
    number: '',
    email: '',
    province: '',
    gender: '',
    password: ''
  }

  const [formValues, setFormValues] = useState<UserInterface>(initialValues)
  const [confirmePass, setConfirmePass] = useState<string>('')
  const [isSend, setIsSend] = useState<boolean>(false)

  // Photo
  const [filePhotoSelect, setFilePhotoSelect] = useState<string>('')
  const [photoSelect, setPhotoSelect] = useState<string>(
    'httpss://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg'
  )

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

  const handleDragOver = (event: any) => {
    event.preventDefault()
  }
  const handleDragLeave = () => {
    // fazer algo quando o mouse sai da área de soltar
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (formValues.password != confirmePass) {
      toast.error('As palavras-passes não coincidem ❌', {
        position: toast.POSITION.TOP_RIGHT
      })
      return
    }

    setIsSend(true)

    const imageData = new FormData()
    imageData.append('photoUser', filePhotoSelect)

    const resImage = await uploadImageUser(imageData)

    const imageUrl = resImage.imageUrl
    const message = resImage.msg

    if (resImage.error) {
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
      })
      setIsSend(false)
    } else {
      newUser(imageUrl)
    }
    // >> END -> Image candidacy <<
  }

  async function newUser(photo: string) {
    const newData: UserInterface = {
      photo: photo,
      name: formValues.name,
      number: formValues.number,
      email: formValues.email,
      province: formValues.province,
      gender: formValues.gender,
      password: formValues.password
    }

    try {
      const { data } = await sendUser(newData)

      console.log(data)

      if (data.error) {
        toast.error(data.msg, {
          position: toast.POSITION.TOP_RIGHT
        })
        setIsSend(false)
      } else {
        toast.success(data.msg, {
          position: toast.POSITION.TOP_RIGHT
        })

        setIsSend(false)

        setTimeout(() => {
          window.location.href = '/login'
        }, 4000)
      }
    } catch (error) {
      // Lógica para tratar erros de requisição
      console.error('Catch error => ', error)
      setIsSend(false)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <ContainerNullArea>
      <ToastContainer />

      <section className="NullArea">
        <div className="containerNullArea">
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
                  accept="image/*"
                  onChange={onImageChange}
                />
              </label>
              <span className="bigText">Sua fotografia</span>
              <span className="littleText">
                Selecione ou solte as imagens aqui
              </span>
            </div>

            <TextField
              name="name"
              type="text"
              className="widCem"
              required
              id="outlined-required"
              label="Nome completo"
              onChange={e =>
                setFormValues({
                  ...formValues,
                  name: e.target.value
                })
              }
            />

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
                  number: e.target.value
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

            <TextField
              name="password"
              type="password"
              className="widCem"
              required
              id="outlined-required"
              label="Sua palavra-passe"
              onChange={e =>
                setFormValues({
                  ...formValues,
                  password: e.target.value
                })
              }
            />
            <TextField
              name="password"
              type="password"
              className="widCem"
              required
              id="outlined-required"
              label="Confirme a sua palavra-passe"
              onChange={e => setConfirmePass(e.target.value)}
            />

            <BaseButton
              name="Enviar formulário"
              isLoading={isSend}
              disabled={isSend}
              colorTxt={defaultTheme.colors['base-white']}
              colorBg={defaultTheme.colors['brand-primary']}
            />
          </form>
        </div>
      </section>
    </ContainerNullArea>
  )
}

export default Register
