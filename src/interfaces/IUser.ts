import { Gender } from '../models/enum/GenderTypes'

export type UserInterface = {
  id?: string
  photo: string
  name: string
  number: string
  email: string
  province: string
  gender: string
  password: string
  date_create?: string
}
export type UserCredencialInterface = {
  email: string
  password: string
}
