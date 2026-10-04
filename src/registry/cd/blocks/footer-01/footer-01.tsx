const columns = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  { title: "Resources", links: ["Docs", "Guides", "Support", "Status"] },
];

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .4 1 .4 2 .1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
}

/** Site footer: brand and status on the left, three link columns on the right, legal row below. */
export function Footer01() {
  return (
    <footer className="w-full border-t px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_2fr]">
        <div>
          <a className="inline-flex items-center gap-2 font-heading font-semibold" href="#home">
            <span className="grid size-8 place-items-center rounded-lg border-2 border-black bg-brand font-bold text-brand-contrast text-sm">A</span>
            Acme
          </a>
          <p className="mt-3 max-w-xs text-muted-foreground text-sm leading-relaxed">One calm workspace for plans, people and progress.</p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="size-1.5 rounded-full bg-emerald-500" /> All systems operational
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-medium text-sm">{column.title}</p>
              <ul className="mt-3 flex flex-col gap-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="text-muted-foreground text-sm transition-colors duration-150 hover:text-foreground" href={`#${link.toLowerCase()}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t pt-6 text-muted-foreground text-xs">
        <p>© 2026 Acme, Inc. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a className="hover:text-foreground" href="#privacy">
            Privacy
          </a>
          <a className="hover:text-foreground" href="#terms">
            Terms
          </a>
          <a aria-label="GitHub" className="hover:text-foreground" href="#github">
            <GithubIcon aria-hidden="true" className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
