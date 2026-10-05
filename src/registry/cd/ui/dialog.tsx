"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

/**
 * Centered modal window. Enters from `scale(0.96)` + opacity and leaves faster.
 * `position="top"` anchors it to the top (e.g. a command palette). A modal does not grow from its trigger: it sits in the center, so the `transform-origin` is the center.
 * `instant` removes the enter and exit animation, for dialogs opened by a shortcut that people use all the time.
 */
export function DialogPopup({
  className,
  children,
  showClose = true,
  closeLabel = "Close",
  position = "center",
  instant = false,
  ...props
}: DialogPrimitive.Popup.Props & {
  showClose?: boolean;
  closeLabel?: string;
  position?: "center" | "top";
  instant?: boolean;
}): React.ReactElement {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/40",
          !instant &&
            "transition-opacity duration-base ease-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-fast",
        )}
        data-slot="dialog-backdrop"
      />
      <DialogPrimitive.Viewport
        className={cn(
          "fixed inset-0 z-50 grid justify-items-center p-4",
          position === "top" ? "items-start pt-[12vh]" : "items-center",
        )}
        data-slot="dialog-viewport"
      >
        <DialogPrimitive.Popup
          className={cn(
            "relative flex w-full max-w-md flex-col gap-4 rounded-2xl border bg-popover p-6 text-popover-foreground shadow-lg/5 outline-none",
            !instant && "cd-popup",
            className,
          )}
          data-slot="dialog-popup"
          {...props}
        >
          {children}
          {showClose && (
            <DialogPrimitive.Close
              aria-label={closeLabel}
              className="absolute top-3 right-3 grid size-8 place-items-center rounded-md text-muted-foreground outline-none transition-colors duration-base hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
            >
              <XIcon aria-hidden="true" className="size-4" />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Popup>
      </DialogPrimitive.Viewport>
    </DialogPrimitive.Portal>
  );
}

export function DialogHeader({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return <div className={cn("flex flex-col gap-1.5 pe-8", className)} data-slot="dialog-header" {...props} />;
}

export function DialogFooter({ className, ...props }: React.ComponentProps<"div">): React.ReactElement {
  return (
    <div
      className={cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className)}
      data-slot="dialog-footer"
      {...props}
    />
  );
}

export function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props): React.ReactElement {
  return (
    <DialogPrimitive.Title
      className={cn("font-heading font-semibold text-lg leading-tight", className)}
      data-slot="dialog-title"
      {...props}
    />
  );
}

export function DialogDescription({ className, ...props }: DialogPrimitive.Description.Props): React.ReactElement {
  return (
    <DialogPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      data-slot="dialog-description"
      {...props}
    />
  );
}
