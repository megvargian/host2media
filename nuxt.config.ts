// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  css: ["~/assets/style/main.scss"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  nitro: {
    routeRules: {
      "/api/whois/**": {
        cors: true,
        proxy: "https://host2media.com/includes/api.php",
      },
    },
  },
  modules: ["nuxt-mail"],
  mail: {
    message: {
      to: process.env.SMTP_TO,
      cc: '',
      bcc: ''
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    },
  },
});
