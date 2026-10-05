import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "relative inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-(--radius-button) border font-medium outline-none",
    // Click feedback: sinks 2% fast. Colors fade on the base duration.
    "transition-[color,background-color,border-color,transform] duration-instant ease-out motion-safe:active:scale-[0.98]",
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
