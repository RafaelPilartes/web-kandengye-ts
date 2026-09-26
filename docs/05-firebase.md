# Firebase — Landing Page

## Serviços Utilizados

| Serviço              | Uso                                     |
| -------------------- | --------------------------------------- |
| ~~Firebase Auth~~    | Já não é usado — o login saiu em 2026-09-26 |
| **Firestore**        | Submissão de candidaturas de motoristas |
| **Firebase Storage** | Upload de documentos de candidatura     |

---

## Coleção Firestore Principal

### `applications/{id}` → `ApplicationEntity`

A coleção mais importante do website — candidaturas de novos motoristas submetidas em `/become-driver`:

```typescript
// src/core/entities/Application.ts
interface ApplicationEntity {
  id?: string
  entity_code?: string
  photo?: string
  first_name: string
  last_name: string
  email: string
  phone: string
  province: string
  gender: string
  type_candidacy?: string
  // Bilhete de Identidade
  identity_card?: string // URL único (Firebase Storage)
  identities_card?: string[] // URLs múltiplos
  // Curriculum
  curriculum?: string
  // Documentos do veículo
  vehicle_Doc?: string
  vehicle_photo?: string
  vehicle_docs?: string[]
  vehicle_photos?: string[]
  // Áreas de operação
  application_areas?: string
  status: ApplicationStatus // 'pending' | 'approved' | 'rejected'
  created_at?: Date
  updated_at?: Date
  firebase_uid?: string // UID Firebase Auth (se registado)
}
```

---

## Repository — Acesso a Dados

O website usa o padrão Repository directamente (sem módulo `Api/` intermediário):

```typescript
// src/core/interfaces/IApplicationRepository.ts
interface IApplicationRepository {
  create(application: ApplicationInterface): Promise<string> // retorna o ID criado
  getById(id: string): Promise<ApplicationInterface | null>
  getAll(): Promise<ApplicationInterface[]>
}
```

### Implementação Firestore

```typescript
// src/repository/repositoryFirestore/application.repository.ts
class ApplicationFirestoreRepository implements IApplicationRepository {
  async create(data: ApplicationInterface): Promise<string> {
    const docRef = await addDoc(collection(db, 'applications'), {
      ...data,
      status: 'pending',
      created_at: serverTimestamp()
    })
    return docRef.id
  }
}
```

---

## Upload de Ficheiros (Firebase Storage)

Os documentos de candidatura são carregados para o Firebase Storage antes da submissão do formulário:

```typescript
// Padrão de upload
const uploadFile = async (file: File, path: string): Promise<string> => {
  const storageRef = ref(storage, `applications/${userId}/${path}`)
  const snapshot = await uploadBytes(storageRef, file)
  return await getDownloadURL(snapshot.ref)
}

// Fluxo:
// 1. Upload do ficheiro → Firebase Storage
// 2. getDownloadURL() → URL permanente
// 3. URL guardado no campo da ApplicationEntity
// 4. Submissão do documento completo para Firestore
```

---

## Tipos Necessários

```typescript
// ApplicationStatus (src/types/enum.ts)
type ApplicationStatus = 'pending' | 'approved' | 'rejected'
```

---

**Anterior**: [04 — Setup Local](04-setup-local.md) | **Próximo**: [06 — Deploy](06-deploy.md)
