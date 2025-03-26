import { setCookie } from 'h3';
import { SignJWT } from 'jose';

export default defineEventHandler(async (event) => {
  try {
    const { username, password } = await readBody(event);

    if (!username || !password) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Username and password are required',
      });
    }

    // Insert user into the D1 database
    const query = `
      INSERT INTO users (username, password)
      VALUES (?, ?);
    `;

    // Call D1 query endpoint (replace with actual D1 database logic if running locally)
    const result = await $fetch('/api/d1/query', {
      method: 'POST',
      body: {
        query,
        values: [username, password], // Use plain-text for now. Add password hashing later.
      },
    });

    if (result.error) {
      if (result.error.includes('UNIQUE constraint')) {
        throw createError({
          statusCode: 409,
          statusMessage: 'Username already exists',
        });
      }
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to register user',
      });
    }

    // Generate a JWT token for the new user
    const config = useRuntimeConfig();
    const secret = new TextEncoder().encode(config.jwtSecret);

    const token = await new SignJWT({ username })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('2h') // Token expires in 2 hours
      .sign(secret);

    // Set the token as an HTTP-only cookie
    setCookie(event, 'authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
    });

    return { status: 200, message: 'Registration successful', token };
  } catch (err) {
    console.error('Error in /api/register:', err);
    throw createError({
      statusCode: err.statusCode || 500,
      statusMessage: err.statusMessage || 'Internal Server Error',
    });
  }
});
