'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Award, BookOpen, MapPin, Zap } from 'lucide-react';

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
      <section id="about" className="section-padding bg-gray-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
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
              {/* Avatar / Image placeholder */}
              <motion.div variants={itemVariants} className="relative">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000" />
                  <div className="relative">
                    <div className="w-full max-w-md mx-auto aspect-square bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center overflow-hidden glass-card">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">YM</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick stats below avatar */}
                <motion.div
                    variants={itemVariants}
                    className="mt-6 grid grid-cols-3 gap-4 text-center"
                >
                  {[
                    { value: '3+', label: 'Years Exp.' },
                    { value: '10+', label: 'Projects' },
                    { value: '2', label: 'Companies' },
                  ].map((stat) => (
                      <div key={stat.label} className="glass-card p-4 rounded-xl">
                        <div className="text-2xl font-bold gradient-text-blue">{stat.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                      </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Frontend Software Engineer
                </h3>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  I&apos;m a Frontend Software Engineer with 3+ years of experience delivering scalable
                  web and cross-platform mobile applications. My journey started in Electrical &amp;
                  Electronics Engineering, where a passion for software took over — and I&apos;ve never
                  looked back.
                </p>

                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Currently at <span className="font-semibold text-blue-600 dark:text-blue-400">EDSOM FINTECH PVT. LTD.</span> in Pune,
                  I build production fintech platforms — from multi-gateway payment flows and real-time
                  WebRTC chat to enterprise RBAC systems. Previously at MTREE TECH SOLUTIONS, I led
                  React Native mobile app development and modernised legacy codebases for multiple clients.
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
                      <li>• React.js &amp; React Native</li>
                      <li>• TypeScript &amp; Next.js</li>
                      <li>• Real-Time (Socket.io / WebRTC)</li>
                      <li>• State Management (Redux Toolkit)</li>
                      <li>• Fintech &amp; RBAC Systems</li>
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
                        Location &amp; Goals
                      </h4>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Based in Pune, Maharashtra, India
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Open to impactful product roles in fintech, SaaS, or consumer tech
                    </p>
                  </motion.div>
                </div>

                {/* What I bring */}
                <motion.div
                    className="mt-6 p-6 glass-card rounded-xl"
                    variants={itemVariants}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <Zap className="w-6 h-6 text-orange-500 dark:text-orange-400" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      What I Bring
                    </h4>
                  </div>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm">
                    <li>✦ 85%+ test coverage with Jest &amp; React Testing Library</li>
                    <li>✦ Google Play Store &amp; Apple App Store deployments</li>
                    <li>✦ 35–47% performance improvements through code-splitting &amp; lazy loading</li>
                    <li>✦ Sub-100ms real-time messaging via Socket.io &amp; SockJS</li>
                  </ul>
                </motion.div>

                {/* Education */}
                <motion.div
                    className="mt-6 p-6 glass-card rounded-xl"
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
                        B.Tech — Electrical &amp; Electronics Engineering
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Sree Venkateswara College of Engineering · 2020–2023 · GPA: 7.6
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        Diploma — Electrical &amp; Electronics Engineering
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Government Polytechnic Nellore · 2017–2020 · GPA: 8.8
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
