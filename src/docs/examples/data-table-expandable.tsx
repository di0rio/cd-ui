"use client";

import { Fragment } from "react";
import { TableExpandButton, TableStatus, useSelection } from "@/registry/cd/ui/data-table";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/registry/cd/ui/table";

const orders = [
  { id: "ORD-3021", customer: "Helio Studio", status: "shipped", total: 184.9, items: ["Desk lamp x1", "USB-C hub x2", "Cable kit x1"] },
  { id: "ORD-3022", customer: "Orbit Foods", status: "processing", total: 76, items: ["Notebook x4"] },
  { id: "ORD-3023", customer: "Northwind Labs", status: "delivered", total: 512.35, items: ["Monitor arm x2", "Webcam x2", "Headset x2"] },
  { id: "ORD-3024", customer: "Acme Logistics", status: "processing", total: 39.5, items: ["Label printer rolls x5"] },
];

const tone = { shipped: "warning", processing: "neutral", delivered: "success" } as const;

export default function DataTableExpandable() {
  const open = useSelection<string>();

  return (
    <Table aria-label="Orders">
      <TableHeader>
        <TableRow>
          <TableHead className="w-12">
            <span className="sr-only">Details</span>
          </TableHead>
          <TableHead>Order</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead numeric>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((o) => (
          <Fragment key={o.id}>
            <TableRow>
              <TableCell className="w-12 pe-0">
                <TableExpandButton controls={`${o.id}-details`} expanded={open.has(o.id)} label={`Show items of ${o.id}`} onToggle={() => open.toggle(o.id)} />
              </TableCell>
              <TableCell className="font-medium">{o.id}</TableCell>
              <TableCell>{o.customer}</TableCell>
              <TableCell>
                <TableStatus tone={tone[o.status as keyof typeof tone]}>{o.status}</TableStatus>
              </TableCell>
              <TableCell numeric>${o.total.toFixed(2)}</TableCell>
            </TableRow>
            {open.has(o.id) && (
              <TableRow className="hover:[--row-tint:transparent]" id={`${o.id}-details`}>
                <TableCell className="bg-muted/50 text-muted-foreground" colSpan={5}>
                  <ul className="list-disc ps-12">
                    {o.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            )}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
}
