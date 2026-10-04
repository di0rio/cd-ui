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
      <DocHeader description="Prepare o projeto, instale o tema e adicione seus primeiros componentes em três passos." title="Instalação" />

      <H2 id="requisitos">Requisitos</H2>
      <ul className="flex list-disc flex-col gap-1.5 pl-5 leading-7 marker:text-brand-foreground">
        <li>React 19 e Tailwind CSS v4.</li>
        <li>Um alias de importação configurado (<code className="font-mono text-sm">@/*</code>), como o padrão do Next.js.</li>
      </ul>

      <H2 id="shadcn">1. Prepare o projeto com o shadcn CLI</H2>
      <P>Esse comando cria o components.json, o utilitário cn e as variáveis de tema no CSS. Pule esta etapa se já usa shadcn.</P>
      <Code code="npx shadcn@latest init" lang="bash" />

      <H2 id="tema">2. Instalar o tema</H2>
      <P>Adicione os tokens do cd/ui ao seu globals.css: cores creme, grafite e amarelo, raios e curvas de animação.</P>
      <Install urls={[`${siteUrl}/r/theme.json`]} />

      <H2 id="componentes">3. Adicionar componentes</H2>
      <P>Adicione um componente ou vários de uma vez. O CLI também instala dependências como Base UI e Zod quando necessário.</P>
      <Install urls={[`${siteUrl}/r/button.json`, `${siteUrl}/r/form.json`]} />

      <H2 id="namespace">Atalho com namespace</H2>
      <P>Quer encurtar os próximos comandos? Registre o cd/ui uma vez no components.json:</P>
      <Code code={`{\n  "registries": {\n    "@cd": "${siteUrl}/r/{name}.json"\n  }\n}`} lang="json" title="components.json" />
      <div className="mt-4">
        <Code code="npx shadcn@latest add @cd/button @cd/dialog" lang="bash" />
      </div>
    </DocPage>
  );
}
