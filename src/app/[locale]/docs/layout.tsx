import { ChevronDownIcon } from "lucide-react";
import { type NavGroup, Sidebar } from "@/components/docs/sidebar";
import { blocks } from "@/blocks";
import { categories, categoryTitle, getComponents, getGuides } from "@/docs";
import { getT } from "@/i18n/server";
import type { Dict } from "@/lib/dict";

const getGroups = (tr: Dict, href: (path: string) => string): NavGroup[] => {
  const components = getComponents(tr);
  return [
    { title: tr.app.docs.layout.gettingStarted, links: getGuides(tr).map((g) => ({ href: href(g.href), title: g.title })) },
    ...categories.map((category) => ({
      title: categoryTitle(category, tr).toLowerCase(),
      links: components
        .filter((c) => c.category === category)
        .map((c) => ({ href: href(`/docs/components/${c.name}`), title: c.title, badge: c.metric.client ? undefined : "rsc" })),
    })),
    {
      title: tr.app.layout.blocks.toLowerCase(),
      links: blocks.map((b) => ({ href: href(`/blocks/${b.name}`), title: tr.app.blocks.items[b.key].title })),
    },
  ];
};

export default async function DocsLayout({ children }: LayoutProps<"/[locale]/docs">) {
  const { tr, href } = await getT();
  const groups = getGroups(tr, href);
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 gap-10 px-4 lg:px-6">
      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 overflow-y-auto overscroll-contain py-8 pr-2 [scrollbar-width:none] lg:block [&::-webkit-scrollbar]:hidden">
        <Sidebar groups={groups} />
      </aside>
      <div className="min-w-0 flex-1 py-8 lg:py-12">
        {/* On phones the navigation becomes a <details>: it opens and closes without JavaScript. */}
        <details className="group mb-8 rounded-xl border bg-card lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium text-sm [&::-webkit-details-marker]:hidden">
            {tr.app.docs.layout.navigation}
            <ChevronDownIcon aria-hidden="true" className="size-4 text-muted-foreground transition-transform duration-200 ease-out group-open:rotate-180" />
          </summary>
          <div className="max-h-[60vh] overflow-y-auto border-t p-3">
            <Sidebar groups={groups} />
          </div>
        </details>
        {children}
      </div>
    </div>
  );
}
