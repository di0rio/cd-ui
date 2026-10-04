"use client";

import { useSyncExternalStore } from "react";
import { CopyButton } from "@/components/copy-button";
import { cn } from "@/registry/cd/lib/utils";

const managers = {
  bun: "bunx --bun shadcn@latest add",
  npm: "npx shadcn@latest add",
  pnpm: "pnpm dlx shadcn@latest add",
  yarn: "yarn dlx shadcn@latest add",
} as const;
type Manager = keyof typeof managers;

// A escolha do gerenciador vale pra todos os blocos da página e fica salva no navegador.
const KEY = "cd-ui:pm";
const EVENT = "cd-ui:pm";
const read = (): Manager => {
  try {
    const value = localStorage.getItem(KEY);
    return value && Object.hasOwn(managers, value) ? (value as Manager) : "npm";
  } catch {
    return "npm";
  }
};
const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  return () => window.removeEventListener(EVENT, cb);
};
const choose = (pm: Manager) => {
  try {
    localStorage.setItem(KEY, pm);
  } catch {}
  window.dispatchEvent(new Event(EVENT));
};

/** Comando de instalação com abas por gerenciador de pacotes (bun, npm, pnpm, yarn). */
export function Install({ urls }: { urls: string[] }) {
  const pm = useSyncExternalStore(subscribe, read, () => "npm" as Manager);
  const command = `${managers[pm]} ${urls.join(" ")}`;

  return (
    <div className="overflow-hidden rounded-xl border bg-card">
      <div className="flex items-center justify-between gap-2 border-b px-2 py-1.5">
        <div aria-label="Gerenciador de pacotes" className="flex gap-0.5" role="group">
          {(Object.keys(managers) as Manager[]).map((name) => (
            <button
              aria-pressed={pm === name}
              className={cn(
                "h-7 cursor-pointer rounded-md px-2.5 font-mono text-muted-foreground text-xs outline-none transition-colors duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
                pm === name && "bg-accent text-foreground",
              )}
              key={name}
              onClick={() => choose(name)}
              type="button"
            >
              {name}
            </button>
          ))}
        </div>
        <CopyButton text={command} />
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[13px] [scrollbar-width:thin]">
        <code>
          <span className="text-muted-foreground select-none">$ </span>
          {command}
        </code>
      </pre>
    </div>
  );
}
