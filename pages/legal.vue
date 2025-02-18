<template>
    <section class="lg:px-16 md:px-16 sm:px-8">
        <div class="container">
            <div class="grid grid-cols-12 py-10">
                <div class="col-span-3 relative">
                    <div class="sticky top-0">
                        <h2 class="uppercase text-left text-[#0F132A] font-black mb-8 Mulish-Black">Legal Argeements</h2>
                        <ul class="font-bold">
                            <li @click="changeTabContent(1)" class="cursor-pointer hover:text-[#5564AD] mb-3 text-[#5564AD] text-base">
                                <p>Terms Of Service</p>
                            </li>
                            <li @click="changeTabContent(2)" class="cursor-pointer hover:text-[#5564AD] mb-3 text-base ">
                                <p>Acceptable Use Policy (AUP)</p>
                            </li>
                            <li @click="changeTabContent(3)" class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Abuse Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Anti-Spam Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Cookie Policy: Understanding Our Use of Cookies</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Collaboration terms</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Copyright Policy (DMCA Compliance)</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Data Retention Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Fair Usage Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Migration Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Payment Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Privacy Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Refund Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Reseller Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Security Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Service Level Agreement (SLA)</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Support Policy</p>
                            </li>
                            <li class="cursor-pointer hover:text-[#5564AD] mb-3 text-base">
                                <p>Termination Policy</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-9 text-left text-[#0F132A]">
                    <div class="tab-content tab-content-1">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [12 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content tab-content-2 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [11 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content tab-content-3 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const changeTabContent = (n: number) => {
    const allTabContent = document.querySelectorAll('.tab-content');
    for (let i = 0; i < allTabContent.length; i++) {
        allTabContent[i].classList.add('hidden');
    }
    const tagetContent = document.querySelector('.tab-content-' + n) as HTMLElement;
    tagetContent.classList.remove('hidden');
}

</script>