'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  ExternalLink,
  Github,
  CreditCard,
  Users,
  BarChart3,
  Globe,
  Smartphone,
} from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'iPaisa – Fintech Payment Platform',
    category: 'Fintech',
    description:
      'Full-stack fintech web & mobile app supporting wallet payments, bill payments, recharges, and 5+ payment gateways (Razorpay, UPI, Net Banking). Mobile app live on Google Play Store.',
    technologies: [
      'React.js',
      'Expo',
      'TypeScript',
      'Redux Toolkit',
      'Tailwind CSS',
      'JWT',
      'Swagger',
    ],
    highlights: [
      '5+ payment gateway integrations including Razorpay & UPI',
      'Granular RBAC with JWT-protected routes across all modules',
      '30% reduction in unnecessary re-renders via memoized selectors',
      'Dark/light mode & WCAG-accessible UI (Gluestack + NativeWind)',
      'Live on Google Play Store',
    ],
    icon: CreditCard,
    github: '#',
    demo: '#',
    badge: 'Live on Play Store',
  },
  {
    id: 2,
    title: 'FINAMSCCS / VLNIDHI – Corporate Banking',
    category: 'Banking',
    description:
      'End-to-end corporate banking suite (web + mobile) covering KYC onboarding, investment plan management, and a 4-tier role hierarchy secured with JWT & RBAC.',
    technologies: ['React.js', 'React Native CLI', 'Redux', 'React Native Paper', 'JWT'],
    highlights: [
      'End-to-end KYC onboarding workflows',
      'Investment plan creation, subscription & maturity tracking',
      '4-tier RBAC: Member → Collection Agent → Current → Admin',
      'Zero unauthorized role access via JWT + navigation guards',
      'Cross-platform iOS & Android',
    ],
    icon: Users,
    github: '#',
    demo: '#',
    badge: 'Web + Mobile',
  },
  {
    id: 3,
    title: 'HRMS – Enterprise HR Dashboard',
    category: 'Enterprise',
    description:
      'Enterprise HR dashboard with employee lifecycle management, leave & attendance tracking, payroll processing, and multi-level approval workflows.',
    technologies: ['React.js', 'Redux', 'Material-UI', 'REST APIs', 'Jest', 'RTL'],
    highlights: [
      'Employee lifecycle, payroll & multi-level approval flows',
      '35% render speed improvement via useMemo & code splitting',
      '28% reduction in initial JS bundle size',
      'Role-specific views for HR Admin, Manager & Employee',
      '85%+ test coverage with RTL',
    ],
    icon: BarChart3,
    github: '#',
    demo: '#',
    badge: 'Enterprise',
  },
  {
    id: 4,
    title: 'MATCH – Merchant Compliance Tool',
    category: 'Compliance',
    description:
      'Migrated legacy compliance app from deprecated DXP to Connect Toolkit, eliminating 40% technical debt. Handles 500+ daily merchant verifications.',
    technologies: ['React.js', 'Redux Toolkit', 'Jest', 'RTL', 'Axios'],
    highlights: [
      'Legacy DXP → Connect Toolkit migration',
      '150+ unit & integration tests (85% coverage)',
      '500+ daily merchant verification requests handled',
      '40% technical debt eliminated',
      'Centralized async state with Redux Thunk',
    ],
    icon: Globe,
    github: '#',
    demo: '#',
    badge: 'Compliance',
  },
  {
    id: 5,
    title: 'Smart Parking System',
    category: 'Mobile',
    description:
      'Role-based parking management app with JWT auth, real-time vehicle tracking, Bluetooth thermal printer integration, and revenue analytics dashboard.',
    technologies: ['React Native', 'Context API', 'Bluetooth API', 'JWT', 'i18n'],
    highlights: [
      'Bluetooth thermal printer — 70% faster ticket generation',
      'Real-time vehicle tracking & space utilization analytics',
      'Multilingual support (3 languages) & dynamic themes',
      '35% user satisfaction improvement',
      'JWT auth with role-based navigation',
    ],
    icon: Smartphone,
    github: '#',
    demo: '#',
    badge: 'Mobile App',
  },
];

const filters = ['All', 'Fintech', 'Banking', 'Enterprise', 'Compliance', 'Mobile'];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 26 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
    <section id="projects" className="section-padding bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mx-auto max-w-6xl"
        >
          {/* Header */}
          <motion.div variants={item} className="mb-10 text-center">
            <span
              className="mb-4 inline-block rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)' }}
            >
              Portfolio
            </span>
            <h2 className="gradient-text-blue mb-4 text-4xl font-extrabold md:text-5xl">
              Featured Projects
            </h2>
            <p className="text-muted mx-auto max-w-xl text-base">
              Production-grade apps spanning fintech, enterprise banking, compliance &amp; HR
            </p>
            <div className="bg-accent mx-auto mt-5 h-1 w-16 rounded-full" />
          </motion.div>

          {/* Filter tabs — all green */}
          <motion.div variants={item} className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                className="rounded-full px-4 py-1.5 text-sm font-semibold transition-all"
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
          <motion.div layout className="grid gap-7 lg:grid-cols-2">
            {filtered.map((project) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={item}
                  className="glass-card hover-lift group overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Banner — all green */}
                  <div
                    className="relative flex h-36 items-center justify-center overflow-hidden"
                    style={{ background: 'var(--accent-light)' }}
                  >
                    <motion.div
                      className="flex h-20 w-20 items-center justify-center rounded-2xl"
                      style={{
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--accent-glow)',
                      }}
                      whileHover={{ scale: 1.1, rotate: 4 }}
                    >
                      <Icon className="h-9 w-9" style={{ color: 'var(--accent-dark)' }} />
                    </motion.div>
                    <span
                      className="absolute right-3 top-3 rounded-full px-2.5 py-0.5 text-xs font-semibold"
                      style={{
                        background: 'var(--glass-bg)',
                        color: 'var(--accent-dark)',
                        border: '1px solid var(--accent-glow)',
                      }}
                    >
                      {project.badge}
                    </span>
                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="p-6">
                    {/* Title row */}
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <h3 className="text-primary text-base font-bold leading-tight sm:text-lg">
                        {project.title}
                      </h3>
                      <div className="flex flex-shrink-0 gap-2">
                        <motion.a
                          href={project.github}
                          className="rounded-lg p-2 transition-colors"
                          style={{
                            background: 'var(--bg-secondary)',
                            border: '1px solid var(--border-color)',
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="text-muted h-4 w-4" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          className="rounded-lg p-2 transition-colors"
                          style={{
                            background: 'var(--accent-light)',
                            border: '1px solid var(--accent-glow)',
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink
                            className="h-4 w-4"
                            style={{ color: 'var(--accent-dark)' }}
                          />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-muted mb-4 text-sm leading-relaxed">{project.description}</p>

                    {/* Highlights */}
                    <ul className="mb-5 space-y-1.5">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="text-secondary flex items-start gap-2 text-xs">
                          <span className="bg-accent mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span
                          key={t}
                          className="mono rounded-full px-2 py-0.5 text-xs font-medium"
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
          <motion.div variants={item} className="mt-14 text-center">
            <div className="glass-card inline-block rounded-2xl p-8">
              <h3 className="gradient-text-blue mb-2 text-xl font-bold">
                See all projects on GitHub
              </h3>
              <p className="text-muted mb-6 text-sm">Open-source contributions and side projects</p>
              <motion.a
                href="https://github.com/yashwant-manchu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 24px var(--accent-glow)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Github className="h-4 w-4" />
                View GitHub Profile
                <ExternalLink className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
