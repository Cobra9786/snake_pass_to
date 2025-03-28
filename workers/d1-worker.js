export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Handle CORS Preflight Requests
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*', // Allow all origins
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      });
    }

    // Handle API requests (e.g., /api/login)
    if (url.pathname === '/api/login' && request.method === 'POST') {
      try {
        const body = await request.json();
        const { username, password } = body;
    
        if (!username || !password) {
          console.warn('Missing username or password in request body:', body);
      
          return new Response(JSON.stringify({ error: 'Missing credentials' }), { status: 400 });
        }
    
        const query = 'SELECT username FROM users WHERE username = ? AND password = ?';
        const user = await env.auth_db.prepare(query).bind(username, password).first();
    
        if (user) {
          console.log('Login success for user:', username);
          return new Response(JSON.stringify({ message: 'Login successful', user }), {
            status: 200,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        } else {
          console.warn('Invalid credentials for user:', username);
          return new Response(JSON.stringify({ error: 'Invalid username or password' }), {
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          });
        }
      } catch (error) {
        console.error('Login error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        });
      }
    }

    // --- NEW: Handle API requests for registration ---
    if (url.pathname === '/api/register' && request.method === 'POST') {
      try {
        const { username, password } = await request.json();
    
        if (!username || !password) {
          return new Response(JSON.stringify({ error: 'Missing username or password' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
        // Check if user exists
        const existing = await env.auth_db.prepare(
          'SELECT id FROM users WHERE username = ?'
        ).bind(username).first();
    
        if (existing) {
          return new Response(JSON.stringify({ error: 'User already exists' }), {
            status: 409,
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
        // Register new user
        await env.auth_db.prepare(
          'INSERT INTO users (username, password) VALUES (?, ?)'
        ).bind(username, password).run();
    
        return new Response(JSON.stringify({ message: 'User registered successfully' }), {
          status: 201,
          headers: { 'Content-Type': 'application/json' },
        });
    
      } catch (err) {
        console.error('Error in worker /api/register:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }   

    // future admin use only: get users to display to admin dashboard
    if (url.pathname === '/api/users') {
      const { results } = await env.auth_db.prepare('SELECT * FROM users').all();
      return new Response(JSON.stringify(results), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Default response
    return new Response('Not Found', {
      status: 404,
      headers: {
        'Access-Control-Allow-Origin': '*', // Allow all origins
      },
    });
  },
};
