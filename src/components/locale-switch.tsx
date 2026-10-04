"use client";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";
import { updateLocale } from "@/i18n/generated";
import { cn } from "@/registry/cd/lib/utils";

type Locale = "en" | "pt";
export function LocaleSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const path = pathname.replace(/^\/(en|pt)(?=\/|$)/, "") || "/";
  return <nav aria-label="Language" className="flex rounded-lg border p-0.5 font-mono text-xs">
    {(["en", "pt"] as const).map((option) => <button aria-current={option === locale ? "page" : undefined} className={cn("rounded-md px-2 py-1 text-muted-foreground hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring", option === locale && "bg-accent text-foreground")} disabled={pending || option === locale} key={option} lang={option} onClick={() => startTransition(async () => { await updateLocale(option); router.push(`/${option}${path}`); })} type="button">{option.toUpperCase()}</button>)}
  </nav>;
}
