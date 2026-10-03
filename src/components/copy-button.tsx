"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/registry/cd/lib/utils";

const icon = "absolute inset-0 m-auto size-4 transition-[opacity,transform,filter] duration-200 ease-out motion-reduce:transition-opacity";

/** Copiar com troca de ícone por desfoque (o mesmo experimento do /lab do portfólio). */
export function CopyButton({ text, className }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <button
      aria-label={copied ? "Copiado" : "Copiar"}
      className={cn(
        "relative size-8 shrink-0 cursor-pointer rounded-md text-muted-foreground outline-none transition-[color,background-color,transform] duration-150 ease-out hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-safe:active:scale-[0.96]",
        className,
      )}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          return;
        }
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 1500);
      }}
      type="button"
    >
      <CopyIcon aria-hidden="true" className={cn(icon, copied ? "scale-50 opacity-0 blur-[2px]" : "scale-100 opacity-100")} />
      <CheckIcon aria-hidden="true" className={cn(icon, "text-brand-foreground", copied ? "scale-100 opacity-100" : "scale-50 opacity-0 blur-[2px]")} />
    </button>
  );
}
