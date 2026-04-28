# Deploy — Landing Page

## Plataforma

O website está deployado no **Netlify** com deploy contínuo via GitHub.

---

## Configuração Netlify

```toml
# netlify.toml
[build]
  command = "yarn build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

O redirect `/* → /index.html` é obrigatório para o React Router funcionar correctamente (SPA routing).

---

## Variáveis de Ambiente no Netlify

Configurar em **Netlify → Site Settings → Environment Variables**:

```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
```

---

## Fluxo de Deploy

```
git push origin main
  │
  ▼
Netlify detecta push automáticamente
  │
  ▼
yarn install + yarn build
  │
  ▼
Testa se build tem sucesso
  │
  ▼
Deploy para CDN Netlify (global edge)
```

---

## Build de Produção Manual

```bash
yarn build
# Output gerado em: dist/

# Preview local do build:
yarn preview
```

---

**Anterior**: [05 — Firebase](05-firebase.md) | **Próximo**: [07 — Padrões de Código](07-code-standards.md)
