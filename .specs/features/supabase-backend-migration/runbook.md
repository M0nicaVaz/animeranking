# Supabase Continuity Runbook

**Feature**: `.specs/features/supabase-backend-migration/spec.md`
**Purpose**: definir a documentação mínima necessária para manter o projeto operável com Supabase.
**Status**: Planning baseline

---

## Production Documentation Gate

Nenhum go-live para Supabase deve ocorrer sem os artefatos abaixo completos, revisados e versionados.

| Artifact | Purpose | Suggested Location | Required Before |
| -------- | ------- | ------------------ | --------------- |
| Environment & Secrets | setup local/staging/prod, URLs, keys, redirects | `docs/supabase/env.md` | desenvolvimento colaborativo |
| Schema & Migrations | tabelas, constraints, versionamento de banco | `supabase/migrations/`, `docs/supabase/schema.md` | primeira integração real |
| RLS & Security | políticas, buckets, auth settings, papéis e riscos | `docs/supabase/security.md` | qualquer uso com dados reais |
| Frontend Integration Contract | como Auth/Profile/Ranking conversam com Supabase | `docs/supabase/frontend-contract.md` | refactor das páginas |
| Validation & UAT | smoke tests, checklists e cenários de erro | `docs/supabase/validation.md` | staging e produção |
| Data Migration Plan | origem, mapeamento, validação e reconciliação | `docs/supabase/data-migration.md` | corte com dados legados |
| Cutover Plan | sequência de ativação, freeze, validação pós-corte | `docs/supabase/cutover.md` | produção |
| Rollback Plan | gatilhos, passos e critérios de retorno | `docs/supabase/rollback.md` | produção |
| Troubleshooting Guide | sintomas, causas prováveis e ações rápidas | `docs/supabase/troubleshooting.md` | produção |
| Ownership Matrix | quem aprova e mantém cada área | `docs/supabase/ownership.md` | antes do primeiro deploy estável |

---

## Runtime Baseline

### Core Supabase Resources

- Projeto Supabase por ambiente
- Auth configurado para e-mail/senha
- Tabela `profiles`
- Tabelas de ranking e tags
- Bucket `avatars`
- Políticas de RLS para dados do usuário

### Frontend Environment Contract

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- Variáveis adicionais de redirect, se o fluxo final de reset/update password exigir

### External Dependencies That Remain

- Jikan API para exploração de animes
- Vercel para hospedagem do frontend

---

## Operating Procedures

### 1. Preflight Before Any Environment Change

- Confirmar que schema e políticas estão versionados
- Confirmar que as chaves públicas e URLs do ambiente estão corretas
- Confirmar que redirect URLs do Auth coincidem com o ambiente de destino
- Confirmar que validation/UAT está atualizado para a versão atual

### 2. Before Release

- Rodar o checklist de validação funcional
- Validar login, cadastro, sessão persistida, CRUD, avatar e fluxo Explore -> New
- Validar comportamento de erro para Auth, Postgres e Storage
- Revisar critérios de rollback e responsáveis de plantão

### 3. After Release

- Executar smoke test manual ou automatizado em produção
- Verificar autenticação de usuário novo e usuário existente
- Verificar escrita e leitura de dados isolados por conta
- Verificar upload e leitura de avatar

### 4. Incident Response Domains

- Auth: falhas de login, sessão expirada, cadastro bloqueado, mudança de e-mail/senha
- Database/RLS: leitura vazia, escrita negada, dados cruzados entre usuários
- Storage: upload negado, avatar quebrado, caminho inválido
- Configuration: URL/key incorreta, redirect URL ausente, ambiente trocado

---

## Cutover and Rollback Principles

### Cutover Must Define

- data/hora da troca
- freeze window se houver migração de dados
- validações obrigatórias logo após o deploy
- responsável técnico e aprovador HITL

### Rollback Must Define

- gatilhos objetivos para abortar a mudança
- qual backend volta a ser origem da verdade
- como desfazer flags/env vars
- como registrar divergência de dados gerada durante a janela

---

## Maintenance Cadence

- Revisar `env.md`, `security.md` e `validation.md` a cada mudança de schema ou auth flow
- Revisar `cutover.md` e `rollback.md` antes de qualquer release que altere infraestrutura
- Revisar `troubleshooting.md` após cada incidente relevante

---

## HITL Approval Checklist

- [ ] Spec aprovado
- [ ] Design aprovado
- [ ] Decisões abertas de `context.md` resolvidas
- [ ] Estratégia de ambientes aprovada
- [ ] Estratégia de dados legados aprovada
- [ ] Rollback aprovado
