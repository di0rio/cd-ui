"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Campo de texto. Dentro de um `Field`, liga label, descrição e erro sozinho. */
export function Input({ className, ...props }: InputPrimitive.Props): React.ReactElement {
  return (
    <InputPrimitive
      className={cn(
        "h-9 w-full min-w-0 rounded-lg border border-input bg-background px-3 text-sm outline-none",
        "transition-[border-color,box-shadow] duration-150 ease-out placeholder:text-muted-foreground",
        "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
        "data-invalid:border-destructive data-invalid:focus-visible:ring-destructive/25",
        "data-disabled:cursor-not-allowed data-disabled:opacity-50",
        // type="file": o botão nativo vira um chip discreto dentro do campo, centralizado na altura.
        "file:me-3 file:-ms-1.5 file:h-6.5 file:cursor-pointer file:rounded-md file:border-0 file:bg-accent file:px-2.5 file:font-medium file:text-foreground file:text-[13px] file:transition-colors file:duration-150 hover:file:bg-muted",
        "[&[type=file]]:py-1 [&[type=file]]:text-muted-foreground",
        className,
      )}
      data-slot="input"
      {...props}
    />
  );
}
