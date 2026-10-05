"use client";

import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export function Tabs({ className, ...props }: TabsPrimitive.Root.Props): React.ReactElement {
  return <TabsPrimitive.Root className={cn("flex flex-col gap-3", className)} data-slot="tabs" {...props} />;
}

/**
 * Tab list with an indicator that slides to the active tab (position from Base UI's CSS vars).
 * On screen it moves with a strong ease-in-out; with reduced motion it switches without sliding.
 */
export function TabsList({ className, children, ...props }: TabsPrimitive.List.Props): React.ReactElement {
  return (
    <TabsPrimitive.List
      className={cn("relative z-0 flex w-fit items-center gap-1 rounded-lg border bg-background p-1", className)}
      data-slot="tabs-list"
      {...props}
    >
      {children}
      <TabsPrimitive.Indicator
        className={cn(
          "absolute top-(--active-tab-top) left-0 -z-10 h-(--active-tab-height) w-(--active-tab-width) translate-x-(--active-tab-left) rounded-md bg-foreground",
          "transition-[translate,width] duration-base ease-in-out",
        )}
        data-slot="tabs-indicator"
      />
    </TabsPrimitive.List>
  );
}

export function TabsTab({ className, ...props }: TabsPrimitive.Tab.Props): React.ReactElement {
  return (
    <TabsPrimitive.Tab
      className={cn(
        "h-8 cursor-pointer rounded-md px-3.5 font-medium text-muted-foreground text-sm outline-none",
        "transition-colors duration-base ease-out hover:text-foreground",
        "data-active:text-background data-active:hover:text-background",
        "focus-visible:ring-2 focus-visible:ring-ring data-disabled:pointer-events-none data-disabled:opacity-50",
        className,
      )}
      data-slot="tabs-tab"
      {...props}
    />
  );
}

export function TabsPanel({ className, ...props }: TabsPrimitive.Panel.Props): React.ReactElement {
  return <TabsPrimitive.Panel className={cn("outline-none", className)} data-slot="tabs-panel" {...props} />;
}
