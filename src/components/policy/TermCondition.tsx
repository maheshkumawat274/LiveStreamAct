import { Link } from "react-router-dom";

 export const TermsConditions = () => {
            return (
                <div className="min-h-screen pt-24 pb-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <Link to="/"
                            className="glass-card px-6 py-3 rounded-lg text-white font-semibold mb-8 hover-scale flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Home
                        </Link>
                        
                        <div className="glass-card p-8 md:p-12 rounded-2xl">
                            <h1 className="text-4xl md:text-5xl font-black gradient-text mb-4">Terms & Conditions</h1>
                            <p className="text-gray-400 mb-8">Last Updated: January 2025</p>
                            
                            <div className="space-y-8 text-gray-300">
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                                    <p className="leading-relaxed mb-4">
                                        By accessing and using StreamsAct IPTV services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
                                    <p className="leading-relaxed mb-4">
                                        StreamsAct provides IPTV streaming services including live TV channels, movies, series, and on-demand content. The service is delivered via internet connection and requires compatible devices.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>24,000+ Live TV Channels</li>
                                        <li>100,000+ Movies & Series</li>
                                        <li>HD/4K Quality Streaming</li>
                                        <li>Multi-device Support</li>
                                        <li>24/7 Customer Support</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">3. User Obligations</h2>
                                    <p className="leading-relaxed mb-4">As a user of StreamsAct services, you agree to:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Provide accurate and complete registration information</li>
                                        <li>Maintain the security of your account credentials</li>
                                        <li>Use the service only for personal, non-commercial purposes</li>
                                        <li>Not share your login credentials with unauthorized parties</li>
                                        <li>Not attempt to reverse engineer or tamper with our service</li>
                                        <li>Comply with all applicable laws and regulations</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">4. Subscription and Payment</h2>
                                    <p className="leading-relaxed mb-4">
                                        Subscriptions are available in various durations (1 month, 3 months, 6 months, 12 months) for both Individual and Family plans. Payment must be made in advance for the selected subscription period.
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>All prices are in Euros (€) unless otherwise stated</li>
                                        <li>Automatic renewal may apply unless cancelled before renewal date</li>
                                        <li>No refunds for partial subscription periods</li>
                                        <li>Payment methods include credit cards, PayPal, and cryptocurrencies</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">5. Device and Connection Limits</h2>
                                    <p className="leading-relaxed mb-4">
                                        Individual plans allow 1 simultaneous connection. Family plans allow 2 simultaneous connections. Exceeding these limits may result in service suspension.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">6. Service Availability</h2>
                                    <p className="leading-relaxed mb-4">
                                        While we strive for 99.9% uptime, we do not guarantee uninterrupted service. Maintenance, updates, or unforeseen circumstances may cause temporary service interruptions.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">7. Content and Copyright</h2>
                                    <p className="leading-relaxed mb-4">
                                        All content provided through StreamsAct is for personal viewing only. Users must not record, distribute, or commercially exploit any content without proper authorization.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">8. Account Termination</h2>
                                    <p className="leading-relaxed mb-4">
                                        We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or abuse the service. No refunds will be provided for terminated accounts.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                                    <p className="leading-relaxed mb-4">
                                        StreamsAct shall not be liable for any indirect, incidental, special, or consequential damages arising from the use or inability to use our services.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
                                    <p className="leading-relaxed mb-4">
                                        We reserve the right to modify these terms at any time. Continued use of the service after changes constitutes acceptance of the new terms.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
                                    <p className="leading-relaxed">
                                        For questions about these terms, please contact us at:<br/>
                                        Email: support@streamsact.com<br/>
                                        Available 24/7
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };