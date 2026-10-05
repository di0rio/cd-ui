"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Slider. Pass a number for one thumb or an array for a range (one thumb per value).
 * Use `thumbLabel` to name each thumb when there is no visible label.
 */
export function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  thumbLabel,
  ...props
}: SliderPrimitive.Root.Props & { thumbLabel?: string | string[] }): React.ReactElement {
  const current = value ?? defaultValue ?? min;
  const count = Array.isArray(current) ? current.length : 1;
  const labels = Array.isArray(thumbLabel) ? thumbLabel : [thumbLabel];

  return (
    <SliderPrimitive.Root
      className={cn("w-full", className)}
      data-slot="slider"
      defaultValue={defaultValue}
      min={min}
      value={value}
      {...props}
    >
      <SliderPrimitive.Control className="flex w-full touch-none items-center py-2 select-none data-disabled:cursor-not-allowed data-disabled:opacity-50">
        <SliderPrimitive.Track className="relative h-1.5 w-full rounded-full bg-input select-none" data-slot="slider-track">
          <SliderPrimitive.Indicator className="rounded-full bg-brand select-none" data-slot="slider-indicator" />
          {Array.from({ length: count }, (_, i) => (
            <SliderPrimitive.Thumb
              aria-label={labels[i]}
              className={cn(
                "size-4.5 cursor-grab rounded-full border border-input bg-background shadow-sm/10 outline-none select-none",
                "transition-[box-shadow,transform] duration-base ease-out motion-safe:active:scale-110",
                "has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 has-focus-visible:ring-offset-background",
                "data-dragging:cursor-grabbing",
              )}
              data-slot="slider-thumb"
              index={count > 1 ? i : undefined}
              // biome-ignore lint/suspicious/noArrayIndexKey: thumbs are positional
              key={i}
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}
