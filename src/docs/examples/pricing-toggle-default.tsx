"use client";

import { useState } from "react";
import { PricingToggle } from "@/registry/cd/ui/pricing-toggle";

export default function PricingToggleDefault() {
  const [yearly, setYearly] = useState(true);
  return (
    <div className="flex flex-col items-center gap-3">
      <PricingToggle badge="Save 20%" onYearlyChange={setYearly} yearly={yearly} />
      <p className="font-heading font-bold text-3xl">
        ${yearly ? 24 : 30}
        <span className="font-normal text-muted-foreground text-sm"> / month</span>
      </p>
    </div>
  );
}
