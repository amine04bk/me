'use client';

import { motion } from 'framer-motion';
import { Smartphone, Database, Globe, Zap, BrainCircuit, Cloud, Cpu, Layout } from 'lucide-react';

const skills = [
    {
        name: 'Flutter',
        icon: <Smartphone size={28} className="text-blue-500" />,
        description: 'Cross-platform mobile & desktop app development',
        tag: 'Mobile',
        color: 'from-blue-400 to-blue-600',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    },
    {
        name: 'React.js',
        icon: <Globe size={28} className="text-cyan-500" />,
        description: 'Modern frontend development with components',
        tag: 'Frontend',
        color: 'from-cyan-400 to-cyan-600',
        bgColor: 'bg-cyan-50 dark:bg-cyan-900/20',
    },
    {
        name: 'Node.js',
        icon: <Database size={28} className="text-green-500" />,
        description: 'Backend APIs, servers & real-time apps',
        tag: 'Backend',
        color: 'from-green-400 to-green-600',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
    },
    {
        name: 'IoT & Robotics',
        icon: <Cpu size={28} className="text-indigo-500" />,
        description: 'Embedded systems, microcontrollers & robotics',
        tag: 'Hardware',
        color: 'from-indigo-400 to-indigo-600',
        bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    },
    {
        name: 'Performance',
        icon: <Zap size={28} className="text-yellow-500" />,
        description: 'App optimization, scalability & speed',
        tag: 'Optimization',
        color: 'from-yellow-400 to-yellow-600',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
    },
    {
        name: 'UI/UX Design',
        icon: <Layout size={28} className="text-purple-500" />,
        description: 'User interface and experience design for web & mobile apps',
        tag: 'Design',
        color: 'from-purple-400 to-purple-600',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    },
    {
        name: 'AI Integration',
        icon: <BrainCircuit size={28} className="text-pink-500" />,
        description: 'Connecting AI models to apps & workflows',
        tag: 'AI',
        color: 'from-pink-400 to-pink-600',
        bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    },
    {
        name: 'AWS (S3, ECR, AppRunner...)',
        icon: <Cloud size={28} className="text-gray-700 dark:text-white" />,
        description: 'Cloud hosting, storage, containers & deployments',
        tag: 'Cloud',
        color: 'from-gray-400 to-gray-700',
        bgColor: 'bg-gray-50 dark:bg-gray-800/20',
    },
];


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};


export default function Skills() {
    return (
        <section
            id="skills"
            className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-orange-400/20 to-pink-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />

                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-32 left-1/4 w-6 h-6 border-2 border-orange-400/30 rounded-full"
                    animate={{
                        y: [-10, 10, -10],
                        rotate: [0, 360],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-32 right-1/4 w-4 h-4 bg-purple-400/30 rounded-sm"
                    animate={{
                        y: [10, -10, 10],
                        rotate: [0, -360],
                    }}
                    transition={{
                        duration: 6,
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                        My Expertise
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
                        <span className="text-gray-800 dark:text-white">Skills & </span>
                        <span className="text-orange-500 relative">
                            Technologies
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
                        I specialize in modern technologies and design methodologies to create
                        exceptional digital experiences that drive results.
                    </motion.p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}

                            whileHover={{
                                scale: 1.05,
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                            className={`group relative overflow-hidden rounded-2xl ${skill.bgColor} border border-gray-200/50 dark:border-gray-700/50 p-6 backdrop-blur-sm hover:shadow-xl transition-all duration-300`}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <motion.div
                                    className="w-14 h-14 mb-4 rounded-xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                                    whileHover={{ rotate: 5 }}
                                >
                                    {skill.icon}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors">
                                    {skill.name}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                    {skill.description}
                                </p>

                                {/* Category Tag */}
                                <div className="flex justify-between items-center">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white`}>
                                        {skill.tag}
                                    </span>
                                    <motion.div
                                        className="w-8 h-8 rounded-full bg-gradient-to-r from-white/20 to-transparent flex items-center justify-center"
                                        whileHover={{ scale: 1.1, rotate: 90 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="w-2 h-2 bg-current rounded-full opacity-50"></div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* Decorative element */}
                            <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <motion.a
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>See My Work</span>
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}