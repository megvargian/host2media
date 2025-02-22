<template>
  <section class="relative lg:mb-0 mb-64">
    <section class="bg-[#210863] py-16 pb-64 md:pt-16 sm:pt-10 pt-5">
      <div class="lg:container sm:mx-auto mx-5">
        <h3
          class="Mulish-Black text-center text-white leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold"
        >
          Professional Email For Every Solution
        </h3>
        <p class="text-center text-white sm:text-xl text-sm pt-10 pb-5">
          Elevate Your Brand with Professional, Secure, and Reliable Email
          Hosting
        </p>
      </div>
    </section>
    <section class="md:pt-[20rem] pt-[30rem] z-1">
      <div
        class="custom-container mx-auto z-2 absolute left-0 lg:bottom-[5%] md:bottom-[-30%] sm:bottom-[-20%] bottom-[-20%] custom-mobile-position-email-hosting right-0 bg-white rounded-[50px] mx-10"
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
                    Email Hosting <br class="sm:flex hidden" />
                    For Everyone
                  </h2>
                  <p
                    class="lg:py-12 py-8 font-normal text-lg lg:text-left text-center"
                  >
                    Whether for personal or business use our email hosting makes
                    it easy to have your very own personalised email addres with
                    powerful features.
                  </p>
                  <div class="flex justify-center items-center">
                    <button
                      class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold py-4 px-8 Mulish-ExtraBold"
                    >
                      Get Your Professional Email
                    </button>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-6 col-span-12">
                <div class="text-left pb-6 flex lg:block justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      Email @your-name .com
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      Give your email a professional look with
                      <br class="sm:flex hidden" />
                      email @Your domain name.
                    </p>
                  </div>
                </div>
                <div class="text-left pb-6 lg:block flex justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      Spam & Virus Protection
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      premium filtering to keep your inbox
                      <br class="sm:flex hidden" />
                      clean and free of spam and viruses
                    </p>
                  </div>
                </div>
                <div class="text-left pb-6 lg:block flex justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      Secure Email Service
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      email archiving and recovery and
                      <br class="sm:flex hidden" />
                      never lose an email again, emails are
                      <br class="sm:flex hidden" />
                      encrypted and stored securely.
                    </p>
                  </div>
                </div>
                <div class="text-left pb-6 lg:block flex justify-center">
                  <div>
                    <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                      7/7 Expert Assistance
                    </p>
                    <p class="font-light Mulish-light pt-1">
                      Our team is always on hand to provide
                      <br class="sm:flex hidden" />
                      personalized support, ensuring your
                      <br class="sm:flex hidden" />
                      email hosting needs are met quickly
                      <br class="sm:flex hidden" />
                      and effectively.
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
          class="text-center text-[#0F132A] leading-tight pb-10 sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold Mulish-Black"
        >
          Reliable Email Hosting for Secure, <br class="sm:flex hidden" />
          Professional Communication
        </h3>
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
                <p class="text-center sm:text-xl text-sm py-5">
                  BUSINESS STARTUP
                </p>
                <p class="text-center sm:text-base text-sm pb-5">
                  Get your professional powerful, reliable email @your domain
                  without changing your hosting plan!
                </p>
                <p class="text-base font-black pb-3">Starting at</p>
                <p class="text-3xl font-black pb-5 Mulish-Black">
                  {{ isMonthly ? "$6.5/mo" : "$4.5/mo" }}
                </p>
                <div class="pt-6 pb-16">
                  <p class="mb-3">
                    <strong class="Mulish-Black">Disk Space per Mail Box</strong
                    >: 10GB
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Email</strong> @
                    <strong class="Mulish-Black">your domain</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Email Forwarding</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">35MB</strong> attachment limit
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Unlimited</strong> email
                    aliases
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Modern webmail</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Contacts</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">File Sharing</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Calendar</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">99.9%</strong> uptime
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">24/7</strong> Premium Support
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
                <p class="text-center sm:text-xl text-sm py-5">
                  BUSINESS CORPORATE
                </p>
                <p class="text-center sm:text-base text-sm pb-5">
                  Get your professional powerful, reliable email @your domain
                  without changing your hosting plan!
                </p>
                <p class="text-base font-black pb-3">Starting at</p>
                <p class="text-3xl font-black pb-5 Mulish-Black">
                  {{ isMonthly ? "$7.5/mo" : "$5.5/mo" }}
                </p>
                <div class="pt-6 pb-16">
                  <p class="mb-3">
                    <strong class="Mulish-Black">Disk Space per Mail Box</strong
                    >: 25GB
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Email</strong> @
                    <strong class="Mulish-Black">your domain</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Email Forwarding</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">35MB</strong> attachment limit
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Unlimited</strong> email
                    aliases
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Modern webmail</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Contacts</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">File Sharing</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Calendar</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">99.9%</strong> uptime
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">24/7</strong> Premium Support
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
                  <p class="text-center sm:text-xl text-sm py-5">
                    BUSINESS STARTUP
                  </p>
                  <p class="text-center sm:text-base text-sm pb-5">
                    Get your professional powerful, reliable email @your domain
                    without changing your hosting plan!
                  </p>
                  <p class="text-base font-black pb-3">Starting at</p>
                  <p class="text-3xl font-black pb-5 Mulish-Black">
                    {{ isMonthly ? "$6.5/mo" : "$4.5/mo" }}
                  </p>
                  <div class="pt-6 pb-16">
                    <p class="mb-3">
                      <strong class="Mulish-Black"
                        >Disk Space per Mail Box</strong
                      >: 10GB
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Email</strong> @
                      <strong class="Mulish-Black">your domain</strong>
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Email Forwarding</strong>
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">35MB</strong> attachment
                      limit
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Unlimited</strong> email
                      aliases
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Modern webmail</strong>
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Contacts</strong>
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">File Sharing</strong>
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">Calendar</strong>
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">99.9%</strong> uptime
                    </p>
                    <p class="mb-3">
                      <strong class="Mulish-Black">24/7</strong> Premium Support
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
                <p class="text-center sm:text-xl text-sm py-5">
                  BUSINESS CORPORATE
                </p>
                <p class="text-center sm:text-base text-sm pb-5">
                  Get your professional powerful, reliable email @your domain
                  without changing your hosting plan!
                </p>
                <p class="text-base font-black pb-3">Starting at</p>
                <p class="text-3xl font-black pb-5 Mulish-Black">
                  {{ isMonthly ? "$7.5/mo" : "$5.5/mo" }}
                </p>
                <div class="pt-6 pb-16">
                  <p class="mb-3">
                    <strong class="Mulish-Black">Disk Space per Mail Box</strong
                    >: 25GB
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Email</strong> @
                    <strong class="Mulish-Black">your domain</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Email Forwarding</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">35MB</strong> attachment limit
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Unlimited</strong> email
                    aliases
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Modern webmail</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Contacts</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">File Sharing</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">Calendar</strong>
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">99.9%</strong> uptime
                  </p>
                  <p class="mb-3">
                    <strong class="Mulish-Black">24/7</strong> Premium Support
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

  <section class="py-12 bg-[#210863] text-[#fff]">
    <div class="container mx-auto flex justify-center items-center pb-6">
      <h2
        class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] text-center text-[#fff] font-black"
      >
        Craft Your Own Professional Email.
      </h2>
    </div>
  </section>
  <section class="relative">
    <section class="pb-32 bg-[#210863]">
      <div class="custom-container mx-auto">
        <div class="grid grid-cols-12 lg:gap-12 gap-5">
          <div
            class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center"
          >
            <div>
              <div class="flex justify-start items-center pb-3 pl-10">
                <img
                  class="md:w-12 md:h-12 w-8 h-8"
                  src="~/assets/icons/personalize.svg"
                  alt="personalize"
                />
              </div>
              <div class="text-left">
                <p class="text-[#fff] font-black Mulish-Black text-lg">
                  Personalize your email
                </p>
                <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                  Create your signature using html or plain text, and update
                  your display name or the name of your organization.
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
                  src="~/assets/icons/search-1.svg"
                  alt="search"
                />
              </div>
              <div class="text-left">
                <p class="text-[#fff] font-black Mulish-Black text-lg">
                  Find any email with ease
                </p>
                <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                  Search your mailbox and narrow down the results using
                  intuitive filters.
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
                  src="~/assets/icons/composer.svg"
                  alt="composer"
                />
              </div>
              <div class="text-left">
                <p class="text-[#fff] font-black Mulish-Black text-lg">
                  Intuitive composer
                </p>
                <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                  Get everything you expect from a modern compose feature with a
                  great selection of formatting options, drag and drop images,
                  add links and check spelling in 44 languages.
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
                  src="~/assets/icons/contacts.svg"
                  alt="contacts"
                />
              </div>
              <div class="text-left">
                <p class="text-[#fff] font-black Mulish-Black text-lg">
                  Contacts
                </p>
                <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                  Access a complete directory of your contacts, add personal
                  details and notes to keep information up to date and handy.
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
                  src="~/assets/icons/sharing.svg"
                  alt="sharing"
                />
              </div>
              <div class="text-left">
                <p class="text-[#fff] font-black Mulish-Black text-lg">
                  File sharing
                </p>
                <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                  Easily share large files or any file with your team.
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
                  src="~/assets/icons/on-the-go.svg"
                  alt="on-the-go"
                />
              </div>
              <div class="text-left">
                <p class="text-[#fff] font-black Mulish-Black text-lg">
                  Respond to emails on the go
                </p>
                <p class="font-light pt-1 max-w-[250px] text-[#fff]">
                  Access your email through the native email app on your Android
                  or iPhone device using a POP or IMAP connection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="block mt-16">
      <div class="custom-container mx-auto bg-white rounded-[50px] sm:translate-y-[-8%] translate-y-[-10%] custom-translate-position">
        <div class="px-16">
          <div class="rounded-[50px] bg-white pt-16">
            <div class="pb-16">
              <h2
                class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] text-center text-[#0F132A] font-black Mulish-Black"
              >
                Streamlined Professional <br class="sm:flex hidden" />
                Email Hosting Solutions <br class="sm:flex hidden" />
              </h2>
            </div>
            <div
              class="grid grid-cols-12 lg:gap-10 gap-5 flex flex justify-start items-center"
            >
              <div class="col-span-12 text-left">
                <div class="lg:block flex justify-center">
                  <div class="text-left pb-6">
                    <p
                      class="text-[#0F132A] pb-3 text-2xl Mulish-Black font-black"
                    >
                      Security, Privacy, and <br class="sm:flex hidden" />
                      <span class="text-[#5564AD]">Peace Of Mind</span>
                    </p>
                    <p class="font-light Mulish-light pt-1 text-lg">
                      Get peace of mind knowing your data is hosted on the most
                      <br class="sm:flex hidden" />
                      secure, extensive, and reliable Global Cloud
                      Infrastructure with<br class="sm:flex hidden" />
                      99.9% uptime.
                    </p>
                    <p class="font-light Mulish-light pt-3 text-lg">
                      Your emails are instantly backed up, and even if you
                      delete an <br class="sm:flex hidden" />
                      email by mistake, there’s no need to worry. We securely
                      store <br class="sm:flex hidden" />
                      deleted emails in our backup directory for 15 days, giving
                      you <br class="sm:flex hidden" />
                      the flexibility to restore them at any time.
                    </p>
                  </div>
                </div>
                <div class="lg:block flex justify-center">
                  <div class="text-left pb-6">
                    <p
                      class="text-[#0F132A] pb-3 text-2xl Mulish-Black font-black"
                    >
                      A Modern
                      <span class="text-[#5564AD]">Webmail</span>
                    </p>
                    <p class="font-light Mulish-light pt-1 text-lg">
                      Our webmail is mobile-friendly and intuitive—just the way
                      <br class="sm:flex hidden" />
                      you expect it to be.
                    </p>
                    <p class="Mulish-Black text-lg pt-3">Easy to use</p>
                    <p class="font-light Mulish-light text-lg">
                      Tools and features you need in an intuitive user
                      interface.
                    </p>
                    <p class="Mulish-Black text-lg pt-3">Responsive design</p>
                    <p class="font-light Mulish-light text-lg">
                      Mobile-friendly for a great email experience on phones and
                      tablets
                    </p>
                    <p class="Mulish-Black text-lg pt-3">Calendar syncing</p>
                    <p class="font-light Mulish-light text-lg">
                      Stay organized with an integrated calendar that syncs with
                      <br class="sm:flex hidden" />
                      Android, Gmail, Mac OS X, iOS 5+, and Outlook
                    </p>
                  </div>
                </div>
                <div class="lg:block flex justify-center">
                  <div class="text-left pb-6">
                    <p
                      class="text-[#0F132A] pb-3 text-2xl Mulish-Black font-black"
                    >
                      7/7 <span class="text-[#5564AD]">Premium Support </span>
                    </p>
                    <p class="font-light Mulish-light pt-1 text-lg">
                      Get fast, around-the-clock support from our team of
                      experts <br class="sm:flex hidden" />
                      via email, phone, or live chat.
                    </p>
                  </div>
                </div>
                <div class="lg:block flex justify-center">
                  <div class="text-left pb-6">
                    <p
                      class="text-[#0F132A] pb-3 text-2xl Mulish-Black font-black"
                    >
                      <span class="text-[#5564AD]">Easy Migration </span>
                      to <br class="sm:flex hidden" />Host2Media Email
                    </p>
                    <p class="font-light Mulish-light pt-1 text-lg">
                      No problem. Let our professional services team help with
                      <br class="sm:flex hidden" />
                      Migrating your emails from anywhere to Host2media<br
                        class="sm:flex hidden"
                      />
                      Professional email with zero interruption.
                    </p>
                  </div>
                </div>
                <div class="lg:block flex justify-center">
                  <div class="text-left pb-6">
                    <p
                      class="text-[#0F132A] pb-3 text-2xl Mulish-Black font-black"
                    >
                      You Don’t Need a Website!
                    </p>
                    <p class="font-light Mulish-light pt-1 text-lg">
                      Host2Media professional email works with any domain
                      <br class="sm:flex hidden" />
                      name you own, even if it's registered, hosted, or parked
                      <br class="sm:flex hidden" />
                      somewhere else.
                    </p>
                  </div>
                </div>
                <div class="lg:block flex justify-center">
                  <div class="text-left pb-6">
                    <p
                      class="text-[#0F132A] pb-3 text-2xl Mulish-Black font-black"
                    >
                      <span class="text-[#5564AD]">Why You Need It ?</span>
                    </p>
                    <p class="font-light Mulish-light pt-1 text-lg">
                      When customers see an email using a free, generic
                      <br class="sm:flex hidden" />
                      address, like 'you@outlook.com', they think one thing: not
                      <br class="sm:flex hidden" />
                      professional. Most businesses use custom email addresses
                      <br class="sm:flex hidden" />
                      because it reinforces their company brand with every email
                      <br class="sm:flex hidden" />
                      they send.
                    </p>
                    <p class="font-light Mulish-light pt-3 text-lg">
                      If you’re trying to stay competitive, you need an email
                      <br class="sm:flex hidden" />
                      address that builds credibility and keeps you on-par with
                      <br class="sm:flex hidden" />
                      the biggest brands. It’s time to set up ‘you@you-name.com’
                      <br class="sm:flex hidden" />
                      email address now.
                    </p>
                  </div>
                </div>
                <div class="flex justify-start items-start pt-12 pb-16">
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white text-sm font-bold py-4 px-8 Mulish-ExtraBold"
                  >
                    Get Your Professional Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <section class="lg:pb-16 pb-10 block">
    <div class="custom-container mx-auto bg-white rounded-[50px]">
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
