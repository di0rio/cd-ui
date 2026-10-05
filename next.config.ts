import { withInternationalization } from "better-intl/next";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// CSP without a nonce, to keep the pages static (a nonce would force rendering on every request).
// script-src: the inline scripts (next-themes theme script and the RSC payload, which changes on every
// build) have no fixed hash, so they are allowed through 'unsafe-inline'; everything else comes from
// 'self'. Trade-off: an injected inline <script> would not be blocked, but the policy allows no external
// origins (nothing is loaded or sent out) and locks object-src, base-uri, form-action and frame-ancestors.
// The strict alternative (nonce) would cost static pages. The site does not reflect user input in the
// HTML (React escapes it; the only dangerouslySetInnerHTML is the shiki HTML generated at build time).
// style-src 'unsafe-inline' is needed for the style="" attributes React/Base UI generate.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://github.com https://avatars.githubusercontent.com", // avatar example uses the GitHub profile picture
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = (frame: "none" | "self") => [
  // In dev (http) upgrade-insecure-requests would break the assets; it only applies in production.
  { key: "Content-Security-Policy", value: `${isDev ? csp.replace("; upgrade-insecure-requests", "") : csp}; frame-ancestors '${frame}'` },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: frame === "self" ? "SAMEORIGIN" : "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  // Portuguese slugs from before the rename.
  redirects: async () =>
    [
      ["instalacao", "installation"],
      ["formularios", "forms"],
      ["tema", "theme"],
    ].map(([from, to]) => ({ source: `/:locale(en|pt)/docs/${from}`, destination: `/:locale/docs/${to}`, permanent: true })),
  headers: async () => [
    // A block's full-screen view (/blocks/x/view) can be embedded by the site itself (tablet/phone preview); nothing else can.
    { source: "/:path((?!.*/blocks/[^/]+/view$).*)", headers: securityHeaders("none") },
    { source: "/:path*/blocks/:name/view", headers: securityHeaders("self") },
    // Public registry (shadcn CLI and browser tools such as "open in v0"): readable from any origin.
    { source: "/r/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] },
  ],
};

export default withInternationalization(nextConfig);
