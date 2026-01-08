import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const menuLinks = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Process", path: "/process" },
        { name: "Contact", path: "/contact-us" }
    ];

    return (
        <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? "nav-blur py-4" : "bg-transparent py-6"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                     <div className="h-14 w-24 px-2 overflow-hidden flex items-center">
                       <Link to="/" className="block h-full w-full">
                         <img
                           src="/imgs/logo.png"
                           alt="Podcast Logo"
                           className="h-full w-full object-cover scale-125"
                         />
                       </Link>
                     </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex space-x-8">
                        {menuLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA */}
                    <Link to="/contact-purchase">
                        <button className="hidden md:inline-block gradient-bg hover:gradiend-text text-white px-6 py-2.5 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
                            Get Started
                        </button>
                    </Link>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={
                                    mobileMenuOpen
                                        ? "M6 18L18 6M6 6l12 12"
                                        : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>

                {/* MOBILE MENU */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 glass-card rounded-lg p-4 fade-in">
                        {menuLinks.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="block text-gray-300 hover:text-white py-2 transition-colors duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <Link to="/contact-purchase">
                            <button className="w-full gradient-bg text-white px-6 py-2.5 rounded-lg font-semibold mt-4 cursor-pointer">
                                Get Started
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
};
