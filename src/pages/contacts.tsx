import { FormEvent, useEffect, useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { MdOutlineAttachEmail } from 'react-icons/md'
import { useLocation } from 'react-router-dom'

import { sendMessage } from '../api/server'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import Button from '../components/ui/Button'
import TextAreaField from '../components/ui/TextAreaField'
import TextField from '../components/ui/TextField'
import { contactInfo } from '../data/contactInfo'
import { MessageInterface } from '../interfaces/IMessage'
import { showToast } from '../utils/toasts'

import heroBg from '../assets/header/bg_header_2.jpg'

const initialValues: MessageInterface = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

function Contacts() {
  const [messageData, setMessageData] = useState<MessageInterface>(initialValues)
  const [isSending, setIsSending] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  function setField<K extends keyof MessageInterface>(
    field: K,
    value: MessageInterface[K]
  ) {
    setMessageData(current => ({ ...current, [field]: value }))
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setIsSending(true)

    try {
      const data = await sendMessage(messageData)

      if (data.error) {
        showToast('error', data.msg)
        return
      }

      showToast('success', data.msg)
      // Limpa o formulario em vez de recarregar a pagina — o
      // `window.location.reload()` de antes apagava tambem o toast de sucesso.
      setMessageData(initialValues)
    } catch (error) {
      console.error('Catch error => ', error)
      showToast('error', 'Não foi possível enviar a mensagem.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="flex flex-col">
      <HeroSection
        backgroundImage={heroBg}
        title="Contactos"
        breadcrumb={['Contactos']}
      />

      <div className="container-page grid items-start gap-16 section-padding lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-24">
        <section className="flex w-full flex-col gap-10">
          <SectionHeading
            title="Entrar em contacto"
            description="Escreva-nos e respondemos no mesmo dia útil. Para assuntos urgentes, ligue."
          />

          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
            <TextField
              label="Nome"
              name="name"
              required
              value={messageData.name}
              onChange={event => setField('name', event.target.value)}
            />
            <TextField
              label="E-mail"
              name="email"
              type="email"
              required
              value={messageData.email}
              onChange={event => setField('email', event.target.value)}
            />
            <TextField
              label="Assunto"
              name="subject"
              required
              value={messageData.subject}
              onChange={event => setField('subject', event.target.value)}
            />
            {/*
              Era um `input type="text"` de uma linha — numa caixa de
              mensagem. Passou a `textarea`.
            */}
            <TextAreaField
              label="A sua mensagem"
              name="message"
              required
              value={messageData.message}
              onChange={event => setField('message', event.target.value)}
            />

            <Button type="submit" isLoading={isSending} className="self-start">
              Enviar agora
            </Button>
          </form>
        </section>

        {/*
          Coluna de apoio, não uma secção a par da outra: o título vem mais
          pequeno, senão os dois competem pela mesma atenção.
        */}
        <aside className="w-full rounded-3xl bg-ink p-8 text-white sm:p-10">
          <h2 className="font-title text-title-m font-bold text-white">
            Falar connosco directamente
          </h2>

          <dl className="mt-8 flex flex-col gap-7">
            <div className="flex flex-col gap-1.5">
              <dt className="flex flex-row items-center gap-2.5 text-sm font-semibold text-white/50">
                <FiPhoneCall aria-hidden className="text-red" />
                Telefone
              </dt>
              <dd>
                <a
                  href={contactInfo.phoneHref}
                  className="text-lede font-medium text-white transition-colors hover:text-red"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </dd>
            </div>

            <div className="flex flex-col gap-1.5">
              <dt className="flex flex-row items-center gap-2.5 text-sm font-semibold text-white/50">
                <MdOutlineAttachEmail aria-hidden className="text-red" />
                E-mail
              </dt>
              <dd>
                <a
                  href={contactInfo.emailHref}
                  className="break-all text-lede font-medium text-white transition-colors hover:text-red"
                >
                  {contactInfo.email}
                </a>
              </dd>
            </div>

            <div className="flex flex-col gap-1.5">
              <dt className="flex flex-row items-center gap-2.5 text-sm font-semibold text-white/50">
                <GoLocation aria-hidden className="text-red" />
                Endereço
              </dt>
              <dd className="text-lede font-medium text-white">{contactInfo.location}</dd>
            </div>
          </dl>
        </aside>
      </div>

      <iframe
        title="Localização da Kandengue Atrevido no mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.744366605693!2d13.182482292855072!3d-8.954993670750358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a521fcf8b8a2515%3A0x6b03e0f60cc9e40f!2sBUILDORA%2C%20LDA!5e0!3m2!1spt-BR!2sao!4v1657912335493!5m2!1spt-BR!2sao"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[28rem] w-full border-0 md:h-[40rem]"
      />
    </div>
  )
}

export default Contacts
