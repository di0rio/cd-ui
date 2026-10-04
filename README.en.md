# cd/ui

Lightweight, accessible React components built with [Base UI](https://base-ui.com) and Tailwind CSS v4. Distributed as a **shadcn registry**, so component source is copied into your project and stays yours. Bundle sizes are measured at build time, and forms use Zod for validation.

Made by Cauã Diório, with the same visual identity as the portfolio: warm cream and graphite, a bright yellow accent, terminal prompts, and a cartoon mascot.

## Install

```bash
npx shadcn@latest init
npx shadcn@latest add https://<your-domain>/r/theme.json
npx shadcn@latest add https://<your-domain>/r/button.json https://<your-domain>/r/form.json
```

Or register the namespace in `components.json` and run `npx shadcn@latest add @cd/button`:

```json
{ "registries": { "@cd": "https://<your-domain>/r/{name}.json" } }
```

## Components

17 components: Button, Badge, Card, Kbd, Separator, Skeleton, Spinner, Input, Textarea, Field, Form, Checkbox, Switch, Select, Dialog, Tooltip, and Tabs.

- **Lightweight**: about 540 B gzip per component on average (see `/docs/performance`). Six are Server Components and send no JavaScript to the browser.
- **Zod without extra weight**: `Form` uses only `zod/v4/core`, so it works with both `zod` and `zod/mini`. Pass a `schema`, add `name` to each `Field`, and `onSubmit` receives validated, typed data.
- **Accessible**: focus, keyboard behavior, and ARIA come from Base UI. Each component page documents keyboard support and accessibility details.
- **Motion with a purpose**: 100-250 ms transitions, focused on `transform` and `opacity`, with `prefers-reduced-motion` support throughout.

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
src/app/docs/...               guides and /docs/components/[name]
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
