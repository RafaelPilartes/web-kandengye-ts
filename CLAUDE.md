# web-kandengue-ts — Website Público

Website institucional da Kandengue com landing page, informação sobre os serviços, formulário de candidatura a motorista e login para utilizadores registados.

---

## Stack e Versões

| Tecnologia              | Versão   |
| ----------------------- | -------- |
| React                   | ^18.2.0  |
| TypeScript              | ^4.9.3   |
| Vite                    | ^4.1.0   |
| firebase (client SDK)   | ^12.6.0  |
| MUI Material            | ^7.3.7   |
| React Router DOM        | ^6.4.1   |
| TanStack React Query    | ^5.90.11 |
| Axios                   | ^1.4.0   |
| AOS (scroll animations) | ^2.3.4   |
| Swiper                  | ^8.4.2   |
| react-alice-carousel    | ^2.9.1   |
| react-countup           | ^6.4.0   |
| Styled Components       | ^5.3.5   |
| Phosphor React          | ^1.4.1   |

---

## Como Rodar Localmente

```bash
npm run dev       # Vite dev server
npm run build     # tsc && vite build
npm run preview   # preview da build
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
│   ├── becomeDriver.tsx  # Formulário de candidatura a motorista
│   ├── workWithUs.tsx    # Trabalhar connosco
│   ├── services.tsx      # Serviços oferecidos
│   ├── contacts.tsx      # Contactos
│   ├── privacy.tsx       # Política de privacidade
│   ├── login.tsx         # Login de utilizador
│   └── register.tsx      # Registo
├── Layout/           # layout base (navbar, footer)
├── components/       # componentes reutilizáveis
├── context/          # React Context
├── provider/         # providers globais
├── routes/           # React Router DOM v6
├── api/              # chamadas HTTP (axios)
├── repository/       # acesso ao Firestore
├── services/         # serviços (applications, files)
├── config/           # firebase.config.ts
├── hooks/ helpers/ interfaces/ types/ utils/
├── styles/ themes/   # estilos globais e tema MUI
├── data/             # dados estáticos
└── models/           # interfaces de domínio
```

- React 18 (não React 19 como nas outras partes — versão mais antiga)
- Estilização mista: MUI + Styled Components + CSS
- Deploy: Netlify (`netlify.toml` presente)

---

## Conexão Firebase

Usa `firebase` client SDK v12 (Auth + Firestore + Storage).

**Collections acedidas:**

| Collection     | Uso                                                         |
| -------------- | ----------------------------------------------------------- |
| `applications` | **escrita** — formulário "Seja Motorista" envia candidatura |
| `users`        | Auth / login de utilizadores                                |

> O website tem acesso mínimo ao Firestore — apenas regista candidaturas e faz autenticação.

---

## Como se Conecta com as Outras Partes

- **Painel Admin**: candidaturas escritas em `applications` são lidas e geridas no painel
- **API Fastify**: sem conexão direta
- **Apps nativas**: sem conexão direta (públicos diferentes)
