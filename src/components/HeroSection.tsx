

        
        import { useMemo } from 'react';

// Pure function outside component
const generateParticles = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    width: Math.random() * 100 + 50,
    height: Math.random() * 100 + 50,
    left: Math.random() * 100,
    top: Math.random() * 100,
    background: i % 2 === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(59, 130, 246, 0.1)',
    delay: Math.random() * 3,
    duration: Math.random() * 3 + 3
  }));
};

export const Hero = () => {
  const particles = useMemo(() => generateParticles(20), []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-gradient">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className="particle floating"
            style={{
              width: `${particle.width}px`,
              height: `${particle.height}px`,
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              background: `radial-gradient(circle, ${particle.background}, transparent)`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
                        <div className="text-center">
                            <div className="inline-block glass-card px-4 py-2 rounded-full mb-6 fade-in">
                                <span className="text-purple-400 text-sm font-semibold">🎬 Premium IPTV Service</span>
                            </div>
                            
                            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 slide-in-left text-shadow">
                                Stream Unlimited
                                <br />
                                <span className="gradient-text">Entertainment</span>
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto slide-in-right">
                                Enjoy 12000+ Live TV Channels + VODs EPG, that work from any location, on all your favorite devices
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
                                <button className="gradient-bg text-white px-8 py-4 rounded-lg font-bold text-lg btn-glow">
                                    <a href='#individual-plans'>Individual Plan</a>
                                </button>
                                <button className="glass-card text-white px-8 py-4 rounded-lg font-bold text-lg hover-scale">
                                    <a href='#family-plans'>Family Plan</a>
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 fade-in">
                                {[
                                    { value: '20,000+', label: 'Live Channels' },
                                    { value: '99.9%', label: 'Uptime' },
                                    { value: '4K', label: 'HD Quality' },
                                    { value: '24/7', label: 'Support' }
                                ].map((stat, index) => (
                                    <div key={index} className="glass-card p-6 rounded-xl hover-scale">
                                        <div className="text-3xl md:text-4xl font-black gradient-text mb-2">{stat.value}</div>
                                        <div className="text-gray-400 font-medium">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
    </section>
  );
};