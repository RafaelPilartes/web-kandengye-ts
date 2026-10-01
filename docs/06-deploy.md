# Deploy — Landing Page

## Plataforma

O website está num alojamento **cPanel** (Apache), no mesmo alojamento do
painel, cada um no `public_html` do seu domínio. **Não há deploy
automático**: compila-se localmente e faz-se o upload à mão. O Netlify que
aqui estava documentado já não se usa; o `netlify.toml` saiu do repositório
a 2026-10-01.

---

## Build de produção

```bash
corepack yarn install   # NUNCA `npm install` — reescreve o yarn.lock inteiro
corepack yarn build     # tsc && vite build → dist/
corepack yarn preview   # preview local do build
```

As variáveis `VITE_FIREBASE_*` vêm do `.env` local (não versionado; ver
`.env.example`). A API é a do Railway, fixa em `src/utils/urlApi.ts` — não
existe nenhum subdomínio `api.*`.

---

## O que vai para o `public_html`

O **conteúdo** de `dist/` (não a pasta), substituindo o que lá estiver:

```
.htaccess                 rotas da SPA + cabeçalhos (ficheiro oculto — ver nota)
index.html
assets/                   JS e CSS com hash no nome
images/
manifest.webmanifest, registerSW.js, sw.js, workbox-*.js   (PWA)
it_logo*.svg e o resto do public/
```

O `.htaccess` substitui o redirect `/* → /index.html` que o Netlify fazia:
sem ele, abrir uma rota do React Router directamente dá 404 no Apache. É um
ficheiro oculto — no File Manager do cPanel é preciso "Show Hidden Files"
para o ver e confirmar que subiu. Se o servidor já tiver um `.htaccess`
próprio, juntar as regras em vez de o substituir.

Apagar os ficheiros antigos de `assets/` antes do upload: os nomes levam
hash e acumulam-se.

---

## Verificar depois do upload

1. A raiz abre e o `index.html` servido referencia os `assets/index-*.js`
   da build nova (ver o hash no código-fonte da página).
2. Uma rota interna aberta directamente (por exemplo `/candidatura`) não dá
   404.
3. O formulário de candidatura submete (escreve em `applications`).

---

**Anterior**: [05 — Firebase](05-firebase.md) | **Próximo**: [07 — Padrões de Código](07-code-standards.md)
