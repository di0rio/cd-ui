import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P, Rich } from "@/components/docs/doc-page";
import { Install } from "@/components/docs/install";
import { setLocale, t, translations } from "@/i18n/generated";
import { siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = translations[await setLocale()].docs.guides.installation;
  return { title, description };
}

export default function Installation() {
  const page = t.app.docs.installation;
  return (
    <DocPage
      toc={[
        { id: "requisitos", title: page.toc.requirements },
        { id: "shadcn", title: page.toc.shadcn },
        { id: "tema", title: page.toc.theme },
        { id: "componentes", title: page.toc.components },
        { id: "namespace", title: page.toc.namespace },
      ]}
    >
      <DocHeader description={page.description} title={t.docs.guides.installation.title} />

      <H2 id="requisitos">{page.requirements}</H2>
      <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-7 marker:text-brand-foreground">
        <li>{page.react}</li>
        <li>
          <Rich text={page.alias} />
        </li>
      </ul>

      <H2 id="shadcn">{page.shadcnTitle}</H2>
      <P>{page.shadcn}</P>
      <Code code="npx shadcn@latest init" lang="bash" />

      <H2 id="tema">{page.themeTitle}</H2>
      <P>{page.theme}</P>
      <Install urls={[`${siteUrl}/r/theme.json`]} />

      <H2 id="componentes">{page.componentsTitle}</H2>
      <P>{page.components}</P>
      <Install urls={[`${siteUrl}/r/button.json`, `${siteUrl}/r/form.json`]} />

      <H2 id="namespace">{page.namespaceTitle}</H2>
      <P>{page.namespace}</P>
      <Code code={`{\n  "registries": {\n    "@cd": "${siteUrl}/r/{name}.json"\n  }\n}`} lang="json" title="components.json" />
      <div className="mt-4">
        <Code code="npx shadcn@latest add @cd/button @cd/dialog" lang="bash" />
      </div>
    </DocPage>
  );
}
