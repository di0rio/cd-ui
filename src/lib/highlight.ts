import { codeToHtml } from "shiki";

/**
 * Destaque de sintaxe no servidor (build): o navegador recebe só HTML com cores em CSS vars,
 * sem nenhum JS de highlighter. Temas claro/escuro trocam junto com o site.
 */
export function highlight(code: string, lang: "tsx" | "bash" | "css" | "json" = "tsx") {
  return codeToHtml(code.trimEnd(), {
    lang,
    themes: { light: "vitesse-light", dark: "vitesse-dark" },
    defaultColor: false,
  });
}
