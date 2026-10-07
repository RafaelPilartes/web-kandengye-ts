# Tech Stack — Landing Page

## Stack Principal

| Camada          | Tecnologia   | Diferença face aos outros projectos |
| --------------- | ------------ | ----------------------------------- |
| Framework       | React (Vite) | —                                   |
| Linguagem       | TypeScript   | —                                   |
| Package Manager | **npm**      | Como os outros cinco                |

## UI e Estilização

| Lib                  | Uso                                              |
| -------------------- | ------------------------------------------------ |
| **Tailwind CSS 3.4** | Toda a estilização, em classes utilitárias no JSX |
| PostCSS + Autoprefixer | Pipeline do Tailwind                           |

> **Nota**: desde 2026-09-26 o Tailwind é a **única** forma de estilizar aqui.
> O MUI, o Styled Components e o Emotion foram removidos — ver
> `docs/decisions.md` na raiz do ecossistema. As primitivas de UI que o MUI
> dava (`TextField`, `Select`, `Radio`, menus) vivem agora em
> `src/components/ui/`, escritas sobre elementos nativos.

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
| firebase/storage   | Ficheiros das candidaturas          |
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
| cPanel (Apache) | Alojamento; build local, upload manual |
| `public/.htaccess` | Rotas da SPA (`/* → /index.html`) e cabeçalhos no Apache |

---

**Anterior**: [02 — Estrutura de Pastas](02-project-structure.md) | **Próximo**: [04 — Setup Local](04-setup-local.md)
