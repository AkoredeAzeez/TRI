import { strapi } from "@strapi/client";

export const STRAPI_BASE_URL =
  "https://integral-amusement-0416bbb889.strapiapp.com";

const client = strapi({
  baseURL: `${STRAPI_BASE_URL}/api`,
});

export default client;
