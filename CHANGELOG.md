# Changelog

## 0.3.0 - 2026-10-15

### Dependencies

- Next 16.4.2 and eslint-config-next 16.4.2, React and React DOM 19.3.1, Base UI 1.9.0, better-intl 1.9.0, lucide-react 1.57.0, Zod 4.6.7, @types/node 26, @types/react and @types/react-dom 19.3, bun 1.4.0.
- TypeScript stays on 6.x: `typescript-eslint` (used by `eslint-config-next`) refuses TypeScript 7, so `bun run lint` needs 6. `next build` works on 7.

### Components

- New: Confetti (`confetti()` function and `<Confetti>` wrapper, DOM and Web Animations, no dependencies, still under reduced motion) and AvatarButton (a Button with a cartoon avatar that tilts on hover, squashes on press and can blink). 35 components in total.
- Table: smaller radius (`rounded-md`), tighter header and cells (8px vertical padding by default), and rows now carry the `group/row` class so cells can react to row hover and focus.
- Data Table: new toolbar pieces (`TableToolbar`, `TableSearch`, `TableFilterChips`, `ExportCsvButton` and `toCsv`, which escapes cells that start with = + - or @), `TableRowActions` and `TableAction` (edit, duplicate, delete with a second click and a "..." menu, shown on row hover or focus and always visible on touch), cell helpers (`TableStatus`, `TableUser`, `TableCopyId`, `TableRelativeDate`) and `rowArrowKeys` for Arrow Up and Arrow Down between rows. Controls inside the table use small radii, no pills. The docs examples are now two clean admin tables (users, invoices) plus expandable rows.
- Dropdown Menu: redesigned. Terminal look (brand-yellow bar on the highlighted row, mono small-caps labels and shortcuts), smaller radius, and new `icon`, `description`, `shortcut` and `confirm` props on `DropdownMenuItem`, `icon` and `description` on `DropdownMenuSubTrigger`, plus `DropdownMenuSearch`, `matchesMenuQuery`, `DropdownMenuEmpty`, `useRecentItems` and `DropdownMenuFooter` (keyboard hints). Every previous export and prop still works. It now imports `kbd`.
- Button, Badge and Card: new `cartoon` variant (thick outline, hard shadow, sinks on press, squash and springy release), all from one shared class set in `cartoon.ts`.

### Alert

- Icon per level, `onDismiss` (close button), `autoHide` (progress bar, pauses on hover and focus), `compact`, and several buttons in `AlertAction`. It is a client component now. The old props keep working. The sample button "Clean up" is now "Delete old builds", so it says what it does.

### Theme

- New tokens: `--cartoon-ink`, `--cartoon-border`, `--cartoon-offset`, `--press-depth` and `--cd-ease-spring`, plus the `animate-avatar-blink` utility. Set them on `:root` or on any parent to restyle what is inside.

### Fixes

- Dark mode no longer flashes white when you switch language: the theme class is set in `<head>` before the first paint, and `html` has the theme background and `color-scheme`. The page also keeps its scroll position after the switch.
- Blocks: the mock cards in Hero 02 and Login 02 use `bg-card` and theme text colors, and their thick borders and hard shadows soften in dark mode. The status dot in Footer 01 uses `bg-success`.

### Docs site

- New Combos guide (confetti on a button, avatar plus button, a toast that celebrates, one set of tokens) and a live playground for the cartoon tokens on the Theme page, in English and Portuguese.

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
- Table redesigned: header row with muted background, row dividers, right-aligned tabular numbers, hover and selected rows, `variant` (`striped`, `cartoon`), `density`, `stickyHeader`, `stickyFirstColumn`, `TableEmpty` and a footer. Existing props and parts keep working.
- New: Data Table (`data-table`), small pieces to make a table interactive: `useSort` with `SortableHead` (`aria-sort`), `useSelection` with `TableSelectHead` and `TableSelectCell`, `TableBulkBar`, `matchesQuery` for filtering, `usePagination` with `TablePagination`, `ColumnToggle` and `TableExpandButton`.
- Accordion: "prompt tree" indicator by default; the chevron is still available with `indicator="chevron"`.
- Alert: terminal log line with level tag, time and action; `role="alert"` only for warn and error. `default`, `brand` and `destructive` stay as aliases.

### Docs site

- Every page is static and CDN-cached (they were all dynamic because the root layout read the locale from a cookie).
- English slugs (`installation`, `forms`, `theme`) with permanent redirects from the old Portuguese ones.
- Block pages keep the docs sidebar, and the scrollbar gutter is stable so pages don't shift sideways.

### Breaking (visual only)

Radius scale, alert variants, accordion default indicator and select positioning changed. No props or exports were removed.
