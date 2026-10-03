import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { formatBytes, stats } from "@/docs";

export const metadata: Metadata = { title: "Introdução" };

const principles = [
  {
    title: "Leve de verdade, medido no build",
    text: `cada componente é empacotado e medido em gzip a cada build. média de ${formatBytes(stats.avg)}; o maior tem ${formatBytes(stats.max)}.`,
  },
  {
    title: "Servidor primeiro",
    text: `${stats.server} de ${stats.count} componentes não têm estado e rodam como React Server Component: zero JavaScript no navegador.`,
  },
  {
    title: "Acessível por padrão",
    text: "foco, teclado, aria e leitores de tela vêm do Base UI, testado em produção por muita gente. você não reimplementa nada disso.",
  },
  {
    title: "Fácil de usar",
    text: "uma importação por componente, padrões bons e APIs pequenas. formulário com Zod é passar o schema e dar name aos campos.",
  },
  {
    title: "Movimento com propósito",
    text: "animações curtas (100–250ms), curvas fortes, só transform e opacity, e prefers-reduced-motion respeitado em todos.",
  },
  {
    title: "O código é seu",
    text: "não é um pacote: o shadcn CLI copia o arquivo pro seu projeto. quer mudar algo? abra o arquivo e mude.",
  },
];

export default function Introduction() {
  return (
    <DocPage
      toc={[
        { id: "o-que-e", title: "O que é" },
        { id: "principios", title: "Princípios" },
        { id: "quando-usar", title: "Quando usar" },
      ]}
    >
      <DocHeader
        description="Componentes React acessíveis, construídos em Base UI e Tailwind CSS v4, pensados pra pesar o mínimo e serem óbvios de usar."
        title="Introdução"
      />

      <H2 id="o-que-e">O que é</H2>
      <P>
        O cd/ui é uma coleção de componentes que você instala pelo shadcn CLI. Em vez de adicionar uma dependência, o
        código de cada componente vai direto pro seu projeto, em <code className="font-mono text-sm">components/ui</code>.
        Por baixo, quem cuida de foco, teclado e acessibilidade é o <a className="underline decoration-brand underline-offset-4" href="https://base-ui.com" rel="noopener" target="_blank">Base UI</a>;
        por cima, vem o estilo e um cuidado grande com tamanho e movimento.
      </P>

      <H2 id="principios">Princípios</H2>
      <div className="grid gap-3 sm:grid-cols-2">
        {principles.map((p) => (
          <div className="rounded-xl border bg-card p-5" key={p.title}>
            <p className="font-heading font-medium">{p.title}</p>
            <p className="mt-1.5 text-muted-foreground text-sm leading-relaxed">{p.text}</p>
          </div>
        ))}
      </div>

      <H2 id="quando-usar">Quando usar</H2>
      <P>
        Use quando você quer componentes prontos sem abrir mão de controle: projetos Next.js (ou qualquer React com Tailwind
        v4) em que peso de JavaScript importa e você prefere ajustar o código a brigar com uma API de tema.
      </P>
      <P>
        Próximo passo:{" "}
        <Link className="font-medium underline decoration-brand underline-offset-4" href="/docs/instalacao">
          instalar →
        </Link>
      </P>
    </DocPage>
  );
}
