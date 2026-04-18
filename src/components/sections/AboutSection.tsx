'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  'React.js', 'React Native', 'TypeScript', 'Next.js',
  'Redux Toolkit', 'Context API', 'Expo', 'Tailwind CSS',
  'Jest & RTL', 'REST APIs', 'JWT / RBAC', 'Material-UI',
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

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
            <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--accent)', fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
            >
              01. About
            </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </motion.div>

            <div className="grid md:grid-cols-5 gap-10 items-start">

              {/* Prose */}
              <motion.div variants={item} className="md:col-span-3 space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Hey, I&apos;m Yashwant. I&apos;m a frontend engineer based in Pune, India with 3+ years of
                  experience building fast, accessible, and production-ready interfaces. I care about
                  writing code that&apos;s clean, maintainable, and actually works for the people using it.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Right now I&apos;m at{' '}
                  <a
                      href="https://edsomfintech.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:underline cursor-hover"
                      style={{ color: 'var(--accent)' }}
                  >
                    EDSOM FINTECH
                  </a>{' '}
                  building payment platforms, banking apps, and HR tools used by real people every day.
                  I&apos;ve shipped apps to both the Google Play Store and the Apple App Store, and I&apos;m
                  comfortable across the full frontend stack — UI, state management, auth, and testing.
                </p>
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  Outside of work, I enjoy exploring what&apos;s new in the React ecosystem and finding
                  ways to make things faster and easier to maintain.
                </p>

                {/* Education */}
                <div className="pt-3 space-y-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
                  {[
                    { deg: 'B.Tech in Electrical & Electronics Engineering', school: 'Sree Venkateswara College of Engineering', year: '2020–2023' },
                    { deg: 'Diploma in Electrical & Electronics Engineering', school: 'Government Polytechnic Nellore', year: '2017–2020' },
                  ].map((e) => (
                      <div key={e.deg} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                        <div>
                          <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{e.deg}</p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{e.school} · {e.year}</p>
                        </div>
                      </div>
                  ))}
                </div>
              </motion.div>

              {/* Avatar + skills */}
              <motion.div variants={item} className="md:col-span-2 space-y-6">
                {/* Avatar */}
                <div className="relative max-w-[180px] mx-auto md:mx-0">
                  <div
                      className="absolute -inset-2 rounded-2xl blur-xl opacity-20"
                      style={{ background: 'var(--accent)' }}
                  />
                  <div
                      className="relative w-full aspect-square rounded-2xl flex items-center justify-center text-3xl font-extrabold text-white"
                      style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                  >
                    YM
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <p
                      className="text-xs font-semibold uppercase tracking-widest mb-3"
                      style={{
                        color: 'var(--text-muted)',
                        fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                      }}
                  >
                    Tech I work with
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                        <motion.span
                            key={s}
                            className="skill-tag"
                            whileHover={{ scale: 1.06 }}
                        >
                          {s}
                        </motion.span>
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
