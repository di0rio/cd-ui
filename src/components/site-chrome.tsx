"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { stripLocale } from "@/lib/locale-path";

/** Site header and footer. The full-screen block page (/blocks/x/view) renders alone, without them. */
export function SiteChrome({ header, footer, children }: { header: ReactNode; footer: ReactNode; children: ReactNode }) {
  const bare = /^\/blocks\/[^/]+\/view\/?$/.test(stripLocale(usePathname()));
  if (bare) return <>{children}</>;
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
