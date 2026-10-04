import { ChevronDownIcon } from "lucide-react";
import { type NavGroup, Sidebar } from "@/components/docs/sidebar";
import { blocks } from "@/blocks";
import { categories, categoryTitle, getComponents, getGuides } from "@/docs";
import { t } from "@/i18n/generated";
import { href } from "@/lib/href";

const getGroups = (): NavGroup[] => {
  const components = getComponents();
  return [
    { title: t.app.docs.layout.gettingStarted, links: getGuides().map((g) => ({ href: href(g.href), title: g.title })) },
    ...categories.map((category) => ({
      title: categoryTitle(category).toLowerCase(),
      links: components
        .filter((c) => c.category === category)
        .map((c) => ({ href: href(`/docs/components/${c.name}`), title: c.title, badge: c.metric.client ? undefined : "rsc" })),
    })),
    {
      title: t.app.layout.blocks.toLowerCase(),
      links: blocks.map((b) => ({ href: href(`/blocks/${b.name}`), title: t.app.blocks.items[b.key].title })),
    },
  ];
};

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  const groups = getGroups();
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 gap-10 px-4 lg:px-6">
      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 overflow-y-auto overscroll-contain py-8 pr-2 [scrollbar-width:none] lg:block [&::-webkit-scrollbar]:hidden">
        <Sidebar groups={groups} />
      </aside>
      <div className="min-w-0 flex-1 py-8 lg:py-12">
        {/* No celular a navegação vira um <details>: abre e fecha sem JavaScript. */}
        <details className="group mb-8 rounded-xl border bg-card lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium text-sm [&::-webkit-details-marker]:hidden">
            {t.app.docs.layout.navigation}
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
