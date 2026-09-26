import { provinces } from '../../data/labelProvince'
import AvatarPicker from '../ui/AvatarPicker'
import RadioGroupField from '../ui/RadioGroupField'
import SelectField from '../ui/SelectField'
import TextField from '../ui/TextField'

export interface ApplicantIdentity {
  first_name: string
  last_name: string
  email: string
  phone: string
  province: string
  gender: string
}

export const emptyApplicantIdentity: ApplicantIdentity = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  province: '',
  gender: ''
}

interface FieldGroupProps {
  values: ApplicantIdentity
  onChange: (values: ApplicantIdentity) => void
}

function useSetField({ values, onChange }: FieldGroupProps) {
  return function setField<K extends keyof ApplicantIdentity>(
    field: K,
    value: ApplicantIdentity[K]
  ) {
    onChange({ ...values, [field]: value })
  }
}

/**
 * Quem se candidata: fotografia, nome e género.
 *
 * Os campos de identificação estão divididos em dois grupos porque as
 * páginas de candidatura os pedem em passos separados — ver `StepForm`.
 */
export function ApplicantPersonalFields({
  values,
  onChange,
  photo,
  onPhotoChange
}: FieldGroupProps & {
  photo: File | null
  onPhotoChange: (file: File | null) => void
}) {
  const setField = useSetField({ values, onChange })

  return (
    <>
      <AvatarPicker file={photo} onFileChange={onPhotoChange} />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
        <TextField
          label="Primeiro nome"
          name="first_name"
          required
          value={values.first_name}
          onChange={event => setField('first_name', event.target.value)}
        />
        <TextField
          label="Último nome"
          name="last_name"
          required
          value={values.last_name}
          onChange={event => setField('last_name', event.target.value)}
        />
      </div>

      <RadioGroupField
        label="Género"
        name="gender"
        required
        value={values.gender}
        onChange={value => setField('gender', value)}
        options={[
          { label: 'Feminino', value: 'Feminino' },
          { label: 'Masculino', value: 'Masculino' }
        ]}
      />
    </>
  )
}

/** Como chegar à pessoa: e-mail, telefone e província. */
export function ApplicantContactFields({ values, onChange }: FieldGroupProps) {
  const setField = useSetField({ values, onChange })

  return (
    <>
      <TextField
        label="E-mail"
        name="email"
        type="email"
        autoComplete="email"
        required
        hint="É por aqui que damos notícias da candidatura."
        value={values.email}
        onChange={event => setField('email', event.target.value)}
      />

      {/*
        Era `type="number"`: a roda do rato alterava o número de telefone sem
        querer, e um indicativo com `+` nao passava. `tel` e o tipo certo.
      */}
      <TextField
        label="Número de telefone"
        name="phone"
        type="tel"
        inputMode="tel"
        autoComplete="tel"
        required
        value={values.phone}
        onChange={event => setField('phone', event.target.value)}
      />

      <SelectField
        label="Província"
        name="province"
        required
        options={provinces}
        value={values.province}
        onChange={event => setField('province', event.target.value)}
      />
    </>
  )
}
