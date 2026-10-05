"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Group of mutually exclusive options. Arrow keys move focus and selection between items. */
export function RadioGroup({ className, ...props }: RadioGroupPrimitive.Props): React.ReactElement {
  return <RadioGroupPrimitive className={cn("flex flex-col gap-3", className)} data-slot="radio-group" {...props} />;
}

/** Radio button. The center dot grows from `scale(0.5)` when checked. */
export function Radio({ className, ...props }: RadioPrimitive.Root.Props): React.ReactElement {
  return (
    <RadioPrimitive.Root
      className={cn(
        "grid size-4.5 shrink-0 cursor-pointer place-items-center rounded-full border border-input bg-background outline-none",
        "transition-[background-color,border-color] duration-base ease-out",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:border-foreground data-checked:bg-foreground",
        "data-invalid:border-destructive data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      data-slot="radio"
      {...props}
    >
      <RadioPrimitive.Indicator
        className="size-1.5 rounded-full bg-background transition-transform duration-base ease-out data-starting-style:scale-50"
        data-slot="radio-indicator"
      />
    </RadioPrimitive.Root>
  );
}
