// components/CVSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import Image from 'next/image';

export default function CVSection() {
    return (
        <section
            id="cv"
            className="py-20 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl" />

                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-32 left-1/4 w-6 h-6 border-2 border-green-400/30 rounded-full"
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium mb-6"
                    >
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        My Resume
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-6 relative">
                        <span className="text-gray-800 dark:text-white">Download My </span>
                        <span className="text-green-500 relative">
                            CV
                            <motion.div
                                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
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
                        Feel free to download my CV to learn more about my experience and skills.
                    </motion.p>
                </motion.div>

                {/* Preview and Download */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-col items-center"
                >
                    {/* Preview Container */}
                    <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 mb-10">
                        {/* Preview Image */}
                        <div className="bg-gray-200 dark:bg-gray-700 aspect-[1/1.414] w-full relative">
                            <Image
                                src="/cv-preview.png" // Replace with your actual CV preview image
                                alt="CV Preview"
                                layout="fill"
                                objectFit="fill"

                                className="transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Overlay with button to view full */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <a
                                href="/cv.pdf" // Replace with your actual PDF path
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 transition-all"
                            >
                                <FileText size={20} />
                                View Full CV
                            </a>
                        </div>
                    </div>

                    {/* Download Button */}
                    <motion.a
                        href="/cv.pdf" // Replace with your actual PDF path
                        download="Mohamed_Amine_Benkhoud_CV.pdf"
                        className="group px-8 py-4 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Download size={24} className="group-hover:animate-bounce" />
                        <span>Download CV</span>
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}