import { withInternationalization } from "better-intl/next";
import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// CSP sem nonce, pra manter as páginas estáticas (nonce exigiria renderizar a cada request).
// script-src: os scripts inline (tema do next-themes e payload RSC, que muda a cada build) não têm
// hash fixo, então ficam liberados por 'unsafe-inline'; o resto vem de 'self'. Troca: um <script> inline
// injetado não seria bloqueado, mas a política não permite origens externas (nada é carregado nem enviado
// pra fora) e trava object-src, base-uri, form-action e frame-ancestors. Alternativa estrita (nonce) custaria
// páginas estáticas. O site não reflete entrada de usuário no HTML (React escapa; o único
// dangerouslySetInnerHTML é o HTML do shiki gerado no build).
// style-src 'unsafe-inline' é necessário pros style="" que o React/Base UI geram.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = (frame: "none" | "self") => [
  // Em dev (http) o upgrade-insecure-requests quebraria os assets; só vale em produção.
  { key: "Content-Security-Policy", value: `${isDev ? csp.replace("; upgrade-insecure-requests", "") : csp}; frame-ancestors '${frame}'` },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: frame === "self" ? "SAMEORIGIN" : "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  headers: async () => [
    // A tela cheia de um bloco (/blocks/x/view) pode ser embutida pelo próprio site (preview de tablet/celular); o resto não.
    { source: "/:path((?!.*/blocks/[^/]+/view$).*)", headers: securityHeaders("none") },
    { source: "/:path*/blocks/:name/view", headers: securityHeaders("self") },
    // Registry público (shadcn CLI e ferramentas no navegador, tipo "abrir no v0"): leitura liberada pra qualquer origem.
    { source: "/r/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] },
  ],
};

export default withInternationalization(nextConfig);
