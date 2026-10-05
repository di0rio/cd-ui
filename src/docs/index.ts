import catalog from "@/docs/catalog.json";
import { type ComponentDoc, getContent } from "@/docs/content";
import metrics from "@/docs/metrics.json";
import type { Dict } from "@/lib/dict";

export type Metric = { gzip: number; client: boolean; base: string[] };

export type ComponentEntry = (typeof catalog)[number] & { metric: Metric; doc: ComponentDoc };

/** Catalog without a language: name, category and metrics. The JSON `description` is only for the registry; the docs use the one from t.ts. */
export const components = catalog.map((c) => ({
  ...c,
  metric: (metrics as Record<string, Metric>)[c.name],
}));

/** Full catalog: description and documentation in the given language. */
export function getComponents(tr: Dict): ComponentEntry[] {
  const content = getContent(tr);
  return components.map((c) => ({
    ...c,
    description: tr.docs.catalog[c.name as keyof Dict["docs"]["catalog"]],
    doc: content[c.name],
  }));
}

export const getComponent = (name: string, tr: Dict) => getComponents(tr).find((c) => c.name === name);

export const categories = [...new Set(components.map((c) => c.category))];

export const categoryTitle = (category: string, tr: Dict) => tr.docs.categories[category as keyof Dict["docs"]["categories"]];

/** Guide pages (left side of the docs and search). */
export function getGuides(tr: Dict) {
  const g = tr.docs.guides;
  return [
    { href: "/docs", title: g.intro.title, description: g.intro.description },
    { href: "/docs/installation", title: g.installation.title, description: g.installation.description },
    { href: "/docs/theme", title: g.theme.title, description: g.theme.description },
    { href: "/docs/forms", title: g.forms.title, description: g.forms.description },
    { href: "/docs/performance", title: g.performance.title, description: g.performance.description },
  ];
}

export const formatBytes = (bytes: number) => (bytes < 1000 ? `${bytes} B` : `${(bytes / 1000).toFixed(1)} kB`);

export const stats = {
  count: components.length,
  server: components.filter((c) => !c.metric.client).length,
  avg: Math.round(components.reduce((sum, c) => sum + c.metric.gzip, 0) / components.length),
  max: Math.max(...components.map((c) => c.metric.gzip)),
};
