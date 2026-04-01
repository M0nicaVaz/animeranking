# Code Conventions

## Naming Conventions

**Files:**
O padrão dominante é diretório em PascalCase com `index.jsx` e `styled.js` para páginas e componentes.
Exemplos: `src/pages/SignIn/index.jsx`, `src/components/RankingCard/styled.js`

Arquivos de infraestrutura ficam em minúsculas.
Exemplos: `src/services/api.js`, `src/style/theme.js`

**Functions/Methods:**
Predomina `camelCase`, com handlers prefixados por `handle` e carregamentos assíncronos usando verbos como `get`.
Exemplos: `handleSignIn`, `handleUpdateAnime`, `getTopAnimes`

**Variables:**
Predomina `camelCase` para estado local, dados de resposta e props derivadas.
Exemplos: `rankingList`, `alertMessage`, `avatarUrl`, `titleFromParam`

**Constants:**
Há pouco uso de constantes nomeadas em caixa alta. Valores fixos ficam inline no componente ou no tema.
Exemplos: chaves de `localStorage` em `src/hooks/useAuth.jsx`, cores em `src/style/theme.js`

## Code Organization

**Imports:**
Existe uma tendência de agrupar imports externos primeiro e internos depois, mas a ordem não é rigorosamente padronizada.

Exemplo observado em `src/pages/Details/index.jsx`:
- bibliotecas (`date-fns`, React, router, ícones)
- componentes internos
- assets/hooks/services
- styled local

**File Structure:**
Componentes e páginas geralmente seguem:
1. imports
2. componente funcional
3. handlers locais
4. `useEffect`/estado
5. JSX de retorno

Exemplo: `src/pages/New/index.jsx`

## Type Safety / Documentation

**Approach:** JavaScript sem tipagem estática, sem PropTypes e sem documentação formal de contratos no código.

Exemplos:
- `src/components/Button/index.jsx` recebe props livres via `...rest`
- `src/hooks/useAuth.jsx` expõe contexto sem shape tipado

## Error Handling

**Pattern:** tratamento inline por `try/catch` ou `.catch()`, geralmente convertendo falhas em mensagens para `Snackbar`.

Exemplos:
- `src/hooks/useAuth.jsx` trata falhas de autenticação e cadastro
- `src/pages/New/index.jsx` usa `alert(e.message)` em falhas de persistência

Há inconsistência entre telas: algumas tratam erro visualmente, outras não envolvem chamadas assíncronas em `try/catch`.

## State Management

**Pattern:** estado local por página/componente com `useState`, e estado global restrito ao contexto de autenticação.

Exemplos:
- `src/pages/Home/index.jsx` controla busca e lista localmente
- `src/pages/Explore/index.jsx` controla busca, resultados e snackbar
- `src/hooks/useAuth.jsx` centraliza sessão e mensagens compartilhadas entre login, cadastro e perfil

## Comments / Documentation

**Style:** comentários quase inexistentes; o código depende principalmente de nomes de funções e da estrutura do JSX para legibilidade.

Nenhum padrão de comentários explicativos foi identificado nos arquivos amostrados.

## Styling Conventions

**Pattern:** `styled-components` com tema global acessado por `props.theme`.

Exemplos:
- `src/style/globalStyle.js` define reset, foco e fonte padrão
- `src/style/theme.js` centraliza cores

As páginas e componentes mantêm seus estilos co-localizados em `styled.js` ou `styles.js`.
