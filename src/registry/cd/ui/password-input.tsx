"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/registry/cd/lib/utils";
import { Button } from "@/registry/cd/ui/button";
import { Input } from "@/registry/cd/ui/input";

/** Password field with a show/hide toggle. Inside a `Field`, the input still gets its label and error. */
export function PasswordInput({
  className,
  showLabel = "Show password",
  hideLabel = "Hide password",
  ...props
}: Omit<React.ComponentProps<typeof Input>, "type" | "className"> & {
  className?: string;
  showLabel?: string;
  hideLabel?: string;
}): React.ReactElement {
  const [visible, setVisible] = React.useState(false);
  return (
    <div className="relative" data-slot="password-input">
      <Input {...props} className={cn("pr-10", className)} type={visible ? "text" : "password"} />
      <Button
        aria-label={visible ? hideLabel : showLabel}
        aria-pressed={visible}
        className="absolute top-0.5 right-0.5 text-muted-foreground"
        onClick={() => setVisible((v) => !v)}
        size="icon-sm"
        type="button"
        variant="ghost"
      >
        {visible ? <EyeOffIcon aria-hidden="true" /> : <EyeIcon aria-hidden="true" />}
      </Button>
    </div>
  );
}
