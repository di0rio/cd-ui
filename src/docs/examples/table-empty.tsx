import { InboxIcon } from "lucide-react";
import { Table, TableBody, TableEmpty, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

export default function TableEmptyExample() {
  return (
    <Table aria-label="Invoices">
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead numeric>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableEmpty colSpan={3}>
          <InboxIcon aria-hidden="true" className="mx-auto mb-2 size-6" />
          <p className="font-medium text-foreground">No invoices yet</p>
          <p>They show up here as soon as you send the first one.</p>
        </TableEmpty>
      </TableBody>
    </Table>
  );
}
