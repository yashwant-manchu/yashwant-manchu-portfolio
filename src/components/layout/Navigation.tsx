"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, Menu, X } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled]   = useState(false);
    const [menuOpen, setMenuOpen]   = useState(false);
    const [active,   setActive]     = useState("home");

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const offset = 90;
            const current = navItems
                .map((item) => item.href.substring(1))
                .find((id) => {
                    const el = document.getElementById(id);
                    if (!el) return false;
                    const { top, bottom } = el.getBoundingClientRect();
                    return top <= offset + 20 && bottom >= offset + 20;
                });
            if (current) setActive(current);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (menuOpen) {
                const nav = document.querySelector("nav");
                if (nav && !nav.contains(e.target as Node)) setMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, [menuOpen]);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [menuOpen]);

    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    const downloadResume = () => {
        const a = document.createElement("a");
        a.href = "/Yashwant-Manchu-Resume.pdf";
        a.download = "Yashwant_Manchu_Resume.pdf";
        a.click();
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled ? "glass-card border-b" : "bg-transparent"
                }`}
                style={{ borderColor: scrolled ? "var(--border-color)" : "transparent" }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[70px]">

                        {/* Logo */}
                        <motion.div whileHover={{ scale: 1.04 }} className="cursor-hover flex-shrink-0 flex items-center gap-2">
              <span
                  className="text-xl font-extrabold gradient-text"
                  style={{ fontFamily: "'Syne', sans-serif" }}
              >
                YM
              </span>
                            <span
                                className="text-sm font-semibold hidden sm:inline"
                                style={{ color: "var(--text-secondary)" }}
                            >
                Yashwant Manchu
              </span>
                        </motion.div>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => {
                                const isActive = active === item.href.substring(1);
                                return (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollTo(item.href)}
                                        className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-hover"
                                        style={{ color: isActive ? "var(--accent)" : "var(--text-muted)" }}
                                        whileHover={{ y: -1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navIndicator"
                                                className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
                                                style={{ background: "var(--accent)" }}
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* Controls */}
                        <div className="flex items-center gap-2">
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-full glass-card cursor-hover"
                                style={{ color: "var(--text-secondary)" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle theme"
                            >
                                <AnimatePresence mode="wait">
                                    {theme === "light" ? (
                                        <motion.div key="moon" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                                            <Moon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.25 }}>
                                            <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>

                            <motion.button
                                onClick={downloadResume}
                                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white cursor-hover"
                                style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))" }}
                                whileHover={{ scale: 1.06, boxShadow: "0 0 22px var(--accent-glow)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Download className="w-3.5 h-3.5" />
                                <span className="hidden md:block">Resume</span>
                                <span className="block md:hidden">CV</span>
                            </motion.button>

                            <motion.button
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden p-2 rounded-full glass-card cursor-hover"
                                style={{ color: "var(--text-secondary)" }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Toggle menu"
                            >
                                <AnimatePresence mode="wait">
                                    {menuOpen ? (
                                        <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <X className="w-5 h-5" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="menu" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                                            <Menu className="w-5 h-5" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.28 }}
                            className="lg:hidden glass-card overflow-hidden"
                            style={{ borderTop: "1px solid var(--border-color)" }}
                        >
                            <div className="px-4 py-5 space-y-1 max-h-[calc(100vh-70px)] overflow-y-auto">
                                {navItems.map((item, i) => (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollTo(item.href)}
                                        className="block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-hover"
                                        style={{
                                            color: active === item.href.substring(1) ? "var(--accent)" : "var(--text-secondary)",
                                            background: active === item.href.substring(1) ? "var(--accent-light)" : "transparent",
                                        }}
                                        initial={{ x: -30, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.06 }}
                                        whileHover={{ x: 6 }}
                                    >
                                        {item.name}
                                    </motion.button>
                                ))}
                                <motion.button
                                    onClick={downloadResume}
                                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white mt-3 cursor-hover"
                                    style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-dark))" }}
                                >
                                    <Download className="w-4 h-4" />
                                    Download Resume
                                </motion.button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Backdrop */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/25 backdrop-blur-sm z-40 lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
};
