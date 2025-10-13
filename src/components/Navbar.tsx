'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

type NavItem = {
    name: string;
    href: string;
    sectionId: string;
};

const navItems: NavItem[] = [
    { name: 'Discover', href: "#hero", sectionId: 'hero' },
    { name: 'Skills', href: '#skills', sectionId: 'skills' },
    { name: 'Projects', href: '#projects', sectionId: 'projects' },
    { name: 'CV', href: '#cv', sectionId: 'cv' },
];

export default function Navbar() {
    const [isHidden, setIsHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('discover');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const lastScrollY = useRef(0);
    

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            setScrolled(currentY > 10);
            setIsHidden(currentY > lastScrollY.current && currentY > 100);
            lastScrollY.current = currentY;

            // Update active section based on scroll position
            const sections = navItems.map(item => item.sectionId);
            let currentSection = 'discover'; // Default to discover

            // Check each section
            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If section is in viewport (top is above middle of screen)
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        currentSection = sectionId;
                        break;
                    }
                }
            }

            // Special case for hero section - if we're at the top of the page
            if (currentY < 100) {
                currentSection = 'hero';
            }

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        // Call once to set initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        if (sectionId === 'hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                // Calculate position accounting for navbar height
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }
    };

    const handleNavClick = (href: string, sectionId: string) => {
        if (isMobileMenuOpen) {
            // Close menu first before scrolling
            setIsMobileMenuOpen(false);

            // Wait for menu to close before scrolling
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 300); // Match this duration to your menu animation
        } else {
            scrollToSection(sectionId);
        }
    };

    const handleContactClick = () => {
        setIsMobileMenuOpen(false);
        // Create mailto link
        const subject = encodeURIComponent('Let\'s Work Together');
        const body = encodeURIComponent('Hi Mohamed Amine,\n\nI would like to discuss a project with you.\n\nBest regards,');
        const mailtoLink = `mailto:aminebenkhoud@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{
                y: isHidden ? -100 : 0,
                transition: { duration: 0.3, ease: 'easeInOut' }
            }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white dark:bg-gray-900 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href="/"
                            className="group flex items-center space-x-2"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick('#hero', 'hero');
                            }}
                        >
                            <div className="relative">
                                <div className="w-8 h-8 bg-gradient-to-tr from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">A</span>
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                            </div>
                            <span className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
                                Mohamed Amine Benkhoud
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hidden md:flex items-center"
                    >
                        <div className="flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 rounded-xl p-1 backdrop-blur-sm">
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.href, item.sectionId);
                                    }}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${activeSection === item.sectionId
                                        ? 'text-orange-600 dark:text-orange-400 bg-white dark:bg-gray-700 shadow-sm'
                                        : 'text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 hover:bg-white/50 dark:hover:bg-gray-700/50'
                                        }`}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.4 }}
                            className="ml-6"
                        >
                            <button
                                onClick={handleContactClick}
                                className="group px-6 py-2.5 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-2"
                            >
                                Let&apos;s Talk
                                <motion.span
                                    className="group-hover:translate-x-1 transition-transform"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                >
                                    →
                                </motion.span>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        <div className="w-6 h-6 relative">
                            <span className={`absolute top-1 left-0 w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}></span>
                            <span className={`absolute top-3 left-0 w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                }`}></span>
                            <span className={`absolute top-5 left-0 w-6 h-0.5 bg-gray-600 dark:bg-gray-300 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}></span>
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="md:hidden mt-4 overflow-hidden"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
                                <div className="space-y-2">
                                    {navItems.map((item, index) => (
                                        <motion.a
                                            key={item.name}
                                            href={item.href}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.href, item.sectionId);
                                            }}
                                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${activeSection === item.sectionId
                                                ? 'bg-orange-500 text-white'
                                                : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3, delay: index * 0.1 }}
                                        >
                                            {item.name}
                                        </motion.a>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.3 }}
                                    className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                                >
                                    <button
                                        onClick={handleContactClick}
                                        className="block w-full px-4 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition-all duration-300 text-center"
                                    >
                                        Let&apos;s Talk →
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </motion.header>
    );
}