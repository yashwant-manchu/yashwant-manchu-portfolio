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
    if (el)
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 70,
        behavior: 'smooth',
      });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ scrollMarginTop: 0 }}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary absolute inset-0" />
        <div className="grid-bg absolute inset-0 opacity-[0.03]" />
        <motion.div
          className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full blur-3xl lg:h-[30rem] lg:w-[30rem]"
          style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full blur-3xl lg:h-[26rem] lg:w-[26rem]"
          style={{ background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)' }}
          animate={{ x: [0, -30, 0], y: [0, 25, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        />
      </div>

      <div className="container z-10 mx-auto max-w-3xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-5"
        >
          {/* Name */}
          <motion.h1
            className="text-primary text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl"
            style={{
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
          <div className="flex h-8 items-center justify-center overflow-hidden sm:h-10">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                className="text-secondary text-lg font-semibold sm:text-xl"
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
            className="text-muted mx-auto max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ fontFamily: "var(--font-outfit), 'Outfit', sans-serif" }}
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
              className="cursor-hover group flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px var(--accent-glow)' }}
              whileTap={{ scale: 0.97 }}
            >
              Learn about me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 sm:flex"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-muted text-[10px] uppercase tracking-widest">scroll</span>
        <div className="border-divider flex h-8 w-5 justify-center rounded-full border-2 pt-1.5">
          <motion.div
            className="bg-accent h-2 w-1 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
