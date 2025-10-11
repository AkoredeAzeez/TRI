import { STRAPI_BASE_URL } from './strapi';

export async function submitContactForm(data) {
  const response = await fetch(`${STRAPI_BASE_URL}/api/contacts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit contact form');
  }

  return response.json();
}
