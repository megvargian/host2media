<template>
  <NuxtLayout :name="'main'">
    <NuxtPage />
  </NuxtLayout >
</template>
<script setup lang="ts">
useHead({
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
});
</script>
