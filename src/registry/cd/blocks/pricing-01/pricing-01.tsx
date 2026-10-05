"use client";

import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/registry/cd/ui/badge";
import { Button } from "@/registry/cd/ui/button";
import { PricingToggle } from "@/registry/cd/ui/pricing-toggle";

const YEARLY_DISCOUNT = 0.2;

const tiers = [
  {
    name: "Hobby",
    monthly: 0,
    blurb: "For side projects and trying things out.",
    cta: "Start for free",
    features: ["3 projects", "1 GB storage", "Community support"],
  },
  {
    name: "Pro",
    monthly: 19,
    blurb: "For professionals who ship every week.",
    cta: "Upgrade to Pro",
    featured: true,
    features: ["Unlimited projects", "100 GB storage", "Priority support", "Custom domains", "Advanced analytics"],
  },
  {
    name: "Team",
    monthly: 49,
    blurb: "For teams that need control and compliance.",
    cta: "Contact sales",
    features: ["Everything in Pro", "SSO and audit logs", "Roles and permissions", "99.9% uptime SLA"],
  },
];

/** Three pricing tiers with a monthly/yearly toggle. Prices are computed from the monthly value. */
export function Pricing01() {
  const [yearly, setYearly] = useState(true);

  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-balance font-bold font-heading text-3xl tracking-[-0.02em] sm:text-4xl">Simple pricing that scales with you</h2>
          <p className="mt-3 text-muted-foreground">Start free. Upgrade when you outgrow it. Cancel anytime.</p>
          <div className="mt-8">
            <PricingToggle badge={`Save ${YEARLY_DISCOUNT * 100}%`} onYearlyChange={setYearly} yearly={yearly} />
          </div>
        </div>

        <ul className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
          {tiers.map((tier) => {
            const price = yearly ? Math.round(tier.monthly * (1 - YEARLY_DISCOUNT)) : tier.monthly;
            return (
              <li
                className={`relative flex flex-col rounded-2xl border bg-card p-6 ${tier.featured ? "border-2 border-brand lg:-my-3 lg:py-9" : ""}`}
                key={tier.name}
              >
                {tier.featured && <Badge className="absolute -top-3 left-6" variant="brand">Most popular</Badge>}
                <h3 className="font-heading font-semibold text-lg">{tier.name}</h3>
                <p className="mt-1 text-muted-foreground text-sm">{tier.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="font-bold font-heading text-5xl tabular-nums tracking-[-0.03em]">${price}</span>
                  <span className="text-muted-foreground text-sm">/ month{yearly && tier.monthly > 0 ? ", billed yearly" : ""}</span>
                </p>
                <Button className="mt-6 w-full" nativeButton={false} render={<a href="#signup" />} variant={tier.featured ? "brand" : "outline"}>
                  {tier.cta}
                </Button>
                <ul className="mt-6 flex flex-col gap-2.5 border-t pt-6 text-sm">
                  {tier.features.map((feature) => (
                    <li className="flex items-center gap-2.5" key={feature}>
                      <CheckIcon aria-hidden="true" className="size-4 shrink-0 text-brand-foreground" /> {feature}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
