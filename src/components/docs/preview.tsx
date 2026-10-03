import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ComponentType } from "react";
import { Code } from "@/components/docs/code";
import { PreviewTabs } from "@/components/docs/preview-tabs";
import { asInstalled } from "@/lib/source";

/** Preview ao vivo + código do exemplo (lido do próprio arquivo no build). */
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
