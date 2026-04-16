'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Award, CheckCircle, ExternalLink } from 'lucide-react';

const experiences = [
  {
    position: 'Software Development Engineer',
    company: 'EDSOM FINTECH PVT. LTD.',
    url: '#', type: 'Full-time', duration: 'May 2025 – Present',
    location: 'Pune, Maharashtra', current: true,
    achievements: [
      'Engineered iPaisa web & mobile payment platform (Expo, TypeScript, Tailwind CSS) with 5+ payment gateways; app live on Google Play Store',
      'Built FINAMSCCS & VLNIDHI corporate banking suite — end-to-end KYC onboarding, investment plan management, 4-tier RBAC hierarchy secured with JWT',
      'Delivered full-featured HRMS dashboard; improved render speed 35% via React memoization, lazy loading & code splitting',
      'Built Smart Parking system with Bluetooth thermal printer integration, cutting ticket generation time by 70%',
    ],
    techStack: ['React.js', 'React Native', 'TypeScript', 'Expo', 'Redux Toolkit', 'JWT/RBAC', 'Tailwind CSS'],
  },
  {
    position: 'Software Development Engineer I',
    company: 'MTREE TECH SOLUTIONS',
    url: 'https://mtreetech.com', type: 'Full-time', duration: 'Jun 2023 – Mar 2025',
    location: 'Nellore, Andhra Pradesh', current: false,
    achievements: [
      'Led migration of 20+ class components to functional components with React Hooks, reducing technical debt by 40%',
      'Architected Redux Toolkit & Context API state management across 3 production projects, cutting redundant API calls by 35%',
      'Maintained 85%+ test coverage with Jest & RTL; integrated 8+ REST APIs via Axios at 99.2% production success rate',
      'Engineered JWT-secured RBAC systems across 3 apps supporting 5 distinct user roles with protected route navigation',
    ],
    techStack: ['React.js', 'React Native', 'TypeScript', 'Redux Toolkit', 'Jest', 'RTL', 'Axios', 'JWT'],
  },
  {
    position: 'Software Development Intern',
    company: 'MTREE TECH SOLUTIONS',
    url: 'https://mtreetech.com', type: 'Internship', duration: 'Dec 2022 – May 2023',
    location: 'Nellore, Andhra Pradesh', current: false,
    achievements: [
      'Developed the company marketing website using HTML5, CSS3 & JavaScript, deployed via GitHub Pages',
      'Built a medical appointment portal achieving 95% cross-browser compatibility with Bootstrap 5',
      'Modernised legacy PHP 8 codebase resolving 15+ security vulnerabilities, reducing page load times by 47%',
    ],
    techStack: ['React Native', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'PHP'],
  },
];

const certifications = [
  { title: 'Git Training Certification', org: 'Simplilearn' },
  { title: 'Postman API Fundamentals', org: 'Postman' },
  { title: 'Standout Performer of the Year 2023', org: 'MTREE TECH SOLUTIONS' },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  return (
      <section id="experience" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
        <div className="container mx-auto px-4">
          <motion.div
              ref={ref}
              variants={container}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <motion.div variants={item} className="text-center mb-14">
            <span
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-widest"
                style={{ background: 'var(--accent-light)', color: 'var(--accent-dark)' }}
            >
              Career
            </span>
              <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-blue mb-4">
                Work Experience
              </h2>
              <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'var(--accent)' }} />
            </motion.div>

            {/* Timeline */}
            <div className="relative space-y-8">
              <div
                  className="absolute left-6 top-3 bottom-3 w-px hidden md:block"
                  style={{ background: 'linear-gradient(180deg, var(--accent), var(--accent-light), transparent)' }}
              />

              {experiences.map((exp, i) => (
                  <motion.div key={i} variants={item} className="relative pl-0 md:pl-16">
                    {/* Dot */}
                    <div
                        className="absolute left-4 top-6 hidden md:flex items-center justify-center w-5 h-5 rounded-full border-2"
                        style={{
                          background: exp.current ? 'var(--accent)' : 'var(--bg-card)',
                          borderColor: 'var(--accent)',
                        }}
                    >
                      {exp.current && (
                          <motion.div
                              className="w-2 h-2 rounded-full"
                              style={{ background: 'var(--bg-primary)' }}
                              animate={{ scale: [1, 1.4, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                          />
                      )}
                    </div>

                    <motion.div className="glass-card rounded-2xl p-6 hover-lift" whileHover={{ scale: 1.01 }}>
                      {/* Card header */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center flex-wrap gap-2 mb-1">
                        <span
                            className="px-2.5 py-0.5 rounded-full text-xs font-semibold"
                            style={{
                              background: exp.current
                                  ? 'var(--accent-light)'
                                  : 'var(--bg-tertiary)',
                              color: exp.current ? 'var(--accent-dark)' : 'var(--text-muted)',
                            }}
                        >
                          {exp.current ? '● Current' : exp.type}
                        </span>
                          </div>
                          <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
                            {exp.position}
                          </h3>
                          <a
                              href={exp.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 font-semibold text-sm hover:underline"
                              style={{ color: 'var(--accent)' }}
                          >
                            {exp.company} <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <div
                            className="text-right text-xs space-y-1 flex-shrink-0"
                            style={{ color: 'var(--text-muted)' }}
                        >
                          <div className="flex items-center gap-1 justify-end">
                            <Calendar className="w-3.5 h-3.5" /> {exp.duration}
                          </div>
                          <div className="flex items-center gap-1 justify-end">
                            <MapPin className="w-3.5 h-3.5" /> {exp.location}
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2 mb-5">
                        {exp.achievements.map((a, j) => (
                            <motion.li
                                key={j}
                                className="flex items-start gap-2 text-sm"
                                style={{ color: 'var(--text-secondary)' }}
                                initial={{ opacity: 0, x: -8 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: j * 0.08 + 0.4 }}
                            >
                              <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
                              {a}
                            </motion.li>
                        ))}
                      </ul>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((t) => (
                            <span
                                key={t}
                                className="px-2.5 py-0.5 rounded-full text-xs font-medium mono"
                                style={{
                                  background: 'var(--bg-tertiary)',
                                  color: 'var(--text-muted)',
                                  border: '1px solid var(--border-color)',
                                }}
                            >
                        {t}
                      </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div variants={item} className="mt-14 glass-card rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold gradient-text-blue">Certifications &amp; Awards</h3>
              </div>
              <div className="grid sm:grid-cols-3 gap-5">
                {certifications.map((c, i) => (
                    <motion.div
                        key={i}
                        className="rounded-xl p-5 text-center hover-lift"
                        style={{
                          background: 'var(--bg-secondary)',
                          border: '1px solid var(--border-color)',
                        }}
                        whileHover={{ scale: 1.04 }}
                        initial={{ opacity: 0, y: 16 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: i * 0.15 + 0.6 }}
                    >
                      <Award className="w-7 h-7 mx-auto mb-3" style={{ color: 'var(--accent)' }} />
                      <p className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>
                        {c.title}
                      </p>
                      <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{c.org}</p>
                    </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
