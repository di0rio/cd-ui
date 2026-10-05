import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Thin dividing line. Decorative by default (hidden from screen readers);
 * pass `decorative={false}` when it separates real content. Stateless: runs on the server.
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
