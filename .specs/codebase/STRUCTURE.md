# Project Structure

**Root:** `/Users/monicavaz/Documents/dev/animeranking`

## Directory Tree

```text
.
├── .github/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AnimeCard/
│   │   ├── Button/
│   │   ├── Header/
│   │   ├── RankingCard/
│   │   └── ...
│   ├── hooks/
│   ├── pages/
│   │   ├── Details/
│   │   ├── Explore/
│   │   ├── Home/
│   │   ├── New/
│   │   ├── Profile/
│   │   ├── SignIn/
│   │   └── SignUp/
│   ├── routes/
│   ├── services/
│   └── style/
├── README.md
├── package.json
├── vercel.json
└── vite.config.js
```

## Module Organization

### Pages

**Purpose:** telas completas ligadas a rotas.
**Location:** `src/pages`
**Key files:** `src/pages/Home/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Explore/index.jsx`

### Components

**Purpose:** blocos reutilizáveis de UI.
**Location:** `src/components`
**Key files:** `src/components/Header/index.jsx`, `src/components/RankingCard/index.jsx`, `src/components/Snackbar/index.jsx`

### Auth / Session

**Purpose:** sessão do usuário, persistência local e ações de autenticação.
**Location:** `src/hooks`
**Key files:** `src/hooks/useAuth.jsx`

### Routing

**Purpose:** separar navegação autenticada da navegação pública.
**Location:** `src/routes`
**Key files:** `src/routes/index.jsx`, `src/routes/app.routes.jsx`, `src/routes/auth.routes.jsx`

### Data Access

**Purpose:** centralizar base URLs HTTP.
**Location:** `src/services`
**Key files:** `src/services/api.js`, `src/services/jinkan.js`

### Design System Local

**Purpose:** tema global e estilos base.
**Location:** `src/style`
**Key files:** `src/style/globalStyle.js`, `src/style/theme.js`

## Where Things Live

**Autenticação:**

- UI/Interface: `src/pages/SignIn`, `src/pages/SignUp`
- Business Logic: `src/hooks/useAuth.jsx`
- Data Access: `src/services/api.js`
- Configuration: `localStorage`, `VITE_APP_API`

**Ranking pessoal:**

- UI/Interface: `src/pages/Home`, `src/pages/Details`, `src/pages/New`
- Business Logic: lógica embutida nas páginas
- Data Access: `src/services/api.js`
- Configuration: header `Authorization` configurado em runtime

**Exploração de animes:**

- UI/Interface: `src/pages/Explore`, `src/components/AnimeCard`
- Business Logic: `src/pages/Explore/index.jsx`
- Data Access: `src/services/jinkan.js`
- Configuration: base URL fixa da Jikan API

## Special Directories

**`src/assets`:**
**Purpose:** imagens, GIFs e SVGs usados pela interface.
**Examples:** `src/assets/homebg.jpg`, `src/assets/avatar_placeholder.svg`

**`src/style`:**
**Purpose:** tokens visuais e estilos globais reaproveitados no app.
**Examples:** `src/style/theme.js`, `src/style/globalStyle.js`
