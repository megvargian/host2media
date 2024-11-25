<template>
  <div>
    <section class="bg-[#5564AD] py-16 md:pt-16 sm:pt-10 pt-5">
        <div class="lg:container sm:mx-auto mx-5">
            <h3 class="text-center text-white leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold">
                Your Domain name is your online name
            </h3>
            <p class="text-center text-white sm:text-xl text-sm pt-10 pb-5">
                Search for your online name and register it, before someone else does.
            </p>
            <div class="block justify-center items-center mx-auto max-w-[35rem]">
              <form
                @submit.prevent="SubmitFormSearchDomain"
                class="flex w-full relative"
                data-netlify-recaptcha="true"
              >
                <input
                  class="w-full rounded text-base p-4 text-[#0F132A] placeholder-[#0F132A] Mulish-light outline-none"
                  type="text"
                  placeholder="Find your exceptional online name..."
                  v-model="searchDomain.name"
                  required
                />
                <button
                  type="submit"
                  :disabled="loading"
                  class="bg-[#90A1FF] p-3 rounded-r absolute right-0"
                >
                  <img
                    v-if="loading"
                    src="../assets/images/loading.svg"
                    class="animate-spin loading-spinner w-8 h-8 flex m-auto"
                    alt="loading"
                  />
                  <img v-else class="w-8 h-8" src="~/assets/icons/search.svg" />
                </button>
              </form>
              <span class="text-white" v-if="!loading"
                >{{ response }}
                <span
                  class="font-bold"
                  :class="
                    isAvailibleMsg === 'available'
                      ? 'text-green-600'
                      : 'text-red-800'
                  "
                  >{{ isAvailibleMsg }}</span
                ></span
              >
            </div>
            <div class="py-5 flex mx-auto justify-center">
                <!-- <ul class="flex items-center justify-center">
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                </ul> -->
                <p class="text-center text-white sm:text-lg text-sm">
                  With over 300 domain extensions available, you’re sure to find the perfect fit for your needs.
                </p>
            </div>
        </div>
    </section>
    <section>
      <section class="block custom-height">
        <div
          class="custom-container mx-auto custom-container-mobile relative h-[28rem]"
        >
          <div class="px-3 flex justify-center items-center absolute top-[-10%] right-0 left-0">
            <div class="rounded-[50px] bg-white py-14 md:px-0 px-5">
              <div class="grid grid-cols-12 gap-5">
                <div
                  class="md:col-span-6 col-span-12 lg:pl-[4rem] lg:pr-[0rem] flex justify-center items-center"
                >
                  <div>
                    <h2
                      class="leading-[1.25] lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black"
                    >
                      Tips and tricks on <br class="sm:flex hidden" />
                      getting the best <br class="sm:flex hidden" />
                      Domain Name
                    </h2>
                  </div>
                </div>
                <div class="md:col-span-6 col-span-12 md:pl-12 md:pr-3 pr-0 pl-0">
                  <div class="lg:block">
                    <div class="text-left pb-6">
                      <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                        Keep your domain simple <br class="sm:flex hidden" />
                        to stay memorable
                      </p>
                      <p class="font-light Mulish-light pt-1">
                        Try to keep your domain length less
                        <br class="sm:flex hidden" />
                        than 15 character, include your brand
                        <br class="sm:flex hidden" />
                        name or the desired keywords.
                      </p>
                    </div>
                  </div>
                  <div class="lg:block">
                    <div class="text-left pb-6">
                      <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                        Use our Domain Search Tool
                      </p>
                      <p class="font-light Mulish-light pt-1">
                        Get domain availabilities, prices, <br
                          class="sm:flex hidden"
                        />
                        and even suggestions
                      </p>
                    </div>
                  </div>
                  <div class="lg:block">
                    <div class="text-left pb-6">
                      <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                        Reserve Your Domain name
                      </p>
                      <p class="font-light Mulish-light pt-1">
                        Register with the extension that is suitable, <br class="sm:flex hidden" />
                        by country, by business or title.<br class="sm:flex hidden" />
                        Multiple domain registration is an option for a <br class="sm:flex hidden" />
                        better search result and SEO ranking.
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
    <section class="bg-[#5564AD] py-16 md:pt-24 sm:pt-32 lg:pt-16">
        <div class="container mx-auto">
            <h3 class="text-center text-white leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold">
                Why Host2media For Your <br class="sm:flex hidden" /> Domain name
            </h3>
            <p class="text-center text-white sm:text-xl text-sm pt-10 pb-5">
              Host2Media offers domain registration with instant activation, and full DNS management.
            </p>
            <div class="grid grid-cols-6 lg:gap-15 gap-5 pt-5">
              <!-- <div class="lg:col-span-2 col-span-0"></div> -->
              <div
                class="lg:col-span-2 col-span-12 pb-5 lg:block flex justify-center mx-auto"
              >
                <div>
                  <div class="text-left">
                    <p class="text-white font-black Mulish-Black text-lg">
                      Experts you can trust
                    </p>
                    <p class="font-light pt-1 max-w-[250px] text-white">
                      Host2Media support team is committed to your ongoing success and is always accessible via phone, email, and chat any assistance you may need.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="lg:col-span-2 col-span-12 pb-5 lg:block flex justify-center mx-auto"
              >
                <div>
                  <div class="text-left">
                    <p class="text-white font-black Mulish-Black text-lg">
                      Domain Transfer in 2 steps
                    </p>
                    <p class="font-light pt-1 max-w-[250px] text-white">
                      Group all your domains into a single account by transferring them to Host2Media and benefit from our advantages.
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="lg:col-span-2 col-span-12 pb-5 lg:block flex justify-center mx-auto"
              >
                <div>
                  <div class="text-left">
                    <p class="text-white font-black Mulish-Black text-lg">
                      Easy Domain Management
                    </p>
                    <p class="font-light pt-1 max-w-[250px] text-white">
                      An easy to use control panel in your customer portal to manage your domains, edit DNS records,
                      Domain locking , domain forwarding, and more.
                    </p>
                  </div>
                </div>
              </div>
              <!-- <div class="lg:col-span-2 col-span-0"></div> -->
            </div>
        </div>
    </section>
    <section class="py-10">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 lg:gap-10 gap-5 md:mx-0 mx-5">
          <div class="md:col-span-6 col-span-12 order-2 lg:order-1">
            <div class="grid grid-cols-12 lg:gap-10 gap-5">
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/fun-tld-logo.png" alt="fun-tid">
                  <p class="text-center">$12.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/site-tld-logo.png" alt="sitetld">
                  <p class="text-center">$15.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <div class="flex items-center justify-center">
                    <img class="max-h-full w-[56px]" src="~/assets/images/my-logo.png" alt="blog-tld">
                  </div>
                  <p class="text-center">$9.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/store.png" alt="store">
                  <p class="text-center">$9.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/online-tld-logo.png" alt="outline-tld">
                  <p class="text-center">$8.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/me-tld-logo.png" alt="me-tid">
                  <p class="text-center">$15.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/shop-tld-logo.png" alt="shop-tld">
                  <p class="text-center">$6.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-6 bg-white p-5 rounded-[30px] flex justify-center items-center h-[150px] text-center">
                <div class="block">
                  <img class="max-h-full w-full" src="~/assets/images/cloud-tld-logo.png" alt="cloud-tld">
                  <p class="text-center">$15.00/Year</p>
                </div>
              </div>
              <div class="md:col-span-4 col-span-12 bg-white p-5 rounded-[30px] mx-auto flex justify-self-center md:justify-center items-center h-[150px] text-center">
                <div class="block">
                  <div class="flex justify-center items-center pt-3">
                    <img class="max-h-full w-full block" src="~/assets/images/space-logo.png" alt="co">
                  </div>
                  <p class="text-center">$12.00/Year</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:col-span-6 col-span-12 flex justify-center items-center order-1 lg:order-2">
            <div class="block md:text-left text-center">
              <h2
                class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black"
              >
                Domain Pricing
              </h2>
              <p
                class="lg:py-12 py-8 font-normal text-lg lg:text-left text-center"
              >
                We understand that you are looking for affordable domain prices. This is why we offer discounts on Most Popular Domains for your first year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10 md:mx-0 mx-5">
      <div class="container mx-auto">
        <div class="text-center pb-8">
          <h3 class="text-2xl font-black Mulish-Black">Domain Price List</h3>
        </div>
        <div class="max-w-[40rem] mx-auto flex">
          <form
            class="flex w-full relative"
            data-netlify-recaptcha="true"
          >
            <button
              type="submit"
              :disabled="loading"
              class="p-3 rounded-r absolute left-0"
            >
              <img
                v-if="loading"
                src="../assets/images/loading.svg"
                class="animate-spin loading-spinner w-8 h-8 flex m-auto"
                alt="loading"
              />
              <img v-else class="w-8 h-8" src="~/assets/images/white-search-logo.svg" />
            </button>
            <input
              class="w-full rounded-lg border border-[#0F132A] text-base p-4 pl-14 text-[#0F132A] placeholder-[#0F132A] Mulish-light outline-none"
              type="text"
              placeholder="Look For Domain Extension"
              v-model="searchDomain.name"
              required
            />
          </form>
        </div>
        <div class="">
          <div class="flex items-center justify-center py-8">
            <div class="overflow-x-auto w-full max-w-4xl mx-auto">
                <table class="w-full text-left border border-[#0F132A] hidden md:table">
                    <thead>
                        <tr class="bg-[#CAF0F8]">
                            <th class="p-3">TLD</th>
                            <th class="p-3">Register</th>
                            <th class="p-3">Renew</th>
                            <th class="p-3">Transfer</th>
                            <th class="p-3">Restore</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#F9F9F9]">
                            <td class="p-3 font-black">.com</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                        </tr>
                        <tr class="bg-[#CAF0F8]">
                            <td class="p-3 font-black">.org</td>
                            <td class="p-3 text-red-600 font-bold">$0.00 <span class="line-through text-gray-[#CAF0F80">$9.99</span></td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                        </tr>
                        <tr class="bg-[#F9F9F9]">
                            <td class="p-3 font-black">.com</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                        </tr>
                        <tr class="bg-[#CAF0F8]">
                            <td class="p-3 font-black">.com</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                        </tr>
                        <tr class="bg-[#F9F9F9]">
                            <td class="p-3 font-black">.com</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                        </tr>
                        <tr class="bg-[#CAF0F8]">
                            <td class="p-3 font-black">.com</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                            <td class="p-3">$0.00</td>
                        </tr>
                    </tbody>
                </table>
                <table class="w-full text-left border border-[#0F132A] md:hidden">
                  <thead class="bg-[#CAF0F8]">
                    <tr>
                      <th class="p3">TLD</th>
                      <th class="p3">Register</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- Row 1 -->
                    <tr class="group bg-[#F9F9F9]">
                      <td class="p3 font-bold">.com</td>
                      <td class="p3 flex items-center justify-between">
                        <span>$20.85</span>
                        <button
                          class="transform transition-transform"
                          :class="expandedRow === 0 ? 'rotate-180': ''"
                          @click="toggleDetails(0)"
                        >
                          ▼
                        </button>
                      </td>
                    </tr>
                    <tr v-if="expandedRow === 0" class="bg-gray-50">
                      <td></td>
                      <td colspan="2" class="p3">
                        <div class="space-y-1">
                          <p>Renew: $20.85</p>
                          <p>Transfer: $20.85</p>
                          <p>Restore: $250</p>
                        </div>
                      </td>
                    </tr>

                    <!-- Row 2 -->
                    <tr class="group bg-[#CAF0F8]">
                      <td class="p3 font-bold">.com</td>
                      <td class="p3 flex items-center justify-between">
                        <span>$20.85</span>
                        <button
                          class="transform transition-transform"
                          :class="expandedRow === 1 ? 'rotate-180': ''"
                          @click="toggleDetails(1)"
                        >
                          ▼
                        </button>
                      </td>
                    </tr>
                    <tr v-if="expandedRow === 1" class="bg-gray-50">
                      <td></td>
                      <td colspan="2" class="p3">
                        <div class="space-y-1">
                          <p>Renew: $20.85</p>
                          <p>Transfer: $20.85</p>
                          <p>Restore: $250</p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div class="text-center flex justify-center items-center py-5">
                  <img class="mx-3" src="~/assets/icons/left.svg" alt="left">
                  <p>Showing 1 to 8 of 737 TLDs</p>
                  <img class="mx-3" src="~/assets/icons/right.svg" alt="right">
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-10 md:mx-0 mx-5">
      <div class="container mx-auto md:pb-0 pb-8">
        <div class="text-center">
          <h3 class="text-center text-[#0F132A] leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold Mulish-Black">
            Why Pay For a Domain <br class="sm:flex hidden" /> When You Can Get It For Free?
          </h3>
          <p class="text-center text-[#0F132A] sm:text-2xl text-sm pt-10 pb-5">
            Get your FREE Domain Name with one of our web hosting Yearly plan
          </p>
        </div>
        <div>
          <div class="text-center justify-center flex pb-10">
            <div class="bg-white rounded-[50px] p-2 flex">
                <button @click="switchPlan('monthly')" :class="isMonthly ? 'bg-[#0F132A] text-white rounded-[50px] py-2 px-4' : 'bg-white text-[#0F132A] mx-3'">
                  Monthly
                </button>
                <button @click="switchPlan('yearly')" :class="isMonthly ? 'bg-white text-[#0F132A] mx-3' : 'bg-[#0F132A] text-white rounded-[50px] py-2 px-4'">
                  Yearly
                </button>
            </div>
          </div>
          <div class="grid grid-cols-6 lg:gap-10 gap-5 pb-8 md:flex hidden ">
            <div class="col-span-1"></div>
            <div class="col-span-2">
              <div class="rounded-[30px] bg-white border border-[#e2e3e7]">
                <div class="bg-[#0F132A] py-4 rounded-t-[30px]"></div>
                <div class="px-5 text-center text-[#0F132A] pb-8">
                  <p class="text-center sm:text-xl text-sm py-5">
                    STARTUP
                  </p>
                  <p class="text-center sm:text-base text-sm pb-5">
                    Begin with managed shared hosting, which offers an affordable price for new websites, including WordPress management
                  </p>
                  <p class="text-base font-black pb-3">Starting at</p>
                  <p class="text-3xl font-black pb-5 Mulish-Black">{{ isMonthly ? '$20.83/mo' : '$16.66/mo' }}</p>
                  <p class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"><span>{{ !isMonthly ? 'YOU' : '' }}</span> SAVE 25% WITH YEARLY PLAN</p>
                  <div class="pt-6 pb-16">
                    <p class="mb-3"><strong class="Mulish-Black">1</strong> Website</p>
                    <p class="mb-3">Disk Space : <strong class="Mulish-Black">15 GB</strong></p>
                    <p class="mb-3">Bandwidth : <strong class="Mulish-Black">750 GB</strong></p>
                    <p class="mb-3">Basic email : <strong class="Mulish-Black">5</strong></p>
                    <p class="mb-3">Database : <strong class="Mulish-Black">3</strong></p>
                    <p v-if="!isMonthly" class="mb-3"><strong class="Mulish-Black">Free</strong> Domain Name(*)</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> SSL Certificates</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> Daily Backup(*)</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> Website Migration</p>
                    <p class="mb-3"><strong class="Mulish-Black">1-click Wordpress</strong> install</p>
                    <p class="mb-3"><strong class="Mulish-Black">Wordpress</strong> Management</p>
                    <p class="mb-3"><strong class="Mulish-Black">Daily Malware Scan</strong></p>
                    <p class="mb-3">Standard<strong class="Mulish-Black"> DDoS Protection</strong></p>
                    <p class="mb-3"><strong class="Mulish-Black">24/7 Premium Support</strong></p>
                  </div>
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="col-span-2">
              <div class="rounded-[30px] bg-white border border-[#e2e3e7]">
                <div class="bg-[#5564AD] py-4 rounded-t-[30px] "></div>
                <div class="px-5 text-center text-[#0F132A] pb-8">
                  <p class="text-center sm:text-xl text-sm py-5">
                    CORPORATE
                  </p>
                  <p class="text-center sm:text-base text-sm pb-5">
                    Begin with managed shared hosting, which offers an affordable price for new websites, including WordPress management
                  </p>
                  <p class="text-base font-black pb-3">Starting at</p>
                  <p class="text-3xl font-black pb-5 Mulish-Black">{{ isMonthly ? '$40.99/mo' : '$29.99/mo' }}</p>
                  <p class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"><span>{{ !isMonthly ? 'YOU' : '' }}</span> SAVE 35% WITH YEARLY PLAN</p>
                  <div class="pt-6 pb-7">
                    <p class="mb-3"><strong class="Mulish-Black">5</strong> Website</p>
                    <p class="mb-3">Disk Space : <strong class="Mulish-Black">60 GB</strong></p>
                    <p class="mb-3">Bandwidth : <strong class="Mulish-Black">2500 GB</strong></p>
                    <p class="mb-3">Basic email : <strong class="Mulish-Black">60</strong></p>
                    <p class="mb-3">Database : <strong class="Mulish-Black">10</strong></p>
                    <p  v-if="!isMonthly" class="mb-3"><strong class="Mulish-Black">Free</strong> Domain Name(*)</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> SSL Certificates</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> Daily Backup(*)</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> Website Migration</p>
                    <p class="mb-3"><strong class="Mulish-Black">1-click Wordpress</strong> install</p>
                    <p class="mb-3"><strong class="Mulish-Black">Wordpress</strong> Management</p>
                    <p class="mb-3"><strong class="Mulish-Black">Fast Performance</strong></p>
                    <p class="mb-3"><strong class="Mulish-Black">Daily Malware Scan</strong></p>
                    <p class="mb-3">Standard<strong class="Mulish-Black"> DDoS Protection</strong></p>
                    <p class="mb-3"><strong class="Mulish-Black">24/7 Premium Support</strong></p>
                  </div>
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                  >
                    Add to Cart
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
                      STARTUP
                    </p>
                    <p class="text-center sm:text-base text-sm pb-5">
                      Begin with managed shared hosting, which offers an affordable price for new websites, including WordPress management
                    </p>
                    <p class="text-base font-black pb-3">Starting at</p>
                    <p class="text-3xl font-black pb-5 Mulish-Black">{{ isMonthly ? '$20.83/mo' : '$16.66/mo' }}</p>
                    <p class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"><span>{{ !isMonthly ? 'YOU' : '' }}</span> SAVE 25% WITH YEARLY PLAN</p>
                    <div class="pt-6 pb-16">
                      <p class="mb-3"><strong class="Mulish-Black">1</strong> Website</p>
                      <p class="mb-3">Disk Space : <strong class="Mulish-Black">15 GB</strong></p>
                      <p class="mb-3">Bandwidth : <strong class="Mulish-Black">750 GB</strong></p>
                      <p class="mb-3">Basic email : <strong class="Mulish-Black">5</strong></p>
                      <p class="mb-3">Database : <strong class="Mulish-Black">3</strong></p>
                      <p v-if="!isMonthly" class="mb-3"><strong class="Mulish-Black">Free</strong> Domain Name(*)</p>
                      <p class="mb-3"><strong class="Mulish-Black">Free</strong> SSL Certificates</p>
                      <p class="mb-3"><strong class="Mulish-Black">Free</strong> Daily Backup(*)</p>
                      <p class="mb-3"><strong class="Mulish-Black">Free</strong> Website Migration</p>
                      <p class="mb-3"><strong class="Mulish-Black">1-click Wordpress</strong> install</p>
                      <p class="mb-3"><strong class="Mulish-Black">Wordpress</strong> Management</p>
                      <p class="mb-3"><strong class="Mulish-Black">Daily Malware Scan</strong></p>
                      <p class="mb-3">Standard<strong class="Mulish-Black"> DDoS Protection</strong></p>
                      <p class="mb-3"><strong class="Mulish-Black">24/7 Premium Support</strong></p>
                    </div>
                    <button
                      class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <button @click="goToNextSlide()">
                  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="rounded-[30px] bg-white border border-[#e2e3e7]">
                <div class="bg-[#5564AD] py-4 rounded-t-[30px] "></div>
                <div class="px-5 text-center text-[#0F132A] pb-8">
                  <p class="text-center sm:text-xl text-sm py-5">
                    CORPORATE
                  </p>
                  <p class="text-center sm:text-base text-sm pb-5">
                    Begin with managed shared hosting, which offers an affordable price for new websites, including WordPress management
                  </p>
                  <p class="text-base font-black pb-3">Starting at</p>
                  <p class="text-3xl font-black pb-5 Mulish-Black">{{ isMonthly ? '$40.99/mo' : '$29.99/mo' }}</p>
                  <p class="text-[12px] px-5 py-2 w-fit mx-auto bg-[#0F132A] text-white rounded-[30px]"><span>{{ !isMonthly ? 'YOU' : '' }}</span> SAVE 35% WITH YEARLY PLAN</p>
                  <div class="pt-6 pb-7">
                    <p class="mb-3"><strong class="Mulish-Black">5</strong> Website</p>
                    <p class="mb-3">Disk Space : <strong class="Mulish-Black">60 GB</strong></p>
                    <p class="mb-3">Bandwidth : <strong class="Mulish-Black">2500 GB</strong></p>
                    <p class="mb-3">Basic email : <strong class="Mulish-Black">60</strong></p>
                    <p class="mb-3">Database : <strong class="Mulish-Black">10</strong></p>
                    <p  v-if="!isMonthly" class="mb-3"><strong class="Mulish-Black">Free</strong> Domain Name(*)</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> SSL Certificates</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> Daily Backup(*)</p>
                    <p class="mb-3"><strong class="Mulish-Black">Free</strong> Website Migration</p>
                    <p class="mb-3"><strong class="Mulish-Black">1-click Wordpress</strong> install</p>
                    <p class="mb-3"><strong class="Mulish-Black">Wordpress</strong> Management</p>
                    <p class="mb-3"><strong class="Mulish-Black">Fast Performance</strong></p>
                    <p class="mb-3"><strong class="Mulish-Black">Daily Malware Scan</strong></p>
                    <p class="mb-3">Standard<strong class="Mulish-Black"> DDoS Protection</strong></p>
                    <p class="mb-3"><strong class="Mulish-Black">24/7 Premium Support</strong></p>
                  </div>
                  <button
                    class="rounded-[10px] bg-[#5564AD] text-white font-bold md:py-4 md:px-8 py-3 px-6 Mulish-ExtraBold w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>
    <section class="lg:pb-32 pb-10 block">
    <div
      class="custom-container mx-auto bg-white rounded-[50px]"
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
                    Check Out Our Reseller Offers
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
                    <span class="font-bold sm:text-base text-sm">Transfer a Domain name</span>
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
  </div>
</template>

<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/vue';
const swiperRef = ref(null);
const loading = ref(false);
const searchDomain = ref({
  name: "",
});
const response = ref("");
const isAvailibleMsg = ref("");
const isMonthly = ref(false);
// Track which row is expanded
const expandedRow = ref(-1);
const toggleDetails = (rowIndex: number) => {
  expandedRow.value = expandedRow.value === rowIndex ? 0 : rowIndex;
};
function onSwiperReady(swiperInstance: any) {
  swiperRef.value = swiperInstance;
}
const goToNextSlide = () => {
  swiperRef.value?.slideNext();
}
const toggleAccordion = (id: Number) => {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  content?.classList.toggle("hidden");
  icon?.classList.toggle("rotate-180");
};
useHead({
  title: 'Host2Media - Find your perfect domain name',
  meta: [
    { name: 'title', content: 'Host2Media - Find your perfect domain name' },
    { name: 'description', content: 'Check domain availability using our domain checker and buy a domain name with Host2Media for your online project today.' },
    { name: 'robots', content: 'index, follow' },
    { 'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8' },
    { name: 'language', content: 'English' },
    { name: 'revisit-after', content: '7 days' },
    { name: 'author', content: 'Host2Media' }
  ],
  link: [
    { rel: 'canonical', href: 'https://www.host2media.com/domains' },
    { rel: 'alternate', hreflang: 'x-default', href: 'https://www.host2media.com/domains' }
  ]
});
const getResultFromWhois = async (name: string) => {
  const { data, refresh, error } = useFetch(
    `/api/whois/?apiKey=at_UBnljMwAUWbyMR34rPOj6aGIayY3q&domainName=${name}&credits=WHOIS`,
    {
      method: "GET",
      immediate: false,
    }
  );
  const config = data as {
    value: {
      DomainInfo: {
        domainAvailability: string;
        domainName: string;
      };
    };
  };
  await refresh();
  if (error.value) {
    loading.value = false;
    response.value = "Something went wrong please try again later";
    console.error(error.value);
  } else {
    response.value = config.value.DomainInfo.domainAvailability.toLowerCase() === "available" ? 'Woah! this domain is' : 'Woops! this domain is ';
    isAvailibleMsg.value =
      config.value.DomainInfo.domainAvailability.toLowerCase() === "available"
        ? "available"
        : "taken";
    loading.value = false;
  }
};
const SubmitFormSearchDomain = async () => {
  if (searchDomain.value.name.includes(" ")) {
    response.value = "Please remove any space in your search for domain name";
    isAvailibleMsg.value = "";
  } else if (!searchDomain.value.name.includes(".")) {
    response.value =
      "Please make sure the domain main is properly formated like .com, .org etc";
    isAvailibleMsg.value = "";
  } else {
    loading.value = true;
    await getResultFromWhois(searchDomain.value.name);
  }
};
const switchPlan = (plan: string) => {
  if (plan === 'monthly'){
    isMonthly.value = true;
  } else {
    isMonthly.value = false;
  }
}
</script>