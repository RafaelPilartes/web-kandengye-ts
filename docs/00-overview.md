# Visão Geral — Website / Landing Page (Kandengue)

## O que é

O **website Kandengue** é o portal público da plataforma — a presença web que serve como ponto de entrada para passageiros e potenciais motoristas. É um website de marketing e conversão, não uma aplicação operacional.

## Problema que resolve

O website precisa de:

1. **Comunicar o produto** — hero, features, testemunhos
2. **Converter motoristas** — formulário completo de candidatura com upload de documentos
3. **Informar passageiros** — como funciona o serviço, download da app
4. **Gerir contacto** — formulário de contacto e recrutamento interno
5. **Cumprir obrigações legais** — política de privacidade

## Contexto no Ecossistema

- É o único projecto **sem autenticação nenhuma** — o login e o registo foram removidos em 2026-09-26
- As candidaturas de motoristas são guardadas em Firestore `applications/{id}` e depois aprovadas no Dashboard Admin
- Comunica com Firebase Firestore para submissão de formulários e uploads
- Não tem acesso a `rides`, `rideTracking` ou outros dados operacionais

## Páginas

| Rota | Página | Propósito |
|---|---|---|
| `/` | Home | Landing principal com download da app |
| `/about` | Sobre Nós | Missão e equipa |
| `/services` | Serviços | Tipos de corrida disponíveis |
| `/become-driver` | Torna-te Motorista | Formulário multi-step com upload de docs |
| `/work-with-us` | Trabalha Connosco | Recrutamento interno |
| `/contacts` | Contactos | Formulário de contacto |
| `/privacy` | Privacidade | Política de privacidade RGPD |

## Deploy

O website está num alojamento **cPanel** (Apache), com build local e upload manual do `dist/` — ver [06 — Deploy](06-deploy.md).

---

**Próximo**: [01 — Arquitectura](01-architecture.md)
