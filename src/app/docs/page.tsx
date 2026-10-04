import type { Metadata } from "next";
import Link from "next/link";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";
import { formatBytes, stats } from "@/docs";

export const metadata: Metadata = { title: "Introdução" };

const principles = [
  {
    title: "Peso medido no build",
    text: `O build empacota cada componente e mede o resultado em gzip. A média é ${formatBytes(stats.avg)}; o maior tem ${formatBytes(stats.max)}.`,
  },
  {
    title: "Servidor por padrão",
    text: `${stats.server} dos ${stats.count} componentes rodam como React Server Components e não enviam JavaScript pro navegador.`,
  },
  {
    title: "Acessibilidade desde a base",
    text: "O Base UI cuida dos comportamentos de foco, teclado e atributos aria. Você compõe esses padrões sem começar do zero.",
  },
  {
    title: "Comece sem cerimônia",
    text: "Cada componente tem uma importação e uma API enxuta. No Form, passe um schema Zod e conecte os campos pelo name.",
  },
  {
    title: "Movimento na medida",
    text: "Animações curtas, feitas com transform e opacity. Todos os componentes respeitam prefers-reduced-motion.",
  },
  {
    title: "O código fica com você",
    text: "O shadcn CLI copia cada arquivo pro seu projeto. Quer mudar um detalhe? Abra o componente e edite direto.",
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
        description="Componentes React com Base UI e Tailwind CSS v4. Acessíveis por padrão, medidos no build e instalados como código no seu projeto."
        title="Introdução"
      />

      <H2 id="o-que-e">O que é</H2>
      <P>
        O cd/ui é uma coleção de componentes que você instala pelo shadcn CLI. Em vez de puxar outra dependência, você
        recebe cada arquivo direto em <code className="font-mono text-sm">components/ui</code> e pode editar o código quando quiser.
        O <a className="underline decoration-brand underline-offset-4" href="https://base-ui.com" rel="noopener noreferrer" target="_blank">Base UI</a> cuida dos comportamentos de foco e teclado.
        O cd/ui entra com estilos e atenção a tamanho e movimento.
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
        Use quando quiser começar com componentes prontos sem abrir mão do controle. Funciona em projetos Next.js e em outros apps React com Tailwind
        CSS v4, especialmente quando o tamanho do JavaScript importa e você quer editar o código.
      </P>
      <P>
        Quer começar?{" "}
        <Link className="font-medium underline decoration-brand underline-offset-4" href="/docs/instalacao">
          veja como instalar →
        </Link>
      </P>
    </DocPage>
  );
}
