"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import { XIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Fires notifications: `const toast = useToast(); toast.add({ title, description, type })`. */
export const useToast = ToastPrimitive.useToastManager;
export const createToastManager = ToastPrimitive.createToastManager;

function ToastList({ closeLabel }: { closeLabel: string }): React.ReactElement {
  const { toasts } = ToastPrimitive.useToastManager();

  return (
    <>
      {toasts.map((toast) => (
        <ToastPrimitive.Root
          className={cn(
            "[--gap:0.75rem] [--peek:0.75rem] [--scale:calc(max(0,1-(var(--toast-index)*0.1)))] [--shrink:calc(1-var(--scale))] [--height:var(--toast-frontmost-height,var(--toast-height))]",
            "[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]",
            "absolute right-0 bottom-0 left-auto z-[calc(1000-var(--toast-index))] h-(--height) w-full origin-bottom select-none rounded-xl border bg-popover text-popover-foreground shadow-lg/5",
            "[transform:translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)-(var(--toast-index)*var(--peek))-(var(--shrink)*var(--height))))_scale(var(--scale))]",
            "transition-[transform,opacity] duration-slow ease-out after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",
            "data-expanded:h-(--toast-height) data-expanded:[transform:translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",
            "data-limited:opacity-0 data-ending-style:opacity-0 data-starting-style:[transform:translateY(150%)]",
            "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:[transform:translateY(150%)]",
            "data-ending-style:data-[swipe-direction=down]:[transform:translateY(calc(var(--toast-swipe-movement-y)+150%))]",
            "data-ending-style:data-[swipe-direction=up]:[transform:translateY(calc(var(--toast-swipe-movement-y)-150%))]",
            "data-ending-style:data-[swipe-direction=left]:[transform:translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",
            "data-ending-style:data-[swipe-direction=right]:[transform:translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",
            "data-[type=error]:border-destructive/40 data-[type=success]:border-brand/60",
            "motion-reduce:transition-[opacity] motion-reduce:data-starting-style:opacity-0",
          )}
          data-slot="toast"
          key={toast.id}
          toast={toast}
        >
          <ToastPrimitive.Content className="flex items-start gap-3 overflow-hidden p-4 transition-opacity duration-base ease-out data-behind:opacity-0 data-expanded:opacity-100">
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <ToastPrimitive.Title className="font-medium text-sm" data-slot="toast-title" />
              <ToastPrimitive.Description className="text-muted-foreground text-sm" data-slot="toast-description" />
            </div>
            <ToastPrimitive.Close
              aria-label={closeLabel}
              className="-mt-1 -mr-1 grid size-7 shrink-0 cursor-pointer place-items-center rounded-md text-muted-foreground outline-none transition-colors duration-base hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              data-slot="toast-close"
            >
              <XIcon aria-hidden="true" className="size-4" />
            </ToastPrimitive.Close>
          </ToastPrimitive.Content>
        </ToastPrimitive.Root>
      ))}
    </>
  );
}

/**
 * Wrap the app (or the area) with `ToastProvider`: it renders the notification stack in the screen corner.
 * Toasts stack, expand on hover, disappear on their own (5s) and leave with a swipe.
 */
export function ToastProvider({
  children,
  closeLabel = "Close",
  ...props
}: ToastPrimitive.Provider.Props & { closeLabel?: string }): React.ReactElement {
  return (
    <ToastPrimitive.Provider {...props}>
      {children}
      <ToastPrimitive.Portal>
        <ToastPrimitive.Viewport
          className="fixed right-4 bottom-4 z-50 mx-auto w-[calc(100vw-2rem)] sm:right-6 sm:bottom-6 sm:w-90"
          data-slot="toast-viewport"
        >
          <ToastList closeLabel={closeLabel} />
        </ToastPrimitive.Viewport>
      </ToastPrimitive.Portal>
    </ToastPrimitive.Provider>
  );
}
