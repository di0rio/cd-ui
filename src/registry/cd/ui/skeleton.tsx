import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Bloco de carregamento. Pulsa devagar; com movimento reduzido fica parado. Sem estado: roda no servidor. */
export function Skeleton({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={cn("animate-pulse rounded-md bg-muted motion-reduce:animate-none", className)}
      data-slot="skeleton"
      {...props}
    />
  );
}
