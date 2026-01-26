import { useContext, useEffect, useState } from 'react'

// toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Modulos do material
import TextField from '@mui/material/TextField'

// Modulos de aos animação de scroll
import Aos from 'aos'
import 'aos/dist/aos.css'

// Theme
import { defaultTheme } from '../themes/default'

// Component
import BaseButton from '../components/BaseButton'

// Interface
import { ApplicationCredencialInterface } from '../interfaces/IApplication'

// Styles
import { ContainerNullArea } from '../styles/pages/NullStyles'
import { loginUser } from '../api/server'

// Images
import imgLogoSemNOme from '/public/it_logo_name.svg'
import { AppContext } from '../provider/AppProvider'

function Login() {
  const { setUser } = useContext(AppContext)

  const initialValues: ApplicationCredencialInterface = {
    email: '',
    password: ''
  }

  const [formValues, setFormValues] =
    useState<ApplicationCredencialInterface>(initialValues)
  const [isSend, setIsSend] = useState<boolean>(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    const credencial: ApplicationCredencialInterface = {
      email: formValues.email,
      password: formValues.password
    }

    try {
      const { data } = await loginUser(credencial)

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

        const dataStringify = JSON.stringify(data.userInfo)

        localStorage.setItem('userInfo', dataStringify)

        setUser(data.userInfo)
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
          <form>
            <div className="containerTitleSection">
              <img width={'240px'} src={imgLogoSemNOme} alt="Tchossy" />
              {/* <h4>Login</h4> */}
              <p>Bem-vindo de volta, preencha os campos para efetuar o login</p>
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
              name="password"
              type="password"
              className="widCem"
              required
              id="outlined-required"
              label="Palavra-passe"
              onChange={e =>
                setFormValues({
                  ...formValues,
                  password: e.target.value
                })
              }
            />

            <BaseButton
              name="Login"
              isLoading={isSend}
              disabled={isSend}
              colorTxt={defaultTheme.colors['base-white']}
              colorBg={defaultTheme.colors['brand-primary']}
              onClickButton={handleSubmit}
            />
          </form>
        </div>
      </section>
    </ContainerNullArea>
  )
}

export default Login
