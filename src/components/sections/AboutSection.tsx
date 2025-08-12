'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, MapPin } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" // Changed from array to string
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold gradient-text-blue mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative">
                  <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center overflow-hidden glass-card">
                    {/* Placeholder for profile image */}
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">YM</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                Passionate Frontend Developer
              </h3>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I&apos;m a dedicated Frontend Developer with a strong foundation in modern web technologies. 
                My journey in software development began during my studies in Electrical and Electronics Engineering, 
                where I discovered my passion for creating digital experiences that make a difference.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Currently working at MTREE TECH SOLUTIONS, I specialize in React.js, React Native, 
                and modern web development practices. I love turning complex problems into simple, 
                beautiful, and intuitive solutions that users enjoy interacting with.
              </p>

              {/* Core Competencies */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <motion.div
                  className="p-6 glass-card rounded-xl hover-lift cursor-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Core Expertise
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li>• Frontend Development</li>
                    <li>• Mobile App Development</li>
                    <li>• UI/UX Implementation</li>
                    <li>• API Integration</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="p-6 glass-card rounded-xl hover-lift cursor-hover"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Location & Goals
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    Based in Nellore, A.P, India
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Focused on creating impactful digital solutions
                  </p>
                </motion.div>
              </div>

              {/* Education Highlights */}
              <motion.div
                className="mt-8 p-6 glass-card rounded-xl"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Educational Background
                  </h4>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      B.Tech in Electrical and Electronics Engineering
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2020-2023 • GPA: 7.1
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Diploma in Electrical and Electronics Engineering
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      2017-2020 • GPA: 8.4
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};