# Changelog

## 0.2.0 - 2026-10-06

First tagged release. Everything below landed since the first public version of the docs.

### Install

- One command installs the theme, `utils` and every component: `npx shadcn@latest add https://cd-ui.vercel.app/r/all.json`. `all-blocks.json` does the same for the blocks.
- No `shadcn init` needed: a minimal `components.json` is enough, so nothing from shadcn's default style lands in the app.

### Theme

- Motion tokens: `--cd-duration-instant/fast/base/slow` (80/120/160/240ms), `--cd-ease-out`, `--cd-ease-in-out`, `--cd-scale-enter`, one `prefers-reduced-motion` block and a shared `cd-popup` utility for the popups.
- Radius scale on a 12px base (4/6/9/12/18/24) plus `--radius-button` and `--radius-field`.
- New `--success` token.

### Components

- New: Logo, PasswordInput, OtpInput, AuthShell, PricingToggle, SwitchRow (32 components and 15 blocks in total).
- Select: the popup no longer jumps over the trigger (`alignItemWithTrigger` off by default), check on the right, visible highlight, scroll arrows, `SelectGroup` and `SelectSeparator`.
- Tooltip: Material-style bubble grown from the anchor, `Tip` wrapper, provider optional, 250ms delay.
- Button: `key` variant inspired by Kbd.
- Table: visible hover, `numeric` cells, `density`, `stickyHeader`, keyboard-focusable scroll region.
- Accordion: "prompt tree" indicator by default; the chevron is still available with `indicator="chevron"`.
- Alert: terminal log line with level tag, time and action; `role="alert"` only for warn and error. `default`, `brand` and `destructive` stay as aliases.

### Docs site

- Every page is static and CDN-cached (they were all dynamic because the root layout read the locale from a cookie).
- English slugs (`installation`, `forms`, `theme`) with permanent redirects from the old Portuguese ones.
- Block pages keep the docs sidebar, and the scrollbar gutter is stable so pages don't shift sideways.

### Breaking (visual only)

Radius scale, alert variants, accordion default indicator and select positioning changed. No props or exports were removed.
