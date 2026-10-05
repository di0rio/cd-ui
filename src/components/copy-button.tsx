"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { cn } from "@/registry/cd/lib/utils";

const icon = "absolute inset-0 m-auto size-4 transition-opacity duration-150 ease-out";

/** Copy with the icon swapped by an opacity crossfade. */
export function CopyButton({ text, className }: { text: string; className?: string }) {
  const { ui } = useLocale();
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <button
      aria-label={copied ? ui.copy.copied : ui.copy.copy}
      className={cn(
        "relative size-8 shrink-0 cursor-pointer rounded-md text-muted-foreground outline-none transition-[color,background-color,transform] duration-150 ease-out hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring motion-safe:active:scale-[0.96]",
        className,
      )}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          return;
        }
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 1500);
      }}
      type="button"
    >
      <CopyIcon aria-hidden="true" className={cn(icon, copied ? "opacity-0" : "opacity-100")} />
      <CheckIcon aria-hidden="true" className={cn(icon, "text-brand-foreground", copied ? "opacity-100" : "opacity-0")} />
    </button>
  );
}
