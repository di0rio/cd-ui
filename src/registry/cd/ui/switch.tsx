"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** On/off. The thumb slides with ease-in-out and the track turns yellow when on. */
export function Switch({ className, ...props }: SwitchPrimitive.Root.Props): React.ReactElement {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "inline-flex h-5.5 w-9.5 shrink-0 cursor-pointer items-center rounded-full border border-transparent bg-input p-0.5 outline-none",
        "transition-colors duration-base ease-out data-checked:bg-brand",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      data-slot="switch"
      {...props}
    >
      <SwitchPrimitive.Thumb
        className="size-4 rounded-full bg-background shadow-sm/10 transition-transform duration-base ease-in-out data-checked:translate-x-4"
        data-slot="switch-thumb"
      />
    </SwitchPrimitive.Root>
  );
}

/**
 * Setting row: title, description and `Switch` in a `<label>`, so the whole row toggles and names the switch.
 * `className` goes on the row; every other prop goes on the `Switch`.
 */
export function SwitchRow({
  title,
  description,
  className,
  ...props
}: Omit<SwitchPrimitive.Root.Props, "title"> & { title: React.ReactNode; description?: React.ReactNode }): React.ReactElement {
  return (
    <label
      className={cn(
        "group/row flex cursor-pointer items-center justify-between gap-4 rounded-lg outline-none",
        "has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-2 has-focus-visible:ring-offset-background",
        "has-data-disabled:cursor-not-allowed",
        className,
      )}
      data-slot="switch-row"
    >
      <span className="grid gap-0.5 group-has-data-disabled/row:opacity-50">
        <span className="font-medium text-sm">{title}</span>
        {description && <span className="text-muted-foreground text-sm">{description}</span>}
      </span>
      {/* The row draws the focus ring; the switch's own would double it. */}
      <Switch className="focus-visible:ring-0 focus-visible:ring-offset-0" {...props} />
    </label>
  );
}
