# cd/ui

Lightweight, accessible React components built with [Base UI](https://base-ui.com) and Tailwind CSS v4. Distributed as a **shadcn registry**, so component source is copied into your project and stays yours. Bundle sizes are measured at build time, and forms use Zod for validation.

Made by Cauã Diório, with the same visual identity as the portfolio: warm cream and graphite, a bright yellow accent, terminal prompts, and a cartoon mascot.

## Install

Create a minimal `components.json` at the root of your project (no `shadcn init` needed, so nothing from shadcn's defaults gets installed):

```json
{
  "style": "new-york",
  "tailwind": { "css": "src/app/globals.css", "baseColor": "neutral" },
  "aliases": { "components": "@/components", "utils": "@/lib/utils" }
}
```

One command installs the theme, `cn`, and every component:

```bash
npx shadcn@latest add https://<your-domain>/r/all.json
```

Blocks (optional): `npx shadcn@latest add https://<your-domain>/r/all-blocks.json`.

Single components, by URL or through the `@cd` namespace (register it in `components.json`):

```bash
npx shadcn@latest add https://<your-domain>/r/theme.json https://<your-domain>/r/button.json
npx shadcn@latest add @cd/button
```

```json
{ "registries": { "@cd": "https://<your-domain>/r/{name}.json" } }
```

## Components

27 components (actions, display, feedback, forms, overlays, and navigation) and 15 ready-made blocks (hero, pricing, footer, and more). Browse them all in the docs.

- **Lightweight**: about 540 B gzip per component on average (see `/docs/performance`). Components without state are Server Components and send no JavaScript to the browser.
- **Zod without extra weight**: `Form` uses only `zod/v4/core`, so it works with both `zod` and `zod/mini`. Pass a `schema`, add `name` to each `Field`, and `onSubmit` receives validated, typed data.
- **Accessible**: focus, keyboard behavior, and ARIA come from Base UI. Each component page documents keyboard support and accessibility details.
- **Motion with a purpose**: `--cd-duration-*` tokens from 80 to 240 ms and strong curves, focused on `transform` and `opacity`. Retune everything in `:root`, and `prefers-reduced-motion` zeroes the durations in every component.

## Develop

```bash
bun install
bun dev                 # docs at http://localhost:3001
bun run registry:build  # builds registry.json, measures bundle sizes, writes public/r/*.json
bun run build           # registry:build + next build
```

### Project structure

```text
src/registry/cd/ui/*.tsx       distributed components
src/docs/catalog.json          component names, titles, categories, and descriptions
src/docs/content.ts            examples, API, keyboard, and accessibility docs
src/docs/examples/*.tsx        live previews and displayed source code
src/docs/metrics.json          generated gzip size and client/server data
scripts/build-registry.mjs     builds registry.json and reads component imports
scripts/metrics.mjs            measures each component with esbuild + gzip
src/app/[locale]/docs/...      guides (/docs/installation, /docs/theme, ...) and /docs/components/[name]
```

### Add a component

1. Create `src/registry/cd/ui/<name>.tsx` (use `"use client"` only when it needs state or event handlers).
2. Add an entry to `src/docs/catalog.json`.
3. Add examples under `src/docs/examples/` and documentation in `src/docs/content.ts`.
4. Run `bun run registry:build`.

## Deploy

On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is picked up automatically for install commands and registry component dependencies. Locally, everything points to `http://localhost:3001`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE)
