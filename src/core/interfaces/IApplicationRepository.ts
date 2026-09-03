// core/interfaces/IApplicationRepository.ts
import type { ListResponseType } from '../../interfaces/IApiResponse'
import type { FieldPath, QueryOptions } from './IBaseRepository'
import { ApplicationEntity } from '../entities/Application'

/**
 * Alinhada com o motor: paginação por cursor, não por `offset` numérico.
 *
 * A forma antiga era posicional (`limit, offset, searchTerm, filters`) e não
 * cabia no motor. A tradução vive no service, que emula o offset lendo até ao
 * cursor — descartá-lo faria a página 2 devolver a página 1, sem erro nenhum.
 */
export interface IApplicationRepository {
  getAll(
    options?: QueryOptions<ApplicationEntity>
  ): Promise<ListResponseType<ApplicationEntity[]>>
  getById(id: string): Promise<ApplicationEntity | null>
  getByEmail(email: string): Promise<ApplicationEntity | null>
  getAllByField(
    field: FieldPath<ApplicationEntity>,
    value: unknown,
    options?: Omit<QueryOptions<ApplicationEntity>, 'filters'>
  ): Promise<ListResponseType<ApplicationEntity[]>>
  getOneByField(
    field: FieldPath<ApplicationEntity>,
    value: unknown
  ): Promise<ApplicationEntity | null>
  create(application: Omit<ApplicationEntity, 'id'>): Promise<ApplicationEntity>
  update(
    id: string,
    application: Partial<ApplicationEntity>
  ): Promise<ApplicationEntity>
  delete(id: string): Promise<void>
}
