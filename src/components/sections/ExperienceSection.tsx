'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    period: 'May 2025 — Present',
    role: 'Software Development Engineer',
    company: 'EDSOM FINTECH PVT. LTD.',
    companyUrl: 'https://edsomfintech.com',
    location: 'Pune, Maharashtra',
    summary: `Building production fintech platforms at scale. I architected and shipped iPaisa — a multi-gateway 
    payment app (Razorpay, UPI, Net Banking) with wallet flows, real-time status updates, and downloadable 
    transaction reports — deployed live on the Google Play Store.`,
    highlights: [
      'Built FINAMSCCS & VLNIDHI corporate banking suite with end-to-end KYC onboarding, investment tracking, and a 4-tier role hierarchy (Member → Admin) secured with JWT & RBAC',
      'Delivered a full-featured HRMS with payroll, leave tracking, and multi-level approvals; cut render time 35% via memoization and code-splitting',
      'Developed Smart Parking system with Bluetooth thermal printer integration, reducing ticket generation time by 70%',
    ],
    tech: ['React.js', 'React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'JWT/RBAC', 'Tailwind CSS'],
  },
  {
    period: 'Jun 2023 — Mar 2025',
    role: 'Software Development Engineer I',
    company: 'MTREE TECH SOLUTIONS',
    companyUrl: 'https://mtreetech.com',
    location: 'Nellore, Andhra Pradesh',
    summary: `Modernised a legacy React codebase and led feature development across multiple client products. 
    Focused on improving maintainability, performance, and test coverage while shipping new features on tight timelines.`,
    highlights: [
      'Migrated 20+ class components to functional components with Hooks, cutting technical debt by 40%',
      'Architected Redux Toolkit state management across 3 production apps, reducing redundant API calls by 35%',
      'Maintained 85%+ test coverage with Jest & RTL across all core features; integrated 8+ REST APIs at 99.2% uptime',
    ],
    tech: ['React.js', 'React Native', 'Redux Toolkit', 'TypeScript', 'Jest', 'RTL', 'Axios'],
  },
  {
    period: 'Dec 2022 — May 2023',
    role: 'Software Development Intern',
    company: 'MTREE TECH SOLUTIONS',
    companyUrl: 'https://mtreetech.com',
    location: 'Nellore, Andhra Pradesh',
    summary: `Joined as an intern and shipped the company's public marketing site from scratch. 
    Also built a medical appointment portal and helped resolve long-standing performance issues in a legacy PHP codebase.`,
    highlights: [
      'Built and deployed the company marketing website using HTML5, CSS3 & JavaScript via GitHub Pages',
      'Achieved 95% cross-browser compatibility on a Bootstrap 5 medical portal',
      'Resolved 15+ security vulnerabilities in PHP 8 codebase; reduced page load times by 47%',
    ],
    tech: ['React Native', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PHP'],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
      <section id="experience" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
              02. Experience
            </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </motion.div>

            {/* Entries */}
            <div className="space-y-12">
              {experiences.map((exp, i) => (
                  <motion.div
                      key={i}
                      variants={item}
                      className="group grid sm:grid-cols-[140px_1fr] gap-4 sm:gap-8"
                  >
                    {/* Period */}
                    <div className="flex-shrink-0 pt-1">
                      <p className="text-xs font-mono leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                        {exp.period}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-base font-bold leading-snug" style={{ color: 'var(--text-primary)' }}>
                          {exp.role}{' '}
                          <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-0.5 hover:underline cursor-hover"
                              style={{ color: 'var(--accent)' }}
                          >
                            · {exp.company}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </h3>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{exp.location}</p>
                      </div>

                      <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {exp.summary}
                      </p>

                      <ul className="space-y-1.5">
                        {exp.highlights.map((h, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                              <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                              {h}
                            </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.tech.map((t) => (
                            <span key={t} className="skill-tag">{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
              ))}
            </div>

            {/* Full résumé link */}
            <motion.div variants={item} className="mt-12">
              <a
                  href="https://yashwant-manchu-portfolio.vercel.app/Yashwant-Manchu-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group cursor-hover"
                  style={{ color: 'var(--text-primary)' }}
              >
              <span className="text-sm font-semibold group-hover:underline" style={{ color: 'var(--accent)' }}>
                View Full Résumé
              </span>
                <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: 'var(--accent)' }}
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
