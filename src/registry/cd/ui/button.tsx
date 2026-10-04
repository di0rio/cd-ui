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
    /** Mostra um spinner no lugar do conteúdo, mantém a largura e bloqueia cliques. */
    loading?: boolean;
  };

/**
 * Botão. `render` transforma em link sem perder o estilo:
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
          {/* O conteúdo fica invisível pra segurar a largura; o spinner vai por cima, centralizado. */}
          <span className="invisible inline-flex items-center gap-2">{children as React.ReactNode}</span>
          <Spinner className="absolute" />
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  );
}
