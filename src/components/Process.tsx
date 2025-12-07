import { Link } from "react-router-dom";

export const HowItWorks = () => {
            const steps = [
                {
                    step: '01',
                    title: 'Choose Your Plan',
                    description: 'Select the subscription plan that best fits your needs - Individual or Family, monthly or yearly.',
                    icon: '📋'
                },
                
                {
                    step: '02',
                    title: 'Receive Credentials',
                    description: 'Upon successful registration, you will receive login credentials. Check your mail inbox and follow the simple setup instructions provided ensuring a seamless integration with your chosen device.',
                    icon: '📧'
                },
                {
                    step: '03',
                    title: 'Install & Setup',
                    description: 'Download our app on your preferred device or configure your IPTV player with the provided details.',
                    icon: '⚙️'
                },
                {
                    step: '04',
                    title: 'Start Streaming',
                    description: 'Login with your credentials and enjoy unlimited access to thousands of channels and content.',
                    icon: '🎬'
                },
                {
                    step: '05',
                    title: 'Get Support',
                    description: 'Our 24/7 customer support team is always ready to help you with any questions or issues.',
                    icon: '🎧'
                }
            ];

            return (
                <section id="process" className="py-12 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                How It <span className="gradient-text">Works?</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Get started in minutes with our simple and straightforward process
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {steps.map((step, index) => (
                                <div 
                                    key={index}
                                    className="glass-card p-8 rounded-2xl hover-scale relative"
                                >
                                    <div className="absolute -top-4 -left-4 w-16 h-16 gradient-bg rounded-xl flex items-center justify-center glow">
                                        <span className="text-2xl font-black text-white">{step.step}</span>
                                    </div>
                                    <div className="text-6xl mb-4 mt-4">{step.icon}</div>
                                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-12">
                            <button className="gradient-bg text-white px-10 py-4 rounded-lg font-bold text-lg btn-glow">
                                <Link to="/order-now">Get Started Now</Link>
                            </button>
                        </div>
                    </div>
                </section>
            );
        };