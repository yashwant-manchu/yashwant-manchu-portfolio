'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    period: 'May 2025 — Jul 2026',
    role: 'Software Development Engineer',
    company: 'EDSOM FINTECH',
    companyUrl: 'https://edsomfintech.com',
    description: `Built and maintained production fintech platforms used by real customers.
    Shipped iPaisa — a multi-gateway payment app (Razorpay, Cashfree, Easebuzz, UPI) serving
    10K+ daily active users with wallet flows, real-time transaction monitoring, and receipt
    generation — live on the Google Play Store, at a 99.7% transaction success rate.`,
    points: [
      'Built FINAMSCCS & VLNIDHI corporate banking suite with 15+ role-based permissions, audit logging, multi-stage KYC workflows, and a dynamic plan-configuration system for admin-defined savings/investment plans',
      'Developed BOLBUDDY, a real-time chat app built on Socket.io, WebRTC, and SockJS supporting text messaging, voice/video calling, and auto-disappear messages',
      'Delivered HRMS with Chart.js/D3.js workforce analytics and virtualized tables handling 10K+ records; cut render time by 35% and JS bundle size by 28% with Reselect-optimized selectors sustaining 60 FPS scrolling',
      'Architected a component-based design system with 50+ reusable components using atomic design principles, improving development velocity by 40%; implemented RTK Query with normalized state and optimistic updates, cutting API calls by 60%',
    ],
    tech: [
      'React.js',
      'React Native',
      'TypeScript',
      'Expo',
      'Redux Toolkit',
      'RTK Query',
      'Socket.io',
      'JWT',
      'Tailwind CSS',
    ],
  },
  {
    period: 'Jun 2023 — Mar 2025',
    role: 'Software Development Engineer I',
    company: 'MTREE TECH SOLUTIONS',
    companyUrl: 'https://mtreetech.com',
    description: `Led frontend development across multiple client products. Focused on modernising legacy code, 
    improving performance, and building reliable test coverage while shipping features quickly.`,
    points: [
      'Spearheaded migration of 20+ class components to functional components with Hooks and modernized a legacy DXP toolkit to Connect Toolkit, reducing technical debt by 40%',
      'Architected Redux Toolkit and Context API state management across 3 production apps, cutting redundant API calls by 35%',
      'Maintained 85%+ test coverage with Jest & RTL; integrated 8+ REST APIs via Axios at 99.2% success rate',
      'Mentored a cohort of 5 interns through 1:1 and group sessions while reviewing pull requests for 3 engineers to uphold code quality',
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
      'Built a Bootstrap 5 medical appointment portal with 95% cross-browser compatibility, cutting UI dev time by 30%',
      'Fixed 15+ security vulnerabilities in a legacy PHP codebase; reduced page load time by 47% via lazy loading and asset optimization',
      'Built a custom CMS giving the client self-service control over gallery content, replacing a manual upload-and-redeploy workflow',
    ],
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PHP', 'React Native'],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="experience" className="section-padding bg-primary">
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
              02. Experience
            </span>
            <div className="bg-divider h-px flex-1" />
          </motion.div>

          {/* Entries */}
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={item}
                className="grid gap-4 sm:grid-cols-[150px_1fr] sm:gap-8"
              >
                {/* Period */}
                <div className="flex-shrink-0 pt-0.5">
                  <p
                    className="text-muted text-xs leading-snug"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                  >
                    {exp.period}
                  </p>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3
                    className="text-primary text-base font-bold"
                    style={{ fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
                  >
                    {exp.role}{' '}
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-hover text-accent inline-flex items-center gap-0.5 hover:underline"
                    >
                      · {exp.company}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </h3>

                  <p className="text-secondary text-sm leading-relaxed">{exp.description}</p>

                  <ul className="space-y-1.5">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="text-secondary flex items-start gap-2 text-sm">
                        <span className="bg-accent mt-2 h-1 w-1 flex-shrink-0 rounded-full" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {exp.tech.map((t) => (
                      <span key={t} className="skill-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View Full Résumé — opens PDF from public folder */}
          <motion.div variants={item} className="border-divider mt-12 border-t pt-8">
            <a
              href="/Yashwant-Manchu-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover group inline-flex items-center gap-2"
            >
              <span
                className="text-accent text-sm font-semibold group-hover:underline"
                style={{ fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
              >
                View Full Résumé
              </span>
              <ArrowUpRight className="text-accent h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
