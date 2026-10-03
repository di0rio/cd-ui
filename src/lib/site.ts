// Na Vercel usa o domínio de produção; local, o dev server.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3001";

export const site = {
  name: "cd/ui",
  author: "Cauã Diorio",
  github: "di0rio",
  portfolio: "https://portfolio-cd.vercel.app",
};
