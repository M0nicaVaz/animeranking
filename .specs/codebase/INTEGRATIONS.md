# External Integrations

## Backend da Aplicação

**Service:** API própria do Anime Ranking
**Purpose:** autenticação, perfil do usuário e CRUD da lista pessoal de animes
**Implementation:** client Axios em `src/services/api.js`
**Configuration:** `baseURL` lida de `import.meta.env.VITE_APP_API`
**Authentication:** Bearer token salvo em `localStorage` e injetado em `api.defaults.headers.common.Authorization`

## Catálogo Externo de Animes

**Service:** Jikan API v4
**Purpose:** busca pública de animes e listagem de títulos populares
**Implementation:** client Axios em `src/services/jinkan.js`
**Configuration:** `baseURL` fixa em `https://api.jikan.moe/v4`
**Authentication:** não utilizada

## Hosting / Runtime

**Service:** Vercel
**Purpose:** servir a SPA em produção
**Implementation:** `vercel.json`
**Configuration:** rewrite `/(.*) -> /` para suportar rotas client-side
**Authentication:** não aplicável

## Browser APIs

### Local Storage

**Purpose:** persistir `user` e `token` entre recargas
**Location:** `src/hooks/useAuth.jsx`
**Authentication:** armazena credenciais de sessão no browser

### Object URLs

**Purpose:** pré-visualizar avatar antes do upload
**Location:** `src/pages/Profile/index.jsx`
**Authentication:** não aplicável

## API Integrations

### API própria

**Purpose:** sustentar fluxos autenticados do produto
**Location:** `src/services/api.js`, `src/hooks/useAuth.jsx`, `src/pages/Home/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Details/index.jsx`, `src/pages/Profile/index.jsx`
**Authentication:** Bearer token
**Key endpoints:**

- `POST /sessions`
- `POST /users`
- `PUT /users`
- `PATCH /users/avatar`
- `GET /animes/?title=...`
- `GET /animes/:id`
- `POST /animes`
- `PUT /animes/:id`
- `DELETE /animes/:id`

### Jikan API

**Purpose:** complementar cadastro manual com descoberta de títulos
**Location:** `src/services/jinkan.js`, `src/pages/Explore/index.jsx`
**Authentication:** pública
**Key endpoints:**

- `GET /top/anime`
- `GET /anime?q=...&order_by=popularity&sort=asc&limit=8&sfw`

## Webhooks

Nenhum webhook foi identificado.

## Background Jobs

Nenhuma infraestrutura de jobs assíncronos foi identificada neste repositório.
