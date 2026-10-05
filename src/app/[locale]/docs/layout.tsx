import { DocsShell } from "@/components/docs/docs-shell";

export default function DocsLayout({ children }: LayoutProps<"/[locale]/docs">) {
  return <DocsShell>{children}</DocsShell>;
}
