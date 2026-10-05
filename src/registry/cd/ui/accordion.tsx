"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

type Indicator = "prompt" | "chevron";

const IndicatorContext = React.createContext<Indicator>("prompt");

/** `indicator="prompt"` (default) is a terminal tree: mono triggers, a `▸` marker and a brand rule beside the open panel. `"chevron"` is the classic look. */
export function Accordion({
  className,
  indicator = "prompt",
  ...props
}: AccordionPrimitive.Root.Props & { indicator?: Indicator }): React.ReactElement {
  return (
    <IndicatorContext.Provider value={indicator}>
      <AccordionPrimitive.Root className={cn("flex w-full flex-col", className)} data-slot="accordion" {...props} />
    </IndicatorContext.Provider>
  );
}

export function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props): React.ReactElement {
  const chevron = React.useContext(IndicatorContext) === "chevron";
  return (
    <AccordionPrimitive.Item className={cn(chevron && "border-b last:border-b-0", className)} data-slot="accordion-item" {...props} />
  );
}

/** Clickable header. The marker turns 90° (prompt) or 180° (chevron) as the panel opens. */
export function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props): React.ReactElement {
  const chevron = React.useContext(IndicatorContext) === "chevron";
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 cursor-pointer items-center gap-2 rounded-md py-3 text-left text-sm outline-none",
          "transition-colors duration-base ease-out hover:text-foreground/80",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "data-disabled:cursor-not-allowed data-disabled:opacity-50",
          chevron
            ? "justify-between gap-4 py-3.5 font-medium [&[data-panel-open]>svg]:rotate-180"
            : "font-mono [&[data-panel-open]>span]:rotate-90 [&[data-panel-open]>span]:text-brand-foreground",
          className,
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {!chevron && (
          <span aria-hidden="true" className="inline-block shrink-0 text-muted-foreground transition-transform duration-fast ease-out">
            ▸
          </span>
        )}
        {children}
        {chevron && (
          <ChevronDownIcon aria-hidden="true" className="size-4 shrink-0 text-muted-foreground transition-transform duration-base ease-out" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/** Panel that opens and closes by animating its height and opacity. With reduced motion it switches without animating. */
export function AccordionPanel({ className, children, ...props }: AccordionPrimitive.Panel.Props): React.ReactElement {
  const chevron = React.useContext(IndicatorContext) === "chevron";
  return (
    <AccordionPrimitive.Panel
      className={cn(
        "h-(--accordion-panel-height) overflow-hidden text-muted-foreground text-sm",
        "transition-[height,opacity] duration-base ease-out data-ending-style:h-0 data-starting-style:h-0 data-ending-style:opacity-0 data-starting-style:opacity-0",
        className,
      )}
      data-slot="accordion-panel"
      {...props}
    >
      <div className={chevron ? "pb-4" : "mb-3 ml-1 border-brand border-l-2 pl-4"}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}
