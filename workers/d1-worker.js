import bcrypt from 'bcryptjs';

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
        const { username, password } = await request.json();
        console.log('🟡 Received login request for:', username);
    
        const user = await env.auth_db
          .prepare('SELECT * FROM users WHERE username = ?')
          .bind(username)
          .first();
    
        if (!user) {
          console.warn('❌ User not found:', username);
          return new Response(JSON.stringify({ error: 'Invalid username or password' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
        console.log('🔐 User found. Stored hash:', user.password);
        console.log('🔑 Attempted password:', password);
    
        const match = await bcrypt.compare(password, user.password);
        console.log('🧪 bcrypt.compare result:', match);
    
        if (!match) {
          console.warn('❌ Invalid password for:', username);
          return new Response(JSON.stringify({ error: 'Invalid username or password' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
        console.log('✅ Login successful for:', username);
        return new Response(JSON.stringify({ message: 'Login successful', user: { username: user.username } }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        });
    
      } catch (err) {
        console.error('💥 Login error:', err);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
          status: 500,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    }    

    // Handle API requests for registration ---
    if (url.pathname === '/api/register' && request.method === 'POST') {
      try {
        const { username, password } = await request.json();
    
        if (!username || !password) {
          return new Response(JSON.stringify({ error: 'Missing username or password' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
        // Check if user already exists
        const existing = await env.auth_db
          .prepare('SELECT id FROM users WHERE username = ?')
          .bind(username)
          .first();
    
        if (existing) {
          return new Response(JSON.stringify({ error: 'User already exists' }), {
            status: 409,
            headers: { 'Content-Type': 'application/json' },
          });
        }
    
        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // Insert new user
        await env.auth_db
          .prepare('INSERT INTO users (username, password) VALUES (?, ?)')
          .bind(username, hashedPassword)
          .run();
    
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
