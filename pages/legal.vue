<template>
    <section class="lg:px-16 md:px-16 sm:px-8">
        <div class="container">
            <div class="grid grid-cols-12 py-10">
                <div class="lg:col-span-3 col-span-12 relative">
                    <div class="sticky top-0">
                        <h1 class="uppercase lg:text-left text-center text-[#0F132A] font-black mb-8 Mulish-Black">Legal Argeements</h1>
                        <ul class="font-bold lg:text-left text-center lg:pb-0 pb-8">
                            <li @click="changeTabContent(1)" class="cursor-pointer tab-button tab-button-1 hover:text-[#5564AD] mb-3 text-[#5564AD] text-base">
                                <p>Terms Of Service</p>
                            </li>
                            <li @click="changeTabContent(2)" class="cursor-pointer tab-button tab-button-2 hover:text-[#5564AD] mb-3 text-base ">
                                <p>Acceptable Use Policy (AUP)</p>
                            </li>
                            <li @click="changeTabContent(3)" class="cursor-pointer tab-button tab-button-3 hover:text-[#5564AD] mb-3 text-base">
                                <p>Abuse Policy</p>
                            </li>
                            <li @click="changeTabContent(4)" class="cursor-pointer tab-button tab-button-4 hover:text-[#5564AD] mb-3 text-base">
                                <p>Anti-Spam Policy</p>
                            </li>
                            <li @click="changeTabContent(5)" class="cursor-pointer tab-button tab-button-5 hover:text-[#5564AD] mb-3 text-base">
                                <p>Cookie Policy: Understanding Our Use of Cookies</p>
                            </li>
                            <li @click="changeTabContent(6)" class="cursor-pointer tab-button tab-button-6 hover:text-[#5564AD] mb-3 text-base">
                                <p>Collaboration terms</p>
                            </li>
                            <li @click="changeTabContent(7)" class="cursor-pointer tab-button tab-button-7 hover:text-[#5564AD] mb-3 text-base">
                                <p>Copyright Policy (DMCA Compliance)</p>
                            </li>
                            <li @click="changeTabContent(8)" class="cursor-pointer tab-button tab-button-8 hover:text-[#5564AD] mb-3 text-base">
                                <p>Data Retention Policy</p>
                            </li>
                            <li @click="changeTabContent(9)" class="cursor-pointer tab-button tab-button-9 hover:text-[#5564AD] mb-3 text-base">
                                <p>Fair Usage Policy</p>
                            </li>
                            <li @click="changeTabContent(10)" class="cursor-pointer tab-button tab-button-10 hover:text-[#5564AD] mb-3 text-base">
                                <p>Migration Policy</p>
                            </li>
                            <li @click="changeTabContent(11)" class="cursor-pointer tab-button tab-button-11 hover:text-[#5564AD] mb-3 text-base">
                                <p>Payment Policy</p>
                            </li>
                            <li @click="changeTabContent(12)" class="cursor-pointer tab-button tab-button-12 hover:text-[#5564AD] mb-3 text-base">
                                <p>Privacy Policy</p>
                            </li>
                            <li @click="changeTabContent(13)" class="cursor-pointer tab-button tab-button-13 hover:text-[#5564AD] mb-3 text-base">
                                <p>Refund Policy</p>
                            </li>
                            <li @click="changeTabContent(14)" class="cursor-pointer tab-button tab-button-14 hover:text-[#5564AD] mb-3 text-base">
                                <p>Reseller Policy</p>
                            </li>
                            <li @click="changeTabContent(15)" class="cursor-pointer tab-button tab-button-15 hover:text-[#5564AD] mb-3 text-base">
                                <p>Security Policy</p>
                            </li>
                            <li @click="changeTabContent(16)" class="cursor-pointer tab-button tab-button-16 hover:text-[#5564AD] mb-3 text-base">
                                <p>Service Level Agreement (SLA)</p>
                            </li>
                            <li @click="changeTabContent(17)" class="cursor-pointer tab-button tab-button-17 hover:text-[#5564AD] mb-3 text-base">
                                <p>Support Policy</p>
                            </li>
                            <li @click="changeTabContent(18)" class="cursor-pointer tab-button tab-button-18 hover:text-[#5564AD] mb-3 text-base">
                                <p>Termination Policy</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="lg:col-span-9 col-span-12 text-left text-[#0F132A]">
                    <div class="tab-content sm:px-0 px-3 tab-content-1">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h2>
                        <p class="font-bold mb-4">Effective Date: [12 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Introduction</h3>
                                <p>This agreement outlines the terms and conditions for using the services provided by Host2Media, including but not limited to web hosting, domain registration, and email hosting. These terms are legally binding and designed to protect both the company and the clients.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Definitions and Interpretations</h3>
                                <ul class="list-disc">
                                    <li>
                                        <p>"<strong>Company</strong>" refers to Host2Media, its affiliates, agents, and employees.</p>
                                    </li>
                                    <li>
                                        <p>"<strong>Client/User</strong>" refers to the individual or organization using Host2Media services</p>
                                    </li>
                                    <li>
                                        <p>"<strong>Services</strong>" include web hosting, email hosting, domain management, and other related offerings.</p>
                                    </li>
                                    <li>
                                        <p>"<strong>Content</strong>"  means any files, applications, or data uploaded to Host2Media servers.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Acceptance of Terms</h3>
                                <p>By accessing Host2Media services, you acknowledge that you have read, understood, and agreed to these terms. Host2Media reserves the right to modify the TOS at any time. Updated terms will be posted on our website with the revised effective date.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Eligibility and User Responsibilities</h3>
                                <p>Clients must be at least 18 years old or have legal authority to act on behalf of an organization. By registering, you confirm the accuracy of the provided information and agree to keep your account secure.</p>
                            </li>
                            <h2 class="font-black Mulish-Black text-base" >Services Provided</h2>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Scope of Services</h3>
                                <p>Host2Media offers hosting solutions, domain registrations, email hosting, and website migration services. Specific details are outlined in service agreements and plan descriptions.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Service Limitations and Exclusions</h3>
                                <p>Host2Media does not guarantee compatibility with all third-party applications or software. Custom configurations, unsupported software, and outdated scripts may not function on our platform.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Service Level Agreement (SLA)</h3>
                                <p>We guarantee 99.9% uptime for hosting services, excluding maintenance periods and force majeure events. Downtime credits are available as outlined in our SLA.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Domain Name Services</h3>
                                <p>Domains registered through Host2Media comply with ICANN regulations. Clients are responsible for renewing their domains on time. Domain-related fees are non-refundable.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Email Hosting Services</h3>
                                <p>Email hosting is subject to resource limits and anti-spam measures. Abuse of email resources may result in suspension or termination of the service.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">VPS and Dedicated Server Terms</h3>
                                <p>Clients using VPS or dedicated servers are responsible for managing software configurations, updates, and security. Host2Media may assist with setup but is not liable for user-installed applications.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Website Migration Services</h3>
                                <p>Host2Media offers free migration for eligible plans, subject to limitations. Clients must back up their data before migration. Compatibility is not guaranteed for all platforms.<br>
                                    Account and Payment Terms</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Account Registration and Security</h3>
                                <p>Clients must provide accurate information during registration. Sharing login credentials is prohibited. Host2Media is not responsible for unauthorized access resulting from client negligence.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Billing, Invoicing, and Payment Terms</h3>
                                <p>Invoices are due on the dates specified. Late payments may incur fees or lead to service suspension. Host2Media accepts payments via credit cards, bank transfers, and approved apps.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Auto-Renewal and Cancellation Policy</h3>
                                <p>Services are auto-renewed unless canceled in advance. Cancellation requests must be submitted at least [Insert Days] days before the next billing cycle.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Refund Policy</h3>
                                <p>Refunds are only applicable to eligible annual services (e.g., hosting, email hosting). Non-refundable services include domain registrations, SSL certificates, and setup fees.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Non-Payment and Service Suspension</h3>
                                <p>Host2Media reserves the right to suspend accounts with overdue invoices. Services may be restored upon payment of outstanding balances and late fees.</p>
                            </li>
                            <h2 class="font-black Mulish-Black text-base mb-4" >Usage and Content Restrictions</h2>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Acceptable Use Policy (AUP)</h3>
                                <p>Clients must use services in compliance with applicable laws. Prohibited activities include hosting illegal content, sending spam, and distributing malware.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Prohibited Activities</h3>
                                <p>Prohibited activities include hacking, phishing, and hosting pirated software. Host2Media reserves the right to suspend or terminate accounts engaged in such activities.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Fair Usage Policy</h3>
                                <p>Host2Media enforces strict resource limits on all plans. Resource abuse, such as excessive CPU or bandwidth usage, may result in service restrictions or termination.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Resource Allocation and Overuse</h3>
                                <p>Clients exceeding their plan’s allocated resources will be notified and required to upgrade or reduce usage. Failure to comply may lead to suspension.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Intellectual Property Rights</h3>
                                <p>Clients retain ownership of their uploaded content. However, by hosting content with Host2Media, clients grant a limited license for content delivery purposes.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">User-Generated Content and Responsibilities</h3>
                                <p>Clients are responsible for all content uploaded to their accounts. Host2Media is not liable for copyright violations or other issues resulting from hosted content.</p>
                            </li>
                            <h2 class="font-black Mulish-Black text-base mb-4" >Privacy and Security</h2>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Privacy Policy Reference</h3>
                                <p>Host2Media’s Privacy Policy explains how personal data is collected, stored, and processed. By using our services, you agree to the terms outlined in the Privacy Policy.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Data Protection and Security Measures</h3>
                                <p>Host2Media employs encryption, firewalls, and monitoring to protect client data. Clients are responsible for using strong passwords and keeping software updated.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Data Retention Policy</h3>
                                <p>Data is retained for a limited period after account termination, as specified in the Data Retention Policy. Backups are the client’s responsibility.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Anti-Spam Policy</h3>
                                <p>Sending unsolicited communications or spam is strictly prohibited. Violations may result in suspension or termination of services.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Malware and Virus Prevention</h3>
                                <p>Clients must ensure their accounts are free from malware and vulnerabilities. Host2Media reserves the right to suspend accounts spreading harmful content.</p>
                            </li>
                            <h2 class="font-black Mulish-Black text-base mb-4" >Termination and Disputes</h2>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Account Termination and Suspension</h3>
                                <p>Host2Media may suspend or terminate accounts for violations of these terms. Clients may request termination by contacting support or through their dashboard.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Reseller Terms and Client Impact</h3>
                                <p>If a reseller terminates their account, all associated client accounts may become Host2Media direct clients, as outlined in the Reseller Policy.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Dispute Resolution and Arbitration</h3>
                                <p>Disputes arising from these terms will be resolved through arbitration in accordance with applicable laws.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Governing Law and Jurisdiction</h3>
                                <p>These terms are governed by the laws of Lebanon. Disputes will be resolved in Lebanese courts.
                                    <br>Liability and Disclaimers</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Limitation of Liability</h3>
                                <p>Host2Media is not liable for damages resulting from service interruptions, data loss, or unauthorized access.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Indemnification by Users</h3>
                                <p>Clients agree to indemnify Host2Media against claims arising from their use of the services.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Disclaimer of Warranties</h3>
                                <p>Host2Media provides services "as is" without warranties of any kind, including implied warranties of merchantability or fitness for a particular purpose.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Force Majeure Clause</h3>
                                <p>Host2Media is not responsible for service interruptions caused by events beyond its control, such as natural disasters or internet outages.</p>
                            </li>
                            <h2 class="font-black Mulish-Black text-base mb-4" >Support and Maintenance</h2>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Technical Support Policy</h3>
                                <p>Support is provided as outlined in the Support Policy. Host2Media is not responsible for third-party applications or custom code issues.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Scheduled Maintenance and Downtime</h3>
                                <p>Maintenance periods will be announced in advance. Clients are encouraged to plan accordingly to avoid disruptions.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Emergency Support and After-Hours Assistance</h3>
                                <p>Emergency support is available for critical issues, such as server downtime. Fees may apply for after-hours assistance.</p>
                            </li>
                            <h2 class="font-black Mulish-Black text-base mb-4" >Miscellaneous</h2>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to the TOS</h3>
                                <p>Host2Media may update these terms at any time. Clients will be notified of significant changes via email or website announcements.
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Notices and Communications</h3>
                                <p>Notices will be sent to the email address associated with the client’s account.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Entire Agreement Clause</h3>
                                <p>These terms constitute the entire agreement between the client and Host2Media, superseding any prior agreements.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Severability Clause</h3>
                                <p>If any provision of these terms is found to be invalid, the remaining provisions will remain in effect.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">HIPAA Disclaimer</h3>
                                <p class="mb-4">Host2Media does not provide services that comply with the Health Insurance Portability and Accountability Act (HIPAA). Our hosting environment is not designed to process, store, or transmit electronic protected health information (ePHI) in a manner that meets HIPAA standards.
                                    By using Host2Media services, you acknowledge and agree that:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>Host2Media is not HIPAA compliant.</p>
                                    </li>
                                    <li>
                                        <p>You are solely responsible for ensuring that your use of our services complies with all applicable data protection regulations, including HIPAA, if relevant.</p>
                                    </li>
                                    <li>
                                        <p>Hosting or transmitting ePHI on Host2Media servers is strictly prohibited.</p>
                                    </li>
                                </ul>
                                <p>If you require a HIPAA-compliant hosting environment, you must use a service specifically certified for HIPAA compliance. Host2Media disclaims all liability for any claims or damages arising from your failure to comply with HIPAA regulations.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Excessive Server Resources</h3>
                                <p class="mb-4">Clients are required to use server resources responsibly and within the limitations of their hosting plan. Excessive usage, including but not limited to high CPU, memory, or disk I/O consumption, may adversely impact other clients sharing the server.
                                    <br>Host2Media’s Actions for Excessive Resource Usage:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>Notification: Clients will be notified if their usage exceeds acceptable limits.</p>
                                    </li>
                                    <li>
                                        <p>Temporary Suspension: Services may be temporarily suspended until the issue is resolved.</p>
                                    </li>
                                    <li>
                                        <p>Upgrades: Clients may be required to upgrade to a higher-tier plan to accommodate their usage.</p>
                                    </li>
                                    <li>
                                        <p>Account Termination: Repeated violations may result in permanent termination of the account.</p>
                                    </li>
                                </ul>
                                <p class="mb-4 font-bold">Excessive resource usage includes but is not limited to:</p>
                                <ul class="list-disc mb-4 font-bold pl-4">
                                    <li>
                                        <p>Running resource-heavy applications continuously.</p>
                                    </li>
                                    <li>
                                        <p>Hosting large file repositories.</p>
                                    </li>
                                    <li>
                                        <p>Unoptimized or poorly coded scripts that degrade server performance.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">LIMITATION OF LIABILITY</h3>
                                <p class="mb-4 font-bold">
                                    TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, HOST2MEDIA, ITS EMPLOYEES, AGENTS, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, REVENUE, DATA, OR BUSINESS OPPORTUNITIES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICES.
                                </p>
                                <p class="mb-4 font-bold">HOST2MEDIA’S TOTAL LIABILITY SHALL NOT EXCEED THE TOTAL AMOUNT PAID BY THE CLIENT FOR THE SERVICES DURING THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE CLAIM. <br>
                                    BY USING HOST2MEDIA SERVICES, YOU ACKNOWLEDGE THAT THIS LIMITATION OF LIABILITY IS AN ESSENTIAL PART OF THE AGREEMENT</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> LIMITED WARRANTY</h3>
                                <p class="mb-4 font-bold">
                                    HOST2MEDIA PROVIDES SERVICES "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                                </p>
                                <p class="mb-4 font-bold">HOST2MEDIA DOES NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. CLIENTS ASSUME ALL RISKS ASSOCIATED WITH USING HOST2MEDIA’S SERVICES, INCLUDING DATA LOSS OR CORRUPTION.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Changes to the Agreement or the Services</h3>
                                <p class="mb-4">Host2Media reserves the right to modify, add, or delete portions of this Agreement or its services at any time. Changes will be communicated via email or posted on our website.</p>
                                <p class="font-bold">Client Acknowledgement of Changes:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>Notification of Changes: Clients are responsible for reviewing updates to the Agreement.</p>
                                    </li>
                                    <li>
                                        <p>Continued Use: Continued use of Host2Media services after changes are posted constitutes acceptance of the updated Agreement.</p>
                                    </li>
                                    <li>
                                        <p>Opt-Out Option: If you do not agree to the updated terms, you must discontinue use of the services and terminate your account.</p>
                                    </li>
                                </ul>
                                <p class="mb-4">Host2Media may also update, discontinue, or replace specific features or services at its discretion, with or without prior notice.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Force Majeure</h3>
                                <p class="mb-4">Host2Media shall not be held liable for delays or failures in performance caused by events beyond its reasonable control, including but not limited to:</p>
                                <ul class="list-disc mb-4 font-bold pl-4">
                                    <li>
                                        <p>Natural disasters (e.g., earthquakes, floods).</p>
                                    </li>
                                    <li>
                                        <p>Acts of war, terrorism, civil unrest, or armed conflict, whether declared or undeclared, including but not limited to invasions, military action, or blockades.</p>
                                    </li>
                                    <li>
                                        <p>Government actions or regulations, including those imposed by local or foreign authorities.</p>
                                    </li>
                                    <li>
                                        <p>Internet outages or infrastructure failures, including those affecting telecommunications networks or service providers.</p>
                                    </li>
                                    <li>
                                        <p>Strikes, labor disputes, or workforce shortages affecting Host2Media or its partners.</p>
                                    </li>
                                    <li>
                                        <p>Any event that causes death, illness, or serious injury to key personnel or partners, hindering the ability to perform services or meet obligations.</p>
                                    </li>
                                    <li>
                                        <p>Any health-related crisis, epidemic, pandemic, or widespread illness that affects operations, travel, or public safety.</p>
                                    </li>
                                </ul>
                                <p class="mb-4">Such events shall release Host2Media from its obligations for the duration of the disruption.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Severability</h3>
                                <p class="mb-4">If any provision of this Agreement is found to be unlawful, void, or unenforceable, the remaining provisions shall remain in full force and effect. Host2Media and the client agree to substitute the invalid provision with a valid one that closely matches the intent of the original.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Backups and Data Loss</h3>
                                <p>Host2Media’s backup services are provided as a courtesy and are not guaranteed. Clients are solely responsible for maintaining up-to-date backups of their data.</p>
                                <p class="mb-4">Backup Limitations:</p>
                                <ul class="list-disc mb-4 font-bold pl-4">
                                    <li>
                                        <p>Host2Media is not liable for data loss caused by server failures, hacking, or user error.</p>
                                    </li>
                                    <li>
                                        <p>Regular backups are recommended to ensure data safety.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Disclaimer</h3>
                                <p class="mb-4">Host2Media disclaims all responsibility for:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>Actions of third parties, including hacking, phishing, or data breaches.</p>
                                    </li>
                                    <li>
                                        <p>User errors or misconfigurations.</p>
                                    </li>
                                    <li>
                                        <p>Incompatibility with third-party software or applications.</p>
                                    </li>
                                </ul>
                                <p class="mb-4">Clients assume full responsibility for the consequences of using Host2Media services.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Governing Law; Jurisdiction</h3>
                                <p class="mb-4">These Terms are governed by the laws of Lebanon. Any disputes arising under this Agreement shall be subject to the exclusive jurisdiction of Lebanese courts. Clients agree to resolve disputes in Lebanese jurisdiction only.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Arbitration</h3>
                                <p class="mb-4">Disputes that cannot be resolved amicably shall be referred to arbitration under Lebanese law. The arbitration proceedings shall take place in Lebanon and will be conducted in, Arabic or English. The decision of the arbitrator will be final and binding.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Indemnification</h3>
                                <p class="mb-4">Clients agree to indemnify, defend, and hold Host2Media harmless from any claims, damages, or expenses (including attorney fees) arising from:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>Use of services in violation of these Terms.</p>
                                    </li>
                                    <li>
                                        <p>Intellectual property infringement by hosted content.</p>
                                    </li>
                                    <li>
                                        <p>Violations of applicable laws or regulations.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Coupons</h3>
                                <p class="mb-4">Host2Media may offer promotional coupons or discounts from time to time. These coupons:</p>
                                <ul class="list-disc mb-4 font-bold pl-4">
                                    <li>
                                        <p>Must be used within the specified timeframe.</p>
                                    </li>
                                    <li>
                                        <p>Cannot be redeemed for cash or applied retroactively</p>
                                    </li>
                                    <li>
                                        <p>Are subject to change or cancellation without notice.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Price Change</h3>
                                <p class="mb-4">Host2Media reserves the right to update prices for its services. Price changes will be communicated at least 30 days in advance. Continued use of the service after the price change constitutes acceptance of the updated pricing.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">WordPress Plugins</h3>
                                <p class="mb-4">If you install or use WordPress plugins developed by Automattic (e.g., Jetpack), you agree to:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>The WordPress.com Terms of Service available at [https://en.wordpress.com/tos/].</p>
                                    </li>
                                    <li>
                                        <p>The Automattic Privacy Policy available at [http://automattic.com/privacy/], which includes Automattic's collection and processing of data as outlined therein.</p>
                                    </li>
                                </ul>
                                <p class="mb-4">By using such plugins, you acknowledge that Host2Media is not responsible for the operation, security, or performance of Automattic's products.</p>
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Prohibited Persons (Countries, Entities, and Individuals)</h3>
                                <p class="font-bold mb-4">The services provided by Host2Media are subject to export control and economic sanctions laws and regulations administered or enforced by relevant international and national authorities, including but not limited to the United States Department of Commerce, the Department of Treasury’s Office of Foreign Assets Control (“OFAC”), the Department of State, and other applicable agencies (collectively, “Trade Laws”).</p>
                                <p class="font-bold mb-4">By using Host2Media’s services, you agree that you will not use the services to export, re-export, or facilitate the transfer of software or technical data in violation of any applicable Trade Laws. Furthermore, you represent and warrant that:</p>
                                <ul class="list-decimal mb-4 font-bold pl-4">
                                    <li>
                                        <p>You are not an individual, organization, or entity located in a country or territory that is subject to sanctions or embargoes administered by OFAC or other Trade Laws (including, but not limited to, Cuba, Iran, Syria, North Korea, or the Crimea, Donetsk People’s Republic, or Luhansk People’s Republic regions of Ukraine).</p>
                                    </li>
                                    <li>
                                        <p>You are not designated as a Specially Designated National (“SDN”), Blocked Person, or otherwise listed as a prohibited party under Trade Laws, nor are you owned, controlled, or acting on behalf of such a person or entity.</p>
                                    </li>
                                    <li>
                                        <p>You are not engaged in activities related to nuclear, missile, chemical, or biological weapons development or proliferation, which are prohibited under Trade Laws unless explicitly authorized by the relevant governmental authorities.</p>
                                    </li>
                                    <li>
                                        <p>Unless explicitly authorized in writing, Host2Media prohibits the registration or use of its services in connection with any Country-Code Top Level Domain Name (“ccTLD”) associated with countries or territories subject to OFAC sanctions.</p>
                                    </li>
                                </ul>
                                <p class="font-bold mb-4">The obligations under this section shall remain in effect even after the termination or expiration of your agreement with Host2Media or your use of the services.</p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-2 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Anti-Spam Policy</h2>
                        <p class="font-bold mb-4">Effective Date: [11 December 2024]</p>
                        <p class="mb-4">Host2Media is committed to providing a reliable and spam-free hosting environment. This Anti-Spam Policy outlines the standards and rules for the use of our services to prevent spam and other forms of unsolicited communications. By using Host2Media’s services, you agree to comply with this policy. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Definition of Spam</h3>
                                <p class="mb-4">Spam refers to any unauthorized, unsolicited bulk or commercial email, message, or other electronic communication sent without the recipient’s consent. This includes, but is not limited to: </p>
                                <ul class="list-disc">
                                    <li>
                                        <p>Bulk emails sent to multiple recipients without their permission.</p>
                                    </li>
                                    <li>
                                        <p>Email or messages containing deceptive content or misleading subject lines.</p>
                                    </li>
                                    <li>
                                        <p>Messages sent for phishing, fraud, or illegal activities.</p>
                                    </li>
                                    <li>
                                        <p>Emails sent to harvested or purchased email lists.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Prohibited Activities</h3>
                                <p class="mb-4">The following activities are strictly prohibited under this Anti-Spam Policy:</p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Sending Spam:</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Using Host2Media’s services to send unsolicited emails or messages. </p>
                                        </li>
                                        <li>
                                            <p>Hosting websites, email accounts, or services that promote or facilitate spam.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Open Relays or Mail Bombing: </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Operating open mail relays or sending excessive messages in a short time. </p>
                                        </li>
                                        <li>
                                            <p>Using purchased, rented, or third-party email lists to send bulk communications.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.3'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Open Relays or Mail Bombing:</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Operating open mail relays or sending excessive messages in a short time.</p>
                                        </li>
                                        <li>
                                            <p>Overloading servers with email traffic ("mail bombing").</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.3'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Phishing or Fraudulent Activities:</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Sending emails that mimic legitimate entities to collect personal or financial information.</p>
                                        </li>
                                        <li>
                                            <p>Hosting websites or services involved in phishing scams.</p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Resource Usage Limits </h3>
                                <p class="mb-4">To ensure a spam-free environment, Host2Media enforces the following email sending limits: </p>
                                <ul class="list-disc">
                                    <li>
                                        <p>Maximum emails per hour: 50 emails/hour </p>
                                    </li>
                                    <li>
                                        <p>Maximum recipients per message: 10 recipients</p>
                                    </li>
                                    <li>
                                        <p>Any attempts to exceed these limits may result in account suspension or termination.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Monitoring and Enforcement</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Monitoring:</h3>
                                    </li>
                                    <p class="mb-4">Host2Media actively monitors outgoing email traffic and reserves the right to investigate any activity that appears to violate this policy.</p>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Violation Consequences:</h3>
                                    </li>
                                    <p class="mb-4">If a client is found to violate this Anti-Spam Policy, Host2Media may take the following actions: </p>
                                    <ul class="list-decimal pl-5">
                                        <li>
                                            <p>Issue a warning and request immediate corrective action. </p>
                                        </li>
                                        <li>
                                            <p>Suspend the client’s email services temporarily. </p>
                                        </li>
                                        <li>
                                            <p>Terminate the client’s account for repeated or severe violations.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['4.3'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Immediate Termination:</h3>
                                    </li>
                                    <p class="mb-4">Accounts involved in phishing, fraud, or malicious spam activities may be terminated immediately without notice.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Reseller Responsibility</h3>
                                <p class="mb-4">Resellers are responsible for ensuring that their clients comply with this Anti-Spam Policy. Violations by a reseller’s clients may result in: </p>
                                <ul class="list-disc">
                                    <li>
                                        <p>Suspension or termination of the reseller’s account. </p>
                                    </li>
                                    <li>
                                        <p>Notification to the reseller to take corrective action with their client. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Client Responsibilities </h3>
                                <p class="mb-4">To comply with this Anti-Spam Policy, clients are responsible for: </p>
                                <ul class="list-disc">
                                    <li>
                                        <p>Using opt-in email lists where recipients have explicitly agreed to receive communications. </p>
                                    </li>
                                    <li>
                                        <p>Providing accurate sender identification and contact information in all emails (e.g., valid "From" address). </p>
                                    </li>
                                    <li>
                                        <p>Including a clear and functional opt-out mechanism in every email to allow recipients to unsubscribe.  </p>
                                    </li>
                                    <li>
                                        <p>Regularly reviewing email practices to ensure compliance with this policy and applicable anti-spam laws (e.g., CAN-SPAM Act, GDPR, or local regulations).  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Reporting Spam</h3>
                                <p class="mb-4">If you suspect or receive spam originating from a Host2Media-hosted account, please report it to us at:
                                    <br> Email: [Insert Abuse Email Address]</p>
                                <p class="mb-4">Include the following details in your report: </p>
                                <ul class="list-disc">
                                    <li>
                                        <p>The full headers and body of the email. </p>
                                    </li>
                                    <li>
                                        <p>A brief description of the issue. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">Host2Media will investigate all spam reports and take appropriate action against violators. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Amendments to This Policy </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Anti-Spam Policy at any time to reflect changes in technology, law, or best practices. Updates will be communicated via email or posted on our website with a revised "Effective Date."</p>

                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-3 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-4 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-5 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-6 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-7 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-8 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-9 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-10 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-11 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-12 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-13 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-14 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-15 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-16 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-17 hidden">
                        <h1 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Terms of Service</h1>
                        <p class="font-bold mb-4">Effective Date: [14 December 2024]</p>
                        <p class="mb-4">Welcome to Host2Media! These Terms of Service ("TOS") govern your access to and use of Host2Media’s services. By using our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.</p>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-18 hidden">
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
    const allTabButtons = document.querySelectorAll('.tab-button');
    for (let i = 0; i < allTabButtons.length; i++) {
        allTabButtons[i].classList.remove('text-[#5564AD]');
    }
    const currentButton = document.querySelector('.tab-button-' + n) as HTMLElement;
    currentButton.classList.add('text-[#5564AD]');
    const tagetContent = document.querySelector('.tab-content-' + n) as HTMLElement;
    tagetContent.classList.remove('hidden');
}

</script>