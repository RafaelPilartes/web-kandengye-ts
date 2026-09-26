import apiClient from './axios.config'

/*
 * Chamadas REST à API. As que serviam a autenticação (`loginUser`,
 * `sendUser`, `uploadImageUser`) sairam com o fluxo de login — este site
 * nao tem sessao.
 */

export async function sendCandidacy(dataToSave: unknown) {
  const { data } = await apiClient.post('/candidacy/create', dataToSave)
  return data
}

export async function uploadImageCandidacy(imageToSave: FormData) {
  const { data } = await apiClient.post('/upload/image/candidacy', imageToSave)
  return data
}

export async function uploadPdfIdentityCard(docToSave: FormData) {
  const { data } = await apiClient.post('/upload/doc/identityCard', docToSave)
  return data
}

export async function uploadPdfCurriculum(docToSave: FormData) {
  const { data } = await apiClient.post('/upload/doc/curriculum', docToSave)
  return data
}

export async function uploadPdfVehicle(imageToSave: FormData) {
  const { data } = await apiClient.post('/upload/image/vehicle', imageToSave)
  return data
}

export async function uploadPdfVehicleDoc(docToSave: FormData) {
  const { data } = await apiClient.post('/upload/doc/docVehicle', docToSave)
  return data
}

export async function sendMessage(dataToSave: unknown) {
  const { data } = await apiClient.post('/message/send', dataToSave)
  return data
}
