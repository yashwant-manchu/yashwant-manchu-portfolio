'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'Frontend Engineer',
  'React Native Developer',
  'TypeScript Developer',
  'UI Engineer',
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  const scroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 70, behavior: 'smooth' });
  };

  return (
      <section
          id="home"
          className="relative overflow-hidden min-h-screen flex items-center justify-center"
          style={{ scrollMarginTop: 0 }}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: 'var(--bg-primary)' }} />
          <div className="absolute inset-0 opacity-[0.03] grid-bg" />
          <motion.div
              className="absolute top-1/4 left-1/4 w-72 h-72 lg:w-[30rem] lg:h-[30rem] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
              animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
              transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
              className="absolute bottom-1/3 right-1/4 w-64 h-64 lg:w-[26rem] lg:h-[26rem] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
              animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
              transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center z-10 max-w-3xl">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-5"
          >
            {/* Name */}
            <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
                style={{
                  color: 'var(--text-primary)',
                  lineHeight: 1.08,
                  fontFamily: "var(--font-syne), 'Syne', sans-serif",
                }}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
              Yashwant <span className="gradient-text">Manchu</span>
            </motion.h1>

            {/* Animated role */}
            <div className="h-8 sm:h-10 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                    key={roleIndex}
                    className="text-lg sm:text-xl font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* One-liner tagline */}
            <motion.p
                className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
                style={{ color: 'var(--text-muted)', fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
              I build fast, accessible, and production-ready interfaces for the web and mobile.
            </motion.p>

            {/* CTA */}
            <motion.div
                className="flex justify-center pt-3"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
              <motion.button
                  onClick={() => scroll('about')}
                  className="group flex items-center gap-2.5 px-6 py-3 rounded-full font-semibold text-sm text-white cursor-hover"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 28px var(--accent-glow)' }}
                  whileTap={{ scale: 0.97 }}
              >
                Learn about me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>scroll</span>
          <div className="w-5 h-8 rounded-full border-2 flex justify-center pt-1.5" style={{ borderColor: 'var(--border-color)' }}>
            <motion.div
                className="w-1 h-2 rounded-full"
                style={{ background: 'var(--accent)' }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>
  );
};
