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
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  // Em dev (http) o upgrade-insecure-requests quebraria os assets; só vale em produção.
  { key: "Content-Security-Policy", value: isDev ? csp.replace("; upgrade-insecure-requests", "") : csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
];

const nextConfig: NextConfig = {
  headers: async () => [
    { source: "/(.*)", headers: securityHeaders },
    // Registry público (shadcn CLI e ferramentas no navegador, tipo "abrir no v0"): leitura liberada pra qualquer origem.
    { source: "/r/:path*", headers: [{ key: "Access-Control-Allow-Origin", value: "*" }] },
  ],
};

export default withInternationalization(nextConfig);
