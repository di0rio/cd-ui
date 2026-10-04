import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blocks, getBlock } from "@/blocks";
import { blockComponents } from "@/blocks/components";
import { setLocale, translations } from "@/i18n/generated";

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.map((b) => ({ name: b.name }));
}

export async function generateMetadata({ params }: PageProps<"/blocks/[name]/view">): Promise<Metadata> {
  const block = getBlock((await params).name);
  if (!block) return {};
  return { title: translations[await setLocale()].app.blocks.items[block.key].title, robots: { index: false } };
}

/** Só o bloco, na largura real da janela, pra testar o layout responsivo. */
export default async function BlockView({ params }: PageProps<"/blocks/[name]/view">) {
  const block = getBlock((await params).name);
  if (!block) notFound();
  const Block = blockComponents[block.name];
  return (
    <main className="flex flex-1 flex-col">
      <Block />
    </main>
  );
}
