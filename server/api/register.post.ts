import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  console.log('🟡 Register API - Received body:', body);
  const url = `${config.public.d1WorkerBaseUrl}/api/register`;
  console.log('🔵 Forwarding to:', url);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const payload = await res.json();
    console.log('🟢 Worker Response:', payload);

    return { status: res.status, ...payload };
  } catch (err: unknown) {
    let message = 'Internal Server Error';
    let details = '';
  
    // Safely check if it's a FetchError with a response
    if (err instanceof Error) {
      message = err.message;
  
      // @ts-expect-error – temporarily access .response if it exists
      if (typeof err.response?.text === 'function') {
        // try reading the response body
        try {
          // @ts-expect-error – ignore TS for dynamic fetch response
          details = await err.response.text();
        } catch (_) {}
      }
    }
  
    console.error('🔴 Register API error:', message, details);
    return { status: 500, message };
  }
});
