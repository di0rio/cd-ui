"use client";

import { OTPField } from "@base-ui/react/otp-field";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** One-time code: one box per digit with auto-advance, backspace, arrow keys and paste. Numeric by default; the browser can fill it from an SMS. */
export function OtpInput({
  className,
  length = 6,
  invalid,
  ...props
}: Omit<OTPField.Root.Props, "length" | "children"> & { length?: number; invalid?: boolean }): React.ReactElement {
  return (
    <OTPField.Root
      aria-label="Verification code"
      className={cn("flex gap-2", className)}
      data-slot="otp-input"
      length={length}
      {...props}
    >
      {Array.from({ length }, (_, i) => (
        <OTPField.Input
          // The first box is named by the group's label; Base UI ignores `aria-label` there.
          aria-invalid={invalid || undefined}
          aria-label={i === 0 ? undefined : `Digit ${i + 1} of ${length}`}
          className={cn(
            "h-12 w-11 rounded-(--radius-field) border border-input bg-background text-center font-mono text-xl outline-none",
            "transition-[border-color,box-shadow] duration-base ease-out",
            "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
            "aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/25",
            "data-disabled:cursor-not-allowed data-disabled:opacity-50",
          )}
          key={i}
        />
      ))}
    </OTPField.Root>
  );
}
