import { ChevronDownIcon } from "lucide-react";
import { type NavGroup, Sidebar } from "@/components/docs/sidebar";
import { categories, components, guides } from "@/docs";

const groups: NavGroup[] = [
  { title: "começando", links: guides.map((g) => ({ href: g.href, title: g.title })) },
  ...categories.map((category) => ({
    title: category.toLowerCase(),
    links: components
      .filter((c) => c.category === category)
      .map((c) => ({ href: `/docs/components/${c.name}`, title: c.title, badge: c.metric.client ? undefined : "rsc" })),
  })),
];

export default function DocsLayout({ children }: LayoutProps<"/docs">) {
  return (
    <div className="mx-auto flex w-full max-w-[1400px] flex-1 gap-10 px-4 lg:px-6">
      <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-56 shrink-0 overflow-y-auto py-8 pr-2 [scrollbar-width:thin] lg:block">
        <Sidebar groups={groups} />
      </aside>
      <div className="min-w-0 flex-1 py-8 lg:py-12">
        {/* No celular a navegação vira um <details>: abre e fecha sem JavaScript. */}
        <details className="group mb-8 rounded-xl border bg-card lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 font-medium text-sm [&::-webkit-details-marker]:hidden">
            navegação
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
