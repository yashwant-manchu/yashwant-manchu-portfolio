'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Car, Heart } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Parking Ticket App',
    description: 'A comprehensive React Native mobile application for managing parking tickets with real-time updates, payment integration, and user-friendly interface.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'JavaScript', 'API Integration', 'Mobile UI'],
    features: [
      'Real-time parking availability',
      'Digital ticket generation',
      'Payment gateway integration',
      'Location-based services'
    ],
    icon: Car,
    color: 'from-blue-500 to-cyan-500',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Donation App',
    description: 'A compassionate React Native application connecting donors with causes, featuring secure payment processing and transparent donation tracking.',
    image: '/api/placeholder/400/250',
    technologies: ['React Native', 'Payment Gateway', 'Database', 'Authentication'],
    features: [
      'Secure donation processing',
      'Cause discovery and filtering',
      'Donation history tracking',
      'Social sharing features'
    ],
    icon: Heart,
    color: 'from-pink-500 to-red-500',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'HyWay99',
    description: 'A robust web platform built with PHP and MySQL, providing comprehensive highway information services with dynamic content management.',
    image: '/api/placeholder/400/250',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Dynamic content management',
      'Route planning system',
      'Real-time traffic updates',
      'User authentication'
    ],
    icon: Globe,
    color: 'from-green-500 to-emerald-500',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'MTree Tech Solutions Website',
    description: 'Modern, responsive corporate website built with HTML5, CSS3, JavaScript, and Bootstrap, showcasing company services and portfolio.',
    image: '/api/placeholder/400/250',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
    features: [
      'Responsive design',
      'Interactive animations',
      'Contact form integration',
      'Performance optimized'
    ],
    icon: Smartphone,
    color: 'from-purple-500 to-indigo-500',
    github: '#',
    demo: 'https://mtreetech.com'
  }
];

export const ProjectsSection = () => {
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
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="projects" className="section-padding">
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
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A showcase of my work spanning mobile applications, web platforms, and innovative solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-6" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  className="group glass-card rounded-2xl overflow-hidden hover-lift cursor-hover"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className={`p-8 rounded-full bg-gradient-to-r ${project.color}`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <IconComponent className="w-12 h-12 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.github}
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-hover"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        </motion.a>
                        <motion.a
                          href={project.demo}
                          className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors cursor-hover"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                        </motion.a>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-gray-600 dark:text-gray-400 flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.1 * i + 0.5 }}
                          >
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white rounded-full text-sm font-medium`}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.1 * i + 0.7 }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.div
              className="glass-card p-8 rounded-2xl inline-block"
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold gradient-text-blue mb-4">
                More Projects on GitHub
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Explore my complete portfolio and open-source contributions
              </p>
              <motion.a
                href="https://github.com/yashwantmanchu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 px-8 py-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white rounded-full font-medium hover-lift cursor-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};