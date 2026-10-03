# cd/ui

Componentes React acessíveis em [Base UI](https://base-ui.com) e Tailwind CSS v4, distribuídos como **registry do shadcn**: o código vem pro seu projeto e passa a ser seu. Pensados pra pesar o mínimo (medido em bytes a cada build) e serem óbvios de usar, com validação de formulário por Zod.

Feito por [Cauã Diorio](https://portfolio-cd.vercel.app), com a mesma identidade do portfólio: creme/grafite, um amarelo de destaque, prompt de terminal e o mascote em cartoon.

## Usar

```bash
npx shadcn@latest init
npx shadcn@latest add https://<domínio>/r/theme.json
npx shadcn@latest add https://<domínio>/r/button.json https://<domínio>/r/form.json
```

Ou registre o namespace no `components.json` e use `npx shadcn@latest add @cd/button`:

```json
{ "registries": { "@cd": "https://<domínio>/r/{name}.json" } }
```

## O que tem

17 componentes: Button, Badge, Card, Kbd, Separator, Skeleton, Spinner, Input, Textarea, Field, Form, Checkbox, Switch, Select, Dialog, Tooltip, Tabs.

- **Leve**: média ~540 B gzip por componente (veja `/docs/performance`). 6 são Server Components e não mandam JS.
- **Zod sem peso**: o `Form` usa só `zod/v4/core`, então aceita `zod` e `zod/mini`. Passe `schema`, dê `name` aos `Field` e o `onSubmit` recebe os dados validados e tipados.
- **Acessível**: foco, teclado e aria vêm do Base UI. Cada página de componente lista teclas e notas de acessibilidade.
- **Movimento com propósito**: 100–250ms, curvas fortes, só `transform`/`opacity`, `prefers-reduced-motion` em todos.

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
src/app/docs/...               páginas de docs (guias e /docs/components/[name])
```

### Adicionar um componente

1. Crie `src/registry/cd/ui/<nome>.tsx` (use `"use client"` só se tiver estado ou eventos).
2. Adicione a entrada em `src/docs/catalog.json`.
3. Crie os exemplos em `src/docs/examples/` e a documentação em `src/docs/content.ts`.
4. `bun run registry:build`.

## Deploy

Na Vercel, `VERCEL_PROJECT_PRODUCTION_URL` entra sozinho nos comandos de instalação e nas dependências entre componentes do registry. Localmente, tudo aponta pra `http://localhost:3001`.
