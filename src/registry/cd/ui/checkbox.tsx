"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Caixa de seleção. O traço do check é desenhado em SVG e "risca" em 150ms ao marcar. */
export function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props): React.ReactElement {
  return (
    <CheckboxPrimitive.Root
      className={cn(
        "peer grid size-4.5 shrink-0 cursor-pointer place-items-center rounded-[5px] border border-input bg-background outline-none",
        "transition-[background-color,border-color] duration-150 ease-out",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-checked:border-foreground data-checked:bg-foreground data-indeterminate:border-foreground data-indeterminate:bg-foreground",
        "data-invalid:border-destructive data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      data-slot="checkbox"
      {...props}
    >
      <CheckboxPrimitive.Indicator
        className="text-background [&[data-indeterminate]_.check]:hidden [&:not([data-indeterminate])_.dash]:hidden"
        keepMounted
      >
        <svg aria-hidden="true" className="size-3" fill="none" viewBox="0 0 12 12">
          <path
            className="check transition-[stroke-dashoffset] duration-150 ease-out [stroke-dasharray:14] [stroke-dashoffset:14] in-data-checked:[stroke-dashoffset:0] motion-reduce:transition-none"
            d="M2.5 6.2 5 8.5l4.5-5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.8"
          />
          <path className="dash" d="M3 6h6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}
