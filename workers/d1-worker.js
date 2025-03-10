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
    if (url.pathname === '/api/login') {
      console.log('Using database:', env.DB);
      try {
        const {results} = await env.DB.prepare('SELECT * FROM users').all();
        
        console.log('Query results:', results);

        return new Response(JSON.stringify(results), {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // Allow all origins
          },
        });
      } catch (err) {
        return new Response('Error accessing D1 database', {
          status: 500,
          headers: {
            'Access-Control-Allow-Origin': '*', // Allow all origins
          },
        });
      }
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
