// Mede o custo real de cada componente: empacota com esbuild (minificado, dependências como
// externas, que é o que vira código seu) e mede em gzip. Também registra se é client ou server.
// Saída: src/docs/metrics.json, lida pelas páginas de docs.
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { gzipSync } from "node:zlib";
import { build } from "esbuild";

const catalog = JSON.parse(readFileSync("src/docs/catalog.json", "utf8"));
const root = resolve(".");
const metrics = {};

for (const { name } of catalog) {
  const file = `src/registry/cd/ui/${name}.tsx`;
  const source = readFileSync(file, "utf8");
  const result = await build({
    entryPoints: [file],
    bundle: true,
    minify: true,
    write: false,
    format: "esm",
    jsx: "automatic",
    logLevel: "silent",
    // Bibliotecas ficam de fora (já existem no projeto ou são compartilhadas); o código do cd/ui entra.
    external: ["react", "react/*", "react-dom", "@base-ui/react", "@base-ui/react/*", "lucide-react", "class-variance-authority", "clsx", "tailwind-merge", "zod", "zod/*"],
    alias: { "@": resolve(root, "src") },
  });
  const code = result.outputFiles[0].contents;
  metrics[name] = {
    gzip: gzipSync(code, { level: 9 }).length,
    client: /^["']use client["']/.test(source),
    base: [...new Set([...source.matchAll(/@base-ui\/react\/([\w-]+)/g)].map((m) => m[1]))],
  };
}

writeFileSync("src/docs/metrics.json", `${JSON.stringify(metrics, null, 2)}\n`);
const total = Object.values(metrics);
console.log(
  `metrics: ${total.length} componentes, ${total.filter((m) => !m.client).length} no servidor, média ${Math.round(total.reduce((a, m) => a + m.gzip, 0) / total.length)} B gzip`,
);
