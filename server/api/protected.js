import { jwtVerify } from 'jose';

export default defineEventHandler(async (event) => {
  console.log("YOU ARE PROTECTED");
  const token = getCookie(event, 'authToken'); // Retrieve JWT from the HTTP-only cookie
  console.log(" get TOKEN:: ", token);
  if (!token) {
    console.error('Unauthorized: Missing token', event);
    return { status: 401, message: 'Unauthorized: Missing token' };
  }

  try {
    console.log('Got Token', process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
    return { status: 200, message: `Hello, ${payload.username}` }; // Valid session
  } catch (error) {
    console.error('JWT validation failed:', error);
    return { status: 401, message: 'Unauthorized: Invalid token' };
  }
});
