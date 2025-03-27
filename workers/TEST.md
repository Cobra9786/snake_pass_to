# test
# add a user manually
curl -v -X POST 'https://d1-worker-production.rustchain64.workers.dev/api/login' \
  -H "Content-Type: application/json" \
  -d '{"username": "produser1", "password": "prodpass1"}'



# fetch users if you forgot them
curl -X GET 'https://d1-worker-production.rustchain64.workers.dev/api/users'

