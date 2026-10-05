"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
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
        "transition-[border-color,box-shadow] duration-150 ease-out hover:bg-accent/50",
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
 * List of options. Opens from the trigger (Base UI's `transform-origin`) and closes faster.
 * With `alignItemWithTrigger`, the chosen item sits over the trigger, as on macOS.
 */
export function SelectPopup({ className, children, ...props }: SelectPrimitive.Popup.Props): React.ReactElement {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner className="z-50 outline-none" sideOffset={6}>
        <SelectPrimitive.Popup
          className={cn(
            "max-h-(--available-height) min-w-(--anchor-width) overflow-y-auto rounded-xl border bg-popover p-1.5 text-popover-foreground shadow-lg/5 outline-none",
            "cd-popup",
            className,
          )}
          data-slot="select-popup"
          {...props}
        >
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({ className, children, ...props }: SelectPrimitive.Item.Props): React.ReactElement {
  return (
    <SelectPrimitive.Item
      className={cn(
        "grid min-h-8 cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
        "data-highlighted:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      data-slot="select-item"
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="col-start-1">
        <CheckIcon aria-hidden="true" className="size-4 text-brand-foreground" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="col-start-2">{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}
