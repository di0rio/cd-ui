"use client";

import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { CheckIcon, ChevronRightIcon, SearchIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { Kbd } from "@/registry/cd/ui/kbd";

export const DropdownMenu = MenuPrimitive.Root;
export const DropdownMenuTrigger = MenuPrimitive.Trigger;
export const DropdownMenuGroup = MenuPrimitive.Group;
export const DropdownMenuRadioGroup = MenuPrimitive.RadioGroup;
export const DropdownMenuSub = MenuPrimitive.SubmenuRoot;

// The highlighted row gets a brand tint and a cursor-yellow bar on its left edge, like the line under a terminal cursor.
const itemClass = cn(
  "relative flex min-h-8 cursor-default items-center gap-2.5 rounded-sm px-2.5 text-sm outline-none select-none",
  "before:absolute before:inset-y-1.5 before:left-0 before:w-0.5 before:rounded-full before:bg-brand before:opacity-0 before:transition-opacity before:duration-fast",
  "data-highlighted:bg-brand/12 data-highlighted:before:opacity-100 data-disabled:pointer-events-none data-disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
);

/**
 * List of actions. Opens from the trigger (Base UI's `transform-origin`), scales and fades in, closes faster and
 * appears instantly when opened with the keyboard. In submenus, Base UI picks the side and alignment on its own.
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
            "max-h-(--available-height) min-w-52 overflow-y-auto overscroll-contain rounded-md border bg-popover p-1 text-popover-foreground shadow-lg/5 outline-none",
            "cd-popup",
            className,
          )}
          data-slot="dropdown-menu-popup"
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

type ItemExtras = {
  /** Icon at the start of the row. */
  icon?: React.ReactNode;
  /** A second, muted line under the label. */
  description?: React.ReactNode;
  /** Shortcut text at the end of the row, in mono. Visual only: the shortcut itself is yours. */
  shortcut?: React.ReactNode;
};

function ItemBody({ icon, description, shortcut, children }: ItemExtras & { children?: React.ReactNode }): React.ReactElement {
  return (
    <>
      {icon && <span className="grid shrink-0 place-items-center text-muted-foreground in-data-highlighted:text-foreground">{icon}</span>}
      {description ? (
        <span className="flex min-w-0 flex-col py-1 leading-tight">
          <span>{children}</span>
          <span className="mt-0.5 text-muted-foreground text-xs">{description}</span>
        </span>
      ) : (
        children
      )}
      {shortcut && <DropdownMenuShortcut>{shortcut}</DropdownMenuShortcut>}
    </>
  );
}

type DropdownMenuItemProps = MenuPrimitive.Item.Props &
  ItemExtras & {
    variant?: "default" | "destructive";
    /** The first click arms the item and the second one runs it (back to idle after 3 seconds). For deletes. */
    confirm?: boolean;
    /** Text shown while armed. */
    confirmLabel?: string;
  };

/**
 * One action. Add `icon`, `description` and `shortcut` for a richer row, or `confirm` so a destructive action needs two clicks
 * (Enter twice from the keyboard). For type to select, pass a plain-text `label` when the children are not plain text.
 */
export function DropdownMenuItem({
  className,
  variant = "default",
  icon,
  description,
  shortcut,
  confirm = false,
  confirmLabel = "Click again to confirm",
  closeOnClick,
  onClick,
  children,
  ...props
}: DropdownMenuItemProps): React.ReactElement {
  const [armed, setArmed] = React.useState(false);

  React.useEffect(() => {
    if (!armed) return;
    const id = window.setTimeout(() => setArmed(false), 3000);
    return () => window.clearTimeout(id);
  }, [armed]);

  return (
    <MenuPrimitive.Item
      className={cn(
        itemClass,
        variant === "destructive" && "text-destructive-foreground data-highlighted:bg-destructive/10 data-highlighted:before:bg-destructive",
        armed && "bg-destructive text-white data-highlighted:bg-destructive data-highlighted:before:opacity-0",
        className,
      )}
      closeOnClick={confirm ? armed : closeOnClick}
      data-armed={armed ? "" : undefined}
      data-slot="dropdown-menu-item"
      onClick={(event) => {
        if (confirm && !armed) {
          setArmed(true);
          return;
        }
        onClick?.(event);
      }}
      {...props}
    >
      {armed ? <ItemBody icon={icon}>{confirmLabel}</ItemBody> : (
        <ItemBody description={description} icon={icon} shortcut={shortcut}>
          {children}
        </ItemBody>
      )}
    </MenuPrimitive.Item>
  );
}

export function DropdownMenuCheckboxItem({ className, children, ...props }: MenuPrimitive.CheckboxItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.CheckboxItem className={cn(itemClass, "pl-8", className)} data-slot="dropdown-menu-checkbox-item" {...props}>
      <MenuPrimitive.CheckboxItemIndicator className="absolute left-2.5 flex size-4 items-center justify-center">
        <CheckIcon aria-hidden="true" className="size-4 text-brand-foreground" />
      </MenuPrimitive.CheckboxItemIndicator>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

export function DropdownMenuRadioItem({ className, children, ...props }: MenuPrimitive.RadioItem.Props): React.ReactElement {
  return (
    <MenuPrimitive.RadioItem className={cn(itemClass, "pl-8", className)} data-slot="dropdown-menu-radio-item" {...props}>
      <MenuPrimitive.RadioItemIndicator className="absolute left-2.5 flex size-4 items-center justify-center">
        <CheckIcon aria-hidden="true" className="size-4 text-brand-foreground" />
      </MenuPrimitive.RadioItemIndicator>
      {children}
    </MenuPrimitive.RadioItem>
  );
}

export function DropdownMenuSubTrigger({
  className,
  children,
  icon,
  description,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & Pick<ItemExtras, "icon" | "description">): React.ReactElement {
  return (
    <MenuPrimitive.SubmenuTrigger className={cn(itemClass, "data-popup-open:bg-brand/12", className)} data-slot="dropdown-menu-sub-trigger" {...props}>
      <ItemBody description={description} icon={icon}>
        {children}
      </ItemBody>
      <ChevronRightIcon aria-hidden="true" className="ml-auto text-muted-foreground" />
    </MenuPrimitive.SubmenuTrigger>
  );
}

/** Section title in mono small caps, like a comment line (`// recent`). */
export function DropdownMenuLabel({ className, ...props }: MenuPrimitive.GroupLabel.Props): React.ReactElement {
  return (
    <MenuPrimitive.GroupLabel
      className={cn("px-2.5 pt-2 pb-1 font-mono text-[11px] text-muted-foreground uppercase tracking-wider", className)}
      data-slot="dropdown-menu-label"
      {...props}
    />
  );
}

export function DropdownMenuSeparator({ className, ...props }: MenuPrimitive.Separator.Props): React.ReactElement {
  return <MenuPrimitive.Separator className={cn("-mx-1 my-1 h-px bg-border", className)} data-slot="dropdown-menu-separator" {...props} />;
}

/** Shortcut text aligned to the right of the item, in mono (visual only: the shortcut itself is yours). */
export function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): React.ReactElement {
  return <span className={cn("ml-auto ps-4 font-mono text-[11px] text-muted-foreground tracking-wide", className)} data-slot="dropdown-menu-shortcut" {...props} />;
}

/**
 * Search field pinned to the top of the menu. It only holds the text: filter your own items with it (see `matchesMenuQuery`).
 * Typing does not trigger the menu's type to select, Arrow Down moves to the first item and Esc closes the menu.
 */
export function DropdownMenuSearch({ className, onKeyDown, ...props }: Omit<React.ComponentProps<"input">, "type">): React.ReactElement {
  return (
    <div className="sticky top-0 z-1 -mx-1 -mt-1 mb-1 flex items-center gap-2 border-b bg-popover px-3" data-slot="dropdown-menu-search">
      <SearchIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground" />
      <input
        autoComplete="off"
        className={cn("h-9 w-full min-w-0 bg-transparent font-mono text-sm outline-none placeholder:text-muted-foreground", className)}
        onKeyDown={(event) => {
          onKeyDown?.(event);
          if (event.defaultPrevented) return;
          if (event.key === "ArrowDown") {
            event.preventDefault();
            event.currentTarget.closest<HTMLElement>('[data-slot="dropdown-menu-popup"]')?.querySelector<HTMLElement>('[role^="menuitem"]')?.focus();
          } else if (event.key !== "Escape" && event.key !== "Tab") {
            event.stopPropagation();
          }
        }}
        spellCheck={false}
        type="text"
        {...props}
      />
    </div>
  );
}

/** True when `text` contains the query, case-insensitive. An empty query matches everything. */
export function matchesMenuQuery(text: string, query: string): boolean {
  const q = query.trim().toLowerCase();
  return !q || text.toLowerCase().includes(q);
}

/** Text for when the search matches nothing. */
export function DropdownMenuEmpty({ className, ...props }: React.ComponentProps<"p">): React.ReactElement {
  return <p className={cn("px-2.5 py-4 text-center text-muted-foreground text-sm", className)} data-slot="dropdown-menu-empty" role="status" {...props} />;
}

/** Remembers the last `limit` ids that were chosen, newest first. Feed it to a "Recent" section. */
export function useRecentItems<Id extends string>(limit = 3) {
  const [recent, setRecent] = React.useState<readonly Id[]>([]);
  return { recent, push: (id: Id) => setRecent((r) => [id, ...r.filter((x) => x !== id)].slice(0, limit)) };
}

/** Keyboard hints at the bottom of the menu. Pass children to write your own. Hidden on touch screens. */
export function DropdownMenuFooter({ className, children, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "sticky bottom-0 -mx-1 -mb-1 mt-1 flex items-center gap-3 border-t bg-popover px-3 py-1.5 font-mono text-[11px] text-muted-foreground pointer-coarse:hidden",
        className,
      )}
      data-slot="dropdown-menu-footer"
      {...props}
    >
      {children ?? (
        <>
          <span className="inline-flex items-center gap-1">
            <Kbd>↑↓</Kbd> move
          </span>
          <span className="inline-flex items-center gap-1">
            <Kbd>↵</Kbd> select
          </span>
          <span className="inline-flex items-center gap-1">
            <Kbd>esc</Kbd> close
          </span>
        </>
      )}
    </div>
  );
}
