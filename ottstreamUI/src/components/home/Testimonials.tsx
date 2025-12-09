 export const Testimonials = () => {
            const testimonials = [
                {
                    name: 'John Smith',
                    role: 'Premium User',
                    avatar: '👨‍💼',
                    rating: 5,
                    text: 'Best IPTV service I have ever used! Crystal clear quality and amazing channel selection.'
                },
                {
                    name: 'Sarah Johnson',
                    role: 'Family Plan',
                    avatar: '👩‍💼',
                    rating: 5,
                    text: 'The customer support is outstanding. Setup was easy and streaming is flawless!'
                },
                {
                    name: 'Mike Williams',
                    role: 'Sports Fan',
                    avatar: '👨‍🎓',
                    rating: 5,
                    text: 'All the sports channels I need in one place. No buffering, perfect for live games!'
                },
                {
                    name: 'Emma Davis',
                    role: 'Movie Lover',
                    avatar: '👩‍🎨',
                    rating: 5,
                    text: 'Huge library of movies and shows. The 4K quality is absolutely stunning!'
                }
            ];

            return (
                <section className="py-12 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                                What Our <span className="gradient-text">Customers Say</span>
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Join thousands of satisfied customers streaming worldwide
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {testimonials.map((testimonial, index) => (
                                <div 
                                    key={index}
                                    className="glass-card p-6 rounded-xl hover-scale"
                                >
                                    <div className="flex items-center mb-4">
                                        <div className="text-5xl mr-4">{testimonial.avatar}</div>
                                        <div>
                                            <h4 className="text-white font-bold">{testimonial.name}</h4>
                                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    
                                    <p className="text-gray-300">{testimonial.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            );
        };