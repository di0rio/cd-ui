import catalog from "@/blocks/catalog.json";
import type { Dict } from "@/lib/dict";

export const blockCategories = ["auth", "marketing", "app"] as const;
export type BlockCategory = (typeof blockCategories)[number];

export type Block = {
  name: string;
  /** Key in t.ts (no hyphen). */
  key: keyof Dict["app"]["blocks"]["items"];
  category: BlockCategory;
  title: string;
  description: string;
};

export const blocks: Block[] = catalog as Block[];

export const getBlock = (name: string) => blocks.find((b) => b.name === name);
