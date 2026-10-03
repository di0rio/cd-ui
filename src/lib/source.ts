/** Mostra o código como ele fica no projeto de quem instala (o shadcn reescreve os caminhos). */
export function asInstalled(code: string) {
  return code.replace(/@\/registry\/cd\/ui\//g, "@/components/ui/").replace(/@\/registry\/cd\/lib\//g, "@/lib/");
}
