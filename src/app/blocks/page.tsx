import type { Metadata } from "next";
import Link from "next/link";
import { ScaledThumb } from "@/components/blocks/scaled-thumb";
import { blockCategories, blocks } from "@/blocks";
import { blockComponents } from "@/blocks/components";
import { setLocale, t, translations } from "@/i18n/generated";
import { href } from "@/lib/href";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = translations[await setLocale()].app.blocks.metadata;
  return { title, description };
}

export default function BlocksPage() {
  const page = t.app.blocks;
  return (
    <>
      <section className="border-b">
        <div className="mx-auto max-w-[1400px] px-4 py-14 lg:px-6 lg:py-20">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-muted-foreground text-xs">
            <span className="size-1.5 rounded-full bg-brand" /> {page.index.badge({ count: String(blocks.length) })}
          </p>
          <h1 className="max-w-[760px] text-balance font-bold font-heading text-[40px] leading-[1.04] tracking-[-0.03em] sm:text-[56px]">
            {page.index.title}
          </h1>
          <p className="mt-5 max-w-[620px] text-pretty text-[18px] text-muted-foreground leading-relaxed">{page.index.lead}</p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-14 lg:px-6">
        {blockCategories.map((category) => (
          <section aria-labelledby={`cat-${category}`} className="mb-14" key={category}>
            <h2 className="mb-5 flex items-center gap-4 font-medium text-muted-foreground text-sm" id={`cat-${category}`}>
              {page.categories[category]} <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </h2>
            <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {blocks
                .filter((b) => b.category === category)
                .map((b) => {
                  const item = page.items[b.key];
                  const Block = blockComponents[b.name];
                  return (
                    <li
                      className="group relative flex flex-col overflow-hidden rounded-xl border bg-card transition-[border-color] duration-150 focus-within:ring-2 focus-within:ring-ring hover:border-brand"
                      key={b.name}
                    >
                      <div className="border-b">
                        <ScaledThumb>
                          <Block />
                        </ScaledThumb>
                      </div>
                      <div className="flex flex-1 flex-col gap-1 p-4">
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-heading font-medium">{item.title}</span>
                          <span className="font-mono text-muted-foreground text-xs">{b.name}</span>
                        </div>
                        <p className="line-clamp-2 text-muted-foreground text-sm">{item.description}</p>
                      </div>
                      {/* Link por cima do card (a prévia tem links dentro e <a> não aninha). */}
                      <Link
                        aria-label={page.index.open({ name: item.title })}
                        className="absolute inset-0 z-10 outline-none"
                        href={href(`/blocks/${b.name}`)}
                      />
                    </li>
                  );
                })}
            </ul>
          </section>
        ))}
      </div>
    </>
  );
}
