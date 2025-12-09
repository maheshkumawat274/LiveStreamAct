import { usePopup } from "../popup/usePopup";

  export const Pricing = () => {
  const individualPlans = [
    
    {
        name: '1 Month Plan',
        price: '$12.99',
        duration: 'Monthly',
        connection: '1 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '1 user at the same time'
        ],
        popular: false
    },
    {
        name: '3 Month Plan',
        price: '$26.44',
        duration: 'Monthly',
        connection: '1 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '1 user at the same time'
        ],
        popular: false
    },
    {
        name: '6 Month Plan',
        price: '$36.99',
        duration: 'Monthly',
        connection: '1 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '1 user at the same time'
        ],
        popular: false
    },
    {
        name: '12 Month Plan',
        price: '$79.99',
        duration: 'Monthly',
        connection: '1 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '1 user at the same time'
        ],
        popular: false
    }
];


            const familyPlans = [
    {
        name: '1 Month Plan',
        price: '$89.99',
        duration: 'Monthly',
        connection: '3 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '3 user at the same time'
        ],
        popular: false
    },
    {
        name: '3 Month Plan',
        price: '$169.99',
        duration: 'Monthly',
        connection: '4 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '4 user at the same time'
        ],
        popular: false
    },
    {
        name: '6 Month Plan',
        price: '$219.99',
        duration: 'Monthly',
        connection: '4 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '4 user at the same time'
        ],
        popular: false
    },
    {
        name: '12 Month Plan',
        price: '$289.99',
        duration: 'Monthly',
        connection: '5 user at the same time',
        features: [
            'TV Guide (EPG)',
            '+21000 Live channels',
            '120000 Movies and TV Shows',
            '4K FHD HD High Quality',
            'NBA, NHL, NFL Package',
            'All top sport channels & PPV',
            'Anti-Freeze Technology',
            '24/7 active support',
            '5 user at the same time'
        ],
        popular: false
    }
];

            const { openPopup } = usePopup();
            return (
                <section id="pricing" className="pt-24 pb-12 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                Our <span className="gradient-text">Pricing Plans</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Choose the perfect plan for your entertainment needs
                            </p>
                        </div>

                        {/* Individual Plans */}
                        <div id="individual-plans" className="mb-16">
                            <h3 className="text-3xl font-bold text-white text-center mb-8">
                                <span className="gradient-text">Individual Plans</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {individualPlans.map((plan, index) => (
                                    <div 
                                        key={index}
                                        className={`${plan.popular ? 'glass-card-premium' : 'glass-card'} p-8 rounded-2xl hover-scale relative`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                <span className="gradient-bg px-4 py-1 rounded-full text-white text-sm font-bold">
                                                    Best Value
                                                </span>
                                            </div>
                                        )}
                                        
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                            <div className="text-5xl font-black gradient-text mb-2">{plan.price}</div>
                                            <p className="text-purple-400 font-semibold">{plan.duration}</p>
                                            <p className="text-gray-400 text-sm mt-2">{plan.connection}</p>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center text-gray-300">
                                                    <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <button onClick={openPopup} className={`w-full ${plan.popular ? 'gradient-bg' : 'glass-card'} text-white px-6 py-3 rounded-lg font-bold btn-glow `}>
                                            Get It Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Family Plans */}
                        <div id="family-plans">
                            <h3 className="text-3xl font-bold text-white text-center mb-8">
                                <span className="gradient-text">Family Plans</span>
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {familyPlans.map((plan, index) => (
                                    <div 
                                        key={index}
                                        className={`${plan.popular ? 'glass-card-premium' : 'glass-card'} p-8 rounded-2xl hover-scale relative`}
                                    >
                                        {plan.popular && (
                                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                                <span className="gradient-bg px-4 py-1 rounded-full text-white text-sm font-bold">
                                                    Best Value
                                                </span>
                                            </div>
                                        )}
                                        
                                        <div className="text-center mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                            <div className="text-5xl font-black gradient-text mb-2">{plan.price}</div>
                                            <p className="text-purple-400 font-semibold">{plan.duration}</p>
                                            <p className="text-gray-400 text-sm mt-2">{plan.connection}</p>
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-center text-gray-300">
                                                    <svg className="w-5 h-5 text-purple-400 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <button onClick={openPopup} className={`w-full ${plan.popular ? 'gradient-bg' : 'glass-card'} text-white px-6 py-3 rounded-lg font-bold btn-glow`}>
                                            Get It Now
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center mt-12">
                            <p className="text-gray-400 mb-4">Free 24-hour trial available. Instant activation after payment.</p>
                            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Instant Activation
                                </span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    24/7 Support
                                </span>
                                <span className="flex items-center">
                                    <svg className="w-4 h-4 mr-1 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Secure Payment
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            );
        };