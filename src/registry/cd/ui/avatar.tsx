"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";

/** Round profile picture. Shows `AvatarFallback` while the image loads or if it fails. */
export function Avatar({ className, ...props }: AvatarPrimitive.Root.Props): React.ReactElement {
  return (
    <AvatarPrimitive.Root
      className={cn("relative inline-flex size-10 shrink-0 select-none overflow-hidden rounded-full bg-muted align-middle", className)}
      data-slot="avatar"
      {...props}
    />
  );
}

export function AvatarImage({ className, ...props }: AvatarPrimitive.Image.Props): React.ReactElement {
  return <AvatarPrimitive.Image className={cn("size-full object-cover", className)} data-slot="avatar-image" {...props} />;
}

export function AvatarFallback({ className, ...props }: AvatarPrimitive.Fallback.Props): React.ReactElement {
  return (
    <AvatarPrimitive.Fallback
      className={cn("flex size-full items-center justify-center font-medium text-muted-foreground text-sm", className)}
      data-slot="avatar-fallback"
      {...props}
    />
  );
}
