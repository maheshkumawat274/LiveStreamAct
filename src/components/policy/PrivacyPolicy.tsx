import { Link } from "react-router-dom";

 export const PrivacyPolicy = () => {
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
                            <h1 className="text-4xl md:text-5xl font-black gradient-text mb-4">Privacy Policy</h1>
                            <p className="text-gray-400 mb-8">Last Updated: January 2025</p>
                            
                            <div className="space-y-8 text-gray-300">
                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                                    <p className="leading-relaxed mb-4">
                                        At StreamsAct, we collect information necessary to provide and improve our IPTV services:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li><strong>Personal Information:</strong> Name, email address, billing information</li>
                                        <li><strong>Account Information:</strong> Username, password, subscription details</li>
                                        <li><strong>Usage Data:</strong> Viewing history, device information, IP address</li>
                                        <li><strong>Payment Information:</strong> Credit card details, transaction history (processed securely)</li>
                                        <li><strong>Technical Data:</strong> Device type, browser type, operating system</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                                    <p className="leading-relaxed mb-4">We use collected information for:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Providing and maintaining IPTV services</li>
                                        <li>Processing payments and managing subscriptions</li>
                                        <li>Personalizing content recommendations</li>
                                        <li>Improving service quality and user experience</li>
                                        <li>Sending service-related communications and updates</li>
                                        <li>Preventing fraud and ensuring security</li>
                                        <li>Complying with legal obligations</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                                    <p className="leading-relaxed mb-4">
                                        We implement industry-standard security measures to protect your personal information:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>SSL/TLS encryption for data transmission</li>
                                        <li>Secure password storage with encryption</li>
                                        <li>Regular security audits and updates</li>
                                        <li>Restricted access to personal data</li>
                                        <li>Secure payment processing through trusted providers</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing</h2>
                                    <p className="leading-relaxed mb-4">
                                        We do not sell your personal information. We may share data with:
                                    </p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Payment processors for transaction processing</li>
                                        <li>Service providers who assist in operations</li>
                                        <li>Law enforcement when required by law</li>
                                        <li>Business partners with your explicit consent</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">5. Cookies and Tracking</h2>
                                    <p className="leading-relaxed mb-4">
                                        We use cookies and similar technologies to enhance your experience, analyze usage patterns, and provide personalized content. You can manage cookie preferences through your browser settings.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
                                    <p className="leading-relaxed mb-4">You have the right to:</p>
                                    <ul className="list-disc list-inside space-y-2 ml-4">
                                        <li>Access your personal information</li>
                                        <li>Correct inaccurate data</li>
                                        <li>Request deletion of your data</li>
                                        <li>Object to data processing</li>
                                        <li>Export your data</li>
                                        <li>Withdraw consent at any time</li>
                                    </ul>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                                    <p className="leading-relaxed mb-4">
                                        We retain your personal information for as long as necessary to provide services and comply with legal obligations. Account data is deleted within 30 days of account closure unless required for legal purposes.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">8. Children's Privacy</h2>
                                    <p className="leading-relaxed mb-4">
                                        Our services are not intended for children under 13. We do not knowingly collect personal information from children. Parents can use parental controls to restrict content access.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">9. International Data Transfers</h2>
                                    <p className="leading-relaxed mb-4">
                                        Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Privacy Policy</h2>
                                    <p className="leading-relaxed mb-4">
                                        We may update this privacy policy periodically. We will notify you of significant changes via email or service notifications.
                                    </p>
                                </section>

                                <section>
                                    <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                                    <p className="leading-relaxed">
                                        For privacy-related questions or to exercise your rights, contact us at:<br/>
                                        Email: privacy@streamsact.com<br/>
                                        Data Protection Officer: support@streamsact.com<br/>
                                        Available 24/7
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };