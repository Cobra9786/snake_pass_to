import { setCookie } from 'h3';
import { SignJWT } from 'jose';

export default defineEventHandler(async (event) => {
  const db = event.context.env?.auth_db;

  if (!db) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Database binding "auth_db" is not available. Ensure you have correctly configured wrangler.toml.',
    });
  }

  try {
    const { username, password } = await readBody(event);

    const query = `
      SELECT password
      FROM users
      WHERE username = ?;
    `;
    const result = await db.prepare(query).bind(username).first();

    if (!result || result.password !== password) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
    }

    // Generate a JWT token for the user
    const secret = new TextEncoder().encode(event.context.env.JWT_SECRET); // Use environment variable for the secret
    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h') // Token expires in 2 hours
      .sign(secret);

    // Set the JWT as an HTTP-only cookie
    setCookie(event, 'authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return { status: 200, message: 'Login successful' };
  } catch (err) {
    console.error('Error in login:', err);
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.statusMessage || 'Internal Server Error',
    });
  }
});
