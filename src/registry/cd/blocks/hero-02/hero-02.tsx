import { ArrowRightIcon, BellIcon, CheckIcon } from "lucide-react";
import { Button } from "@/registry/cd/ui/button";
import { Card } from "@/registry/cd/ui/card";

const stats = [
  ["12k+", "teams"],
  ["99.9%", "uptime"],
  ["4.9/5", "rating"],
];

/** Split hero: copy and stats on the left, a layered "sticker" product visual on the right. */
export function Hero02() {
  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1 font-mono text-muted-foreground text-xs">
            <span className="size-1.5 rounded-full bg-brand" /> v2.0 is live
          </p>
          <h1 className="text-balance font-bold font-heading text-[44px] leading-[1.02] tracking-[-0.03em] sm:text-[60px]">
            Invoices that get paid. On time.
          </h1>
          <p className="mt-5 max-w-lg text-pretty text-lg text-muted-foreground leading-relaxed">
            Send, track and chase invoices from a single inbox. Acme nudges late payers for you, so cash flow stops being a guessing game.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button nativeButton={false} render={<a href="#signup" />} size="lg" variant="brand">
              Get started <ArrowRightIcon aria-hidden="true" />
            </Button>
            <Button nativeButton={false} render={<a href="#tour" />} size="lg" variant="outline">
              Take the tour
            </Button>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t pt-6">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="text-muted-foreground text-xs">{label}</dt>
                <dd className="mt-1 font-bold font-heading text-2xl tabular-nums tracking-[-0.02em]">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 sm:pr-8">
          <Card className="-rotate-2 gap-4 border-[3px] border-black p-5 shadow-[10px_10px_0_var(--brand)]">
            <div className="flex items-center justify-between">
              <p className="font-heading font-semibold">Invoice #1042</p>
              <span className="rounded-full bg-brand px-2.5 py-0.5 font-medium text-brand-contrast text-xs">Paid</span>
            </div>
            <p className="font-bold font-heading text-4xl tabular-nums tracking-[-0.02em]">$4,280.00</p>
            <div className="space-y-2">
              {[
                ["Design sprint", "$3,200.00"],
                ["Brand guidelines", "$1,080.00"],
              ].map(([item, price]) => (
                <div className="flex justify-between border-t pt-2 text-sm" key={item}>
                  <span className="text-muted-foreground">{item}</span>
                  <span className="tabular-nums">{price}</span>
                </div>
              ))}
            </div>
            <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
              {[30, 46, 38, 62, 54, 78, 70, 100].map((h, i) => (
                <span className="flex-1 rounded-sm bg-foreground/80" key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </Card>
          <div className="absolute right-0 bottom-0 flex w-60 rotate-3 items-center gap-3 rounded-2xl border-[3px] border-black bg-white p-3 text-[#1c1c1c] shadow-[5px_5px_0_#1c1c1c]">
            <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand">
              <BellIcon aria-hidden="true" className="size-4" />
            </span>
            <p className="text-sm leading-tight">
              <span className="block font-semibold">Payment received</span>
              <span className="flex items-center gap-1 text-[#686868]">
                <CheckIcon aria-hidden="true" className="size-3" /> Northwind paid 2 days early
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
