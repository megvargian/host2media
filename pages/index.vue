<template>
  <LazyMainSection />
</template>
<script setup>
useHead({
  title: "Host2Media",
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
      content: "https://www.host2media.com/host2media-og.png",
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
});
</script>
