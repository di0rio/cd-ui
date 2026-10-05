import type * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/registry/cd/ui/card";

/** Centered card for sign-in, sign-up, reset and verify screens: `logo`, `title`, `description`, the form as children and a `footer` link. Stateless: runs on the server. */
export function AuthShell({
  logo,
  title,
  description,
  footer,
  centered,
  size = "sm",
  className,
  children,
}: {
  logo?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  /** Centers the header text. */
  centered?: boolean;
  size?: "sm" | "md";
  className?: string;
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <div className={cn("flex min-h-[640px] w-full items-center justify-center px-4 py-12", className)} data-slot="auth-shell">
      <Card className={cn("w-full gap-6 p-6", size === "md" ? "max-w-md" : "max-w-sm")}>
        <CardHeader className={cn("gap-1.5", centered && "items-center text-center", logo && "gap-3")}>
          {logo}
          <CardTitle className="text-xl">{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        <CardContent className="flex flex-col gap-5">{children}</CardContent>
        {footer && <div className="-mt-2 text-center text-muted-foreground text-sm">{footer}</div>}
      </Card>
    </div>
  );
}
