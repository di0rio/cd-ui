"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import { Button } from "@/registry/cd/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const dark = mounted && resolvedTheme === "dark";

  return (
    <Button
      aria-label={dark ? "Mudar pro tema claro" : "Mudar pro tema escuro"}
      onClick={() => setTheme(dark ? "light" : "dark")}
      size="icon-sm"
      variant="outline"
    >
      {mounted && (dark ? <SunIcon aria-hidden="true" /> : <MoonIcon aria-hidden="true" />)}
    </Button>
  );
}
