import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { cartoon } from "@/registry/cd/ui/cartoon";

/**
 * Flat surface with a thin border. Built from optional parts. Stateless: runs on the server.
 * `variant="cartoon"` gives it the thick ink outline and hard shadow shared with Button and Badge.
 */
export function Card({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & { variant?: "default" | "cartoon" }): React.ReactElement {
  return (
    <div
      className={cn("flex flex-col gap-5 rounded-xl border bg-card p-5 text-card-foreground", variant === "cartoon" && cartoon, className)}
      data-slot="card"
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("flex flex-col gap-1", className)} data-slot="card-header" {...props} />;
}

export function CardTitle({ className, ...props }: React.ComponentProps<"h3">): React.ReactElement {
  return <h3 className={cn("font-heading font-semibold leading-tight", className)} data-slot="card-title" {...props} />;
}

export function CardDescription({ className, ...props }: React.ComponentProps<"p">): React.ReactElement {
  return <p className={cn("text-muted-foreground text-sm", className)} data-slot="card-description" {...props} />;
}

export function CardContent({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("text-sm", className)} data-slot="card-content" {...props} />;
}

export function CardFooter({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("flex items-center gap-2", className)} data-slot="card-footer" {...props} />;
}
