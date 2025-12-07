import { Link } from "react-router-dom";

export const Features = () => {
            const features = [
                {
                    icon: '📺',
                    title: '12,000+ Live Channels',
                    description: 'Access a vast library of international channels from around the world in crystal clear quality.'
                },
                {
                    icon: '🎬',
                    title: 'Movies & TV Series',
                    description: 'Unlimited on-demand content with the latest movies and binge-worthy series at your fingertips.'
                },
                {
                    icon: '⚡',
                    title: 'Ultra HD 4K Quality',
                    description: 'Experience stunning picture quality with 4K streaming and adaptive bitrate technology.'
                },
                {
                    icon: '🌍',
                    title: 'Global Coverage',
                    description: 'Watch content from USA, UK, Canada, Europe, Asia, and more with multi-language support.'
                },
                {
                    icon: '📱',
                    title: 'Multi-Device Support',
                    description: 'Stream on any device - Smart TV, Mobile, Tablet, PC, FireStick, Android Box, and more.'
                },
                {
                    icon: '🔒',
                    title: 'Secure & Reliable',
                    description: '99.9% uptime guarantee with encrypted connections and anti-buffering technology.'
                },
                {
                    icon: '💬',
                    title: '24/7 Support',
                    description: 'Round-the-clock customer support to help you with setup and any questions.'
                }
            ];

            return (
                <section id="features" className="py-10 relative overflow-hidden">
                    <div className="absolute inset-0 mesh-gradient opacity-50"></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Why Choose <span className="gradient-text">StreamsAct</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Premium features designed to give you the ultimate streaming experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {features.map((feature, index) => (
                                <div 
                                    key={index}
                                    className="glass-card p-6 rounded-xl hover-scale card-3d"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="text-5xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                    <p className="text-gray-400">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center pt-6">
                          <p className="text-center max-w-3xl text-gray-400 mx-auto text-xl">Join the thousands of satisfied customers who have made us their go-to IPTV subscription service. Upgrade your entertainment with our <span className="gradient-text font-bold"> VIP Premium IPTV account today!</span></p>
                        </div>
                        <div className="text-center mt-4">
                            <button className="gradient-bg text-white px-10 py-4 rounded-lg font-bold text-lg btn-glow">
                               <Link to="/order-now">Get Started Now</Link>
                            </button>
                        </div>
                    </div> 
                </section>
            );
        };