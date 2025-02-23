<template>
  <section class="relative lg:mb-0 mb-64">
    <section class="bg-[#210863] py-16 pb-64 md:pt-16 sm:pt-10 pt-5">
      <div class="lg:container sm:mx-auto mx-5">
        <h3
          class="text-center text-white leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold"
        >
          Managed Web Hosting for Every Solution
        </h3>
        <p class="text-center text-white sm:text-xl text-sm pt-10 pb-5">
          Empowering Your Digital Presence with Seamless Hosting Excellence.
        </p>
      </div>
    </section>
    <section class="md:pt-[30rem] pt-[35rem] z-1">
      <div
        class="custom-container mx-auto z-2 absolute left-0 lg:bottom-[5%] md:bottom-[-25%] sm:bottom-[-20%] bottom-[0%] custom-mobile-position-web-hosting right-0 bg-white rounded-[50px] mx-10"
      >
        <div class="px-10 flex justify-center items-center">
          <div class="rounded-[50px] pt-10">
            <div class="grid grid-cols-12 lg:gap-10 gap-5 flex">
              <div
                class="lg:col-span-6 col-span-12 lg:pr-[10rem] flex justify-center items-center"
              >
                <div>
                  <h2
                    class="Mulish-Black leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black"
                  >
                    Host2Media <br class="sm:flex hidden" />
                    contributes to <br class="sm:flex hidden" />
                    your success.
                  </h2>
                  <p
                    class="lg:py-12 py-8 font-normal text-lg lg:text-left text-center"
                  >
                    Customers are choosing to migrate their services to
                    Host2Media to benefit from our fast hosting and top-notch
                    support.
                  </p>
                  <div class="flex lg:justify-start justify-center items-center ml-4">
                    <button
                      class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold py-4 px-8 Mulish-ExtraBold"
                    >
                      Talk To Sales For Hosting Offers
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-6 col-span-12">
                <div class="text-left pb-6 flex lg:block justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      Easy Control Panel
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      We employ a user-friendly hosting
                      <br class="sm:flex hidden" />
                      control panel, simplifying the
                      <br class="sm:flex hidden" />
                      management of your web hosting and
                      <br class="sm:flex hidden" />
                      alleviating any associated challenges.
                    </p>
                  </div>
                </div>
                <div class="text-left pb-6 lg:block flex justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      Comprehensive in functionality.
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      We go beyond web hosting, providing
                      <br class="sm:flex hidden" />
                      a tool suite that Incorporates all the
                      <br class="sm:flex hidden" />
                      essential elements for your success.
                    </p>
                  </div>
                </div>
                <div class="text-left pb-6 lg:block flex justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      Fast & Reliable
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      This leads to improved SEO rankings,
                      <br class="sm:flex hidden" />
                      reduced bounce rates, and increased
                      <br class="sm:flex hidden" />
                      conversion rates!
                    </p>
                  </div>
                </div>
                <div class="text-left pb-6 lg:block flex justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      7/7 Support
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      Reach out to our customer service
                      <br class="sm:flex hidden" />
                      team at any time. Our dedicated
                      <br class="sm:flex hidden" />
                      support team is ever-ready to address
                      <br class="sm:flex hidden" />
                      and resolve any questions or concerns
                      <br class="sm:flex hidden" />
                      you may have.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>

  <section class="pt-10 md:mx-0 mx-5">
    <div class="container mx-auto md:pb-0 pb-8">
      <div class="text-center">
        <h3
          class="text-center text-[#0F132A] leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold Mulish-Black"
        >
          Powerful Managed Web Hosting <br class="sm:flex hidden" />
          Solutions for Your Online Success
        </h3>
        <p class="text-center text-[#0F132A] sm:text-2xl text-sm pt-10 pb-5">
          Get your FREE Domain Name with one of our web hosting Yearly plan
        </p>
      </div>
      <div>
        <div class="text-center justify-center flex pb-10">
          <div class="bg-white rounded-[50px] p-2 flex">
            <button
              @click="switchPlan('monthly')"
              :class="isMonthly
                ? 'bg-[#0F132A] text-white rounded-[50px] py-2 px-4'
                : 'bg-white text-[#0F132A] mx-3'
                "
            >
              Monthly
            </button>
            <button
              @click="switchPlan('yearly')"
              :class="isMonthly
                ? 'bg-white text-[#0F132A] mx-3'
                : 'bg-[#0F132A] text-white rounded-[50px] py-2 px-4'
                "
            >
              Yearly
            </button>
          </div>
        </div>
        <div
          class="grid grid-cols-6 flex justify-center lg:gap-10 gap-5 pb-8 md:flex hidden"
        >
          <div class="col-span-1"></div>
          <div class="col-span-2">
            <div
              class="rounded-[30px] bg-white border border-[#e2e3e7] max-w-[25rem]"
            >
              <div class="bg-[#0F132A] py-4 rounded-t-[30px]"></div>
              <div class="px-5 text-center text-[#0F132A] pb-8">
                <p class="text-center sm:text-xl text-sm py-5">STARTUP</p>
                <p class="text-center sm:text-base text-sm pb-5">
                  Begin with managed shared hosting, which offers an affordable
                  price for new websites, including WordPress management
                </p>
                <p class="text-base font-black pb-3">Starting at</p>
                <p class="text-3xl font-black pb-5 Mulish-Black">
                  {{ isMonthly ? "$20.83/mo" : "$16.66/mo" }}
                </p>
                <p
                  class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"
                >
                  <span>{{ !isMonthly ? "YOU" : "" }}</span> SAVE 25% WITH
                  YEARLY PLAN
                </p>
                <div class="pt-6 pb-16">
                  <p class="mb-3">
                    <strong class="Mulish-Black">1</strong> Website
                  </p>
                  <p class="mb-3">
                    Disk Space : <strong class="Mulish-Black">15 GB</strong>
                  </p>
                  <p class="mb-3">
                    Bandwidth : <strong class="Mulish-Black">750 GB</strong>
                  </p>
                  <p class="mb-3">
                    Basic email : <strong class="Mulish-Black">5</strong>
                  </p>
                  <p class="mb-3">
                    Database : <strong class="Mulish-Black">3</strong>
                  </p>
                  <p v-if="!isMonthly" class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Domain Name(*)
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> SSL Certificates
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Daily Backup(*)
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Website Migration
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">1-click Wordpress</strong>
                    install
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Wordpress</strong> Management
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Daily Malware Scan</strong>
                  </p>
                  <p class="mb-3">
                    Standard<strong class="Mulish-Black">
                      DDoS Protection</strong
                    >
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">24/7 Premium Support</strong>
                  </p>
                </div>
                <button
                  class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                >
                  Talk to Sale
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-2">
            <div
              class="rounded-[30px] bg-white border border-[#e2e3e7] max-w-[25rem]"
            >
              <div class="bg-[#210863] py-4 rounded-t-[30px]"></div>
              <div class="px-5 text-center text-[#0F132A] pb-8">
                <p class="text-center sm:text-xl text-sm py-5">CORPORATE</p>
                <p class="text-center sm:text-base text-sm pb-5">
                  Begin with managed shared hosting, which offers an affordable
                  price for new websites, including WordPress management
                </p>
                <p class="text-base font-black pb-3">Starting at</p>
                <p class="text-3xl font-black pb-5 Mulish-Black">
                  {{ isMonthly ? "$40.99/mo" : "$29.99/mo" }}
                </p>
                <p
                  class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"
                >
                  <span>{{ !isMonthly ? "YOU" : "" }}</span> SAVE 35% WITH
                  YEARLY PLAN
                </p>
                <div class="pt-6 pb-7">
                  <p class="mb-3">
                    <strong class="Mulish-Black">5</strong> Website
                  </p>
                  <p class="mb-3">
                    Disk Space : <strong class="Mulish-Black">60 GB</strong>
                  </p>
                  <p class="mb-3">
                    Bandwidth : <strong class="Mulish-Black">2500 GB</strong>
                  </p>
                  <p class="mb-3">
                    Basic email : <strong class="Mulish-Black">60</strong>
                  </p>
                  <p class="mb-3">
                    Database : <strong class="Mulish-Black">10</strong>
                  </p>
                  <p v-if="!isMonthly" class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Domain Name(*)
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> SSL Certificates
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Daily Backup(*)
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Website Migration
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">1-click Wordpress</strong>
                    install
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Wordpress</strong> Management
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Fast Performance</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Daily Malware Scan</strong>
                  </p>
                  <p class="mb-3">
                    Standard<strong class="Mulish-Black">
                      DDoS Protection</strong
                    >
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">24/7 Premium Support</strong>
                  </p>
                </div>
                <button
                  class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                >
                  Talk to Sale
                </button>
              </div>
            </div>
          </div>
          <div class="col-span-1"></div>
        </div>
        <swiper
          space-between="40"
          class="my-swiper md:!hidden"
          @swiper="onSwiperReady"
        >
          <swiper-slide>
            <div class="flex justify-center items-center">
              <div class="rounded-[30px] bg-white border border-[#e2e3e7]">
                <div class="bg-[#0F132A] py-4 rounded-t-[30px]"></div>
                <div class="px-5 text-center text-[#0F132A] pb-8">
                  <p class="text-center sm:text-xl text-sm py-5">STARTUP</p>
                  <p class="text-center sm:text-base text-sm pb-5">
                    Begin with managed shared hosting, which offers an
                    affordable price for new websites, including WordPress
                    management
                  </p>
                  <p class="text-base font-black pb-3">Starting at</p>
                  <p class="text-3xl font-black pb-5 Mulish-Black">
                    {{ isMonthly ? "$20.83/mo" : "$16.66/mo" }}
                  </p>
                  <p
                    class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"
                  >
                    <span>{{ !isMonthly ? "YOU" : "" }}</span> SAVE 25% WITH
                    YEARLY PLAN
                  </p>
                  <div class="pt-6 pb-16">
                    <p class="mb-3">
                      <strong class="Mulish-Black">1</strong> Website
                    </p>
                    <p class="mb-3">
                      Disk Space : <strong class="Mulish-Black">15 GB</strong>
                    </p>
                    <p class="mb-3">
                      Bandwidth : <strong class="Mulish-Black">750 GB</strong>
                    </p>
                    <p class="mb-3">
                      Basic email : <strong class="Mulish-Black">5</strong>
                    </p>
                    <p class="mb-3">
                      Database : <strong class="Mulish-Black">3</strong>
                    </p>
                    <p v-if="!isMonthly" class="mb-3">
                      <strong class="Mulish-Black">Free</strong> Domain Name(*)
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Free</strong> SSL
                      Certificates
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Free</strong> Daily Backup(*)
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Free</strong> Website
                      Migration
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">1-click Wordpress</strong>
                      install
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Wordpress</strong> Management
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Daily Malware Scan</strong>
                    </p>
                    <p class="mb-3">
                      Standard<strong class="Mulish-Black">
                        DDoS Protection</strong
                      >
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">24/7 Premium Support</strong>
                    </p>
                  </div>
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                  >
                    Talk to Sale
                  </button>
                </div>
              </div>
              <button @click="goToNextSlide()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="rounded-[30px] bg-white border border-[#e2e3e7]">
              <div class="bg-[#210863] py-4 rounded-t-[30px]"></div>
              <div class="px-5 text-center text-[#0F132A] pb-8">
                <p class="text-center sm:text-xl text-sm py-5">CORPORATE</p>
                <p class="text-center sm:text-base text-sm pb-5">
                  Begin with managed shared hosting, which offers an affordable
                  price for new websites, including WordPress management
                </p>
                <p class="text-base font-black pb-3">Starting at</p>
                <p class="text-3xl font-black pb-5 Mulish-Black">
                  {{ isMonthly ? "$40.99/mo" : "$29.99/mo" }}
                </p>
                <p
                  class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"
                >
                  <span>{{ !isMonthly ? "YOU" : "" }}</span> SAVE 35% WITH
                  YEARLY PLAN
                </p>
                <div class="pt-6 pb-7">
                  <p class="mb-3">
                    <strong class="Mulish-Black">5</strong> Website
                  </p>
                  <p class="mb-3">
                    Disk Space : <strong class="Mulish-Black">60 GB</strong>
                  </p>
                  <p class="mb-3">
                    Bandwidth : <strong class="Mulish-Black">2500 GB</strong>
                  </p>
                  <p class="mb-3">
                    Basic email : <strong class="Mulish-Black">60</strong>
                  </p>
                  <p class="mb-3">
                    Database : <strong class="Mulish-Black">10</strong>
                  </p>
                  <p v-if="!isMonthly" class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Domain Name(*)
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> SSL Certificates
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Daily Backup(*)
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Free</strong> Website Migration
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">1-click Wordpress</strong>
                    install
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Wordpress</strong> Management
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Fast Performance</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Daily Malware Scan</strong>
                  </p>
                  <p class="mb-3">
                    Standard<strong class="Mulish-Black">
                      DDoS Protection</strong
                    >
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">24/7 Premium Support</strong>
                  </p>
                </div>
                <button
                  class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                >
                  Talk to Sale
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>

  <section class="lg:pb-16 pb-10 block">
    <div class="custom-container mx-auto bg-white rounded-[50px]">
      <div class="px-10 flex justify-center items-center">
        <div class="rounded-[50px] bg-white pt-16">
          <div class="grid grid-cols-12 lg:gap-10 gap-5 flex">
            <div
              class="lg:col-span-6 col-span-12 lg:pr-[4rem] flex justify-start items-start"
            >
              <div>
                <h2
                  class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black Mulish-Black"
                >
                  Why Host2Media?
                </h2>
                <p class="py-12 font-normal text-lg lg:text-left text-center">
                  At Host2Media, your online success starts with reliable web
                  hosting you can trust. Join the thousands of satisfied clients
                  who count on us to power their websites with speed, security,
                  and scalability. From cutting-edge hosting technology to
                  tailored plans and 24/7 expert support, we’re here to help you
                  every step of the way. Whether you’re launching your first
                  site or expanding your digital footprint, Host2Media provides
                  everything you need to build a thriving online presence.
                </p>
                <div class="flex justify-center items-center">
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold py-4 px-8 Mulish-ExtraBold"
                  >
                    Talk To Sales For Hosting Offers
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    Free Migration
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    Our specialized migration team <br class="sm:flex hidden" />
                    guarantees a seamless transfer for your
                    <br class="sm:flex hidden" />
                    website making sure all files and emails
                    <br class="sm:flex hidden" />
                    are transfered without any disruptions.
                    <br class="sm:flex hidden" />
                    Your website will remain accessible
                    <br class="sm:flex hidden" />
                    throughout the entire migration process.
                  </p>
                </div>
              </div>
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    Money Back Guarantee
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    Situations may not unfold as expected,
                    <br class="sm:flex hidden" />
                    To express our sincere concern, Our
                    <br class="sm:flex hidden" />
                    accommodating refund policy is in
                    <br class="sm:flex hidden" />
                    place to address your needs, offering a
                    <br class="sm:flex hidden" />
                    money-back guarantee within 25 days
                    <br class="sm:flex hidden" />
                    of your registration.*
                  </p>
                </div>
              </div>
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    99.9% Up Time Guarantee
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    We guarantee 99.9% uptime and <br class="sm:flex hidden" />
                    understand the importance of a stable
                    <br class="sm:flex hidden" />
                    online presence with our commitment
                    <br class="sm:flex hidden" />
                    to consistent availability, you can trust
                    <br class="sm:flex hidden" />
                    that your website will always be up
                    <br class="sm:flex hidden" />
                    and running smoothly and remain
                    <br class="sm:flex hidden" />
                    accessible to your audience.
                  </p>
                </div>
              </div>
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    7/7 Support
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    Reach out to our customer service<br
                      class="sm:flex hidden"
                    />
                    team at any time. Our dedicated
                    <br class="sm:flex hidden" />
                    support team is ever-ready to address
                    <br class="sm:flex hidden" />
                    and resolve any questions or concerns<br
                      class="sm:flex hidden"
                    />
                    you may have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 bg-[#210863] text-[#fff]">
    <div class="container mx-auto flex justify-center items-center pb-6">
      <h2
        class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] text-center text-[#fff] font-black"
      >
        Web Hosting With All The Features <br class="sm:flex hidden" />
        Your Website Could require
      </h2>
    </div>
    <div class="container mx-auto flex justify-center itmes-center">
      <p class="text-center sm:mx-0 mx-4">
        No matter where your online adventure leads you, Host2Media simplifies
        the beginning, <br class="sm:flex hidden" />
        ensuring a smooth start. Our shared web hosting solutions enable a swift
        setup for your website, <br class="sm:flex hidden" />
        providing everything necessary for online success at an affordable cost.
      </p>
    </div>
  </section>
  <section class="pb-12 bg-[#210863]">
    <div class="custom-container mx-auto">
      <div class="grid grid-cols-12 lg:gap-12 gap-5">
        <div
          class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
        >
          <div>
            <div class="flex justify-start items-center pb-3 pl-10">
              <img
                class="md:w-12 md:h-12 w-8 h-8"
                src="~/assets/icons/control-panel.svg"
                alt="control-panel"
              />
            </div>
            <div class="text-left">
              <p class="text-[#fff] font-black Mulish-Black text-lg">
                Easy Control Panel
              </p>
              <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                user-friendly control panel, equipped with a complete set of a
                comprehensive suite of management tools, It has a simple layout
                that works on mobile devices, allowing you to manage your web
                hosting from almost anywhere!
              </p>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
        >
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/free-domain.svg"
                alt="free-domain"
              />
            </div>
            <div class="text-left">
              <p class="text-[#fff] font-black Mulish-Black text-lg">
                Free Domain
              </p>
              <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                Get your web presence started with a free domain name included
                in every hosting plan. Elevate your online identity without any
                extra cost.
              </p>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
        >
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/web-host-SSL.svg"
                alt="web-host-SSL"
              />
            </div>
            <div class="text-left">
              <p class="text-[#fff] font-black Mulish-Black text-lg">
                Free SSL
              </p>
              <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                With Free SSL Certificates secure your directories and shield
                your website from malicious activities, showcasing your
                dedication to prioritizing security for your visitors.
              </p>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
        >
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/security.svg"
                alt="security"
              />
            </div>
            <div class="text-left">
              <p class="text-[#fff] font-black Mulish-Black text-lg">
                Enhanced Security
              </p>
              <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                Keep your websites up and running, drawing in more visitors,
                with our unique safeguard against malware, exploits and DDoS
                prevention. This helps prevent hacks, protects your website, and
                safeguards your reputation from any potential damage, ensuring a
                fast browsing experience.
              </p>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
        >
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/backup.svg"
                alt="backup"
              />
            </div>
            <div class="text-left">
              <p class="text-[#fff] font-black Mulish-Black text-lg">
                Automated Daily Backup
              </p>
              <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                We backup your website, (Home Directory) including your emails
                every day and keep that backup for 7 days. This ensures you can
                restore your data at any time if needed, giving you peace of
                mind.
              </p>
            </div>
          </div>
        </div>
        <div
          class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
        >
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/speed.svg"
                alt="speed"
              />
            </div>
            <div class="text-left">
              <p class="text-[#fff] font-black Mulish-Black text-lg">
                Speed and Performance
              </p>
              <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                Guarantee minimal latency and attain maximum speed by delivering
                swift browsing experiences through our optimized hardware and
                software technology. This results in enhanced SEO rankings,
                reduced bounce rates, and increased conversion rates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="lg:pb-16 pb-10 block">
    <div
      class="custom-container mx-auto bg-white rounded-[50px] rounded-t-[0px]"
    >
      <div class="px-10 flex justify-center items-center">
        <div class="rounded-[50px] bg-white pt-16">
          <div class="grid grid-cols-12 lg:gap-10 gap-5 flex">
            <div
              class="lg:col-span-6 col-span-12 lg:pr-[4rem] flex justify-center items-center"
            >
              <div>
                <h2
                  class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black Mulish-Black"
                >
                  Reseller Solutions <br class="sm:flex hidden" />
                  for Agencies of <br class="sm:flex hidden" />
                  All Sizes
                </h2>
                <p class="py-12 font-normal text-lg lg:text-left text-center">
                  Resell Web Hosting, domain names, professional email, VPS and
                  SSL certificates at scale with Host2Media and set your own
                  margins and profits.
                </p>
                <div class="flex justify-center items-center">
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold py-4 px-8 Mulish-ExtraBold"
                  >
                    Talk to Sales Reseller Offers
                  </button>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 col-span-12">
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    Flexible turn-key solutions <br class="sm:flex hidden" />
                    to resell on your own terms
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    Join our Reseller Program and Resell host2media's
                    <br class="sm:flex hidden" />
                    hosting services under your own brand name using
                    <br class="sm:flex hidden" />
                    the white-label solution and directly invoice your
                    <br class="sm:flex hidden" />
                    end-users, or make profits by offering Host2media
                    <br class="sm:flex hidden" />
                    services as affiliation.
                  </p>
                </div>
              </div>
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    Great Pricing without hidden cost
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    We provide reduced pricing for our Resellers,<br
                      class="sm:flex hidden"
                    />
                    enabling you to stay competitive in your market
                    <br class="sm:flex hidden" />
                    while delivering high-quality hosting services.
                  </p>
                </div>
              </div>
              <div class="lg:block flex justify-center">
                <div class="text-left pb-6">
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    Personalized Support
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    Our team is committed to ensuring your
                    <br class="sm:flex hidden" />
                    success. You'll be provided with a dedicated
                    <br class="sm:flex hidden" />
                    account manager, round-the-clock technical
                    <br class="sm:flex hidden" />
                    support for you and your clients, and an
                    <br class="sm:flex hidden" />
                    extensive knowledge base, ensuring you have
                    <br class="sm:flex hidden" />
                    the assistance you require whenever it's
                    <br class="sm:flex hidden" />
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="custom-container mx-auto py-16">
      <div class="custom-bg-img w-full z-1 relative">
        <img
          class="w-full -z-1"
          src="~/assets/images/banner.png"
          alt="banner"
        />
        <h4
          class="text-white md:text-[1.5rem] sm:text-[1.25rem] text-[1rem] Mulish-Black font-bold text-[#0F132A] absolute top-10 left-10"
        >
          LET US DO THE JOB!
        </h4>
        <h2
          class="leading-tight text-white md:text-[2.5rem] sm:text-[2rem] text[1.5rem] text-[#0F132A] absolute bottom-12 left-12"
        >
          YOU NAME IT,<br class="sm:flex hidden" />
          WE BUILD IT!
        </h2>
        <button
          class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold md:py-4 md:px-8 md:block hidden py-3 px-6 Mulish-ExtraBold absolute bottom-12 left-[40%]"
        >
          Learn More About Our Dev Service
        </button>
      </div>
      <div class="md:hidden block py-4 flex justify-center">
        <button
          class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold md:py-4 md:px-8 md:hidden block py-3 px-6 Mulish-ExtraBold"
        >
          Learn More About Our Dev Service
        </button>
      </div>
    </div>
  </section>
  <section>
    <div class="custom-sm-container mx-auto pb-16">
      <div class="custom-bg-img w-full">
        <div class="flex justify-center items-center">
          <h3
            class="text-4xl text-[#0F132A] font-black Mulish-bold lg:text-left text-center"
          >
            Frequently Asked Questions
          </h3>
        </div>
      </div>
      <div class="pt-12">
        <div class="w-full max-w-[700px] mx-auto mt-8">
          <!-- Accordion Item 1 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(1)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold sm:text-base text-sm"
                  >How can I register or Transfer a Domain name?</span
                >
                <svg
                  class="w-4 h-4 transform transition-transform duration-200 icons"
                  id="icon-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div id="content-1" class="p-4 hidden">
              <ul class="Mulish-light">
                <li>
                  1- Use the domain search tool to check the availability of
                  your desired domain name.
                </li>
                <li>
                  2- If the domain is available, proceed to register it by
                  providing the necessary information
                </li>
              </ul>
            </div>
          </div>

          <!-- Accordion Item 2 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(2)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold sm:text-base text-sm"
                  >Transfer a Domain name</span
                >
                <svg
                  class="w-4 h-4 transform transition-transform duration-200 icons"
                  id="icon-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div id="content-2" class="p-4 hidden">
              <ul class="Mulish-light">
                <li>
                  1 - Unlock the domain at your current registrar. This involves
                  removing any domain locks or privacy settings.
                </li>
                <li>2 - Obtain the authorization code</li>
                <li>
                  3 - Use the domain search tool to initiate the domain transfer
                  process
                </li>
                <li>
                  4 - Provide the domain name and authorization code during the
                  transfer request
                </li>
                <li>
                  5 - Check your email for a confirmation message and follow any
                  additional instructions provided by both the old registrar and
                  Host2Media
                </li>
                <p>
                  Keep in mind that domain transfers may take up to 7 days to
                  complete. Additionally, it's crucial to ensure that your
                  domain registration information is accurate and up-to-date to
                  avoid any issues during the process.
                </p>
              </ul>
            </div>
          </div>
          <!-- Accordion Item 3 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(3)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold sm:text-base text-sm"
                  >Can I have an email without having a website?</span
                >
                <svg
                  class="w-4 h-4 transform transition-transform duration-200 icons"
                  id="icon-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div id="content-3" class="p-4 hidden">
              <p>
                Yes, you can have an email without having a website, sign up for
                the host2media business email.
              </p>
            </div>
          </div>
          <!-- Accordion Item 4 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(4)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold sm:text-base text-sm"
                  >Do I need a Domain name to have a web hosting and email
                  address?</span
                >
                <svg
                  class="w-4 h-4 transform transition-transform duration-200 icons"
                  id="icon-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div id="content-4" class="p-4 hidden">
              <p>
                You can get web hosting services without having a domain name.
                In such cases, your website can be accessed using a subdomain
                from our private domain list. (e.g., yourname.anydomain.com).
              </p>
              <p>
                This is common for development or testing purposes, but for a
                professional or public website, having your own domain is
                recommended.
              </p>
            </div>
          </div>
          <!-- Accordion Item 5 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(5)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold sm:text-base text-sm"
                  >Email without a domain name</span
                >
                <svg
                  class="w-4 h-4 transform transition-transform duration-200 icons"
                  id="icon-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div id="content-5" class="p-4 hidden">
              <p>
                If you want a more professional appearance, consider getting a
                custom domain for your email.
              </p>
              <p>
                However, having your own domain name is generally advisable for
                a professional online presence. It provides branding consistency
                across your website and email, and it often looks more credible
                to users. If you decide to get both web hosting and email
                services, you can often manage them together under your custom
                domain for a unified online identity.
              </p>
            </div>
          </div>
          <!-- Accordion Item 6 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(6)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold sm:text-base text-sm"
                  >Can I import my old host emails to host2media mail server?
                </span>
                <svg
                  class="w-4 h-4 transform transition-transform duration-200 icons"
                  id="icon-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </h2>
            <div id="content-6" class="p-4 hidden">
              <p>
                Yes, you can important your entire old host emails, to
                host2media mail server. all you need to do is go to mail
                migration section in your client portal and follow the steps
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/vue";
const swiperRef = ref(null);
const isMonthly = ref(false);
function onSwiperReady(swiperInstance: any) {
  swiperRef.value = swiperInstance;
}
const goToNextSlide = () => {
  swiperRef.value?.slideNext();
};
const switchPlan = (plan: string) => {
  if (plan === "monthly") {
    isMonthly.value = true;
  } else {
    isMonthly.value = false;
  }
};
const toggleAccordion = (id: Number) => {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  content?.classList.toggle("hidden");
  icon?.classList.toggle("rotate-180");
};
</script>
