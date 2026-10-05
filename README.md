# cd/ui

Componentes React acessíveis em [Base UI](https://base-ui.com) e Tailwind CSS v4, distribuídos como **registry do shadcn**: o código vem pro seu projeto e passa a ser seu. Pensados pra pesar o mínimo (medido em bytes a cada build) e serem óbvios de usar, com validação de formulário por Zod.

Feito por Cauã Diório, com a mesma identidade do portfólio: creme/grafite, um amarelo de destaque, prompt de terminal e o mascote em cartoon.

## Usar

Crie um `components.json` mínimo na raiz do projeto (não precisa de `shadcn init`, então nada dos padrões do shadcn é instalado):

```json
{
  "style": "new-york",
  "tailwind": { "css": "src/app/globals.css", "baseColor": "neutral" },
  "aliases": { "components": "@/components", "utils": "@/lib/utils" }
}
```

Um comando instala o tema, o `cn` e todos os componentes:

```bash
npx shadcn@latest add https://<domínio>/r/all.json
```

Blocos (opcional): `npx shadcn@latest add https://<domínio>/r/all-blocks.json`.

Componentes avulsos, pela URL ou pelo namespace `@cd` (registre no `components.json`):

```bash
npx shadcn@latest add https://<domínio>/r/theme.json https://<domínio>/r/button.json
npx shadcn@latest add @cd/button
```

```json
{ "registries": { "@cd": "https://<domínio>/r/{name}.json" } }
```

## O que tem

27 componentes (ações, exibição, feedback, formulários, overlays e navegação) e 15 blocos prontos (hero, preços, rodapé e outros). Veja todos nas docs.

- **Leve**: média ~540 B gzip por componente (veja `/docs/performance`). Os que não têm estado são Server Components e não mandam JS.
- **Zod sem peso**: o `Form` usa só `zod/v4/core`, então aceita `zod` e `zod/mini`. Passe `schema`, dê `name` aos `Field` e o `onSubmit` recebe os dados validados e tipados.
- **Acessível**: foco, teclado e aria vêm do Base UI. Cada página de componente lista teclas e notas de acessibilidade.
- **Movimento com propósito**: tokens `--cd-duration-*` de 80 a 240ms e curvas fortes, só `transform`/`opacity`. Ajuste tudo no `:root` e `prefers-reduced-motion` zera as durações em todos.

## Desenvolver

```bash
bun install
bun dev                 # docs em http://localhost:3001
bun run registry:build  # gera registry.json, mede tamanhos e gera public/r/*.json
bun run build           # registry:build + next build
```

### Estrutura

```
src/registry/cd/ui/*.tsx       componentes (o que é distribuído)
src/docs/catalog.json          nome, título, categoria e descrição de cada componente (fonte única)
src/docs/content.ts            exemplos, API, teclado e acessibilidade de cada componente
src/docs/examples/*.tsx        exemplos (preview + código mostrado nas docs)
src/docs/metrics.json          gerado: tamanho gzip e client/server de cada componente
scripts/build-registry.mjs     gera registry.json (dependências lidas dos imports; tema copiado do globals.css)
scripts/metrics.mjs            mede cada componente com esbuild + gzip
src/app/[locale]/docs/...      páginas de docs (/docs/installation, /docs/theme, /docs/components/[name]...)
```

### Adicionar um componente

1. Crie `src/registry/cd/ui/<nome>.tsx` (use `"use client"` só se tiver estado ou eventos).
2. Adicione a entrada em `src/docs/catalog.json`.
3. Crie os exemplos em `src/docs/examples/` e a documentação em `src/docs/content.ts`.
4. `bun run registry:build`.

## Deploy

Na Vercel, `VERCEL_PROJECT_PRODUCTION_URL` entra sozinho nos comandos de instalação e nas dependências entre componentes do registry. Localmente, tudo aponta pra `http://localhost:3001`.

## Contribuindo

Veja [CONTRIBUTING.md](CONTRIBUTING.md).

## Licença

[MIT](LICENSE)
