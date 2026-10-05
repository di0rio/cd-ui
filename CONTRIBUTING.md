# Contributing to cd/ui

Thanks for helping. cd/ui is a React component library distributed as a shadcn registry, with a Next.js docs site. (Resumo em português no fim.)

## Prerequisites

- [Bun](https://bun.sh) 1.3.13 (see `packageManager` in `package.json`)
- Node.js 20+ (the registry scripts run with `node`)

## Setup

```bash
git clone https://github.com/di0rio/cd-ui.git
cd cd-ui
bun install
bun run dev    # docs at http://localhost:3001
```

## Project layout

```
src/registry/cd/ui/*.tsx          components (what gets distributed)
src/registry/cd/blocks/<name>/    blocks (ready-made screens)
src/registry/cd/lib/              shared helpers
src/docs/catalog.json             component name, title, category, description (single source)
src/blocks/catalog.json           same, for blocks
src/docs/content.ts               examples, API, keyboard and accessibility notes per component
src/docs/examples/*.tsx           live previews and the code shown in the docs
src/app/...                       docs site pages
scripts/build-registry.mjs        builds registry.json (dependencies are read from imports)
scripts/metrics.mjs               measures gzip size of each component
```

## Adding or changing a component

1. Create or edit `src/registry/cd/ui/<name>.tsx`. Use `"use client"` only if it needs state or event handlers.
2. Register it in `src/docs/catalog.json` (blocks: `src/blocks/catalog.json`, files in `src/registry/cd/blocks/<name>/`). Names are lowercase kebab-case.
3. Add examples in `src/docs/examples/` and docs in `src/docs/content.ts`. Docs text is localized: provide both `en` and `pt` (the build fails on missing translations).
4. Run `bun run registry:build`.
5. Open the component page in the docs. Check light and dark themes, keyboard navigation, and a mobile viewport.
6. Run `bun run lint` and `bunx tsc --noEmit` (run `bunx next typegen` first on a clean checkout).

## Generated files, do not edit by hand

- `registry.json` and `public/r/*` (from `bun run registry:build`; `public/r` is gitignored)
- `src/docs/metrics.json` (from `scripts/metrics.mjs`)
- `src/i18n/generated.ts` (from better-intl on dev/build)

Commit regenerated `registry.json`, `src/docs/metrics.json` and `src/i18n/generated.ts` along with your change.

## Quality bar

- Accessible: keyboard operable, visible focus, correct aria. Build on Base UI primitives.
- Works in light and dark themes and on small screens.
- Motion uses the `--cd-duration-*` / `--cd-ease-*` tokens (80-240ms), only `transform`/`opacity`, and respects `prefers-reduced-motion`.
- Keep components small, bytes are measured. No new runtime dependencies without opening an issue first.

## Commits and pull requests

- Short imperative subject in English, e.g. `Fix mobile layout of features-01 shortcuts`.
- One logical change per PR. Describe what changed and why; add screenshots for visual changes.
- CI must pass (lint, typecheck, registry build, site build).

## License

By contributing you agree that your contributions are licensed under the [MIT License](LICENSE).

## Resumo (pt)

Instale com `bun install`, rode `bun run dev` (porta 3001), edite em `src/registry/cd/ui`, registre no `catalog.json`, rode `bun run registry:build` e confira a página nos temas claro e escuro e no mobile. Não edite arquivos gerados. Contribuições são licenciadas sob MIT.
