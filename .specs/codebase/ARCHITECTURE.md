# Architecture

**Padrão identificado:** SPA React em camadas leves, com páginas orientadas a rota, componentes reutilizáveis e duas integrações HTTP externas.

## High-Level Structure

O repositório atual cobre apenas o frontend. A aplicação decide entre rotas autenticadas e públicas a partir do contexto `useAuth`, renderiza páginas sob `src/pages`, reaproveita componentes em `src/components` e centraliza clientes HTTP em `src/services`.

```text
Browser
  -> src/main.jsx
    -> ThemeProvider + GlobalStyle
    -> AuthProvider
      -> src/routes/index.jsx
        -> AuthRoutes | AppRoutes
          -> Pages
            -> Components
            -> Services (API própria / Jikan)
```

## Identified Patterns

### Auth Gate via Context

**Location:** `src/main.jsx`, `src/hooks/useAuth.jsx`, `src/routes/index.jsx`
**Purpose:** controlar sessão, mensagens globais de autenticação e alternância entre áreas pública e logada.
**Implementation:** `AuthProvider` lê `localStorage`, injeta header `Authorization` no client `api` e expõe `signIn`, `signOut`, `signUp` e `updateProfile`.
**Example:** `src/routes/index.jsx` renderiza `<AppRoutes />` quando `user` existe e `<AuthRoutes />` caso contrário.

### Pages as Route-Level Containers

**Location:** `src/pages/*`
**Purpose:** concentrar fluxo de cada tela e compor componentes visuais.
**Implementation:** cada página exporta um componente `index.jsx` com sua lógica e um `styled.js` co-localizado.
**Example:** `src/pages/New/index.jsx` reúne criação, edição, validação local e submissão para `/animes`.

### Presentational Components with Co-Located Styles

**Location:** `src/components/*`
**Purpose:** encapsular UI recorrente e reduzir repetição entre páginas.
**Implementation:** cada componente costuma seguir a convenção `index.jsx` + `styled.js` ou `styles.js`.
**Example:** `src/components/Header/index.jsx` usa `src/components/Header/styled.js` e depende do contexto de autenticação.

### Thin Service Clients

**Location:** `src/services/api.js`, `src/services/jinkan.js`
**Purpose:** isolar base URLs das integrações HTTP.
**Implementation:** dois clients Axios distintos, um configurado por variável de ambiente e outro apontando para a Jikan API.
**Example:** `src/pages/Explore/index.jsx` consulta `anime.get(...)`, enquanto páginas autenticadas usam `api.get/post/put/delete(...)`.

## Data Flow

### Authentication Flow

1. Usuário acessa `/`.
2. `AuthProvider` tenta restaurar `token` e `user` do `localStorage`.
3. Se houver sessão, `api.defaults.headers.common.Authorization` é preenchido.
4. `src/routes/index.jsx` escolhe `AppRoutes`.
5. Em login, `signIn` chama `POST /sessions` e persiste sessão no browser.

### Ranking CRUD Flow

1. `src/pages/Home/index.jsx` carrega a lista via `GET /animes/?title=...`.
2. Usuário abre detalhes em `src/pages/Details/index.jsx`.
3. Criação e edição ocorrem em `src/pages/New/index.jsx` via `POST /animes` e `PUT /animes/:id`.
4. Exclusão ocorre em `src/pages/Details/index.jsx` via `DELETE /animes/:id`.

### Anime Discovery Flow

1. `src/pages/Explore/index.jsx` carrega top animes via `GET /top/anime`.
2. Busca textual usa `GET /anime?q=...`.
3. O card de anime direciona o usuário para criação com título pré-preenchido usando rota `/new/:slug`.

## Code Organization

**Approach:** híbrido entre organização por camada e por tela.

**Structure:**

- `src/pages`: telas completas ligadas ao roteamento
- `src/components`: UI compartilhada
- `src/hooks`: contexto e regras de autenticação
- `src/routes`: composição de rotas públicas e privadas
- `src/services`: clients HTTP
- `src/style`: tema e estilo global
- `src/assets`: imagens e SVGs

**Module boundaries:**

- Regras de sessão ficam em `useAuth`
- Navegação fica em `routes` e em handlers locais nas páginas
- Acesso a dados fica distribuído nas páginas, sem camada intermediária de repositories/services de domínio
- Estilos ficam co-localizados por página/componente
