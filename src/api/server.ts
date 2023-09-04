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
    const url = `${BaseURL}/user/register`
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
export function uploadPdfIdentityCard(pdfToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/pdf/identityCard`
    axios
      .post(url, pdfToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
export function uploadPdfCurriculum(pdfToSave: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `${BaseURL}/upload/pdf/curriculum`
    axios
      .post(url, pdfToSave)
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
