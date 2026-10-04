import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { formatBytes, stats } from "@/docs";
import { setLocale, t, translations } from "@/i18n/generated";
import { href } from "@/lib/href";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = translations[await setLocale()].docs.guides.intro;
  return { title, description };
}

export default function Introduction() {
  const intro = t.app.docs.intro;
  const principles = Object.values(intro.principles);
  const values = { avg: formatBytes(stats.avg), max: formatBytes(stats.max), server: `${stats.server}`, count: `${stats.count}` };
  return (
    <DocPage
      toc={[
        { id: "o-que-e", title: intro.toc.what },
        { id: "principios", title: intro.toc.principles },
        { id: "quando-usar", title: intro.toc.when },
      ]}
    >
      <DocHeader description={intro.description} title={t.docs.guides.intro.title} />

      <H2 id="o-que-e">{intro.whatTitle}</H2>
      <P>
        {intro.what.before}
        <code className="font-mono text-sm">components/ui</code>
        {intro.what.middle}
        <a className="underline decoration-brand underline-offset-4" href="https://base-ui.com" rel="noopener noreferrer" target="_blank">Base UI</a>
        {intro.what.after}
      </P>

      <H2 id="principios">{intro.principlesTitle}</H2>
      <div className="grid gap-3 sm:grid-cols-2">
        {principles.map((p) => (
          <div className="rounded-xl border bg-card p-5" key={p.title}>
            <p className="font-heading font-medium">{p.title}</p>
            <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{typeof p.text === "function" ? p.text(values) : p.text}</p>
          </div>
        ))}
      </div>

      <H2 id="quando-usar">{intro.whenTitle}</H2>
      <P>{intro.when}</P>
      <P>
        {intro.start}
        <Link className="font-medium underline decoration-brand underline-offset-4" href={href("/docs/instalacao")}>
          {intro.startLink}
        </Link>
      </P>
    </DocPage>
  );
}
