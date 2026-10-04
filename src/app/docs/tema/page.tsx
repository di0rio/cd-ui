import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P, Rich } from "@/components/docs/doc-page";
import { setLocale, t, translations } from "@/i18n/generated";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = translations[await setLocale()].docs.guides.theme;
  return { title, description };
}

export default function Theme() {
  const page = t.app.docs.theme;
  const swatches = [
    { name: "background", label: page.swatches.background },
    { name: "card", label: page.swatches.card },
    { name: "foreground", label: page.swatches.foreground },
    { name: "muted-foreground", label: page.swatches.mutedForeground },
    { name: "brand", label: page.swatches.brand },
    { name: "brand-foreground", label: page.swatches.brandForeground },
    { name: "border", label: page.swatches.border },
    { name: "destructive", label: page.swatches.destructive },
  ];
  return (
    <DocPage
      toc={[
        { id: "cores", title: page.toc.colors },
        { id: "raios", title: page.toc.radii },
        { id: "movimento", title: page.toc.motion },
        { id: "personalizar", title: page.toc.customize },
      ]}
    >
      <DocHeader description={page.description} title={t.docs.guides.theme.title} />

      <H2 id="cores">{page.colorsTitle}</H2>
      <P>{page.colors}</P>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {swatches.map((s) => (
          <div className="overflow-hidden rounded-xl border" key={s.name}>
            <div className="h-16 border-b" style={{ background: `var(--${s.name})` }} />
            <div className="p-3">
              <p className="font-medium text-sm">{s.label}</p>
              <p className="font-mono text-muted-foreground text-xs">--{s.name}</p>
            </div>
          </div>
        ))}
      </div>
      <P>{page.yellow}</P>

      <H2 id="raios">{page.radiiTitle}</H2>
      <div className="flex flex-wrap items-end gap-4">
        {["sm", "md", "lg", "xl", "2xl"].map((r) => (
          <div className="flex flex-col items-center gap-2" key={r}>
            <div className="size-16 border-2 border-foreground/70 bg-card" style={{ borderRadius: `var(--radius-${r})` }} />
            <span className="font-mono text-muted-foreground text-xs">{r}</span>
          </div>
        ))}
      </div>

      <H2 id="movimento">{page.motionTitle}</H2>
      <P>
        <Rich text={page.motion} />
      </P>
      <Code code={page.motionCode} lang="css" />

      <H2 id="personalizar">{page.customizeTitle}</H2>
      <P>{page.customize}</P>
      <Code code={`:root {\n  --brand: #22c55e;\n  --brand-foreground: #15803d;\n  --brand-contrast: #052e16;\n}`} lang="css" title="globals.css" />
    </DocPage>
  );
}
