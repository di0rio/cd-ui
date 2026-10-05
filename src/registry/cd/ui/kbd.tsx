import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Keyboard key or shortcut. Stateless: runs on the server. */
export function Kbd({ className, ...props }: React.ComponentProps<"kbd">): React.ReactElement {
  return (
    <kbd
      className={cn(
        "inline-flex h-5 min-w-5 select-none items-center justify-center gap-0.5 rounded-xs border border-b-2 bg-background px-1 font-mono text-[11px] text-muted-foreground",
        className,
      )}
      data-slot="kbd"
      {...props}
    />
  );
}
