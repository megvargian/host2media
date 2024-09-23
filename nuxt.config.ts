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
      from: process.env.SMTP_USER, // Define the sender's email
      to: process.env.SMTP_TO, // Add at least one recipient
      cc: process.env.SMTP_USER, // Optional: Add cc recipient(s)
      bcc: process.env.SMTP_USER, // Optional: Add bcc recipient(s)
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
