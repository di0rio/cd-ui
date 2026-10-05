"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Wrap the area (or the app) with `TooltipProvider`: after the first tooltip opens,
 * its neighbors open instantly and without animation, as in a toolbar.
 */
export function TooltipProvider({ delay = 400, ...props }: TooltipPrimitive.Provider.Props): React.ReactElement {
  return <TooltipPrimitive.Provider delay={delay} {...props} />;
}

export const Tooltip = TooltipPrimitive.Root;
/**
 * Tooltip trigger. With `render` (e.g. `render={<Button />}`), put `onClick`, `aria-label` and
 * other handlers here on `TooltipTrigger`, not on the element passed to `render`: in a production build the
 * `onClick` of the element passed in `render` may not fire.
 */
export const TooltipTrigger = TooltipPrimitive.Trigger;

/** Tooltip bubble: grows from the trigger. The following ones (`data-instant`) appear without animation. */
export function TooltipPopup({
  className,
  side = "top",
  sideOffset = 6,
  ...props
}: TooltipPrimitive.Popup.Props & Pick<TooltipPrimitive.Positioner.Props, "side" | "sideOffset">): React.ReactElement {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner className="z-50" side={side} sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          className={cn(
            "cd-popup rounded-xs bg-foreground px-2 py-1 text-background text-xs",
            className,
          )}
          data-slot="tooltip-popup"
          {...props}
        />
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}
