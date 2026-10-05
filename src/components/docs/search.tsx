"use client";

import { SearchIcon } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import { Kbd } from "@/registry/cd/ui/kbd";

export type SearchItem = { href: string; title: string; description: string; group: "guide" | "component" | "block" };

const loadDialog = () => import("@/components/docs/search-dialog");
const SearchDialog = lazy(loadDialog);

/**
 * Search trigger with ⌘K / Ctrl+K. Only the trigger and the key listener ship with the page;
 * the dialog code loads on the first open (or on hover/focus of the button).
 * Opened by keyboard hundreds of times a day, so it opens and closes with no animation (the Raycast rule).
 */
export function Search({ items }: { items: SearchItem[] }) {
  const { ui } = useLocale();
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggle = () => {
    setLoaded(true);
    setOpen((o) => !o);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <button
        aria-haspopup="dialog"
        className="flex h-8 cursor-pointer items-center gap-2 rounded-lg border bg-background pr-1.5 pl-2.5 text-muted-foreground text-sm outline-none transition-colors duration-150 hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        onClick={toggle}
        onFocus={loadDialog}
        onPointerEnter={loadDialog}
        type="button"
      >
        <SearchIcon aria-hidden="true" className="size-3.5" />
        <span className="hidden md:inline">{ui.search.open}</span>
        <span className="hidden gap-0.5 sm:flex">
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </span>
      </button>
      {loaded && (
        <Suspense fallback={null}>
          <SearchDialog items={items} onOpenChange={setOpen} open={open} />
        </Suspense>
      )}
    </>
  );
}
