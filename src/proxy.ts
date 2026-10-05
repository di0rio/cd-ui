import { NextResponse, type NextRequest } from "next/server";

const COOKIE = { maxAge: 31536000, path: "/", sameSite: "lax" } as const;
const LOCALE = /^\/(en|pt)(?=\/|$)/;
// Only pages get a prefix: /r/* (registry), assets and metadata routes stay as they are.
const PAGE = /^\/((docs|blocks)(\/|$)|$)/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(LOCALE);

  // /pt/docs is a real route (app/[locale]); just remember the language for the next visit to an unprefixed URL.
  if (match) {
    const response = NextResponse.next();
    response.cookies.set("locale", match[1], COOKIE);
    return response;
  }

  // /docs -> /pt/docs (cookie, then Accept-Language, then en): every link carries the language in the URL.
  if (PAGE.test(pathname)) {
    const url = request.nextUrl.clone();
    const preferred = request.cookies.get("locale")?.value ?? request.headers.get("accept-language") ?? "";
    const locale = /^pt/i.test(preferred.trim()) ? "pt" : "en";
    url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"] };
