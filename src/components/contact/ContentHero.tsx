export const ContactHero = () => {
    return (
        <section id="contact-hero" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 mesh-gradient opacity-50"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
                    Get the <span className="gradient-text">Best IPTV Experience</span><br />
                    With Premium Streaming Quality
                </h1>

                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                    Fast, reliable, and crystal-clear streaming. Join thousands of happy users enjoying TV without limits.  
                    Choose your plan and get instant activation.
                </p>

                <div className="flex justify-center gap-6 mt-10">
                    <div className="glass-card px-6 py-4 rounded-lg">
                        <div className="text-3xl font-black gradient-text mb-1">50K+</div>
                        <div className="text-gray-400 text-sm">Active Subscribers</div>
                    </div>
                    <div className="glass-card px-6 py-4 rounded-lg">
                        <div className="text-3xl font-black gradient-text mb-1">99.9%</div>
                        <div className="text-gray-400 text-sm">Server Uptime</div>
                    </div>
                    <div className="glass-card px-6 py-4 rounded-lg">
                        <div className="text-3xl font-black gradient-text mb-1">24/7</div>
                        <div className="text-gray-400 text-sm">Instant Support</div>
                    </div>
                </div>

            </div>
        </section>
    );
};
