import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Loading block. Pulses slowly; with reduced motion it stays still. Stateless: runs on the server. */
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
