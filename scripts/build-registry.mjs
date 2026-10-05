// Generates registry.json from the catalog (src/docs/catalog.json) and the files themselves:
// - npm and cross-component dependencies are read from the imports, never written by hand;
// - the "theme" item copies the tokens from src/app/globals.css (:root and .dark).
// Then `shadcn build` turns it into public/r/*.json.
import { readFileSync, writeFileSync } from "node:fs";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3001";

const catalog = JSON.parse(readFileSync("src/docs/catalog.json", "utf8"));
// The name becomes a file path and a URL: lowercase letters, numbers and hyphens only.
for (const { name } of catalog) if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`invalid name in the catalog: ${name}`);

function importsOf(file) {
  const src = readFileSync(file, "utf8");
  return [...src.matchAll(/^import\s+(?:type\s+)?[^"']*["']([^"']+)["']/gm)]
    .filter((m) => !/^import\s+type\s/.test(m[0]))
    .map((m) => m[1]);
}

const npmName = (spec) => (spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0]);

const utilsUrl = `${siteUrl}/r/utils.json`;
const catalogNames = new Set(catalog.map((c) => c.name));

// ui items: imported sibling files that are not in the catalog (e.g. button-variants.ts) travel in the same item.
const items = catalog.map(({ name, title, description }) => {
  const path = `src/registry/cd/ui/${name}.tsx`;
  const paths = [path];
  for (let i = 0; i < paths.length; i++) {
    for (const s of importsOf(paths[i])) {
      const m = s.match(/^@\/registry\/cd\/ui\/(.+)$/);
      const sibling = m && !catalogNames.has(m[1]) && `src/registry/cd/ui/${m[1]}.ts`;
      if (sibling && !paths.includes(sibling)) paths.push(sibling);
    }
  }
  const specs = paths.flatMap(importsOf);
  const dependencies = [...new Set(specs.filter((s) => !s.startsWith("@/") && s !== "react").map(npmName))].sort();
  const internal = [...new Set(specs.filter((s) => s.startsWith("@/registry/cd/ui/")).map((s) => s.split("/").pop()))].filter((n) => catalogNames.has(n) && n !== name);
  const registryDependencies = [utilsUrl, ...internal.map((n) => `${siteUrl}/r/${n}.json`)];
  return { name, type: "registry:ui", title, description, dependencies, registryDependencies, files: paths.map((p) => ({ path: p, type: "registry:ui" })) };
});

// A bare "utils" would resolve to shadcn's built-in item, which installs `export { cn } from "cn"`.
const utils = {
  name: "utils",
  type: "registry:lib",
  title: "cn helper",
  description: "The cn() helper (clsx + tailwind-merge) used by every cd/ui component.",
  dependencies: ["clsx", "tailwind-merge"],
  files: [{ path: "src/registry/cd/lib/utils.ts", type: "registry:lib" }],
};

const css = readFileSync("src/app/globals.css", "utf8");
const block = (selector) => {
  const body = css.match(new RegExp(`${selector.replace(".", "\\.")} \\{([^}]*)\\}`))[1];
  return Object.fromEntries([...body.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1].slice(2), m[2].trim()]));
};

const theme = {
  name: "theme",
  type: "registry:theme",
  title: "cd/ui theme",
  description: "cd/ui color, radius, and motion tokens (cream/graphite + yellow).",
  cssVars: {
    theme: {
      "color-brand": "var(--brand)",
      "color-brand-foreground": "var(--brand-foreground)",
      "color-brand-contrast": "var(--brand-contrast)",
      "color-destructive-foreground": "var(--destructive-foreground)",
      "radius-xs": "4px",
      "radius-sm": "calc(var(--radius) * 0.5)",
      "radius-md": "calc(var(--radius) * 0.75)",
      "radius-lg": "var(--radius)",
      "radius-xl": "calc(var(--radius) * 1.5)",
      "radius-2xl": "calc(var(--radius) * 2)",
      "ease-out": "var(--cd-ease-out)",
      "ease-in-out": "var(--cd-ease-in-out)",
      "transition-duration-instant": "var(--cd-duration-instant)",
      "transition-duration-fast": "var(--cd-duration-fast)",
      "transition-duration-base": "var(--cd-duration-base)",
      "transition-duration-slow": "var(--cd-duration-slow)",
    },
    light: block(":root"),
    dark: block(".dark"),
  },
  // Same as the @media block and the cd-popup utility in globals.css.
  css: {
    "@media (prefers-reduced-motion: reduce)": {
      ":root": {
        "--cd-duration-instant": "0.01ms",
        "--cd-duration-fast": "0.01ms",
        "--cd-duration-base": "0.01ms",
        "--cd-duration-slow": "0.01ms",
        "--cd-scale-enter": "1",
      },
    },
    "@utility cd-popup": {
      "transform-origin": "var(--transform-origin)",
      "transition-property": "opacity, transform",
      "transition-duration": "var(--cd-duration-base)",
      "transition-timing-function": "var(--cd-ease-out)",
      "&[data-starting-style], &[data-ending-style]": {
        opacity: "0",
        transform: "scale(var(--cd-scale-enter))",
      },
      "&[data-ending-style]": { "transition-duration": "var(--cd-duration-fast)" },
      "&[data-instant]": { "transition-duration": "0ms" },
    },
  },
};

// Blocks (src/blocks/catalog.json): one ready screen per folder in src/registry/cd/blocks/<name>/<name>.tsx.
// The ui components they use become registryDependencies, read from the imports.
const blockCatalog = JSON.parse(readFileSync("src/blocks/catalog.json", "utf8"));
const blockItems = blockCatalog.map(({ name, title, description }) => {
  if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`invalid name in the blocks catalog: ${name}`);
  const path = `src/registry/cd/blocks/${name}/${name}.tsx`;
  const specs = importsOf(path);
  const dependencies = [...new Set(specs.filter((s) => !s.startsWith("@/") && s !== "react").map(npmName))].sort();
  const internal = [...new Set(specs.filter((s) => s.startsWith("@/registry/cd/ui/")).map((s) => s.split("/").pop()))].sort();
  const registryDependencies = [`${siteUrl}/r/theme.json`, ...internal.map((n) => `${siteUrl}/r/${n}.json`)];
  return { name, type: "registry:block", title, description, dependencies, registryDependencies, files: [{ path, type: "registry:component" }] };
});

// One URL installs everything: `npx shadcn add <site>/r/all.json`.
const all = {
  name: "all",
  type: "registry:item",
  title: "cd/ui (everything)",
  description: "The theme, the cn helper and every cd/ui component.",
  registryDependencies: [`${siteUrl}/r/theme.json`, utilsUrl, ...items.map((i) => `${siteUrl}/r/${i.name}.json`)],
};
const allBlocks = {
  name: "all-blocks",
  type: "registry:item",
  title: "cd/ui blocks (everything)",
  description: "Every cd/ui block, with the components they use.",
  registryDependencies: blockItems.map((i) => `${siteUrl}/r/${i.name}.json`),
};

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "cd-ui",
  homepage: siteUrl,
  items: [theme, utils, ...items, ...blockItems, all, allBlocks],
};
writeFileSync("registry.json", `${JSON.stringify(registry, null, 2)}\n`);
console.log(`registry.json: ${items.length} components + ${blockItems.length} blocks + theme (${siteUrl})`);
