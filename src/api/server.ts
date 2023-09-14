import axios from 'axios'
import { BaseURL } from '../utils/urlApi'

export function loginUser(dataToLogin: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/user/login`
    axios
      .post(url, dataToLogin)
      .then(resData => {
        resolve(resData)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function sendUser(dataToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/user/create`
    axios
      .post(url, dataToSave)
      .then(resData => {
        resolve(resData)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function sendCandidacy(dataToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/candidacy/create`
    axios
      .post(url, dataToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadImageUser(imageToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/image/user`
    axios
      .post(url, imageToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadImageCandidacy(imageToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/image/candidacy`
    axios
      .post(url, imageToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadPdfIdentityCard(docToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/doc/identityCard`
    axios
      .post(url, docToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadPdfCurriculum(docToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/doc/curriculum`
    axios
      .post(url, docToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadPdfVehicle(imageToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/image/vehicle`
    axios
      .post(url, imageToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadPdfVehicleDoc(imageToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/doc/docVehicle`
    axios
      .post(url, imageToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export function sendMessage(dataToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/message/send`
    axios
      .post(url, dataToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
