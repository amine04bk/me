'use client';

import Image from 'next/image';
import beanbackProjectImg from '../../public/beanback-project.png';
import beanbackImg from '../../public/beanback.png';
import crtGabesImg from '../../public/crt-gabes.png';
import ichraakImg from '../../public/ichraak.png';
import tradicareImg from '../../public/tradicare.png';
import sabatsfyksImg from '../../public/sabatsfyks.png';
import maurireserveImg from '../../public/maurireserve.png';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, Monitor, ShoppingBag } from 'lucide-react';

const projects = [
    {
        title: 'BeanBack - Valorize Coffee Grounds',
        description: 'A mobile app interconnected with BeanBacks machines to recycle coffee grounds and earn rewards...',
    image: beanbackProjectImg,
        tech: ['Flutter', 'Dart', 'NestJS', 'IOT', 'AI'],
        category: 'Mobile App',
        color: 'from-blue-400 to-purple-500',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        icon: <Monitor size={24} className="text-blue-500" />
    },
{
    title: 'MauriReserve',
    description: 'Food delivery app for a Mauritanian company with API and Firebase integration.',
    image: maurireserveImg,
    tech: ['Figma', 'Flutter', 'Dart', 'API', 'Firebase'],
    category: 'Mobile App',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    icon: <Smartphone size={24} className="text-orange-500" />
},
{
    title: 'Tunisian Red Crescent - Gabes Committee',
    description: 'Community coordination platform with maps, real-time updates, and secure access.',
    image: crtGabesImg,
    tech: ['Flutter', 'Node.js', 'MongoDB', 'Google Maps API'],
    category: 'Web & Mobile App',
    color: 'from-blue-400 to-purple-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    icon: <Monitor size={24} className="text-blue-500" />
},
{
    title: 'Ichraak',
    description: 'Cross-platform waste declaration and reporting platform with dashboards and geolocation.',
    image: ichraakImg,
    tech: ['Flutter', 'Firebase', 'React'],
    category: 'Mobile App',
    color: 'from-green-400 to-teal-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    icon: <Smartphone size={24} className="text-green-500" />
},
{
    title: 'Tradicare',
    description: 'AI-based medical translator to improve doctor–patient communication.',
    image: tradicareImg,
    tech: ['Flutter', 'Firebase', 'OpenAI API'],
    category: 'Mobile App',
    color: 'from-purple-400 to-pink-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    icon: <Smartphone size={24} className="text-purple-500" />
},
{
    title: 'SabatSfakys',
    description: 'Marketplace for handmade shoes with Spring Boot backend and PayPal integration.',
    image: sabatsfyksImg,
    tech: ['Flutter', 'Dart', 'API', 'Spring Boot', 'PayPal'],
    category: 'E-commerce App',
    color: 'from-orange-400 to-red-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    icon: <ShoppingBag size={24} className="text-orange-500" />
}



];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};



export default function Projects() {
    return (
        <section
            id="projects"
            className="py-20 px-6 bg-gradient-to-br from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl" />

                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-40 right-1/4 w-8 h-8 border-2 border-blue-400/30 rounded-full"
                    animate={{
                        y: [-15, 15, -15],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-40 left-1/4 w-6 h-6 bg-orange-400/30 rounded-sm"
                    animate={{
                        y: [15, -15, 15],
                        rotate: [0, -360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                        Portfolio Showcase
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
                        <span className="text-gray-800 dark:text-white">Featured </span>
                        <span className="text-orange-500 relative">
                            Projects
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </span>
                    </h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                    >
                        Explore my latest work showcasing modern design principles,
                        cutting-edge technology, and exceptional user experiences.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}

                            whileHover={{ scale: 1.02, y: -5 }}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                                {/* Actual Project Image */}
                                <div className="relative w-full h-full">
                                    {project.image ? (
                                        // Actual image
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        // Fallback with icon and floating elements
                                        <div className={`w-full h-full ${project.bgColor} flex items-center justify-center relative`}>
                                            <motion.div
                                                className="w-32 h-32 rounded-2xl bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {project.icon}
                                            </motion.div>

                                            {/* Floating elements */}
                                            <motion.div
                                                className="absolute top-4 right-4 w-4 h-4 bg-white/40 dark:bg-black/20 rounded-full"
                                                animate={{
                                                    y: [-5, 5, -5],
                                                    opacity: [0.5, 1, 0.5]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            <motion.div
                                                className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 dark:bg-black/20 rounded-full"
                                                animate={{
                                                    y: [5, -5, 5],
                                                    opacity: [0.3, 0.8, 0.3]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                        </div>
                                    )}

                                </div>
                                {/* Placeholder for project image */}
                                <div className={`w-full h-full ${project.bgColor} flex items-center justify-center relative`}>
                                    <motion.div
                                        className="w-32 h-32 rounded-2xl bg-white dark:bg-gray-700 shadow-lg flex items-center justify-center"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.icon}
                                    </motion.div>

                                    {/* Floating elements */}
                                    <motion.div
                                        className="absolute top-4 right-4 w-4 h-4 bg-white/40 rounded-full"
                                        animate={{
                                            y: [-5, 5, -5],
                                            opacity: [0.5, 1, 0.5]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <motion.div
                                        className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full"
                                        animate={{
                                            y: [5, -5, 5],
                                            opacity: [0.3, 0.8, 0.3]
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </div>

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Action buttons */}
                                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                    <motion.button
                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ExternalLink size={16} className="text-white" />
                                    </motion.button>
                                    <motion.button
                                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Github size={16} className="text-white" />
                                    </motion.button>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6 space-y-4">
                                {/* Category Badge */}
                                <div className="flex items-center justify-between">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                                        {project.category}
                                    </span>
                                    <motion.div
                                        className="w-8 h-8 rounded-full bg-gradient-to-r from-gray-200/50 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <motion.span
                                            key={tech}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: techIndex * 0.1 }}
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* Decorative gradient line */}
                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${project.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16 space-y-6"
                >
                    <motion.p
                        className="text-gray-600 dark:text-gray-400 max-w-md mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1 }}
                    >
                        Want to see more projects or discuss a collaboration?
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="mailto:aminebenkhoud@gmail.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Let&apos;s Work Together</span>
                            <motion.span
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </motion.a>

                        <motion.a
                            href="https://github.com/amine04bk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium hover:border-orange-500 hover:text-orange-500 transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Github size={20} />
                            <span>View All Projects</span>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}