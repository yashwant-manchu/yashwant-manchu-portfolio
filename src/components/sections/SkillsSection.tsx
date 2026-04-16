'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code2, Layers, Wrench, FlaskConical } from 'lucide-react';

const categories = [
  {
    id: 'frontend', label: 'Frontend', icon: Code2,
    skills: [
      { name: 'React.js', level: 92 }, { name: 'React Native', level: 90 },
      { name: 'TypeScript', level: 86 }, { name: 'Next.js', level: 82 },
      { name: 'JavaScript (ES6+)', level: 92 }, { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 / CSS3', level: 95 }, { name: 'Material-UI / Gluestack', level: 80 },
    ],
  },
  {
    id: 'state', label: 'State & APIs', icon: Layers,
    skills: [
      { name: 'Redux Toolkit', level: 90 }, { name: 'Redux-Thunk', level: 86 },
      { name: 'Context API', level: 88 }, { name: 'REST APIs / Axios', level: 90 },
      { name: 'JWT Authentication', level: 86 }, { name: 'RBAC Systems', level: 84 },
      { name: 'Swagger / Postman', level: 82 },
    ],
  },
  {
    id: 'tools', label: 'Tools', icon: Wrench,
    skills: [
      { name: 'Git / GitHub / GitLab', level: 88 }, { name: 'VS Code / WebStorm', level: 94 },
      { name: 'Vite / Webpack', level: 78 }, { name: 'Bitbucket / Jira', level: 76 },
      { name: 'Vercel / GitHub Pages', level: 82 }, { name: 'Expo CLI', level: 86 },
    ],
  },
  {
    id: 'testing', label: 'Testing & Mobile', icon: FlaskConical,
    skills: [
      { name: 'Jest', level: 82 }, { name: 'React Testing Library', level: 82 },
      { name: 'Expo (Managed & Bare)', level: 86 }, { name: 'Google Play Store Deploy', level: 85 },
      { name: 'Apple App Store Deploy', level: 82 }, { name: 'NativeWind / TamagUI', level: 78 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [active, setActive] = useState('frontend');

  const container: Variants = {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden:  { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  };

  const activeCat = categories.find((c) => c.id === active)!;

  return (
      <section id="skills" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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
              Expertise
            </span>
              <h2 className="text-4xl md:text-5xl font-extrabold gradient-text-blue mb-4">
                Skills &amp; Tech Stack
              </h2>
              <div className="w-16 h-1 rounded-full mx-auto" style={{ background: 'var(--accent)' }} />
            </motion.div>

            {/* Category tabs — all green */}
            <motion.div variants={item} className="flex justify-center mb-10">
              <div className="glass-card p-1.5 rounded-2xl inline-flex flex-wrap justify-center gap-1">
                {categories.map((cat) => {
                  const Icon = cat.icon;
                  const isActive = active === cat.id;
                  return (
                      <motion.button
                          key={cat.id}
                          onClick={() => setActive(cat.id)}
                          className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                          style={{ color: isActive ? '#fff' : 'var(--text-muted)' }}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                      >
                        {isActive && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 rounded-xl"
                                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-dark))' }}
                                transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                          {cat.label}
                    </span>
                      </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Skill bars */}
            <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 gap-5"
            >
              {activeCat.skills.map((skill, i) => (
                  <motion.div
                      key={skill.name}
                      className="glass-card rounded-xl p-5 hover-lift"
                      initial={{ opacity: 0, x: -14 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: i * 0.07 + 0.2 }}
                      whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex justify-between mb-3">
                  <span className="text-sm font-semibold mono" style={{ color: 'var(--text-primary)' }}>
                    {skill.name}
                  </span>
                      <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
                    {skill.level}%
                  </span>
                    </div>
                    <div className="relative h-2 rounded-full overflow-hidden" style={{ background: 'var(--bg-tertiary)' }}>
                      <motion.div
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-dark))' }}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: i * 0.07 + 0.4 }}
                      />
                    </div>
                  </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { value: '3+',   label: 'Years building' },
                { value: '20+',  label: 'Technologies' },
                { value: '10+',  label: 'Projects shipped' },
                { value: '85%+', label: 'Test coverage' },
              ].map((s) => (
                  <div key={s.label} className="glass-card rounded-2xl p-5 text-center hover-lift">
                    <div className="text-3xl font-extrabold mb-1" style={{ color: 'var(--accent)' }}>
                      {s.value}
                    </div>
                    <div className="text-xs" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
                  </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
  );
};
