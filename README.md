# Indústria 4.0 — O Futuro das Profissões (ADS/BD)

Site estático (Angular 19, standalone components) abordando o impacto da Indústria 4.0 nas profissões de Análise e Desenvolvimento de Sistemas e Banco de Dados.

## Requisitos
- Node.js 20+
- npm 10+

## Como rodar
```bash
npm install
npm start
```
Acesse `http://localhost:4200`.

## Build de produção
```bash
npm run build
```
Saída em `dist/industria-4-0/browser` (pronto para hospedagem estática: Netlify, Vercel, GitHub Pages, Nginx, S3, etc.).

## Arquitetura
- **Standalone Components** (sem NgModule).
- **Roteamento lazy** por página (`loadComponent`).
- **Separação por camadas**: `core` (serviços/tokens), `shared` (UI reutilizável), `features` (páginas).
- **Injeção de dados** via `ContentService` (facilita substituir por API real).
- **ChangeDetectionStrategy.OnPush** em todos os componentes.
- **SCSS** com variáveis e tokens de design.
