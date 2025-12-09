import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";

export const PurchasePlanContact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        individualPlan: '',
        familyPlan: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');

        setFormData({
            name: '',
            email: '',
            individualPlan: '',
            familyPlan: '',
            message: ''
        });
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-12 relative overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Contact For<span className="gradient-text"> Purchase</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Have questions? We're here to help 24/7
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div className="space-y-6">
                        {/* CALL SUPPORT */}
                        <a 
                          href="tel:+1234567890"
                          className="flex items-center glass-card p-6 rounded-xl hover-scale group transition-all"
                        >
                            {/* Icon Box */}
                            <div className="min-w-12 min-h-12 w-12 h-12 gradient-bg rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform text-xl">
                                📞
                            </div>
                        
                            {/* Text Box */}
                            <div className="ml-4">
                                <h4 className="text-white font-bold text-lg">Call Support</h4>
                                <p className="text-gray-400 text-sm">Talk to our team instantly</p>
                            </div>
                        </a>
                        
                        <div className="glass-card p-6 rounded-xl hover-scale">
                            
                            <a 
                                href="mailto:support@streamsact.com"
                                className="flex items-start "
                            >
                                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
                                    
                                    <p className="text-gray-400">support@streamsact.com</p>
                                    <p className="text-gray-400">sales@streamsact.com</p>
                                </div>
                            </a>

                        </div>

                        <div className="glass-card p-6 rounded-xl hover-scale">
                            <div className="flex items-start">
                                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">Live Chat</h3>
                                    <p className="text-gray-400">Chat with our support agent</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6 rounded-xl hover-scale">
                            <div className="flex items-start">
                                <div className="gradient-bg w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-2">Business Hours</h3>
                                    <p className="text-gray-400">24/7 Customer Support</p>
                                    <p className="text-gray-400">Always here to help you</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="glass-card p-6 rounded-xl">
                            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                {['facebook', 'twitter', 'instagram', 'youtube'].map((social) => (
                                    <a 
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center hover-scale"
                                    >
                                        <span className="text-white text-xl">
                                            {social === 'facebook' && 'f'}
                                            {social === 'twitter' && '𝕏'}
                                            {social === 'instagram' && '📷'}
                                            {social === 'youtube' && '▶'}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card p-8 rounded-xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Full Name */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 transition-all"
                                    placeholder="Your Full Name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            {/* Individual Plan */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Individual Plan</label>
                                <select
                                    name="individualPlan"
                                    value={formData.individualPlan}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 transition-all"
                                >
                                    <option value="" className="text-black">Select Plan</option>
                                    <option value="1 Month" className="text-black">1 Month</option>
                                    <option value="3 Months" className="text-black">3 Months</option>
                                    <option value="6 Months" className="text-black">6 Months</option>
                                    <option value="12 Months" className="text-black">12 Months</option>
                                </select>
                            </div>

                            {/* Family Plan */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Family Plan</label>
                                <select
                                    name="familyPlan"
                                    value={formData.familyPlan}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-purple-500 transition-all"
                                >
                                    <option value="" className="text-black">Select Plan</option>
                                    <option value="1 Month" className="text-black">1 Month</option>
                                    <option value="3 Months" className="text-black">3 Months</option>
                                    <option value="6 Months" className="text-black">6 Months</option>
                                    <option value="12 Months" className="text-black">12 Months</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 transition-all resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit"
                                className="w-full gradient-bg text-white px-6 py-4 rounded-lg font-bold btn-glow"
                            >
                                Send Message
                            </button>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};
