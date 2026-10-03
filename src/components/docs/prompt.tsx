"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Prompt de terminal: `cd/ui ~/docs/button $▍` mostra onde você está (identidade do portfólio). O texto já é a logo. */
export function Prompt() {
  const path = usePathname() ?? "/";
  return (
    <Link aria-label="cd/ui, início" className="flex min-w-0 items-center gap-2.5 rounded-md font-mono outline-none focus-visible:ring-2 focus-visible:ring-ring" href="/">
      <span className="shrink-0 font-bold text-[17px] text-foreground">
        cd<span className="text-brand-foreground">/</span>ui
      </span>
      <span aria-hidden="true" className="hidden min-w-0 translate-y-px truncate text-muted-foreground text-sm sm:inline">
        ~{path === "/" ? "" : path} ${" "}
        <span className="inline-block h-[1em] w-[0.5em] translate-y-[0.15em] animate-caret bg-brand motion-reduce:animate-none" />
      </span>
    </Link>
  );
}
