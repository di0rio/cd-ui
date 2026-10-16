import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { cartoon } from "@/registry/cd/ui/cartoon";

type TableProps = React.ComponentProps<"table"> & {
  containerClassName?: string;
  /** `striped` tints every other row; `cartoon` is the thick-outline sticker look shared with Button, Badge and Card. */
  variant?: "default" | "striped" | "cartoon";
  /** Row padding: `compact`, `default` or `comfortable`. */
  density?: "compact" | "default" | "comfortable";
  /** The header stays visible while the rows scroll (the container grows up to `max-h-96`; change it with `containerClassName`). */
  stickyHeader?: boolean;
  /** The first column stays in place while the table scrolls sideways. */
  stickyFirstColumn?: boolean;
};

// A row's background is a variable so the sticky cells (which must be opaque) can paint the same tint over the page color.
const rowBg = "from-[var(--row-tint,var(--stripe,transparent))] to-[var(--row-tint,var(--stripe,transparent))]";

/**
 * Styled table over native elements (`<table>` semantics intact). Stateless: runs on the server.
 * With `aria-label`, the scroll container becomes a labelled region (it is keyboard-focusable in any case, so a wide
 * table can be scrolled with the arrow keys). Sorting, selection, paging and the rest live in `data-table.tsx`.
 */
export function Table({
  className,
  containerClassName,
  variant = "default",
  density = "default",
  stickyHeader = false,
  stickyFirstColumn = false,
  "aria-label": ariaLabel,
  ...props
}: TableProps): React.ReactElement {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "relative w-full overflow-auto rounded-md border bg-card outline-none",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "cartoon" && cartoon,
        stickyHeader && "max-h-96",
        containerClassName,
      )}
      data-slot="table-container"
      role={ariaLabel ? "region" : undefined}
      tabIndex={0}
    >
      <table
        className={cn(
          // --cell-py is the one knob the density changes; head and cells read it. Separate borders keep the lines when sticky.
          "w-full caption-bottom border-separate border-spacing-0 text-sm [--cell-py:0.5rem] data-[density=comfortable]:[--cell-py:0.875rem] data-[density=compact]:[--cell-py:0.25rem]",
          className,
        )}
        data-density={density}
        data-slot="table"
        data-sticky={stickyHeader ? "" : undefined}
        data-sticky-col={stickyFirstColumn ? "" : undefined}
        data-variant={variant}
        {...props}
      />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.ReactElement {
  return <thead className={className} data-slot="table-header" {...props} />;
}

export function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.ReactElement {
  return <tbody className={cn("[&_tr:last-child>td]:border-b-0", className)} data-slot="table-body" {...props} />;
}

export function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.ReactElement {
  return (
    <tfoot
      className={cn("bg-muted font-medium [&_td]:border-t [&_td]:border-b-0 in-data-[variant=cartoon]:[&_td]:border-t-(--cartoon-ink,#1c1c1c)", className)}
      data-slot="table-footer"
      {...props}
    />
  );
}

/** Selected row: `data-state="selected"` or `aria-selected`. */
export function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.ReactElement {
  return (
    <tr
      className={cn(
        "group/row bg-(--row-tint,var(--stripe,transparent)) transition-colors duration-base ease-out",
        "in-data-[variant=striped]:even:[--stripe:var(--muted)]",
        "hover:[--row-tint:var(--muted)] in-data-[variant=cartoon]:hover:[--row-tint:color-mix(in_oklab,var(--brand)_22%,transparent)]",
        "aria-selected:[--row-tint:color-mix(in_oklab,var(--brand)_15%,transparent)] data-[state=selected]:[--row-tint:color-mix(in_oklab,var(--brand)_15%,transparent)]",
        "aria-selected:hover:[--row-tint:color-mix(in_oklab,var(--brand)_22%,transparent)] data-[state=selected]:hover:[--row-tint:color-mix(in_oklab,var(--brand)_22%,transparent)]",
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

const stickyCol = "in-data-sticky-col:first:sticky in-data-sticky-col:first:left-0 in-data-sticky-col:first:z-1 in-data-sticky-col:first:border-e";

export function TableHead({ className, numeric, ...props }: React.ComponentProps<"th"> & NumericProps): React.ReactElement {
  return (
    <th
      className={cn(
        "h-9 whitespace-nowrap border-b bg-background bg-linear-to-b from-muted/60 to-muted/60 px-3 py-(--cell-py) text-start align-middle font-medium text-muted-foreground text-xs tracking-wide",
        "data-numeric:text-right data-numeric:tabular-nums",
        "in-data-[variant=cartoon]:border-b-(--cartoon-ink,#1c1c1c) in-data-[variant=cartoon]:bg-brand in-data-[variant=cartoon]:bg-none in-data-[variant=cartoon]:font-bold in-data-[variant=cartoon]:text-brand-contrast",
        stickyCol,
        // The header stays on top; its first cell also stays left, above the other header cells.
        "in-data-sticky:sticky in-data-sticky:top-0 in-data-sticky:z-10 in-data-sticky-col:first:z-20",
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
      className={cn(
        "border-b px-3 py-(--cell-py) text-start align-middle data-numeric:whitespace-nowrap data-numeric:text-right data-numeric:tabular-nums",
        "in-data-[variant=cartoon]:border-b-(--cartoon-ink,#1c1c1c)",
        stickyCol,
        `in-data-sticky-col:first:bg-background in-data-sticky-col:first:bg-linear-to-b ${rowBg}`,
        className,
      )}
      data-numeric={numeric ? "" : undefined}
      data-slot="table-cell"
      {...props}
    />
  );
}

/** One full-width row for "nothing here": pass the number of columns. */
export function TableEmpty({ colSpan, className, children }: { colSpan: number; className?: string; children: React.ReactNode }): React.ReactElement {
  return (
    <TableRow className="hover:[--row-tint:transparent]" data-slot="table-empty">
      <TableCell className={cn("h-40 static! text-center text-muted-foreground", className)} colSpan={colSpan}>
        {children}
      </TableCell>
    </TableRow>
  );
}

export function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.ReactElement {
  return <caption className={cn("mt-3 mb-3 text-muted-foreground text-sm", className)} data-slot="table-caption" {...props} />;
}
