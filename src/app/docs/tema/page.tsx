import type { Metadata } from "next";
import { Code } from "@/components/docs/code";
import { DocHeader, DocPage, H2, P } from "@/components/docs/doc-page";

export const metadata: Metadata = { title: "Tema" };

const swatches = [
  { name: "background", label: "fundo" },
  { name: "card", label: "superfície" },
  { name: "foreground", label: "texto" },
  { name: "muted-foreground", label: "texto secundário" },
  { name: "brand", label: "destaque" },
  { name: "brand-foreground", label: "destaque em texto" },
  { name: "border", label: "borda" },
  { name: "destructive", label: "perigo" },
];

export default function Theme() {
  return (
    <DocPage
      toc={[
        { id: "cores", title: "Cores" },
        { id: "raios", title: "Raios" },
        { id: "movimento", title: "Movimento" },
        { id: "personalizar", title: "Personalizar" },
      ]}
    >
      <DocHeader
        description="Cores, raios e curvas de animação vêm de tokens CSS. Ajuste os valores no seu globals.css e dê outra cara ao tema."
        title="Tema"
      />

      <H2 id="cores">Cores</H2>
      <P>Troque o tema no botão do topo e veja os valores mudarem. Os componentes usam esses tokens em vez de cores fixas.</P>
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
      <P>
        O amarelo funciona como um sinal: aparece em detalhes como foco, check, switch ligado e botão principal, sem tomar a tela toda.
      </P>

      <H2 id="raios">Raios</H2>
      <div className="flex flex-wrap items-end gap-4">
        {["sm", "md", "lg", "xl", "2xl"].map((r) => (
          <div className="flex flex-col items-center gap-2" key={r}>
            <div className="size-16 border-2 border-foreground/70 bg-card" style={{ borderRadius: `var(--radius-${r})` }} />
            <span className="font-mono text-muted-foreground text-xs">{r}</span>
          </div>
        ))}
      </div>

      <H2 id="movimento">Movimento</H2>
      <P>
        Duas curvas dão ritmo às interações: <code className="font-mono text-sm">ease-out</code> para entradas e respostas
        e <code className="font-mono text-sm">ease-in-out</code> para elementos que se deslocam. Durações ficam entre 100 e 250ms.
      </P>
      <Code
        code={`--ease-out: cubic-bezier(0.23, 1, 0.32, 1);     /* entradas, cliques, abrir popups */\n--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1); /* indicador de abas, switch */`}
        lang="css"
      />

      <H2 id="personalizar">Personalizar</H2>
      <P>Quer outra paleta? Troque os valores no seu globals.css. Aqui, o destaque amarelo vira verde:</P>
      <Code code={`:root {\n  --brand: #22c55e;\n  --brand-foreground: #15803d;\n  --brand-contrast: #052e16;\n}`} lang="css" title="globals.css" />
    </DocPage>
  );
}
