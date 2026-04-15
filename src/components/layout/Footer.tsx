'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';

export const Footer = () => {
    const year = new Date().getFullYear();

    const social = [
        { icon: Github, href: 'https://github.com/yashwant-manchu', label: 'GitHub', color: '#10b981' },
        { icon: Linkedin, href: 'https://linkedin.com/in/yashwant-manchu', label: 'LinkedIn', color: '#06b6d4' },
        { icon: Mail, href: 'mailto:yashwanthmanchu059@gmail.com', label: 'Email', color: '#f59e0b' },
        { icon: Phone, href: 'tel:+918367557617', label: 'Phone', color: '#a78bfa' },
    ];

    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border-color)' }}>
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-5xl mx-auto">
                    {/* Top row */}
                    <div className="grid sm:grid-cols-3 gap-8 mb-10">
                        {/* Brand */}
                        <div className="sm:col-span-1">
                            <p className="text-2xl font-extrabold gradient-text mb-3">Yashwant Manchu</p>
                            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                                Frontend Software Engineer specialising in React.js, React Native, TypeScript &amp; Next.js.
                            </p>
                            <div className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--text-muted)' }}>
                                <span>Built with</span>
                                <Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                                <span>Next.js &amp; Tailwind CSS</span>
                            </div>
                        </div>

                        {/* Quick links */}
                        <div>
                            <p className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Navigation</p>
                            <ul className="space-y-2">
                                {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((link) => (
                                    <li key={link}>
                                        <motion.button
                                            onClick={() => {
                                                const el = document.getElementById(link.toLowerCase());
                                                el?.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="text-sm transition-colors hover:underline"
                                            style={{ color: 'var(--text-muted)' }}
                                            whileHover={{ x: 4, color: 'var(--accent)' } as never}
                                        >
                                            {link}
                                        </motion.button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div>
                            <p className="text-sm font-bold mb-4 uppercase tracking-widest" style={{ color: 'var(--text-primary)' }}>Contact</p>
                            <div className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                                <p>Pune, Maharashtra, India</p>
                                <a href="mailto:yashwanthmanchu059@gmail.com" className="block hover:underline" style={{ color: 'var(--accent)' }}>
                                    yashwanthmanchu059@gmail.com
                                </a>
                                <a href="tel:+918367557617" className="block hover:underline" style={{ color: 'var(--text-muted)' }}>
                                    +91 8367557617
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex justify-center gap-4 mb-10">
                        {social.map((s) => {
                            const Icon = s.icon;
                            return (
                                <motion.a
                                    key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="p-3 rounded-xl glass-card transition-all"
                                    style={{ color: 'var(--text-muted)' }}
                                    whileHover={{ scale: 1.12, y: -3, color: s.color } as never}
                                    whileTap={{ scale: 0.92 }}
                                    aria-label={s.label}
                                >
                                    <Icon className="w-5 h-5" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {/* Bottom bar */}
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-7"
                         style={{ borderTop: '1px solid var(--border-color)' }}>
                        <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                            © {year} Yashwant Manchu · All rights reserved
                        </p>
                        <motion.button
                            onClick={scrollTop}
                            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold glass-card"
                            style={{ color: 'var(--text-secondary)' }}
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.94 }}
                        >
                            Back to top <ArrowUp className="w-3.5 h-3.5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
