COMMANDS
  wrangler docs [search..]        📚 Open Wrangler's command documentation in your browser

  wrangler init [name]            📥 Initialize a basic Worker
  wrangler dev [script]           👂 Start a local server for developing your Worker
  wrangler deploy [script]        🆙 Deploy a Worker to Cloudflare
  wrangler deployments            🚢 List and view the current and past deployments for your Worker
  wrangler rollback [version-id]  🔙 Rollback a deployment for a Worker
  wrangler versions               🫧  List, view, upload and deploy Versions of your Worker to Cloudflare
  wrangler triggers               🎯 Updates the triggers of your current deployment
  wrangler delete [script]        🗑  Delete a Worker from Cloudflare
  wrangler tail [worker]          🦚 Start a log tailing session for a Worker
  wrangler secret                 🤫 Generate a secret that can be referenced in a Worker
  wrangler types [path]           📝 Generate types from bindings and module rules in configuration

  wrangler kv                     🗂️  Manage Workers KV Namespaces
  wrangler queues                 🇶  Manage Workers Queues
  wrangler r2                     📦 Manage R2 buckets & objects
  wrangler d1                     🗄  Manage Workers D1 databases
  wrangler vectorize              🧮 Manage Vectorize indexes [open beta]
  wrangler hyperdrive             🚀 Manage Hyperdrive databases
  wrangler cert                   🪪 Manage client mTLS certificates and CA certificate chains used for secured connections [open-beta]
  wrangler pages                  ⚡️ Configure Cloudflare Pages
  wrangler mtls-certificate       🪪  Manage certificates used for mTLS connections
  wrangler pubsub                 📮 Manage Pub/Sub brokers [private beta]
  wrangler dispatch-namespace     🏗️  Manage dispatch namespaces
  wrangler ai                     🤖 Manage AI models
  wrangler workflows              🔁 Manage Workflows [open-beta]
  wrangler login                  🔓 Login to Cloudflare
  wrangler logout                 🚪 Logout from Cloudflare
  wrangler whoami                 🕵️  Retrieve your user information

GLOBAL FLAGS
  -c, --config   Path to Wrangler configuration file  [string]
  -e, --env      Environment to use for operations, and for selecting .env and .dev.vars files  [string]
  -h, --help     Show help  [boolean]
  -v, --version  Show version number  [boolean]