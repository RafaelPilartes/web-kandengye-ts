import type { IApplicationRepository } from '../../core/interfaces/IApplicationRepository'
import { FirebaseApplicationDAO } from './firebase/application.dao'
import type { IFileRepository } from '../../core/interfaces/IFileRepository'
import { FirebaseFileDAO } from './firebase/file.dao'
// import { RestApplicationDAO } from "./rest/applications.dao"; // Futuro

// Factory para escolher implementação
export const applicationRepository: IApplicationRepository =
  new FirebaseApplicationDAO()

export const fileRepository: IFileRepository = new FirebaseFileDAO()
