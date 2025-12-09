import { useState } from "react";

export const FAQs = () => {
            const [openIndex, setOpenIndex] = useState<number | null>(null);

            const faqs = [
                {
                    question: 'What is IPTV?',
                    answer: 'IPTV (Internet Protocol Television) is a system where television services are delivered using the Internet protocol suite over a packet-switched network such as the internet, instead of traditional terrestrial, satellite, and cable television formats.'
                },
                {
                    question: 'How do I subscribe to StreamsAct?',
                    answer: 'Simply choose your preferred plan from our pricing section, complete the payment, and you will receive your login credentials via email instantly. You can then download our app or configure your IPTV player and start streaming.'
                },
                {
                    question: 'What devices are compatible?',
                    answer: 'StreamsAct works on all major devices including Smart TVs (Samsung, LG, Android TV), smartphones (iOS & Android), tablets, computers, Fire Stick, Apple TV, MAG boxes, and any device that supports IPTV players like VLC or Perfect Player.'
                },
                {
                    question: 'What internet speed do I need?',
                    answer: 'We recommend a minimum of 10 Mbps for HD streaming and 25 Mbps for 4K content. Our service includes anti-freeze technology that adapts to your connection speed for optimal performance.'
                },
                {
                    question: 'Can I use my subscription on multiple devices?',
                    answer: 'Individual plans include 1 connection, meaning you can stream on one device at a time. Family plans include 2 connections, allowing simultaneous streaming on two devices. You can switch between devices anytime.'
                },
                {
                    question: 'Is there a contract or commitment?',
                    answer: 'No contracts required! You can choose monthly, 3-month, 6-month, or yearly subscriptions. Cancel anytime without any penalties or fees.'
                },
                {
                    question: 'What payment methods do you accept?',
                    answer: 'We accept all major payment methods including Credit/Debit Cards (Visa, Mastercard), PayPal, Bitcoin, and other cryptocurrencies for your convenience and security.'
                },
                {
                    question: 'How is the streaming quality?',
                    answer: 'We provide HD, Full HD, and 4K streaming quality depending on the channel and your internet speed. Our advanced servers and anti-freeze technology ensure minimal buffering and smooth playback.'
                },
                {
                    question: 'Do you provide customer support?',
                    answer: 'Yes! We offer 24/7 customer support via live chat, email, and WhatsApp. Our technical team is always ready to help you with installation, troubleshooting, or any questions you may have.'
                },
                {
                    question: 'Can I watch sports events live?',
                    answer: 'Absolutely! We offer all major sports channels and packages including football, basketball, cricket, UFC, boxing, and more. Never miss your favorite games and matches.'
                },
                {
                    question: 'What is your refund policy?',
                    answer: 'We offer a satisfaction guarantee. If you experience technical issues that we cannot resolve within the first 3 days of your subscription, you are eligible for a refund. Please review our full refund policy for details.'
                }
            ];

            return (
                <section id="faq" className="py-12 relative overflow-hidden">
                    <div className="absolute inset-0 mesh-gradient opacity-50"></div>
                    
                    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Frequently Asked <span className="gradient-text">Questions</span>
                            </h2>
                            <p className="text-xl text-gray-400">
                                Find answers to common questions about our IPTV service
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div 
                                    key={index}
                                    className="glass-card rounded-xl overflow-hidden hover-scale"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left"
                                    >
                                        <span className="text-white font-bold text-lg pr-4">{faq.question}</span>
                                        <svg 
                                            className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 pb-5">
                                            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-400 mb-4">Still have questions?</p>
                            <button className="gradient-bg text-white px-8 py-3 rounded-lg font-bold btn-glow">
                                Contact Support
                            </button>
                        </div>
                    </div>
                </section>
            );
        };