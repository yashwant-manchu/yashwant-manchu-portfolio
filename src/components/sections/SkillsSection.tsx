'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Database,
  Smartphone,
  ShieldCheck,
  Palette,
  FlaskConical,
  Wrench,
  Radio,
  BarChart3,
} from 'lucide-react';

const skillGroups = [
  {
    category: 'Languages & Frameworks',
    icon: Code2,
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'React Native',
      'Next.js',
      'HTML5',
      'CSS3',
    ],
  },
  {
    category: 'State & Data',
    icon: Database,
    skills: [
      'Redux Toolkit',
      'RTK Query',
      'TanStack Query',
      'TanStack Table',
      'Redux-Thunk Middleware',
      'Reselect',
      'Context API',
      'Axios',
      'REST APIs',
      'Swagger',
    ],
  },
  {
    category: 'Mobile',
    icon: Smartphone,
    skills: [
      'Expo (Managed & Bare)',
      'React Native CLI',
      'NativeWind',
      'Gluestack UI',
      'TamagUI',
      'React Native Paper',
      'Google Play',
      'App Store',
    ],
  },
  {
    category: 'Real-Time & Communication',
    icon: Radio,
    skills: ['Socket.io', 'SockJS', 'WebRTC', 'WebSockets'],
  },
  {
    category: 'Data Viz & Forms',
    icon: BarChart3,
    skills: ['Chart.js', 'D3.js', 'React Hook Form'],
  },
  {
    category: 'Auth & Security',
    icon: ShieldCheck,
    skills: ['JWT', 'RBAC', 'Protected Routes'],
  },
  {
    category: 'Styling',
    icon: Palette,
    skills: ['Tailwind CSS', 'Material-UI', 'Styled Components', 'WCAG Accessibility'],
  },
  {
    category: 'Testing',
    icon: FlaskConical,
    skills: ['Jest', 'React Testing Library', 'Unit Testing', 'Integration Testing'],
  },
  {
    category: 'Tools',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'GitLab',
      'Bitbucket',
      'VS Code',
      'Postman',
      'Jira',
      'Confluence',
      'Vite',
      'Webpack',
      'ESLint',
      'Prettier',
      'Vercel',
      'GitHub Pages',
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.48, ease: 'easeOut' } },
  };

  return (
    <section id="skills" className="section-padding bg-secondary">
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
              03. Skills
            </span>
            <div className="bg-divider h-px flex-1" />
          </motion.div>

          <motion.p variants={item} className="text-secondary mb-10 text-base leading-relaxed">
            Technologies and tools I reach for day-to-day. I pick up new ones quickly when a project
            calls for it.
          </motion.p>

          {/* Skill groups */}
          <div className="space-y-7">
            {skillGroups.map((group, gi) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  variants={item}
                  className="grid items-start gap-3 sm:grid-cols-[170px_1fr] sm:gap-6"
                >
                  <p
                    className="text-muted flex flex-shrink-0 items-center gap-1.5 pt-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-mono), 'JetBrains Mono', monospace" }}
                  >
                    <Icon className="text-accent h-3.5 w-3.5" />
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
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
