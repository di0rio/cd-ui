import catalog from "@/blocks/catalog.json";
import type { Dict } from "@/lib/dict";

export const blockCategories = ["auth", "marketing", "app"] as const;
export type BlockCategory = (typeof blockCategories)[number];

export type Block = {
  name: string;
  /** Chave no t.ts (sem hífen). */
  key: keyof Dict["app"]["blocks"]["items"];
  category: BlockCategory;
  title: string;
  description: string;
};

export const blocks: Block[] = catalog as Block[];

export const getBlock = (name: string) => blocks.find((b) => b.name === name);
