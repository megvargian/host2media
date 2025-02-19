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
        proxy: "https://domain-availability.whoisxmlapi.com/api/v1",
      },
      "/api/recapv3/**": {
        cors: true,
        proxy: "https://www.google.com/recaptcha/api/siteverify",
      },
    },
  },
  plugins: [{ src: "~/plugins/recaptcha.js" }],
  modules: ["nuxt-mail"],
  mail: {
    message: {
      from: "no-reply@host2media.com",
      to: "support@host2media.com",
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
  runtimeConfig: {
    public: {
      siteKey: process.env.RECAPTCHA_SITE_KEY,
      siteSecret: process.env.RECAPTCHA_SITE_SECRET,
    },
  },
  security: {
    csp: {
      directives: {
        "frame-ancestors": ["'self'", "https://recaptcha.net"],
      },
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        css: {
          additionalData: "~/assets/style/swiper.css",
        },
      },
    },
  },
  app: {
    head: {
      meta: [
        { property: "og:url", content: "https://www.host2media.com/" },
        {
          property: "og:title",
          content: "Host2Media | Secure & Reliable Hosting",
        },
        {
          property: "og:description",
          content:
            "Host2Media provides reliable web hosting, domain registration, managed WordPress hosting, and business email solutions. Enjoy a 99.9% uptime guarantee and 24/7 expert support.",
        },
        {
          property: "og:image",
          content: "https://www.host2media.com/img/host2media-og.png",
        },
        { property: "og:image:alt", content: "Host2Media Homepage Banner" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:site_name",
          content: "Host2Media | Web Hosting Solutions",
        },
        { property: "og:updated_time", content: new Date().toISOString() },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        { property: "ia:markup_url", content: "https://www.host2media.com/" },
        {
          property: "ia:rules_url",
          content: "https://www.host2media.com/legal",
        },
      ],
    },
  },
  // app: {
  //   head: {
  //     script: [
  //       {
  //         src: `https://www.google.com/recaptcha/api.js`,
  //         async: true,
  //         defer: true,
  //       },
  //     ],
  //   },
  // },
});
