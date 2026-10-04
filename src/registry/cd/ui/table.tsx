import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Tabela estilizada sobre elementos nativos (semântica de `<table>` intacta). Sem estado: roda no servidor. */
export function Table({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<"table"> & { containerClassName?: string }): React.ReactElement {
  return (
    <div className={cn("relative w-full overflow-x-auto rounded-xl border", containerClassName)} data-slot="table-container">
      <table className={cn("w-full caption-bottom border-collapse text-sm", className)} data-slot="table" {...props} />
    </div>
  );
}

export function TableHeader({ className, ...props }: React.ComponentProps<"thead">): React.ReactElement {
  return <thead className={cn("[&_tr]:border-b", className)} data-slot="table-header" {...props} />;
}

export function TableBody({ className, ...props }: React.ComponentProps<"tbody">): React.ReactElement {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} data-slot="table-body" {...props} />;
}

export function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">): React.ReactElement {
  return <tfoot className={cn("border-t bg-muted font-medium [&>tr]:border-b-0", className)} data-slot="table-footer" {...props} />;
}

export function TableRow({ className, ...props }: React.ComponentProps<"tr">): React.ReactElement {
  return (
    <tr
      className={cn("border-b transition-colors duration-150 ease-out hover:bg-accent/50 data-[state=selected]:bg-accent", className)}
      data-slot="table-row"
      {...props}
    />
  );
}

export function TableHead({ className, ...props }: React.ComponentProps<"th">): React.ReactElement {
  return (
    <th
      className={cn("h-10 whitespace-nowrap px-3 text-left align-middle font-medium text-muted-foreground text-xs", className)}
      data-slot="table-head"
      {...props}
    />
  );
}

export function TableCell({ className, ...props }: React.ComponentProps<"td">): React.ReactElement {
  return <td className={cn("p-3 align-middle", className)} data-slot="table-cell" {...props} />;
}

export function TableCaption({ className, ...props }: React.ComponentProps<"caption">): React.ReactElement {
  return <caption className={cn("mt-3 mb-3 text-muted-foreground text-sm", className)} data-slot="table-caption" {...props} />;
}
