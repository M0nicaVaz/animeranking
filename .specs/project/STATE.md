# State

**Last Updated:** 2026-03-31T21:32:00-03:00
**Current Work:** Supabase backend migration - specification, design and operational documentation planning

---

## Recent Decisions (Last 60 days)

### AD-001: Documentar o projeto atual como brownfield antes de planejar novas features (2026-03-31)

**Decision:** iniciar o processo pelo mapeamento real do repositório e pela criação da estrutura `.specs/`.
**Reason:** ainda não havia documentação persistente do estado atual da aplicação.
**Trade-off:** mais tempo inicial em análise antes de discutir expansão de produto.
**Impact:** futuras especificações poderão reutilizar contexto estável em vez de reanalisar o código do zero.

### AD-002: Tratar o backend como fronteira de integração, não como escopo deste repositório (2026-03-31)

**Decision:** documentar apenas o que o frontend consome e marcar o backend como dependência externa.
**Reason:** o código do servidor não está presente neste workspace.
**Trade-off:** a visão de domínio e contratos fica parcial até o backend também ser mapeado.
**Impact:** mudanças futuras que toquem contratos precisam considerar coordenação com outro repositório.

### AD-003: Considerar visão e roadmap atuais como hipótese inicial do produto (2026-03-31)

**Decision:** inferir objetivos e roadmap a partir do código existente, com validação posterior do owner.
**Reason:** não há documento de produto fonte no repositório além do README resumido.
**Trade-off:** alguns objetivos podem precisar de ajuste quando prioridades reais forem confirmadas.
**Impact:** a base de especificação já existe e pode ser refinada sem recomeçar do zero.

### AD-004: Tratar Supabase como backend alvo da próxima fase do produto (2026-03-31)

**Decision:** planejar a substituição do backend legado por Supabase com foco em Auth, Postgres, Storage e documentação operacional.
**Reason:** a equipe quer reduzir dependência do backend externo atual e centralizar a evolução do produto em uma plataforma mais fácil de sustentar.
**Trade-off:** a migração exige disciplina de schema, RLS, validação e cutover para não reproduzir fragilidades atuais.
**Impact:** roadmap, spec da feature e runbook operacional passam a girar em torno da trilha Supabase.

### AD-005: Adotar AI-first com HITL e RPI para a trilha Supabase (2026-03-31)

**Decision:** organizar o trabalho em Research -> Plan -> Implement, com gates humanos antes de design final, cutover e decisões de produção.
**Reason:** a mudança de backend é estrutural e não deve ser executada por inferência implícita.
**Trade-off:** mais checkpoints antes de codar.
**Impact:** as decisões abertas ficam registradas em `context.md` e a implementação futura terá critérios de aprovação explícitos.

---

## Active Blockers

### B-001: Verificação ponta a ponta limitada ao frontend local

**Discovered:** 2026-03-31
**Impact:** médio; não é possível validar contratos reais do backend nem comportamento em falhas sem o projeto da API e ambiente configurado.
**Workaround:** documentar endpoints consumidos e seguir com especificação do frontend.
**Resolution:** mapear o repositório do backend e registrar contratos e fluxos compartilhados.

### B-002: Quatro decisões de produção do Supabase ainda não foram fechadas

**Discovered:** 2026-03-31
**Impact:** alto; e-mail confirmation, estratégia de ambientes, política de avatars e migração de dados alteram autenticação, operação e go-live.
**Workaround:** seguir com design assumindo paridade funcional e registrar pontos de HITL em `.specs/features/supabase-backend-migration/context.md`.
**Resolution:** aprovar os pontos abertos antes de iniciar implementação.

---

## Lessons Learned

### L-001: O app depende fortemente de contexto implícito no código (2026-03-31)

**Context:** análise inicial do repositório para especificação.
**Problem:** regras de autenticação, CRUD e integrações estavam espalhadas por páginas e sem documentação persistente.
**Solution:** criar docs brownfield e registrar concerns relevantes.
**Prevents:** reanálise completa do projeto a cada nova sessão de trabalho.

### L-002: Documentação operacional precisa nascer junto com a migração (2026-03-31)

**Context:** planejamento da trilha Supabase.
**Problem:** migrar para uma plataforma nova sem env/schema/RLS/cutover/rollback documentados recria dependência implícita e risco operacional.
**Solution:** incluir runbook e docs operacionais como parte do escopo P1 da feature.
**Prevents:** go-live sem suporte, sem rollback ou sem ownership claros.

---

## Quick Tasks Completed

| #   | Description                                      | Date       | Commit | Status  |
| --- | ------------------------------------------------ | ---------- | ------ | ------- |
| 001 | Inicialização da estrutura `.specs/` do projeto  | 2026-03-31 | -      | ✅ Done |
| 002 | Planejamento da migração para Supabase com RPI   | 2026-03-31 | -      | ✅ Done |

---

## Deferred Ideas

- [ ] Mapear o backend `animeranking-api` para completar contratos e responsabilidades — Captured during: brownfield mapping
- [ ] Introduzir suíte mínima de testes para autenticação e CRUD principal — Captured during: brownfield mapping
- [ ] Definir métricas reais de produto e sucesso com o owner — Captured during: project specification
- [ ] Avaliar geração de tipos/contratos a partir do Supabase após a migração base — Captured during: supabase migration planning

---

## Todos

- [ ] Validar as quatro decisões abertas de `supabase-backend-migration/context.md`
- [ ] Aprovar spec/design/tasks antes da implementação

## Preferences

**Model Guidance Shown:** never
