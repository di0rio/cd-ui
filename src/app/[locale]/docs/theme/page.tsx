import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, H3, P, Rich } from "@/components/docs/doc-page";
import { getT } from "@/i18n/server";
import { Button } from "@/registry/cd/ui/button";
import { Input } from "@/registry/cd/ui/input";

const motionTokens = [
  { name: "--cd-duration-instant", value: "80ms", use: "instant" },
  { name: "--cd-duration-fast", value: "120ms", use: "fast" },
  { name: "--cd-duration-base", value: "160ms", use: "base" },
  { name: "--cd-duration-slow", value: "240ms", use: "slow" },
  { name: "--cd-ease-out", value: "cubic-bezier(0.23, 1, 0.32, 1)", use: "easeOut" },
  { name: "--cd-ease-in-out", value: "cubic-bezier(0.77, 0, 0.175, 1)", use: "easeInOut" },
  { name: "--cd-scale-enter", value: "0.96", use: "scaleEnter" },
] as const;

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = (await getT()).tr.docs.guides.theme;
  return { title, description };
}

export default async function Theme() {
  const { tr } = await getT();
  const page = tr.app.docs.theme;
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
        { id: "colors", title: page.toc.colors },
        { id: "radius", title: page.toc.radii },
        { id: "motion", title: page.toc.motion },
        { id: "customize", title: page.toc.customize },
      ]}
    >
      <DocHeader description={page.description} title={tr.docs.guides.theme.title} />

      <H2 id="colors">{page.colorsTitle}</H2>
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

      <H2 id="radius">{page.radiiTitle}</H2>
      <P>
        <Rich text={page.radii} />
      </P>
      <div className="flex flex-wrap items-end gap-4">
        {["xs", "sm", "md", "lg", "xl", "2xl"].map((r) => (
          <div className="flex flex-col items-center gap-2" key={r}>
            <div className="size-16 border-2 border-foreground/70 bg-card" style={{ borderRadius: `var(--radius-${r})` }} />
            <span className="font-mono text-muted-foreground text-xs">{r}</span>
          </div>
        ))}
      </div>
      <P>
        <Rich text={page.radiiControls} />
      </P>
      <div className="grid gap-4 rounded-xl border p-4 sm:grid-cols-3">
        {[
          { label: page.radiiDefault, style: {} },
          { label: page.radiiButtonOnly, style: { "--radius-button": "9999px" } },
          { label: page.radiiFieldOnly, style: { "--radius-field": "0" } },
        ].map((v) => (
          <div className="flex flex-col gap-3" key={v.label} style={v.style as CSSProperties}>
            <span className="font-mono text-muted-foreground text-xs">{v.label}</span>
            <Button className="self-start">Button</Button>
            <Input aria-label={v.label} placeholder="Input" />
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Code code={page.radiiCode} lang="css" />
      </div>

      <H2 id="motion">{page.motionTitle}</H2>
      <P>
        <Rich text={page.motion} />
      </P>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-muted/60 text-muted-foreground text-xs">
            <tr>
              <th className="px-4 py-2 font-medium">{page.motionTable.token}</th>
              <th className="px-4 py-2 font-medium">{page.motionTable.value}</th>
              <th className="px-4 py-2 font-medium">{page.motionTable.use}</th>
            </tr>
          </thead>
          <tbody>
            {motionTokens.map((t) => (
              <tr className="border-t" key={t.name}>
                <td className="px-4 py-2.5 font-mono text-[13px]">{t.name}</td>
                <td className="px-4 py-2.5 font-mono text-[13px]">{t.value}</td>
                <td className="px-4 py-2.5 text-muted-foreground">{page.motionTable[t.use]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <H3 id="override">{page.motionOverrideTitle}</H3>
      <P>
        <Rich text={page.motionGlobal} />
      </P>
      <Code code={page.motionGlobalCode} lang="css" title="globals.css" />
      <P>
        <Rich text={page.motionLocal} />
      </P>
      <Code code={page.motionLocalCode} lang="tsx" />
      <P>
        <Rich text={page.motionReduced} />
      </P>

      <H2 id="customize">{page.customizeTitle}</H2>
      <P>{page.customize}</P>
      <Code code={`:root {\n  --brand: #22c55e;\n  --brand-foreground: #15803d;\n  --brand-contrast: #052e16;\n}`} lang="css" title="globals.css" />
    </DocPage>
  );
}
