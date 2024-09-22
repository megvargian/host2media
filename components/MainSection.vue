<template>
  <section>
    <div class="container mx-auto">
      <div class="grid grid-cols-12 gap-4">
        <div class="col-span-12 lg:col-span-6">
          <h2 class="leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[36px] font-bold lg:py-32 pt-0 sm:pb-16 pb-5">
            New Web Hosting, <br class="sm:flex hidden" />
            New Potential
          </h2>
          <p class="sm:text-xl text-sm lg:text-left text-center sm:pt-8 sm:px-0 px-3">
            Tap into the potential of managed Web Hosting
          </p>
          <p class="sm:text-xl text-sm lg:text-left text-center sm:px-0 px-3">
            ensuring your website's speed, security, and constant availability.
          </p>
        </div>
        <div class="col-span-12 lg:col-span-6 flex justify-center">
          <img
            class="h-auto sm:w-[450px] w-[300px] pt-10"
            src="~/assets/images/main-image.png"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="my-12 lg:pt-32 lg:mx-12 custom-margin-bottom">
    <div class="container mx-auto flex justify-center items-center pb-12">

      <h2 class="lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center sm:text-5xl md:text-4xl text-[36px] lg:text-left text-center font-black text-[#0F132A]">
        The all-in-one solution to get online quickly
      </h2>
    </div>
    <div class="w-full lg:rounded-3xl rounded-tl-[50px] rounded-bl-[50px] bg-[#5564AD] mt-10 relative lg:pt-32">
      <div class="container w-full mx-auto lg:absolute lg:right-0 lg:left-0 top-[-30%]">
        <div class="grid grid-cols-12 gap-5 py-10 lg:mx-0 mx-5">
          <div class="lg:col-span-3 col-span-6 bg-white sm:p-5 p-3 rounded-xl">
            <div class="flex justify-center items-center sm:pb-10 pb-5">
              <img
                class="md:w-12 md:h-12 w-8 h-8"
                src="~/assets/icons/server.svg"
                alt="server-icon"
              />
            </div>
            <p class="text-[#0F132A]">Web Hosting</p>
            <p class="text-[#0F132A]">Starting @ $24,99 /month</p>
          </div>
          <div class="lg:col-span-3 col-span-6 bg-white sm:p-5 p-3 rounded-xl">
            <div class="flex justify-center items-center sm:pb-10 pb-5">
              <img
                class="md:w-12 md:h-12 w-8 h-8"
                src="~/assets/icons/domain.svg"
                alt="domain-icon"
              />
            </div>
            <p class="text-[#0F132A]">Domain name</p>
            <p class="text-[#0F132A]">Starting @ $10,0 /Year</p>
          </div>
          <div class="lg:col-span-3 col-span-6 bg-white sm:p-5 p-3 rounded-xl">
            <div class="flex justify-center items-center sm:pb-10 pb-5">
              <img
                class="md:w-12 md:h-12 w-8 h-8"
                src="~/assets/icons/email.svg"
                alt="email-icon"
              />
            </div>
            <p class="text-[#0F132A]">Professional Email</p>
            <p class="text-[#0F132A]">Starting @ $4,00 /month</p>
          </div>
          <div class="lg:col-span-3 col-span-6 bg-white sm:p-5 p-3 rounded-xl">
            <div class="flex justify-center items-center sm:pb-10 pb-5">
              <img
                class="md:w-12 md:h-12 w-8 h-8"
                src="~/assets/icons/lock.svg"
                alt="lock-icon"
              />
            </div>
            <p class="text-[#0F132A]">SSL Certificates</p>
            <p class="text-[#0F132A]">Starting @ $40,0 /Year</p>
          </div>
        </div>
      </div>
      <div class="container w-full mx-auto">
        <div class="grid grid-cols-12 gap-4 py-10">
          <div class="lg:col-span-6 col-span-12 order-2 lg:order-1 flex justify-center items-center mx-5 lg:pb-0 pb-32">
            <div class="w-full">
              <form @submit.prevent="SubmitFormSearchDomain" class="flex w-full relative" data-netlify-recaptcha="true">
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
              <span v-if="!loading">{{ response }}</span>
            </div>
          </div>
          <div class="lg:col-span-6 col-span-12 order-1 lg:order-2 flex lg:justify-start justify-center lg:pl-10">
            <h2 class="leading-tight sm:text-5xl md:text-4xl text-[36px] font-bold text-white lg:text-left text-center">
              Find Your Exceptional <br class="sm:flex hidden" />
              Online Name
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="sm:pt-[30rem] pt-[35rem]  relative z-1">
    <div
      class="custom-container mx-auto z-2 absolute left-0 top-[0%] custom-mobile-position right-0 bg-white rounded-[50px] mx-10"
    >
      <div class="px-10 flex justify-center items-center">
        <div class="rounded-[50px] pt-10">
          <div class="grid grid-cols-12 lg:gap-10 gap-5 flex">
            <div class="lg:col-span-6 col-span-12 lg:pr-[10rem] flex justify-center items-center">
              <div>
                <h2
                  class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black"
                >
                  Host2Media <br class="sm:flex hidden" />
                  contributes to <br class="sm:flex hidden" />
                  your success.
                </h2>
                <p class="lg:py-12 py-8 font-normal text-lg lg:text-left text-center">
                  Customers are choosing to migrate their services to Host2Media
                  to benefit from our fast hosting and top-notch support.
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
              <div class="text-left pb-6 flex lg:block justify-center">
               <div>
                  <p class="text-[#0F132A] text-lg Mulish-Black font-black">
                    Easy Control Panel
                  </p>
                  <p class="font-light Mulish-light pt-1">
                    We employ a user-friendly hosting <br class="sm:flex hidden" />
                    control panel, simplifying the <br class="sm:flex hidden" />
                    management of your web hosting and <br class="sm:flex hidden" />
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
                    We go beyond web hosting, providing <br class="sm:flex hidden" />
                    a tool suite that Incorporates all the <br class="sm:flex hidden" />
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
                    This leads to improved SEO rankings, <br class="sm:flex hidden" />
                    reduced bounce rates, and increased <br class="sm:flex hidden" />
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
                    Reach out to our customer service <br class="sm:flex hidden" />
                    team at any time. Our dedicated <br class="sm:flex hidden" />
                    support team is ever-ready to address <br class="sm:flex hidden" />
                    and resolve any questions or concerns <br class="sm:flex hidden" />
                    you may have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="w-full bg-[#5564AD] lg:pt-64 pt-[10rem] sm:mt-[25rem] lg:mt-0 mt-[10rem] custom-mobile-margin -z-10 text-white">
      <div class="custom-container mx-auto">
        <div class="grid grid-cols-12 lg:gap-10 gap-5">
          <div class="lg:col-span-6 col-span-12 order-2 lg:order-1">
            <div class="lg:block flex justify-center sm:mx-0 mx-10">
              <div class="text-left text-white pb-10">
                <p class="text-lg Mulish-Black font-black">Web Hosting</p>
                <p class="font-light Mulish-light pt-1">
                  Shared Website Hosting gives you everything <br class="sm:flex hidden" />
                  you need to get started, a free domain name,<br class="sm:flex hidden" />
                  an easy control panel, a website builder, and <br class="sm:flex hidden" />
                  email hosting for your website.
                </p>
                <p class="font-semibold pt-2 Mulish-SemiBold">
                  Starting at $24,99 /month
                </p>
              </div>
            </div>
            <div class="lg:block flex justify-center sm:mx-0 mx-10">
              <div class="text-left text-white pb-10">
                <p class="text-lg Mulish-Black font-black">VPS</p>
                <p class="font-light Mulish-light pt-1">
                  Our VPS solution offers flexibility for your <br class="sm:flex hidden" />
                  expansion and allows for easy scalability <br class="sm:flex hidden" />
                  without committing to long-term investments.
                </p>
                <p class="font-bold pt-2 Mulish-SemiBold">
                  Starting at $30,00 /month
                </p>
              </div>
            </div>
            <div class="lg:block flex justify-center sm:mx-0 mx-10">
              <div class="text-left text-white pb-10">
                <p class="text-lg Mulish-Black font-black">Professional Email</p>
                <p class="font-light Mulish-light pt-1">
                  Experience the benefits of professional email <br class="sm:flex hidden" />
                  for your business and make your brand look <br class="sm:flex hidden" />
                  more credible. with easy upgrades as you grow.
                </p>
                <p class="font-bold pt-2 Mulish-SemiBold">
                  Starting at $4,00 /month
                </p>
              </div>
            </div>
          </div>
          <div class="lg:col-span-6 col-span-12 order-1 lg:order-2 flex justify-center items-center">
            <div>
              <h2 class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#fff] font-black Mulish-Black">
                We Offer Hosting <br class="sm:flex hidden" />
                Solutions For all <br class="sm:flex hidden" />
                Your Needs.
              </h2>
              <p class="py-12 font-normal text-lg lg:text-left text-center">
                Host2Media offers comprehensive hosting <br class="sm:flex hidden" />
                solutions tailored to meet all your business <br class="sm:flex hidden" />
                needs. No matter your industry or the specific <br class="sm:flex hidden" />
                solution you're seeking, we've got you covered <br class="sm:flex hidden" />
                with a range of hosting options.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <section class="lg:pb-32 pb-10 block">
    <div class="custom-container mx-auto bg-white rounded-[50px] rounded-t-[0px]">
      <div class="px-10 flex justify-center items-center">
        <div class="rounded-[50px] bg-white pt-16">
          <div class="grid grid-cols-12 lg:gap-10 gap-5 flex">
            <div class="lg:col-span-6 col-span-12 lg:pr-[4rem] flex justify-center items-center">
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
                    Join our Reseller Program and Resell host2media's <br class="sm:flex hidden" />
                    hosting services under your own brand name using <br class="sm:flex hidden" />
                    the white-label solution and directly invoice your <br class="sm:flex hidden" />
                    end-users, or make profits by offering Host2media <br class="sm:flex hidden" />
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
                    We provide reduced pricing for our Resellers,<br class="sm:flex hidden" />
                    enabling you to stay competitive in your market <br class="sm:flex hidden" />
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
                    Our team is committed to ensuring your <br class="sm:flex hidden" />
                    success. You'll be provided with a dedicated <br class="sm:flex hidden" />
                    account manager, round-the-clock technical <br class="sm:flex hidden" />
                    support for you and your clients, and an <br class="sm:flex hidden" />
                    extensive knowledge base, ensuring you have <br class="sm:flex hidden" />
                    the assistance you require whenever it's <br class="sm:flex hidden" />
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
  <section class="pb-12">
    <div class="container mx-auto flex justify-center items-center pb-6">
      <h2 class="leading-tight lg:text-5xl md:text-4xl sm:text-[36px] text-[25px] lg:text-left text-center text-[#0F132A] font-black">What Makes Host2Media Different?</h2>
    </div>
    <div class="container mx-auto flex justify-center itmes-center">
      <p class="text-center sm:mx-0 mx-4">
        With over 15 years of robust presence in the web hosting market,
        catering to a diverse clientele globally.<br class="sm:flex hidden" />
        Our extensive experience sets us apart, ensuring that your hosting needs
        are met with expertise and reliability.<br class="sm:flex hidden" />
        At Host2Media, we prioritize customer support, acknowledging its
        significance in delivering a seamless experience for our clients.
      </p>
    </div>
  </section>
  <section>
    <div class="custom-container mx-auto">
      <div class="grid grid-cols-12 lg:gap-12 gap-5">
        <div class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center">
          <div>
            <div class="flex justify-start items-center pb-3 pl-10">
              <img
                class="md:w-12 md:h-12 w-8 h-8"
                src="~/assets/icons/security.svg"
                alt="security"
              />
            </div>
            <div class="text-left">
              <p class="text-[#0F132A] font-black Mulish-Black text-lg">
                Enhanced Security
              </p>
              <p class="font-light pt-1 max-w-[250px]">
                Keep your websites up and running, drawing in more visitors,
                with our unique safeguard against malware, exploits and DDoS
                prevention. This helps prevent hacks, protects your website, and
                safeguards your reputation from any potential damage, ensuring a
                fast browsing experience.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center">
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img class="w-12 h-12" src="~/assets/icons/sp.svg" alt="speed" />
            </div>
            <div class="text-left">
              <p class="text-[#0F132A] font-black Mulish-Black text-lg">
                Speed and Performance
              </p>
              <p class="font-light pt-1 max-w-[250px]">
                Guarantee minimal latency and attain maximum speed by delivering
                swift browsing experiences through our optimized hardware and
                software technology. This results in enhanced SEO rankings,
                reduced bounce rates, and increased conversion rates!
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center">
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/ug.png"
                alt="ug"
              />
            </div>
            <div class="text-left">
              <p class="text-[#0F132A] font-black Mulish-Black text-lg">
                99.9% Uptime Guarantee
              </p>
              <p class="font-light pt-1 max-w-[250px]">
                We guarantee 99.9% uptime and understand the importance of a
                stable online presence with our commitment to consistent
                availability, you can trust that your website will always be up
                and running smoothly and remain accessible to your audience.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center">
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img class="w-12 h-12" src="~/assets/icons/supp.svg" alt="supp" />
            </div>
            <div class="text-left">
              <p class="text-[#0F132A] font-black Mulish-Black text-lg">
                7/7 Support
              </p>
              <p class="font-light pt-1 max-w-[250px]">
                We are dedicated to offering round-the-clock support services,
                addressing any questions or issues, regardless of their size.
                Our team of professionals is ready to assist with all your needs
                at any time.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center">
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img
                class="w-12 h-12"
                src="~/assets/icons/scalable.svg"
                alt="scalable"
              />
            </div>
            <div class="text-left">
              <p class="text-[#0F132A] font-black Mulish-Black text-lg">
                Scalable
              </p>
              <p class="font-light pt-1 max-w-[250px]">
                we offer dynamic resource allocation, to handle traffic surges
                and growth without having performance issues. Utilizing elastic
                resources to ensure high availability and reliability.
              </p>
            </div>
          </div>
        </div>
        <div class="lg:col-span-4 md:col-span-6 col-span-12 pb-5 lg:block flex justify-center">
          <div>
            <div class="flex justify-start pl-10 items-center pb-3">
              <img class="w-12 h-12" src="~/assets/icons/opt.svg" alt="opt" />
            </div>
            <div class="text-left">
              <p class="text-[#0F132A] font-black Mulish-Black text-lg">
                Optimized servers
              </p>
              <p class="font-light pt-1 max-w-[250px]">
                Our servers are daily monitored and optimized with the latest
                server optimization solutions so we can assure you a faster
                website loading times as our servers will never overload.
              </p>
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
          <h3 class="text-4xl text-[#0F132A] font-black Mulish-bold lg:text-left text-center">
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
                <span class="font-bold text-base"
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
                  1- Use the domain search tool to check the availability of your desired domain name.
                </li>
                <li>
                  2- If the domain is available, proceed to register it by providing the necessary information
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
                <span class="font-bold text-base"
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
                  1 - Unlock the domain at your current registrar. This involves removing any domain locks or privacy settings.
                </li>
                <li>
                  2 - Obtain the authorization code
                </li>
                <li>
                  3 - Use the domain search tool to initiate the domain transfer process
                </li>
                <li>
                  4 - Provide the domain name and authorization code during the transfer request
                </li>
                <li>
                  5 - Check your email for a confirmation message and follow any additional instructions provided by both the old registrar and Host2Media
                </li>
                <p>
                  Keep in mind that domain transfers may take up to 7 days to complete. Additionally, it's crucial to ensure that your domain registration information is accurate and up-to-date to avoid any issues during the process.
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
                <span class="font-bold text-base"
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
              <p>Yes, you can have an email without having a website, sign up for the host2media business email.</p>
            </div>
          </div>
          <!-- Accordion Item 4 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(4)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold text-base"
                  >Do I need a Domain name to have a web hosting and email address?</span
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
              <p>You can get web hosting services without having a domain name. In such cases, your website can be accessed using a subdomain from our private domain list. (e.g., yourname.anydomain.com).</p>
              <p>This is common for development or testing purposes, but for a professional or public website, having your own domain is recommended.</p>
            </div>
          </div>
          <!-- Accordion Item 5 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(5)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold text-base"
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
              <p>If you want a more professional appearance, consider getting a custom domain for your email.</p>
              <p>However, having your own domain name is generally advisable for a professional online presence. It provides branding consistency across your website and email, and it often looks more credible to users. If you decide to get both web hosting and email services, you can often manage them together under your custom domain for a unified online identity.</p>
            </div>
          </div>
          <!-- Accordion Item 6 -->
          <div class="mb-4">
            <h2 class="p-4">
              <button
                @click="toggleAccordion(6)"
                class="w-full text-left flex justify-between items-center"
              >
                <span class="font-bold text-base"
                  >Can I import my old host emails to host2media mail server? </span
                >
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
              <p>Yes, you can important your entire old host emails, to host2media mail server. all you need to do is go to mail migration section in your client portal and follow the steps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

const loading = ref(false);
const searchDomain = ref({
  name: ''
})
const response = ref('');
const toggleAccordion = (id: Number) => {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  content?.classList.toggle("hidden");
  icon?.classList.toggle("rotate-180");
};

const getResultFromWhois = async (name: string) => {
  const {data, refresh, error} = useFetch('/api/whois/',
  {
      method: 'POST',
      body: {
        action: 'DomainWhois',
        domain: name,
        username: 'FOuY9jTbETM34gj9ovw66cE9gkd8CTVb',
        password: 'sBA0YKhVXGBydyzwdYJdOinhDSdYT8c2',
        responsetype: true,
      },
      immediate: false,
    },
  )
  await refresh();
  if(error.value){
    console.log(name);
    console.log(error.value);
    response.value = error.value+'';
    loading.value = false;
  } else{
    console.log(name);
    console.log(data.value);
    loading.value = false;
  }
}
const SubmitFormSearchDomain = async () => {
  loading.value = true;
  await getResultFromWhois(searchDomain.value.name);
}
</script>
