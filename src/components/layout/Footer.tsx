'use client';

import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            href: 'https://github.com/yashwant-manchu',
            icon: Github,
            color: 'hover:text-gray-900 dark:hover:text-white'
        },
        {
            name: 'LinkedIn',
            href: 'https://linkedin.com/in/yashwantmanchu',
            icon: Linkedin,
            color: 'hover:text-blue-600'
        },
        {
            name: 'Email',
            href: 'mailto:yashwanthmanchu059@gmail.com',
            icon: Mail,
            color: 'hover:text-red-500'
        },
        {
            name: 'Phone',
            href: 'tel:+918367557617',
            icon: Phone,
            color: 'hover:text-green-500'
        }
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div className="md:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-display font-bold gradient-text-blue mb-4">
                                    Yashwant Manchu
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                                    Frontend Developer passionate about creating beautiful, functional, and user-centered digital experiences.
                                </p>
                                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                                    <span>Made with</span>
                                    <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                                    <span>using Next.js & Tailwind CSS</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                    Quick Links
                                </h4>
                                <ul className="space-y-2">
                                    {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                                        <li key={item}>
                                            <motion.button
                                                onClick={() => {
                                                    const element = document.getElementById(item.toLowerCase());
                                                    element?.scrollIntoView({ behavior: 'smooth' });
                                                }}
                                                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover"
                                                whileHover={{ x: 5 }}
                                            >
                                                {item}
                                            </motion.button>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                                    Contact
                                </h4>
                                <div className="space-y-2 text-sm">
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Nellore, A.P, India
                                    </p>
                                    <a
                                        href="mailto:yashwanthmanchu059@gmail.com"
                                        className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover"
                                    >
                                        yashwanthmanchu059@gmail.com
                                    </a>
                                    <a
                                        href="tel:+918367557617"
                                        className="block text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover"
                                    >
                                        +91 8367557617
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Social Links */}
                    <motion.div
                        className="flex justify-center space-x-6 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`p-3 glass-card rounded-xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors cursor-hover`}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <IconComponent className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </motion.div>

                    {/* Bottom Bar */}
                    <motion.div
                        className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
                            © {currentYear} Yashwant Manchu. All rights reserved.
                        </p>

                        <motion.button
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 px-4 py-2 glass-card rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-hover"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>Back to top</span>
                            <ArrowUp className="w-4 h-4" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};