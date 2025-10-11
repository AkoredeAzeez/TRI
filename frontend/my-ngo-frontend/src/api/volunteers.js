import { STRAPI_BASE_URL } from './strapi';

export async function submitVolunteerApplication(data) {
  const response = await fetch(`${STRAPI_BASE_URL}/api/volunteers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit volunteer application');
  }

  return response.json();
}
