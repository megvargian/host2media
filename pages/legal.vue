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
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Acceptable Use Policy (AUP) for Host2Media</h2>
                        <p class="font-bold mb-4">This Acceptable Use Policy (AUP) outlines the terms under which Host2Media services may be used. By using Host2Media’s services, you agree to comply with this AUP. Failure to comply may result in the suspension or termination of your services.</p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Prohibited Uses</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Infringement of Intellectual Property Rights</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>You may not use Host2Media’s services to infringe upon another party’s intellectual property rights, including unauthorized copying, distribution, or use of copyrighted materials. Repeated violations may lead to account termination.  </p>
                                        </li>
                                        <li>
                                            <p>For copyright infringement claims, Host2Media follows the Digital Millennium Copyright Act (DMCA) procedures. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Use of Services for Backup/Storage  </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Shared hosting accounts may not be used as backup or storage devices except for one cPanel backup of the same account.  </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4 flex">
                                    <span class="text-basic font-bold Mulish-black mr-2">Unacceptable Material</span>
                                    <span> The following types of content are strictly prohibited on Host2Media servers:</span>
                                </p>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Illegal content, including child sexual abuse material (CSAM).  </p>
                                    </li>
                                    <li>
                                        <p>Scripts for IRC, anonymizers, brute force programs, or spam tools. </p>
                                    </li>
                                    <li>
                                        <p>High-yield investment programs, Ponzi schemes, or related content. </p>
                                    </li>
                                    <li>
                                        <p>Content promoting illegal activities or distributing pirated materials.  </p>
                                    </li>
                                    <li>
                                        <p>Gambling, lottery, or related sites without proper licenses. </p>
                                    </li>
                                    <li>
                                        <p>Online casinos, gambling-related content, or any other forms of gambling or betting.  </p>
                                    </li>
                                    <li>
                                        <p>Content related to pyramid schemes, or any fraudulent schemes aimed at financial gain. </p>
                                    </li>
                                    <li>
                                        <p>Content promoting or distributing illegal drugs, controlled substances, or substances that are illegal in the jurisdiction of the user. </p>
                                    </li>
                                    <li>
                                        <p>Content related to weapons, explosives, or anything that can be used for harm or destruction.  </p>
                                    </li>
                                    <li>
                                        <p>Content promoting terrorism, violence, or any form of extremist behavior or ideology.  </p>
                                    </li>
                                    <li>
                                        <p>Sale or distribution of counterfeit or fake products, including but not limited to: perfumes, clothing, shoes, accessories, electronics, or any other goods that infringe on intellectual property rights or are falsely represented as genuine. </p>
                                    </li>
                                    <li>
                                        <p>Any content that violates copyright, trademark, or intellectual property laws, including but not limited to:   </p>
                                    </li>
                                    <li>
                                        <p>Movies, TV shows, videos, or any form of multimedia content that is copyrighted and distributed without authorization.   </p>
                                    </li>
                                    <li>
                                        <p>Images, photos, logos, or artwork that are copyrighted or trademarked without the proper rights or permission to use. </p>
                                    </li>
                                    <li>
                                        <p>Music, software, eBooks, and other digital content that infringe upon copyright laws.   </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Unacceptable Resource Usage </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Excessive Resource Consumption:</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Users may not consume more than 25% of system resources for periods exceeding 90 seconds. Activities like CGI scripts, FTP, and PHP must comply with this limitation.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Inodes and File Usage</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Shared accounts may not exceed 350,000 inodes. Accounts exceeding this limit may be suspended. Excessive file creation or deletion may also lead to account review or termination. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Database Restrictions</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Databases should be used in compliance with the shared hosting environment and should not cause undue strain on servers. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Zero Tolerance Spam Policy </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media strictly prohibits the sending of unsolicited commercial emails (spam) using its services. Accounts involved in spamming activities will be suspended immediately.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Defamation Policy </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media does not allow the publication of defamatory content through its services. Users found in violation will face immediate action, including service termination.   </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Email and Messaging Services  </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Users must not use email or messaging services provided by Host2Media for the distribution of spam, phishing attempts, or fraudulent communications. </p>
                                    </li>
                                    <li>
                                        <p>Bulk email sending must comply with anti-spam laws, including obtaining proper consent from recipients.  </p>
                                    </li>
                                    <li>
                                        <p>Host2Media reserves the right to monitor email accounts for abuse and restrict usage if necessary. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Domain Name Registration Policies </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Domain names registered through Host2Media must not be used for illegal activities, including trademark infringement, cybersquatting, or distributing malware.  </p>
                                    </li>
                                    <li>
                                        <p>Users are responsible for maintaining up-to-date WHOIS information as required by ICANN regulations.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Virtual Private Server (VPS) Usage </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>VPS hosting clients must maintain the security of their server configurations and promptly apply updates to prevent vulnerabilities.   </p>
                                    </li>
                                    <li>
                                        <p>Use of VPS for hosting malicious scripts, mining cryptocurrencies without authorization, or attacking other networks is prohibited.   </p>
                                    </li>
                                    <li>
                                        <p>Resource allocations (CPU, RAM, bandwidth) must be used within the purchased limits.    </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Security and Abuse Reporting </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Users must implement adequate security measures to protect their accounts and data, such as strong passwords and software updates.    </p>
                                    </li>
                                    <li>
                                        <p>Unauthorized access or attempts to access other accounts or servers are strictly prohibited and will result in immediate suspension or termination.   </p>
                                    </li>
                                    <li>
                                        <p>Suspected abuse or security breaches must be reported to Host2Media support immediately.     </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Service Level Agreement (SLA) Compliance  </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media offers service availability expectations (e.g., uptime guarantees). Clients are responsible for complying with SLA guidelines to ensure uninterrupted services.     </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Payment and Account Standing   </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>All services provided by Host2Media must be paid for on time as per the terms outlined during purchase.      </p>
                                    </li>
                                    <li>
                                        <p>Accounts with overdue invoices are subject to suspension or termination after the due date passes without resolution.       </p>
                                    </li>
                                    <li>
                                        <p>Host2Media reserves the right to charge late fees or reactivation fees for suspended accounts.      </p>
                                    </li>
                                    <li>
                                        <p>Refunds, where applicable, are governed by Host2Media’s refund policy. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Backups and Data Responsibility    </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media performs routine backups for shared hosting services, but users are ultimately responsible for maintaining their own backups.       </p>
                                    </li>
                                    <li>
                                        <p>Host2Media is not liable for data loss due to user negligence or hardware failures.       </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">WordPress, Frameworks, and Security Compliance    </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media strictly prohibits the use of nulled or cracked plugins, themes, or any other software that violates copyright laws. Using such unauthorized or pirated software is a breach of this AUP.        </p>
                                    </li>
                                    <li>
                                        <p>Accounts found to be using illegal or pirated software will be immediately suspended or terminated without prior notice.        </p>
                                    </li>
                                    <li>
                                        <p>Clients are responsible for ensuring that all plugins, themes, and scripts installed on their accounts are properly licensed and up-to-date.         </p>
                                    </li>
                                    <li>
                                        <p>Host2Media reserves the right to scan accounts for malware, viruses, or other malicious code. If an account is found to be infected or poses a security risk to other accounts or servers, it will be suspended immediately until the issue is resolved.        </p>
                                    </li>
                                    <li>
                                        <p>Repeated instances of infected files or failure to address security vulnerabilities may result in permanent termination of the account.         </p>
                                    </li>
                                    <li>
                                        <p>Host2Media recommends that clients use reputable security tools and regularly update their installations to avoid vulnerabilities.         </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Enforcement and Violations   </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Violations of this AUP will result in corrective actions, including:</p>
                                        <ul class="list-disc pl-5">
                                            <li>
                                                <p>Warning notifications.         </p>
                                            </li>
                                            <li>
                                                <p>Suspension or termination of services.         </p>
                                            </li>
                                            <li>
                                                <p>Legal action for serious breaches.          </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Host2Media reserves the right to review and remove content that violates this AUP.         </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments    </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media reserves the right to amend this AUP at any time. Changes will be effective upon publication on the Host2Media website. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Reporting Violations    </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>To report a violation of this AUP, please contact Host2Media support at support@host2media.com.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p> <span class="text-basic font-bold mb-4 Mulish-black">Agreement</span> <span>By using Host2Media services, you agree to adhere to this AUP. This policy aims to ensure a secure, lawful, and efficient hosting environment for all users.</span> </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Privacy and Data Protection   </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media is committed to protecting user data in accordance with applicable laws and regulations.   </p>
                                    </li>
                                    <li>
                                        <p>Users must comply with all data protection and privacy requirements, including obtaining consent before collecting personal data from individuals.   </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Resource Monitoring    </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Host2Media reserves the right to monitor resource usage to maintain server performance and stability.    </p>
                                    </li>
                                    <li>
                                        <p>Excessive resource consumption that disrupts other users may result in temporary or permanent restrictions.    </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Prohibited Network Activities    </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Users are prohibited from engaging in activities that compromise network integrity, including but not limited to:     </p>
                                        <ul class="list-disc pl-5">
                                            <li>
                                                <p>Distributed Denial of Service (DDoS) attacks.     </p>
                                            </li>
                                            <li>
                                                <p>Port scanning or probing.   </p>
                                            </li>
                                            <li>
                                                <p>Hosting or distributing botnets.     </p>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <p>Violations may result in immediate suspension of services.    </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Reseller Responsibilities and Payment Obligations   </h3>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Resellers are responsible for ensuring their clients comply with this AUP and for monitoring their clients’ activities.     </p>
                                    </li>
                                    <li>
                                        <p>Resellers must ensure timely payment for their services and are responsible for their clients’ account payments.     </p>
                                    </li>
                                    <li>
                                        <p>Failure to address overdue payments for reseller accounts may result in suspension or termination of services for both the reseller and their clients.      </p>
                                    </li>
                                    <li>
                                        <p>Host2Media may provide limited support to reseller clients hosted on Host2Media servers, but this support is not obligatory and may be subject to limitations or additional charges.      </p>
                                    </li>
                                    <li>
                                        <p>Host2Media reserves the right to suspend reseller accounts for repeated violations or failure to manage client compliance effectively.    </p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-3 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Abuse Policy </h2>
                        <p class="">Effective Date: [Insert Date] </p>
                        <p class="font-bold mb-4">At Host2Media, we are dedicated to providing reliable and secure hosting services while ensuring a safe online environment for all our users. This Abuse Policy outlines the guidelines for identifying, reporting, and addressing abuse related to the use of our services. By using our services, you agree to comply with this policy. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Prohibited Activities</h3>
                                <p class="mb-4">The following activities are strictly prohibited on Host2Media’s platform. Violations may result in account suspension, termination, or legal action: </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['1.1'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Unauthorized Access and Hacking </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Attempting to gain unauthorized access to accounts, systems, or networks.   </p>
                                        </li>
                                        <li>
                                            <p>Engaging in any form of hacking, phishing, or exploitation of vulnerabilities.    </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.2'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Malware and Viruses</h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Uploading, distributing, or using malicious software, including viruses, trojans, worms, or ransomware.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.3'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black">Spam and Unsolicited Communications </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Sending bulk unsolicited emails or other forms of spam, including marketing emails without recipient consent.  </p>
                                        </li>
                                        <li>
                                            <p>Operating mail servers that facilitate spam or unsolicited communications.   </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.4'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black"> Intellectual Property Infringement  </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Hosting or distributing content that violates intellectual property rights, including copyrighted material or pirated software.   </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.5'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black"> Illegal and Harmful Content  </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Hosting or sharing content that is illegal, obscene, defamatory, or promotes violence, discrimination, or hate speech.    </p>
                                        </li>
                                        <li>
                                            <p>Any content involving child exploitation or abuse, which will be immediately reported to the appropriate authorities.     </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.5'] flex justify-start before:mr-2 before:font-bold">
                                        <h3 class="text-basic font-bold mb-2 Mulish-black"> Resource Abuse   </h3>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Excessive use of server resources that negatively impacts the performance of other users.     </p>
                                        </li>
                                        <li>
                                            <p>Hosting activities like cryptocurrency mining or running scripts that overload our systems.      </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Reporting Abuse </h3>
                                <p class="mb-4">If you encounter any activity or content that violates this policy, please report it to Host2Media by providing the following details: </p>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>A description of the abuse, including relevant URLs or IP addresses.   </p>
                                    </li>
                                    <li>
                                        <p>Screenshots or evidence supporting your claim (if applicable).    </p>
                                    </li>
                                    <li>
                                        <p>Your contact information for follow-up (optional but recommended).    </p>
                                    </li>
                                </ul>
                                <p class="mb-4"><strong>Contact Email for Abuse Reports:</strong> abuse@host2media.com </p>
                                <p class="mb-4">We will acknowledge receipt of your report and investigate promptly. Please note that due to privacy considerations, we may not disclose the outcome of our investigation.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Enforcement Actions  </h3>
                                <p class="mb-4">Host2Media reserves the right to take appropriate actions against users found in violation of this policy, including but not limited to:   </p>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Issuing a warning or notice to cease the abusive activity.   </p>
                                    </li>
                                    <li>
                                        <p>Suspending or terminating the offending account without prior notice.    </p>
                                    </li>
                                    <li>
                                        <p>Reporting illegal activities to law enforcement or relevant authorities.    </p>
                                    </li>
                                    <li>
                                        <p>Recovering costs incurred due to abuse (e.g., for mitigating damages caused by resource abuse).    </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> False Reporting  </h3>
                                <p class="mb-4">Submitting false or malicious abuse reports is a violation of this policy and may result in account suspension or termination. Host2Media takes abuse reports seriously and expects users to act in good faith when reporting violations.    </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Protection of Data and Privacy   </h3>
                                <p class="mb-4">Host2Media is committed to protecting user data during the investigation and enforcement process. Abuse reports will be handled confidentially and shared only with necessary parties, such as law enforcement or affected users, as required.     </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Changes to This Policy   </h3>
                                <p class="mb-4">We may update this Abuse Policy from time to time to reflect changes in our practices or legal requirements. The revised policy will be posted on our website with a revised "Effective Date."     </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-4 hidden">
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
                    <div class="tab-content sm:px-0 px-3 tab-content-5 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Host2Media Cookie Policy: Understanding Our Use of Cookies</h2>
                        <p class="">Effective Date: [Insert Date] </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4">
                                    <span class="text-basic font-bold mb-4 Mulish-black mr-2">Introduction</span>
                                    <span>This Cookie Policy explains how Host2Media ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website ("Website"). It explains what these technologies are, why we use them, and your rights to control their use. </span>
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4">
                                    <span class="text-basic font-bold mb-4 Mulish-black mr-2"> What Are Cookies?</span>
                                    <span>Cookies are small text files that are stored on your device (computer, smartphone, or other electronic device) when you visit a website. They are widely used to make websites work or to function more efficiently, as well as to provide information to the site owners.  </span>
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="text-basic font-bold mb-4 Mulish-black">Types of Cookies We Use</p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Essential Cookies</span>
                                            <span>These cookies are necessary for the operation of our Website. They include, for example, cookies that enable you to log into secure areas of the Website. </span>
                                        </p>
                                    </li>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Performance and Analytics Cookies</span>
                                            <span>hese cookies collect information about how you use our Website, such as which pages you visit most  </span>
                                        </p>
                                    </li>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">. Functionality Cookies </span>
                                            <span>These cookies allow the Website to remember your choices (such as your username, language, or region) and provide enhanced, personalized features. </span>
                                        </p>
                                    </li>
                                    <li class="before:content-['3.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Advertising Cookies</span>
                                            <span>We use cookies to deliver advertisements that are relevant to your interests. These cookies also help us measure the effectiveness of advertising campaigns. </span>
                                        </p>
                                    </li>
                                    <li class="before:content-['3.5'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Third-Party Cookies</span>
                                            <span> Some cookies on our Website may be placed by third parties, such as analytics or advertising providers. These cookies are managed by the third parties and not by us.  </span>
                                        </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4" > <strong class="text-basic font-bold mb-4 Mulish-black"> How We Use Cookies</strong> We use cookies to:  </p>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Improve the functionality and performance of our Website.   </p>
                                    </li>
                                    <li>
                                        <p>Understand how visitors use our Website.     </p>
                                    </li>
                                    <li>
                                        <p>Personalize your experience on our Website.    </p>
                                    </li>
                                    <li>
                                        <p>Provide targeted advertising.     </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4"><strong class="text-basic font-bold mb-4 Mulish-black">Your Choices</strong> You have the right to accept or reject cookies. You can exercise your cookie preferences by:    </p>
                                <ul class="list-disc pl-5">
                                    <li>
                                        <p>Adjusting your browser settings to refuse cookies. Most web browsers allow you to control cookies through their settings.    </p>
                                    </li>
                                    <li>
                                        <p>Using the cookie consent banner that appears when you first visit our Website to manage your cookie preferences.     </p>
                                    </li>
                                </ul>
                                <p class="mb-4">Please note that disabling cookies may affect the functionality of the Website and your user experience. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4">
                                    <span class="text-basic font-bold mb-4 Mulish-black mr-2">Third-Party Cookies</span>
                                    <span>We may use third-party services, such as Google Analytics, to collect and process data about how visitors interact with our Website. These third-party providers may use cookies to track your online activities. For more information, please refer to their privacy and cookie policies. </span>
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4">
                                    <span class="text-basic font-bold mb-4 Mulish-black mr-2">Updates to This Policy</span>
                                    <span>We may update this Cookie Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. The updated version will be posted on this page with a revised "Effective Date." </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-6 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Collaboration Terms</h2>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4">
                                    <span class="text-basic font-bold mb-4 Mulish-black mr-2">Introduction</span>
                                    <span>Host2Media, acting as either a collaborator or a hiring party, operates independently of any partnerships, joint ventures, or shared ownership arrangements. These Collaboration Terms outline the framework and conditions for any collaboration agreements involving Host2Media to ensure clarity of roles, protect all parties, and define responsibilities and limitations.</span>
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="mb-4" > <strong class="text-basic font-bold mb-4 Mulish-black"> Representation and Ownership </strong> We use cookies to:  </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Host2Media retains full ownership and operational independence, managed and represented solely by Nadim Younes.    </p>
                                    </li>
                                    <li>
                                        <p>Collaborators, resellers, or third parties may not claim or imply ownership, partnership, or representative authority over Host2Media.     </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="text-basic font-bold mb-4 Mulish-black">Host2Media as a Collaborator</p>
                                <p class="mb-4">When Host2Media is hired as a collaborator: </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Limited Scope of Collaboration </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media’s role will be strictly limited to the specific tasks, work, or project section explicitly defined in the collaboration agreement.     </p>
                                        </li>
                                        <li>
                                            <p>Host2Media is not responsible for delays, errors, or failures caused by the hiring party, their clients, or third parties.      </p>
                                        </li>
                                        <li>
                                            <p>Once Host2Media completes the agreed work, the collaboration automatically terminates, and any additional changes or requests will require a new agreement or arrangement.       </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Independence of Operations </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media operates independently and does not act as an employee of the hiring party or their client.      </p>
                                        </li>
                                        <li>
                                            <p>Host2Media’s involvement does not obligate it to meet, follow up with, or provide support to the client unless explicitly stated in the agreement.       </p>
                                        </li>
                                        <li>
                                            <p>Web hosting support is treated separately and does not fall under the scope of collaboration agreements unless otherwise specified.      </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination Rights  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media reserves the right to refuse any collaboration or project for any reason without justification.</p>
                                        </li>
                                        <li>
                                            <p>Host2Media may terminate a collaboration at any time if:       </p>
                                        </li>
                                        <ul class="list-disc pl-5">
                                            <li>
                                                <p>Instructions were incorrectly provided.</p>
                                            </li>
                                            <li>
                                                <p>Additional or unapproved changes are requested after work has commenced or been completed. </p>
                                            </li>
                                            <li>
                                                <p>The project involves unethical practices or breaches legal or industry standards. </p>
                                            </li>
                                            <li>
                                                <p>The hiring party fails to meet agreed timelines, payments, or obligations. </p>
                                            </li>
                                            <li>
                                                <p>Host2Media identifies any risks, conflicts, or issues that could compromise its operations or reputation. </p>
                                            </li>
                                        </ul>
                                    </ul>
                                    <li class="before:content-['3.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Limitations of Responsibility </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media is not responsible for the hiring party’s client’s satisfaction, delivery issues, or miscommunication beyond its defined scope of work.       </p>
                                        </li>
                                        <li>
                                            <p>Host2Media will not provide ongoing support, updates, or maintenance unless explicitly agreed upon in the initial collaboration agreement.       </p>
                                        </li>
                                        <li>
                                            <p>Host2Media’s liability is limited to the specific tasks outlined in the agreement and does not extend to the client’s broader project or operations.     </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.5'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Legal Protections </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media’s collaboration agreements do not establish an employment relationship. Host2Media retains the right to operate independently and make decisions in its best interest.       </p>
                                        </li>
                                        <li>
                                            <p>Host2Media reserves the right to take legal action if falsely represented as an employee, partner, or co-owner by the hiring party or their client.        </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="text-basic font-bold mb-4 Mulish-black"> Host2Media Hiring a Collaborator</p>
                                <p class="mb-4">When Host2Media hires a collaborator:  </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Responsibilities of the Collaborator  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>The collaborator must adhere strictly to the project requirements and deliverables as outlined in the agreement.      </p>
                                        </li>
                                        <li>
                                            <p>The collaborator is responsible for direct communication with the client and ensuring timely delivery that meets the client’s specifications. </p>
                                        </li>
                                        <li>
                                            <p>The collaborator is accountable for addressing any issues, delays, or corrections required to meet the agreed-upon standards.        </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Independence and Support  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media will provide initial instructions and oversight but is not responsible for micromanaging the collaborator’s workflow.       </p>
                                        </li>
                                        <li>
                                            <p>The collaborator is expected to operate independently and resolve any challenges related to their scope of work.        </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination of Agreement  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media reserves the right to terminate the agreement with the collaborator if: </p>
                                        </li>
                                        <ul class="list-disc pl-5">
                                            <li>
                                                <p>They fail to meet deadlines or quality standards.</p>
                                            </li>
                                            <li>
                                                <p>They breach confidentiality or the terms of the agreement. </p>
                                            </li>
                                            <li>
                                                <p>They misrepresent themselves or their work to the client.  </p>
                                            </li>
                                        </ul>
                                    </ul>
                                    <li class="before:content-['4.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Liability </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>The collaborator is fully responsible for their work’s quality, accuracy, and delivery.        </p>
                                        </li>
                                        <li>
                                            <p>Host2Media is not liable for any claims, losses, or damages arising from the collaborator’s actions or omissions.        </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="text-basic font-bold mb-4 Mulish-black">  Reseller as Collaborator </p>
                                <p class="mb-4">When a reseller collaborates with Host2Media:   </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['5.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Reseller Responsibilities</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Resellers are responsible for providing direct support to their clients, including managing communications, disputes, and technical assistance.       </p>
                                        </li>
                                        <li>
                                            <p>Resellers must ensure their clients comply with Host2Media’s Terms of Service (TOS), Acceptable Use Policy (AUP), and other relevant policies.  </p>
                                        </li>
                                        <li>
                                            <p>Resellers are responsible for handling billing, payments, and ensuring timely payment to Host2Media for all services resold.       </p>
                                        </li>
                                        <li>
                                            <p>Resellers must ensure their clients adhere to all applicable laws, including data protection and intellectual property regulations.        </p>
                                        </li>
                                        <li>
                                            <p>Resellers are required to advise their clients on security best practices, such as regular updates and maintaining secure credentials.        </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['5.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Host2Media Responsibilities   </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media will provide a reliable hosting infrastructure, including servers and networks, and maintain the hosting environment to ensure uptime and performance.        </p>
                                        </li>
                                        <li>
                                            <p>Host2Media may provide limited support to resellers’ clients on a case-by-case basis but is not obligated to do so unless agreed upon in writing.        </p>
                                        </li>
                                        <li>
                                            <p>Host2Media will notify resellers of any service updates or issues that may affect their accounts or their clients’ services. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['5.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Branding and White Labeling   </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Resellers may operate under their own branding but must not misrepresent their relationship with Host2Media.  </p>
                                        </li>
                                        <li>
                                            <p>Host2Media reserves the right to contact end clients if necessary to address policy violations or legal obligations.   </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['5.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination and Suspension  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media reserves the right to terminate a reseller’s account for non-payment, policy violations, or misuse of services.         </p>
                                        </li>
                                        <li>
                                            <p>If a reseller’s account is terminated, all associated client accounts may also be suspended or terminated, and the reseller is responsible for notifying their clients.       </p>
                                        </li>
                                        <li>
                                            <p>In cases where the reseller’s clients are transferred directly to Host2Media, the reseller must agree to this process, and Host2Media assumes no financial obligation toward the reseller for such accounts.        </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['5.5'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Liability and Limitations  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media is not liable for disputes between resellers and their clients or for any loss of data or revenue resulting from service interruptions.          </p>
                                        </li>
                                        <li>
                                            <p>Resellers must maintain backups of their clients’ data, as Host2Media’s backups are for internal use only. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <p class="text-basic font-bold mb-4 Mulish-black"> General Provisions </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['6.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Confidentiality </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>All parties must maintain confidentiality regarding proprietary information shared during collaborations. </p>
                                        </li>
                                        <li>
                                            <p>Breaches of confidentiality will result in immediate termination and potential legal action. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['6.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Intellectual Property Rights   </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media retains ownership of all intellectual property it creates during collaborations.        </p>
                                        </li>
                                        <li>
                                            <p>Any shared intellectual property will be governed by the terms outlined in the collaboration agreement.        </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['6.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Dispute Resolution </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Disputes will first be addressed through good-faith negotiations.  </p>
                                        </li>
                                        <li>
                                            <p>Unresolved disputes will be subject to the exclusive jurisdiction of the courts in Beirut, Lebanon. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['6.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Final Authority  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5">
                                        <li>
                                            <p>Host2Media retains the final authority to approve, modify, or reject any aspect of the collaboration agreement. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-7 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Copyright Policy (DMCA Compliance) </h2>
                        <p class="mb-4">Effective Date: [Insert Date] </p>
                        <p class="mb-4">At Host2Media, we are committed to respecting the intellectual property rights of others and ensuring that our platform is not used for activities that infringe upon those rights. This Copyright Policy outlines how copyright infringement claims will be addressed. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Reporting Copyright Infringement</h3>
                                <p class="mb-4">
                                    If you believe that content hosted on our platform infringes your copyright, you may report it to us by submitting a written notification. To process your claim effectively, your notification must include:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p><strong>Identification of the copyrighted work </strong>that you claim has been infringed. If multiple works are covered by a single notification, you may provide a representative list.</p>
                                    </li>
                                    <li>
                                        <p><strong>Identification of the infringing material </strong>and its location on our platform, including specific URLs or other details that allow us to locate the material. </p>
                                    </li>
                                    <li>
                                        <p><strong>Your contact information, </strong>including your full name, mailing address, phone number, and email address. </p>
                                    </li>
                                    <li>
                                        <p><strong>A statement </strong>confirming that you have a good faith belief that the use of the material is not authorized by the copyright owner, its agent, or applicable law. </p>
                                    </li>
                                    <li>
                                        <p><strong>A statement, under penalty of perjury,</strong>that the information provided in your notification is accurate and that you are the copyright owner or authorized to act on behalf of the copyright owner. </p>
                                    </li>
                                    <li>
                                        <p><strong>Your physical or electronic signature.</strong></p>
                                    </li>
                                </ul>
                                <p class="">You can send your notification to us at:</p>
                                <p class="">Email: [Insert Email Address]</p>
                                <p class="mb-4">Phone: [Insert Phone Number]</p>
                                <p class="mb-4">We will acknowledge receipt of your notification and promptly investigate the claim. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Host2Media’s Response to Copyright Notices </h3>
                                <p class="mb-4">
                                    Upon receiving a valid copyright infringement notification, Host2Media will:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Remove or disable access to the infringing material. </p>
                                    </li>
                                    <li>
                                        <p>Notify the user responsible for the material about the action taken. </p>
                                    </li>
                                    <li>
                                        <p>Provide the user with an opportunity to submit a response or counter-notification as described below. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Counter-Notification</h3>
                                <p class="mb-4">
                                    If you believe that the content removed or disabled by Host2Media was not infringing, you may submit a counter-notification. Your counter-notification must include:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p><strong>Identification of the material  </strong>that was removed or disabled and the location where it appeared before it was removed. </p>
                                    </li>
                                    <li>
                                        <p><strong>A statement, under penalty of perjury,</strong> that you have a good faith belief that the material was removed or disabled as a result of a mistake or misidentification.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Your contact information, </strong>including your full name, mailing address, phone number, and email address. </p>
                                    </li>
                                    <li>
                                        <p><strong>A statement </strong> that you consent to the jurisdiction of the courts in Lebanon and will accept service of process from the party who submitted the original infringement notice or their agent.</p>
                                    </li>
                                    <li>
                                        <p><strong>Your physical or electronic signature. </strong></p>
                                    </li>
                                </ul>
                                <p class="">Send your counter-notification to:</p>
                                <p class="">Email: [Insert Email Address]</p>
                                <p class="mb-4">Phone: [Insert Phone Number]</p>
                                <p class="mb-4">If the counter-notification is valid, Host2Media may restore the removed content unless the original claimant provides evidence of legal action within 10 business days.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Repeat Infringers</h3>
                                <p class="mb-4">Host2Media reserves the right to suspend or terminate accounts of users who repeatedly infringe upon intellectual property rights or violate this policy. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Misrepresentation</h3>
                                <p class="mb-4">Under applicable copyright laws, knowingly submitting false or fraudulent copyright infringement notifications or counter-notifications may result in liability for damages. Host2Media expects all parties to act in good faith when submitting claims or responses. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Third-Party Content Responsibility</h3>
                                <p class="mb-4">Host2Media acts as a hosting provider and does not monitor or control user-generated content. Users are solely responsible for ensuring that their content complies with copyright laws. Claims of infringement should follow the procedures outlined in this policy. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy </h3>
                                <p class="mb-4">Host2Media reserves the right to modify this Copyright Policy at any time to reflect changes in applicable laws or our practices. Updates will be posted on our website with a revised "Effective Date."</p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-8 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Data Retention Policy  </h2>
                        <p class="mb-4">Effective Date: [Insert Date] </p>
                        <p class="mb-4">At Host2Media, we value the privacy and security of your data. This Data Retention Policy outlines how we collect, store, manage, and dispose of data associated with the services we provide. By using Host2Media services, you agree to the terms described in this policy.  </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Scope of the Policy </h3>
                                <p class="mb-4">
                                    This policy applies to all data collected, processed, and stored by Host2Media, including but not limited to:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Personal data provided during account registration. </p>
                                    </li>
                                    <li>
                                        <p>Billing and payment information.  </p>
                                    </li>
                                    <li>
                                        <p>Data hosted on our servers as part of our web hosting services.  </p>
                                    </li>
                                    <li>
                                        <p>Logs and backups generated by our systems.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Retention of Personal Data </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Account Information: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Personal data provided during account registration (e.g., name, email, contact details) is retained for as long as your account remains active and for up to 2 years after account termination, in compliance with legal and regulatory requirements.</p>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Payment Information: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Payment information is not stored by Host2Media. It is processed securely by our third-party payment gateways. However, transaction records are retained for 2 years to comply with accounting and tax obligations.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Retention of Hosted Data </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Client Files and Content: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Data hosted on our servers will be retained for the duration of the hosting plan. If the account is canceled or terminated, hosted data will be retained for up to 30 days after the termination date, after which it will be permanently deleted.</p>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Backups: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">System-generated backups are retained for a maximum of 7 days and are overwritten periodically. Clients are encouraged to maintain their own backups. </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Retention of Logs </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">System Logs: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Server and system logs, including access logs and error logs, are retained for 30 days for troubleshooting and security purposes.</p>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Security Logs:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Logs related to security incidents, such as unauthorized access attempts, are retained for  1 year for analysis and legal compliance. </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Disposal of Data </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['5.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Automatic Deletion: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Data that is no longer required for operational, legal, or regulatory purposes will be automatically deleted or anonymized.</p>
                                    <li class="before:content-['5.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Secure Disposal:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">When data is deleted, it is securely and permanently removed to prevent unauthorized recovery. </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Client Rights and Responsibilities </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['6.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Access to Data: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients have the right to access their own data stored on Host2Media servers, such as their hosted files, databases, and email accounts, through their account dashboard or by contacting our support team. </p>
                                    <li class="before:content-['6.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Responsibilities:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients are responsible for: </p>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Maintaining their own backups of critical data.</p>
                                        </li>
                                        <li>
                                            <p>Ensuring that personal or sensitive data hosted on our servers complies with applicable data protection laws.   </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Data Retention Exceptions</h3>
                                <p class="mb-4">
                                    Host2Media may retain certain data beyond the standard retention periods in the following circumstances:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p><strong>Legal Requirements:  </strong>To comply with legal or regulatory obligations.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Dispute Resolution:</strong> To resolve disputes or enforce agreements.   </p>
                                    </li>
                                    <li>
                                        <p><strong>Security Incidents: </strong> To investigate and mitigate security breaches or abuse. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Data Access and Deletion Requests  </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['8.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Access Requests: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients may request assistance in accessing their own data if it is not readily available through their account.</p>
                                    <li class="before:content-['8.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Deletion Requests:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients may request the deletion of their personal data by contacting us. Requests will be reviewed and fulfilled in accordance with applicable legal obligations and this policy.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Data Retention Policy at any time to reflect changes in laws or operational practices. Updates will be communicated via email or posted on our website with a revised "Effective Date." </p>
                            </li>
                        </ul>
                    </div>

                    <div class="tab-content sm:px-0 px-3 tab-content-9 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Fair Usage Policy   </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we are committed to providing reliable, high-quality hosting services to all clients. This Fair Usage Policy outlines the expected use of our services and ensures equitable resource allocation among clients. By using Host2Media’s services, you agree to comply with the terms of this policy.   </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Scope of the Policy </h3>
                                <p class="mb-4">
                                    This policy applies to all services provided by Host2Media, including:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Shared Hosting  </p>
                                    </li>
                                    <li>
                                        <p>VPS Hosting   </p>
                                    </li>
                                    <li>
                                        <p>Reseller Hosting  </p>
                                    </li>
                                    <li>
                                        <p>Email Hosting  </p>
                                    </li>
                                </ul>
                                <p class="mb-4">Host2Media does not offer <strong>unlimited packages, services, or features.</strong> All plans have defined resource limits as specified in the plan details. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Resource Limits  </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Defined Limits:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Each hosting plan includes specific allocations of:</p>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Disk space   </p>
                                        </li>
                                        <li>
                                            <p>Bandwidth    </p>
                                        </li>
                                        <li>
                                            <p>CPU and memory usage   </p>
                                        </li>
                                        <li>
                                            <p>Email accounts and storage  </p>
                                        </li>
                                        <li>
                                            <p>Database storage   </p>
                                        </li>
                                    </ul>
                                    <p class="mb-4">The exact resource limits are clearly outlined in the plan description and must not be exceeded.</p>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Exceeding Limits: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">If a client exceeds the allocated resources for their plan, Host2Media may:</p>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Notify the client and request that they reduce usage.   </p>
                                        </li>
                                        <li>
                                            <p>Recommend upgrading to a plan with higher resource allocations.  </p>
                                        </li>
                                        <li>
                                            <p>CPU and memory usage   </p>
                                        </li>
                                        <li>
                                            <p>Email accounts and storage  </p>
                                        </li>
                                        <li>
                                            <p>Database storage   </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Retention of Hosted Data </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Client Files and Content: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Data hosted on our servers will be retained for the duration of the hosting plan. If the account is canceled or terminated, hosted data will be retained for up to 30 days after the termination date, after which it will be permanently deleted.</p>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Backups: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">System-generated backups are retained for a maximum of 7 days and are overwritten periodically. Clients are encouraged to maintain their own backups. </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Retention of Logs </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">System Logs: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Server and system logs, including access logs and error logs, are retained for 30 days for troubleshooting and security purposes.</p>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Security Logs:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Logs related to security incidents, such as unauthorized access attempts, are retained for  1 year for analysis and legal compliance. </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Disposal of Data </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['5.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Automatic Deletion: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Data that is no longer required for operational, legal, or regulatory purposes will be automatically deleted or anonymized.</p>
                                    <li class="before:content-['5.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Secure Disposal:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">When data is deleted, it is securely and permanently removed to prevent unauthorized recovery. </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Client Rights and Responsibilities </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['6.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Access to Data: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients have the right to access their own data stored on Host2Media servers, such as their hosted files, databases, and email accounts, through their account dashboard or by contacting our support team. </p>
                                    <li class="before:content-['6.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Responsibilities:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients are responsible for: </p>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Maintaining their own backups of critical data.</p>
                                        </li>
                                        <li>
                                            <p>Ensuring that personal or sensitive data hosted on our servers complies with applicable data protection laws.   </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Data Retention Exceptions</h3>
                                <p class="mb-4">
                                    Host2Media may retain certain data beyond the standard retention periods in the following circumstances:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p><strong>Legal Requirements:  </strong>To comply with legal or regulatory obligations.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Dispute Resolution:</strong> To resolve disputes or enforce agreements.   </p>
                                    </li>
                                    <li>
                                        <p><strong>Security Incidents: </strong> To investigate and mitigate security breaches or abuse. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Data Access and Deletion Requests  </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['8.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Access Requests: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients may request assistance in accessing their own data if it is not readily available through their account.</p>
                                    <li class="before:content-['8.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Deletion Requests:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients may request the deletion of their personal data by contacting us. Requests will be reviewed and fulfilled in accordance with applicable legal obligations and this policy.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Data Retention Policy at any time to reflect changes in laws or operational practices. Updates will be communicated via email or posted on our website with a revised "Effective Date." </p>
                            </li>
                        </ul>
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