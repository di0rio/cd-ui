"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronDownIcon, ChevronsUpDownIcon, ChevronUpIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const Select = SelectPrimitive.Root;

export function SelectTrigger({
  className,
  children,
  ...props
}: SelectPrimitive.Trigger.Props): React.ReactElement {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "inline-flex h-9 w-full min-w-40 cursor-pointer items-center justify-between gap-2 rounded-(--radius-field) border border-input bg-background px-3 text-sm outline-none",
        "transition-[border-color,box-shadow] duration-base ease-out hover:border-foreground/30",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 data-popup-open:border-ring",
        "data-invalid:border-destructive data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      data-slot="select-trigger"
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="text-muted-foreground">
        <ChevronsUpDownIcon aria-hidden="true" className="size-4" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

export function SelectValue({ className, ...props }: SelectPrimitive.Value.Props): React.ReactElement {
  return (
    <SelectPrimitive.Value
      className={cn("truncate data-placeholder:text-muted-foreground", className)}
      data-slot="select-value"
      {...props}
    />
  );
}

/**
 * List of options. Opens below (or above) the trigger, growing from it (Base UI's `transform-origin`), and closes faster.
 * With `alignItemWithTrigger`, the chosen item sits over the trigger, as on macOS.
 */
export function SelectPopup({
  className,
  children,
  alignItemWithTrigger = false,
  ...props
}: SelectPrimitive.Popup.Props & Pick<SelectPrimitive.Positioner.Props, "alignItemWithTrigger">): React.ReactElement {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner alignItemWithTrigger={alignItemWithTrigger} className="z-50 outline-none" sideOffset={6}>
        <SelectPrimitive.Popup
          className={cn(
            // p-1 + border + item px-2 = the trigger's 13px: the item text lines up with the trigger text.
            "flex max-h-(--available-height) w-max max-w-(--available-width) min-w-(--anchor-width) flex-col rounded-xl border bg-popover p-1 text-popover-foreground shadow-lg/5 outline-none",
            "cd-popup",
            className,
          )}
          data-slot="select-popup"
          {...props}
        >
          <SelectScrollArrow direction="up" />
          <SelectPrimitive.List className="min-h-0 flex-1 overflow-y-auto">{children}</SelectPrimitive.List>
          <SelectScrollArrow direction="down" />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

/** Appears at the edge of a list taller than the screen; hovering it scrolls. */
function SelectScrollArrow({ direction }: { direction: "up" | "down" }): React.ReactElement {
  const Arrow = direction === "up" ? SelectPrimitive.ScrollUpArrow : SelectPrimitive.ScrollDownArrow;
  const Icon = direction === "up" ? ChevronUpIcon : ChevronDownIcon;
  return (
    <Arrow
      className="z-10 flex h-5 w-full shrink-0 cursor-default items-center justify-center text-muted-foreground"
      data-slot={`select-scroll-${direction}-arrow`}
    >
      <Icon aria-hidden="true" className="size-4" />
    </Arrow>
  );
}

export function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props): React.ReactElement {
  return (
    <SelectPrimitive.Item
      className={cn(
        "grid min-h-8 cursor-default grid-cols-[1fr_1rem] items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
        "data-highlighted:bg-foreground/8 data-selected:font-medium data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      data-slot="select-item"
      {...props}
    >
      <SelectPrimitive.ItemText className="col-start-1 truncate">{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="col-start-2">
        <CheckIcon aria-hidden="true" className="size-4 text-brand-foreground" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
}

export const SelectGroup = SelectPrimitive.Group;

export function SelectGroupLabel({ className, ...props }: SelectPrimitive.GroupLabel.Props): React.ReactElement {
  return (
    <SelectPrimitive.GroupLabel
      className={cn("px-2 py-1.5 font-medium text-muted-foreground text-xs", className)}
      data-slot="select-group-label"
      {...props}
    />
  );
}

export function SelectSeparator({ className, ...props }: SelectPrimitive.Separator.Props): React.ReactElement {
  return <SelectPrimitive.Separator className={cn("-mx-1 my-1 h-px bg-border", className)} data-slot="select-separator" {...props} />;
}
