import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Indicador de carregamento em SVG + CSS. Sem estado: roda no servidor, zero JS no cliente. */
export function Spinner({ className, label = "Carregando", ...props }: React.ComponentProps<"svg"> & { label?: string }) {
  return (
    <svg
      aria-label={label}
      className={cn("size-4 animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite]", className)}
      data-slot="spinner"
      fill="none"
      role="status"
      viewBox="0 0 24 24"
      {...props}
    >
      <circle className="opacity-20" cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeLinecap="round" strokeWidth="3" />
    </svg>
  );
}
