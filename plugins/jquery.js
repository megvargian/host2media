import jQuery from 'jquery';

export default defineNuxtPlugin(() => {
  if (typeof window !== 'undefined') {
    window.$ = window.jQuery = jQuery; // Ensure it's only loaded in the client
  }
});
