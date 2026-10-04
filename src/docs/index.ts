import catalog from "@/docs/catalog.json";
import { type ComponentDoc, getContent } from "@/docs/content";
import metrics from "@/docs/metrics.json";
import { t } from "@/i18n/generated";
import type { Dict } from "@/lib/dict";

export type Metric = { gzip: number; client: boolean; base: string[] };

export type ComponentEntry = (typeof catalog)[number] & { metric: Metric; doc: ComponentDoc };

/** Catálogo sem idioma: nome, categoria e métricas. A `description` do JSON é só do registry; as docs usam a do t.ts. */
export const components = catalog.map((c) => ({
  ...c,
  metric: (metrics as Record<string, Metric>)[c.name],
}));

/** Catálogo completo: descrição e documentação no idioma da requisição (só durante a renderização). */
export function getComponents(tr: Dict = t): ComponentEntry[] {
  const content = getContent(tr);
  return components.map((c) => ({
    ...c,
    description: tr.docs.catalog[c.name as keyof Dict["docs"]["catalog"]],
    doc: content[c.name],
  }));
}

export const getComponent = (name: string, tr: Dict = t) => getComponents(tr).find((c) => c.name === name);

export const categories = [...new Set(components.map((c) => c.category))];

export const categoryTitle = (category: string, tr: Dict = t) => tr.docs.categories[category as keyof Dict["docs"]["categories"]];

/** Páginas de guia (lado esquerdo das docs e busca). */
export function getGuides(tr: Dict = t) {
  const g = tr.docs.guides;
  return [
    { href: "/docs", title: g.intro.title, description: g.intro.description },
    { href: "/docs/instalacao", title: g.installation.title, description: g.installation.description },
    { href: "/docs/tema", title: g.theme.title, description: g.theme.description },
    { href: "/docs/formularios", title: g.forms.title, description: g.forms.description },
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
