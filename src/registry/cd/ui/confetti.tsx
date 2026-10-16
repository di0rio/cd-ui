"use client";

import * as React from "react";

export type ConfettiShape = "square" | "circle" | "strip" | "star";

export type ConfettiOptions = {
  /** Where the burst starts: an element (its center) or viewport pixels. Default: the middle of the screen. */
  origin?: Element | { x: number; y: number };
  /** Number of pieces (max 200). */
  count?: number;
  /** Width of the cone in degrees. 360 sprays in every direction. */
  spread?: number;
  /** Direction of the cone's center in degrees: 0 is right, 90 is down, 270 (default) is up. */
  angle?: number;
  /** Any CSS color, including `var(--brand)`. */
  colors?: string[];
  shapes?: ConfettiShape[];
  /** Launch speed in px/s. */
  power?: number;
};

const COLORS = ["var(--brand)", "#E53935", "#1E88E5", "#43A047", "#FB8C00"];
const SHAPES: ConfettiShape[] = ["square", "circle", "strip"];
const GRAVITY = 1500; // px/s²
const STEPS = 12; // samples of the physics curve; WAAPI interpolates between them
const STAR = "polygon(50% 0, 62% 36%, 100% 38%, 70% 60%, 80% 100%, 50% 76%, 20% 100%, 30% 60%, 0 38%, 38% 36%)";

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function resolveOrigin(origin: ConfettiOptions["origin"]) {
  if (origin && "getBoundingClientRect" in origin) {
    const r = origin.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }
  return origin ?? { x: window.innerWidth / 2, y: window.innerHeight / 2 };
}

function shapeStyle(piece: HTMLElement, shape: ConfettiShape) {
  const size = 6 + Math.random() * 6;
  piece.style.width = `${shape === "strip" ? size * 0.5 : size}px`;
  piece.style.height = `${shape === "strip" ? size * 1.8 : size}px`;
  if (shape === "circle") piece.style.borderRadius = "50%";
  if (shape === "star") piece.style.clipPath = STAR;
}

/**
 * Fires a burst of confetti. DOM pieces animated with WAAPI (transform and opacity only), no canvas, no dependencies.
 * Returns a function that cancels it. Does nothing on the server or with reduced motion.
 */
export function confetti({ origin, count = 60, spread = 70, angle = 270, colors = COLORS, shapes = SHAPES, power = 900 }: ConfettiOptions = {}): () => void {
  if (typeof document === "undefined" || reducedMotion()) return () => {};
  const from = resolveOrigin(origin);
  const layer = document.createElement("div");
  layer.setAttribute("aria-hidden", "true");
  layer.style.cssText = "position:fixed;inset:0;z-index:2147483000;pointer-events:none;overflow:hidden";

  const animations = Array.from({ length: Math.min(Math.max(count, 0), 200) }, (_, i) => {
    const piece = document.createElement("span");
    piece.style.cssText = "position:absolute;left:0;top:0;will-change:transform,opacity";
    piece.style.backgroundColor = colors[i % colors.length];
    shapeStyle(piece, shapes[i % shapes.length]);
    layer.append(piece);

    const dir = ((angle + (Math.random() - 0.5) * spread) * Math.PI) / 180;
    const speed = power * (0.45 + Math.random() * 0.55);
    const vx = Math.cos(dir) * speed;
    const vy = Math.sin(dir) * speed;
    const spin = (Math.random() - 0.5) * 1080;
    const duration = 1100 + Math.random() * 500;
    const frames = Array.from({ length: STEPS + 1 }, (_, s) => {
      const t = (s / STEPS) * (duration / 1000);
      return {
        transform: `translate(${from.x + vx * t}px, ${from.y + vy * t + 0.5 * GRAVITY * t * t}px) rotate(${(spin * s) / STEPS}deg)`,
        opacity: s / STEPS > 0.7 ? 1 - (s / STEPS - 0.7) / 0.3 : 1,
      };
    });
    return piece.animate(frames, { duration, easing: "linear", fill: "forwards" });
  });

  document.body.append(layer);
  const stop = () => layer.remove();
  Promise.all(animations.map((a) => a.finished)).then(stop, () => {
    // `finished` rejects with AbortError when the burst is cancelled: expected.
  });
  return () => {
    for (const a of animations) a.cancel();
    stop();
  };
}

type Child = React.ReactElement<Partial<Record<"onClick" | "onPointerDown" | "onPointerEnter", (event: React.SyntheticEvent<HTMLElement>) => void>>>;

const handlers = { click: "onClick", pointerdown: "onPointerDown", pointerenter: "onPointerEnter" } as const;

export type ConfettiProps = Omit<ConfettiOptions, "origin"> & {
  /** Exactly one element. It must pass the event handler through to the DOM, as Button does. */
  children: Child;
  /** The event of the child that fires the burst. */
  on?: keyof typeof handlers;
  disabled?: boolean;
};

/**
 * Wraps one element and fires a burst from its center on an event (click by default).
 * It adds no markup: the child keeps its own props, handlers and ref.
 * Under reduced motion the burst is replaced by a quick fade pulse of the child.
 */
export function Confetti({ children, on = "click", disabled = false, ...options }: ConfettiProps): React.ReactElement {
  const key = handlers[on];
  const child = React.Children.only(children);

  return React.cloneElement(child, {
    [key]: (event: React.SyntheticEvent<HTMLElement>) => {
      child.props[key]?.(event);
      if (disabled || event.defaultPrevented) return;
      if (reducedMotion()) {
        event.currentTarget.animate({ opacity: [1, 0.6, 1] }, { duration: 200, easing: "ease-out" });
        return;
      }
      confetti({ ...options, origin: event.currentTarget });
    },
  });
}
