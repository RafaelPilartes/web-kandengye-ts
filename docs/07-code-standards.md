# Padrões de Código — Landing Page

## Linguagem e Ferramentas

- **TypeScript** strict em toda a codebase
- **ESLint** para linting
- **npm** como package manager (era Yarn até 2026-10-07)

## Nomenclatura

| Elemento          | Convenção          | Exemplo                             |
| ----------------- | ------------------ | ----------------------------------- |
| Componentes React | PascalCase         | `HeroSection.tsx`                   |
| Pages             | camelCase          | `becomeDriver.tsx`                  |
| Repositories      | PascalCase         | `ApplicationFirestoreRepository.ts` |
| Interfaces        | `I` + PascalCase   | `IApplicationRepository.ts`         |
| Entities          | PascalCase         | `Application.ts`                    |
| Hooks             | `use` + PascalCase | `useApplicationForm.ts`             |
| Firestore fields  | snake_case         | `first_name`, `created_at`          |

## Padrão de Formulário Multi-Step (Candidatura)

```typescript
// Padrão obrigatório para formulários multi-step:
const { register, handleSubmit, watch, formState } = useForm<ApplicationSchema>(
  {
    resolver: zodResolver(applicationSchema),
    mode: 'onChange' // validação em tempo real
  }
)

// Cada step tem o seu schema Zod:
const step1Schema = z.object({
  first_name: z.string().min(2),
  last_name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9)
})
```

## Regras de Dados

```typescript
// ✅ Usar serverTimestamp() para datas no Firestore
created_at: serverTimestamp()

// ❌ Nunca usar new Date() directamente
created_at: new Date() // inconsistente

// ✅ Fazer upload do ficheiro ANTES de submeter o formulário
const url = await uploadFile(file, 'identity_card')
// Depois incluir o URL no objecto final

// ❌ Nunca guardar ficheiros binários no Firestore
{
  identity_card: fileBuffer
} // ERRADO — usar Storage URL
```

## Checklist antes de Commit

- [ ] `npx tsc --noEmit` sem erros de tipos
- [ ] `npm run lint` sem erros críticos
- [ ] Formulário `/become-driver` testado end-to-end (submissão + upload)
- [ ] Verificar que `applications/{id}` criado no Firestore com `status: 'pending'`
- [ ] Páginas testadas em mobile (responsive)
- [ ] AOS animações funcionam após build de produção

---

**Anterior**: [06 — Deploy](06-deploy.md) | **Próximo**: [08 — Roadmap](08-roadmap.md)
