export const OTTSolution = () => {
            const solutions = [
                {
                    icon: '📱',
                    title: 'Mobile Apps',
                    description: 'iOS and Android apps for streaming on the go'
                },
                {
                    icon: '💻',
                    title: 'Web Platform',
                    description: 'Access from any browser on any device'
                },
                {
                    icon: '📺',
                    title: 'Smart TV',
                    description: 'Native apps for Samsung, LG, and Android TV'
                },
                {
                    icon: '🎮',
                    title: 'Set-Top Boxes',
                    description: 'Compatible with all major IPTV boxes'
                },
                {
                    icon: '🔥',
                    title: 'Fire Stick',
                    description: 'Optimized app for Amazon Fire TV devices'
                },
                {
                    icon: '🍎',
                    title: 'Apple TV',
                    description: 'Premium experience on Apple TV devices'
                }
            ];

            return (
                <section className="pt-10 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Complete OTT <span className="gradient-text">Multiscreen Solution</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                Watch your favorite content anytime, anywhere on any device. Our OTT platform delivers seamless streaming across all screens with synchronized playback and personalized recommendations.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                            {solutions.map((solution, index) => (
                                <div 
                                    key={index}
                                    className="glass-card p-8 rounded-2xl hover-scale text-center"
                                >
                                    <div className="text-6xl mb-4">{solution.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                                    <p className="text-gray-400">{solution.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };
