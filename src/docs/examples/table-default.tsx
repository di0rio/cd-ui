import { Badge } from "@/registry/cd/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const invoices = [
  { id: "INV-1042", customer: "Northwind Labs", status: "paid", due: "Oct 02", amount: "$2,450.00" },
  { id: "INV-1043", customer: "Acme Logistics", status: "pending", due: "Oct 18", amount: "$890.00" },
  { id: "INV-1044", customer: "Helio Studio", status: "paid", due: "Oct 21", amount: "$1,320.50" },
  { id: "INV-1045", customer: "Brightside Co.", status: "failed", due: "Sep 28", amount: "$640.00" },
  { id: "INV-1046", customer: "Orbit Foods", status: "pending", due: "Nov 04", amount: "$3,075.00" },
] as const;

const variant = { paid: "brand", pending: "muted", failed: "destructive" } as const;

export default function TableDefault() {
  return (
    <Table aria-label="Recent invoices">
      <TableCaption>Recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due</TableHead>
          <TableHead numeric>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((i) => (
          <TableRow key={i.id}>
            <TableCell className="whitespace-nowrap font-medium">{i.id}</TableCell>
            <TableCell>{i.customer}</TableCell>
            <TableCell>
              <Badge variant={variant[i.status]}>{i.status}</Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">{i.due}</TableCell>
            <TableCell numeric>{i.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
