# Roadmap

**Current Milestone:** Migração backend para Supabase
**Status:** In Progress

---

## MVP Atual

**Goal:** manter o produto já existente claramente mapeado e operável como ranking pessoal autenticado de animes.
**Target:** considerado entregue quando os fluxos atuais estiverem documentados e validados manualmente

### Features

**Autenticação de usuário** - COMPLETE

- cadastro com nome, e-mail e senha
- login com persistência local de sessão
- logout e troca entre rotas públicas e privadas

**Ranking pessoal de animes** - COMPLETE

- listagem filtrada por título
- criação manual de anime com nota, descrição e tags
- edição, exclusão e visualização detalhada

**Exploração via catálogo externo** - COMPLETE

- consulta de top animes
- busca textual na Jikan API
- entrada no fluxo de criação a partir do título explorado

**Perfil do usuário** - COMPLETE

- edição de nome e e-mail
- troca de senha
- upload de avatar

---

## Migração Backend para Supabase

**Goal:** remover a dependência do backend legado sem perder funcionalidade, segurança e operabilidade.
**Target:** considerado entregue quando auth, perfil, ranking e avatar estiverem funcionando com Supabase e a documentação operacional mínima estiver pronta

### Features

**Planejamento spec-driven da migração** - IN PROGRESS

- especificação, contexto, design e tasks da feature
- runbook inicial de continuidade operacional
- gates de HITL para decisões de produção

**Auth e perfil via Supabase** - PLANNED

- login, cadastro, logout e restauração de sessão
- atualização de nome, e-mail e senha
- perfil associado ao usuário autenticado

**Ranking pessoal no Supabase com RLS** - PLANNED

- CRUD de animes por usuário
- tags e rating com paridade funcional
- isolamento de dados por políticas

**Storage de avatars e operação de corte** - PLANNED

- bucket e políticas de upload/leitura
- validação, cutover e rollback
- troubleshooting e ownership operacionais

---

## Hardening do Produto

**Goal:** reduzir risco operacional e facilitar evolução do frontend.

### Features

**Cobertura mínima de testes** - PLANNED

- proteger login, cadastro e restauração de sessão
- proteger CRUD principal de animes
- cobrir fluxo de busca/exploração com mocks

**Tratamento consistente de erro e loading** - PLANNED

- padronizar respostas de erro visíveis ao usuário
- evitar falhas silenciosas em requisições assíncronas
- adicionar estados explícitos de carregamento e vazio

**Sessão e contratos mais robustos** - PLANNED

- validar sessão no bootstrap
- reduzir mutações de estado
- documentar contratos consumidos do backend

---

## Evolução de Produto

**Goal:** ampliar valor percebido sem alterar a essência do app.

### Features

**Organização avançada da lista** - PLANNED

- filtros por tags e nota
- ordenação por atualização ou avaliação
- busca mais refinada

**Cadastro enriquecido por metadados** - PLANNED

- pré-preenchimento com mais dados vindos da Jikan
- imagem/capa do anime na experiência local
- melhor contexto na tela de detalhes

---

## Future Considerations

- mapear o backend referenciado no README para completar a visão ponta a ponta
- adicionar observabilidade mínima de frontend
- revisar a stack para upgrades incrementais após introduzir testes
- usar tipos/contratos gerados a partir do Supabase após estabilizar a primeira migração
