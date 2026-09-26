import { FormEvent, useState } from 'react'

import ApplicationFormLayout from '../components/forms/ApplicationFormLayout'
import StepForm, { FormStep } from '../components/forms/StepForm'
import {
  ApplicantContactFields,
  ApplicantIdentity,
  ApplicantPersonalFields,
  emptyApplicantIdentity
} from '../components/forms/ApplicantIdentityFields'
import FileDropField from '../components/ui/FileDropField'
import SelectField from '../components/ui/SelectField'
import { useApplicationUpload } from '../hooks/useApplicationUpload'
import { validationFile } from '../utils/file'
import { showToast, showToastLoading, updateToast } from '../utils/toasts'
import { useApplicationsViewModel } from '../viewModels/ApplicationViewModel'

import heroBg from '../assets/header/hero_bg_1.jpg'

const MAX_FILE_SIZE_MB = 6

const applicationAreas = [
  { label: 'Administração' },
  { label: 'Finanças' },
  { label: 'Comunicação e imagem' },
  { label: 'Intercâmbio' },
  { label: 'Tecnologia e informação' },
  { label: 'Serviços gerais' }
]

function WorkWithUs() {
  const { createApplication } = useApplicationsViewModel()

  const [identity, setIdentity] = useState<ApplicantIdentity>(
    emptyApplicantIdentity
  )
  const [applicationArea, setApplicationArea] = useState('')
  const [photo, setPhoto] = useState<File | null>(null)
  const [identityCard, setIdentityCard] = useState<File[]>([])
  const [curriculum, setCurriculum] = useState<File[]>([])
  const [isSending, setIsSending] = useState(false)

  const { uploadOne } = useApplicationUpload(identity.email)

  function acceptFiles(incoming: File[]): File[] {
    // Um ficheiro de cada — o ultimo escolhido substitui o anterior.
    return incoming.slice(-1).filter(file => {
      const { error, message } = validationFile(file, MAX_FILE_SIZE_MB)
      if (error) showToast('error', message)
      return !error
    })
  }

  const steps: FormStep[] = [
    {
      title: 'Os seus dados',
      description: 'Como se chama e uma fotografia sua.',
      validate: () => {
        if (!photo) return 'Adicione a sua fotografia.'
        if (!identity.first_name.trim() || !identity.last_name.trim())
          return 'Preencha o primeiro e o último nome.'
        if (!identity.gender) return 'Escolha o género.'
        return null
      },
      fields: (
        <ApplicantPersonalFields
          values={identity}
          onChange={setIdentity}
          photo={photo}
          onPhotoChange={setPhoto}
        />
      )
    },
    {
      title: 'Contacto',
      description: 'Por onde falamos consigo.',
      validate: () => {
        if (!identity.email.includes('@')) return 'Escreva um e-mail válido.'
        if (identity.phone.trim().length < 9)
          return 'Escreva o número de telefone completo.'
        if (!identity.province) return 'Escolha a província.'
        return null
      },
      fields: <ApplicantContactFields values={identity} onChange={setIdentity} />
    },
    {
      title: 'A candidatura',
      description: 'Em que área se quer candidatar, e os seus documentos.',
      validate: () => {
        // Antes isto avisava mas nao travava — a candidatura seguia sem area.
        if (!applicationArea) return 'Escolha uma área de candidatura.'
        if (!identityCard.length) return 'Adicione o bilhete de identidade.'
        if (!curriculum.length) return 'Adicione o currículo.'
        return null
      },
      fields: (
        <>
          <SelectField
            label="Área de candidatura"
            name="application_areas"
            required
            options={applicationAreas}
            value={applicationArea}
            onChange={event => setApplicationArea(event.target.value)}
          />

          <FileDropField
            label="Bilhete de identidade (BI)"
            accept="image/*,.pdf"
            multiple={false}
            required
            files={identityCard}
            onFilesChange={files => setIdentityCard(acceptFiles(files))}
          />

          <FileDropField
            label="Currículo (CV)"
            accept="image/*,.pdf"
            multiple={false}
            required
            files={curriculum}
            onFilesChange={files => setCurriculum(acceptFiles(files))}
          />
        </>
      )
    }
  ]

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setIsSending(true)
    const toastId = showToastLoading('A enviar a candidatura')

    try {
      const photoUrl = await uploadOne(photo!, 'general_services/photo_candidacy')
      const identityCardUrl = await uploadOne(
        identityCard[0],
        'general_services/identity_card'
      )
      const curriculumUrl = await uploadOne(
        curriculum[0],
        'general_services/curriculum'
      )

      await createApplication.mutateAsync({
        ...identity,
        photo: photoUrl,
        status: 'pending',
        identity_card: identityCardUrl,
        curriculum: curriculumUrl,
        application_areas: applicationArea,
        type_candidacy: 'Serviços Geral'
      })

      updateToast(toastId, 'success', 'Candidatura enviada com sucesso')

      setIdentity(emptyApplicantIdentity)
      setApplicationArea('')
      setPhoto(null)
      setIdentityCard([])
      setCurriculum([])
    } catch (error) {
      console.error(error)
      updateToast(toastId, 'error', 'Erro ao enviar a candidatura')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <ApplicationFormLayout
      heroImage={heroBg}
      heroTitle="Formulário"
      breadcrumb={['Trabalhar connosco']}
      title="Candidatura geral"
      description="São três passos. Escolha a área e anexe o seu currículo."
    >
      <StepForm
        steps={steps}
        isSubmitting={isSending}
        submitLabel="Enviar candidatura"
        onSubmit={handleSubmit}
        onInvalid={message => showToast('warning', message)}
      />
    </ApplicationFormLayout>
  )
}

export default WorkWithUs
