"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Barra de progresso. Passe `value` de 0 a 100; com `value={null}` ela fica indeterminada.
 * O preenchimento anda com ease-out em 300ms. Dê um nome com `aria-label` ou `ProgressLabel`.
 */
export function Progress({ className, ...props }: ProgressPrimitive.Root.Props): React.ReactElement {
  return (
    <ProgressPrimitive.Root className={cn("flex w-full flex-col gap-2", className)} data-slot="progress" {...props}>
      <ProgressPrimitive.Track className="relative h-2 w-full overflow-hidden rounded-full bg-input" data-slot="progress-track">
        <ProgressPrimitive.Indicator
          className={cn(
            "h-full rounded-full bg-brand transition-[width] duration-300 ease-out motion-reduce:transition-none",
            "data-indeterminate:w-2/5 data-indeterminate:animate-pulse data-indeterminate:motion-reduce:animate-none",
          )}
          data-slot="progress-indicator"
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  );
}

export function ProgressLabel({ className, ...props }: ProgressPrimitive.Label.Props): React.ReactElement {
  return <ProgressPrimitive.Label className={cn("font-medium text-sm", className)} data-slot="progress-label" {...props} />;
}

export function ProgressValue({ className, ...props }: ProgressPrimitive.Value.Props): React.ReactElement {
  return <ProgressPrimitive.Value className={cn("text-muted-foreground text-sm tabular-nums", className)} data-slot="progress-value" {...props} />;
}
