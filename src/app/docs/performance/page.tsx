import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { components, formatBytes, stats } from "@/docs";
import { setLocale, t, translations } from "@/i18n/generated";
import { href } from "@/lib/href";
import { Badge } from "@/registry/cd/ui/badge";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = translations[await setLocale()].docs.guides.performance;
  return { title, description };
}

export default function Performance() {
  const page = t.app.docs.performance;
  const techniques = Object.values(page.techniques);
  const max = Math.max(...components.map((c) => c.metric.gzip));
  const sorted = [...components].sort((a, b) => a.metric.gzip - b.metric.gzip);

  return (
    <DocPage
      toc={[
        { id: "numeros", title: page.toc.numbers },
        { id: "como", title: page.toc.light },
        { id: "metodo", title: page.toc.method },
      ]}
    >
      <DocHeader description={page.description} title={t.docs.guides.performance.title} />

      <div className="grid grid-cols-3 gap-3">
        {[
          { value: formatBytes(stats.avg), label: page.stats.avg },
          { value: `${stats.server}/${stats.count}`, label: page.stats.noJs },
          { value: formatBytes(stats.max), label: page.stats.max },
        ].map((s) => (
          <div className="rounded-xl border bg-card p-4" key={s.label}>
            <p className="font-bold font-heading text-2xl tabular-nums tracking-[-0.02em]">{s.value}</p>
            <p className="text-muted-foreground text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <H2 id="numeros">{page.numbersTitle}</H2>
      <ul className="flex flex-col divide-y rounded-xl border">
        {sorted.map((c) => (
          <li className="grid grid-cols-[110px_1fr_70px] items-center gap-4 px-4 py-2.5 sm:grid-cols-[140px_1fr_80px_120px]" key={c.name}>
            <Link className="font-medium text-sm hover:underline" href={href(`/docs/components/${c.name}`)}>
              {c.title}
            </Link>
            <span aria-hidden="true" className="h-2 overflow-hidden rounded-full bg-muted">
              <span className="block h-full rounded-full bg-brand" style={{ width: `${(c.metric.gzip / max) * 100}%` }} />
            </span>
            <span className="text-right font-mono text-sm tabular-nums">{formatBytes(c.metric.gzip)}</span>
            <span className="hidden justify-end sm:flex">
              {c.metric.client ? <Badge variant="muted">{page.client}</Badge> : <Badge variant="brand">{page.server}</Badge>}
            </span>
          </li>
        ))}
      </ul>

      <H2 id="como">{page.lightTitle}</H2>
      <div className="grid gap-3 sm:grid-cols-2">
        {techniques.map((tech) => (
          <div className="rounded-xl border bg-card p-5" key={tech.title}>
            <p className="font-heading font-medium">{tech.title}</p>
            <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{tech.text}</p>
          </div>
        ))}
      </div>

      <H2 id="metodo">{page.methodTitle}</H2>
      <P>{page.method}</P>
    </DocPage>
  );
}
