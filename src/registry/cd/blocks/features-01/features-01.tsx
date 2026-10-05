import { GaugeIcon, KeyboardIcon, LockKeyholeIcon, PaletteIcon, PlugZapIcon, UsersIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Kbd } from "@/registry/cd/ui/kbd";

const features: { title: string; text: string; icon: ReactNode; wide?: boolean; visual?: ReactNode }[] = [
  {
    title: "Keyboard first",
    text: "Every action has a shortcut. Jump anywhere, create anything and never lift your hands.",
    icon: <KeyboardIcon aria-hidden="true" />,
    wide: true,
    visual: (
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground text-sm">
        <span className="flex items-center gap-2">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <span>open the command menu</span>
        </span>
        <span aria-hidden="true" className="h-4 w-px bg-border max-sm:hidden" />
        <span className="flex items-center gap-2">
          <Kbd>C</Kbd>
          <span>new task</span>
        </span>
      </div>
    ),
  },
  { title: "Fast by default", text: "Pages load in under 100 ms and interactions respond instantly.", icon: <GaugeIcon aria-hidden="true" /> },
  { title: "Secure", text: "SSO, audit logs and encryption at rest come standard.", icon: <LockKeyholeIcon aria-hidden="true" /> },
  { title: "Made for teams", text: "Roles, comments and shared views keep everyone on the same page.", icon: <UsersIcon aria-hidden="true" /> },
  {
    title: "Yours to shape",
    text: "Themes, custom fields and an open API. Make it fit how your team already works.",
    icon: <PaletteIcon aria-hidden="true" />,
    wide: true,
    visual: (
      <div className="mt-5 flex gap-2" aria-hidden="true">
        {["bg-brand", "bg-foreground", "bg-destructive", "bg-muted-foreground", "bg-border"].map((c) => (
          <span className={`size-7 rounded-full border border-border ${c}`} key={c} />
        ))}
      </div>
    ),
  },
  { title: "Integrations", text: "Connect the tools you already use with one click.", icon: <PlugZapIcon aria-hidden="true" /> },
];

/** Feature grid: a bento layout with two wide cards and four compact ones. */
export function Features01() {
  return (
    <section className="w-full px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono text-muted-foreground text-xs">features</p>
        <h2 className="mt-3 max-w-xl text-balance font-bold font-heading text-3xl tracking-[-0.02em] sm:text-4xl">
          Everything your team needs, nothing it doesn&apos;t.
        </h2>
        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {features.map((f) => (
            <li
              className={`rounded-xl border bg-card p-6 transition-[border-color] duration-base hover:border-brand ${f.wide ? "md:col-span-2" : ""}`}
              key={f.title}
            >
              <span className="grid size-9 place-items-center rounded-lg bg-brand text-brand-contrast [&_svg]:size-4.5">{f.icon}</span>
              <h3 className="mt-4 font-heading font-semibold text-lg">{f.title}</h3>
              <p className="mt-1.5 max-w-md text-muted-foreground text-sm leading-relaxed">{f.text}</p>
              {f.visual}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
