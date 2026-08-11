'use client';

import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const social = [
    { icon: Github, href: 'https://github.com/yashwant-manchu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/yashwant-manchu', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:yashwanthmanchu059@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="border-divider bg-primary border-t px-6 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Credit */}
          <div className="text-center sm:text-left">
            <p
              className="gradient-text text-sm font-bold"
              style={{ fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
            >
              Yashwant Manchu
            </p>
            <p className="text-muted mt-0.5 text-xs">
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
                  className="cursor-hover text-muted transition-colors"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              );
            })}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollTop}
            className="glass-card cursor-hover text-secondary flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.94 }}
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};
