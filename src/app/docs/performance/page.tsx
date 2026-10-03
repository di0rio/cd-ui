import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { components, formatBytes, stats } from "@/docs";
import { Badge } from "@/registry/cd/ui/badge";

export const metadata: Metadata = { title: "Performance" };

const techniques = [
  ["Server Components por padrão", "componentes sem estado não têm \"use client\": viram HTML no servidor e não mandam JS."],
  ["Imports por subcaminho", "cada componente importa só a parte do Base UI que usa (@base-ui/react/dialog), nunca o pacote inteiro."],
  ["CSS em vez de JS", "animações, crescimento de textarea (field-sizing), spinner e skeleton são CSS puro."],
  ["Zod pelo núcleo", "o Form usa zod/v4/core: aceita zod/mini e não puxa a API completa."],
  ["Só transform e opacity", "animações não disparam layout nem pintura; rodam na GPU e não travam com a página ocupada."],
  ["Medido a cada build", "os números abaixo saem do esbuild + gzip no build, não de estimativa."],
];

export default function Performance() {
  const max = Math.max(...components.map((c) => c.metric.gzip));
  const sorted = [...components].sort((a, b) => a.metric.gzip - b.metric.gzip);

  return (
    <DocPage
      toc={[
        { id: "numeros", title: "Os números" },
        { id: "como", title: "Como fica leve" },
        { id: "metodo", title: "Como medimos" },
      ]}
    >
      <DocHeader
        description="Tamanho de cada componente em gzip, medido no build. É o código que entra no seu projeto além das bibliotecas que ele usa."
        title="Performance"
      />

      <div className="grid grid-cols-3 gap-3">
        {[
          { value: formatBytes(stats.avg), label: "média por componente" },
          { value: `${stats.server}/${stats.count}`, label: "rodam só no servidor" },
          { value: formatBytes(stats.max), label: "o maior" },
        ].map((s) => (
          <div className="rounded-xl border bg-card p-4" key={s.label}>
            <p className="font-bold font-heading text-2xl tabular-nums tracking-[-0.02em]">{s.value}</p>
            <p className="text-muted-foreground text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      <H2 id="numeros">Os números</H2>
      <ul className="flex flex-col divide-y rounded-xl border">
        {sorted.map((c) => (
          <li className="grid grid-cols-[110px_1fr_70px] items-center gap-4 px-4 py-2.5 sm:grid-cols-[140px_1fr_80px_120px]" key={c.name}>
            <Link className="font-medium text-sm hover:underline" href={`/docs/components/${c.name}`}>
              {c.title}
            </Link>
            <span aria-hidden="true" className="h-2 overflow-hidden rounded-full bg-muted">
              <span className="block h-full rounded-full bg-brand" style={{ width: `${(c.metric.gzip / max) * 100}%` }} />
            </span>
            <span className="text-right font-mono text-sm tabular-nums">{formatBytes(c.metric.gzip)}</span>
            <span className="hidden justify-end sm:flex">
              {c.metric.client ? <Badge variant="muted">client</Badge> : <Badge variant="brand">servidor</Badge>}
            </span>
          </li>
        ))}
      </ul>

      <H2 id="como">Como fica leve</H2>
      <div className="grid gap-3 sm:grid-cols-2">
        {techniques.map(([title, text]) => (
          <div className="rounded-xl border bg-card p-5" key={title}>
            <p className="font-heading font-medium">{title}</p>
            <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{text}</p>
          </div>
        ))}
      </div>

      <H2 id="metodo">Como medimos</H2>
      <P>
        O script scripts/metrics.mjs empacota cada componente com esbuild (minificado, ESM), deixando React, Base UI, Zod,
        lucide e utilitários de classe como externos, e mede o resultado em gzip nível 9. Ou seja: é o custo do código do
        cd/ui em si. As bibliotecas externas entram uma vez no seu bundle e são compartilhadas entre componentes.
      </P>
    </DocPage>
  );
}
