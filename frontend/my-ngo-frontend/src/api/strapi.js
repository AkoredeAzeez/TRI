import { strapi } from "@strapi/client";

export const STRAPI_BASE_URL = "http://localhost:1337"; // "https://integral-amusement-0416bbb889.strapiapp.com";

const client = strapi({
  baseURL: `${STRAPI_BASE_URL}/api`,
});

export default client;
