"use client";

import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/cd/ui/avatar";
import { Button, type ButtonProps } from "@/registry/cd/ui/button";

export type AvatarButtonProps = ButtonProps & {
  /** Picture of the character. A transparent SVG or PNG works best. */
  src?: string;
  /** Shown while the picture loads or if it fails. */
  fallback?: React.ReactNode;
  /** The avatar blinks (a quick squash) every few seconds. Off under reduced motion. */
  blink?: boolean;
};

// The avatar sticks out above the button, so each size gets a bigger circle and a left shift.
const avatarSize = { sm: "size-9 -ml-1.5", md: "size-11 -ml-2", lg: "size-12 -ml-2", icon: "size-11", "icon-sm": "size-9" } as const;

/**
 * Button with a cartoon avatar that peeks over its edge: it tilts on hover, squashes on press and can blink.
 * A Button underneath: every Button prop works, and so do wrappers like `<Confetti>`.
 */
export function AvatarButton({ src, fallback, blink = false, variant = "cartoon", size = "md", className, children, ...props }: AvatarButtonProps): React.ReactElement {
  return (
    <Button className={cn("group/avatar-button gap-2.5", className)} data-slot="avatar-button" size={size} variant={variant} {...props}>
      <Avatar
        className={cn(
          "-translate-y-1 overflow-visible rounded-full border-(length:--cartoon-border,2px) border-(color:--cartoon-ink,#1c1c1c) bg-card",
          "origin-bottom transition-[translate,rotate,scale] duration-(--cd-duration-base) ease-(--cd-ease-spring,cubic-bezier(0.34,1.56,0.64,1))",
          "motion-safe:group-hover/avatar-button:-translate-y-2 motion-safe:group-hover/avatar-button:-rotate-[9deg]",
          "motion-safe:group-active/avatar-button:translate-y-0 motion-safe:group-active/avatar-button:scale-[1.12_0.88]",
          "motion-safe:group-active/avatar-button:duration-(--cd-duration-instant)",
          blink && "motion-safe:animate-avatar-blink",
          avatarSize[size ?? "md"],
        )}
      >
        <AvatarImage alt="" className="overflow-hidden rounded-full" src={src} />
        <AvatarFallback className="rounded-full">{fallback}</AvatarFallback>
      </Avatar>
      {children}
    </Button>
  );
}
