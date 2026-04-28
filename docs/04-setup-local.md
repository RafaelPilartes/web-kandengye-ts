# Setup Local — Landing Page

## Pré-requisitos

| Ferramenta | Versão mínima                    |
| ---------- | -------------------------------- |
| Node.js    | ≥ 16.x                           |
| **Yarn**   | ≥ 1.22.x (`npm install -g yarn`) |

> ⚠️ Este projecto usa **Yarn**. Não usar `npm install` — usar `yarn install`.

---

## 1. Instalar Dependências

```bash
cd web-kandengue-ts
yarn install
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
yarn dev
```

Disponível em: `http://localhost:5173`

---

## 4. Scripts Disponíveis

| Comando        | Descrição                    |
| -------------- | ---------------------------- |
| `yarn dev`     | Servidor de desenvolvimento  |
| `yarn build`   | Build de produção em `dist/` |
| `yarn preview` | Preview do build de produção |
| `yarn lint`    | ESLint                       |

---

## 5. Verificação

Após iniciar:

- [ ] Página home carrega com hero e animações AOS
- [ ] Navegação funciona entre páginas
- [ ] Formulário `/become-driver` carrega todos os steps
- [ ] Firebase inicializado sem erros (ver consola)

---

**Anterior**: [03 — Tech Stack](03-tech-stack.md) | **Próximo**: [05 — Firebase](05-firebase.md)
