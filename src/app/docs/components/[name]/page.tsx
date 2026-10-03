import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ArrowLeftIcon, ArrowRightIcon, FeatherIcon, ServerIcon, ZapIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, H3, P } from "@/components/docs/doc-page";
import { Install } from "@/components/docs/install";
import { Preview } from "@/components/docs/preview";
import { ApiTable, Inline, KeyTable } from "@/components/docs/tables";
import type { TocItem } from "@/components/docs/toc";
import { components, formatBytes, getComponent } from "@/docs";
import { siteUrl } from "@/lib/site";
import { asInstalled } from "@/lib/source";
import { Badge } from "@/registry/cd/ui/badge";
import { Tabs, TabsList, TabsPanel, TabsTab } from "@/registry/cd/ui/tabs";
import registry from "../../../../../registry.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return components.map((c) => ({ name: c.name }));
}

export async function generateMetadata({ params }: PageProps<"/docs/components/[name]">): Promise<Metadata> {
  const entry = getComponent((await params).name);
  return entry ? { title: entry.title, description: entry.description } : {};
}

const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export default async function ComponentPage({ params }: PageProps<"/docs/components/[name]">) {
  const entry = getComponent((await params).name);
  if (!entry) notFound();
  const { doc, metric } = entry;
  const item = registry.items.find((i) => i.name === entry.name);
  const npmDeps = (item && "dependencies" in item ? item.dependencies : []) as string[];
  const source = await readFile(join(/* turbopackIgnore: true */ process.cwd(), `src/registry/cd/ui/${entry.name}.tsx`), "utf8");
  const [first, ...more] = doc.examples;
  const index = components.findIndex((c) => c.name === entry.name);
  const prev = components[index - 1];
  const next = components[index + 1];

  const toc: TocItem[] = [
    { id: "instalacao", title: "Instalação" },
    { id: "uso", title: "Uso" },
    ...(more.length ? [{ id: "exemplos", title: "Exemplos" }, ...more.map((e) => ({ id: slugify(e.title), title: e.title, depth: 2 as const }))] : []),
    { id: "api", title: "API" },
    ...(doc.keyboard ? [{ id: "teclado", title: "Teclado" }] : []),
    ...(doc.accessibility ? [{ id: "acessibilidade", title: "Acessibilidade" }] : []),
  ];

  return (
    <DocPage toc={toc}>
      <p className="mb-3 font-mono text-muted-foreground text-xs">componentes / {entry.category.toLowerCase()}</p>
      <DocHeader description={entry.description} title={entry.title}>
        <Badge variant="outline">
          <FeatherIcon aria-hidden="true" /> {formatBytes(metric.gzip)} gzip
        </Badge>
        {metric.client ? (
          <Badge variant="outline">
            <ZapIcon aria-hidden="true" /> client component
          </Badge>
        ) : (
          <Badge variant="brand">
            <ServerIcon aria-hidden="true" /> roda no servidor · 0 JS
          </Badge>
        )}
        {metric.base.length > 0 && <Badge variant="muted">base ui · {metric.base.join(", ")}</Badge>}
      </DocHeader>

      <Preview Component={first.Component} file={first.file} />

      <H2 id="instalacao">Instalação</H2>
      <Tabs defaultValue="cli">
        <TabsList aria-label="Forma de instalar">
          <TabsTab className="h-7 px-3 text-[13px]" value="cli">
            CLI
          </TabsTab>
          <TabsTab className="h-7 px-3 text-[13px]" value="manual">
            manual
          </TabsTab>
        </TabsList>
        <TabsPanel value="cli">
          <Install urls={[`${siteUrl}/r/${entry.name}.json`]} />
          <p className="mt-3 text-muted-foreground text-sm">
            primeira vez? instale o tema antes: veja <Link className="text-foreground underline decoration-brand underline-offset-4" href="/docs/instalacao">instalação</Link>.
          </p>
        </TabsPanel>
        <TabsPanel className="flex flex-col gap-4" value="manual">
          {npmDeps.length > 0 && (
            <>
              <p className="text-sm">1. instale as dependências:</p>
              <Code code={`npm install ${npmDeps.join(" ")}`} lang="bash" />
            </>
          )}
          <p className="text-sm">{npmDeps.length > 0 ? "2." : "1."} copie o arquivo pro seu projeto:</p>
          <Code code={asInstalled(source)} title={`components/ui/${entry.name}.tsx`} />
        </TabsPanel>
      </Tabs>

      <H2 id="uso">Uso</H2>
      <Code code={doc.usage} />

      {more.length > 0 && (
        <>
          <H2 id="exemplos">Exemplos</H2>
          {more.map((example) => (
            <section key={example.file}>
              <H3 id={slugify(example.title)}>{example.title}</H3>
              {example.description && (
                <P>
                  <Inline text={example.description} />
                </P>
              )}
              <Preview Component={example.Component} file={example.file} minHeight="min-h-48" />
            </section>
          ))}
        </>
      )}

      <H2 id="api">API</H2>
      <div className="flex flex-col gap-10">
        {doc.api.map((part) => (
          <ApiTable key={part.name} part={part} />
        ))}
      </div>

      {doc.keyboard && (
        <>
          <H2 id="teclado">Teclado</H2>
          <KeyTable rows={doc.keyboard} />
        </>
      )}

      {doc.accessibility && (
        <>
          <H2 id="acessibilidade">Acessibilidade</H2>
          <ul className="flex list-disc flex-col gap-2 pl-5 leading-7 marker:text-brand-foreground">
            {doc.accessibility.map((line) => (
              <li key={line}>
                <Inline text={line} />
              </li>
            ))}
          </ul>
        </>
      )}

      <nav aria-label="Outros componentes" className="mt-16 grid grid-cols-2 gap-3 border-t pt-6">
        {prev ? (
          <Link className="group flex flex-col gap-1 rounded-xl border p-4 transition-colors duration-150 hover:bg-accent" href={`/docs/components/${prev.name}`}>
            <span className="flex items-center gap-1 text-muted-foreground text-xs">
              <ArrowLeftIcon aria-hidden="true" className="size-3 transition-transform duration-200 ease-out group-hover:-translate-x-0.5" /> anterior
            </span>
            <span className="font-medium">{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link className="group flex flex-col items-end gap-1 rounded-xl border p-4 text-right transition-colors duration-150 hover:bg-accent" href={`/docs/components/${next.name}`}>
            <span className="flex items-center gap-1 text-muted-foreground text-xs">
              próximo <ArrowRightIcon aria-hidden="true" className="size-3 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
            </span>
            <span className="font-medium">{next.title}</span>
          </Link>
        )}
      </nav>
    </DocPage>
  );
}
