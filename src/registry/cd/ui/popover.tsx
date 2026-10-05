"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverClose = PopoverPrimitive.Close;

/**
 * Panel that grows from its trigger (Base UI's `transform-origin`) and closes faster.
 * Unlike the tooltip, it accepts interactive content.
 */
export function PopoverPopup({
  className,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  ...props
}: PopoverPrimitive.Popup.Props &
  Pick<PopoverPrimitive.Positioner.Props, "side" | "align" | "sideOffset">): React.ReactElement {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Positioner align={align} className="z-50 outline-none" side={side} sideOffset={sideOffset}>
        <PopoverPrimitive.Popup
          className={cn(
            "w-72 rounded-xl border bg-popover p-4 text-popover-foreground text-sm shadow-lg/5 outline-none",
            "cd-popup",
            className,
          )}
          data-slot="popover-popup"
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
}

export function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props): React.ReactElement {
  return <PopoverPrimitive.Title className={cn("font-heading font-semibold leading-tight", className)} data-slot="popover-title" {...props} />;
}

export function PopoverDescription({ className, ...props }: PopoverPrimitive.Description.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Description className={cn("text-muted-foreground text-sm", className)} data-slot="popover-description" {...props} />
  );
}
