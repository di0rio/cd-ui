"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/registry/cd/ui/button";
import {
  rowArrowKeys,
  SortableHead,
  TableAction,
  TableBulkBar,
  TableCopyId,
  TableRelativeDate,
  TableRowActions,
  TableSelectCell,
  TableSelectHead,
  TableStatus,
  useSelection,
  useSort,
} from "@/registry/cd/ui/data-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const day = 86_400_000;
const ago = (days: number) => Date.now() - days * day;

const initial = [
  { id: "INV-1042", customer: "Northwind Labs", status: "paid", amount: 2450, due: ago(2) },
  { id: "INV-1043", customer: "Acme Logistics", status: "pending", amount: 890, due: ago(-6) },
  { id: "INV-1044", customer: "Helio Studio", status: "paid", amount: 1320.5, due: ago(9) },
  { id: "INV-1045", customer: "Brightside Co.", status: "failed", amount: 640, due: ago(1) },
  { id: "INV-1046", customer: "Orbit Foods", status: "pending", amount: 3075, due: ago(-12) },
];

const tone = { paid: "success", pending: "warning", failed: "danger" } as const;

export default function DataTableInvoices() {
  const [rows, setRows] = useState(initial);
  const { rows: sorted, toggle, directionOf } = useSort(rows, { key: "due", direction: "desc" });
  const selection = useSelection(
    sorted.map((r) => r.id),
    ["INV-1043"],
  );

  const markPaid = (ids: readonly string[]) => {
    setRows((all) => all.map((r) => (ids.includes(r.id) ? { ...r, status: "paid" } : r)));
    selection.clear();
  };

  return (
    <div className="flex w-full flex-col gap-3">
      <TableBulkBar count={selection.selected.size} onClear={selection.clear}>
        <Button className="rounded-md text-background hover:bg-background/15" onClick={() => markPaid([...selection.selected])} size="sm" variant="ghost">
          <CheckIcon aria-hidden="true" />
          Mark as paid
        </Button>
      </TableBulkBar>
      <Table aria-label="Invoices">
        <TableHeader>
          <TableRow>
            <TableSelectHead checked={selection.allSelected} indeterminate={selection.someSelected} onCheckedChange={selection.toggleAll} />
            <TableHead>Invoice</TableHead>
            <SortableHead direction={directionOf("customer")} onSort={() => toggle("customer")}>
              Customer
            </SortableHead>
            <TableHead>Status</TableHead>
            <SortableHead direction={directionOf("due")} onSort={() => toggle("due")}>
              Due
            </SortableHead>
            <SortableHead direction={directionOf("amount")} numeric onSort={() => toggle("amount")}>
              Amount
            </SortableHead>
            <TableHead className="w-px">
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody onKeyDown={rowArrowKeys}>
          {sorted.map((r) => (
            <TableRow data-state={selection.has(r.id) ? "selected" : undefined} key={r.id}>
              <TableSelectCell checked={selection.has(r.id)} label={`Select ${r.id}`} onCheckedChange={() => selection.toggle(r.id)} />
              <TableCell>
                <TableCopyId value={r.id} />
              </TableCell>
              <TableCell className="font-medium">{r.customer}</TableCell>
              <TableCell>
                <TableStatus tone={tone[r.status as keyof typeof tone]}>{r.status}</TableStatus>
              </TableCell>
              <TableCell>
                <TableRelativeDate date={r.due} />
              </TableCell>
              <TableCell numeric>${r.amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</TableCell>
              <TableRowActions label={r.id} onDelete={() => setRows((all) => all.filter((x) => x.id !== r.id))}>
                {r.status !== "paid" && <TableAction icon={<CheckIcon aria-hidden="true" />} label={`Mark ${r.id} as paid`} onClick={() => markPaid([r.id])} />}
              </TableRowActions>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
