'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['React.js', 'React Native', 'TypeScript', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'State & Data',
    skills: ['Redux Toolkit', 'Redux-Thunk', 'Context API', 'REST APIs', 'Axios', 'Swagger'],
  },
  {
    category: 'Auth & Security',
    skills: ['JWT Authentication', 'RBAC Systems', 'Protected Routes', 'Session Management'],
  },
  {
    category: 'Mobile',
    skills: ['React Native CLI', 'Expo (Managed & Bare)', 'NativeWind', 'Gluestack UI', 'TamagUI', 'Google Play Store', 'App Store'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing'],
  },
  {
    category: 'Tooling',
    skills: ['Git', 'GitHub', 'GitLab', 'Bitbucket', 'VS Code', 'WebStorm', 'Vite', 'Webpack', 'Jira', 'Postman', 'Vercel'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
      <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
              03. Skills
            </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </motion.div>

            <motion.p variants={item} className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              Here&apos;s a snapshot of the tools and technologies I reach for most. I pick up new ones quickly
              when a project calls for it.
            </motion.p>

            {/* Skill groups */}
            <div className="space-y-8">
              {skillGroups.map((group, i) => (
                  <motion.div key={group.category} variants={item}>
                    <div className="grid sm:grid-cols-[120px_1fr] gap-3 sm:gap-6 items-start">
                      {/* Category label */}
                      <p className="text-xs font-semibold uppercase tracking-widest pt-1 flex-shrink-0" style={{ color: 'var(--text-muted)' }}>
                        {group.category}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map((skill, j) => (
                            <motion.span
                                key={skill}
                                className="skill-tag"
                                initial={{ opacity: 0, scale: 0.92 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: i * 0.06 + j * 0.03 + 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                              {skill}
                            </motion.span>
                        ))}
                      </div>
                    </div>
                    {i < skillGroups.length - 1 && (
                        <div className="mt-8 h-px" style={{ background: 'var(--border-color)' }} />
                    )}
                  </motion.div>
              ))}
            </div>

            {/* Stats strip */}
            <motion.div
                variants={item}
                className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { v: '3+',   l: 'Years' },
                { v: '20+',  l: 'Technologies' },
                { v: '10+',  l: 'Projects' },
                { v: '85%+', l: 'Test Coverage' },
              ].map((s) => (
                  <div
                      key={s.l}
                      className="glass-card rounded-xl p-4 text-center"
                  >
                    <p className="text-2xl font-extrabold" style={{ color: 'var(--accent)' }}>{s.v}</p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.l}</p>
                  </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
