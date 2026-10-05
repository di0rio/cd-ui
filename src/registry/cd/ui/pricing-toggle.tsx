"use client";

import type * as React from "react";
import { Badge } from "@/registry/cd/ui/badge";
import { Switch } from "@/registry/cd/ui/switch";

/** Monthly/yearly billing switch with an optional badge for the yearly saving. Controlled: you keep `yearly` and compute the prices. */
export function PricingToggle({
  yearly,
  onYearlyChange,
  badge,
  monthlyLabel = "Monthly",
  yearlyLabel = "Yearly",
}: {
  yearly: boolean;
  onYearlyChange: (yearly: boolean) => void;
  badge?: React.ReactNode;
  monthlyLabel?: string;
  yearlyLabel?: string;
}): React.ReactElement {
  return (
    <div className="inline-flex items-center gap-3 text-sm" data-slot="pricing-toggle">
      <span className={yearly ? "text-muted-foreground" : "font-medium"}>{monthlyLabel}</span>
      <Switch aria-label={yearlyLabel} checked={yearly} onCheckedChange={onYearlyChange} />
      <span className={yearly ? "font-medium" : "text-muted-foreground"}>{yearlyLabel}</span>
      {badge && <Badge variant="brand">{badge}</Badge>}
    </div>
  );
}
