import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  const res = await fetch(`${config.public.d1WorkerBaseUrl}/api/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const payload = await res.json();
  return { status: res.status, ...payload };
});



// import { defineEventHandler, readBody } from 'h3';
// import { createError } from 'h3';
// import { SignJWT } from 'jose';

// export default defineEventHandler(async (event) => {
//   console.log('>>>> API /api/login invoked <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');

//   try {
//     const config = useRuntimeConfig();
//     const workerUrl = config.public.d1WorkerBaseUrl;
//     console.log('>>>>> Runtime config:', config);
//     console.log('>>>> Runtime config:', config.public);


//     const body = await readBody(event);
//     console.log('Request body:', body);

//     // Check for test user
//     if (body.username === 'user' && body.password === 'pass') {
//       console.log('Test user authenticated');

//       // Generate JWT for test user
//       const token = await new SignJWT({ username: body.username })
//         .setProtectedHeader({ alg: 'HS256' })
//         .setIssuedAt()
//         .setExpirationTime('1h')
//         .sign(new TextEncoder().encode(process.env.JWT_SECRET));

//       // Set HTTP-only cookie
//       setCookie(event, 'authToken', token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'strict',
//         path: '/',
//         maxAge: 3600, // 1 hour
//       });

//       return { status: 200, message: 'Test User Login successful' };
//     }

//     // Query the database for other users
//     console.log('>>>>>>>> Querying database for user:', body.username);
//     console.log('>>>>>>> D1 Worker URL:', config.public.d1WorkerBaseUrl);


//     // const response = await fetch(`${config.public.d1WorkerBaseUrl}/api/login`, {
//     //   method: 'POST',
//     // const response = await fetch('https://d1-worker-production.rustchain64.workers.dev/api/login', {
//     //   method: 'POST',
//     //   body: JSON.stringify(body),
//     //   headers: { 'Content-Type': 'application/json' },
//     // });
//     let showURL = `${workerUrl}/api/login`;
//     console.log('Show URL:', showURL);

//     const response = await fetch(`${config.public.d1WorkerBaseUrl}/api/login`, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body)
//     });

//     if (!response.ok) {
//       console.error('>>>)))) >>>>> Database query failed:', response.status, response.statusText);
//       throw createError({ statusCode: response.status, statusMessage: response.statusText });
//     }

//     const user = await response.json();

//     if (!user) {
//       console.log('User not found in database');
//       throw createError({ statusCode: 401, message: 'Invalid credentials' });
//     }

//     console.log('User authenticated from database:', body.username);

//     // Generate JWT for the authenticated user
//     const token = await new SignJWT({ username: body.username })
//       .setProtectedHeader({ alg: 'HS256' })
//       .setIssuedAt()
//       .setExpirationTime('1h')
//       .sign(new TextEncoder().encode(process.env.JWT_SECRET));

//     // Set HTTP-only cookie
//     setCookie(event, 'authToken', token, {
//       httpOnly: true,
//       secure: true,
//       sameSite: 'strict',
//       path: '/',
//       maxAge: 3600, // 1 hour
//     });

//     return { status: 200, message: 'Login successful' };
//   } catch (err) {
//     console.error('Error in API handler:', err);
//     throw createError({ statusCode: 500, message: '>>> Internal Server Error <<<< ' });
//   }
// });
