import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const match = url.pathname.match(/^\/(en|pt)(?=\/|$)(.*)$/);

  if (match) {
    const [, locale, rest] = match;
    request.cookies.set("locale", locale);
    url.pathname = rest || "/";
    const response = NextResponse.rewrite(url, { request });
    response.cookies.set("locale", locale, { maxAge: 31536000, path: "/", sameSite: "lax" });
    return response;
  }

  if (request.cookies.has("locale")) return NextResponse.next();

  request.cookies.set("locale", "en");
  const response = NextResponse.next({ request });
  response.cookies.set("locale", "en", { maxAge: 31536000, path: "/", sameSite: "lax" });
  return response;
}

export const config = { matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"] };
