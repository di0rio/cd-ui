import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-xl border px-4 py-3 text-sm has-[>svg]:grid-cols-[1rem_1fr] has-[>svg]:gap-x-3 [&>svg]:mt-0.5 [&>svg]:size-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        brand: "border-brand/60 bg-brand/15 text-foreground [&>svg]:text-brand-foreground",
        destructive: "border-destructive/30 bg-destructive/8 text-destructive-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

/** Block notice (info, success, error). An icon placed directly inside takes the first column. Stateless: runs on the server. */
export function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>): React.ReactElement {
  return <div className={cn(alertVariants({ variant }), className)} data-slot="alert" role="alert" {...props} />;
}

export function AlertTitle({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("col-start-2 font-medium leading-snug", className)} data-slot="alert-title" {...props} />;
}

export function AlertDescription({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("col-start-2 text-muted-foreground text-sm", className)} data-slot="alert-description" {...props} />;
}
