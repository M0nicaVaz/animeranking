# Supabase Backend Migration Context

**Gathered:** 2026-03-31
**Spec:** `.specs/features/supabase-backend-migration/spec.md`
**Status:** Ready for design with HITL checkpoints pending

---

## Feature Boundary

Substituir o backend legado consumido pelo frontend por Supabase, mantendo os fluxos já existentes de autenticação, perfil, avatar e ranking pessoal, e registrando a documentação operacional necessária para sustentar o app após o corte.

---

## Implementation Decisions

### Delivery Model

- O fluxo seguirá `Research -> Plan -> Implement`, com Spec/Design/Tasks versionados em `.specs/`.
- O processo será AI-first com HITL nos pontos que mudam comportamento operacional ou risco de produção.
- Nenhuma implementação deve começar sem aprovação humana do spec e do design.

### HITL Gates

- Gate 1: confirmar o spec antes de abrir trabalho de implementação.
- Gate 2: confirmar o design técnico antes de criar migrations, políticas e refactors de autenticação.
- Gate 3: confirmar decisões de produção antes de cutover, especialmente e-mail confirmation, estratégia de ambientes e migração de dados legados.
- Gate 4: confirmar o checklist de rollback antes do primeiro deploy que desligue o backend legado.

### Backend Strategy

- O frontend passará a falar diretamente com Supabase via cliente JavaScript no browser.
- A Jikan API continuará separada do Supabase e permanece como integração externa para descoberta de títulos.
- O objetivo da primeira entrega é paridade funcional, não redesign de arquitetura de produto.

### Auth, Profile and Storage

- A autenticação base será e-mail/senha via Supabase Auth.
- Dados de identidade sensíveis permanecem em Auth; dados de perfil do app ficam em uma tabela `profiles`.
- Avatar será tratado via Supabase Storage e o frontend armazenará caminho/identificador do arquivo, não URL hardcoded do backend legado.

### Data and Security Model

- Cada usuário só poderá acessar seus próprios registros de ranking através de RLS.
- O modelo funcional mínimo precisa cobrir perfil, lista de animes, tags, rating e timestamps usados pela UI atual.
- O app deve sair do modelo de confiança em `localStorage` puro e passar a depender do ciclo de sessão do Supabase.

### Documentation Expectations

- A documentação mínima para produção inclui ambiente, schema, RLS, storage, auth settings, validação, cutover, rollback e troubleshooting.
- Os artefatos de planejamento ficam em `.specs/features/supabase-backend-migration/`; a documentação operacional entregue na implementação deve ser promovida para um diretório permanente do projeto, preferencialmente `docs/supabase/`.

### Agent's Discretion

- Nome final dos módulos de acesso a dados no frontend, desde que haja ponto único de entrada para Supabase.
- Nome final das tabelas de ranking, desde que a camada de adaptação preserve o comportamento da UI.
- Grau de normalização das tags, desde que leitura, escrita e edição permaneçam simples para o frontend.

---

## Specific References

- Código atual: `src/hooks/useAuth.jsx`, `src/pages/Home/index.jsx`, `src/pages/New/index.jsx`, `src/pages/Details/index.jsx`, `src/pages/Profile/index.jsx`, `src/services/api.js`.
- Pesquisa oficial Supabase validada nesta sessão:
  - Vite usa `VITE_SUPABASE_URL` e `VITE_SUPABASE_PUBLISHABLE_KEY`.
  - O cliente browser é inicializado com `createClient(...)`.
  - Auth cobre `signUp`, `signInWithPassword`, `signOut` e mudança de sessão.
  - Upload em Storage exige políticas explícitas mesmo quando o bucket é público.
  - Políticas de RLS devem considerar `auth.uid() IS NOT NULL` para evitar acessos ambíguos.

---

## Open Decisions for HITL

- E-mail confirmation ficará desligado inicialmente para preservar a UX atual, ou será ativado já na primeira versão com Supabase?
- A migração de dados legados é obrigatória para o go-live, ou pode ocorrer em janela posterior?
- O projeto terá ambientes Supabase separados para dev/staging/prod desde o início, ou apenas dev/prod?
- Avatares serão públicos por URL estática ou privados com URL assinada?

---

## Deferred Ideas

- Realtime para mudanças no ranking
- Catálogo próprio de animes em vez de depender da Jikan
- Funcionalidades sociais e compartilhamento de listas
- Analytics de produto e observabilidade avançada
