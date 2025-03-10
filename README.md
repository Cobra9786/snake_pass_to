# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## ######################################################################################
❌ Common Mistake	✅                         Correct Solution
Missing pages/ directory	                    Ensure pages/index.vue exists
Using target: "server" (deprecated)	            Use ssr: true instead
No serveStatic: true	                        Add it to nuxt.config.ts
Cloudflare caches old files	                    Use npx wrangler delete before redeploying
Trying to use document	                        Wrap in if (process.client) {}
public/ assets not loading	                    Verify .output/public/ exists


npx nuxi build

## then
npx nuxi build
npx wrangler deploy

## or

npx wrangler delete datasnake-io
npx wrangler deploy .output/server/index.mjs


# THE BIG BUG missing bucket in wrangler.toml
[site]
bucket = ".output/public"



name = "datasnake-io"
account_id = "47e13e9e668bc72035b71e7fbf068b39"
workers_dev = false
compatibility_date = "2024-02-19"

# Explicitly set the entry-point file
main = "./.output/server/index.mjs"

compatibility_flags = ["nodejs_compat"]

routes = [
  { pattern = "https://datasnake.io/*", zone_id = "cb4db41dda1c0d71ff09cb9638c4c376" }
]

[site]
bucket = ".output/public"

# NEW BUILD COMMAND TO SEPERATE DIFFERENT DOMAINS

npx nuxi build

# RENAME .output to output_eyenepal
mv .output .output_eyenepal eyenepal_output