import { Gender } from '../models/enum/GenderTypes'

export type UserInterface = {
  _id: string
  first_name: string
  last_name: string
  photo_profile: string
  email: string
  password?: string
  gender?: Gender
  birth_day?: Gender
  createdAt?: Date
  updatedAt?: Date
}
