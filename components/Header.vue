<template>
  <div
    class="w-full"
    :class="
      typeof route.name === 'string' && route.name.includes('contact-us')
        ? `absolute left-0 right-0 z-10`
        : ''
    "
  >
    <header>
      <nav>
        <div class="w-full py-3 bg-[#5564ad]">
          <div class="grid grid-cols-12 gap-5">
            <div class="col-span-6 hidden lg:block"></div>
            <div class="col-span-12 lg:col-span-6">
              <ul
                class="flex lg:justify-end justify-center items-center text-white"
              >
                <li class="lg:hidden block sm:mr-8 mr-2">
                  <NuxtLink to="/">
                    <img class="h-6 w-12" src="~/assets/images/logo.svg" />
                  </NuxtLink>
                </li>
                <li class="mx-2 Mulish-light text-[0.75rem]">
                  <a href="#"> Blog </a>
                </li>
                <li class="mx-2 Mulish-light text-[0.75rem]">
                  <a href="#"> Knowladge Base </a>
                </li>
                <li class="mx-2 Mulish-light text-[0.75rem]">
                  <a href="#"> Status </a>
                </li>
                <li
                  class="mx-2 Mulish-light font-semibold text-[0.75rem] lg:pr-32"
                >
                  <a href="#"> Customer Portal </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <nav
        class="py-5 flex flex-row justify-start items-center lg:px-16 md:px-16 sm:px-8"
      >
        <NuxtLink to="/">
            <img class="lg:block hidden h-12 w-18" src="~/assets/images/logo.svg" />
        </NuxtLink>
        <ul
          class="basic-2/4 lg:flex hidden font-medium text-sm xl:text-lg pl-8"
          :class="
            typeof route.name === 'string' && route.name.includes('contact-us')
                ? 'text-white'
                : 'text-[#0F132A]'
            "
        >
          <li class="mx-2">
            <a class="" href="#"> Domains </a>
          </li>
          <li class="mx-2">
            <a class="" href="#"> Website Hosting </a>
          </li>
          <li class="mx-2">
            <a class="" href="#"> Professional Email </a>
          </li>
          <li class="mx-2">
            <a class="" href="#"> Reseller Program </a>
          </li>
          <li class="mx-2">
            <a class="" href="#"> Dev Serices </a>
          </li>
          <li class="mx-2">
            <NuxtLink class="" to="contact-us"> Contact us </NuxtLink>
          </li>
        </ul>
        <button
          class="hamburger hamburger--collapse block lg:mr-0 mr-5 lg:hidden"
          type="button"
        >
          <div @click="activeHamburgerButton()" class="menu_mobile_nav">
            <div class="hamburger_menu_icon">
              <div class="line bg-[#5564AD]"></div>
              <div class="line bg-[#5564AD] middle_line"></div>
              <div class="line bg-[#5564AD]"></div>
            </div>
          </div>
        </button>
        <div id="menu_mobile" class="menu_on_mobile block lg:hidden h-[100dvh]">
          <div class="menu_on_mobile_wrapper h-[100dvh]">
            <div class="menu_on_mobile_inner_wrapper relative flex justify-center items-center h-[100dvh]">
              <div>
                <a class="block my-3 page_font animated_menu_el" href="#">
                  <div class="menu_item">Domains</div>
                </a>
                <a class="block my-3 page_font animated_menu_el" href="#">
                  <div class="menu_item">Website Hosting</div>
                </a>
                <a class="block my-3 page_font animated_menu_el" href="#">
                  <div class="menu_item">Professional Email</div>
                </a>
                <a class="block my-3 page_font animated_menu_el" href="#">
                  <div class="menu_item">Reseller Program</div>
                </a>
                <a class="block my-3 page_font animated_menu_el" href="#">
                  <div class="menu_item">Dev Serices</div>
                </a>
                <a class="block my-3 page_font animated_menu_el" href="/contact-us">
                  <div class="menu_item">Contact US</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const activeHamburgerButton = () => {
  const HamButton = document.querySelector(".menu_mobile_nav") as HTMLElement;
  const HtmlBody = document.querySelector(".html, body") as HTMLElement;
  const mobileMenu = document.querySelector(".menu_on_mobile") as HTMLElement;

  HamButton.classList.toggle("active");
  HtmlBody.classList.toggle("hide_scroll");
  mobileMenu.classList.toggle("active");
};
</script>
