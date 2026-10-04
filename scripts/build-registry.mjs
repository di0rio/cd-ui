// Gera registry.json a partir do catálogo (src/docs/catalog.json) e dos próprios arquivos:
// - dependências npm e entre componentes são lidas dos imports, nunca escritas à mão;
// - o item "theme" copia os tokens de src/app/globals.css (:root e .dark).
// Depois o `shadcn build` transforma isso em public/r/*.json.
import { readFileSync, writeFileSync } from "node:fs";

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3001";

const catalog = JSON.parse(readFileSync("src/docs/catalog.json", "utf8"));
// O nome vira caminho de arquivo e URL: só letras minúsculas, números e hífen.
for (const { name } of catalog) if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`nome inválido no catálogo: ${name}`);

function importsOf(file) {
  const src = readFileSync(file, "utf8");
  return [...src.matchAll(/^import\s+(?:type\s+)?[^"']*["']([^"']+)["']/gm)]
    .filter((m) => !/^import\s+type\s/.test(m[0]))
    .map((m) => m[1]);
}

const npmName = (spec) => (spec.startsWith("@") ? spec.split("/").slice(0, 2).join("/") : spec.split("/")[0]);

const items = catalog.map(({ name, title, description }) => {
  const path = `src/registry/cd/ui/${name}.tsx`;
  const specs = importsOf(path);
  const dependencies = [...new Set(specs.filter((s) => !s.startsWith("@/") && s !== "react").map(npmName))].sort();
  const internal = specs.filter((s) => s.startsWith("@/registry/cd/ui/")).map((s) => s.split("/").pop());
  const registryDependencies = ["utils", ...internal.map((n) => `${siteUrl}/r/${n}.json`)];
  return { name, type: "registry:ui", title, description, dependencies, registryDependencies, files: [{ path, type: "registry:ui" }] };
});

const css = readFileSync("src/app/globals.css", "utf8");
const block = (selector) => {
  const body = css.match(new RegExp(`${selector.replace(".", "\\.")} \\{([^}]*)\\}`))[1];
  return Object.fromEntries([...body.matchAll(/(--[\w-]+):\s*([^;]+);/g)].map((m) => [m[1].slice(2), m[2].trim()]));
};

const theme = {
  name: "theme",
  type: "registry:theme",
  title: "cd/ui theme",
  description: "cd/ui color, radius, and animation-curve tokens (cream/graphite + yellow).",
  cssVars: {
    theme: {
      "color-brand": "var(--brand)",
      "color-brand-foreground": "var(--brand-foreground)",
      "color-brand-contrast": "var(--brand-contrast)",
      "color-destructive-foreground": "var(--destructive-foreground)",
      "ease-out": "cubic-bezier(0.23, 1, 0.32, 1)",
      "ease-in-out": "cubic-bezier(0.77, 0, 0.175, 1)",
    },
    light: block(":root"),
    dark: block(".dark"),
  },
};

// Blocos (src/blocks/catalog.json): uma tela pronta por pasta em src/registry/cd/blocks/<nome>/<nome>.tsx.
// Os componentes ui usados viram registryDependencies, lidos dos imports.
const blockCatalog = JSON.parse(readFileSync("src/blocks/catalog.json", "utf8"));
const blockItems = blockCatalog.map(({ name, title, description }) => {
  if (!/^[a-z][a-z0-9-]*$/.test(name)) throw new Error(`nome inválido no catálogo de blocos: ${name}`);
  const path = `src/registry/cd/blocks/${name}/${name}.tsx`;
  const specs = importsOf(path);
  const dependencies = [...new Set(specs.filter((s) => !s.startsWith("@/") && s !== "react").map(npmName))].sort();
  const internal = [...new Set(specs.filter((s) => s.startsWith("@/registry/cd/ui/")).map((s) => s.split("/").pop()))].sort();
  const registryDependencies = [`${siteUrl}/r/theme.json`, ...internal.map((n) => `${siteUrl}/r/${n}.json`)];
  return { name, type: "registry:block", title, description, dependencies, registryDependencies, files: [{ path, type: "registry:component" }] };
});

const registry = {
  $schema: "https://ui.shadcn.com/schema/registry.json",
  name: "cd-ui",
  homepage: siteUrl,
  items: [theme, ...items, ...blockItems],
};
writeFileSync("registry.json", `${JSON.stringify(registry, null, 2)}\n`);
console.log(`registry.json: ${items.length} componentes + ${blockItems.length} blocos + tema (${siteUrl})`);
