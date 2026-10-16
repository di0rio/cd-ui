// The cartoon look in one place: Button, Badge and Card share these classes, so a single token set restyles them all.
// Tweak without forking, on any ancestor or on :root: --cartoon-ink, --cartoon-border, --cartoon-offset, --press-depth.
// The fallbacks keep the look working before the theme tokens are installed.

/** Thick ink outline plus a hard offset shadow (no blur). */
export const cartoon =
  "border-(length:--cartoon-border,2px) border-(color:--cartoon-ink,#1c1c1c) shadow-[var(--cartoon-offset,3px)_var(--cartoon-offset,3px)_0_0_var(--cartoon-ink,#1c1c1c)]";

/**
 * For pressable things: on press it sinks into its own shadow (`--press-depth`), squashes a little and springs back.
 * Pressing is instant and ease-out; release takes the spring curve (`--cd-ease-spring`) so it overshoots slightly.
 * Under reduced motion the shadow still collapses, only the movement is dropped.
 */
export const cartoonPress = [
  "origin-bottom duration-(--cd-duration-slow) ease-(--cd-ease-spring,cubic-bezier(0.34,1.56,0.64,1))",
  "active:duration-(--cd-duration-instant) active:ease-out",
  "active:shadow-[calc(var(--cartoon-offset,3px)_-_var(--press-depth,3px))_calc(var(--cartoon-offset,3px)_-_var(--press-depth,3px))_0_0_var(--cartoon-ink,#1c1c1c)]",
  "motion-safe:active:translate-[var(--press-depth,3px)_var(--press-depth,3px)] motion-safe:active:scale-[1.03_0.94]",
].join(" ");
