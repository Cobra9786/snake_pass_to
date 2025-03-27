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
