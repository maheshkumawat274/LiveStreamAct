import { Link } from "react-router-dom";

       export const RefundPolicy = () => {
            return (
                <div className="min-h-screen pt-24 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button 
                            
                            className="glass-card px-6 py-3 rounded-lg text-white font-semibold mb-8 hover-scale flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <Link to="/">Back to Home</Link>
                        </button>
                        
                        <div className="glass-card p-8 md:p-12 rounded-2xl">
                            <h1 className="text-4xl md:text-5xl font-black gradient-text mb-4">Refund Policy</h1>
                            <p className="text-gray-400 mb-8">Last Updated: January 2025</p>
                            
                            <div className="space-y-8 text-gray-300">
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">1. Refund Eligibility</h2>
                                    <p className="leading-relaxed mb-4">
                                        At StreamsAct, we want you to be completely satisfied with our service. We offer refunds under specific circumstances:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Technical issues that cannot be resolved within 3 days of subscription</li>
                                        <li>Service not delivered after payment confirmation</li>
                                        <li>Duplicate charges or billing errors</li>
                                        <li>Service significantly different from description</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">2. Free Trial Period</h2>
                                    <p className="leading-relaxed mb-4">
                                        We offer a 24-hour free trial to test our service quality before committing to a paid subscription. We encourage all new users to utilize this trial period to ensure our service meets their expectations.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">3. Refund Window</h2>
                                    <p className="leading-relaxed mb-4">
                                        Refund requests must be submitted within <strong>3 days</strong> of the initial purchase date. Requests made after this period will not be eligible for refunds.
                                    </p>
                                    <div className="glass-card p-4 rounded-lg mt-4 bg-purple-500/10">
                                        <p className="text-purple-300 font-semibold">Important: The 3-day refund window starts from the date of purchase, not from the date of service activation.</p>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">4. Non-Refundable Situations</h2>
                                    <p className="leading-relaxed mb-4">Refunds will NOT be provided in the following cases:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Change of mind after the 3-day refund period</li>
                                        <li>Issues caused by incompatible devices or poor internet connection on user's end</li>
                                        <li>Partial subscription periods (no pro-rata refunds)</li>
                                        <li>Account termination due to terms of service violations</li>
                                        <li>Sharing login credentials with unauthorized parties</li>
                                        <li>Failure to cancel before automatic renewal</li>
                                        <li>ISP or local network issues beyond our control</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">5. Refund Process</h2>
                                    <p className="leading-relaxed mb-4">To request a refund, follow these steps:</p>
                                    <ol className="list-decimal list-inside space-y-2 ml-4">
                                        <li>Contact our support team at support@streamsact.com</li>
                                        <li>Provide your order number and account details</li>
                                        <li>Explain the reason for your refund request</li>
                                        <li>Allow our technical team to attempt to resolve any issues</li>
                                        <li>If unresolved, refund will be processed within 5-7 business days</li>
                                    </ol>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">6. Refund Method</h2>
                                    <p className="leading-relaxed mb-4">
                                        Approved refunds will be credited to the original payment method used for the purchase:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Credit/Debit Cards:</strong> 5-10 business days</li>
                                        <li><strong>PayPal:</strong> 3-5 business days</li>
                                        <li><strong>Cryptocurrency:</strong> Equivalent value in the original crypto within 3-5 days</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">7. Subscription Cancellation</h2>
                                    <p className="leading-relaxed mb-4">
                                        You can cancel your subscription at any time to prevent future charges. However, cancellation does not automatically qualify you for a refund of the current subscription period.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Access remains active until the end of the current billing period</li>
                                        <li>No partial refunds for unused time within a billing period</li>
                                        <li>Cancel at least 24 hours before renewal to avoid next period charges</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">8. Technical Support First</h2>
                                    <p className="leading-relaxed mb-4">
                                        Before requesting a refund, we strongly encourage you to contact our 24/7 technical support team. Most issues can be quickly resolved with:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Device configuration assistance</li>
                                        <li>App installation guidance</li>
                                        <li>Streaming quality optimization</li>
                                        <li>Account troubleshooting</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">9. Chargebacks</h2>
                                    <p className="leading-relaxed mb-4">
                                        Initiating a chargeback without first contacting us may result in immediate account termination and inability to use our services in the future. Please contact our support team to resolve any billing disputes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">10. Service Guarantees</h2>
                                    <div className="glass-card p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                                        <h3 className="text-xl font-bold text-green-400 mb-3">Our Commitments:</h3>
                                        <ul className="list-disc list-inside space-y-2 ml-4 text-gray-300">
                                            <li>99.9% service uptime</li>
                                            <li>24/7 customer support</li>
                                            <li>Regular service improvements</li>
                                            <li>Transparent billing practices</li>
                                            <li>Fast refund processing for eligible cases</li>
                                        </ul>
                                    </div>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">11. Policy Changes</h2>
                                    <p className="leading-relaxed mb-4">
                                        We reserve the right to modify this refund policy at any time. Changes will be communicated via email and posted on our website. Continued use of the service after changes constitutes acceptance.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">12. Contact for Refunds</h2>
                                    <div className="glass-card p-6 rounded-lg bg-purple-500/10 border border-purple-500/20">
                                        <p className="leading-relaxed text-gray-300">
                                            For refund requests or billing questions:<br/><br/>
                                            <strong className="text-white">Email:</strong> support@streamsact.com<br/>
                                            <strong className="text-white">Subject:</strong> Refund Request - [Your Order Number]<br/>
                                            <strong className="text-white">Response Time:</strong> Within 24 hours<br/>
                                            <strong className="text-white">Available:</strong> 24/7
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
