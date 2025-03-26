export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  //Cloudflare Workers does not serve public/ by default unless explicitly enabled.
  nitro: {
    preset: 'cloudflare',
    serveStatic: true,
    externals: {
      inline: ["vue", "@vue/server-renderer"], // ✅ Forces these to be included correctly
      external: ["vue-router", "@vue/devtools-kit", "@nuxt/devtools", "vite-plugin-inspect"], // ✅ Excludes problematic dependencies
    },
  },  
  build: {
    transpile: ["@vue/server-renderer", "vue-router"], // ✅ Ensures vue-router is handled correctly
  },
  vite: {
    define: {
      "global.document": "undefined", // ✅ Prevents `document` from causing issues in server-side code
      "window.document": "undefined",
    },
  },
  runtimeConfig: {
    public: {
      d1WorkerBaseUrl: 'https://d1-worker-production.rustchain64.workers.dev', // adjust if needed
    }
  },

  compatibilityDate: '2025-02-19'
})