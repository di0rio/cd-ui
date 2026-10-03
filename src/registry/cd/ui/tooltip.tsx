"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Envolva a área (ou o app) com `TooltipProvider`: depois que o primeiro tooltip abre,
 * os vizinhos abrem na hora e sem animação, como numa barra de ferramentas.
 */
export function TooltipProvider({ delay = 400, ...props }: TooltipPrimitive.Provider.Props): React.ReactElement {
  return <TooltipPrimitive.Provider delay={delay} {...props} />;
}

export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

/** Balão do tooltip: nasce do gatilho, 125ms. Os seguintes (`data-instant`) aparecem sem animação. */
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
            "origin-(--transform-origin) rounded-md bg-foreground px-2 py-1 text-background text-xs",
            "transition-[opacity,transform] duration-125 ease-out",
            "data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-starting-style:scale-[0.97] data-starting-style:opacity-0",
            "data-instant:duration-0 motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
            className,
          )}
          data-slot="tooltip-popup"
          {...props}
        />
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}
