import { defineNuxtPlugin } from '#app';
import { useRecaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
  const { loadRecaptcha, recaptchaLoaded, executeRecaptcha } = useRecaptcha({
    siteKey: '6LfGrEsqAAAAAJTJpE_p0KS2_AMmNrKksHM_QONX', // Replace with your actual site key
  });

  nuxtApp.provide('executeRecaptcha', executeRecaptcha);

  // Load reCAPTCHA when the plugin is initialized
  loadRecaptcha();
});
