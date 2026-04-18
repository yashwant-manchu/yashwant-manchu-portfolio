'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    period: 'May 2025 — Present',
    role: 'Software Development Engineer',
    company: 'EDSOM FINTECH',
    companyUrl: 'https://edsomfintech.com',
    description: `Build and maintain production fintech platforms used by real customers. 
    Shipped iPaisa — a multi-gateway payment app (Razorpay, UPI, Net Banking) with wallet flows, 
    real-time transaction updates, and receipt generation — live on the Google Play Store.`,
    points: [
      'Built FINAMSCCS & VLNIDHI corporate banking suite covering KYC onboarding, investment plan management, and a 4-tier role hierarchy secured with JWT & RBAC',
      'Delivered HRMS with payroll, leave tracking, and approval workflows; improved render speed by 35% via memoization and code-splitting',
      'Developed Smart Parking system with Bluetooth printer integration, cutting ticket generation time by 70%',
    ],
    tech: ['React.js', 'React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'JWT', 'Tailwind CSS'],
  },
  {
    period: 'Jun 2023 — Mar 2025',
    role: 'Software Development Engineer I',
    company: 'MTREE TECH SOLUTIONS',
    companyUrl: 'https://mtreetech.com',
    description: `Led frontend development across multiple client products. Focused on modernising legacy code, 
    improving performance, and building reliable test coverage while shipping features quickly.`,
    points: [
      'Migrated 20+ class components to functional components with Hooks, reducing technical debt by 40%',
      'Architected Redux Toolkit state management across 3 production apps, cutting redundant API calls by 35%',
      'Maintained 85%+ test coverage with Jest & RTL; integrated 8+ REST APIs via Axios at 99.2% uptime',
    ],
    tech: ['React.js', 'React Native', 'Redux Toolkit', 'TypeScript', 'Jest', 'RTL', 'Axios'],
  },
  {
    period: 'Dec 2022 — May 2023',
    role: 'Software Development Intern',
    company: 'MTREE TECH SOLUTIONS',
    companyUrl: 'https://mtreetech.com',
    description: `Built and shipped the company's public marketing site from scratch. 
    Also developed a medical appointment portal and resolved long-standing PHP performance issues.`,
    points: [
      'Developed and deployed the company website using HTML5, CSS3 & JavaScript via GitHub Pages',
      'Built a Bootstrap 5 medical portal with 95% cross-browser compatibility',
      'Fixed 15+ security vulnerabilities in a PHP 8 codebase; reduced page load time by 47%',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PHP', 'React Native'],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
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
            <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--accent)', fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
            >
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
                      className="grid sm:grid-cols-[150px_1fr] gap-4 sm:gap-8"
                  >
                    {/* Period */}
                    <div className="pt-0.5 flex-shrink-0">
                      <p
                          className="text-xs leading-snug"
                          style={{
                            color: 'var(--text-muted)',
                            fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                          }}
                      >
                        {exp.period}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3
                          className="text-base font-bold"
                          style={{ color: 'var(--text-primary)', fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
                      >
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

                      <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--text-secondary)' }}
                      >
                        {exp.description}
                      </p>

                      <ul className="space-y-1.5">
                        {exp.points.map((pt, j) => (
                            <li
                                key={j}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                            >
                        <span
                            className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                            style={{ background: 'var(--accent)' }}
                        />
                              {pt}
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

            {/* View Full Résumé — opens PDF from public folder */}
            <motion.div variants={item} className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--border-color)' }}>
              <a
                  href="/Yashwant-Manchu-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 group cursor-hover"
              >
              <span
                  className="text-sm font-semibold group-hover:underline"
                  style={{
                    color: 'var(--accent)',
                    fontFamily: "var(--font-syne), 'Syne', sans-serif",
                  }}
              >
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
