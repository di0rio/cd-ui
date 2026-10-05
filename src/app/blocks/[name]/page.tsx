import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlockStepper, type StepperLink } from "@/components/blocks/block-stepper";
import { DevicePreview } from "@/components/blocks/device-preview";
import { Code } from "@/components/docs/code";
import { Install } from "@/components/docs/install";
import { PreviewTabs } from "@/components/docs/preview-tabs";
import { type Block, blocks, getBlock } from "@/blocks";
import { blockComponents } from "@/blocks/components";
import { setLocale, translations } from "@/i18n/generated";
import { type Locale, withLocale } from "@/lib/locale-path";
import { siteUrl } from "@/lib/site";
import { asInstalled } from "@/lib/source";

export const dynamicParams = false;

export function generateStaticParams() {
  return blocks.map((b) => ({ name: b.name }));
}

export async function generateMetadata({ params }: PageProps<"/blocks/[name]">): Promise<Metadata> {
  const block = getBlock((await params).name);
  if (!block) return {};
  const { title, description } = translations[await setLocale()].app.blocks.items[block.key];
  return { title, description };
}

export default async function BlockPage({ params }: PageProps<"/blocks/[name]">) {
  const block = getBlock((await params).name);
  if (!block) notFound();
  const Block = blockComponents[block.name];
  const locale = (await setLocale()) as Locale;
  const page = translations[locale].app.blocks;
  const item = page.items[block.key];
  const index = blocks.indexOf(block);
  const step = (n: Block | undefined, direction: string): StepperLink | null => {
    if (!n) return null;
    const title = page.items[n.key].title;
    return { href: withLocale(locale, `/blocks/${n.name}`), title, label: `${direction}: ${title}` };
  };
  const source = await readFile(join(/* turbopackIgnore: true */ process.cwd(), "src/registry/cd/blocks", block.name, `${block.name}.tsx`), "utf8");

  return (
    <div className="mx-auto w-full max-w-[1400px] px-4 py-8 lg:px-6 lg:py-12">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Link
          className="inline-flex items-center gap-1.5 text-muted-foreground text-sm transition-colors duration-150 hover:text-foreground"
          href={withLocale(locale, "/blocks")}
        >
          <ArrowLeftIcon aria-hidden="true" className="size-3.5" /> {page.detail.back}
        </Link>
        <BlockStepper
          label={page.detail.pager}
          next={step(blocks[index + 1], page.detail.next)}
          position={`${String(index + 1).padStart(2, "0")} / ${blocks.length}`}
          previous={step(blocks[index - 1], page.detail.previous)}
        />
      </div>

      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-bold font-heading text-[32px] tracking-[-0.02em]">{item.title}</h1>
          <p className="mt-1 max-w-xl text-muted-foreground">{item.description}</p>
        </div>
        <Link
          className="inline-flex items-center gap-1.5 text-muted-foreground text-sm underline-offset-4 hover:text-foreground hover:underline"
          href={withLocale(locale, `/blocks/${block.name}/view`)}
          target="_blank"
        >
          {page.detail.openFull} <ExternalLinkIcon aria-hidden="true" className="size-3.5" />
        </Link>
      </div>

      <h2 className="mb-2 font-heading font-semibold text-lg">{page.detail.installTitle}</h2>
      <p className="mb-3 text-muted-foreground text-sm">{page.detail.installIntro}</p>
      <div className="mb-10 max-w-[760px]">
        <Install urls={[`${siteUrl}/r/${block.name}.json`]} />
      </div>

      <PreviewTabs
        code={<Code code={asInstalled(source)} title={`${block.name}.tsx`} />}
        preview={
          <>
            <DevicePreview
              labels={{ group: page.detail.devices, desktop: page.detail.desktop, tablet: page.detail.tablet, mobile: page.detail.mobile, frame: page.detail.frame }}
              src={withLocale(locale, `/blocks/${block.name}/view`)}
            >
              <div className="overflow-hidden rounded-xl border bg-background">
                <Block />
              </div>
            </DevicePreview>
            <p className="mt-2 text-muted-foreground text-xs">{page.detail.fullHint}</p>
          </>
        }
      />
    </div>
  );
}
