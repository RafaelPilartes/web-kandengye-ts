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

## Versão

Semver no `package.json`: **patch** corrige, **minor** acrescenta páginas ou
secções sem partir nada, **major** muda a estrutura do site. Sobe no commit
que fecha a fase, com tag `vX.Y.Z`. A versão vai no `<meta name="app-version">`
do `index.html` gerado (plugin em `vite.config.ts`): depois de um upload,
`curl -s <url> | grep app-version` diz o que está em produção. Regra comum:
`CLAUDE.md` da raiz do ecossistema.

---

## Como Rodar Localmente

```bash
npm install     # a lib partilhada vem do GitHub Packages — precisa do NPM_TOKEN
npm run dev     # Vite dev server
npm run build   # tsc && vite build
npm run typecheck
npm run preview
```

> **Era yarn, e deixou de ser (2026-10-07).** O `corepack yarn` existia por
> uma razão só: o yarn 1 resolvia a forma curta `github:owner/repo` por
> **SSH**, que falha sem chaves, e por isso este repositório declarava a lib
> como `git+https://`. Com a lib no GitHub Packages não há git nenhum a
> resolver, e o site passou a npm como os outros cinco. O `yarn.lock` saiu;
> o `package-lock.json` entrou.
>
> A lib precisa do `NPM_TOKEN` (PAT clássico, `read:packages`) no `~/.npmrc`
> ou na shell — ver o `.npmrc` deste repositório.

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

---

## Língua — código em inglês, português só no que o utilizador lê

**Decidido a 2026-10-14. Vale para todos os sete pacotes.**

| | Língua |
| --- | --- |
| identificadores (variáveis, funções, tipos, interfaces, constantes) | **inglês** |
| nomes de ficheiros e de pastas | **inglês** |
| **comentários** | **inglês** |
| nomes de testes (`describe`/`it`) | **inglês** |
| mensagens de commit | **inglês** |
| texto que o utilizador lê — ecrãs, pushes, `user_message`, etiquetas | **português** |
| `HANDOFF.md`, `decisions.md`, `progress.md` | **português** |

A linha que separa as duas colunas é **quem lê**: se um utilizador, um
passageiro, um motorista ou um administrador lê a frase, ela é em português; se
quem a lê é quem mexe no código, é em inglês.

```ts
// ✅ o identificador em inglês, o valor em português
export const NO_CONTACT_LABEL = 'Não disponível'

// ✅ uma mensagem de negócio é texto de pessoa: fica em português
throw new BusinessError('Esta corrida já passou da recolha.')
```

⚠️ **Mudou a 2026-10-14, e antes disso a convenção era o contrário**
(comentários e nomes de domínio em português). Por isso o código tem as duas
formas, e isso **não é descuido**: a renomeação faz-se por fases, com as
suites a provar que nada mudou de comportamento — está no `HANDOFF.md`, §0AH.
Código **novo** segue esta regra desde já.

⚠️ **Um nome que viaja na rede não se renomeia sozinho.** Um campo de um
documento do Firestore, uma chave de um corpo HTTP ou um valor de um `enum`
que já está gravado são **contrato**, não identificador: mudam com uma
migração ou numa subida major combinada entre as duas pontas, nunca num
`rename` de um lado só.
