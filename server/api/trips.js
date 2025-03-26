import { jwtVerify } from 'jose';

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'authToken');
  if (!token) {
    return { status: 401, message: 'Unauthorized' };
  }

  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    const username = payload.username;

    // Fetch trips from Postgres or another API
    const trips = await $fetch(`https://backend-server.com/api/trips`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return trips;
  } catch (error) {
    console.error('JWT validation failed:', error);
    return { status: 401, message: 'Unauthorized' };
  }
});
