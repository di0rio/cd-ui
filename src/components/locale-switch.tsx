"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/locale-provider";
import { type Locale, stripLocale } from "@/lib/locale-path";
import { cn } from "@/registry/cd/lib/utils";

const SCROLL_KEY = "cd-locale-scroll";

/**
 * Switches the language by going to the same page under the other prefix. A full navigation on purpose:
 * each locale has its own root layout (<html lang>), so Next cannot swap it in a client-side navigation.
 */
export function LocaleSwitch() {
  const pathname = usePathname();
  const { locale, ui } = useLocale();
  const path = stripLocale(pathname);
  // After a locale switch (full navigation) put the page back where it was.
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SCROLL_KEY);
      if (saved === null) return;
      sessionStorage.removeItem(SCROLL_KEY);
      const [savedPath, y] = saved.split("|");
      if (savedPath !== path) return;
      // The page can still be growing (streamed content, fonts): retry for about 2s until it reaches the saved position.
      let tries = 0;
      const restore = () => {
        window.scrollTo(0, Number(y));
        if (Math.abs(window.scrollY - Number(y)) > 1 && tries++ < 40) setTimeout(restore, 50);
      };
      restore();
    } catch {
      // storage blocked: the page just opens at the top
    }
  }, [path]);
  return <nav aria-label={ui.language.label} className="flex rounded-lg border border-foreground/15 p-0.5 font-mono text-xs">
    {(["en", "pt"] as const satisfies readonly Locale[]).map((option) => <a aria-current={option === locale ? "page" : undefined} aria-label={ui.language[option]} className={cn("rounded-md px-2 py-1 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring", option === locale && "bg-foreground/10 text-foreground")} href={`/${option}${path === "/" ? "" : path}`} hrefLang={option} key={option} onClick={() => { try { sessionStorage.setItem(SCROLL_KEY, `${path}|${window.scrollY}`); } catch { /* storage blocked */ } }} lang={option}>{option.toUpperCase()}</a>)}
  </nav>;
}
