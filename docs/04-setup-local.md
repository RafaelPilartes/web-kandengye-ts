# Setup Local — Landing Page

## Pré-requisitos

| Ferramenta | Versão mínima                    |
| ---------- | -------------------------------- |
| Node.js    | ≥ 16.x                           |
| **npm**    | ≥ 10 (vem com o Node) |

> ⚠️ Este projecto usa **npm**. A lib partilhada vem do GitHub Packages
> (privado): precisas do `NPM_TOKEN` — um PAT clássico com `read:packages` —
> no `~/.npmrc` ou exportado na shell, ou o `npm install` dá 401.

---

## 1. Instalar Dependências

```bash
cd web-kandengue-ts
npm install
```

---

## 2. Configurar Variáveis de Ambiente

```bash
# Criar .env
touch .env
```

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_MESSAGING_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

---

## 3. Executar em Desenvolvimento

```bash
npm run dev
```

Disponível em: `http://localhost:5173`

---

## 4. Scripts Disponíveis

| Comando        | Descrição                    |
| -------------- | ---------------------------- |
| `npm run dev`     | Servidor de desenvolvimento  |
| `npm run build`   | Build de produção em `dist/` |
| `npm run preview` | Preview do build de produção |
| `npm run lint`    | ESLint                       |

---

## 5. Verificação

Após iniciar:

- [ ] Página home carrega com hero e animações AOS
- [ ] Navegação funciona entre páginas
- [ ] Formulário `/become-driver` carrega todos os steps
- [ ] Firebase inicializado sem erros (ver consola)

---

**Anterior**: [03 — Tech Stack](03-tech-stack.md) | **Próximo**: [05 — Firebase](05-firebase.md)
