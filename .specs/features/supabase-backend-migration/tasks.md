# Supabase Backend Migration Tasks

**Design**: `.specs/features/supabase-backend-migration/design.md`
**Status**: Draft

---

## Execution Plan

### Phase 1: Foundation (Sequential)

`T1 -> T2 -> T3`

### Phase 2: Core Implementation (Parallel OK)

Depois da fundação:

`T3 -> T4`

`T3 -> T5`

`T3 -> T6`

`T4, T5, T6 -> T7`

### Phase 3: Validation and Cutover (Sequential)

`T7 -> T8 -> T9 -> T10`

---

## Task Breakdown

### T1: Definir contrato de ambiente e projeto Supabase

**What**: documentar projeto, ambientes, variáveis, redirect URLs e dependências externas mínimas.
**Where**: `docs/supabase/env.md`, `.env.example`
**Depends on**: None
**Reuses**: `README.md`, `.specs/features/supabase-backend-migration/runbook.md`
**Requirement**: SUPA-07

**Tools**:

- MCP: `filesystem`, `Context7`
- Skill: NONE

**Done when**:

- [ ] Variáveis obrigatórias estiverem listadas para local/staging/prod
- [ ] Redirect URLs de auth estiverem documentadas
- [ ] Dependências externas remanescentes estiverem identificadas

---

### T2: Criar baseline de schema, RLS e storage

**What**: versionar migrations SQL e documento de políticas para profiles, anime entries, tags e avatars.
**Where**: `supabase/migrations/*`, `docs/supabase/security.md`
**Depends on**: T1
**Reuses**: `.specs/features/supabase-backend-migration/design.md`
**Requirement**: SUPA-08

**Tools**:

- MCP: `filesystem`, `Context7`
- Skill: NONE

**Done when**:

- [ ] Tabelas necessárias existirem no plano de schema
- [ ] Políticas RLS cobrirem leitura e escrita por usuário
- [ ] Bucket e políticas de avatar estiverem definidos

---

### T3: Introduzir cliente Supabase e camada de configuração

**What**: adicionar cliente Supabase centralizado e falha explícita para ambiente inválido.
**Where**: `src/services/supabase.js`
**Depends on**: T2
**Reuses**: `src/services/api.js`
**Requirement**: SUPA-01, SUPA-07, SUPA-12

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Cliente único estiver criado
- [ ] Variáveis ausentes gerarem erro claro em desenvolvimento
- [ ] Nenhuma página instanciar cliente Supabase diretamente

---

### T4: Refatorar autenticação para Supabase Auth

**What**: trocar login, cadastro, sessão e logout para usar Supabase Auth preservando a API pública de `useAuth`.
**Where**: `src/hooks/useAuth.jsx`, `src/pages/SignIn/index.jsx`, `src/pages/SignUp/index.jsx`, `src/routes/index.jsx`
**Depends on**: T3
**Reuses**: `src/hooks/useAuth.jsx`
**Requirement**: SUPA-01, SUPA-02

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Login e cadastro usarem Supabase
- [ ] Sessão restaurar corretamente após reload
- [ ] Logout invalidar sessão e rotas privadas

---

### T5: Implementar perfil e avatar no Supabase

**What**: mover atualização de perfil, senha, e-mail e avatar para tabela `profiles`, Auth e Storage.
**Where**: `src/services/profile.js`, `src/pages/Profile/index.jsx`, `src/components/Header/index.jsx`
**Depends on**: T3
**Reuses**: `src/pages/Profile/index.jsx`
**Requirement**: SUPA-03

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Nome/avatar vierem de `profiles`
- [ ] E-mail/senha forem atualizados pelo fluxo correto do Supabase
- [ ] Avatar antigo não seja perdido em upload falho

---

### T6: Implementar CRUD de ranking no Supabase

**What**: trocar listagem, detalhe, criação, edição e exclusão de animes/tags para Postgres com RLS.
**Where**: `src/services/ranking.js`, `src/pages/Home/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Details/index.jsx`
**Depends on**: T3
**Reuses**: `src/pages/Home/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Details/index.jsx`
**Requirement**: SUPA-04, SUPA-05, SUPA-06

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] CRUD não chamar mais `/animes` do backend legado
- [ ] Tags e rating preservarem comportamento atual
- [ ] Dois usuários não consigam ver dados um do outro

---

### T7: Fechar adaptação de UX e tratamento de erro

**What**: unificar loading, feedback e shape de dados entre Auth, Profile e Ranking após a migração.
**Where**: `src/hooks/useAuth.jsx`, `src/components/Snackbar/index.jsx`, páginas impactadas
**Depends on**: T4, T5, T6
**Reuses**: `src/components/Snackbar/index.jsx`
**Requirement**: SUPA-02, SUPA-09, SUPA-12

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Falhas de auth, banco e storage forem tratadas de forma explícita
- [ ] Estados vazios/carregando não quebrarem a UI
- [ ] Não existirem regressões críticas no fluxo principal

---

### T8: Criar plano de validação e smoke coverage

**What**: estabelecer smoke tests mínimos e roteiro de UAT para o backend Supabase.
**Where**: `docs/supabase/validation.md`, testes automatizados escolhidos pelo time
**Depends on**: T7
**Reuses**: `.specs/codebase/TESTING.md`
**Requirement**: SUPA-11

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Fluxos críticos estiverem cobertos por checklist de validação
- [ ] Houver decisão explícita sobre qual suíte automatizada será usada
- [ ] Critérios de aprovação de release estiverem definidos

---

### T9: Elaborar plano de migração de dados legados

**What**: mapear export, transformação, importação e validação para dados vindos do backend legado.
**Where**: `docs/supabase/data-migration.md`
**Depends on**: T8
**Reuses**: `.specs/features/supabase-backend-migration/design.md`
**Requirement**: SUPA-10

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Houver mapeamento campo-a-campo entre legado e Supabase
- [ ] Houver critério para migração parcial ou adiada
- [ ] Houver plano de validação pós-import

---

### T10: Consolidar runbook de cutover e rollback

**What**: transformar o plano em documentação operacional final para deploy, verificação pós-corte e retorno ao backend legado se necessário.
**Where**: `docs/supabase/cutover.md`, `docs/supabase/rollback.md`, `docs/supabase/troubleshooting.md`
**Depends on**: T9
**Reuses**: `.specs/features/supabase-backend-migration/runbook.md`
**Requirement**: SUPA-09, SUPA-12

**Tools**:

- MCP: `filesystem`
- Skill: NONE

**Done when**:

- [ ] Sequência de corte estiver clara e revisável
- [ ] Critérios de rollback estiverem objetivos
- [ ] Troubleshooting inicial cobrir auth, RLS, storage e configuração

---

## Parallel Execution Map

```text
Phase 1 (Sequential):
  T1 -> T2 -> T3

Phase 2 (Parallel):
  T3 complete, then:
    T4 [P]
    T5 [P]
    T6 [P]

  T4, T5, T6 -> T7

Phase 3 (Sequential):
  T7 -> T8 -> T9 -> T10
```

---

## Task Granularity Check

| Task | Scope | Status |
| ---- | ----- | ------ |
| T1: contrato de ambiente | 1 conjunto documental coeso | ✅ Granular |
| T4: auth Supabase | 1 módulo funcional principal | ✅ Granular |
| T6: CRUD ranking | 1 domínio funcional | ✅ Granular |
| T10: runbook final | 1 pacote operacional | ✅ Granular |

---

## Notes Before Execution

- Antes de implementar, confirmar no HITL as quatro decisões abertas em `context.md`.
- Na execução, vale escolher explicitamente a suíte de testes e a convenção de diretórios `docs/supabase/` + `supabase/`.
- Se o time quiser, posso quebrar T4, T5 e T6 em subtarefas ainda mais atômicas antes da implementação.
