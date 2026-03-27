export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi'
  ],

  strapi: {
    url: process.env.STRAPI_URL || 'https://worthy-flower-f53009a381.strapiapp.com',
    prefix: '/api',
    version: 'v4',
    cookie: {
      path: '/',
      maxAge: 14 * 24 * 60 * 60,
      secure: process.env.NODE_ENV === 'production',
      sameSite: true
    }
  },

  runtimeConfig: {
    public: {
      strapiToken: process.env.STRAPI_TOKEN
    }
  },

  css: [
    '~/assets/css/fonts.css'
  ],

  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Iosevka+Charon+Mono:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap' }
      ]
    }
  },

  content: {
  }
})