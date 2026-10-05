"use client";

import { Field as FieldPrimitive } from "@base-ui/react/field";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Long text. Grows with its content (`field-sizing: content`) without JS. Inside a `Field`, it wires up label and error. */
export function Textarea({ className, ...props }: React.ComponentProps<"textarea">): React.ReactElement {
  return (
    <FieldPrimitive.Control
      className={cn(
        "field-sizing-content min-h-20 w-full min-w-0 rounded-(--radius-field) border border-input bg-background px-3 py-2 text-sm outline-none",
        "transition-[border-color,box-shadow] duration-base ease-out placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
        "data-invalid:border-destructive data-invalid:focus-visible:ring-destructive/25",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      data-slot="textarea"
      render={<textarea />}
      {...(props as FieldPrimitive.Control.Props)}
    />
  );
}
