"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map((item) => item.href.substring(1));
            const currentSection = sections.find((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                        ? "glass-card backdrop-blur-xl border-b border-white/10"
                        : "bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
                            <h1 className="text-xl font-display font-bold gradient-text-blue">
                                Yashwant Manchu
                            </h1>
                        </motion.div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <motion.button
                                    key={item.name}
                                    onClick={() => scrollToSection(item.href)}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors cursor-hover ${activeSection === item.href.substring(1)
                                            ? "text-blue-500"
                                            : "text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                                        }`}
                                    whileHover={{ y: -1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {item.name}
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            className="absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"
                                            transition={{
                                                type: "spring",
                                                stiffness: 380,
                                                damping: 30,
                                            }}
                                        />
                                    )}
                                </motion.button>
                            ))}
                        </div>

                        {/* Right side controls */}
                        <div className="flex items-center space-x-4">
                            {/* Theme Toggle */}
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-full glass-card cursor-hover"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {theme === "light" ? (
                                        <motion.div
                                            key="moon"
                                            initial={{ rotate: -180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 180, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Moon className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="sun"
                                            initial={{ rotate: -180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 180, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Sun className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            {/* Resume Button */}
                            <motion.a
                                href="/resume.pdf"
                                download
                                className="hidden sm:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-medium cursor-hover"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-4 h-4" />
                                <span>Resume</span>
                            </motion.a>

                            {/* Mobile Menu Button */}
                            <motion.button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-full glass-card cursor-hover"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <AnimatePresence mode="wait">
                                    {isMobileMenuOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 180, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <X className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: -180, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 180, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Menu className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden glass-card border-t border-white/10"
                        >
                            <div className="px-4 py-6 space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.href)}
                                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors cursor-hover ${activeSection === item.href.substring(1)
                                                ? "text-blue-500 bg-blue-50 dark:bg-blue-900/20"
                                                : "text-gray-600 dark:text-gray-300 hover:text-blue-500 hover:bg-gray-50 dark:hover:bg-gray-800"
                                            }`}
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                                <motion.a
                                    href="/resume.pdf"
                                    download
                                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium cursor-hover"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: navItems.length * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Download className="w-4 h-4" />
                                    <span>Download Resume</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile menu backdrop */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
