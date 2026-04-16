'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, MapPin, Zap, Code2 } from 'lucide-react';

const stats = [
  { value: '3+',   label: 'Years Experience' },
  { value: '10+',  label: 'Apps Shipped' },
  { value: '85%+', label: 'Test Coverage' },
  { value: '2',    label: 'App Stores' },
];

const expertise = [
  'React.js & React Native (CLI + Expo)',
  'TypeScript & Next.js',
  'Redux Toolkit & Context API',
  'JWT Authentication & RBAC',
  'REST APIs & Swagger / Axios',
  'Jest & React Testing Library',
];

const impacts = [
  '35% render speed improvement via memoization & code-splitting',
  '47% reduction in page load times through lazy loading',
  '85%+ test coverage with Jest & React Testing Library',
  'Apps deployed live on Google Play Store & Apple App Store',
  '35% cut in redundant API calls via Redux state normalization',
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
      <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container mx-auto px-4">
          <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="max-w-6xl mx-auto"
          >
            {/* ── Section header ── */}
            <motion.div variants={item} className="text-center mb-14">
            <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
                style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)' }}
            >
              About Me
            </span>
              <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-blue mb-4">
                Who I Am
              </h2>
              <div
                  className="w-16 h-1 rounded-full mx-auto"
                  style={{ background: 'var(--accent)' }}
              />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-14 items-start">

              {/* ── Left: avatar + stats + location ── */}
              <motion.div variants={item} className="space-y-6">

                {/* Avatar card */}
                <div className="relative">
                  <div
                      className="absolute -inset-3 rounded-3xl blur-xl opacity-15"
                      style={{ background: 'var(--accent)' }}
                  />
                  <div className="relative glass-card rounded-3xl p-8 flex items-center justify-center min-h-[240px]">
                    <div
                        className="w-32 h-32 rounded-full flex items-center justify-center text-3xl font-extrabold text-white"
                        style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                    >
                      YM
                    </div>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                      <motion.div
                          key={s.label}
                          className="glass-card rounded-2xl p-5 text-center hover-lift"
                          whileHover={{ scale: 1.03 }}
                      >
                        <div
                            className="text-3xl font-extrabold mb-1"
                            style={{ color: 'var(--accent)' }}
                        >
                          {s.value}
                        </div>
                        <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                          {s.label}
                        </div>
                      </motion.div>
                  ))}
                </div>

                {/* Location */}
                <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                  <div
                      className="p-3 rounded-xl flex-shrink-0"
                      style={{ background: 'var(--accent-light)' }}
                  >
                    <MapPin className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                      Currently based in
                    </p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* ── Right: bio + cards ── */}
              <motion.div variants={item} className="space-y-7">

                <div>
                  <h3
                      className="text-2xl sm:text-3xl font-bold mb-4"
                      style={{ color: 'var(--text-primary)' }}
                  >
                    Frontend Software Engineer
                  </h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                    I&apos;m a Frontend Software Engineer with 3+ years of hands-on experience building
                    scalable web and cross-platform mobile applications. My passion for technology started
                    during my Electrical Engineering studies — and quickly evolved into a full-time career
                    crafting high-performance digital products.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    Currently at{' '}
                    <span className="font-semibold" style={{ color: 'var(--accent)' }}>
                    EDSOM FINTECH PVT. LTD.
                  </span>{' '}
                    in Pune, I architect and ship production fintech platforms — multi-gateway payment
                    flows, enterprise banking suites, HRMS dashboards, and KYC workflows — that serve
                    real users across both web and mobile.
                  </p>
                </div>

                {/* Core Technical Expertise */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                        className="p-2.5 rounded-xl flex-shrink-0"
                        style={{ background: 'var(--accent-light)' }}
                    >
                      <Code2 className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                    </div>
                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                      Core Technical Expertise
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {expertise.map((e) => (
                        <div
                            key={e}
                            className="flex items-center gap-2 text-sm"
                            style={{ color: 'var(--text-secondary)' }}
                        >
                      <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                      />
                          {e}
                        </div>
                    ))}
                  </div>
                </div>

                {/* Impact I Deliver */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                        className="p-2.5 rounded-xl flex-shrink-0"
                        style={{ background: 'var(--accent-light)' }}
                    >
                      <Zap className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                    </div>
                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                      Impact I Deliver
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {impacts.map((pt) => (
                        <li key={pt} className="flex items-start gap-2">
                      <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--accent)' }}
                      />
                          {pt}
                        </li>
                    ))}
                  </ul>
                </div>

                {/* Education */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                        className="p-2.5 rounded-xl flex-shrink-0"
                        style={{ background: 'var(--accent-light)' }}
                    >
                      <BookOpen className="w-5 h-5" style={{ color: 'var(--accent-dark)' }} />
                    </div>
                    <h4 className="font-bold" style={{ color: 'var(--text-primary)' }}>
                      Education
                    </h4>
                  </div>
                  <div className="space-y-4">
                    {[
                      {
                        degree: 'B.Tech — Electrical & Electronics Engineering',
                        school: 'Sree Venkateswara College of Engineering',
                        period: '2020–2023',
                        gpa:    'GPA 7.6',
                      },
                      {
                        degree: 'Diploma — Electrical & Electronics Engineering',
                        school: 'Government Polytechnic Nellore',
                        period: '2017–2020',
                        gpa:    'GPA 8.8',
                      },
                    ].map((edu) => (
                        <div
                            key={edu.degree}
                            className="border-l-2 pl-4"
                            style={{ borderColor: 'var(--accent)' }}
                        >
                          <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                            {edu.degree}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            {edu.school}
                          </p>
                          <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                            {edu.period} · {edu.gpa}
                          </p>
                        </div>
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
