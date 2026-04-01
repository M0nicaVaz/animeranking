# Codebase Concerns

**Analysis Date:** 2026-03-31

## Tech Debt

**Autenticação com função duplicada:**

- Issue: `src/hooks/useAuth.jsx` declara `signUp` duas vezes; a segunda sobrescreve a primeira e deixa código morto no arquivo.
- Files: `src/hooks/useAuth.jsx`
- Why: provavelmente houve troca de abordagem de `async/await` para `.then().catch()` sem remoção da implementação antiga.
- Impact: aumenta confusão de manutenção, dificulta depuração e mascara qual comportamento realmente está em produção.
- Fix approach: remover a implementação morta e consolidar cadastro em uma única função com retorno previsível.

**Lógica de dados espalhada nas páginas:**

- Issue: as páginas fazem chamadas HTTP, validações, navegação e adaptação de payloads no mesmo arquivo.
- Files: `src/pages/Home/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Explore/index.jsx`, `src/pages/Details/index.jsx`, `src/pages/Profile/index.jsx`
- Why: arquitetura atual favorece velocidade de entrega em um frontend pequeno.
- Impact: mudanças de contrato de API e regras de negócio exigem editar várias telas e aumentam o risco de regressão.
- Fix approach: extrair hooks ou services de domínio por fluxo (`auth`, `ranking`, `explore`) e reduzir a responsabilidade das páginas.

## Known Bugs

**Falha silenciosa ou quebra visual quando requisições em `useEffect` falham:**

- Symptoms: a tela pode ficar vazia, travada em loading implícito ou lançar erro não tratado quando backend/Jikan falham.
- Trigger: indisponibilidade da API própria, rate limit da Jikan ou configuração inválida de `VITE_APP_API`.
- Files: `src/pages/Home/index.jsx`, `src/pages/Explore/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Details/index.jsx`
- Workaround: recarregar a página ou corrigir manualmente o ambiente/configuração.
- Root cause: chamadas assíncronas iniciadas em `useEffect` e handlers sem tratamento consistente de erro.

## Security Considerations

**Sessão baseada apenas em dados persistidos no browser:**

- Risk: a aplicação considera o usuário autenticado quando encontra `token` e `user` no `localStorage`, sem validação imediata da sessão no carregamento.
- Files: `src/hooks/useAuth.jsx`, `src/routes/index.jsx`
- Current mitigation: envio de Bearer token nas chamadas autenticadas.
- Recommendations: validar sessão no bootstrap com endpoint de perfil/me, tratar token expirado e considerar estratégia menos exposta que `localStorage` para credenciais sensíveis.

## Fragile Areas

**Mutação direta de objetos de estado:**

- Files: `src/pages/New/index.jsx`, `src/pages/Profile/index.jsx`
- Why fragile: `Object.assign(data, updated)` e `Object.assign(user, updated)` alteram o objeto base em vez de criar cópia imutável.
- Common failures: UI desatualizada, efeitos colaterais inesperados e bugs difíceis de rastrear quando múltiplos componentes compartilham a mesma referência.
- Safe modification: substituir por cópia explícita (`{ ...data, ...updated }`) e evitar mutar objetos vindos de contexto ou resposta HTTP.
- Test coverage: inexistente.

**Snackbar sem cleanup de timeout:**

- Files: `src/components/Snackbar/index.jsx`
- Why fragile: o `setTimeout` é criado a cada mudança de `isOpen`, mas não há limpeza ao desmontar o componente.
- Common failures: tentativa de atualizar estado após unmount e comportamento inconsistente em navegações rápidas.
- Safe modification: retornar cleanup do `useEffect` com `clearTimeout`.
- Test coverage: inexistente.

## Dependencies at Risk

**Toolchain antiga para manutenção futura:**

- Risk: versões antigas de `vite`, `axios`, `react-router-dom` e `styled-components` tendem a aumentar custo de upgrade e compatibilidade com tooling moderno.
- Impact: mais fricção para adicionar testes, linting moderno, melhorias de performance e upgrades de segurança.
- Migration plan: planejar atualização incremental da toolchain após estabilizar os fluxos atuais e adicionar testes básicos de regressão.

## Missing Critical Features

**Observabilidade e fallback operacional:**

- Problem: não há telemetria, logging estruturado ou fallback claro para indisponibilidade das integrações.
- Current workaround: mensagens locais via `Snackbar` ou `alert`.
- Blocks: diagnóstico rápido de falhas em produção e correção baseada em evidência.
- Implementation complexity: média

## Test Coverage Gaps

**Fluxos críticos sem proteção automatizada:**

- What's not tested: login, cadastro, restauração de sessão, CRUD de animes, upload de avatar e busca na Jikan.
- Risk: qualquer alteração de contrato ou refactor pode quebrar o fluxo principal sem sinal prévio.
- Priority: High
- Difficulty to test: média; os fluxos dependem de duas APIs externas, mas podem ser cobertos com mocks e alguns E2E essenciais.
