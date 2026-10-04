"use client";

import { type ReactNode, useState } from "react";
import { MonitorIcon, SmartphoneIcon, TabletIcon } from "lucide-react";
import { cn } from "@/registry/cd/lib/utils";

const devices = [
  { id: "desktop", icon: MonitorIcon, width: null },
  { id: "tablet", icon: TabletIcon, width: 768 },
  { id: "mobile", icon: SmartphoneIcon, width: 375 },
] as const;

type Device = (typeof devices)[number]["id"];

export type DevicePreviewLabels = { group: string; desktop: string; tablet: string; mobile: string; frame: string };

/**
 * Desktop mostra o bloco direto na página. Tablet e celular carregam a tela cheia num iframe da largura
 * escolhida: só assim as media queries do bloco respondem à largura simulada (e não à da janela).
 */
export function DevicePreview({ children, src, labels }: { children: ReactNode; src: string; labels: DevicePreviewLabels }) {
  const [device, setDevice] = useState<Device>("desktop");
  const width = devices.find((d) => d.id === device)?.width ?? null;
  return (
    <div>
      <div aria-label={labels.group} className="mb-3 hidden items-center gap-1 sm:flex" role="group">
        {devices.map(({ id, icon: Icon }) => (
          <button
            aria-label={labels[id]}
            aria-pressed={device === id}
            className={cn(
              "grid size-8 place-items-center rounded-md text-muted-foreground outline-none transition-colors duration-150 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring",
              device === id && "bg-accent text-foreground",
            )}
            key={id}
            onClick={() => setDevice(id)}
            title={labels[id]}
            type="button"
          >
            <Icon aria-hidden="true" className="size-4" />
          </button>
        ))}
      </div>
      {width === null ? (
        children
      ) : (
        <div className="overflow-x-auto rounded-xl border bg-muted/40 p-4">
          <iframe
            className="mx-auto block h-[720px] max-w-full rounded-lg border bg-background"
            src={src}
            style={{ width }}
            title={labels.frame}
          />
        </div>
      )}
    </div>
  );
}
