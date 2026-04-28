# Tech Stack — Landing Page

## Stack Principal

| Camada          | Tecnologia   | Diferença face aos outros projectos |
| --------------- | ------------ | ----------------------------------- |
| Framework       | React (Vite) | —                                   |
| Linguagem       | TypeScript   | —                                   |
| Package Manager | **Yarn**     | Os outros usam npm                  |

## UI e Estilização

| Lib                   | Uso                                      |
| --------------------- | ---------------------------------------- |
| **Material UI (MUI)** | Componentes base (buttons, inputs, grid) |
| Styled Components     | Estilos customizados por componente      |
| Emotion               | Motor de CSS-in-JS do MUI                |
| Tailwind CSS          | Classes utilitárias para layout          |

> **Nota**: Este projecto usa **MUI + Styled Components** para UI (ao contrário do Dashboard que usa Flowbite/Tailwind puro). É a stack mais "web clássico".

## Animações e UI

| Lib                     | Uso                                     |
| ----------------------- | --------------------------------------- |
| AOS (Animate On Scroll) | Animações de entrada baseadas em scroll |
| Swiper                  | Carrosséis (testemunhos, imagens)       |
| React Icons             | Ícones                                  |

## Firebase

| Módulo             | Uso                                 |
| ------------------ | ----------------------------------- |
| firebase/firestore | Submissão de candidaturas           |
| firebase/auth      | Login/registo de passageiros        |
| firebase/storage   | Upload de documentos de candidatura |

## Formulários

| Lib             | Uso                                            |
| --------------- | ---------------------------------------------- |
| React Hook Form | Formulários multi-step (candidatura, contacto) |
| Zod             | Validação de schemas                           |

## Routing

| Lib              | Uso         |
| ---------------- | ----------- |
| React Router DOM | SPA routing |

## Deploy

| Plataforma     | Config                                  |
| -------------- | --------------------------------------- |
| Netlify        | Deploy automático via `main` branch     |
| `netlify.toml` | Redirects para SPA (`/* → /index.html`) |

---

**Anterior**: [02 — Estrutura de Pastas](02-project-structure.md) | **Próximo**: [04 — Setup Local](04-setup-local.md)
