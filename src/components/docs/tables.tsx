import type { ReactNode } from "react";
import type { ApiPart, KeyRow } from "@/docs/content";
import { Badge } from "@/registry/cd/ui/badge";
import { Kbd } from "@/registry/cd/ui/kbd";

/** Transforma `trechos` entre crases em <code> (as descrições do content.ts usam isso). */
export function Inline({ text }: { text: string }): ReactNode {
  return text.split(/(`[^`]+`)/g).map((part, i) =>
    part.startsWith("`") ? (
      // biome-ignore lint/suspicious/noArrayIndexKey: partes estáticas de um texto
      <code className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.85em]" key={i}>
        {part.slice(1, -1)}
      </code>
    ) : (
      part
    ),
  );
}

export function ApiTable({ part }: { part: ApiPart }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-heading font-medium text-[15px]">{part.name}</h3>
        {part.base && (
          <Badge variant="muted">
            Base UI · {part.base}
          </Badge>
        )}
      </div>
      <p className="text-muted-foreground text-sm">
        <Inline text={part.description} />
      </p>
      <div className="overflow-x-auto rounded-xl border">
        <table className="w-full min-w-[560px] text-left text-sm">
          <thead className="bg-muted/60 text-muted-foreground text-xs">
            <tr>
              <th className="px-4 py-2 font-medium">prop</th>
              <th className="px-4 py-2 font-medium">tipo</th>
              <th className="px-4 py-2 font-medium">padrão</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {part.props.map((prop) => (
              <tr className="align-top" key={prop.name}>
                <td className="px-4 py-3">
                  <code className="whitespace-nowrap font-mono text-[13px] text-brand-foreground">{prop.name}</code>
                  <p className="mt-1 max-w-[260px] text-muted-foreground text-xs leading-relaxed">
                    <Inline text={prop.description} />
                  </p>
                </td>
                <td className="px-4 py-3">
                  <code className="font-mono text-[12px] leading-relaxed">{prop.type}</code>
                </td>
                <td className="px-4 py-3">
                  {prop.default ? <code className="font-mono text-[12px]">{prop.default}</code> : <span className="text-muted-foreground">—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function KeyTable({ rows }: { rows: KeyRow[] }) {
  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full text-left text-sm">
        <thead className="bg-muted/60 text-muted-foreground text-xs">
          <tr>
            <th className="w-48 px-4 py-2 font-medium">tecla</th>
            <th className="px-4 py-2 font-medium">ação</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {rows.map((row) => (
            <tr key={row.keys.join("+")}>
              <td className="px-4 py-2.5">
                <span className="flex flex-wrap gap-1">
                  {row.keys.map((k) => (
                    <Kbd key={k}>{k}</Kbd>
                  ))}
                </span>
              </td>
              <td className="px-4 py-2.5 text-muted-foreground">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
