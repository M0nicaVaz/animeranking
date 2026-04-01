# Supabase Backend Migration Specification

## Problem Statement

O frontend atual depende de um backend legado fora deste repositório para autenticação, perfil e CRUD da lista de animes. Isso aumenta acoplamento, dificulta evolução segura e impede que a manutenção operacional fique documentada no mesmo fluxo de trabalho do produto. A próxima etapa do projeto é migrar essas capacidades para Supabase sem perder comportamento essencial do app.

## Goals

- [ ] Substituir a dependência do backend legado por Supabase com paridade funcional para autenticação, perfil, avatar e ranking pessoal.
- [ ] Documentar configuração, segurança, operação, validação, rollout e rollback para que o projeto continue operável após a migração.
- [ ] Preservar a integração com a Jikan API e a UX principal já existente durante a troca de backend.

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
| ------- | ------ |
| Redesenho visual das telas | Não é necessário para a troca de backend |
| Funcionalidades sociais, ranking público ou compartilhamento | Não fazem parte da paridade com o produto atual |
| Realtime, subscriptions ou notificações | Aumentam escopo sem serem necessárias para continuidade operacional |
| Substituir a Jikan API por dados próprios | A descoberta de animes continua dependente da integração externa atual |

---

## User Stories

### P1: Autenticação e perfil com Supabase ⭐ MVP

**User Story**: As a usuário autenticado, I want entrar, sair, cadastrar conta e atualizar perfil usando Supabase so that o app continue funcionando sem depender do backend legado.

**Why P1**: sem autenticação e perfil, nenhuma área logada permanece utilizável.

**Acceptance Criteria**:

1. WHEN um usuário criar conta com nome, e-mail e senha THEN o sistema SHALL registrar a identidade no Supabase Auth e criar/atualizar o perfil associado.
2. WHEN um usuário entrar com e-mail e senha THEN o sistema SHALL restaurar a sessão via cliente Supabase e liberar as rotas autenticadas.
3. WHEN um usuário sair ou a sessão expirar THEN o sistema SHALL remover o acesso às rotas privadas e exigir nova autenticação.
4. WHEN um usuário atualizar nome, e-mail, senha ou avatar THEN o sistema SHALL persistir a mudança usando Supabase Auth, Postgres e Storage conforme o tipo do dado.

**Independent Test**: cadastrar, entrar, atualizar perfil/avatar, recarregar a página e confirmar que a sessão e o perfil permanecem consistentes.

---

### P1: Ranking pessoal com isolamento por usuário ⭐ MVP

**User Story**: As a usuário autenticado, I want manter minha lista de animes no Supabase so that meu ranking pessoal continue disponível com segurança.

**Why P1**: o núcleo do produto é o CRUD da lista pessoal.

**Acceptance Criteria**:

1. WHEN um usuário listar seus animes THEN o sistema SHALL retornar apenas registros vinculados ao próprio usuário.
2. WHEN um usuário criar, editar ou excluir um anime THEN o sistema SHALL persistir a operação no Postgres com regras de acesso por usuário.
3. WHEN um anime tiver tags e nota THEN o sistema SHALL preservar esses dados com o mesmo comportamento funcional já existente na UI.
4. WHEN um usuário sem permissão tentar acessar dados de outro usuário THEN o sistema SHALL bloquear a operação por políticas de segurança do Supabase.

**Independent Test**: com dois usuários distintos, validar que cada conta só enxerga e altera seus próprios registros.

---

### P1: Documentação operacional e de continuidade ⭐ MVP

**User Story**: As a mantenedor do projeto, I want documentação de ambiente, segurança, rollout e rollback so that a aplicação continue operável e suportável após a migração.

**Why P1**: a troca de backend sem documentação operacional recria o mesmo problema de dependência implícita que existe hoje.

**Acceptance Criteria**:

1. WHEN alguém precisar configurar o projeto localmente THEN o sistema SHALL ter documentação clara de variáveis de ambiente, chaves públicas, URLs e dependências externas.
2. WHEN alguém precisar revisar segurança THEN o sistema SHALL ter documentação versionada de schema, RLS, storage e auth settings usados pelo app.
3. WHEN a equipe preparar o go-live THEN o sistema SHALL ter checklist de cutover, validação pós-deploy e rollback.
4. WHEN ocorrer incidente em autenticação, storage ou banco THEN o sistema SHALL ter troubleshooting mínimo com sintomas, causas prováveis e ações imediatas.

**Independent Test**: um mantenedor que não participou do desenho consegue levantar o ambiente e seguir o checklist de operação apenas com a documentação.

---

### P2: Migração de dados legados

**User Story**: As a owner do produto, I want um plano de migração dos dados existentes so that usuários atuais não percam histórico ao trocar de backend.

**Why P2**: importante para continuidade real, mas depende de acesso ao backend/banco legado.

**Acceptance Criteria**:

1. WHEN houver acesso ao banco ou export do backend legado THEN o sistema SHALL ter mapeamento entre os modelos antigos e os modelos do Supabase.
2. WHEN a migração for executada THEN o sistema SHALL validar integridade mínima de usuários, animes, tags e avatares migrados.
3. WHEN a migração não puder ocorrer antes do go-live THEN o sistema SHALL documentar a decisão e o impacto operacional.

**Independent Test**: importar um conjunto amostral de dados legados e validar paridade na UI.

---

### P2: Validação automatizada e UAT de backend

**User Story**: As a equipe de entrega, I want smoke tests e roteiro de UAT focados na troca para Supabase so that regressões críticas sejam detectadas antes do corte.

**Why P2**: reduz risco de uma migração grande sem cobertura atual no projeto.

**Acceptance Criteria**:

1. WHEN a integração com Supabase for implementada THEN o sistema SHALL ter pelo menos um conjunto mínimo de verificações automatizadas ou smoke tests para login, CRUD e perfil.
2. WHEN a equipe preparar release THEN o sistema SHALL ter roteiro de UAT para validar fluxos principais e cenários de erro.
3. WHEN houver falha de auth, banco ou storage THEN o sistema SHALL ter cenários de teste correspondentes documentados.

**Independent Test**: executar o checklist de validação e obter resultado claro de aprovação/reprovação por fluxo.

---

### P3: Melhoria de DX para manutenção futura

**User Story**: As a desenvolvedor, I want contratos e tipos mais claros para Supabase so that futuras mudanças sejam menos frágeis.

**Why P3**: é importante para reduzir dívida técnica, mas não bloqueia o primeiro corte.

**Acceptance Criteria**:

1. WHEN o backend Supabase estiver estável THEN o sistema SHALL ter um ponto único de acesso ao cliente e aos contratos consumidos.
2. WHEN a equipe alterar schema ou políticas THEN o sistema SHALL conseguir localizar rapidamente os artefatos correspondentes no repositório.

**Independent Test**: um novo mantenedor consegue identificar onde ficam cliente, schema, políticas e contratos sem reexplorar o projeto inteiro.

---

## Edge Cases

- WHEN `VITE_SUPABASE_URL` ou `VITE_SUPABASE_PUBLISHABLE_KEY` estiverem ausentes THEN o sistema SHALL falhar com mensagem de configuração explícita para desenvolvimento.
- WHEN políticas de RLS bloquearem leitura ou escrita THEN o sistema SHALL expor erro tratável e não deixar a UI em estado silencioso.
- WHEN upload de avatar falhar THEN o sistema SHALL manter o perfil consistente sem gravar referência inválida.
- WHEN a Jikan API estiver indisponível THEN o sistema SHALL preservar o restante do app autenticado e comunicar a falha apenas no fluxo de exploração.
- WHEN houver diferença entre dados legados e novo schema THEN o sistema SHALL registrar a divergência no plano de migração e no checklist de corte.

## Requirement Traceability

Each requirement gets a unique ID for tracking across design, tasks, and validation.

| Requirement ID | Story | Phase | Status |
| -------------- | ----- | ----- | ------ |
| SUPA-01 | P1: Autenticação e perfil | In Tasks | Pending |
| SUPA-02 | P1: Autenticação e perfil | In Tasks | Pending |
| SUPA-03 | P1: Autenticação e perfil | In Tasks | Pending |
| SUPA-04 | P1: Ranking pessoal | In Tasks | Pending |
| SUPA-05 | P1: Ranking pessoal | In Tasks | Pending |
| SUPA-06 | P1: Ranking pessoal | In Tasks | Pending |
| SUPA-07 | P1: Documentação operacional | In Tasks | Pending |
| SUPA-08 | P1: Documentação operacional | In Tasks | Pending |
| SUPA-09 | P1: Documentação operacional | In Tasks | Pending |
| SUPA-10 | P2: Migração de dados | In Tasks | Pending |
| SUPA-11 | P2: Validação e UAT | In Tasks | Pending |
| SUPA-12 | P3: DX futura | In Tasks | Pending |

**Coverage:** 12 total, 12 mapped to tasks, 0 unmapped

---

## Success Criteria

- [ ] O frontend consegue operar com Supabase sem chamar `/sessions`, `/users` ou `/animes` do backend legado.
- [ ] Auth, perfil, avatar e CRUD de animes funcionam com isolamento por usuário e sem regressão funcional crítica.
- [ ] A equipe possui documentação suficiente para setup, segurança, validação, cutover e rollback.
- [ ] As decisões de HITL que afetam produção ficam registradas antes do início da implementação.
