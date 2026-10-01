# web-kandengue-ts — Website Público

Website institucional da Kandengue: landing page, informação sobre os serviços e os formulários de candidatura (estafeta e serviços gerais). Sem sessão de utilizador.

---

## Stack e Versões

| Tecnologia            | Versão  |
| --------------------- | ------- |
| React                 | ^19     |
| TypeScript            | ^5.9    |
| Vite                  | ^7.3    |
| **Tailwind CSS**      | ^3.4    |
| firebase (client SDK) | ^12.19  |
| React Router DOM      | ^7      |
| TanStack React Query  | ^5.103  |
| Axios                 | ^1.20   |
| Swiper                | ^14     |
| react-countup         | ^6.5    |
| react-icons           | ^5      |
| react-toastify        | ^11     |

> **Tailwind é a única forma de estilizar este repositório.** Não há
> styled-components, MUI nem Emotion — foram removidos. Ver
> `docs/decisions.md` na raiz do ecossistema.

---

## Como Rodar Localmente

```bash
corepack yarn install   # NUNCA `npm install` — reescreve o yarn.lock inteiro
corepack yarn dev       # Vite dev server
corepack yarn build     # tsc && vite build
corepack yarn typecheck # só o tsc
corepack yarn preview   # preview da build
```

---

## Variáveis de Ambiente

```env
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
VITE_GOOGLE_API_KEY=
```

---

## Convenções

### Estrutura `src/`

```
src/
├── pages/
│   ├── index.tsx         # Landing page principal
│   ├── about.tsx         # Sobre a empresa
│   ├── becomeDriver.tsx  # Candidatura a motorista
│   ├── workWithUs.tsx    # Candidatura geral
│   ├── services.tsx      # Serviços oferecidos
│   ├── contacts.tsx      # Contactos
│   ├── privacy.tsx       # Política de privacidade
│   ├── loading.tsx       # Fallback do React.Suspense
│   └── 404.tsx
├── components/
│   ├── ui/               # primitivas: Button, TextField, SelectField,
│   │                     #   TextAreaField, RadioGroupField,
│   │                     #   FileDropField, AvatarPicker
│   ├── forms/            # StepForm, ApplicationFormLayout,
│   │                     #   ApplicantPersonalFields/ContactFields
│   ├── cards/            # ServiceCard, TeamMemberCard
│   ├── home/             # FeatureSection
│   ├── Header/ Footer/ HeroSection/ ModalMenuMobile/ Illustration404/
│   ├── SectionHeading.tsx
│   ├── SocialLinks.tsx
│   └── StoreBadges.tsx   # as duas lojas, as duas apps
├── Layout/           # RootLayout (header + main + footer + scroll)
├── routes/           # React Router DOM v7
├── api/              # chamadas HTTP (axios)
├── services/         # serviços (applications, files)
├── viewModels/       # React Query por domínio
├── config/           # firebase.config.ts
├── hooks/ helpers/ interfaces/ types/ utils/
├── styles/global.css # única folha de estilos: base + @layer components
├── data/             # dados estáticos (contactos, serviços, equipa, …)
└── models/           # enums de domínio
```

- React 19, alinhado com o resto do ecossistema
- Deploy: cPanel (Apache), build local e upload manual do `dist/`; rotas da SPA via `public/.htaccess`. Ver `docs/06-deploy.md`.
- **Sem sessão.** Não há login nem registo — saíram em 2026-09-26. As
  candidaturas escrevem em `applications` sem autenticação.

### Estilização

Tudo em classes utilitárias do Tailwind, directamente no JSX.

- **Paleta de trabalho:** `ink` (preto quente `#14110F`), `red` (`#C5161D`,
  a cor da marca) e branco. Mais `mute` para texto e linhas secundárias. É o
  equipamento real dos estafetas — ver `docs/decisions.md` na raiz.
  Os nomes antigos (`brand-primary`, `base-title`, …) continuam declarados
  em `tailwind.config.js` para o código antigo não partir, mas **não os use
  em código novo**.
- **Tipos de letra:** `font-title` é a Baloo 2 (display, usada grande);
  `font-sans` é a Barlow (corpo). A escala de display é `text-display`,
  `text-display-sm` e `text-lede` — usam `clamp()`, por isso não precisam de
  `@media`.
- **Movimento:** um momento só, no herói. Nada de animações de entrada por
  secção — o `aos` foi removido de propósito.
- **Nunca ponha `overflow-x: hidden` no `html`.** Obriga o `overflow-y` a
  `auto`, faz do `html` um contentor de scroll e mata o `position: sticky` do
  cabeçalho. Use `overflow-x: clip` no `body`, que já lá está.
- **Imagens:** o `vite-plugin-image-optimizer` comprime na build (precisa do
  `sharp` e do `svgo`, que são dependências de desenvolvimento). Recortes com
  transparência vão em **WebP**, não em PNG — um PNG desses fica nas centenas
  de kB mesmo depois de optimizado.
- **`src/styles/global.css`** tem três blocos: `@layer base` (reset,
  entrelinhamento dos títulos, foco visível, `prefers-reduced-motion`),
  `@layer components` (`.container-page`, `.field`, `.btn-*`,
  `.legal-content`) e, fora das camadas, os `@keyframes` presos a ids — a
  ilustração do 404 e o ecrã de espera.
- **Um padrão que se repete três vezes vira componente**, não mais uma
  cópia de classes. Foi assim que nasceram `ui/`, `forms/` e `cards/`.
- `utils/cn.ts` junta classes condicionais. Não resolve conflitos entre
  utilitários (não é o `tailwind-merge`).

---

## Conexão Firebase

Usa `firebase` client SDK v12 (Auth + Firestore + Storage).

**Collections acedidas:**

| Collection     | Uso                                                          |
| -------------- | ------------------------------------------------------------ |
| `applications` | **escrita** — formulários de candidatura (estafeta e geral)  |

> O website tem acesso mínimo ao Firestore: só regista candidaturas. A
> colecção `users` deixou de ser tocada quando o login saiu.

---

## Como se Conecta com as Outras Partes

- **Painel Admin**: candidaturas escritas em `applications` são lidas e geridas no painel
- **API Fastify**: sem conexão direta
- **Apps nativas**: sem conexão direta (públicos diferentes)
