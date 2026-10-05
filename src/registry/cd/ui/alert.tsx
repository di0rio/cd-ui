import { cva } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

const levels = {
  info: "border-muted-foreground/50 [--alert-tag:var(--muted-foreground)]",
  success: "border-success [--alert-tag:var(--success-foreground)]",
  warn: "border-brand bg-brand/10 [--alert-tag:var(--brand-foreground)]",
  error: "border-destructive bg-destructive/8 [--alert-tag:var(--destructive-foreground)]",
};

/** `default`, `brand` and `destructive` are the old names of `info`, `warn` and `error`. */
const aliases = { default: "info", brand: "warn", destructive: "error" } as const;

export const alertVariants = cva(
  "flex w-full items-baseline gap-2 rounded-sm border-l-2 py-2 pr-2 pl-3 font-mono text-sm [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:self-center",
  {
    variants: { variant: { ...levels, default: levels.info, brand: levels.warn, destructive: levels.error } },
    defaultVariants: { variant: "info" },
  },
);

export type AlertVariant = keyof typeof levels | keyof typeof aliases;

/** Log-line notice: `[tag] time title - description`. Warn and error use `role="alert"`, info and success `role="status"`. Stateless: runs on the server. */
export function Alert({
  className,
  variant = "info",
  tag,
  time,
  children,
  ...props
}: Omit<React.ComponentProps<"div">, "title"> & { variant?: AlertVariant; tag?: React.ReactNode; time?: React.ReactNode }): React.ReactElement {
  const level = variant in aliases ? aliases[variant as keyof typeof aliases] : (variant as keyof typeof levels);
  return (
    <div
      className={cn(alertVariants({ variant }), className)}
      data-slot="alert"
      role={level === "warn" || level === "error" ? "alert" : "status"}
      {...props}
    >
      <span className="shrink-0 text-(color:--alert-tag) text-xs uppercase tracking-wide" data-slot="alert-tag">
        [{tag ?? level}]
      </span>
      {time && (
        <span className="shrink-0 text-muted-foreground text-xs tabular-nums" data-slot="alert-time">
          {time}
        </span>
      )}
      {children}
    </div>
  );
}

export function AlertTitle({ className, ...props }: React.ComponentProps<"span">): React.ReactElement {
  return <span className={cn("min-w-0 font-medium", className)} data-slot="alert-title" {...props} />;
}

/** Follows the title on the same line, after a dash. */
export function AlertDescription({ className, ...props }: React.ComponentProps<"span">): React.ReactElement {
  return (
    <span
      className={cn("min-w-0 text-muted-foreground [[data-slot=alert-title]+&]:before:mr-2 [[data-slot=alert-title]+&]:before:content-['-']", className)}
      data-slot="alert-description"
      {...props}
    />
  );
}

/** Button or link at the right end of the line. */
export function AlertAction({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("ml-auto shrink-0 self-center", className)} data-slot="alert-action" {...props} />;
}
