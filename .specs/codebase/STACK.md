# Tech Stack

**Analisado em:** 2026-03-31

## Core

- Framework: React `18.0.0`
- Linguagem: JavaScript com JSX e ESM
- Build tool: Vite `2.9.9`
- Runtime de desenvolvimento/build: Node.js requerido pelo Vite
- Gerenciador de pacotes: npm (`package-lock.json` presente)

## Frontend

- UI Framework: React com renderização client-side
- Roteamento: `react-router-dom` `6.3.0`
- Estilização: `styled-components` `5.3.5` com tema global em `src/style/theme.js`
- Estado: `useState`, `useEffect` e contexto React em `src/hooks/useAuth.jsx`
- HTTP client: `axios` `0.27.2`
- Datas: `date-fns` `2.29.1` e `date-fns-tz` `1.3.6`
- Ícones: `react-icons` `4.4.0`

## Backend Relacionado

- API própria consumida via REST, configurada por `VITE_APP_API`
- O backend não está neste repositório; o README referencia um projeto separado com Node.js, Knex e SQLite

## Testes

- Unitários: não detectados
- Integração: não detectados
- E2E: não detectados
- Cobertura: não detectada

## Serviços Externos

- Catálogo de animes: Jikan API v4 (`https://api.jikan.moe/v4`)
- Hospedagem do frontend: Vercel (`vercel.json` com rewrite para SPA)

## Ferramentas de Desenvolvimento

- Plugin React para Vite: `@vitejs/plugin-react` `1.3.0`
- Tipos instalados, mas não utilizados no código atual: `@types/react`, `@types/react-dom`
