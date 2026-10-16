"use client";

import { cva } from "class-variance-authority";
import { CircleCheckIcon, CircleXIcon, InfoIcon, TriangleAlertIcon, XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

const levels = {
  info: "border-muted-foreground/50 [--alert-tag:var(--muted-foreground)]",
  success: "border-success [--alert-tag:var(--success-foreground)]",
  warn: "border-brand bg-brand/10 [--alert-tag:var(--brand-foreground)]",
  error: "border-destructive bg-destructive/8 [--alert-tag:var(--destructive-foreground)]",
};

const icons = { info: InfoIcon, success: CircleCheckIcon, warn: TriangleAlertIcon, error: CircleXIcon };

/** `default`, `brand` and `destructive` are the old names of `info`, `warn` and `error`. */
const aliases = { default: "info", brand: "warn", destructive: "error" } as const;

export const alertVariants = cva(
  "relative flex w-full items-baseline gap-2 overflow-hidden rounded-sm border-l-2 py-2 pr-2 pl-3 font-mono text-sm [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:self-center",
  {
    variants: {
      variant: { ...levels, default: levels.info, brand: levels.warn, destructive: levels.error },
      compact: { true: "py-1 text-xs", false: "" },
    },
    defaultVariants: { variant: "info", compact: false },
  },
);

export type AlertVariant = keyof typeof levels | keyof typeof aliases;

type AlertProps = Omit<React.ComponentProps<"div">, "title"> & {
  variant?: AlertVariant;
  tag?: React.ReactNode;
  time?: React.ReactNode;
  /** Icon before the line. Defaults to one per level; pass your own, or `false` for none. */
  icon?: React.ReactNode | false;
  /** One tight line without tag and time. */
  compact?: boolean;
  /** Shows a close button and runs when the alert closes, by click or by `autoHide`. */
  onDismiss?: () => void;
  /** Closes the alert after this many milliseconds, with a progress bar. Pauses while hovered or focused. */
  autoHide?: number;
  dismissLabel?: string;
};

/** Log-line notice: `[tag] time title - description`, with an icon per level. Warn and error use `role="alert"`, info and success `role="status"`. */
export function Alert({
  className,
  variant = "info",
  tag,
  time,
  icon,
  compact = false,
  onDismiss,
  autoHide,
  dismissLabel = "Dismiss",
  children,
  ...props
}: AlertProps): React.ReactElement | null {
  const [open, setOpen] = React.useState(true);
  const bar = React.useRef<HTMLSpanElement>(null);
  const timer = React.useRef<Animation | null>(null);
  const onDismissRef = React.useRef(onDismiss);
  React.useEffect(() => {
    onDismissRef.current = onDismiss;
  });
  const dismiss = React.useCallback(() => {
    setOpen(false);
    onDismissRef.current?.();
  }, []);

  React.useEffect(() => {
    if (!autoHide || !bar.current) return;
    const animation = bar.current.animate([{ transform: "scaleX(1)" }, { transform: "scaleX(0)" }], { duration: autoHide, easing: "linear", fill: "forwards" });
    animation.onfinish = dismiss;
    timer.current = animation;
    return () => animation.cancel();
  }, [autoHide, dismiss]);

  if (!open) return null;
  const level = variant in aliases ? aliases[variant as keyof typeof aliases] : (variant as keyof typeof levels);
  const Icon = icons[level];
  const pause = () => timer.current?.pause();
  const resume = () => timer.current?.play();
  return (
    <div
      className={cn(alertVariants({ variant, compact }), className)}
      data-slot="alert"
      onBlur={resume}
      onFocus={pause}
      onMouseEnter={pause}
      onMouseLeave={resume}
      role={level === "warn" || level === "error" ? "alert" : "status"}
      {...props}
    >
      {icon === false ? null : (icon ?? <Icon aria-hidden="true" className="text-(color:--alert-tag)" />)}
      {!compact && (
        <span className="shrink-0 text-(color:--alert-tag) text-xs uppercase tracking-wide" data-slot="alert-tag">
          [{tag ?? level}]
        </span>
      )}
      {!compact && time && (
        <span className="shrink-0 text-muted-foreground text-xs tabular-nums" data-slot="alert-time">
          {time}
        </span>
      )}
      {children}
      {onDismiss && (
        <button
          aria-label={dismissLabel}
          className="ml-auto grid size-6 shrink-0 cursor-pointer place-items-center self-center rounded-sm text-muted-foreground outline-none hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring [[data-slot=alert-action]~&]:ml-0"
          data-slot="alert-close"
          onClick={dismiss}
          type="button"
        >
          <XIcon aria-hidden="true" className="size-3.5" />
        </button>
      )}
      {autoHide ? <span aria-hidden="true" className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-(--alert-tag)" ref={bar} /> : null}
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

/** Button(s) or link at the right end of the line. */
export function AlertAction({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("ml-auto flex shrink-0 items-center gap-2 self-center", className)} data-slot="alert-action" {...props} />;
}
