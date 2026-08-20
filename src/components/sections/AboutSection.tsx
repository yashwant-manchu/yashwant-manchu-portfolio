'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="section-padding bg-secondary">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-3xl"
        >
          {/* Section label */}
          <motion.div variants={item} className="mb-10 flex items-center gap-3">
            <span
              className="text-xs font-bold uppercase tracking-widest"
              style={{
                color: 'var(--accent)',
                fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
              }}
            >
              01. About
            </span>
            <div className="bg-divider h-px flex-1" />
          </motion.div>

          <div className="grid items-start gap-10 md:grid-cols-5">
            {/* Prose */}
            <motion.div variants={item} className="space-y-4 md:col-span-3">
              <p className="text-secondary text-base leading-relaxed">
                3+ years building fintech web and mobile applications that real users depend on —
                payment platforms, banking suites, real-time communication systems, and admin
                dashboards, all shipped to production across web, iOS, and Android.
              </p>
              <p className="text-secondary text-base leading-relaxed">
                I&apos;m a software engineer specializing in React.js, React Native, Next.js,
                TypeScript, and Redux — working end-to-end across web and cross-platform mobile. My
                work spans multi-gateway payment integrations, corporate banking suites with
                role-based access control, real-time chat systems built on WebRTC and Socket.io, and
                mobile apps involving hardware integrations like Bluetooth printing and GPS/location
                tracking.
              </p>
              <p className="text-secondary text-base leading-relaxed">
                I&apos;ve also modernized legacy codebases — migrating class components to Hooks,
                upgrading outdated PHP systems, and rebuilding admin dashboards from scratch — while
                architecting state management with Redux Toolkit, Context API, and TanStack Query to
                cut redundant API calls and improve performance.
              </p>
              <p className="text-secondary text-base leading-relaxed">
                What I care about most is writing code that&apos;s clean, fast, and maintainable.
                Whether it&apos;s reducing render times through memoization, cutting API overhead
                with smart caching, or getting a mobile app from dev to Play Store — I like owning
                things end to end.
              </p>

              {/* What I work with */}
              <div className="space-y-2.5 pt-1">
                <p
                  className="text-muted text-xs font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                >
                  What I work with
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'React.js',
                    'React Native',
                    'Next.js',
                    'Expo',
                    'TypeScript',
                    'Redux Toolkit',
                    'TanStack Query',
                    'TanStack Table',
                    'Tailwind CSS',
                    'NativeWind',
                    'Gluestack UI',
                    'Socket.io',
                    'WebRTC',
                    'JWT',
                    'REST APIs',
                    'Swagger',
                    'Jest',
                    'RTL',
                    'Git',
                    'JIRA',
                  ].map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-secondary text-base leading-relaxed">
                Beyond work, I enjoy exploring new frameworks, breaking things to understand how
                they work, and staying current with what&apos;s moving in the frontend and mobile
                ecosystem.
              </p>

              {/* Education */}
              <div className="border-divider space-y-3 border-t pt-3">
                {[
                  {
                    deg: 'B.Tech in Electrical & Electronics Engineering',
                    school: 'Sree Venkateswara College of Engineering',
                    year: '2020–2023',
                  },
                  {
                    deg: 'Diploma in Electrical & Electronics Engineering',
                    school: 'Government Polytechnic Nellore',
                    year: '2017–2020',
                  },
                ].map((e) => (
                  <div key={e.deg} className="flex items-start gap-2.5">
                    <span className="bg-accent mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                    <div>
                      <p className="text-primary text-sm font-semibold">{e.deg}</p>
                      <p className="text-muted mt-0.5 text-xs">
                        {e.school} · {e.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Avatar */}
            <motion.div variants={item} className="md:col-span-2">
              <div className="relative mx-auto max-w-[180px] md:mx-0">
                <div className="bg-accent absolute -inset-2 rounded-2xl opacity-20 blur-xl" />
                <div
                  className="relative flex aspect-square w-full items-center justify-center rounded-2xl text-3xl font-extrabold text-white"
                  style={{
                    background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))',
                  }}
                >
                  YM
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
