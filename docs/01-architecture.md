# Arquitectura — Landing Page

## Padrão Arquitectural

O website segue **Clean Architecture** com **Repository/DAO pattern**, adaptado para um website público:

```
┌──────────────────────────────────────────┐
│           Pages / Views                  │
│   pages/ (React + Tailwind)             │
│   (renderização e composição)            │
├──────────────────────────────────────────┤
│         ViewModel / Hook Layer           │
│   (React Hook Form + React Query)        │
│   (estado dos formulários e submissão)   │
├──────────────────────────────────────────┤
│           Service Layer                  │
│   (validação, transformação de dados)    │
├──────────────────────────────────────────┤
│     Repository / DAO Layer               │
│   repository/repositoryFirestore/        │
│   repository/repositoryLocalDB/          │
├──────────────────────────────────────────┤
│           Core Layer                     │
│   core/entities/ + core/interfaces/     │
│   (domínio puro — ApplicationEntity)    │
└──────────────────────────────────────────┘
```

## Fluxo de Candidatura de Motorista

O fluxo mais complexo do website — `/become-driver`:

```
1. Utilizador preenche formulário multi-step
   │
   ▼
2. React Hook Form valida cada step com Zod
   │
   ▼
3. Upload de documentos para Firebase Storage
   │  (identity card, vehicle docs, curriculum)
   │  → retorna URLs permanentes
   ▼
4. ApplicationRepository.create(applicationData)
   │
   ▼
5. Firestore: applications/{newId}
   │  { status: 'pending', ...dados }
   ▼
6. Dashboard Admin recebe a candidatura
   └── Admin pode aprovar/rejeitar
```

## Módulo Repository — Dual Source

```
repository/
  repositoryFirestore/
    application.repository.ts   ← Firestore SDK
  repositoryLocalDB/
    application.repository.ts   ← LocalStorage (dev/mock)
```

**Nota**: Diferente dos outros projectos, a landing page usa `repositoryFirestore/` directamente (sem o módulo `Api/` com factory). A landing é mais simples — apenas submissão de formulários, sem operações complexas.

## Routing (React Router)

```
/                  → Home (index.tsx)
/about             → about.tsx
/services          → services.tsx
/become-driver     → becomeDriver.tsx
/work-with-us      → workWithUs.tsx
/contacts          → contacts.tsx
/privacy           → privacy.tsx
/*                 → 404.tsx
```

---

**Anterior**: [00 — Visão Geral](00-overview.md) | **Próximo**: [02 — Estrutura de Pastas](02-project-structure.md)
