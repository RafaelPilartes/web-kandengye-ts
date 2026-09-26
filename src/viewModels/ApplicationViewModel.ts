// viewModels/ApplicationViewModel.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { ApplicationService } from '../services/applications.service'
import { ApplicationEntity } from '../core/entities/Application'
import type { ApplicationInterface } from '../interfaces/IApplication'
import type { ListResponseType } from '../interfaces/IApiResponse'
import { firebaseCollections } from '../constants/firebaseCollections'
import { useMemo } from 'react'
import { getApplicationStatusLabel } from '../utils/gettersLabels'
import type { FieldPath } from '../core/interfaces/IBaseRepository'

/**
 * Os dados de uma candidatura nova: a forma da interface, sem os campos que
 * o servidor preenche.
 */
export type NewApplication = Omit<
  ApplicationInterface,
  'id' | 'created_at' | 'updated_at'
>

const applicationService = new ApplicationService()

interface ApplicationsViewModelOptions {
  /**
   * Corre a query da listagem. Fica desligada por omissao: este e o site
   * publico, e so envia candidaturas — nunca as le. Com ela ligada, cada
   * pagina de formulario pedia a coleccao `applications` inteira ao montar,
   * e as regras do Firestore respondiam `permission-denied` (e bem).
   */
  withList?: boolean
}

export function useApplicationsViewModel(
  limit?: number,
  offset?: number,
  searchTerm?: string,
  filters?: Partial<ApplicationEntity>,
  options?: ApplicationsViewModelOptions
) {
  const withList = options?.withList ?? false
  const queryClient = useQueryClient()

  const filtersKey = filters ? JSON.stringify(filters) : ''

  /** Buscar lista de usuários */
  const {
    data: applicationsResponse,
    isLoading: loading,
    error,
    refetch
  } = useQuery<ListResponseType<ApplicationEntity[]>>({
    queryKey: [
      firebaseCollections.applications.root,
      limit,
      offset,
      searchTerm,
      filtersKey
    ],
    queryFn: () =>
      applicationService.getAll(limit, offset, searchTerm, filters),
    enabled: withList,
    staleTime: 1000 * 60 // cache 1min
  })

  // transforma os dados em formato exportável
  const dataToExport = useMemo(() => {
    if (!applicationsResponse?.data) return []
    return applicationsResponse?.data.map(doc => ({
      Id: doc.id,
      Nome: doc.first_name,
      Sobrenome: doc.last_name,
      Email: doc.email,
      Telefone: doc.phone,
      Status: getApplicationStatusLabel(doc.status),
      'Data de criação': doc.created_at,
      'Última atualização': doc.updated_at
    }))
  }, [applicationsResponse?.data])

  /** Buscar lista de usuários por field */
  const fetchAllApplicationsByField = async (
    field: FieldPath<ApplicationEntity>,
    value: unknown,
    limit?: number,
    offset?: number
  ) => {
    try {
      return await applicationService.getAllByField(field, value, limit, offset)
    } catch (err) {
      console.error('Erro ao buscar usuários por campo:', err)
      return null
    }
  }

  /** Criar usuário */
  const createApplication = useMutation({
    mutationFn: (application: NewApplication) =>
      // A `ApplicationEntity` declara um metodo `validate()`; o que se grava
      // no Firestore sao so dados. O cast fica aqui, nesta fronteira, em vez
      // de cada pagina ter de declarar o seu payload como `any`.
      applicationService.create(application as Omit<ApplicationEntity, 'id'>),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [firebaseCollections.applications.root]
      })
    }
  })

  /** Atualizar usuário */
  const updateApplication = useMutation({
    mutationFn: ({
      id,
      application
    }: {
      id: string
      application: Partial<ApplicationEntity>
    }) => applicationService.update(id, application),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [firebaseCollections.applications.root]
      })
    }
  })

  /** Deletar usuário */
  const deleteApplication = useMutation({
    mutationFn: (id: string) => applicationService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [firebaseCollections.applications.root]
      })
    }
  })

  /** Buscar usuário único (on-demand) */
  const fetchApplicationById = async (id: string) => {
    try {
      return await applicationService.getById(id)
    } catch (err) {
      console.error('Erro ao buscar usuário:', err)
      return null
    }
  }

  /** Buscar usuário único (on-demand) */
  const fetchApplicationByEmail = async (email: string) => {
    try {
      return await applicationService.getByEmail(email)
    } catch (err) {
      console.error('Erro ao buscar usuário:', err)
      return null
    }
  }

  /** Buscar application por field */
  const fetchOneApplicationByField = async (
    field: keyof ApplicationEntity,
    value: string
  ) => {
    try {
      return await applicationService.getOneByField(field, value)
    } catch (err) {
      console.error('Erro ao buscar usuario por campo:', err)
      return null
    }
  }

  return {
    applications: applicationsResponse?.data ?? [],
    pagination: applicationsResponse?.pagination,
    isLoadingApplications: loading,
    error,
    refresh: refetch,

    fetchAllApplicationsByField,
    fetchOneApplicationByField,
    fetchApplicationByEmail,

    createApplication,
    updateApplication,
    deleteApplication,
    fetchApplicationById,

    dataToExport
  }
}
