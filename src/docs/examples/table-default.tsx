import { Badge } from "@/registry/cd/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const invoices = [
  { id: "INV-001", status: "paid", method: "Credit card", amount: "$250.00" },
  { id: "INV-002", status: "pending", method: "Bank transfer", amount: "$150.00" },
  { id: "INV-003", status: "failed", method: "Credit card", amount: "$350.00" },
] as const;

const variant = { paid: "brand", pending: "muted", failed: "destructive" } as const;

export default function TableDefault() {
  return (
    <Table aria-label="Recent invoices" className="max-w-lg">
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead numeric>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((i) => (
          <TableRow key={i.id}>
            <TableCell className="font-medium">{i.id}</TableCell>
            <TableCell>
              <Badge variant={variant[i.status]}>{i.status}</Badge>
            </TableCell>
            <TableCell>{i.method}</TableCell>
            <TableCell numeric>{i.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
