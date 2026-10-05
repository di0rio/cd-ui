import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks, getBlock } from "@/blocks";
import { blockComponents } from "@/blocks/components";
import { getT } from "@/i18n/server";

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.map((b) => ({ name: b.name }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/blocks/[name]/view">): Promise<Metadata> {
  const block = getBlock((await params).name);
  if (!block) return {};
  return { title: (await getT()).tr.app.blocks.items[block.key].title, robots: { index: false } };
}

/** Just the block, at the real window width, to test the responsive layout. */
export default async function BlockView({ params }: PageProps<"/[locale]/blocks/[name]/view">) {
  const block = getBlock((await params).name);
  if (!block) notFound();
  const Block = blockComponents[block.name];
  return (
    <main className="flex flex-1 flex-col">
      <Block />
    </main>
  );
}
