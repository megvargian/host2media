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
                        <p class="">Effective Date: [12 December 2024] </p>
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
                                            <p>Temporarily suspend services until the issue is resolved.   </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">   Prohibited Activities</h3>
                                <p class="mb-4">
                                    To maintain service quality and protect the shared hosting environment, the following activities are strictly prohibited:
                                </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Excessive Resource Usage: </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Hosting large media files, backups, or archives that consume excessive disk space or bandwidth.</p>
                                        </li>
                                        <li>
                                            <p>Running resource-intensive scripts or applications that degrade server performance.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Abuse of Services: </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Using hosting accounts primarily for file storage, file sharing, or backup purposes. </p>
                                        </li>
                                        <li>
                                            <p>Running processes that consume excessive CPU, memory, or I/O resources. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Email Abuse: </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Sending bulk emails, spam, or other unsolicited communications that exceed the limits specified in the plan.  </p>
                                        </li>
                                        <li>
                                            <p>Hosting email accounts that significantly impact server performance. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Violation of Policy Boundaries: </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Attempting to use resources beyond the limits of the purchased plan.  </p>
                                        </li>
                                        <li>
                                            <p>Misusing hosting services in any way that affects the performance or availability of other clients' services.  </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Monitoring and Enforcement </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Resource Monitoring: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">4.1. Resource Monitoring:
                                        Host2Media actively monitors server and resource usage to ensure compliance with this policy. Clients found exceeding resource limits or engaging in prohibited activities will be notified. </p>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Action Against Violations:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">If a client violates this policy, Host2Media may take the following actions: </p>
                                    <ul class="pl-5 pb-4 list-decimal">
                                        <li>
                                            <p>Notify the client to reduce resource usage or adjust their activities. </p>
                                        </li>
                                        <li>
                                            <p>Temporarily restrict access to affected services.  </p>
                                        </li>
                                        <li>
                                            <p>Suspend or terminate the client’s account for repeated or severe violations.  </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">No Unlimited Services </h3>
                                <p class="mb-4">Host2Media explicitly states that no service, feature, or package is offered on an "unlimited" basis. All services have specific, measurable limits to ensure fair and reliable resource usage. Marketing or promotion of any plan as "unlimited" by a client or reseller is strictly prohibited.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Upgrades and Adjustments </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['6.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Upgrades: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Clients requiring additional resources may upgrade to a higher-tier plan by contacting Host2Media’s sales team. </p>
                                    <li class="before:content-['6.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Responsibilities:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Custom Plans:</p>
                                    <p class="mb-4">Clients with unique resource needs can request a custom hosting plan tailored to their requirements.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Client Responsibilities</h3>
                                <p class="mb-4">
                                    To ensure compliance with this Fair Usage Policy, clients are responsible for:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>Regularly reviewing their resource usage through their account dashboard.   </p>
                                    </li>
                                    <li>
                                        <p>Managing hosted content and applications to stay within the limits of their plan.    </p>
                                    </li>
                                    <li>
                                        <p>Avoiding prohibited activities that impact server performance or other clients.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Fair Usage Policy at any time to reflect changes in services or operational requirements. Updates will be communicated via email or posted on our website with a revised "Effective Date."</p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-10 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Migration Policy </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we strive to make transitioning to our platform as seamless as possible. This Migration Policy outlines the terms, conditions, and scope of services for migrating websites, databases, emails, or other content to our hosting platform. By utilizing our migration services, you agree to the terms outlined in this policy.  </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Scope of Migration Services  </h3>
                                <p class="mb-4">
                                    Host2Media provides migration services to assist clients in transferring their data from a third-party hosting provider to our platform. These services include, but are not limited to:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Website Transfers:</strong> Moving files, databases, and configurations for websites. </p>
                                    </li>
                                    <li>
                                        <p><strong>Email Account Transfers:</strong> Migrating email accounts, settings, and email messages. </p>
                                    </li>
                                    <li>
                                        <p><strong>Database Transfers:</strong> Importing and exporting databases required for website functionality. </p>
                                    </li>
                                    <li>
                                        <p><strong>Custom Applications:</strong> Migrating specific applications or plugins, as agreed upon in advance. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">The scope of services will be determined based on the client’s specific requirements and the limitations of the source hosting provider. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Eligibility for Migration Services  </h3>
                                <p class="mb-4">Migration services are available under the following conditions: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>The client must have an active hosting plan with Host2Media. </p>
                                    </li>
                                    <li>
                                        <p>The source hosting provider must allow access to the required data for migration. </p>
                                    </li>
                                    <li>
                                        <p>Sufficient resources must be available on the client’s hosting plan with Host2Media to accommodate the migrated data.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Migration Limitations  </h3>
                                <p class="mb-4">While we aim to provide a smooth migration process, the following limitations apply:  </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Compatibility:</strong> Host2Media cannot guarantee that all content, applications, or configurations from the source provider will be fully compatible with our platform.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Data Integrity:</strong> Host2Media is not responsible for any data loss or corruption during the migration process. Clients are advised to maintain a backup of their data before the migration begins. </p>
                                    </li>
                                    <li>
                                        <p><strong>Third-Party Restrictions:</strong> Certain hosting providers or applications may have restrictions that limit or prevent the migration process. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Fees for Migration Services  </h3>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Host2Media offers complimentary migration services for specific hosting plans, subject to eligibility and scope.   </p>
                                    </li>
                                    <li>
                                        <p>For complex migrations, such as large websites, databases, or custom applications, additional fees may apply. Clients will be informed of any charges prior to the migration process.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Timeline for Migrations </h3>
                                <p class="mb-4">The time required to complete a migration depends on factors such as the size of the data, the number of accounts, and the complexity of the configuration. Host2Media will provide an estimated timeline upon reviewing the client’s migration requirements. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Client Responsibilities  </h3>
                                <p class="mb-4">Clients are required to:   </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Provide complete and accurate access credentials for the source hosting provider (e.g., FTP, cPanel, database credentials).    </p>
                                    </li>
                                    <li>
                                        <p>Inform Host2Media of any specific configurations or customizations required for the migration.  </p>
                                    </li>
                                    <li>
                                        <p>Review the migrated data upon completion and report any issues within 7 days.   </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">   Post-Migration Support  </h3>
                                <p class="mb-4">After the migration is complete, Host2Media will provide support for:    </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Resolving migration-related technical issues.   </p>
                                    </li>
                                    <li>
                                        <p>Verifying the functionality of migrated websites or email accounts.   </p>
                                    </li>
                                </ul>
                                <p class="mb-4">Post-migration support is limited to issues directly related to the migration process and does not include unrelated technical support or development work.    </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Data Privacy and Security  </h3>
                                <p class="mb-4">Host2Media takes data privacy and security seriously. All client data provided for migration will be handled with confidentiality and used solely for the purpose of completing the migration. Upon completion, any credentials provided by the client will be deleted from our records.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Disclaimer</h3>
                                <p class="mb-4">Host2Media is not responsible for:    </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Downtime during the migration process.   </p>
                                    </li>
                                    <li>
                                        <p>Loss of data resulting from inaccurate credentials or insufficient backups provided by the client.    </p>
                                    </li>
                                    <li>
                                        <p>Issues caused by third-party configurations, software, or restrictions from the source hosting provider. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy  </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Migration Policy at any time. Changes will be posted on our website with a revised "Effective Date." </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-11 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Payment Policy </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we aim to provide clear and transparent guidelines regarding payments for our services. This Payment Policy outlines the terms and conditions for billing, payments, fees, and refunds. By using our services, you agree to the terms described herein. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Billing and Payment Terms  </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['1.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">  Invoices:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>All services are billed on either a monthly or annual basis, depending on the client’s chosen plan.    </p>
                                        </li>
                                        <li>
                                            <p>Invoices will be issued via email or made available through your Host2Media account dashboard.     </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Payment Due Date: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Payments must be made on or before the due date stated on the invoice. </p>
                                        </li>
                                        <li>
                                            <p>For recurring subscriptions, payments will be automatically billed according to the agreed schedule. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Accepted Payment Methods:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p><strong>Credit Cards:</strong> Payments made through Visa, MasterCard, or other supported credit cards. </p>
                                        </li>
                                        <li>
                                            <p><strong>Cash:</strong> Payments made in person at our designated office. </p>
                                        </li>
                                        <li>
                                            <p><strong>Money Transfer Apps:</strong> Payments via approved apps. Fees associated with these methods will be deducted from the refunded amount, if applicable. </p>
                                        </li>
                                        <li>
                                            <p><strong>Bank Transfers:</strong> Bank transfer details will be provided upon request. Clients are responsible for any bank fees.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Currency:  </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">All prices and payments are processed in USD </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Late Payments</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Grace Period: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>A grace period of 30 days is provided after the due date to make the payment. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Late Fees: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Payments not received within the grace period will incur a late fee of $80 USD. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Account Suspension:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Services may be suspended or terminated if payment is not received within 15 days from the due date. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Refunds</h3>
                                <p class="mb-4">
                                    Refunds are issued in accordance with the <strong>Refund Policy</strong>, subject to the following terms:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>Refunds are available only for eligible services and payments made via credit cards, cash, or money transfer apps. </p>
                                    </li>
                                    <li>
                                        <p>Non-refundable services include domain registrations, SSL certificates, setup fees, administrative fees, and third-party services.     </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Auto-Renewals</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Automatic Billing: </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Services such as hosting plans and domain registrations are automatically renewed at the end of the billing cycle to ensure uninterrupted service. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Cancellation of Auto-Renewal: </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Clients must disable auto-renewal through their account dashboard at least 15 days before the renewal date to avoid charges.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['4.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Refunds for Auto-Renewals:  </span>
                                        </p>
                                    </li>
                                    <ul class="pl-5 pb-4 list-disc">
                                        <li>
                                            <p>Once auto-renewal is processed, payments are non-refundable.   </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Taxes and Additional Charges </h3>
                                <p class="mb-4">Clients are responsible for any applicable taxes, fees, or charges imposed by governmental authorities on services provided by Host2Media. These charges will be reflected on the invoice where applicable. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Failed Payments </h3>
                                <p class="mb-4">If a payment fails due to insufficient funds, incorrect information, or any other reason: </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>The client will be notified immediately and given 3 days to resolve the issue.  </p>
                                    </li>
                                    <li>
                                        <p>Services may be suspended until payment is successfully processed. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Payment Disputes</h3>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>All payment disputes must be reported to Host2Media’s billing department within [Insert Number of Days 5 days of the transaction. </p>
                                    </li>
                                    <li>
                                        <p>Filing a chargeback without contacting Host2Media may result in account suspension or termination. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to the Payment Policy  </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Payment Policy at any time. Changes will be posted on our website with a revised "Effective Date." Continued use of services constitutes acceptance of the updated terms. </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-12 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Privacy Policy    </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we are committed to protecting the privacy and security of our users' personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us in any way. By using our services, you agree to the practices described in this policy. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">   Information We Collect  </h3>
                                <p class="mb-4">We may collect the following types of information: </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['1.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Personal Information:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Name, email address, phone number, billing address, and other contact details. </p>
                                        </li>
                                        <li>
                                            <p>Identification information for verification purposes, if required.     </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Non-Personal Information:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Browser type, operating system, IP address, device information, and usage data.    </p>
                                        </li>
                                        <li>
                                            <p>Cookies and tracking technologies to analyze user behavior and improve our services.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Third-Party Information:   </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Information obtained from third parties, such as partners or external tools, if authorized by you.    </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Payment Information:   </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Host2Media does not collect or store payment information such as credit card or bank account details. These details are securely processed and stored by our third-party payment gateway provider in compliance with industry-standard security protocols (e.g., PCI-DSS). For further information, please refer to the privacy policy of the payment gateway used during your transaction.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> How We Use Your Information </h3>
                                <p class="mb-4">
                                    We use the collected information for the following purposes:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>To Provide Services:</strong> Processing orders, setting up accounts, and delivering services.   </p>
                                    </li>
                                    <li>
                                        <p><strong>To Communicate:</strong> Sending account-related updates, service notifications, or promotional materials (with your consent).    </p>
                                    </li>
                                    <li>
                                        <p><strong>To Improve Services:</strong> Analyzing usage data to enhance website functionality and user experience.   </p>
                                    </li>
                                    <li>
                                        <p><strong>For Security:</strong> Detecting, preventing, and mitigating fraudulent activities or unauthorized access.  </p>
                                    </li>
                                    <li>
                                        <p><strong>To Comply with Legal Obligations:</strong> Meeting regulatory requirements or responding to legal requests.   </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  How We Share Your Information  </h3>
                                <p class="mb-4">Host2Media does not sell or rent your personal information to third parties. We may share information under the following circumstances: </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> With Service Providers:
                                            </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Third-party vendors who assist us in delivering services, such as hosting providers or customer support tools.</p>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">For Legal Compliance: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">If required by law or to protect our legal rights, we may disclose information to government authorities or legal entities.</p>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">In Business Transfers: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">If Host2Media is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Cookies and Tracking Technologies</h3>
                                <p class="mb-4">
                                    We use cookies and similar technologies to improve website performance, analyze usage, and deliver personalized content. By using our website, you consent to the use of cookies as described in our Cookie Policy. You may disable cookies through your browser settings, but this may affect your user experience.
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Data Retention</h3>
                                <p class="mb-4">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Once no longer required, your data will be securely deleted or anonymized. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Security Measures</h3>
                                <p class="mb-4">We implement technical, administrative, and physical safeguards to protect your information against unauthorized access, disclosure, or misuse. However, no system is entirely secure, and we cannot guarantee the absolute security of your data. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Your Rights</h3>
                                <p class="mb-4">
                                    Depending on your jurisdiction, you may have the following rights regarding your personal information:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Access:</strong> Request a copy of the personal information we hold about you.    </p>
                                    </li>
                                    <li>
                                        <p><strong>Correction:</strong> Request corrections to inaccurate or incomplete information.    </p>
                                    </li>
                                    <li>
                                        <p><strong>Deletion:</strong> Request the deletion of your data, subject to legal or contractual obligations.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Objection:</strong> Object to certain processing activities, such as direct marketing.   </p>
                                    </li>
                                    <li>
                                        <p><strong>Data Portability:</strong> Request a copy of your data in a structured, machine-readable format.   </p>
                                    </li>
                                </ul>
                                <p class="mb-4">To exercise these rights, contact us at [Insert Contact Email or Form]. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">International Data Transfers </h3>
                                <p class="mb-4">If you are accessing our services from outside [Insert Country], your information may be transferred to, stored, and processed in a country with data protection laws different from your own. By using our services, you consent to such transfers.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Third-Party Links </h3>
                                <p class="mb-4">Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of those third parties.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Changes to This Privacy Policy </h3>
                                <p class="mb-4">We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised "Effective Date." Continued use of our services after updates constitutes acceptance of the updated terms. </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-13 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Refund Policy for Host2Media </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">   Overview  </h3>
                                <p class="mb-4">At Host2Media, we strive to provide exceptional services to meet our clients' needs. This Refund Policy outlines the conditions under which refunds may or may not be issued. By using our services, you agree to the terms of this Refund Policy.</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Refundable services</h3>
                                <p class="mb-4">
                                    Refunds are available only for the following services and under specific conditions:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Shared Web Hosting:</strong>Refundable only if paid annually, within the first 30 days of the initial term.   </p>
                                    </li>
                                    <li>
                                        <p><strong>Business Email Services:</strong> Refundable only if paid annually, within the first 30 days of the initial term. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">
                                    Refund requests must be submitted within the 30-day money-back guarantee period.
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Non-Refundable Services</h3>
                                <p class="mb-4">The following services are non-refundable under any circumstances: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Domain Names:</strong>Including registrations, renewals, and transfers.</p>
                                    </li>
                                    <li>
                                        <p><strong>VPS Hosting Services.</strong></p>
                                    </li>
                                    <li>
                                        <p><strong>SSL Certificates.</strong></p>
                                    </li>
                                    <li>
                                        <p><strong>Third-Party Products or Services:</strong> This includes WordPress plugins, software, custom-built applications, or web development services.</p>
                                    </li>
                                    <li>
                                        <p><strong>Setup Fees: </strong> Non-refundable once the setup process is initiated.</p>
                                    </li>
                                    <li>
                                        <p><strong>Administrative Fees and Installation Fees.</strong></p>
                                    </li>
                                    <li>
                                        <p><strong>Custom or On-Site Support at Client’s Location:</strong> Any technical support or assistance provided at the client’s physical location is non-refundable. This includes any associated service charges, labor costs, and transportation fees incurred for providing on-site services. These services are customized to address specific client needs and cannot be reused or resold, making them ineligible for refunds. </p>
                                    </li>
                                    <li>
                                        <p><strong> Website Development Payments:</strong> The initial payment made toward any website development project is strictly non-refundable. Furthermore, once the project has been delivered and deemed completed, and the final payment has been made, no refunds will be issued. By submitting the final payment, the client confirms their acceptance of the project as delivered, and no further claims for refunds or revisions will be entertained. Website development services are tailored to the client’s unique requirements, rendering them non-refundable. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Requesting a Refund</h3>
                                <p class="mb-4">
                                    To request a refund, you must contact our Billing Department at <a href="maito:billing@host2media.com">billing@host2media.com</a> or by phone at <a href="mailto:+961 3 821114">+961 3 821114</a>
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Include your account details and a brief explanation for the cancellation.</p>
                                    </li>
                                    <li>
                                        <p>Refunds will be processed within 10-15 business days after approval.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Refund Conditions and Limitations </h3>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Refunds apply only to annual plans for eligible services. </p>
                                    </li>
                                    <li>
                                        <p>Monthly plans are not eligible for refunds under any circumstances. </p>
                                    </li>
                                    <li>
                                        <p>Services set to auto-renew will not be refunded once renewed. Clients must disable auto-renewal in advance if they do not wish to continue a service. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Payment Method Restrictions</h3>
                                <p class="mb-4">Refunds are available for the following payment methods, subject to the conditions below:</p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Credit Cards and Cash Payments:</strong> Refunds are applicable for payments made via credit card or cash. Clients must provide proof of payment where necessary for cash transactions. </p>
                                    </li>
                                    <li>
                                        <p><strong>Money Transfer Apps:</strong> Refunds are applicable for payments made through money transfer apps However, any transfer fees or associated charges imposed by the app provider will be deducted from the refunded amount. Clients acknowledge that these deductions are beyond Host2Media's control and depend on the policies of the respective app. </p>
                                    </li>
                                    <li>
                                        <p>Payments made through bank transfers, cryptocurrency, or checks are non-refundable.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Chargebacks and Disputes</h3>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Filing a chargeback or dispute without contacting Host2Media may result in immediate account suspension. </p>
                                    </li>
                                    <li>
                                        <p>Clients are encouraged to reach out to our Billing Department to resolve any payment-related issues amicably. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to the Refund Policy</h3>
                                <p class="mb-4">Host2Media reserves the right to modify this Refund Policy at any time. Changes will be posted on our website with a revised "Effective Date."</p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-14 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Reseller Policy </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we offer reseller hosting services to enable clients to resell our hosting services under their brand. This Reseller Policy outlines the terms, conditions, and responsibilities for both Host2Media and resellers. By using our reseller hosting services, you agree to the terms described in this policy. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Scope of the Policy</h3>
                                <p class="mb-4">This policy applies to all clients who use Host2Media’s reseller hosting services. It governs the relationship between Host2Media and resellers, as well as the resellers’ responsibilities toward their clients. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Reseller Responsibilities</h3>
                                <p class="mb-4">
                                    As a reseller, you are responsible for the following:
                                </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Client Management: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Providing direct support to your clients. </p>
                                        </li>
                                        <li>
                                            <p>Ensuring your clients comply with Host2Media’s Terms of Service (TOS), Acceptable Use Policy (AUP), and other relevant policies. </p>
                                        </li>
                                        <li>
                                            <p>Handling all communications and disputes with your clients.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Billing and Payments: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Managing the billing and payment collection for your clients. </p>
                                        </li>
                                        <li>
                                            <p>Ensuring timely payments to Host2Media for the services you resell.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Service Setup and Management:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Setting up and managing your clients’ hosting accounts using the tools provided.</p>
                                        </li>
                                        <li>
                                            <p>Monitoring and addressing your clients' resource usage to ensure compliance with Host2Media’s resource limits. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Legal Compliance:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Ensuring your clients adhere to all applicable laws and regulations, including data protection, copyright, and intellectual property laws. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.5'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Security and Maintenance:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Advising your clients to follow security best practices, including regular updates of their software and maintaining secure passwords. </p>
                                        </li>
                                        <li>
                                            <p>Addressing malware or vulnerabilities on your clients’ accounts promptly. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Host2Media’s Responsibilities</h3>
                                <p class="mb-4">
                                    Host2Media will provide the following support and services to resellers:
                                </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Hosting Infrastructure:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Reliable hosting infrastructure, including servers, networks, and data centers. </p>
                                        </li>
                                        <li>
                                            <p>Monitoring and maintenance of the hosting environment to ensure uptime and performance. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Limited End-Client Support: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Host2Media may provide limited support directly to your clients on a case-by-case basis. Such support is not guaranteed and may incur additional charges. </p>
                                        </li>
                                        <li>
                                            <p>Resellers remain primarily responsible for supporting their clients.   </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Communication:   </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Prompt notification of service updates, maintenance, or issues that may affect reseller accounts or their clients. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Resource Usage</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Fair Usage:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Resellers and their clients must use resources (e.g., bandwidth, disk space, CPU) within the limits of their hosting plans. Excessive usage may result in account suspension or additional charges.</p>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Resource Allocation: </span>
                                        </p>
                                    </li>
                                    <p class="mb">Resellers are responsible for ensuring that their clients’ accounts do not exceed the resource limits set in the reseller plan.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Billing and Payments</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['5.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Reseller Payments:
                                            </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Resellers are responsible for timely payment of their reseller hosting plan and any additional services used by their clients.</p>
                                    <li class="before:content-['5.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Client Non-Payment: </span>
                                        </p>
                                    </li>
                                    <p class="mb">Host2Media will not intervene in billing disputes between resellers and their clients. Non-payment by a reseller’s client does not exempt the reseller from paying Host2Media.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Termination and Suspension</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['6.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination by Host2Media: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Host2Media reserves the right to terminate a reseller account under the following conditions:
                                    </p>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Non-payment of invoices. </p>
                                        </li>
                                        <li>
                                            <p>Violation of Host2Media’s policies by the reseller or their clients. </p>
                                        </li>
                                        <li>
                                            <p>Abuse of services, including spamming or resource overuse. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['6.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Suspension of Client Accounts: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">If a reseller’s client violates Host2Media’s policies or causes harm to the hosting environment, Host2Media may suspend the offending account. The reseller will be notified of the suspension.</p>
                                    <li class="before:content-['6.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Reseller Termination Impact:  </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        If a reseller account is terminated, all associated client accounts will also be suspended or terminated. Resellers are responsible for notifying their clients in such cases.
                                    </p>
                                    <li class="before:content-['6.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Transfer with Reseller and Client Approval:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>If the reseller wishes to terminate their account and has obtained approval from their clients for a direct transfer to Host2Media, those clients will be onboarded as Host2Media direct clients. </p>
                                        </li>
                                        <li>
                                            <p>In this case, the reseller acknowledges and agrees that Host2Media assumes no liability or financial obligation toward the reseller for these transferred accounts. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Branding and White Labeling  </h3>
                                <p class="mb-4">Resellers may operate under their own branding and are not required to disclose their relationship with Host2Media. However:   </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Host2Media reserves the right to contact end clients if required to address critical policy violations or legal obligations.  </p>
                                    </li>
                                    <li>
                                        <p>Any promotional materials, logos, or trademarks provided by Host2Media must not be altered without prior approval. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Prohibited Activities  </h3>
                                <p class="mb-4">Resellers must ensure their clients do not engage in:  </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Hosting illegal or harmful content. </p>
                                    </li>
                                    <li>
                                        <p>Spamming or sending unsolicited communications.  </p>
                                    </li>
                                    <li>
                                        <p>Violating copyright or intellectual property laws.</p>
                                    </li>
                                    <li>
                                        <p>Using nulled or pirated software. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">Host2Media reserves the right to take action against any violations, including immediate suspension or termination of offending accounts. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Data Retention and Backups </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['9.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Reseller Backups:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Resellers are responsible for maintaining backups of their clients’ data. Host2Media’s system backups are for internal use and disaster recovery only.
                                    </p>
                                    <li class="before:content-['9.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Data Retention After Termination: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Upon account termination, data associated with the reseller and their clients will be retained for up to <strong>30 days</strong>, after which it will be permanently deleted.
                                    </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Limitation of Liability </h3>
                                <p class="mb-4">Host2Media is not liable for: </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>Disputes between the reseller and their clients. </p>
                                    </li>
                                    <li>
                                        <p>Loss of data or revenue resulting from service interruptions or account suspensions. </p>
                                    </li>
                                    <li>
                                        <p>Any actions or omissions by the reseller that affect their clients. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Amendments to This Policy</h3>
                                <p class="mb-4">Host2Media reserves the right to update this Reseller Policy at any time. Updates will be communicated via email or posted on our website with a revised "Effective Date."</p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Partnership and Collaboration </h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['12.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Partnership Disclaimer</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        <strong>Representation and Ownership</strong> Host2Media is solely owned, managed, and represented by Nadim Younes. No partnerships, joint ventures, or ownership agreements exist with any reseller or third party. Resellers are independent entities and are strictly prohibited from representing themselves as partners or co-owners of Host2Media in any capacity.
                                    </p>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Representation and Ownership </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        <strong>Collaboration Agreements</strong> All agreements with resellers are classified as collaborations, not partnerships or joint ventures. These agreements define the independent responsibilities of each party and do not grant resellers authority to act on behalf of, represent, or legally bind Host2Media or Nadim Younes beyond the terms explicitly outlined in the agreement.
                                    </p>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-15 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Security Policy </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we prioritize the security of our clients' data and services. This Security Policy outlines the measures we take to protect your data, prevent unauthorized access, and ensure the integrity and availability of our services. By using Host2Media’s services, you agree to the terms of this policy. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Scope of the Security Policy</h3>
                                <p class="mb-4">This policy applies to all systems, networks, and services provided by Host2Media, including: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Web hosting services.</p>
                                    </li>
                                    <li>
                                        <p>Email hosting.</p>
                                    </li>
                                    <li>
                                        <p>Domain services. </p>
                                    </li>
                                    <li>
                                        <p>Data hosted or transmitted through Host2Media’s infrastructure. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Security Measures </h3>
                                <p class="mb-4">
                                    To ensure a secure hosting environment, Host2Media implements the following measures:
                                </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Physical Security: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Servers are located in secure data centers with 24/7 surveillance, access controls, and environmental monitoring systems.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Network Security: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Use of firewalls to block unauthorized access. </p>
                                        </li>
                                        <li>
                                            <p>Regular network monitoring to detect and mitigate threats. </p>
                                        </li>
                                        <li>
                                            <p>DDoS protection to defend against distributed denial-of-service attacks. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Data Encryption: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Encryption of sensitive data in transit using HTTPS/SSL protocols. </p>
                                        </li>
                                        <li>
                                            <p>Secure storage of sensitive data (e.g., passwords) using industry-standard hashing algorithms. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Access Control:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Multi-factor authentication (MFA) for administrative access to servers and control panels. </p>
                                        </li>
                                        <li>
                                            <p>Role-based access control to limit permissions to authorized personnel.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.5'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Malware Protection: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Regular scans for malware and vulnerabilities on hosted servers. </p>
                                        </li>
                                        <li>
                                            <p>Quarantine and removal of malicious files.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.6'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Patching and Updates:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Regular updates to server software, operating systems, and security tools to protect against known vulnerabilities. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Client Responsibilities</h3>
                                <p class="mb-4">
                                    While Host2Media implements robust security measures, clients are also responsible for maintaining the security of their accounts and hosted content. Client responsibilities include:
                                </p>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Password Security: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Use strong, unique passwords for all accounts.  </p>
                                        </li>
                                        <li>
                                            <p>Change passwords regularly and avoid sharing credentials with unauthorized individuals. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Keeping Software Updated: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Regularly update CMS platforms (e.g., WordPress), plugins, and themes to the latest versions. </p>
                                        </li>
                                        <li>
                                            <p>Avoid using outdated or unsupported software. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Avoiding Nulled or Pirated Software: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Do not use cracked or pirated plugins, themes, or software, as they pose significant security risks.  </p>
                                        </li>
                                        <li>
                                            <p>Host2Media reserves the right to suspend accounts found using unauthorized software. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.4'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Scanning and Backups:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Regularly scan your website and applications for vulnerabilities. </p>
                                        </li>
                                        <li>
                                            <p>Maintain up-to-date backups of your data, stored separately from the hosting environment.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Reporting Security Issues: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Promptly report any suspected security incidents or vulnerabilities to Host2Media.</p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Monitoring and Incident Response</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Monitoring: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Host2Media continuously monitors its network and systems for suspicious activities, unauthorized access, and potential threats. </p>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Incident Response:  </span>
                                        </p>
                                    </li>
                                    <p class="mb">In the event of a security breach or attack, Host2Media will: </p>
                                    <ul class="list-decimal pl-5 pb-4">
                                        <li>
                                            <p>Investigate the issue to identify the source and scope of the incident. </p>
                                        </li>
                                        <li>
                                            <p>Notify affected clients within a reasonable timeframe.</p>
                                        </li>
                                        <li>
                                            <p>Take immediate steps to mitigate the threat and restore affected services.</p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Data Breach Notification </h3>
                                <p class="mb-4">
                                    If a data breach affecting client data occurs, Host2Media will:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>Notify affected clients promptly, including details of the breach and recommended actions. </p>
                                    </li>
                                    <li>
                                        <p>Cooperate with relevant authorities and provide support to clients in mitigating the impact of the breach. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Prohibited Activities</h3>
                                <p class="mb-4">To maintain a secure environment, the following activities are strictly prohibited: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Hosting or distributing malware, viruses, or other harmful software.  </p>
                                    </li>
                                    <li>
                                        <p>Attempting to gain unauthorized access to servers, networks, or other accounts. </p>
                                    </li>
                                    <li>
                                        <p>Exploiting server vulnerabilities or engaging in hacking activities. </p>
                                    </li>
                                    <li>
                                        <p>Conducting illegal activities that compromise the security or reputation of Host2Media. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">Accounts found engaging in these activities may be suspended or terminated immediately without prior notice. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Limitations of Liability </h3>
                                <p class="mb-4">Host2Media strives to provide a secure hosting environment but cannot guarantee absolute security. Clients acknowledge that: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>No system is immune to all risks, including cyberattacks or unforeseen vulnerabilities. </p>
                                    </li>
                                    <li>
                                        <p>Host2Media is not liable for damages resulting from security incidents beyond its reasonable control. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Amendments to This Policy </h3>
                                <p class="mb-4">Host2Media reserves the right to update this Security Policy at any time to reflect advancements in technology, changes in legal requirements, or improvements to our security practices. Updates will be communicated via email or posted on our website with a revised "Effective Date." </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-16 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Service Level Agreement (SLA)  </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we are committed to delivering reliable, high-quality hosting services. This Service Level Agreement (SLA) defines the service availability standards, outlines our responsibilities, and specifies the remedies available to clients if the service levels are not met. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Scope of the SLA</h3>
                                <p class="mb-4">This SLA applies to all hosting services provided by Host2Media, including shared hosting, VPS hosting, and reseller hosting plans. It does not cover domain registrations, email-only plans, or third-party services.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Uptime Guarantee</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Guaranteed Uptime:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Host2Media guarantees a <strong>99.9% monthly uptime</strong> for its hosting services. Uptime is calculated on a calendar-month basis and refers to the availability of the hosting server and services.
                                    </p>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Downtime: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Downtime refers to the unavailability of hosting services due to server or network issues, excluding scheduled maintenance or events outside Host2Media’s control (see Section 5).
                                    </p>
                                    <li class="before:content-['2.3'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2"> Monitoring: </span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Host2Media continuously monitors server and network performance to ensure uptime standards are met.
                                    </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Scheduled Maintenance</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Maintenance Windows:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Host2Media performs scheduled maintenance to enhance the reliability and performance of its services. Maintenance periods are communicated to clients at least 48 hours in advance via email or the Host2Media dashboard.
                                    </p>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Exclusions:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">Downtime resulting from scheduled maintenance is excluded from uptime calculations.</p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Service Credits</h3>
                                <p class="mb-4">If Host2Media fails to meet the <strong>99.9% uptime guarantee</strong>, clients may request service credits. Service credits are calculated as follows: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>99.0% - 99.89% uptime:</strong> 5% credit of the monthly hosting fee.</p>
                                    </li>
                                    <li>
                                        <p><strong>95.0% - 98.99% uptime:</strong> 10% credit of the monthly hosting fee. </p>
                                    </li>
                                    <li>
                                        <p><strong>Below 95.0% uptime:</strong> 25% credit of the monthly hosting fee. </p>
                                    </li>
                                </ul>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Claiming Service Credits:  </span>
                                        </p>
                                    </li>
                                    <ul>
                                        <li>
                                            <p>Clients must submit a claim for service credits within 7 days of the end of the affected month. </p>
                                        </li>
                                        <li>
                                            <p>Claims must include the specific dates and times of the downtime. </p>
                                        </li>
                                        <li>
                                            <p>Host2Media will review and validate claims before issuing credits.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Service Credit Limitations:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Service credits are issued as account credits and cannot be exchanged for cash. </p>
                                        </li>
                                        <li>
                                            <p>Total service credits cannot exceed the monthly hosting fee for the affected month. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Exclusions </h3>
                                <p class="mb-4">
                                    Host2Media is not responsible for downtime or disruptions caused by:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p><strong>Force Majeure Events:</strong> Including but not limited to natural disasters, acts of war, government actions, or internet outages beyond Host2Media’s control.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Client Actions:</strong> Misconfigurations, unauthorized access, or other actions by the client or their agents. </p>
                                    </li>
                                    <li>
                                        <p><strong>Third-Party Applications:</strong> Issues caused by third-party software, plugins, or scripts used by the client.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Resource Overuse:</strong>  Downtime caused by excessive usage exceeding the allocated resources of the hosting plan.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Security Incidents:</strong> Malware infections or hacking attempts due to the client’s failure to maintain security best practices.  </p>
                                    </li>
                                    <li>
                                        <p><strong>Maintenance:</strong>  Scheduled maintenance periods, as outlined in Section 3. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Client Responsibilities </h3>
                                <p class="mb-4">
                                    To ensure the reliability of services, clients are responsible for:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>Monitoring and maintaining their own applications, websites, and content hosted on Host2Media servers. </p>
                                    </li>
                                    <li>
                                        <p>Following best practices for securing their accounts and websites. </p>
                                    </li>
                                    <li>
                                        <p>Ensuring timely payments to avoid service suspension.   </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Limitation of Liability </h3>
                                <p class="mb-4">Service credits issued under this SLA are the sole and exclusive remedy for downtime or service interruptions. Host2Media’s total liability for any claims related to service availability is limited to the amount paid by the client for the affected month.  </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Amendments to the SLA  </h3>
                                <p class="mb-4">Host2Media reserves the right to amend this SLA at any time. Updates will be communicated via email or posted on the Host2Media website with a revised "Effective Date." Continued use of services constitutes acceptance of the updated SLA. </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-17 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Support Policy  </h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we are committed to providing reliable and professional support to ensure our clients have a smooth and satisfying experience with our services. This Support Policy outlines the scope, availability, and limitations of our technical support services. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">  Scope of Support</h3>
                                <p class="mb-4">Host2Media offers support for the following areas: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Hosting Services:</strong> Assistance with server setup, cPanel access, and hosting environment configurations. </p>
                                    </li>
                                    <li>
                                        <p><strong>Domain Services:</strong> Help with domain registration, DNS configuration, and transfers.</p>
                                    </li>
                                    <li>
                                        <p><strong>Email Services:</strong> Troubleshooting email setup, delivery issues, and client configuration.</p>
                                    </li>
                                    <li>
                                        <p><strong>Migration Services:</strong> Support for website, email, and database transfers as outlined in our Migration Policy.</p>
                                    </li>
                                    <li>
                                        <p><strong>Account Management:</strong> Assistance with billing, account access, and plan upgrades or downgrades.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Methods of Support </h3>
                                <p class="mb-4">Clients can access Host2Media support through the following channels:  </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Email Support:</strong> [Insert Support Email Address] </p>
                                    </li>
                                    <li>
                                        <p><strong>Live Chat Support:</strong> Available on our website during business hours. </p>
                                    </li>
                                    <li>
                                        <p><strong>Phone Support:</strong> [Insert Support Phone Number], during designated support hours.</p>
                                    </li>
                                    <li>
                                        <p><strong>Support Tickets:</strong> Submit a ticket through your Host2Media account dashboard for detailed inquiries. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Support Hours</h3>
                                <p class="mb-4">Our support team is available during the following times:   </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM to 4:30 PM CET </p>
                                    </li>
                                    <li>
                                        <p><strong>After-Hours Support:</strong> Limited support for critical issues, such as server outages or downtime.  </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Response Times</h3>
                                <p class="mb-4">Host2Media aims to respond to support requests within the following timeframes: </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Critical Issues:</strong>  Within 1 hour during business hours. </p>
                                    </li>
                                    <li>
                                        <p><strong>High Priority Issues:</strong> Within 4 hours during business hours.   </p>
                                    </li>
                                    <li>
                                        <p><strong>General Support:</strong> Within 24 hours.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Definitions of Support Priorities</h3>
                                <p class="mb-1"><strong>Critical Issues:</strong></p>
                                <p class="mb-1">Critical Issues are problems that severely impact the availability or functionality of your services and require immediate attention. These include:</p>
                                <ul class="list-disc pl-5 pb-1">
                                    <li>
                                        <p>Server downtime affecting websites, email, or other services. </p>
                                    </li>
                                    <li>
                                        <p>Data loss or risk of losing critical data due to server issues.</p>
                                    </li>
                                    <li>
                                        <p>Security breaches or suspected hacking attempts. </p>
                                    </li>
                                    <li>
                                        <p>DNS failures causing a domain to stop resolving. </p>
                                    </li>
                                </ul>
                                <p class="mb-1"><strong>High Priority Issues:</strong></p>
                                <p class="mb-1">High Priority Issues are significant problems affecting the functionality or performance of your services, but they do not cause complete unavailability. These include:</p>
                                <ul class="list-disc pl-5 pb-1">
                                    <li>
                                        <p>Website errors such as broken links, database connection issues, or misconfigurations.  </p>
                                    </li>
                                    <li>
                                        <p>Email issues, including problems with sending, receiving, or accessing accounts. </p>
                                    </li>
                                    <li>
                                        <p>Resource overloading affecting website performance.  </p>
                                    </li>
                                    <li>
                                        <p>SSL certificate issues, such as expiration or misconfigurations.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Limitations of Support </h3>
                                <p class="mb-4">
                                    Host2Media support is limited to the services we provide. The following are outside the scope of our support:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p><strong>Third-Party Applications:</strong> Troubleshooting plugins, themes, or software not provided by Host2Media. </p>
                                    </li>
                                    <li>
                                        <p><strong>Custom Development:</strong> Assistance with website coding, custom scripts, or design.  </p>
                                    </li>
                                    <li>
                                        <p><strong> Client Devices:</strong> Configuring or troubleshooting devices like PCs, mobile phones, or tablets, except for email or hosting-related setup.   </p>
                                    </li>
                                    <li>
                                        <p><strong>Security Incidents:</strong>  While we provide general guidance, resolving malware infections or hacking issues is the client's responsibility unless additional services are purchased. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Paid Support Services</h3>
                                <p class="mb-4">
                                    For issues or requests outside the scope of standard support, Host2Media offers paid support services, including:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Website optimization and custom development assistance.</p>
                                    </li>
                                    <li>
                                        <p>Malware removal and advanced security configurations. </p>
                                    </li>
                                    <li>
                                        <p>Priority support for non-critical requests. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">
                                    Clients will be informed of any applicable charges before these services are rendered.
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Client Responsibilities</h3>
                                <p class="mb-4">
                                    To ensure timely and effective support, clients are responsible for:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Providing accurate and detailed information about the issue.</p>
                                    </li>
                                    <li>
                                        <p>Maintaining up-to-date backups of their data. </p>
                                    </li>
                                    <li>
                                        <p>Ensuring their contact information is accurate and up to date in their Host2Media account.</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Support Abuse</h3>
                                <p class="mb-4">
                                    Host2Media has a zero-tolerance policy for abuse toward our support staff. This includes, but is not limited to:
                                </p>
                                <ul class="list-disc pl-5 pb-4">
                                    <li>
                                        <p>Excessive or repetitive demands outside the scope of standard support. </p>
                                    </li>
                                    <li>
                                        <p>Use of abusive, threatening, or inappropriate language. </p>
                                    </li>
                                </ul>
                                <p class="mb-4">
                                    Host2Media reserves the right to limit or terminate support services for clients who violate this policy.
                                </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Disclaimer</h3>
                                <p class="mb-4">While we strive to provide the highest level of support, Host2Media is not liable for delays, data loss, or damages resulting from issues beyond our control. Clients are encouraged to maintain their own backups and follow best practices for security and data management. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy</h3>
                                <p class="mb-4">Host2Media reserves the right to update this Support Policy at any time. Changes will be posted on our website with a revised "Effective Date." </p>
                            </li>
                        </ul>
                    </div>
                    <div class="tab-content sm:px-0 px-3 tab-content-18 hidden">
                        <h2 class="text-xl font-black mb-4 Mulish-Black leading-none" >Termination Policy</h2>
                        <p class="mb-4">Effective Date: [Insert Date]  </p>
                        <p class="mb-4">At Host2Media, we aim to provide high-quality services to our clients. However, certain circumstances may lead to the suspension or termination of services. This Termination Policy outlines the conditions under which services may be terminated, the rights and responsibilities of both Host2Media and the client, and the process for termination. </p>
                        <ul class="list-decimal pl-5">
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Types of Termination</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['1.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination by Host2Media:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Host2Media reserves the right to terminate services immediately or with notice under the following conditions:
                                    </p>
                                    <ul class="list-decimal pl-5 pb-4">
                                        <li>
                                            <p><strong>Non-Payment:</strong> Failure to pay outstanding invoices after the due date, including late fees. </p>
                                        </li>
                                        <li>
                                            <p><strong>Violation of Policies: </strong> Breach of the Terms of Service (TOS), Acceptable Use Policy (AUP), or any other policy governing Host2Media services.  </p>
                                        </li>
                                        <li>
                                            <p><strong>Illegal or Harmful Activities:</strong> Use of services for illegal activities, hosting prohibited content, or engaging in activities that harm Host2Media or its infrastructure.  </p>
                                        </li>
                                        <li>
                                            <p><strong>Resource Abuse:</strong> Excessive use of server resources that negatively impacts other clients. </p>
                                        </li>
                                        <li>
                                            <p><strong>Fraud or Misrepresentation:</strong> Providing false information during registration or using services for fraudulent purposes. </p>
                                        </li>
                                        <li>
                                            <p><strong>Abuse Toward Staff:</strong> Abusive, threatening, or inappropriate behavior directed at Host2Media staff. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['1.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination by the Client:</span>
                                        </p>
                                    </li>
                                    <p class="mb-4">
                                        Clients may terminate their services at any time by providing notice through their account dashboard or by contacting Host2Media’s support team.
                                    </p>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black"> Notice of Termination</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['2.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">By Host2Media: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>In cases of policy violations or harmful activities, Host2Media reserves the right to terminate services without prior notice. </p>
                                        </li>
                                        <li>
                                            <p>For other reasons, Host2Media will provide at least <strong>7 days</strong> notice before termination.</p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['2.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">By the Client:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Clients must provide at least <strong>15 days</strong> notice before the next billing cycle to avoid additional charges. </p>
                                        </li>
                                        <li>
                                            <p>Termination requests can be submitted through the account dashboard or by contacting Host2Media. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Refunds Upon Termination</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['3.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Host2Media-Initiated Termination: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>If services are terminated due to non-payment, policy violations, or abuse, no refunds will be issued.  </p>
                                        </li>
                                        <li>
                                            <p>If Host2Media terminates services for reasons unrelated to the client’s actions, a pro-rated refund may be issued for prepaid unused services.  </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['3.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Client-Initiated Termination:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Refunds for terminated services will follow the terms outlined in the Refund Policy.  </p>
                                        </li>
                                        <li>
                                            <p>Non-refundable services, such as domain registrations, SSL certificates, and third-party services, are not eligible for refunds.  </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Data Retention After Termination</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['4.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Retention Period:  </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Upon termination, client data will be retained for up to 30 days to allow for retrieval, after which it will be permanently deleted.  </p>
                                        </li>
                                        <li>
                                            <p>Clients are responsible for downloading their data before termination or within the retention period. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['4.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Data Access:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Access to data after termination will only be provided if all outstanding invoices have been settled. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Suspension vs. Termination</h3>
                                <ul class="list-none space-y-2">
                                    <li class="before:content-['5.1'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Suspension:</span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Services may be temporarily suspended due to non-payment, excessive resource usage, or suspected policy violations. </p>
                                        </li>
                                        <li>
                                            <p>Suspended accounts may be reactivated upon resolution of the issue. </p>
                                        </li>
                                    </ul>
                                    <li class="before:content-['5.2'] flex justify-start before:mr-2 before:font-bold">
                                        <p class="mb-4">
                                            <span class="text-basic font-bold mb-4 Mulish-black mr-2">Termination: </span>
                                        </p>
                                    </li>
                                    <ul class="list-disc pl-5 pb-4">
                                        <li>
                                            <p>Termination is permanent and involves the deletion of all hosted data and the closure of the client’s account. </p>
                                        </li>
                                    </ul>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Client Responsibilities</h3>
                                <p class="mb-4">
                                    Clients are responsible for:
                                </p>
                                <ul class="list-decimal pl-5 pb-4">
                                    <li>
                                        <p>Adhering to all Host2Media policies and terms. </p>
                                    </li>
                                    <li>
                                        <p>Ensuring timely payment of invoices to avoid suspension or termination. </p>
                                    </li>
                                    <li>
                                        <p>Maintaining backups of their data and retrieving it promptly in case of termination. </p>
                                    </li>
                                </ul>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Appeals Process</h3>
                                <p class="mb-4">If a client believes their account was terminated or suspended in error, they may submit an appeal by contacting Host2Media’s support team within 7 days of termination. Appeals will be reviewed on a case-by-case basis, and Host2Media’s decision will be final. </p>
                            </li>
                            <li class="marker:font-bold mb-4">
                                <h3 class="text-basic font-bold mb-4 Mulish-black">Amendments to This Policy</h3>
                                <p class="mb-4">Host2Media reserves the right to update this Termination Policy at any time to reflect changes in laws or operational practices. Updates will be communicated via email or posted on our website with a revised "Effective Date." </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const route = useRoute();
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
const tab = route.query.tab ?? '';
watch(
    () => route.query?.tab,
    (newtab, oldQuery) => {
        changeTabContent(Number(newtab))
    }
)
onMounted(() => {
    if (tab) {
        changeTabContent(Number(tab))
    }
})
</script>