<template>
  <div>
    <section class="bg-[#5564AD] py-16">
        <div class="container mx-auto">
            <h3 class="text-center text-white leading-tight sm:text-4xl md:lg:text-5xl md:text-4xl sm:text-[36px] text-[36px] font-bold">
                Your Domain name is your online name
            </h3>
            <p class="text-center text-white sm:text-xl text-sm pt-10 pb-5">
                Search for your online name and register it, before someone else does.
            </p>
            <div class="flex justify-center items-center mx-auto max-w-[35rem]">
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
                <ul class="flex items-center justify-center">
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                    <li class="text-white mx-4 text-center">
                        <p class="font-bold text-2xl">.com</p>
                        <span class="text-sm pt-3">$0.00</span>
                    </li>
                </ul>
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
                    <span class="font-bold text-base">Transfer a Domain name</span>
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
                    <span class="font-bold text-base"
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
                    <span class="font-bold text-base"
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
const loading = ref(false);
const searchDomain = ref({
  name: "",
});
const response = ref("");
const isAvailibleMsg = ref("");
const toggleAccordion = (id: Number) => {
  const content = document.getElementById(`content-${id}`);
  const icon = document.getElementById(`icon-${id}`);
  content?.classList.toggle("hidden");
  icon?.classList.toggle("rotate-180");
};

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
</script>