/**
 * Vive agora em `@rafaelpilartes/kandengue-shared/interfaces`.
 *
 * Era identica a do painel, campo a campo. A lib guarda-a para os dois
 * repositorios a partilharem em vez de a replicarem a mao.
 *
 * A `ApplicationCredencialInterface` deixou de ser reexportada: so o ecra de
 * login a usava, e o site publico nao tem sessao.
 */
export type { ApplicationInterface } from '@rafaelpilartes/kandengue-shared/interfaces'
