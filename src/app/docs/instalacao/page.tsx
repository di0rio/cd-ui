import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { Install } from "@/components/docs/install";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = { title: "Instalação" };

export default function Installation() {
  return (
    <DocPage
      toc={[
        { id: "requisitos", title: "Requisitos" },
        { id: "shadcn", title: "1. shadcn CLI" },
        { id: "tema", title: "2. Tema" },
        { id: "componentes", title: "3. Componentes" },
        { id: "namespace", title: "Atalho com namespace" },
      ]}
    >
      <DocHeader description="Três comandos: preparar o projeto, instalar o tema e adicionar os componentes que quiser." title="Instalação" />

      <H2 id="requisitos">Requisitos</H2>
      <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-7 marker:text-brand-foreground">
        <li>React 19 e Tailwind CSS v4.</li>
        <li>Um projeto com alias de importação (<code className="font-mono text-sm">@/*</code>), como o padrão do Next.js.</li>
      </ul>

      <H2 id="shadcn">1. Preparar o projeto com o shadcn CLI</H2>
      <P>Cria o components.json, o utilitário cn e as variáveis base no seu CSS. Pule se o projeto já usa shadcn.</P>
      <Code code="npx shadcn@latest init" lang="bash" />

      <H2 id="tema">2. Instalar o tema</H2>
      <P>Adiciona os tokens do cd/ui (cores creme/grafite e amarelo, raios, curvas de animação) no seu globals.css.</P>
      <Install urls={[`${siteUrl}/r/theme.json`]} />

      <H2 id="componentes">3. Adicionar componentes</H2>
      <P>Um ou vários de uma vez. As dependências (Base UI, Zod quando precisar) e outros componentes necessários vêm juntos.</P>
      <Install urls={[`${siteUrl}/r/button.json`, `${siteUrl}/r/form.json`]} />

      <H2 id="namespace">Atalho com namespace</H2>
      <P>Registre o cd/ui no components.json uma vez e use nomes curtos depois:</P>
      <Code code={`{\n  "registries": {\n    "@cd": "${siteUrl}/r/{name}.json"\n  }\n}`} lang="json" title="components.json" />
      <div className="mt-4">
        <Code code="npx shadcn@latest add @cd/button @cd/dialog" lang="bash" />
      </div>
    </DocPage>
  );
}
