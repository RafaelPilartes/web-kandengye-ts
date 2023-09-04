import React, { createContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Theme
import { defaultTheme } from '../themes/default'

// Icons
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { GoLocation } from 'react-icons/go'

// Styles
import {
  ContainerContacts,
  ContainerLeft,
  ContainerRight,
  SButton
} from '../styles/pages/contactsStyles'
import { MessageInterface } from '../interfaces/IMessage'
import BaseButton from '../components/BaseButton'
import { sendMessage } from '../api/server'

const Contacts: React.FC = (): JSX.Element => {
  const position = [51.505, -0.09]

  const initialValues: MessageInterface = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [isSend, setIsSend] = useState<boolean>(false)
  const [messageData, setMessageData] =
    useState<MessageInterface>(initialValues)

  async function newMessage() {
    console.log(messageData)
    setIsSend(true)

    const data = await sendMessage(messageData)

    console.log(data)

    if (data.error) {
      toast.error(data.msg, {
        position: toast.POSITION.TOP_RIGHT
      })
    } else {
      toast.success(data.msg, {
        position: toast.POSITION.TOP_RIGHT
      })

      setTimeout(() => {
        window.location.reload()
      }, 4000)
    }

    setIsSend(false)
  }

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <ContainerContacts>
      <ToastContainer />

      <div className="hero">
        <div className="infoHero">
          <div className=" path">
            <Link style={{ color: '#ff1e00' }} to="/">
              Home
            </Link>
            <p> / </p>
            <p> Contactos </p>
          </div>

          <h1>Contactos</h1>
        </div>
        <div className="shadow"></div>
      </div>

      <div className="container">
        <ContainerLeft>
          <div className="title">
            <div className="sutTitle">
              <span className="left"></span>
              <p>Contacte agora</p>
              <span className="right"></span>
            </div>
            <h1>Entrar Em Contacto</h1>
          </div>

          <div className="containerForm">
            <div className="field">
              <input
                placeholder="Nome"
                type="text"
                required
                onChange={e =>
                  setMessageData({
                    ...messageData,
                    name: e.target.value
                  })
                }
              />
            </div>

            <div className="field">
              <input
                placeholder="Email"
                type="text"
                required
                onChange={e =>
                  setMessageData({
                    ...messageData,
                    email: e.target.value
                  })
                }
              />
            </div>

            <div className="field">
              <input
                placeholder="Assunto"
                type="text"
                required
                onChange={e =>
                  setMessageData({
                    ...messageData,
                    subject: e.target.value
                  })
                }
              />
            </div>

            <div className="field">
              <input
                placeholder="Sua Mensagem"
                type="text"
                required
                onChange={e =>
                  setMessageData({
                    ...messageData,
                    message: e.target.value
                  })
                }
              />
            </div>

            <BaseButton
              name="Envie Agora"
              isLoading={isSend}
              disabled={isSend}
              colorTxt={defaultTheme.colors['base-white']}
              colorBg={defaultTheme.colors['brand-primary']}
              onClickButton={() => {
                newMessage()
              }}
            />
          </div>
        </ContainerLeft>

        <ContainerRight>
          <div className="title">
            <div className="sutTitle">
              <span className="left"></span>
              <p>Nossas informações</p>
              <span className="right"></span>
            </div>
            <h1>Informações De Contacto</h1>
          </div>

          <div className="containerInfo">
            <div className="field">
              <strong>
                <FiPhoneCall /> Telefone :
              </strong>
              <a href="tel:938624620">(+244) 938 624 620</a>
            </div>

            <div className="field">
              <strong>
                <MdOutlineAttachEmail /> E-mail :
              </strong>
              <a href="mailto:info@kandengue.com">info@kandengue.com</a>
            </div>

            <div className="field">
              <strong>
                <GoLocation /> Endereço :
              </strong>
              <p>Angola, Luanda, Benfica, Av. 21 de Janeiro</p>
            </div>
          </div>
        </ContainerRight>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.744366605693!2d13.182482292855072!3d-8.954993670750358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521fcf8b8a2515%3A0x6b03e0f60cc9e40f!2sBUILDORA%2C%20LDA!5e0!3m2!1spt-BR!2sao!4v1657912335493!5m2!1spt-BR!2sao"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>

      <br />
      <br />
      <br />
      <br />
      <br />
    </ContainerContacts>
  )
}

export default Contacts
