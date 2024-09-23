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
      from: 'no-reply@host2media.com', // Define the sender's email
      to: 'kouyoumdjianmike@gmail.com',    // Add at least one recipient
      cc: 'no-reply@host2media.com', // Optional: Add cc recipient(s)
      bcc: 'bno-reply@host2media.com' // Optional: Add bcc recipient(s)
    },
    smtp: {
      host: 'mail-server.h2mdns.net',
      port: 465,
      auth: {
        user: 'no-reply@host2media.com',
        pass: 'Mypassw0rd987$$',
      },
    },
  },
});
