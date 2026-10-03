"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

/**
 * Janela modal centralizada. Entra de `scale(0.96)` + opacidade em 200ms e sai mais rápido (150ms).
 * Modal não nasce do gatilho: fica no centro, então o `transform-origin` é o centro mesmo.
 */
export function DialogPopup({
  className,
  children,
  showClose = true,
  closeLabel = "Close",
  ...props
}: DialogPrimitive.Popup.Props & { showClose?: boolean; closeLabel?: string }): React.ReactElement {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Backdrop
        className={cn(
          "fixed inset-0 z-50 bg-black/40 transition-opacity duration-200 ease-out",
          "data-ending-style:opacity-0 data-starting-style:opacity-0 data-ending-style:duration-150",
        )}
        data-slot="dialog-backdrop"
      />
      <DialogPrimitive.Viewport className="fixed inset-0 z-50 grid place-items-center p-4" data-slot="dialog-viewport">
        <DialogPrimitive.Popup
          className={cn(
            "relative flex w-full max-w-md flex-col gap-4 rounded-2xl border bg-popover p-6 text-popover-foreground shadow-lg/5 outline-none",
            "transition-[opacity,transform] duration-200 ease-out",
            "data-ending-style:scale-[0.96] data-ending-style:opacity-0 data-ending-style:duration-150",
            "data-starting-style:scale-[0.96] data-starting-style:opacity-0",
            "motion-reduce:data-ending-style:scale-100 motion-reduce:data-starting-style:scale-100",
            className,
          )}
          data-slot="dialog-popup"
          {...props}
        >
          {children}
          {showClose && (
            <DialogPrimitive.Close
              aria-label={closeLabel}
              className="absolute top-3 right-3 grid size-8 place-items-center rounded-md text-muted-foreground outline-none transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
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
