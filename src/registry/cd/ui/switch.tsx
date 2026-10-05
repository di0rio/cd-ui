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
