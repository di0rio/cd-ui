/** Shows the code as it ends up in the installer's project (shadcn rewrites the paths). */
export function asInstalled(code: string) {
  return code.replace(/@\/registry\/cd\/ui\//g, "@/components/ui/").replace(/@\/registry\/cd\/lib\//g, "@/lib/");
}
