'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, CreditCard, Users, BarChart3, Globe, Smartphone } from 'lucide-react';

const projects = [
  {
    id: 1, title: 'iPaisa – Fintech Payment Platform', category: 'Fintech',
    description: 'Full-stack fintech web & mobile app supporting wallet payments, bill payments, recharges, and 5+ payment gateways (Razorpay, UPI, Net Banking). Mobile app live on Google Play Store.',
    technologies: ['React.js', 'Expo', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'JWT', 'Swagger'],
    highlights: [
      '5+ payment gateway integrations including Razorpay & UPI',
      'Granular RBAC with JWT-protected routes across all modules',
      '30% reduction in unnecessary re-renders via memoized selectors',
      'Dark/light mode & WCAG-accessible UI (Gluestack + NativeWind)',
      'Live on Google Play Store',
    ],
    icon: CreditCard, github: '#', demo: '#', badge: 'Live on Play Store',
  },
  {
    id: 2, title: 'FINAMSCCS / VLNIDHI – Corporate Banking', category: 'Banking',
    description: 'End-to-end corporate banking suite (web + mobile) covering KYC onboarding, investment plan management, and a 4-tier role hierarchy secured with JWT & RBAC.',
    technologies: ['React.js', 'React Native CLI', 'Redux', 'React Native Paper', 'JWT'],
    highlights: [
      'End-to-end KYC onboarding workflows',
      'Investment plan creation, subscription & maturity tracking',
      '4-tier RBAC: Member → Collection Agent → Current → Admin',
      'Zero unauthorized role access via JWT + navigation guards',
      'Cross-platform iOS & Android',
    ],
    icon: Users, github: '#', demo: '#', badge: 'Web + Mobile',
  },
  {
    id: 3, title: 'HRMS – Enterprise HR Dashboard', category: 'Enterprise',
    description: 'Enterprise HR dashboard with employee lifecycle management, leave & attendance tracking, payroll processing, and multi-level approval workflows.',
    technologies: ['React.js', 'Redux', 'Material-UI', 'REST APIs', 'Jest', 'RTL'],
    highlights: [
      'Employee lifecycle, payroll & multi-level approval flows',
      '35% render speed improvement via useMemo & code splitting',
      '28% reduction in initial JS bundle size',
      'Role-specific views for HR Admin, Manager & Employee',
      '85%+ test coverage with RTL',
    ],
    icon: BarChart3, github: '#', demo: '#', badge: 'Enterprise',
  },
  {
    id: 4, title: 'MATCH – Merchant Compliance Tool', category: 'Compliance',
    description: 'Migrated legacy compliance app from deprecated DXP to Connect Toolkit, eliminating 40% technical debt. Handles 500+ daily merchant verifications.',
    technologies: ['React.js', 'Redux Toolkit', 'Jest', 'RTL', 'Axios'],
    highlights: [
      'Legacy DXP → Connect Toolkit migration',
      '150+ unit & integration tests (85% coverage)',
      '500+ daily merchant verification requests handled',
      '40% technical debt eliminated',
      'Centralized async state with Redux Thunk',
    ],
    icon: Globe, github: '#', demo: '#', badge: 'Compliance',
  },
  {
    id: 5, title: 'Smart Parking System', category: 'Mobile',
    description: 'Role-based parking management app with JWT auth, real-time vehicle tracking, Bluetooth thermal printer integration, and revenue analytics dashboard.',
    technologies: ['React Native', 'Context API', 'Bluetooth API', 'JWT', 'i18n'],
    highlights: [
      'Bluetooth thermal printer — 70% faster ticket generation',
      'Real-time vehicle tracking & space utilization analytics',
      'Multilingual support (3 languages) & dynamic themes',
      '35% user satisfaction improvement',
      'JWT auth with role-based navigation',
    ],
    icon: Smartphone, github: '#', demo: '#', badge: 'Mobile App',
  },
];

const filters = ['All', 'Fintech', 'Banking', 'Enterprise', 'Compliance', 'Mobile'];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
      <section id="projects" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4">
          <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={item} className="text-center mb-10">
            <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
                style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)' }}
            >
              Portfolio
            </span>
              <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-blue mb-4">
                Featured Projects
              </h2>
              <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
                Production-grade apps spanning fintech, enterprise banking, compliance &amp; HR
              </p>
              <div className="w-16 h-1 rounded-full mx-auto mt-5" style={{ background: 'var(--accent)' }} />
            </motion.div>

            {/* Filter tabs — all green */}
            <motion.div variants={item} className="flex flex-wrap justify-center gap-2 mb-10">
              {filters.map((f) => (
                  <motion.button
                      key={f}
                      onClick={() => setFilter(f)}
                      className="px-4 py-1.5 rounded-full text-sm font-semibold transition-all"
                      style={{
                        background: filter === f ? 'var(--accent)' : 'var(--bg-secondary)',
                        color: filter === f ? '#fff' : 'var(--text-muted)',
                        border: '1px solid',
                        borderColor: filter === f ? 'var(--accent)' : 'var(--border-color)',
                      }}
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                  >
                    {f}
                  </motion.button>
              ))}
            </motion.div>

            {/* Projects grid */}
            <motion.div layout className="grid lg:grid-cols-2 gap-7">
              {filtered.map((project) => {
                const Icon = project.icon;
                return (
                    <motion.div
                        key={project.id}
                        layout
                        variants={item}
                        className="glass-card rounded-2xl overflow-hidden hover-lift group"
                        whileHover={{ scale: 1.015 }}
                        transition={{ duration: 0.3 }}
                    >
                      {/* Banner — all green */}
                      <div
                          className="relative h-36 flex items-center justify-center overflow-hidden"
                          style={{ background: 'var(--accent-light)' }}
                      >
                        <motion.div
                            className="w-20 h-20 rounded-2xl flex items-center justify-center"
                            style={{
                              background: 'var(--glass-bg)',
                              border: '1px solid var(--accent-glow)',
                            }}
                            whileHover={{ scale: 1.1, rotate: 4 }}
                        >
                          <Icon className="w-9 h-9" style={{ color: 'var(--accent-dark)' }} />
                        </motion.div>
                        <span
                            className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: 'var(--glass-bg)',
                              color: 'var(--accent-dark)',
                              border: '1px solid var(--accent-glow)',
                            }}
                        >
                      {project.badge}
                    </span>
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div className="p-6">
                        {/* Title row */}
                        <div className="flex items-start justify-between mb-3 gap-3">
                          <h3
                              className="font-bold text-base sm:text-lg leading-tight"
                              style={{ color: 'var(--text-primary)' }}
                          >
                            {project.title}
                          </h3>
                          <div className="flex gap-2 flex-shrink-0">
                            <motion.a
                                href={project.github}
                                className="p-2 rounded-lg transition-colors"
                                style={{
                                  background: 'var(--bg-secondary)',
                                  border: '1px solid var(--border-color)',
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                              <Github className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
                            </motion.a>
                            <motion.a
                                href={project.demo}
                                className="p-2 rounded-lg transition-colors"
                                style={{
                                  background: 'var(--accent-light)',
                                  border: '1px solid var(--accent-glow)',
                                }}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                              <ExternalLink className="w-4 h-4" style={{ color: 'var(--accent-dark)' }} />
                            </motion.a>
                          </div>
                        </div>

                        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-1.5 mb-5">
                          {project.highlights.slice(0, 3).map((h, i) => (
                              <li
                                  key={i}
                                  className="flex items-start gap-2 text-xs"
                                  style={{ color: 'var(--text-secondary)' }}
                              >
                          <span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                              style={{ background: 'var(--accent)' }}
                          />
                                {h}
                              </li>
                          ))}
                        </ul>

                        {/* Tech chips */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.map((t) => (
                              <span
                                  key={t}
                                  className="px-2 py-0.5 rounded-full text-xs font-medium mono"
                                  style={{
                                    background: 'var(--bg-tertiary)',
                                    color: 'var(--text-muted)',
                                  }}
                              >
                          {t}
                        </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                );
              })}
            </motion.div>

            {/* GitHub CTA */}
            <motion.div variants={item} className="text-center mt-14">
              <div className="glass-card rounded-2xl p-8 inline-block">
                <h3 className="text-xl font-bold gradient-text-blue mb-2">See all projects on GitHub</h3>
                <p className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                  Open-source contributions and side projects
                </p>
                <motion.a
                    href="https://github.com/yashwant-manchu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-7 py-3 rounded-full text-sm font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                    whileHover={{ scale: 1.05, boxShadow: '0 0 24px var(--accent-glow)' }}
                    whileTap={{ scale: 0.97 }}
                >
                  <Github className="w-4 h-4" />
                  View GitHub Profile
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
