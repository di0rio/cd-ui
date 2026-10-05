import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

type TableProps = React.ComponentProps<"table"> & {
  containerClassName?: string;
  /** Row padding: `compact`, `default` or `comfortable`. */
  density?: "compact" | "default" | "comfortable";
  /** The header stays visible while the rows scroll (the container grows up to `max-h-96`; change it with `containerClassName`). */
  stickyHeader?: boolean;
};

/**
 * Styled table over native elements (`<table>` semantics intact). Stateless: runs on the server.
 * With `aria-label`, the scroll container becomes a labelled region (it is keyboard-focusable in any case, so a wide
 * table can be scrolled with the arrow keys).
 */
export function Table({
  className,
  containerClassName,
  density = "default",
  stickyHeader = false,
  "aria-label": ariaLabel,
  ...props
}: TableProps): React.ReactElement {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative w-full overflow-auto rounded-xl border outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        stickyHeader && "max-h-96",
        containerClassName,
      )}
      data-slot="table-container"
      role={ariaLabel ? "region" : undefined}
      tabIndex={0}
    >
      <table
        className={cn(
          // --cell-py is the one knob the density changes; head and cells read it.
          "w-full caption-bottom border-collapse text-sm [--cell-py:0.75rem] data-[density=comfortable]:[--cell-py:1rem] data-[density=compact]:[--cell-py:0.375rem]",
          className,
        )}
        data-density={density}
        data-slot="table"
        data-sticky={stickyHeader ? "" : undefined}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.ReactElement {
  return <thead className={cn("[&_tr:hover]:bg-transparent [&_tr]:border-b", className)} data-slot="table-header" {...props} />;
}

export function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.ReactElement {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} data-slot="table-body" {...props} />;
}

export function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.ReactElement {
  return <tfoot className={cn("border-t bg-muted font-medium [&>tr]:border-b-0", className)} data-slot="table-footer" {...props} />;
}

/** Selected row: `data-state="selected"` or `aria-selected`. */
export function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.ReactElement {
  return (
    <tr
      className={cn(
        "border-b transition-colors duration-base ease-out hover:bg-foreground/5",
        "aria-selected:bg-brand/15 data-[state=selected]:bg-brand/15 aria-selected:hover:bg-brand/20 data-[state=selected]:hover:bg-brand/20",
        className,
      )}
      data-slot="table-row"
      {...props}
    />
  );
}

type NumericProps = {
  /** Right-aligned, with equal-width digits (for money, counts, dates). */
  numeric?: boolean;
};

export function TableHead({ className, numeric, ...props }: React.ComponentProps<"th"> & NumericProps): React.ReactElement {
  return (
    <th
      className={cn(
        "whitespace-nowrap px-3 py-(--cell-py) text-start align-middle font-medium font-mono text-[11px] text-muted-foreground uppercase tracking-wider",
        "data-numeric:text-right data-numeric:tabular-nums",
        // Border-collapse tables lose their borders when scrolling, so the line under the header is a shadow.
        "in-data-sticky:sticky in-data-sticky:top-0 in-data-sticky:z-10 in-data-sticky:bg-background in-data-sticky:shadow-[0_1px_0_0_var(--border)]",
        className,
      )}
      data-numeric={numeric ? "" : undefined}
      data-slot="table-head"
      {...props}
    />
  );
}

export function TableCell({ className, numeric, ...props }: React.ComponentProps<"td"> & NumericProps): React.ReactElement {
  return (
    <td
      className={cn("px-3 py-(--cell-py) text-start align-middle data-numeric:text-right data-numeric:tabular-nums", className)}
      data-numeric={numeric ? "" : undefined}
      data-slot="table-cell"
      {...props}
    />
  );
}

export function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.ReactElement {
  return <caption className={cn("mt-3 mb-3 text-muted-foreground text-sm", className)} data-slot="table-caption" {...props} />;
}
