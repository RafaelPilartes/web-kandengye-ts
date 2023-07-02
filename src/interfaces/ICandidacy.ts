import { Gender } from '../models/enum/GenderTypes'

export type CandidacyInterface = {
  photo: string
  first_name: string
  last_name: string
  email: string
  phone: string
  province: string
  gender: 'Masculino' | 'Feminino' | ''
  identity_card: string
  curriculum: string
  vehicle_photo?: string
  application_areas?: string
  type_candidacy: 'Motorista' | 'Serviços Geral' | ''
}
