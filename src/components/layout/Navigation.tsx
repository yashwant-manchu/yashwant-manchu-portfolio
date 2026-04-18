"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";

const navItems = [
    { name: "Home",       href: "#home" },
    { name: "About",      href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills",     href: "#skills" },
    { name: "Contact",    href: "#contact" },
];

export const Navigation = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled,  setScrolled]  = useState(false);
    const [menuOpen,  setMenuOpen]  = useState(false);
    const [active,    setActive]    = useState("home");
    const observerRef = useRef<IntersectionObserver | null>(null);

    /* ── Active section via IntersectionObserver ─────────────────────
       Uses a rootMargin that fires when a section crosses the 70px
       nav boundary.  The last section (contact) gets special treatment
       via a "bottom of page" fallback so it always highlights.         */
    useEffect(() => {
        const NAV_H = 70;

        observerRef.current = new IntersectionObserver(
            (entries) => {
                /* Find the entry that is currently most "in view" */
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visible.length > 0) {
                    setActive(visible[0].target.id);
                }
            },
            {
                /* Top edge = nav bottom; bottom edge = 40% from top
                   This means a section is "active" as soon as it's visible
                   right beneath the nav bar.                                */
                rootMargin: `-${NAV_H}px 0px -40% 0px`,
                threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
            }
        );

        const ids = navItems.map((i) => i.href.substring(1));
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observerRef.current!.observe(el);
        });

        /* Fallback: when near bottom of page, activate contact */
        const onScroll = () => {
            setScrolled(window.scrollY > 50);
            const nearBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight - 100;
            if (nearBottom) setActive("contact");
        };
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            observerRef.current?.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    /* ── Body scroll lock when menu open ── */
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [menuOpen]);

    /* ── Click outside mobile menu ── */
    useEffect(() => {
        const h = (e: MouseEvent) => {
            if (!menuOpen) return;
            const nav = document.querySelector("nav");
            if (nav && !nav.contains(e.target as Node)) setMenuOpen(false);
        };
        document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, [menuOpen]);

    const scrollTo = (href: string) => {
        const id = href.substring(1);
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top, behavior: "smooth" });
            /* Immediately set active so there's no lag */
            setActive(id);
        }
        setMenuOpen(false);
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
                <div className="max-w-5xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between h-[70px]">

                        {/* Logo */}
                        <motion.button
                            onClick={() => scrollTo("#home")}
                            whileHover={{ scale: 1.04 }}
                            className="cursor-hover flex-shrink-0 flex items-center gap-2"
                        >
              <span
                  className="text-xl font-extrabold gradient-text"
                  style={{ fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
              >
                YM
              </span>
                            <span className="text-sm font-semibold hidden sm:inline" style={{ color: "var(--text-secondary)" }}>
                Yashwant Manchu
              </span>
                        </motion.button>

                        {/* Desktop nav */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navItems.map((item) => {
                                const isActive = active === item.href.substring(1);
                                return (
                                    <motion.button
                                        key={item.name}
                                        onClick={() => scrollTo(item.href)}
                                        className="relative px-4 py-2 text-sm font-medium rounded-lg transition-colors cursor-hover"
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

                        {/* Theme + hamburger */}
                        <div className="flex items-center gap-2">
                            <motion.button
                                onClick={toggleTheme}
                                className="p-2 rounded-full glass-card cursor-hover"
                                style={{ color: "var(--text-secondary)" }}
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
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
                                onClick={() => setMenuOpen(!menuOpen)}
                                className="lg:hidden p-2 rounded-full glass-card cursor-hover"
                                style={{ color: "var(--text-secondary)" }}
                                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
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
                            transition={{ duration: 0.25 }}
                            className="lg:hidden glass-card overflow-hidden"
                            style={{ borderTop: "1px solid var(--border-color)" }}
                        >
                            <div className="px-4 py-4 space-y-1">
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
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Mobile backdrop */}
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
