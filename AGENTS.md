# AGENTS.md

Guia operacional para agentes de IA que trabalham neste repositório.

## Purpose

Este projeto está em transição de um backend legado para Supabase.
O objetivo dos agentes não é apenas escrever código, mas preservar continuidade operacional, documentação rastreável e segurança de mudança.

## Current Product Direction

- Frontend atual: React 18 + Vite + styled-components
- Integração externa mantida: Jikan API
- Backend legado atual: API REST externa
- Backend alvo: Supabase (`Auth`, `Postgres`, `Storage`)
- Modo de trabalho esperado: AI-first com HITL
- Processo padrão: `Research -> Plan -> Implement`
- Planejamento base: spec-driven development

## Required Reading Order

Antes de propor ou implementar qualquer mudança relevante, leia nesta ordem:

1. [`.specs/project/PROJECT.md`](/Users/monicavaz/Documents/dev/animeranking/.specs/project/PROJECT.md)
2. [`.specs/project/ROADMAP.md`](/Users/monicavaz/Documents/dev/animeranking/.specs/project/ROADMAP.md)
3. [`.specs/project/STATE.md`](/Users/monicavaz/Documents/dev/animeranking/.specs/project/STATE.md)
4. Arquivos relevantes em [`.specs/codebase/`](/Users/monicavaz/Documents/dev/animeranking/.specs/codebase)
5. Se a mudança tocar a trilha Supabase, ler tudo em [`.specs/features/supabase-backend-migration/`](/Users/monicavaz/Documents/dev/animeranking/.specs/features/supabase-backend-migration)

Se existir conflito entre código e documentação, o agente deve:

- assumir o código como estado atual de execução
- registrar a divergência na documentação apropriada
- não “corrigir” comportamento de produto por inferência

## Operating Rules

- Não iniciar implementação estrutural sem spec e design aprovados.
- Não tomar decisões de produção silenciosamente.
- Não remover comportamento existente sem registrar impacto.
- Não tratar Supabase como detalhe técnico; schema, RLS, storage e operação fazem parte do escopo.
- Não espalhar chamadas de integração por páginas quando houver oportunidade clara de encapsular em serviços ou hooks.
- Não confiar em documentação implícita no código; mudanças relevantes devem atualizar docs persistentes.

## HITL Gates

As decisões abaixo exigem validação humana antes de implementação ou rollout:

- mudanças de autenticação que alterem UX ou segurança
- políticas de RLS e acesso entre usuários
- estratégia de ambientes (`dev`, `staging`, `prod`)
- confirmação de e-mail, recovery flows e redirects
- storage de avatars público vs privado
- migração de dados legados
- cutover e rollback

Se uma dessas decisões estiver em aberto, o agente deve parar no planejamento e pedir confirmação.

## Supabase Migration Guardrails

Durante a migração para Supabase, o agente deve preservar:

- login, cadastro, logout e restauração de sessão
- CRUD de ranking pessoal
- edição de perfil e avatar
- integração com Jikan no fluxo de exploração

Durante a migração para Supabase, o agente deve evitar:

- redesign visual não solicitado
- mudanças de produto fora de paridade funcional
- introduzir dependência de service role no frontend
- assumir que bucket público implica upload liberado
- assumir que `auth.uid()` sem checagem adicional é suficiente para toda policy

## Documentation Requirements

Mudanças relevantes devem atualizar os artefatos corretos:

- visão e direção do projeto: `.specs/project/PROJECT.md`
- prioridade e trilha atual: `.specs/project/ROADMAP.md`
- decisões, blockers e aprendizados: `.specs/project/STATE.md`
- contexto estrutural do repositório: `.specs/codebase/*`
- feature em andamento: `.specs/features/<feature>/`
- documentação operacional permanente: `docs/` quando existir implementação consolidada

## Expected Workflow

### Research

- inspecionar o código primeiro
- consultar docs já versionados no repositório
- para bibliotecas externas, preferir documentação oficial
- declarar explicitamente qualquer incerteza relevante

### Plan

- criar ou atualizar `spec.md`, `context.md`, `design.md` e `tasks.md` quando o escopo justificar
- registrar requirement IDs e dependências
- explicitar riscos, rollout e rollback quando a mudança tocar produção

### Implement

- executar tarefas em ordem rastreável
- manter mudanças pequenas e verificáveis
- validar impacto nos fluxos principais
- atualizar documentação no mesmo ciclo da implementação

## Testing Expectations

Hoje o projeto não possui cobertura automatizada relevante.
Por isso, qualquer agente que alterar auth, perfil, ranking, storage ou integração Supabase deve no mínimo:

- declarar o que foi validado
- declarar o que não foi validado
- propor smoke tests ou UAT quando automação ainda não existir

## File Placement Conventions

- clientes de integração frontend: `src/services/`
- estado global e sessão: `src/hooks/`
- telas: `src/pages/`
- componentes compartilhados: `src/components/`
- specs e planejamento: `.specs/`
- documentação operacional estável: `docs/`
- migrations e configuração Supabase: `supabase/` se essa convenção for aprovada no planejamento

## Preferred Behavior for Agents

- ser conservador com produção
- ser explícito sobre trade-offs
- favorecer paridade funcional antes de melhoria incremental
- deixar decisões abertas visíveis em vez de inferi-las
- tratar documentação como entregável, não como pós-processo
