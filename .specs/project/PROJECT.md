# Anime Ranking

**Vision:** Aplicação web para usuários montarem e manterem seu ranking pessoal de animes assistidos, combinando cadastro manual com descoberta assistida por catálogo externo.
**For:** pessoas que assistem anime e querem organizar opiniões, notas e tags em um único lugar.
**Solves:** a falta de um espaço simples para registrar, editar e consultar a própria lista de animes.

## Goals

- Fechar o fluxo principal autenticado: um usuário deve conseguir criar conta, entrar, manter perfil e executar CRUD completo da sua lista de animes pela interface.
- Reduzir fricção de cadastro: o usuário deve conseguir adicionar um anime tanto manualmente quanto a partir de busca/top animes via catálogo externo.
- Manter uma SPA navegável em produção: login, listagem, detalhes, exploração e perfil devem funcionar com roteamento client-side e integração com backend externo.
- Migrar a dependência do backend legado para Supabase com paridade funcional e documentação operacional suficiente para sustentação contínua.

## Tech Stack

**Core:**

- Framework: React `18`
- Linguagem: JavaScript + JSX
- Build: Vite `2`
- Backend integrado: API REST externa configurada por `VITE_APP_API`

**Direção planejada:**

- Backend alvo: Supabase (Auth, Postgres, Storage)
- Cliente previsto: `@supabase/supabase-js`

**Key dependencies:** `react-router-dom`, `styled-components`, `axios`, `react-icons`, `date-fns`

## Scope

**v1 includes:**

- autenticação com login, cadastro e logout
- listagem, criação, edição, exclusão e visualização detalhada de animes ranqueados
- perfil do usuário com atualização de dados e avatar
- exploração de animes via Jikan API para acelerar o cadastro

**Explicitly out of scope:**

- backend e banco de dados dentro deste repositório
- funcionalidades sociais, colaboração entre usuários ou ranking público
- recomendação inteligente, notificações e analytics de produto

## Constraints

- Arquitetural: este repositório contém apenas o frontend; qualquer mudança de contrato depende do backend externo
- Configuração: a aplicação depende de `VITE_APP_API` corretamente configurado
- Qualidade: não há testes automatizados nem observabilidade operacional no estado atual
- Produto: metas e prioridades foram inferidas do código existente e precisam de validação do owner
- Transição: a migração para Supabase precisa preservar o comportamento atual antes de introduzir melhorias de produto
