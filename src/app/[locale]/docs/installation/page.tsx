import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P, Rich } from "@/components/docs/doc-page";
import { Install } from "@/components/docs/install";
import { getT } from "@/i18n/server";
import { siteUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = (await getT()).tr.docs.guides.installation;
  return { title, description };
}

const componentsJson = `{
  "style": "new-york",
  "tailwind": {
    "css": "src/app/globals.css",
    "baseColor": "neutral"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`;

export default async function Installation() {
  const { tr } = await getT();
  const page = tr.app.docs.installation;
  return (
    <DocPage
      toc={[
        { id: "requirements", title: page.toc.requirements },
        { id: "config", title: page.toc.config },
        { id: "all", title: page.toc.all },
        { id: "blocks", title: page.toc.blocks },
        { id: "single", title: page.toc.single },
        { id: "namespace", title: page.toc.namespace },
      ]}
    >
      <DocHeader description={page.description} title={tr.docs.guides.installation.title} />

      <H2 id="requirements">{page.requirements}</H2>
      <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-7 marker:text-brand-foreground">
        <li>{page.react}</li>
        <li>
          <Rich text={page.alias} />
        </li>
      </ul>

      <H2 id="config">{page.configTitle}</H2>
      <P>
        <Rich text={page.config} />
      </P>
      <Code code={componentsJson} lang="json" title="components.json" />

      <H2 id="all">{page.allTitle}</H2>
      <P>{page.all}</P>
      <Install urls={[`${siteUrl}/r/all.json`]} />

      <H2 id="blocks">{page.blocksTitle}</H2>
      <P>{page.blocks}</P>
      <Install urls={[`${siteUrl}/r/all-blocks.json`]} />

      <H2 id="single">{page.singleTitle}</H2>
      <P>{page.single}</P>
      <Install urls={[`${siteUrl}/r/theme.json`, `${siteUrl}/r/button.json`]} />

      <H2 id="namespace">{page.namespaceTitle}</H2>
      <P>{page.namespace}</P>
      <Code code={`{
  "registries": {
    "@cd": "${siteUrl}/r/{name}.json"
  }
}`} lang="json" title="components.json" />
      <div className="mt-4">
        <Code code="npx shadcn@latest add @cd/button @cd/dialog" lang="bash" />
      </div>
    </DocPage>
  );
}
