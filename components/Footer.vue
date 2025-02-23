<template>
  <section class="bg-[#210863] w-full py-12">
    <div class="container mx-auto">
      <footer>
        <div class="grid grid-cols-12 lg:gap-12 gap-5 text-white sm:mx-0 mx-5">
          <div class="lg:col-span-3 col-span-6">
            <div class="lg:pl-10">
              <img
                class="mb-3 sm:w-[75px] sm:h-[43px] w-[50px] h-[29px]"
                src="~/assets/images/footer-logo.svg"
                alt="logo"
              />
              <p class="text-[0.8rem] font-light Mulish-light mb-2">
                Host2Media <br />
                Makdesi 2034 1111 <br />
                Hamra Beirut 07
              </p>
              <p class="text-[0.8rem] font-light Mulish-light mb-2 pt-2">
                +961 3 821114 <br />
                Office Hours: M-F, 9 am-16:30 CET
              </p>
              <ul class="mt-3 flex justify-start">
                <li class="mr-2">
                  <a target="_blank" href="https://X.com/host2media">
                    <img class="w-8 h-8" src="~/assets/icons/x.svg" alt="x">
                  </a>
                </li>
                <li class="mr-2">
                  <a target="_blank" href="https://Facebook.com/host2media">
                    <img class="w-8 h-8" src="~/assets/icons/fb.svg" alt="facebook">
                  </a>
                </li>
                <li class="mr-2">
                  <a target="_blank" href="https://Linkedin.com/company/host2media">
                    <img class="w-8 h-8" src="~/assets/icons/linkedIn.svg" alt="linkedIn">
                  </a>
                </li>
                <li class="mr-2">
                  <a target="_blank" href="https://Instagram.com/host2media">
                    <img class="w-8 h-8" src="~/assets/icons/insta.svg" alt="instagram">
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-3 col-span-6">
            <div>
              <p class="text-lg font-black pb-3">Links</p>
              <ul>
                <li class="sm:text-[0.75rem] text-sm font-light mb-2">
                  <a> Customer Portal </a>
                </li>
                <!-- <li class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2">
                                    <a>
                                        Status
                                    </a>
                                </li> -->
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a href="https://blog.host2media.com"> Host2Media Blog </a>
                </li>
                <li class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2">
                    <NuxtLink to="/about-us">
                      About Us
                    </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <div class="lg:col-span-3 col-span-6">
            <div>
              <p class="text-lg font-black pb-3">Products</p>
              <ul>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <NuxtLink to="web-hosting"> Website Hosting </NuxtLink>
                </li>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <NuxtLink to="domains"> Domain name </NuxtLink>
                </li>
                <!-- <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> VPS </a>
                </li> -->
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <NuxtLink to="email-hosting"> Professional Email </NuxtLink>
                </li>
                <!-- <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Dev Services </a>
                </li> -->
                <!-- <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Reseller & Affiliate Program </a>
                </li> -->
              </ul>
            </div>
          </div>
          <div class="lg:col-span-3 col-span-6">
            <div>
              <p class="text-lg font-black pb-3">Legal</p>
              <ul>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Terms Of Service </a>
                </li>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Privacy Policy </a>
                </li>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Cookie Settings </a>
                </li>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Acceptable Use Policy </a>
                </li>
                <li
                  class="sm:text-[0.75rem] sm:leading-4 text-sm font-light mb-2"
                >
                  <a> Report Abuse </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </section>
  <section class="bg-white py-3 w-full">
    <div class="flex justify-center">
      <p class="Mulish-light text-[0.6rem]">Copyright © 2025, Host2Media,</p>
    </div>
  </section>
</template>
