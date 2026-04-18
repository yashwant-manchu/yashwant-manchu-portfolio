'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    const year = new Date().getFullYear();
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const social = [
        { icon: Github,   href: 'https://github.com/yashwant-manchu',     label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/yashwant-manchu', label: 'LinkedIn' },
        { icon: Mail,     href: 'mailto:yashwanthmanchu059@gmail.com',     label: 'Email' },
    ];

    return (
        <footer
            className="py-8 px-6"
            style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}
        >
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

                    {/* Credit */}
                    <div className="text-center sm:text-left">
                        <p
                            className="text-sm font-bold gradient-text"
                            style={{ fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
                        >
                            Yashwant Manchu
                        </p>
                        <p
                            className="text-xs mt-0.5"
                            style={{ color: 'var(--text-muted)' }}
                        >
                            © {year} · Built with Next.js &amp; Tailwind CSS
                        </p>
                    </div>

                    {/* Social */}
                    <div className="flex items-center gap-4">
                        {social.map((s) => {
                            const Icon = s.icon;
                            return (
                                <motion.a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className="transition-colors cursor-hover"
                                    style={{ color: 'var(--text-muted)' }}
                                    whileHover={{ scale: 1.15, y: -2 }}
                                    whileTap={{ scale: 0.92 }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollTop}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold glass-card cursor-hover"
                        style={{ color: 'var(--text-secondary)' }}
                        whileHover={{ scale: 1.06, y: -2 }}
                        whileTap={{ scale: 0.94 }}
                    >
                        Back to top <ArrowUp className="w-3.5 h-3.5" />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
};
