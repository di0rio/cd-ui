"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

const DEFAULT_DELAY = 250;
const DelayContext = React.createContext(DEFAULT_DELAY);

/**
 * Optional. Wrap the area (or the app) with `TooltipProvider`: after the first tooltip opens,
 * its neighbors open instantly and without animation, as in a toolbar.
 */
export function TooltipProvider({ delay = DEFAULT_DELAY, closeDelay = 0, ...props }: TooltipPrimitive.Provider.Props): React.ReactElement {
  return (
    <DelayContext value={delay}>
      <TooltipPrimitive.Provider closeDelay={closeDelay} delay={delay} {...props} />
    </DelayContext>
  );
}

export const Tooltip = TooltipPrimitive.Root;

/**
 * Tooltip trigger. Opens after 250ms (or the `TooltipProvider` delay). With `render` (e.g. `render={<Button />}`),
 * put `onClick`, `aria-label` and other handlers here on `TooltipTrigger`, not on the element passed to `render`: in a
 * production build the `onClick` of the element passed in `render` may not fire.
 */
export function TooltipTrigger({ delay, ...props }: TooltipPrimitive.Trigger.Props): React.ReactElement {
  const providerDelay = React.useContext(DelayContext);
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" delay={delay ?? providerDelay} {...props} />;
}

/**
 * Tooltip bubble, in the style of Material: small, dense text that grows from the trigger.
 * The following ones (`data-instant`) appear without animation.
 */
export function TooltipPopup({
  className,
  side = "top",
  sideOffset = 8,
  arrow = false,
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<TooltipPrimitive.Positioner.Props, "side" | "sideOffset"> & {
    /** Little triangle pointing at the trigger. */
    arrow?: boolean;
  }): React.ReactElement {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner className="z-50" side={side} sideOffset={sideOffset}>
        <TooltipPrimitive.Popup
          className={cn(
            // Bigger scale jump than other popups: the bubble is small, so it needs the travel to read.
            "cd-popup max-w-[300px] break-words rounded-xs bg-foreground/92 px-2 py-1 font-medium text-[0.6875rem] text-background leading-[1.4] [--cd-scale-enter:0.75] motion-reduce:[--cd-scale-enter:1]",
            className,
          )}
          data-slot="tooltip-popup"
          {...props}
        >
          {children}
          {arrow && (
            <TooltipPrimitive.Arrow
              className="flex data-[side=bottom]:top-[-6px] data-[side=left]:right-[-9px] data-[side=left]:rotate-90 data-[side=right]:left-[-9px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-6px] data-[side=top]:rotate-180"
              data-slot="tooltip-arrow"
            >
              <svg aria-hidden="true" height="6" viewBox="0 0 12 6" width="12">
                <path className="fill-foreground/92" d="M0 6 6 0l6 6Z" />
              </svg>
            </TooltipPrimitive.Arrow>
          )}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  );
}

/**
 * Shortcut for the common case: `<Tip content="Bold"><Button aria-label="Bold" size="icon-sm" /></Tip>`.
 * `children` is the trigger element (it receives the tooltip's props).
 */
export function Tip({
  content,
  children,
  side,
  sideOffset,
  arrow,
}: {
  content: React.ReactNode;
  children: React.ReactElement;
} & Pick<React.ComponentProps<typeof TooltipPopup>, "side" | "sideOffset" | "arrow">): React.ReactElement {
  return (
    <Tooltip>
      <TooltipTrigger render={children} />
      <TooltipPopup arrow={arrow} side={side} sideOffset={sideOffset}>
        {content}
      </TooltipPopup>
    </Tooltip>
  );
}
