// On Vercel it uses the production domain; locally, the dev server.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3001";

export const site = {
  name: "cd/ui",
  author: "Cauã Diório",
  github: "di0rio",
  portfolio: "", // TODO: portfolio link. Empty = name without a link in the footer.
};
