'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = ['Frontend Engineer', 'React Native Developer', 'UI Engineer', 'TypeScript Developer'];

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

  const techStack = ['React.js', 'React Native', 'TypeScript', 'Next.js', 'Redux Toolkit', 'Expo'];

  return (
      <section
          id="home"
          className="relative overflow-hidden min-h-screen flex items-center justify-center"
          /* Hero doesn't need the nav offset since it's full-screen */
          style={{ scrollMarginTop: 0 }}
      >
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0" style={{ background: 'var(--bg-primary)' }} />
          <div className="absolute inset-0 opacity-[0.035] dark:opacity-[0.055] grid-bg" />
          <motion.div
              className="absolute top-1/4 left-[15%] w-64 h-64 lg:w-[28rem] lg:h-[28rem] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
              animate={{ x: [0, 35, 0], y: [0, -35, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
              className="absolute bottom-1/3 right-[10%] w-72 h-72 lg:w-[32rem] lg:h-[32rem] rounded-full blur-3xl"
              style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
              animate={{ x: [0, -40, 0], y: [0, 28, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 text-center z-10 max-w-4xl">
          <motion.div
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-6"
          >
            {/* Status */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }} className="flex justify-center">
            <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)', border: '1px solid var(--accent-glow)' }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
              Open to new opportunities
            </span>
            </motion.div>

            {/* Name */}
            <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight"
                style={{ color: 'var(--text-primary)', lineHeight: '1.08', fontFamily: "'Syne', sans-serif" }}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
            >
              Yashwant <span className="gradient-text">Manchu</span>
            </motion.h1>

            {/* Animated role */}
            <div className="h-9 sm:h-11 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                    key={roleIndex}
                    className="text-lg sm:text-2xl font-semibold"
                    style={{ color: 'var(--text-secondary)' }}
                    initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.38 }}
                >
                  {roles[roleIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Tagline */}
            <motion.p
                className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'var(--text-muted)' }}
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.38 }}
            >
              I build scalable, accessible interfaces for the web and mobile — fintech platforms,
              enterprise dashboards, and cross-platform apps, shipped to production across both app stores.
            </motion.p>

            {/* Tech pills */}
            <motion.div className="flex flex-wrap justify-center gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              {techStack.map((t) => (
                  <span key={t} className="skill-tag">{t}</span>
              ))}
            </motion.div>

            {/* Single CTA */}
            <motion.div
                className="flex justify-center pt-2"
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.62 }}
            >
              <motion.button
                  onClick={() => scroll('about')}
                  className="group flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base text-white cursor-hover"
                  style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px var(--accent-glow)' }}
                  whileTap={{ scale: 0.97 }}
              >
                Learn more about me
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </motion.div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-1.5"
                animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[11px] tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>scroll</span>
              <div className="w-5 h-8 rounded-full border-2 flex justify-center pt-1.5" style={{ borderColor: 'var(--border-color)' }}>
                <motion.div
                    className="w-1 h-2 rounded-full"
                    style={{ background: 'var(--accent)' }}
                    animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
