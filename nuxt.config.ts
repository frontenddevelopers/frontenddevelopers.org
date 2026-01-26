import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ["~/assets/css/main.css", "~/assets/css/base.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  appConfig: {
    siteName: 'Front-end Developers',
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    },
  },
  app: {
    head: {
      title: 'Front-end Developers',
      meta: [
        { name: 'description', content: 'Your site description here' },

        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Front-end Developers' },
        { property: 'og:description', content: 'Your site description here' },
        { property: 'og:url', content: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000' },
        { property: 'og:image', content: (process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/facebook-og-1200x630.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Front-end Developers' },
        { name: 'twitter:description', content: 'Your site description here' },
        { name: 'twitter:image', content: (process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/twitter-card-1200-675.png' },
      ],
    },
  },
})
