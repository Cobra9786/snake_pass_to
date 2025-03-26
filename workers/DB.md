# I have a login success with
curl -v -X POST 'http://127.0.0.1:8787/api/login' \
  -H "Content-Type: application/json" \
  -d '{"username": "produser1", "password": "prodpass1"}'
  
curl -v -X POST 'https://d1-worker-production.rustchain64.workers.dev/api/login' \
  -H "Content-Type: application/json" \
  -d '{"username": "produser1", "password": "prodpass1"}'

curl -v -X POST 'https://d1-worker-production.rustchain64.workers.dev/api/login' \
  -H "Content-Type: application/json" \
  -d '{"username": "produser1", "password": "prodpass1"}'

  results in
Successfully created tail, expires at 2025-01-02T13:37:20Z
Connected to d1-worker-production, waiting for logs...
POST https://d1-worker-production.rustchain64.workers.dev/api/login - Ok @ 1/2/2025, 12:36:37 AM

but login from the browser /api/login 
Successfully created tail, expires at 2025-01-02T13:37:20Z
Connected to d1-worker-production, waiting for logs...
POST https://d1-worker-production.rustchain64.workers.dev/api/login - Ok @ 1/2/2025, 12:36:37 AM

I need to debug within cloudflare dashboard