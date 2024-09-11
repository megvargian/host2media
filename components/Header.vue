<template>
    <div class="w-full">
        <header>
            <nav>
                <div class="w-full py-3 bg-[#5564ad]">
                    <div class="grid grid-cols-12 gap-5">
                        <div class="col-span-6 hidden lg:block"></div>
                        <div class="col-span-12 lg:col-span-6">
                            <ul class="flex lg:justify-end justify-center items-center text-white">
                                <li class="lg:hidden block mr-8">
                                    <img class="h-6 w-12" src="~/assets/images/logo.svg">
                                </li>
                                <li class="mx-2 Mulish-light text-[0.75rem]">
                                    <a href="#">
                                        Blog
                                    </a>
                                </li>
                                <li class="mx-2 Mulish-light text-[0.75rem]">
                                    <a href="#">
                                        Knowladge Base
                                    </a>
                                </li>
                                <li class="mx-2 Mulish-light text-[0.75rem]">
                                    <a href="#">
                                        Status
                                    </a>
                                </li>
                                <li class="mx-2 Mulish-light font-semibold text-[0.75rem] lg:pr-32">
                                    <a href="#">
                                        Customer Portal
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </nav>
            <nav class="py-5 flex flex-row justify-start items-center lg:px-16 md:px-16 sm:px-8 ">
                <img class="lg:block hidden h-12 w-18" src="~/assets/images/logo.svg">
                <ul class="basic-2/4 lg:flex hidden font-medium text-sm xl:text-lg pl-8 text-[#0F132A]">
                    <li class="mx-2">
                        <a class="text-[#0F132A]" href="#">
                            Domains
                        </a>
                    </li>
                    <li class="mx-2">
                        <a class="text-[#0F132A]" href="#">
                            Website Hosting
                        </a>
                    </li>
                    <li class="mx-2">
                        <a class="text-[#0F132A]" href="#">
                            Professional Email
                        </a>
                    </li>
                    <li class="mx-2">
                        <a class="text-[#0F132A]" href="#">
                            Reseller Program
                        </a>
                    </li>
                    <li class="mx-2">
                        <a class="text-[#0F132A]" href="#">
                            Dev Serices
                        </a>
                    </li>
                    <li class="mx-2">
                        <a class="text-[#0F132A]" href="#">
                            Contact us
                        </a>
                    </li>
                </ul>
                <button class="hamburger hamburger--collapse block lg:hidden" type="button">
                    <div @click="activeHamburgerButton()" class="menu_mobile_nav">
                        <div class="hamburger_menu_icon">
                            <div class="line bg-[#5564AD]"></div>
                            <div class="line bg-[#5564AD] middle_line"></div>
                            <div class="line bg-[#5564AD]"></div>
                        </div>
                    </div>
                </button>
                <div id="menu_mobile" class="menu_on_mobile block lg:hidden">
                <div class="menu_on_mobile_wrapper">
                    <div class="menu_on_mobile_inner_wrapper relative">
                        <div>
                            <a class="block my-3 page_font animated_menu_el" href="#">
                                <div class="menu_item">
                                    Test
                                </div>
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
const activeHamburgerButton = () => {
    const HamButton = document.querySelector('.menu_mobile_nav') as HTMLElement;
    const HtmlBody = document.querySelector('.html, body') as HTMLElement;
    const mobileMenu = document.querySelector('.menu_on_mobile') as HTMLElement;

    HamButton.classList.toggle('active');
    HtmlBody.classList.toggle('hide_scroll');
    mobileMenu.classList.toggle('active');
}
</script>