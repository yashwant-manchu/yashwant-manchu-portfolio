'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Server, Wrench, Smartphone } from 'lucide-react';

const skillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Code,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'JavaScript', level: 88 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Bootstrap', level: 85 }
    ]
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: Server,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'PHP', level: 75 },
      { name: 'RESTful APIs', level: 80 },
      { name: 'MySQL', level: 70 },
      { name: 'Database Design', level: 65 }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Platforms',
    icon: Wrench,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Bitbucket', level: 75 },
      { name: 'Jira', level: 70 },
      { name: 'VS Code', level: 95 },
      { name: 'Postman', level: 80 }
    ]
  },
  {
    id: 'testing',
    name: 'Testing & Mobile',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Jest', level: 70 },
      { name: 'Unit Testing', level: 75 },
      { name: 'Mobile Development', level: 85 },
      { name: 'Cross-Platform', level: 80 }
    ]
  }
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('frontend');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillBarVariants: Variants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  const activeSkills = skillCategories.find(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-blue mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="glass-card p-2 rounded-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {skillCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <motion.button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 cursor-hover ${
                        activeCategory === category.id
                          ? 'text-white'
                          : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {activeCategory === category.id && (
                        <motion.div
                          layoutId="activeTab"
                          className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-xl`}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <div className="relative z-10 flex flex-col items-center">
                        <IconComponent className="w-6 h-6 mb-2" />
                        <span className="text-sm font-medium">{category.name}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Skills Display */}
          {activeSkills && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8"
            >
              {activeSkills.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="glass-card p-6 rounded-xl hover-lift cursor-hover"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {skill.name}
                    </h4>
                    <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${activeSkills.color} rounded-full`}
                      variants={skillBarVariants}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      custom={skill.level}
                    />
                    
                    {/* Shine effect */}
                    <motion.div
                      className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                        ease: "easeInOut"
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Additional Skills Summary */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold gradient-text-blue mb-6">
                Always Learning
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-3xl mx-auto">
                Technology evolves rapidly, and I&apos;m committed to continuous learning. 
                I stay updated with the latest trends, frameworks, and best practices 
                to deliver cutting-edge solutions.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    2+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    15+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    10+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                    3
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Certifications
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};