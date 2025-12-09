import { Link } from "react-router-dom";

     export const Footer = () => {
            const footerLinks = {
                'Quick Links': ['Home', 'Features', 'Pricing', 'Channels', 'Contact'],
                'Support': ['FAQ', 'Setup Guide', 'Tutorials', 'Troubleshooting', 'Terms of Service'],
                'Popular': ['Sports Channels', 'Movies & Series', 'Live TV', 'VOD', 'Catch-Up TV']
            };

            return (
                <footer className="relative py-16 border-t border-white/10">
                    <div className="absolute inset-0 mesh-gradient opacity-30"></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                            {/* Brand */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center glow">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-2xl font-bold gradient-text">StreamsAct</span>
                                </div>
                                <p className="text-gray-400 mb-4 max-w-sm">
                                    Premium IPTV service delivering 12,000+ channels worldwide. Experience entertainment like never before.
                                </p>
                                <div className="flex space-x-3">
                                    {['f', '𝕏', '📷', '▶'].map((icon, i) => (
                                        <a 
                                            key={i}
                                            href="#"
                                            className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover-scale text-white"
                                        >
                                            {icon}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            {Object.entries(footerLinks).map(([title, links]) => (
                                <div key={title}>
                                    <h4 className="text-white font-bold mb-4">{title}</h4>
                                    <ul className="space-y-2">
                                        {links.map((link) => (
                                            <li key={link}>
                                                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                                                    {link}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        {/* Bottom Bar */}
                        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                                © 2025 StreamsAct. All rights reserved.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <p className="text-gray-400 hover:text-purple-400 transition-colors"><Link to="/privacy-policy">Privacy Policy</Link></p>
                                <p className="text-gray-400 hover:text-purple-400 transition-colors"><Link to="/terms-conditions">Terms & conditions Service</Link></p>
                                <p className="text-gray-400 hover:text-purple-400 transition-colors"><Link to="/refund-policy">Refund Policy</Link></p>
                            </div>
                        </div>
                    </div>
                </footer>
            );
        };