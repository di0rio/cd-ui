"use client";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/locale-provider";
import { type Locale, stripLocale } from "@/lib/locale-path";
import { cn } from "@/registry/cd/lib/utils";

/**
 * Switches the language by going to the same page under the other prefix. A full navigation on purpose:
 * each locale has its own root layout (<html lang>), so Next cannot swap it in a client-side navigation.
 */
export function LocaleSwitch() {
  const pathname = usePathname();
  const { locale, ui } = useLocale();
  const path = stripLocale(pathname);
  return <nav aria-label={ui.language.label} className="flex rounded-lg border p-0.5 font-mono text-xs">
    {(["en", "pt"] as const satisfies readonly Locale[]).map((option) => <a aria-current={option === locale ? "page" : undefined} aria-label={ui.language[option]} className={cn("rounded-md px-2 py-1 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring", option === locale && "bg-accent text-foreground")} href={`/${option}${path === "/" ? "" : path}`} hrefLang={option} key={option} lang={option}>{option.toUpperCase()}</a>)}
  </nav>;
}
