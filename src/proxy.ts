import { NextResponse, type NextRequest } from "next/server";

const COOKIE = { maxAge: 31536000, path: "/", sameSite: "lax" } as const;
const LOCALE = /^\/(en|pt)(?=\/|$)(.*)$/;
// Só páginas ganham prefixo: /r/* (registry), assets e rotas de metadata ficam como estão.
const PAGE = /^\/((docs|blocks)(\/|$)|$)/;

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const match = url.pathname.match(LOCALE);

  // /pt/docs → renderiza /docs e guarda o idioma no cookie (o better-intl lê dele).
  if (match) {
    const [, locale, rest] = match;
    request.cookies.set("locale", locale);
    url.pathname = rest || "/";
    const response = NextResponse.rewrite(url, { request });
    response.cookies.set("locale", locale, COOKIE);
    return response;
  }

  // /docs → /pt/docs (cookie, depois Accept-Language, depois en): todo link carrega o idioma na URL.
  if (PAGE.test(url.pathname)) {
    const preferred = request.cookies.get("locale")?.value ?? request.headers.get("accept-language") ?? "";
    const locale = /^pt/i.test(preferred.trim()) ? "pt" : "en";
    url.pathname = `/${locale}${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"] };
