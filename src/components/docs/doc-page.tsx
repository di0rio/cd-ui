import type { ReactNode } from "react";
import { Toc, type TocItem } from "@/components/docs/toc";

/** Estrutura de uma página das docs: conteúdo legível no meio, "nesta página" à direita. */
export function DocPage({ toc, children }: { toc: TocItem[]; children: ReactNode }) {
  return (
    <div className="flex gap-12">
      <article className="min-w-0 max-w-[760px] flex-1">{children}</article>
      <aside className="sticky top-22 hidden h-fit w-48 shrink-0 xl:block">
        <Toc items={toc} />
      </aside>
    </div>
  );
}

export function DocHeader({ title, description, children }: { title: string; description: string; children?: ReactNode }) {
  return (
    <header className="mb-10">
      <h1 className="font-bold font-heading text-[34px] leading-tight tracking-[-0.02em]">{title}</h1>
      <p className="mt-2 max-w-[600px] text-pretty text-[17px] text-muted-foreground">{description}</p>
      {children && <div className="mt-5 flex flex-wrap items-center gap-2">{children}</div>}
    </header>
  );
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 className="mt-14 mb-4 font-heading font-semibold text-[22px] tracking-[-0.01em]" id={id}>
      {children}
    </h2>
  );
}

export function H3({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 font-heading font-medium text-[17px]" id={id}>
      {children}
    </h3>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="my-4 text-pretty leading-7">{children}</p>;
}
