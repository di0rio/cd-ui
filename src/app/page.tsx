import { ArrowRightIcon } from "lucide-react";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { Install } from "@/components/docs/install";
import { categories, components, formatBytes, stats } from "@/docs";
import FieldDefault from "@/docs/examples/field-default";
import { siteUrl } from "@/lib/site";
import { Button } from "@/registry/cd/ui/button";

// Prévia de cada card: o primeiro exemplo do componente (o do Form seria grande demais pro card).
const thumbs: Record<string, ComponentType> = { form: FieldDefault };

export default function Home() {
  return (
    <>
      <section className="border-b">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 py-16 lg:grid-cols-[1fr_auto] lg:px-6 lg:py-24">
          <div>
            <Image
              alt=""
              className="mb-8 size-20 -rotate-6 rounded-[20px] border-2 border-black shadow-[5px_5px_0_var(--brand)] lg:hidden"
              height={80}
              src="/mascot.svg"
              width={80}
            />
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-muted-foreground text-xs">
              <span className="size-1.5 rounded-full bg-brand" /> v0.2 · {stats.count} componentes
            </p>
            <h1 className="max-w-[720px] text-balance font-bold font-heading text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-[60px]">
              componentes que pesam pouco e caem bem.
            </h1>
            <p className="mt-5 max-w-[560px] text-pretty text-[18px] text-muted-foreground leading-relaxed">
              React, Base UI e Tailwind v4. acessíveis por padrão, medidos em bytes, com validação por Zod em três linhas.
              você copia o código e ele passa a ser seu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button nativeButton={false} render={<Link href="/docs/instalacao" />} size="lg" variant="brand">
                começar <ArrowRightIcon aria-hidden="true" />
              </Button>
              <Button nativeButton={false} render={<Link href="#componentes" />} size="lg" variant="outline">
                ver componentes
              </Button>
            </div>
            <dl className="mt-12 grid max-w-[560px] grid-cols-3 gap-6 border-t pt-6">
              {[
                { value: formatBytes(stats.avg), label: "média gzip" },
                { value: `${stats.server}`, label: "rodam no servidor" },
                { value: "100%", label: "teclado e leitor de tela" },
              ].map((s) => (
                <div key={s.label}>
                  <dt className="text-muted-foreground text-xs">{s.label}</dt>
                  <dd className="mt-1 font-bold font-heading text-2xl tabular-nums tracking-[-0.02em]">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mascote: o mesmo cartoon do portfólio, colado como adesivo. */}
          <div className="relative mx-auto hidden w-fit lg:block">
            <Image
              alt=""
              className="size-64 animate-sticker -rotate-6 rounded-[44px] border-[3px] border-black shadow-[10px_10px_0_var(--brand)]"
              height={256}
              priority
              src="/mascot.svg"
              width={256}
            />
            <span className="absolute -top-6 -left-24 animate-sticker rounded-2xl border-[3px] border-black bg-white px-4 py-2 font-heading font-semibold text-[#1c1c1c] text-lg [animation-delay:250ms] after:absolute after:top-full after:right-6 after:-mt-[7px] after:size-3.5 after:rotate-45 after:border-black after:border-r-[3px] after:border-b-[3px] after:bg-white">
              bora montar uma tela?
            </span>
          </div>
        </div>
      </section>

      <section className="border-b bg-card/50">
        <div className="mx-auto max-w-[1400px] px-4 py-8 lg:px-6">
          <p className="mb-3 text-muted-foreground text-sm">instale o tema e o primeiro componente:</p>
          <div className="max-w-[760px]">
            <Install urls={[`${siteUrl}/r/theme.json`, `${siteUrl}/r/button.json`]} />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] scroll-mt-20 px-4 py-16 lg:px-6" id="componentes">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-bold font-heading text-[32px] tracking-[-0.02em]">componentes</h2>
            <p className="mt-1 text-muted-foreground">tamanho em gzip e onde roda, em cada card.</p>
          </div>
          <Link className="text-muted-foreground text-sm underline-offset-4 hover:text-foreground hover:underline" href="/docs/performance">
            como medimos →
          </Link>
        </div>

        {categories.map((category) => (
          <div className="mb-12" key={category}>
            <h3 className="mb-4 flex items-center gap-4 font-medium text-muted-foreground text-sm">
              {category.toLowerCase()} <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {components
                .filter((c) => c.category === category)
                .map((c) => {
                  const Thumb = thumbs[c.name] ?? c.doc.examples[0].Component;
                  return (
                    <li key={c.name}>
                      <Link
                        className="group flex h-full flex-col overflow-hidden rounded-xl border bg-card outline-none transition-[border-color] duration-150 hover:border-brand focus-visible:ring-2 focus-visible:ring-ring"
                        href={`/docs/components/${c.name}`}
                      >
                        <div className="relative flex h-44 items-center justify-center overflow-hidden border-b bg-background px-4">
                          {/* Prévia real, mas inerte: o card inteiro é o link. */}
                          <div className="pointer-events-none origin-center scale-[0.8]" inert>
                            <Thumb />
                          </div>
                        </div>
                        <div className="flex flex-1 flex-col gap-1 p-4">
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-heading font-medium">{c.title}</span>
                            <span className="font-mono text-muted-foreground text-xs tabular-nums">{formatBytes(c.metric.gzip)}</span>
                          </div>
                          <p className="line-clamp-2 text-muted-foreground text-sm">{c.description}</p>
                          <p className="mt-auto pt-2 font-mono text-[11px] text-muted-foreground">
                            {c.metric.client ? "client" : "server · 0 js"}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
}
