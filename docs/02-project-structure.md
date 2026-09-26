# Estrutura de Pastas — Landing Page

## Árvore Completa

```
web-kandengue-ts/
│
├── public/                      # Assets públicos (favicon, OG images)
├── src/
│   ├── main.tsx                  # Entry point React
│   ├── App.tsx                   # Raiz + React Router + Providers
│   │
│   ├── core/                     # Domain Layer puro
│   │   ├── entities/
│   │   │   └── Application.ts   # Entidade de candidatura de motorista
│   │   └── interfaces/
│   │       ├── IApplicationRepository.ts
│   │       └── IFileRepository.ts
│   │
│   ├── repository/               # ★ DAOs — implementações de acesso a dados
│   │   ├── repositoryFirestore/ # Implementação Firebase (produção)
│   │   │   └── application.repository.ts
│   │   └── repositoryLocalDB/   # Implementação LocalStorage (dev/mock)
│   │       └── application.repository.ts
│   │
│   ├── pages/                    # Páginas do website
│   │   ├── index.tsx             # Home / Landing
│   │   ├── about.tsx             # Sobre Nós
│   │   ├── services.tsx          # Serviços
│   │   ├── becomeDriver.tsx      # Torna-te Motorista (formulário)
│   │   ├── workWithUs.tsx        # Trabalha Connosco
│   │   ├── contacts.tsx          # Contactos
│   │   ├── privacy.tsx           # Política de Privacidade
│   │   ├── 404.tsx               # Página não encontrada
│   │   └── loading.tsx           # Ecrã de carregamento
│   │
│   ├── components/               # Componentes reutilizáveis
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/                  # Buttons, inputs, cards
│   │   ├── sections/            # Secções da landing (Hero, Features, ...)
│   │   └── forms/               # Formulários (candidatura, contacto)
│   │
│   ├── styles/global.css        # base + @layer components (Tailwind)
│   ├── config/                   # Firebase config
│   ├── constants/                # Constantes globais
│   ├── helpers/                  # Funções auxiliares
│   ├── utils/                    # Utilitários (formatação, validação)
│   ├── types/                    # TypeScript types e enums
│   └── hooks/                    # Custom hooks reutilizáveis
│
├── index.html                    # HTML entry point
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
├── yarn.lock                     # ← usa Yarn (não npm)
└── package.json
```

> ⚠️ Este projecto usa **Yarn** como package manager, não npm. Usar `yarn install` e `yarn dev`.

---

**Anterior**: [01 — Arquitectura](01-architecture.md) | **Próximo**: [03 — Tech Stack](03-tech-stack.md)
