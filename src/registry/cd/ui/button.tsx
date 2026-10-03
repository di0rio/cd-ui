"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { Spinner } from "@/registry/cd/ui/spinner";

export const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-medium outline-none",
    // Resposta ao clique: afunda 2% em 100ms. Cores trocam em 150ms.
    "transition-[color,background-color,border-color,transform] duration-100 ease-out motion-safe:active:scale-[0.98]",
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "data-disabled:pointer-events-none data-disabled:opacity-50 data-loading:opacity-100",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: "border-transparent bg-foreground text-background hover:bg-foreground/85",
        brand: "border-transparent bg-brand text-brand-contrast hover:bg-brand/85",
        outline: "border-border bg-background hover:bg-accent",
        ghost: "border-transparent hover:bg-accent",
        link: "border-transparent text-brand-foreground underline-offset-4 hover:underline motion-safe:active:scale-100",
        destructive: "border-transparent bg-destructive text-white hover:bg-destructive/85",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-9 px-3.5 text-sm",
        lg: "h-10 px-4 text-base",
        icon: "size-9",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

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
