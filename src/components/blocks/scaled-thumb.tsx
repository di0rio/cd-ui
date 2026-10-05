"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

/** Shows the block rendered at `width` x `height` and scaled down to fit the container width (inert preview). */
export function ScaledThumb({ children, width = 1280, height = 760 }: { children: ReactNode; width?: number; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.3);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [width]);

  return (
    <div className="relative overflow-hidden bg-background" ref={ref} style={{ height: height * scale }}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 origin-top-left"
        inert
        style={{ width, height, transform: `scale(${scale})` }}
      >
        {children}
      </div>
    </div>
  );
}
