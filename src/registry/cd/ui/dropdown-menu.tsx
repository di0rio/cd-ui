"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const DropdownMenu = MenuPrimitive.Root;
export const DropdownMenuTrigger = MenuPrimitive.Trigger;
export const DropdownMenuGroup = MenuPrimitive.Group;
export const DropdownMenuRadioGroup = MenuPrimitive.RadioGroup;
export const DropdownMenuSub = MenuPrimitive.SubmenuRoot;

const itemClass = cn(
  "relative flex min-h-8 cursor-default items-center gap-2 rounded-md px-2 text-sm outline-none select-none",
  "data-highlighted:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
);

/**
 * Lista de ações. Abre a partir do gatilho (`transform-origin` do Base UI) em 150ms e fecha em 100ms.
 * Em submenus, o Base UI escolhe o lado e o alinhamento sozinho.
 */
export function DropdownMenuPopup({
  className,
  side,
  align,
  sideOffset = 6,
  ...props
}: MenuPrimitive.Popup.Props & Pick<MenuPrimitive.Positioner.Props, "side" | "align" | "sideOffset">): React.ReactElement {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner align={align} className="z-50 outline-none" side={side} sideOffset={sideOffset}>
        <MenuPrimitive.Popup
          className={cn(
            "max-h-(--available-height) min-w-44 origin-(--transform-origin) overflow-y-auto rounded-xl border bg-popover p-1 text-popover-foreground shadow-lg/5 outline-none",
            "transition-[opacity,transform] duration-150 ease-out",
            "data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-ending-style:duration-100",
            "data-starting-style:scale-[0.97] data-starting-style:opacity-0",
            "motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
            className,
          )}
          data-slot="dropdown-menu-popup"
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

export function DropdownMenuItem({
  className,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & { variant?: "default" | "destructive" }): React.ReactElement {
  return (
    <MenuPrimitive.Item
      className={cn(itemClass, variant === "destructive" && "text-destructive-foreground data-highlighted:bg-destructive/10", className)}
      data-slot="dropdown-menu-item"
      {...props}
    />
  );
}

export function DropdownMenuCheckboxItem({ className, children, ...props }: MenuPrimitive.CheckboxItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.CheckboxItem className={cn(itemClass, "pl-8", className)} data-slot="dropdown-menu-checkbox-item" {...props}>
      <MenuPrimitive.CheckboxItemIndicator className="absolute left-2 flex size-4 items-center justify-center">
        <CheckIcon aria-hidden="true" className="size-4 text-brand-foreground" />
      </MenuPrimitive.CheckboxItemIndicator>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioItem({ className, children, ...props }: MenuPrimitive.RadioItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.RadioItem className={cn(itemClass, "pl-8", className)} data-slot="dropdown-menu-radio-item" {...props}>
      <MenuPrimitive.RadioItemIndicator className="absolute left-2 flex size-4 items-center justify-center">
        <CheckIcon aria-hidden="true" className="size-4 text-brand-foreground" />
      </MenuPrimitive.RadioItemIndicator>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

export function DropdownMenuSubTrigger({ className, children, ...props }: MenuPrimitive.SubmenuTrigger.Props): React.ReactElement {
  return (
    <MenuPrimitive.SubmenuTrigger
      className={cn(itemClass, "data-popup-open:bg-accent", className)}
      data-slot="dropdown-menu-sub-trigger"
      {...props}
    >
      {children}
      <ChevronRightIcon aria-hidden="true" className="ml-auto text-muted-foreground" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

export function DropdownMenuLabel({ className, ...props }: MenuPrimitive.GroupLabel.Props): React.ReactElement {
  return (
    <MenuPrimitive.GroupLabel
      className={cn("px-2 py-1.5 font-medium text-muted-foreground text-xs", className)}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

export function DropdownMenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props): React.ReactElement {
  return <MenuPrimitive.Separator className={cn("-mx-1 my-1 h-px bg-border", className)} data-slot="dropdown-menu-separator" {...props} />;
}

/** Texto de atalho alinhado à direita do item (apenas visual: o atalho em si é seu). */
export function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): React.ReactElement {
  return <span className={cn("ml-auto text-muted-foreground text-xs tracking-wide", className)} data-slot="dropdown-menu-shortcut" {...props} />;
}
