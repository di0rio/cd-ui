import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Linha divisória fina. Decorativa por padrão (some do leitor de tela);
 * passe `decorative={false}` quando ela separar conteúdo de verdade. Sem estado: roda no servidor.
 */
export function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<"div"> & { orientation?: "horizontal" | "vertical"; decorative?: boolean }): React.ReactElement {
  return (
    <div
      className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch", className)}
      data-orientation={orientation}
      data-slot="separator"
      {...(decorative ? { role: "none" } : { role: "separator", "aria-orientation": orientation })}
      {...props}
    />
  );
}
