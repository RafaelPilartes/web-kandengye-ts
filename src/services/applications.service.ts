// services/applications.service.ts
import { applicationRepository } from '../modules/Api'
import { ApplicationEntity } from '../core/entities/Application'
import type { ListResponseType } from '../interfaces/IApiResponse'
import type { FieldPath } from '../core/interfaces/IBaseRepository'
import { BaseUseCase } from '../domain/usecases/BaseUseCase'

/**
 * A assinatura pública mantém-se posicional porque é o que as páginas usam. A
 * tradução para o cursor do motor acontece aqui — descartar o `offset` faria
 * a página 2 devolver a página 1, sem erro nenhum.
 */
export class ApplicationService extends BaseUseCase {
  protected readonly context = 'ApplicationService'

  getAll(
    limit?: number,
    offset?: number,
    searchTerm?: string,
    filters?: Partial<ApplicationEntity>
  ): Promise<ListResponseType<ApplicationEntity[]>> {
    return this.run('getAll', async () => {
      const base = { searchTerm, filters }
      const after = await this.offsetToCursor(
        applicationRepository,
        base,
        offset ?? 0
      )
      return applicationRepository.getAll({
        ...base,
        limit,
        after,
        withTotal: true
      })
    })
  }

  getById(id: string): Promise<ApplicationEntity | null> {
    return this.run('getById', () => applicationRepository.getById(id))
  }

  getOneByField(
    field: FieldPath<ApplicationEntity>,
    value: unknown
  ): Promise<ApplicationEntity | null> {
    return this.run('getOneByField', () =>
      applicationRepository.getOneByField(field, value)
    )
  }

  getAllByField(
    field: FieldPath<ApplicationEntity>,
    value: unknown,
    limit?: number,
    offset?: number
  ): Promise<ListResponseType<ApplicationEntity[]>> {
    return this.run('getAllByField', async () => {
      const base = { filters: { [field]: value } as Partial<ApplicationEntity> }
      const after = await this.offsetToCursor(
        applicationRepository,
        base,
        offset ?? 0
      )
      return applicationRepository.getAllByField(field, value, { limit, after })
    })
  }

  getByEmail(email: string): Promise<ApplicationEntity | null> {
    return this.run('getByEmail', () => applicationRepository.getByEmail(email))
  }

  create(
    application: Omit<ApplicationEntity, 'id'>
  ): Promise<ApplicationEntity> {
    return this.run('create', () => {
      if (
        !application.first_name ||
        !application.last_name ||
        !application.email
      ) {
        throw new Error('Nome, sobrenome e email são obrigatórios')
      }
      // Minúsculas é o que faz a pesquisa por prefixo em `email` funcionar.
      const email = application.email.trim().toLowerCase()
      return applicationRepository.create({ ...application, email })
    })
  }

  update(
    id: string,
    application: Partial<ApplicationEntity>
  ): Promise<ApplicationEntity> {
    return this.run('update', () => {
      const patch = application.email
        ? { ...application, email: application.email.trim().toLowerCase() }
        : application
      return applicationRepository.update(id, patch)
    })
  }

  delete(id: string): Promise<void> {
    return this.run('delete', () => applicationRepository.delete(id))
  }
}
