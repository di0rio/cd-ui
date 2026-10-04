import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { components, formatBytes, stats } from "@/docs";
import { Badge } from "@/registry/cd/ui/badge";

export const metadata: Metadata = { title: "Performance" };

const techniques = [
  ["Servidor por padrão", "Componentes sem estado não precisam de \"use client\": rodam no servidor e não enviam JS ao navegador."],
  ["Imports enxutos", "Cada componente importa só o módulo do Base UI que usa, como @base-ui/react/dialog."],
  ["CSS onde basta", "Animações, crescimento do Textarea, Spinner e Skeleton usam CSS, sem JavaScript extra."],
  ["Zod pelo núcleo", "O Form usa zod/v4/core e aceita schemas de zod/mini sem puxar a API completa."],
  ["Movimento leve", "As animações usam transform e opacity para evitar recalcular o layout."],
  ["Medido no build", "O esbuild empacota cada componente e o gzip mede o resultado. Nada de chute."],
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
        description="Veja quanto pesa cada componente em gzip. A medida conta o código do cd/ui e deixa as bibliotecas externas de fora."
        title="Performance"
      />

      <div className="grid grid-cols-3 gap-3">
        {[
          { value: formatBytes(stats.avg), label: "média por componente" },
          { value: `${stats.server}/${stats.count}`, label: "sem JS no navegador" },
          { value: formatBytes(stats.max), label: "maior componente" },
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
        O script scripts/metrics.mjs empacota cada componente com esbuild, em ESM minificado, e mede o resultado em gzip nível 9. React, Base UI, Zod,
        lucide e utilitários de classe ficam de fora. Assim, o número mostra o custo do próprio
        cd/ui; as bibliotecas externas são compartilhadas no bundle do seu projeto.
      </P>
    </DocPage>
  );
}
