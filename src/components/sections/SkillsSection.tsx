'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'React.js', 'React Native', 'Next.js', 'HTML5', 'CSS3'],
  },
  {
    category: 'State & Data',
    skills: ['Redux Toolkit', 'Context API', 'Axios', 'REST APIs', 'Swagger'],
  },
  {
    category: 'Mobile',
    skills: ['Expo (Managed & Bare)', 'React Native CLI', 'NativeWind', 'Gluestack UI', 'Google Play', 'App Store'],
  },
  {
    category: 'Auth & Security',
    skills: ['JWT', 'RBAC', 'Protected Routes'],
  },
  {
    category: 'Styling',
    skills: ['Tailwind CSS', 'Material-UI', 'Styled Components'],
  },
  {
    category: 'Testing',
    skills: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'GitHub', 'GitLab', 'VS Code', 'Postman', 'Jira', 'Vite', 'Vercel'],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
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
            <motion.div variants={item} className="flex items-center gap-3 mb-10">
            <span
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: 'var(--accent)', fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
            >
              03. Skills
            </span>
              <div className="flex-1 h-px" style={{ background: 'var(--border-color)' }} />
            </motion.div>

            <motion.p variants={item} className="text-base leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              Technologies and tools I reach for day-to-day. I pick up new ones quickly when a project calls for it.
            </motion.p>

            {/* Skill groups */}
            <div className="space-y-7">
              {skillGroups.map((group, gi) => (
                  <motion.div
                      key={group.category}
                      variants={item}
                      className="grid sm:grid-cols-[170px_1fr] gap-3 sm:gap-6 items-start"
                  >
                    <p
                        className="text-xs font-semibold uppercase tracking-widest pt-1 flex-shrink-0"
                        style={{
                          color: 'var(--text-muted)',
                          fontFamily: "var(--font-mono), 'JetBrains Mono', monospace",
                        }}
                    >
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, si) => (
                          <motion.span
                              key={skill}
                              className="skill-tag"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: gi * 0.05 + si * 0.025 + 0.15 }}
                              whileHover={{ scale: 1.06 }}
                          >
                            {skill}
                          </motion.span>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-10 h-px" style={{ background: 'var(--border-color)' }} />

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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
                    <p
                        className="text-2xl font-extrabold"
                        style={{ color: 'var(--accent)', fontFamily: "var(--font-syne), 'Syne', sans-serif" }}
                    >
                      {s.v}
                    </p>
                    <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{s.l}</p>
                  </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
