 export const Specialization = () => {
            const specializations = [
                {
                    icon: '⚡',
                    title: 'Anti-Freeze Technology',
                    description: 'Advanced buffering prevention ensures smooth, uninterrupted streaming even on slower connections.'
                },
                {
                    icon: '🎯',
                    title: 'EPG Integration',
                    description: 'Complete Electronic Program Guide with detailed show information and scheduling for all channels.'
                },
                {
                    icon: '🔄',
                    title: 'Catch-Up TV',
                    description: '7-day catch-up feature lets you watch shows you missed anytime within a week.'
                },
                {
                    icon: '📹',
                    title: 'Cloud Recording',
                    description: 'Record your favorite shows to the cloud and watch them whenever you want.'
                },
                {
                    icon: '🌐',
                    title: 'Multi-Language Support',
                    description: 'Interface and content available in multiple languages for global accessibility.'
                },
                {
                    icon: '👨‍👩‍👧‍👦',
                    title: 'Parental Controls',
                    description: 'Advanced parental control features to keep your children safe while watching.'
                },
                {
                    icon: '📊',
                    title: 'Advanced Analytics',
                    description: 'Track your viewing habits and get personalized content recommendations.'
                },
                {
                    icon: '🔐',
                    title: 'Secure Streaming',
                    description: 'End-to-end encryption ensures your data and privacy are always protected.'
                }
            ];

            return (
                <section className="py-10 relative overflow-hidden">
                    <div className="absolute inset-0 mesh-gradient opacity-50"></div>
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Our <span className="gradient-text">Specialization?</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                What makes us stand out from the competition - cutting-edge features and technologies
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {specializations.map((item, index) => (
                                <div 
                                    key={index}
                                    className="glass-card p-6 rounded-xl hover-scale"
                                >
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };
