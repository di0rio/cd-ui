"use client";

import {
  ArrowDownIcon,
  ArrowUpIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronsUpDownIcon,
  Columns3Icon,
  CopyIcon,
  DownloadIcon,
  EllipsisIcon,
  PencilIcon,
  SearchIcon,
  Trash2Icon,
  XIcon,
} from "lucide-react";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/cd/ui/avatar";
import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { Checkbox } from "@/registry/cd/ui/checkbox";
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuPopup, DropdownMenuTrigger } from "@/registry/cd/ui/dropdown-menu";
import { Input } from "@/registry/cd/ui/input";
import { TableCell, TableHead } from "@/registry/cd/ui/table";

// Small, independent pieces to compose on top of `Table`: each hook returns plain values, each component renders one cell or bar.
// Nothing here owns your rows, so you can use any of it with server data too.

// A small square icon button, shared by the expand button and the row actions. Bigger on touch screens.
const iconButton =
  "grid size-7 shrink-0 cursor-pointer place-items-center rounded-sm text-muted-foreground outline-none transition-colors duration-base hover:bg-foreground/8 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring pointer-coarse:size-9 [&_svg:not([class*='size-'])]:size-4";

export type SortDirection = "asc" | "desc";

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

/** Sorts rows by one key. Clicking cycles ascending, descending, off. Numbers compare as numbers, text with `Intl.Collator`. */
export function useSort<T extends Record<string, unknown>>(rows: readonly T[], initial?: { key: keyof T & string; direction: SortDirection }) {
  const [sort, setSort] = React.useState<{ key: keyof T & string; direction: SortDirection } | null>(initial ?? null);

  const sorted = React.useMemo(() => {
    if (!sort) return [...rows];
    const sign = sort.direction === "asc" ? 1 : -1;
    return [...rows].sort((a, b) => {
      const x = a[sort.key];
      const y = b[sort.key];
      return sign * (typeof x === "number" && typeof y === "number" ? x - y : collator.compare(String(x), String(y)));
    });
  }, [rows, sort]);

  const toggle = (key: keyof T & string) =>
    setSort((s) => (s?.key !== key ? { key, direction: "asc" } : s.direction === "asc" ? { key, direction: "desc" } : null));

  return { rows: sorted, sort, toggle, directionOf: (key: keyof T & string) => (sort?.key === key ? sort.direction : null) };
}

/** True when any string or number in the row contains the query (case-insensitive). An empty query matches everything. */
export function matchesQuery(row: Record<string, unknown>, query: string): boolean {
  const q = query.trim().toLowerCase();
  return !q || Object.values(row).some((v) => (typeof v === "string" || typeof v === "number") && String(v).toLowerCase().includes(q));
}

/** A set of ids that stays across pages: selected rows, expanded rows, hidden columns. `visible` feeds select all. */
export function useSelection<Id extends string | number>(visible: readonly Id[] = [], initial: readonly Id[] = []) {
  const [selected, setSelected] = React.useState<ReadonlySet<Id>>(() => new Set(initial));
  const count = visible.filter((id) => selected.has(id)).length;

  return {
    selected,
    has: (id: Id) => selected.has(id),
    toggle: (id: Id) =>
      setSelected((s) => {
        const next = new Set(s);
        if (!next.delete(id)) next.add(id);
        return next;
      }),
    /** Selects every visible id, or clears them when all are selected already. */
    toggleAll: () =>
      setSelected((s) => {
        const next = new Set(s);
        for (const id of visible) {
          if (count === visible.length) next.delete(id);
          else next.add(id);
        }
        return next;
      }),
    clear: () => setSelected(new Set()),
    allSelected: visible.length > 0 && count === visible.length,
    someSelected: count > 0 && count < visible.length,
  };
}

/** Page math for `total` rows. The page is clamped, so filtering down to fewer rows never lands past the end. */
export function usePagination(total: number, pageSize: number) {
  const [page, setPage] = React.useState(0);
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const current = Math.min(page, pageCount - 1);
  const start = current * pageSize;
  const end = Math.min(start + pageSize, total);
  return { page: current, pageCount, start, end, setPage, slice: <T,>(rows: readonly T[]) => rows.slice(start, end) };
}

type SortableHeadProps = React.ComponentProps<typeof TableHead> & {
  /** The current direction of this column, or null when the table is not sorted by it. */
  direction: SortDirection | null;
  onSort: () => void;
};

/** A column header that sorts. A real button inside the `<th>`, so Enter and Space work; `aria-sort` tells screen readers the state. */
export function SortableHead({ direction, onSort, numeric, children, ...props }: SortableHeadProps): React.ReactElement {
  const Icon = direction === "asc" ? ArrowUpIcon : direction === "desc" ? ArrowDownIcon : ChevronsUpDownIcon;
  return (
    <TableHead aria-sort={direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none"} numeric={numeric} {...props}>
      <button
        className={cn(
          "-mx-2 inline-flex cursor-pointer items-center gap-1.5 rounded-sm px-2 py-1 font-[inherit] text-[inherit] outline-none transition-colors duration-base",
          "hover:bg-foreground/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
          numeric && "flex-row-reverse",
          direction && "text-foreground",
        )}
        onClick={onSort}
        type="button"
      >
        {children}
        <Icon aria-hidden="true" className={cn("size-3.5", !direction && "opacity-50")} />
      </button>
    </TableHead>
  );
}

/** Select-all cell for the header. Pass `indeterminate` when only some rows are selected. */
export function TableSelectHead({
  checked,
  indeterminate,
  onCheckedChange,
  label = "Select all rows",
}: {
  checked: boolean;
  indeterminate?: boolean;
  onCheckedChange: () => void;
  label?: string;
}): React.ReactElement {
  return (
    <TableHead className="w-10 pe-0">
      <Checkbox aria-label={label} checked={checked} indeterminate={indeterminate} onCheckedChange={() => onCheckedChange()} />
    </TableHead>
  );
}

/** Checkbox cell for one row. Name the row in `label`, e.g. "Select INV-001". */
export function TableSelectCell({ checked, onCheckedChange, label }: { checked: boolean; onCheckedChange: () => void; label: string }): React.ReactElement {
  return (
    <TableCell className="w-10 pe-0">
      <Checkbox aria-label={label} checked={checked} onCheckedChange={() => onCheckedChange()} />
    </TableCell>
  );
}

/** Chevron button that opens a detail row. Give the detail row an `id` and pass it as `controls`. */
export function TableExpandButton({
  expanded,
  onToggle,
  label,
  controls,
}: {
  expanded: boolean;
  onToggle: () => void;
  label: string;
  controls?: string;
}): React.ReactElement {
  return (
    <button
      aria-controls={controls}
      aria-expanded={expanded}
      aria-label={label}
      className={iconButton}
      onClick={onToggle}
      type="button"
    >
      <ChevronRightIcon aria-hidden="true" className={cn("size-4 transition-transform duration-base ease-out motion-reduce:transition-none", expanded && "rotate-90")} />
    </button>
  );
}

/** Shows "N selected" with the actions you pass as children. Renders nothing when nothing is selected. */
export function TableBulkBar({
  count,
  onClear,
  children,
  className,
}: {
  count: number;
  onClear: () => void;
  children?: React.ReactNode;
  className?: string;
}): React.ReactElement | null {
  if (count === 0) return null;
  return (
    <div aria-live="polite" className={cn("flex items-center gap-2 rounded-md border bg-foreground px-3 py-1.5 text-background text-sm", className)} role="status">
      <span className="me-auto font-medium tabular-nums">{count} selected</span>
      {children}
      <Button className="rounded-md text-background hover:bg-background/15" onClick={onClear} size="sm" variant="ghost">
        Clear
      </Button>
    </div>
  );
}

/** Menu of checkboxes to show and hide columns. `hidden` is a set of column ids (see `useSelection`). */
export function ColumnToggle({
  columns,
  hidden,
  onToggle,
  label = "Columns",
}: {
  columns: readonly { id: string; label: string }[];
  hidden: ReadonlySet<string>;
  onToggle: (id: string) => void;
  label?: string;
}): React.ReactElement {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button className="rounded-md" size="sm" variant="outline" />}>
        <Columns3Icon aria-hidden="true" />
        {label}
      </DropdownMenuTrigger>
      <DropdownMenuPopup align="end">
        {columns.map((c) => (
          <DropdownMenuCheckboxItem checked={!hidden.has(c.id)} key={c.id} onCheckedChange={() => onToggle(c.id)}>
            {c.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuPopup>
    </DropdownMenu>
  );
}

/** "1-5 of 23" with previous and next buttons. Put it under the table. */
export function TablePagination({
  page,
  pageCount,
  start,
  end,
  total,
  onPageChange,
  className,
}: {
  page: number;
  pageCount: number;
  start: number;
  end: number;
  total: number;
  onPageChange: (page: number) => void;
  className?: string;
}): React.ReactElement {
  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-between gap-3 text-muted-foreground text-sm", className)}>
      <span className="tabular-nums">{total === 0 ? "0 rows" : `${start + 1}-${end} of ${total}`}</span>
      <div className="flex items-center gap-2">
        <span className="tabular-nums">
          Page {page + 1} of {pageCount}
        </span>
        <Button className="rounded-md" disabled={page === 0} onClick={() => onPageChange(page - 1)} size="sm" variant="outline">
          Previous
        </Button>
        <Button className="rounded-md" disabled={page >= pageCount - 1} onClick={() => onPageChange(page + 1)} size="sm" variant="outline">
          Next
        </Button>
      </div>
    </nav>
  );
}

// ---- Toolbar: search, filter chips, export ----

/** Row above the table. Put `TableSearch` and `TableFilterChips` first, then `ColumnToggle`, `ExportCsvButton` and your main action. */
export function TableToolbar({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("flex flex-wrap items-center gap-2", className)} data-slot="table-toolbar" {...props} />;
}

/** Search field with a magnifier and a clear button. Controlled: filter your rows with `matchesQuery`. */
export function TableSearch({
  value,
  onValueChange,
  label = "Search",
  placeholder = "Search",
  className,
}: {
  value: string;
  onValueChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  className?: string;
}): React.ReactElement {
  return (
    <div className={cn("relative w-full sm:w-64", className)}>
      <SearchIcon aria-hidden="true" className="pointer-events-none absolute start-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
      <Input
        aria-label={label}
        className="h-8 rounded-md ps-8 pe-8"
        onChange={(e) => onValueChange(e.target.value)}
        placeholder={placeholder}
        type="text"
        value={value}
      />
      {value && (
        <button
          aria-label="Clear search"
          className={cn(iconButton, "absolute end-0.5 top-1/2 size-7 -translate-y-1/2 pointer-coarse:size-8")}
          onClick={() => onValueChange("")}
          type="button"
        >
          <XIcon aria-hidden="true" />
        </button>
      )}
    </div>
  );
}

/** One-of-many filter as a row of toggle buttons ("All", "Active", ...). The option with `value` is pressed. */
export function TableFilterChips({
  options,
  value,
  onValueChange,
  label = "Filter",
  className,
}: {
  options: readonly { id: string; label: string; count?: number }[];
  value: string;
  onValueChange: (id: string) => void;
  label?: string;
  className?: string;
}): React.ReactElement {
  return (
    <div aria-label={label} className={cn("flex flex-wrap items-center gap-1", className)} role="group">
      {options.map((o) => (
        <button
          aria-pressed={o.id === value}
          className={cn(
            "inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-md border px-2.5 font-medium text-muted-foreground text-xs outline-none transition-colors duration-base",
            "hover:bg-foreground/5 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
            "aria-pressed:border-foreground aria-pressed:bg-foreground aria-pressed:text-background",
          )}
          key={o.id}
          onClick={() => onValueChange(o.id)}
          type="button"
        >
          {o.label}
          {o.count !== undefined && <span className="font-mono tabular-nums opacity-70">{o.count}</span>}
        </button>
      ))}
    </div>
  );
}

export type CsvColumn<T> = { header: string; value: (row: T) => string | number | boolean | Date | null | undefined };

/** Rows as CSV text. Quotes what needs quoting and defuses cells that start with = + - @ so spreadsheets do not run them as formulas. */
export function toCsv<T>(rows: readonly T[], columns: readonly CsvColumn<T>[]): string {
  const cell = (v: string | number | boolean | Date | null | undefined) => {
    let text = v instanceof Date ? v.toISOString() : v == null ? "" : String(v);
    if (typeof v === "string" && /^[=+\-@\t\r]/.test(text)) text = `'${text}`;
    return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  };
  return [columns.map((c) => cell(c.header)), ...rows.map((row) => columns.map((c) => cell(c.value(row))))].map((line) => line.join(",")).join("\r\n");
}

/** Downloads the rows you pass (pass the filtered, sorted ones to export what is on screen). Excel-friendly UTF-8. */
export function ExportCsvButton<T>({
  rows,
  columns,
  filename = "export.csv",
  label = "Export CSV",
  className,
}: {
  rows: readonly T[];
  columns: readonly CsvColumn<T>[];
  filename?: string;
  label?: string;
  className?: string;
}): React.ReactElement {
  const download = () => {
    const url = URL.createObjectURL(new Blob(["﻿", toCsv(rows, columns)], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };
  return (
    <Button className={cn("rounded-md", className)} onClick={download} size="sm" variant="outline">
      <DownloadIcon aria-hidden="true" />
      {label}
    </Button>
  );
}

// ---- Row actions ----

/** Icon button for a row (use inside `TableRowActions`). Always give it a `label`: it is the accessible name and the tooltip. */
export function TableAction({
  label,
  icon,
  className,
  ...props
}: Omit<React.ComponentProps<"button">, "children"> & { label: string; icon: React.ReactNode }): React.ReactElement {
  return (
    <button aria-label={label} className={cn(iconButton, className)} data-slot="table-action" title={label} type="button" {...props}>
      {icon}
    </button>
  );
}

/**
 * Last cell of a row: edit, duplicate and delete icon buttons plus an optional "..." menu (`menu` takes `DropdownMenuItem`s).
 * They show on row hover or focus and stay visible on touch screens. Delete asks for a second click.
 * `label` names the row ("Marina Alves") so each button has a clear name for screen readers.
 */
export function TableRowActions({
  label,
  onEdit,
  onDuplicate,
  onDelete,
  children,
  menu,
  className,
}: {
  label: string;
  onEdit?: () => void;
  onDuplicate?: () => void;
  onDelete?: () => void;
  /** More `TableAction` buttons, before the menu. */
  children?: React.ReactNode;
  /** Items of the overflow menu. The "..." button only shows when you pass this. */
  menu?: React.ReactNode;
  className?: string;
}): React.ReactElement {
  const [confirming, setConfirming] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!confirming) return;
    const id = window.setTimeout(() => setConfirming(false), 3000);
    return () => window.clearTimeout(id);
  }, [confirming]);

  return (
    <TableCell className={cn("w-px whitespace-nowrap", className)}>
      <div
        className={cn(
          "flex items-center justify-end gap-0.5 transition-opacity duration-fast",
          "opacity-0 group-focus-within/row:opacity-100 group-hover/row:opacity-100 pointer-coarse:opacity-100 data-active:opacity-100",
        )}
        data-active={confirming || menuOpen ? "" : undefined}
      >
        {onEdit && <TableAction icon={<PencilIcon aria-hidden="true" />} label={`Edit ${label}`} onClick={onEdit} />}
        {onDuplicate && <TableAction icon={<CopyIcon aria-hidden="true" />} label={`Duplicate ${label}`} onClick={onDuplicate} />}
        {children}
        {onDelete && (
          <TableAction
            className={confirming ? "bg-destructive text-white hover:bg-destructive/85 hover:text-white" : "hover:bg-destructive/10 hover:text-destructive-foreground"}
            icon={confirming ? <CheckIcon aria-hidden="true" /> : <Trash2Icon aria-hidden="true" />}
            label={confirming ? `Confirm delete ${label}` : `Delete ${label}`}
            onBlur={() => setConfirming(false)}
            onClick={() => {
              if (!confirming) return setConfirming(true);
              setConfirming(false);
              onDelete();
            }}
          />
        )}
        {menu && (
          <DropdownMenu onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger render={<button aria-label={`More actions for ${label}`} className={iconButton} title="More actions" type="button" />}>
              <EllipsisIcon aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuPopup align="end">{menu}</DropdownMenuPopup>
          </DropdownMenu>
        )}
      </div>
      <span aria-live="polite" className="sr-only">
        {confirming ? `Press again to delete ${label}` : ""}
      </span>
    </TableCell>
  );
}

// ---- Cell helpers ----

const statusDot = { success: "bg-success", warning: "bg-brand", danger: "bg-destructive", neutral: "bg-muted-foreground/60" } as const;

/** Status as text with a colored dot (the text carries the meaning, the dot only helps scanning). */
export function TableStatus({
  tone = "neutral",
  className,
  children,
}: {
  tone?: keyof typeof statusDot;
  className?: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <Badge className={cn("gap-1.5 rounded-sm", className)} variant="outline">
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", statusDot[tone])} />
      {children}
    </Badge>
  );
}

/** Avatar with a name and an optional second line (email, role). Falls back to initials when there is no `src`. */
export function TableUser({ name, description, src, className }: { name: string; description?: string; src?: string; className?: string }): React.ReactElement {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
  return (
    <div className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <Avatar className="size-7">
        {src && <AvatarImage alt="" src={src} />}
        <AvatarFallback className="text-[11px]">{initials}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 leading-tight">
        <div className="truncate font-medium">{name}</div>
        {description && <div className="truncate text-muted-foreground text-xs">{description}</div>}
      </div>
    </div>
  );
}

/** A mono id with a copy button (shows on row hover or focus, always on touch). */
export function TableCopyId({ value, label = "Copy ID" }: { value: string; label?: string }): React.ReactElement {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (!copied) return;
    const id = window.setTimeout(() => setCopied(false), 1500);
    return () => window.clearTimeout(id);
  }, [copied]);

  return (
    <span className="inline-flex items-center gap-1 font-mono text-xs">
      {value}
      <TableAction
        className="size-6 opacity-0 focus-visible:opacity-100 group-hover/row:opacity-100 pointer-coarse:size-9 pointer-coarse:opacity-100 data-copied:opacity-100"
        data-copied={copied ? "" : undefined}
        icon={copied ? <CheckIcon aria-hidden="true" className="text-success-foreground" /> : <CopyIcon aria-hidden="true" className="size-3.5" />}
        label={`${label} ${value}`}
        onClick={() => navigator.clipboard.writeText(value).then(() => setCopied(true), () => setCopied(false))}
      />
      <span aria-live="polite" className="sr-only">
        {copied ? "Copied" : ""}
      </span>
    </span>
  );
}

const units: readonly [Intl.RelativeTimeFormatUnit, number][] = [
  ["year", 31_536_000],
  ["month", 2_592_000],
  ["week", 604_800],
  ["day", 86_400],
  ["hour", 3600],
  ["minute", 60],
];

/** "3 days ago" with the full date as a tooltip, in a `<time>` element. Pass `now` for a fixed reference (tests, screenshots). */
export function TableRelativeDate({
  date,
  now,
  locale,
  className,
}: {
  date: Date | string | number;
  now?: number;
  locale?: string;
  className?: string;
}): React.ReactElement {
  const [mountedAt] = React.useState(() => Date.now());
  const d = new Date(date);
  const seconds = Math.round((d.getTime() - (now ?? mountedAt)) / 1000);
  const [unit, size] = units.find(([, s]) => Math.abs(seconds) >= s) ?? (["second", 1] as const);
  const text = new Intl.RelativeTimeFormat(locale, { numeric: "auto" }).format(Math.trunc(seconds / size), unit);
  return (
    // Server and browser clocks differ by a few seconds, so the text may differ on hydration. That is expected.
    <time className={cn("whitespace-nowrap text-muted-foreground", className)} dateTime={d.toISOString()} suppressHydrationWarning title={d.toLocaleString(locale)}>
      {text}
    </time>
  );
}

const rowFocusable = 'button:not(:disabled), a[href], input:not(:disabled), [role="checkbox"], [tabindex="0"]';

/**
 * Optional. `<TableBody onKeyDown={rowArrowKeys}>`: Arrow Down and Arrow Up move focus to the same control in the next or previous row
 * (the checkbox to the checkbox, the edit button to the edit button). Text fields and open menus keep their own keys.
 */
export function rowArrowKeys(event: React.KeyboardEvent<HTMLElement>): void {
  if ((event.key !== "ArrowDown" && event.key !== "ArrowUp") || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const target = event.target as HTMLElement;
  // React events cross portals (a menu rendered in the body still bubbles here), so check the real DOM.
  if (!event.currentTarget.contains(target) || target.closest('input, textarea, select, [role="menu"]')) return;
  const row = target.closest("tr");
  const index = row ? [...row.querySelectorAll<HTMLElement>(rowFocusable)].indexOf(target) : -1;
  if (!row || index < 0) return;
  const step = event.key === "ArrowDown" ? "nextElementSibling" : "previousElementSibling";
  for (let next = row[step]; next; next = next[step]) {
    const control = next.querySelectorAll<HTMLElement>(rowFocusable)[index];
    if (control) {
      event.preventDefault();
      control.focus();
      return;
    }
  }
}
