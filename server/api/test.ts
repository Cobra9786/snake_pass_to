export default defineEventHandler((event) => {
    const config = useRuntimeConfig();
    return { d1Url: config.public.d1WorkerBaseUrl };
  });
  