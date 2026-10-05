import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const rows = Array.from({ length: 24 }, (_, i) => ({
  id: `ORD-${String(i + 1).padStart(3, "0")}`,
  items: (i * 7) % 9 + 1,
  total: ((i + 3) * 37.5).toFixed(2),
}));

export default function TableSticky() {
  return (
    <Table aria-label="Orders" className="max-w-md" density="compact" stickyHeader>
      <TableHeader>
        <TableRow>
          <TableHead>Order</TableHead>
          <TableHead numeric>Items</TableHead>
          <TableHead numeric>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map((r, i) => (
          <TableRow data-state={i === 2 ? "selected" : undefined} key={r.id}>
            <TableCell className="font-medium">{r.id}</TableCell>
            <TableCell numeric>{r.items}</TableCell>
            <TableCell numeric>${r.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
