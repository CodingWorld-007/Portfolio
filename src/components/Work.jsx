import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Virtual Look',
      subtitle: 'Safety Ecosystem',
      description: 'Dual-app system with offline AI audio classification achieving 92% accuracy for real-time threat detection. Geolocation tracking and battery-efficient design.',
      tech: ['Kotlin', 'Firebase', 'ML', 'Android'],
      category: 'product',
      role: 'Founder & CEO',
      impact: '0 false positives in 1000+ test cases',
    },
    {
      id: 2,
      title: 'Child Look',
      subtitle: 'Parental Monitoring',
      description: 'Real-time screen monitoring with ML-based content classification. Comprehensive security with automated reporting and risk assessment.',
      tech: ['Python', 'Android', 'ML', 'Firebase'],
      category: 'product',
      role: 'Lead Developer',
      impact: '92% accuracy on content classification',
    },
    {
      id: 3,
      title: 'Intelli-Safe',
      subtitle: 'Road Safety Patent',
      description: 'Integrated hardware-ML system for pothole detection and hazard avoidance. Patent filed with integrated computer vision processing.',
      tech: ['ML', 'Computer Vision', 'Python', 'Hardware'],
      category: 'patent',
      role: 'Patent Holder',
      impact: 'Patent filed July 2024',
    },
    {
      id: 4,
      title: 'Traffic Guard',
      subtitle: 'Second Safety Patent',
      description: 'Intelligent traffic monitoring and prediction system using ML models and real-time data processing.',
      tech: ['Python', 'ML', 'Data Processing'],
      category: 'patent',
      role: 'Inventor',
      impact: 'Patent pending',
    },
    {
      id: 5,
      title: 'Attendance System',
      subtitle: 'Smart QR Solution',
      description: 'Full-stack Flask REST API with time-sensitive QR code generation and validation in 500ms. Reduces manual attendance by 95%.',
      tech: ['Flask', 'Python', 'REST API', 'QR Code'],
      category: 'system',
      role: 'Developer',
      impact: '95% time reduction',
    },
    {
      id: 6,
      title: 'CODING WORLD',
      subtitle: 'Educational Platform',
      description: 'YouTube channel teaching 2000+ students on Python, ethical hacking, and cybersecurity with practical real-world applications.',
      tech: ['Education', 'Content', 'Cybersecurity'],
      category: 'education',
      role: 'Founder & Teacher',
      impact: '2000+ active subscribers',
    },
  ]

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'product', label: 'Products' },
    { value: 'patent', label: 'Patents' },
    { value: 'system', label: 'Systems' },
    { value: 'education', label: 'Education' },
  ]

  const filtered = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter)

  return (
    <section id="work" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
          <motion.div 
            className="w-12 h-1 bg-white"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        {/* Smart Filter */}
        <motion.div
          className="mb-12 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedFilter === filter.value
                  ? 'bg-white text-black'
                  : 'border border-white/20 text-gray-300 hover:border-white/40'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          layout
        >
          <AnimatePresence mode="wait">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group"
              >
                <motion.div
                  className="border border-white/10 rounded-lg p-8 premium-bg hover:border-white/20 transition-all smart-hover"
                  whileHover={{ borderColor: 'rgba(255,255,255,0.3)' }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{project.subtitle}</p>
                    </div>
                    <motion.div
                      className="text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                      animate={{ rotate: [0, 45, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FiArrowUpRight size={20} />
                    </motion.div>
                  </div>

                  <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impact metric */}
                  <motion.div
                    className="mb-6 p-3 rounded-lg bg-white/5 border border-white/10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Impact</p>
                    <p className="text-sm font-medium text-white">{project.impact}</p>
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <motion.span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full border border-white/10 text-gray-400 hover:border-white/30 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-xs text-gray-500 uppercase tracking-wider">{project.role}</p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Work
