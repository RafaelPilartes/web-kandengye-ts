# Kandengue — Website / Landing Page

**Website público e portal de conversão** da plataforma Kandengue — ride-hailing angolano.

Serve como ponto de entrada web para utilizadores e potenciais motoristas, com páginas de marketing, informação do serviço e formulários de candidatura.

---

## Stack Principal

| Camada           | Tecnologia                  |
| ---------------- | --------------------------- |
| Framework        | React (Vite)                |
| Linguagem        | TypeScript                  |
| Estilização      | Styled Components + Emotion |
| UI Components    | Material UI (MUI)           |
| Sliders          | Swiper                      |
| Animações scroll | AOS (Animate On Scroll)     |
| Base de dados    | Firebase Firestore          |
| Autenticação     | Firebase Auth               |
| Deploy           | cPanel (upload manual)      |

---

## Páginas

| Rota             | Página             | Descrição                                 |
| ---------------- | ------------------ | ----------------------------------------- |
| `/`              | Landing Home       | Hero, features, download app, testemunhos |
| `/about`         | Sobre Nós          | História e missão do Kandengue            |
| `/services`      | Serviços           | Tipos de corrida disponíveis              |
| `/become-driver` | Torna-te Motorista | Formulário de candidatura completo        |
| `/work-with-us`  | Trabalha Connosco  | Recrutamento interno                      |
| `/contacts`      | Contactos          | Formulário de contacto e mapa             |
| `/privacy`       | Privacidade        | Política de privacidade                   |
| `/register`      | Registo            | Registo de utilizador                     |
| `/login`         | Login              | Acesso à conta                            |

---

## Quick Start

### Pré-requisitos

- Node.js ≥ 16.x
- npm (ver `package-lock.json`) — e o `NPM_TOKEN` para a lib partilhada

### Instalação

```bash
git clone https://github.com/RafaelPilartes/web-kandengue-ts.git
cd web-kandengue-ts

npm install
```

> A lib partilhada vem do **GitHub Packages**, que é privado: precisas do
> `NPM_TOKEN` (PAT clássico com `read:packages`) no `~/.npmrc` ou exportado
> na shell. Ver o `.npmrc` deste repositório.

### Configurar Variáveis de Ambiente

```bash
# Criar .env na raiz
cp .env.example .env
```

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
VITE_API_BASE_URL=https://api.kandengue.com
```

### Executar

```bash
npm run dev
```

Disponível em: `http://localhost:5173`

### Build de Produção

```bash
npm run build
# Output: dist/
```

---

## Arquitectura

Segue **Clean Architecture + MVVM** com padrão **Repository/DAO**:

```
View (Pages/Components)
  │
  ▼
ViewModel (hooks + React Query)
  │
  ▼
Repository (DAO — Firestore ou LocalDB)
  │
  ▼
Firebase Firestore / API Fastify
```

### Módulo Repository — Dual Source

```
src/repository/
  repositoryFirestore/   ← Firebase Firestore
  repositoryLocalDB/     ← LocalStorage (fallback/mock)
```

---

## Formulário de Candidatura de Motorista

A página `/become-driver` submete dados para a coleção `applications/{id}` no Firestore:

```typescript
// src/core/entities/Application.ts
interface ApplicationEntity {
  first_name: string
  last_name: string
  email: string
  phone: string
  province: string
  gender: string
  type_candidacy?: string
  identity_card?: string // URL Firebase Storage
  identities_card?: string[]
  curriculum?: string // URL Firebase Storage
  vehicle_Doc?: string
  vehicle_photo?: string
  vehicle_docs?: string[]
  vehicle_photos?: string[]
  application_areas?: string
  status: ApplicationStatus // 'pending' | 'approved' | 'rejected'
  created_at?: Date
}
```

As candidaturas são visualizadas e aprovadas no **Painel Admin** (`web-kandengue_painel-ts`).

---

## Documentação Técnica

| Documento                                                | Conteúdo                  |
| -------------------------------------------------------- | ------------------------- |
| [00 — Visão Geral](docs/00-overview.md)                  | Propósito e contexto      |
| [01 — Arquitectura](docs/01-architecture.md)             | Camadas e fluxos          |
| [02 — Estrutura de Pastas](docs/02-project-structure.md) | Árvore completa           |
| [03 — Tech Stack](docs/03-tech-stack.md)                 | Stack e justificações     |
| [04 — Setup Local](docs/04-setup-local.md)               | Instalação e configuração |
| [05 — Firebase](docs/05-firebase.md)                     | Coleções e dados          |
| [06 — Deploy](docs/06-deploy.md)                         | Netlify e CI/CD           |
| [07 — Padrões de Código](docs/07-code-standards.md)      | Convenções                |
| [08 — Roadmap](docs/08-roadmap.md)                       | Estado e planos           |

---

## Deploy

Alojamento **cPanel** (Apache), sem deploy automático: `npm run build` e
upload do conteúdo de `dist/` para o `public_html` do domínio. O
`public/.htaccess` faz o redirect das rotas da SPA para o `index.html`.
Passo a passo em [06 — Deploy](docs/06-deploy.md).

---

## Licença

Projecto privado e proprietário — Kandengue. Todos os direitos reservados.
