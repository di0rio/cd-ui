"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDownIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

export function Accordion({ className, ...props }: AccordionPrimitive.Root.Props): React.ReactElement {
  return <AccordionPrimitive.Root className={cn("flex w-full flex-col", className)} data-slot="accordion" {...props} />;
}

export function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props): React.ReactElement {
  return <AccordionPrimitive.Item className={cn("border-b last:border-b-0", className)} data-slot="accordion-item" {...props} />;
}

/** Cabeçalho clicável. O chevron gira 180° em 200ms junto com a abertura do painel. */
export function AccordionTrigger({ className, children, ...props }: AccordionPrimitive.Trigger.Props): React.ReactElement {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 cursor-pointer items-center justify-between gap-4 rounded-md py-3.5 text-left font-medium text-sm outline-none",
          "transition-colors duration-150 ease-out hover:text-foreground/80",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "data-disabled:cursor-not-allowed data-disabled:opacity-50 [&[data-panel-open]>svg]:rotate-180",
          className,
        )}
        data-slot="accordion-trigger"
        {...props}
      >
        {children}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 ease-out motion-reduce:transition-none"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

/** Painel que abre e fecha animando a altura (200ms). Com movimento reduzido, troca sem animar. */
export function AccordionPanel({ className, children, ...props }: AccordionPrimitive.Panel.Props): React.ReactElement {
  return (
    <AccordionPrimitive.Panel
      className={cn(
        "h-(--accordion-panel-height) overflow-hidden text-muted-foreground text-sm",
        "transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none",
        className,
      )}
      data-slot="accordion-panel"
      {...props}
    >
      <div className="pb-4">{children}</div>
    </AccordionPrimitive.Panel>
  );
}
