'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { ExternalLink, Calendar, ArrowRight } from 'lucide-react';
import beanbackImg from './beanback.png';
import mypic from './mypic.jpg';

export default function Hero() {




    // Latest project data - you can replace this with dynamic data
    const latestProject = {
        title: 'BeanBack - Valorize Coffee Grounds',
        description: 'A mobile app interconnected with BeanBacks machines to recycle coffee grounds and earn rewards...',
        category: 'Mobile App',
        tech: ['Flutter', 'Dart', 'NestJS', 'IOT', 'AI'],
        image: '/beanback.png',
        color: 'from-blue-400 to-purple-500',
        bgColor: 'bg-black-100',
        url: '.',
        completedDate: 'October 2025'
    };



    const dotPattern = Array.from({ length: 50 }, (_, i) => i);

    // Smooth scroll function with animation
    const handleSmoothScroll = () => {




        // Smooth scroll to skills section
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // Handle project redirect
    const handleProjectClick = () => {
        // Open GitForje in a new tab
        window.open(latestProject.url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="min-h-screen relative overflow-hidden pb-24 md:pb-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Dots Pattern */}
                <div className="absolute top-20 left-20 grid grid-cols-10 gap-2 opacity-20">
                    {dotPattern.map((i) => (
                        <motion.div
                            key={i}
                            className="w-1 h-1 bg-blue-500 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.3, 0.7, 0.3]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.1
                            }}
                        />
                    ))}
                </div>

                {/* Geometric Shape */}
                <motion.div
                    className="absolute top-32 right-32 w-20 h-20 border-4 border-orange-400 rounded-full opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />

                {/* Gradient Orb */}
                <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 md:pt-40">
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh]">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium"
                        >
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                            Available for new projects
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="text-5xl md:text-7xl font-bold tracking-tight"
                            >
                                <span className="text-gray-800 dark:text-white">Hello,</span>
                                <br />
                                <span className="text-gray-800 dark:text-white">This is </span>
                                <span className="text-orange-500 relative">
                                    Amine
                                    <motion.div
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-md leading-relaxed"
                            >
                                <span className="font-semibold text-orange-500">Full-Stack Mobile Developer</span> crafting digital experiences that people love to use.
                            </motion.p>
                        </div>

                       
                        {/* Latest Project Showcase */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="relative"
                        >
                            <div className="mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Latest Project</span>
                            </div>

                            <motion.div
                                onClick={handleProjectClick}
                                className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 p-6 hover:shadow-xl transition-all duration-300"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {/* Project Icon/Image */}
                                <div className="flex items-start gap-4 mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${latestProject.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                        <Image
                                            src={beanbackImg}
                                            alt="beanback project logo"
                                            width={48}
                                            height={48}
                                            className="transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-lg font-bold text-gray-800 dark:text-white group-hover:text-blue-500 transition-colors">
                                                {latestProject.title}
                                            </h3>
                                            <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
                                        </div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                            {latestProject.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                                            <Calendar size={12} />
                                            <span>{latestProject.completedDate}</span>
                                            <span>•</span>
                                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${latestProject.color} text-white`}>
                                                {latestProject.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {latestProject.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Hover effect overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${latestProject.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />

                                {/* Click indicator */}
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ExternalLink size={16} className="text-blue-500" />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <motion.a


                                href="mailto:aminebenkhoud@gmail.com?subject=Project Inquiry&body=Hi Mohamed Amine,%0D%0A%0D%0AI&apos;d like to discuss a project with you.%0D%0A%0D%0ABest regards"
                                className="group px-8 py-4 bg-orange-500 text-white rounded-xl font-medium hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Let&apos;s talk
                                <motion.span
                                    className="group-hover:translate-x-1 transition-transform"
                                    initial={{ x: 0 }}
                                    whileHover={{ x: 4 }}
                                >
                                    →
                                </motion.span>
                            </motion.a>

                            <motion.a
                                href="#projects"
                                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                See My Work
                            </motion.a>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                            className="flex gap-8 pt-8"
                        >
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-500">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-500">3+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Years Exp</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-orange-500">10+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Real Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative flex justify-center items-center md:order-2 order-1"
                    >
                        {/* Main Photo Container */}
                        <div className="relative">
                            {/* Animated Background Ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-gradient-to-tr from-orange-400 via-orange-500 to-red-500 p-1"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            >
                                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800" />
                            </motion.div>

                            {/* Photo Container */}
                            <motion.div
                                className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden"
                                animate={{
                                    y: [-8, 8, -8],
                                    scale: [1, 1.02, 1]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                {/* Photo with modern effects */}
                                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
                                    <Image
                                        src={mypic}
                                        alt="Amine - Fullstack mobile Developer"
                                        fill
                                        className="object-cover transition-all duration-700 hover:scale-110 filter grayscale hover:grayscale-0"
                                        style={{ objectPosition: 'center center' }}
                                    />

                                    {/* Subtle overlay for modern look */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-50" />
                                </div>
                            </motion.div>

                            {/* Floating Tech Icons */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    y: [-8, 8, -8],
                                    rotate: [0, 360]
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="text-white font-bold text-xl">📱</span>
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    y: [8, -8, 8],
                                    rotate: [360, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="text-white font-bold text-sm">DART</span>
                            </motion.div>

                            <motion.div
                                className="absolute top-20 -left-8 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    x: [-5, 5, -5],
                                    y: [-3, 3, -3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="text-white font-bold text-xs">💻</span>
                            </motion.div>

                            <motion.div
                                className="absolute bottom-20 -right-8 w-8 h-8 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full shadow-lg flex items-center justify-center"
                                animate={{
                                    x: [5, -5, 5],
                                    y: [3, -3, 3]
                                }}
                                transition={{
                                    duration: 3.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <span className="text-white font-bold text-xs">⚡</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={handleSmoothScroll}
                    className="group flex flex-col items-center gap-3 text-gray-500 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors duration-300 cursor-pointer bg-transparent border-none outline-none"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        className="text-sm font-medium group-hover:text-orange-500 transition-colors"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        Scroll to explore
                    </motion.span>

                    {/* Animated Arrow Container */}
                    <div className="relative">
                        <motion.div
                            className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent group-hover:from-orange-400 transition-colors duration-300"
                            animate={{
                                scaleY: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Animated Dot */}
                        <motion.div
                            className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-400 group-hover:bg-orange-400 rounded-full transition-colors duration-300"
                            animate={{
                                y: [0, 6, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />

                        {/* Flowing Particles */}
                        <motion.div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full opacity-0"
                            animate={{
                                y: [0, 40],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 0.5
                            }}
                        />

                        <motion.div
                            className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-orange-400 rounded-full opacity-0"
                            animate={{
                                y: [0, 40],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeOut",
                                delay: 1
                            }}
                        />
                    </div>

                    {/* Chevron Arrow */}
                    <motion.div
                        className="flex flex-col items-center gap-1"
                        animate={{ y: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-3 h-3 border-r-2 border-b-2 border-current transform rotate-45 group-hover:border-orange-400 transition-colors"
                            animate={{
                                opacity: [0.4, 1, 0.4],
                                scale: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.2
                            }}
                        />
                        <motion.div
                            className="w-2 h-2 border-r-2 border-b-2 border-current transform rotate-45 opacity-60 group-hover:border-orange-400 transition-colors"
                            animate={{
                                opacity: [0.2, 0.8, 0.2],
                                scale: [0.6, 1, 0.6]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: 0.4
                            }}
                        />
                    </motion.div>
                </motion.button>
            </motion.div>
        </section>
    );
}