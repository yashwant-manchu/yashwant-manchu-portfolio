'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  const skills = [
    'React.js', 'React Native', 'TypeScript', 'Next.js',
    'Redux Toolkit', 'Context API', 'Expo', 'Jest & RTL',
    'REST APIs', 'JWT / RBAC', 'Tailwind CSS', 'Material-UI',
  ];

  return (
      <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="max-w-3xl mx-auto"
          >
            {/* Section label */}
            <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
              01. About Me
            </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </motion.div>

            {/* Two-col layout */}
            <div className="grid md:grid-cols-5 gap-10 items-start">

              {/* Left: prose */}
              <motion.div variants={item} className="md:col-span-3 space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Hey, I&apos;m Yashwant — a Frontend Software Engineer based in Pune, India with 3+ years
                  of experience turning complex product requirements into clean, fast, and accessible
                  interfaces. I care deeply about writing maintainable code and shipping things that
                  actually work for real users.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Right now I&apos;m at{' '}
                  <a href="#" className="font-semibold hover:underline" style={{ color: 'var(--accent)' }}>
                    EDSOM FINTECH
                  </a>{' '}
                  where I build payment platforms, corporate banking apps, and HR tools used by real
                  people every day. I&apos;ve shipped apps to both the Google Play Store and Apple App Store
                  and I&apos;m comfortable working across the full frontend stack — from pixel-perfect UI to
                  async state management and test coverage.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Outside of work, I enjoy exploring new tools in the frontend ecosystem and looking for
                  ways to make existing systems faster and more resilient.
                </p>

                {/* Education — compact */}
                <div className="pt-4 space-y-3">
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>Education</p>
                  {[
                    { deg: 'B.Tech — Electrical & Electronics Engineering', school: 'Sree Venkateswara College of Engineering', year: '2020–2023' },
                    { deg: 'Diploma — Electrical & Electronics Engineering', school: 'Government Polytechnic Nellore', year: '2017–2020' },
                  ].map((e) => (
                      <div key={e.deg} className="flex items-start gap-3">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        <div>
                          <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{e.deg}</p>
                          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{e.school} · {e.year}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </motion.div>

              {/* Right: avatar + skills */}
              <motion.div variants={item} className="md:col-span-2 space-y-6">
                {/* Avatar */}
                <div className="relative mx-auto w-48 h-48 md:w-full md:h-auto md:aspect-square max-w-[200px]">
                  <div
                      className="absolute -inset-2 rounded-2xl blur-xl opacity-20"
                      style={{ background: 'var(--accent)' }}
                  />
                  <div
                      className="relative w-full h-full rounded-2xl flex items-center justify-center text-4xl font-extrabold text-white aspect-square"
                      style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                  >
                    YM
                  </div>
                </div>

                {/* Skills list */}
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--text-muted)' }}>
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                        <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
