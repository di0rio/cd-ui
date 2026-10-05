import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const badgeVariants = cva(
  "inline-flex h-5.5 shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2 font-medium text-xs [&_svg:not([class*='size-'])]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-foreground text-background",
        brand: "border-transparent bg-brand text-brand-contrast",
        outline: "border-border text-foreground",
        muted: "border-transparent bg-muted text-muted-foreground",
        destructive: "border-transparent bg-destructive/12 text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

/** Short label (status, count, category). Stateless: runs on the server. */
export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>): React.ReactElement {
  return <span className={cn(badgeVariants({ variant }), className)} data-slot="badge" {...props} />;
}
