import catalog from "@/docs/catalog.json";
import { type ComponentDoc, content } from "@/docs/content";
import metrics from "@/docs/metrics.json";

export type Metric = { gzip: number; client: boolean; base: string[] };

export type ComponentEntry = (typeof catalog)[number] & { metric: Metric; doc: ComponentDoc };

export const components: ComponentEntry[] = catalog.map((c) => ({
  ...c,
  metric: (metrics as Record<string, Metric>)[c.name],
  doc: content[c.name],
}));

export const getComponent = (name: string) => components.find((c) => c.name === name);

export const categories = [...new Set(components.map((c) => c.category))];

/** Páginas de guia (lado esquerdo das docs e busca). */
export const guides = [
  { href: "/docs", title: "Introdução", description: "Conheça a biblioteca e as escolhas por trás dela." },
  { href: "/docs/instalacao", title: "Instalação", description: "Do projeto pronto ao primeiro componente." },
  { href: "/docs/tema", title: "Tema", description: "Cores, cantos e movimento em tokens CSS." },
  { href: "/docs/formularios", title: "Formulários com Zod", description: "Conecte schemas Zod aos campos do formulário." },
  { href: "/docs/performance", title: "Performance", description: "Veja como medimos o tamanho de cada componente." },
];

export const formatBytes = (bytes: number) => (bytes < 1000 ? `${bytes} B` : `${(bytes / 1000).toFixed(1)} kB`);

export const stats = {
  count: components.length,
  server: components.filter((c) => !c.metric.client).length,
  avg: Math.round(components.reduce((sum, c) => sum + c.metric.gzip, 0) / components.length),
  max: Math.max(...components.map((c) => c.metric.gzip)),
};
