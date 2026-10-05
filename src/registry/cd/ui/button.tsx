"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { buttonVariants } from "@/registry/cd/ui/button-variants";
import { Spinner } from "@/registry/cd/ui/spinner";

export { buttonVariants };

export type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    /** Shows a spinner in place of the content, keeps the width and blocks clicks. */
    loading?: boolean;
  };

/**
 * Button. `render` turns it into a link without losing the style:
 * `<Button render={<a href="/x" />} nativeButton={false}>ir</Button>`.
 */
export function Button({
  className,
  variant,
  size,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps): React.ReactElement {
  return (
    <ButtonPrimitive
      aria-busy={loading || undefined}
      className={cn(buttonVariants({ variant, size }), className)}
      data-loading={loading ? "" : undefined}
      data-slot="button"
      disabled={disabled || loading}
      focusableWhenDisabled={loading}
      {...props}
    >
      {loading ? (
        <>
          {/* The content stays invisible to hold the width; the spinner sits on top, centered. */}
          <span className="invisible inline-flex items-center gap-2">{children as React.ReactNode}</span>
          <Spinner className="absolute" />
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  );
}
