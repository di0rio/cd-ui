"use client";

import { type CSSProperties, useState } from "react";
import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";

const defaults = { border: 2, offset: 3, depth: 3, ink: "" };

type Labels = Record<"label" | "reset" | "ink" | "border" | "offset" | "depth" | "press" | "badge" | "cardTitle" | "cardText", string>;

/** Live sliders on the cartoon tokens: the variables are set on the wrapper, like in your own app. */
export function CartoonPlayground({ labels }: { labels: Labels }) {
  const [v, setV] = useState(defaults);
  const style = {
    "--cartoon-border": `${v.border}px`,
    "--cartoon-offset": `${v.offset}px`,
    "--press-depth": `${Math.min(v.depth, v.offset)}px`,
    ...(v.ink && { "--cartoon-ink": v.ink }),
  } as CSSProperties;
  const sliders = [
    { key: "border", min: 1, max: 6 },
    { key: "offset", min: 0, max: 12 },
    { key: "depth", min: 0, max: 12 },
  ] as const;

  return (
    <div className="grid gap-6 rounded-xl border bg-card p-5 sm:grid-cols-2" role="group" aria-label={labels.label}>
      <div className="flex flex-col gap-4">
        {sliders.map(({ key, min, max }) => (
          <label className="flex items-center gap-3 text-sm" key={key}>
            <span className="w-24 shrink-0 text-muted-foreground">{labels[key]}</span>
            <input
              className="min-w-0 flex-1 accent-brand-foreground"
              max={max}
              min={min}
              onChange={(e) => setV({ ...v, [key]: Number(e.target.value) })}
              type="range"
              value={v[key]}
            />
            <span className="w-9 text-right font-mono text-xs tabular-nums">{v[key]}px</span>
          </label>
        ))}
        <label className="flex items-center gap-3 text-sm">
          <span className="w-24 shrink-0 text-muted-foreground">{labels.ink}</span>
          <input className="h-8 w-12 cursor-pointer rounded border bg-transparent" onChange={(e) => setV({ ...v, ink: e.target.value })} type="color" value={v.ink || "#1c1c1c"} />
        </label>
        <Button className="self-start" onClick={() => setV(defaults)} size="sm" variant="outline">
          {labels.reset}
        </Button>
      </div>
      <div className="flex items-center justify-center" style={style}>
        <Card className="w-full max-w-60" variant="cartoon">
          <CardHeader>
            <CardTitle>{labels.cardTitle}</CardTitle>
            <CardDescription>{labels.cardText}</CardDescription>
          </CardHeader>
          <div className="flex items-center gap-3">
            <Button variant="cartoon">{labels.press}</Button>
            <Badge variant="cartoon">{labels.badge}</Badge>
          </div>
        </Card>
      </div>
    </div>
  );
}
