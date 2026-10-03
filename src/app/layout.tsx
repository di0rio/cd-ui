import type { Metadata } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "next-themes";
import { Prompt } from "@/components/docs/prompt";
import { Search, type SearchItem } from "@/components/docs/search";
import { ThemeToggle } from "@/components/theme-toggle";
import { components, guides } from "@/docs";
import { site } from "@/lib/site";
import { cn } from "@/registry/cd/lib/utils";
import "./globals.css";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
const ubuntuHeading = Ubuntu({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-heading" });
const ubuntuMono = Ubuntu_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: { default: "cd/ui · componentes leves em Base UI", template: "%s · cd/ui" },
  description: "Componentes React acessíveis em Base UI e Tailwind, medidos em bytes, com validação por Zod. Instale pelo shadcn CLI.",
};

const searchItems: SearchItem[] = [
  ...guides.map((g) => ({ ...g, group: "Guias" })),
  ...components.map((c) => ({ href: `/docs/components/${c.name}`, title: c.title, description: c.description, group: "Componentes" })),
];

function GithubIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5a3.9 3.9 0 0 1 1-2.7 3.6 3.6 0 0 1 .1-2.7s.8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .4 1 .4 2 .1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" />
    </svg>
  );
}

const navLink = "rounded-md px-2.5 py-1.5 text-muted-foreground text-sm transition-colors duration-150 hover:text-foreground";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      className={cn("h-full antialiased", ubuntu.variable, ubuntuHeading.variable, ubuntuMono.variable)}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" disableTransitionOnChange enableSystem>
          <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur-md">
            <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-4 px-4 lg:px-6">
              <Prompt />
              <nav aria-label="Principal" className="ml-auto flex items-center gap-1">
                <Link className={cn(navLink, "max-sm:hidden")} href="/docs">
                  docs
                </Link>
                <Link className={cn(navLink, "max-sm:hidden")} href="/#componentes">
                  componentes
                </Link>
                <Search items={searchItems} />
                <a
                  aria-label="GitHub"
                  className="grid size-8 place-items-center rounded-md text-muted-foreground transition-colors duration-150 hover:bg-accent hover:text-foreground"
                  href={`https://github.com/${site.github}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <GithubIcon aria-hidden="true" className="size-4" />
                </a>
                <ThemeToggle />
              </nav>
            </div>
          </header>
          <div className="flex flex-1 flex-col">{children}</div>
          <footer className="border-t">
            <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3 px-4 py-6 text-muted-foreground text-sm lg:px-6">
              <span>
                feito por{" "}
                {site.portfolio ? (
                  <a className="text-foreground underline decoration-brand underline-offset-4" href={site.portfolio} rel="noopener noreferrer" target="_blank">
                    {site.author}
                  </a>
                ) : (
                  <span className="text-foreground">{site.author}</span>
                )}
                . código aberto, copie à vontade.
              </span>
              <span className="font-mono text-xs">base ui · tailwind v4 · shadcn cli</span>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
