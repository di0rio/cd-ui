import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { formatBytes, stats } from "@/docs";
import { getT } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = (await getT()).tr.docs.guides.intro;
  return { title, description };
}

export default async function Introduction() {
  const { tr, href } = await getT();
  const intro = tr.app.docs.intro;
  const principles = Object.values(intro.principles);
  const values = { avg: formatBytes(stats.avg), max: formatBytes(stats.max), server: `${stats.server}`, count: `${stats.count}` };
  return (
    <DocPage
      toc={[
        { id: "what-it-is", title: intro.toc.what },
        { id: "principles", title: intro.toc.principles },
        { id: "when-to-use", title: intro.toc.when },
      ]}
    >
      <DocHeader description={intro.description} title={tr.docs.guides.intro.title} />

      <H2 id="what-it-is">{intro.whatTitle}</H2>
      <P>
        {intro.what.before}
        <code className="font-mono text-sm">components/ui</code>
        {intro.what.middle}
        <a className="underline decoration-brand underline-offset-4" href="https://base-ui.com" rel="noopener noreferrer" target="_blank">Base UI</a>
        {intro.what.after}
      </P>

      <H2 id="principles">{intro.principlesTitle}</H2>
      <div className="grid gap-3 sm:grid-cols-2">
        {principles.map((p) => (
          <div className="rounded-xl border bg-card p-5" key={p.title}>
            <p className="font-heading font-medium">{p.title}</p>
            <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{typeof p.text === "function" ? p.text(values) : p.text}</p>
          </div>
        ))}
      </div>

      <H2 id="when-to-use">{intro.whenTitle}</H2>
      <P>{intro.when}</P>
      <P>
        {intro.start}
        <Link className="font-medium underline decoration-brand underline-offset-4" href={href("/docs/installation")}>
          {intro.startLink}
        </Link>
      </P>
    </DocPage>
  );
}
