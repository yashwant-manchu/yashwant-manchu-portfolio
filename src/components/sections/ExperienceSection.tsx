'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Award, CheckCircle } from 'lucide-react';

const experiences = [
  {
    position: 'Software Developer',
    company: 'MTREE TECH SOLUTIONS',
    type: 'Full-time',
    duration: 'Jun 2023 – Present',
    location: 'Nellore, A.P, India',
    achievements: [
      'Developed and maintained multiple React Native mobile applications',
      'Built responsive web applications using React.js and modern frameworks',
      'Collaborated with cross-functional teams to deliver high-quality software solutions',
      'Implemented RESTful API integrations and optimized application performance',
      'Mentored junior developers and conducted code reviews',
      'Contributed to the company website redesign and optimization'
    ],
    techStack: ['React.js', 'React Native', 'JavaScript', 'PHP', 'MySQL', 'Git'],
    highlight: true
  },
  {
    position: 'Software Developer Intern',
    company: 'MTREE TECH SOLUTIONS',
    type: 'Internship',
    duration: 'Dec 2022 – May 2023',
    location: 'Nellore, A.P, India',
    achievements: [
      'Learned and applied React Native development principles',
      'Assisted in developing mobile applications for parking and donation systems',
      'Gained hands-on experience with version control using Git and GitHub',
      'Participated in agile development processes and daily standups',
      'Completed training in modern web development technologies'
    ],
    techStack: ['React Native', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    highlight: false
  }
];

const certifications = [
  'Git Training Certification (Simplilearn)',
  'Postman API Fundamentals Certification',
  'Standout Performer of the Year 2023, MTREE TECH SOLUTIONS'
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="experience" className="section-padding">
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
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey in software development and the impactful projects I&apos;ve contributed to
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10">
                  {exp.highlight && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ opacity: 0.3 }}
                    />
                  )}
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass-card p-6 rounded-2xl hover-lift cursor-hover">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          exp.highlight 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                        }`}>
                          {exp.type}
                        </span>
                        {exp.highlight && (
                          <Award className="w-5 h-5 text-yellow-500" />
                        )}
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.position}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                        {exp.company}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start space-x-2 text-gray-600 dark:text-gray-300"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 * i + 0.5 }}
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.techStack.map((tech, i) => (
                          <motion.span
                            key={i}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.1 * i + 0.7 }}
                            whileHover={{ scale: 1.1 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 glass-card rounded-2xl"
          >
            <h3 className="text-2xl font-bold text-center gradient-text-blue mb-8">
              Certifications & Recognition
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl hover-lift cursor-hover"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 * index + 0.8 }}
                >
                  <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {cert}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};