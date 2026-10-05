"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { useLocale } from "@/components/locale-provider";
import { Button } from "@/registry/cd/ui/button";

export function ThemeToggle() {
  const { ui } = useLocale();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const dark = mounted && resolvedTheme === "dark";

  return (
    <Button
      aria-label={dark ? ui.theme.toLight : ui.theme.toDark}
      onClick={() => setTheme(dark ? "light" : "dark")}
      size="icon-sm"
      variant="outline"
    >
      {/* Both icons come in the HTML; CSS picks by theme, so there is no empty button before hydration. */}
      <SunIcon aria-hidden="true" className="hidden dark:block" />
      <MoonIcon aria-hidden="true" className="dark:hidden" />
    </Button>
  );
}
