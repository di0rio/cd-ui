import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const lines = [
  { item: "Pro plan, 5 seats", qty: 5, price: 12 },
  { item: "Extra storage (100 GB)", qty: 2, price: 8 },
  { item: "Priority support", qty: 1, price: 30 },
  { item: "Custom domain", qty: 1, price: 5 },
  { item: "Audit log retention", qty: 1, price: 15 },
] as const;

const money = (n: number) => `$${n.toFixed(2)}`;

export default function TableCompact() {
  const total = lines.reduce((sum, l) => sum + l.qty * l.price, 0);
  return (
    <Table aria-label="October bill" density="compact">
      <TableHeader>
        <TableRow>
          <TableHead>Item</TableHead>
          <TableHead numeric>Qty</TableHead>
          <TableHead numeric>Price</TableHead>
          <TableHead numeric>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {lines.map((l) => (
          <TableRow key={l.item}>
            <TableCell>{l.item}</TableCell>
            <TableCell numeric>{l.qty}</TableCell>
            <TableCell numeric>{money(l.price)}</TableCell>
            <TableCell numeric>{money(l.qty * l.price)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total due</TableCell>
          <TableCell numeric>{money(total)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
