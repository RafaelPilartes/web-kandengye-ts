import apiClient from './axios.config'

export function loginUser(dataToLogin: any): Promise<any> {
  return new Promise((resolve, reject) => {
    const url = `/user/login`
    apiClient
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
    const url = `/user/create`
    apiClient
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
    const url = `/candidacy/create`
    apiClient
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
    const url = `/upload/image/user`
    apiClient
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
    const url = `/upload/image/candidacy`
    apiClient
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
    const url = `/upload/doc/identityCard`
    apiClient
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
    const url = `/upload/doc/curriculum`
    apiClient
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
    const url = `/upload/image/vehicle`
    apiClient
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
    const url = `/upload/doc/docVehicle`
    apiClient
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
    const url = `/message/send`
    apiClient
      .post(url, dataToSave)
      .then(resData => {
        resolve(resData.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}
