import { DocsShell } from "@/components/docs/docs-shell";

/** Same as the docs layout: the sidebar and the column stay mounted while stepping between blocks. */
export default function BlockDetailLayout({ children }: LayoutProps<"/[locale]/blocks/[name]">) {
  return <DocsShell>{children}</DocsShell>;
}
