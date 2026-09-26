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
import { useApplicationUpload } from '../hooks/useApplicationUpload'
import { showToast, showToastLoading, updateToast } from '../utils/toasts'
import { validationFile, validationFileImage } from '../utils/file'
import { useApplicationsViewModel } from '../viewModels/ApplicationViewModel'

import heroBg from '../assets/header/hero_bg_1.jpg'

// O segundo argumento de `validationFile` e o tamanho maximo em MB. Antes
// chamava-se `maxPerUpload`, o que fazia parecer um limite de quantidade.
const MAX_FILE_SIZE_MB = 6

function BecomeDriver() {
  const { createApplication } = useApplicationsViewModel()

  const [identity, setIdentity] = useState<ApplicantIdentity>(
    emptyApplicantIdentity
  )
  const [photo, setPhoto] = useState<File | null>(null)
  const [identityCards, setIdentityCards] = useState<File[]>([])
  const [vehicleDocs, setVehicleDocs] = useState<File[]>([])
  const [vehiclePhotos, setVehiclePhotos] = useState<File[]>([])
  const [isSending, setIsSending] = useState(false)

  const { uploadMany } = useApplicationUpload(identity.email)

  /** Aceita apenas o que passa a validacao; o resto e recusado com aviso. */
  function acceptFiles(
    incoming: File[],
    validate: typeof validationFile
  ): File[] {
    return incoming.filter(file => {
      const { error, message } = validate(file, MAX_FILE_SIZE_MB)
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
      description: 'Por onde falamos consigo e onde costuma trabalhar.',
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
      title: 'Documentos',
      description: 'O seu bilhete de identidade e os documentos do veículo.',
      validate: () => {
        if (!identityCards.length) return 'Adicione o bilhete de identidade.'
        if (!vehicleDocs.length)
          return 'Adicione os documentos do veículo.'
        return null
      },
      fields: (
        <>
          <FileDropField
            label="Bilhete de identidade (BI)"
            accept="image/*,.pdf"
            required
            files={identityCards}
            onFilesChange={files =>
              setIdentityCards(acceptFiles(files, validationFile))
            }
          />

          <FileDropField
            label="Documentos do veículo"
            accept="image/*,.pdf"
            required
            files={vehicleDocs}
            onFilesChange={files =>
              setVehicleDocs(acceptFiles(files, validationFile))
            }
          />
        </>
      )
    },
    {
      title: 'O veículo',
      description: 'Fotografias da moto com que vai trabalhar.',
      validate: () =>
        vehiclePhotos.length ? null : 'Adicione fotografias do veículo.',
      fields: (
        <FileDropField
          label="Fotografias do veículo"
          accept="image/png, image/jpeg, image/jpg"
          display="preview"
          required
          files={vehiclePhotos}
          onFilesChange={files =>
            setVehiclePhotos(acceptFiles(files, validationFileImage))
          }
        />
      )
    }
  ]

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    setIsSending(true)
    const toastId = showToastLoading('A enviar a candidatura')

    try {
      const [photoUrl] = await uploadMany([photo!], 'driver/photo_candidacy')
      const identityCardUrls = await uploadMany(
        identityCards,
        'driver/identity_card'
      )
      const vehicleDocUrls = await uploadMany(vehicleDocs, 'driver/vehicle_docs')
      const vehiclePhotoUrls = await uploadMany(
        vehiclePhotos,
        'driver/vehicle_photos'
      )

      await createApplication.mutateAsync({
        ...identity,
        photo: photoUrl,
        status: 'pending',
        type_candidacy: 'Motorista',
        identities_card: identityCardUrls,
        vehicle_docs: vehicleDocUrls,
        vehicle_photos: vehiclePhotoUrls
      })

      // `mutateAsync` lanca em caso de erro, por isso chegar aqui ja e
      // sucesso. O ramo `if (createApplication.isError)` que aqui estava lia
      // um estado ainda nao actualizado e nunca disparava.
      updateToast(toastId, 'success', 'Candidatura enviada com sucesso')

      setIdentity(emptyApplicantIdentity)
      setPhoto(null)
      setIdentityCards([])
      setVehicleDocs([])
      setVehiclePhotos([])
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
      breadcrumb={['Torne-se um motorista']}
      title="Candidatura a estafeta"
      description="São quatro passos. A equipa entra em contacto depois de analisar a candidatura."
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

export default BecomeDriver
