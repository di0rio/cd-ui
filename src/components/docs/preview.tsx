import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ComponentType } from "react";
import { Code } from "@/components/docs/code";
import { PreviewTabs } from "@/components/docs/preview-tabs";
import { asInstalled } from "@/lib/source";

/** Live preview + example code (read from the file itself at build time). */
export async function Preview({ file, Component, minHeight = "min-h-64" }: { file: string; Component: ComponentType; minHeight?: string }) {
  const source = await readFile(join(/* turbopackIgnore: true */ process.cwd(), "src/docs/examples", `${file}.tsx`), "utf8");
  return (
    <PreviewTabs
      code={<Code code={asInstalled(source)} title={`${file}.tsx`} />}
      preview={
        <div className={`flex ${minHeight} items-center justify-center rounded-xl border bg-card px-6 py-12`}>
          <Component />
        </div>
      }
    />
  );
}
