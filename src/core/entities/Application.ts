/*
 * As classes vivem agora em `@rafaelpilartes/kandengue-shared/entities`.
 *
 * Fica aqui o que nao e partilhavel: o converter, que depende do SDK do
 * Firestore deste repositorio.
 */
import type { FirestoreDataConverter } from 'firebase/firestore'
import { toDate } from '../../helpers/firestore'
import { ApplicationEntity } from '@rafaelpilartes/kandengue-shared/entities'

export { ApplicationEntity }

/**
 * Fronteira Doc ↔ Entity. O `toFirestore` é identidade em forma — o motor
 * exige-o, porque o `updateDoc` não o corre e o `setDoc` corre.
 */
export const applicationConverter: FirestoreDataConverter<ApplicationEntity> = {
  toFirestore(application) {
    return { ...application }
  },
  fromFirestore(snapshot, options) {
    const d = snapshot.data(options) as Record<string, unknown>
    return new ApplicationEntity({
      ...d,
      id: snapshot.id,
      created_at: toDate(d.created_at as never) ?? undefined,
      updated_at: toDate(d.updated_at as never) ?? undefined
    } as ConstructorParameters<typeof ApplicationEntity>[0])
  }
}
