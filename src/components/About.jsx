import React, { useState } from 'react'
import { motion } from 'framer-motion'

const About = () => {
  const [hoveredTimeline, setHoveredTimeline] = useState(null)

  const timeline = [
    { year: '2024', title: 'Patents Filed', desc: 'Intelli-Safe & Traffic Guard patents for AI safety', icon: '🔐' },
    { year: '2023', title: 'Virtual Look', desc: 'Founded AI-powered safety ecosystem company', icon: '🚀' },
    { year: '2022', title: 'CODING WORLD', desc: 'Started YouTube channel, 2000+ subscribers', icon: '📺' },
    { year: '2021', title: 'G20 Award', desc: 'Best Researcher Award (Runner-up)', icon: '🏆' },
  ]

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Patents Filed', value: '2' },
    { label: 'Students Taught', value: '2K+' },
    { label: 'Projects Delivered', value: '6+' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 60, damping: 15 },
    },
  }

  const timelineItemVariant = {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  }

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <motion.div 
            className="w-12 h-1 bg-white"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              className="p-4 rounded-lg border border-white/10 premium-bg smart-hover group"
              variants={itemVariants}
              whileHover={{ 
                borderColor: 'rgba(255,255,255,0.3)',
                backgroundColor: 'rgba(255,255,255,0.05)',
                y: -4
              }}
            >
              <motion.div
                className="text-2xl font-bold text-white mb-1"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {stat.value}
              </motion.div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Content with enhanced animations */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {[
              "I'm an AI & ML engineer translating complex challenges into elegant, intelligent solutions. Currently pursuing B.Tech in Computer Science (AI-ML specialization) at Graphic Era Hill University with 8.36/10 GPA.",
              
              "As Founder & CEO of Virtual Look, I engineered a dual-app safety ecosystem with real-time AI threat detection and geolocation tracking, processing milliseconds of audio data for intelligent decision-making.",
              
              "I also run CODING WORLD on YouTube, educating 2000+ students on Python, cybersecurity, and ethical hacking—combining technical depth with accessibility."
            ].map((text, idx) => (
              <motion.div
                key={idx}
                className="relative"
                variants={itemVariants}
              >
                <motion.div
                  className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-white to-transparent rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.8 }}
                />
                <p className="text-lg text-gray-300 leading-relaxed pl-4">
                  {text}
                </p>
              </motion.div>
            ))}

            <motion.div className="pt-6" variants={itemVariants}>
              <motion.p 
                className="text-sm text-gray-400 mb-4 uppercase tracking-wider font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Core Competencies
              </motion.p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Machine Learning', 'Android', 'Flask', 'Firebase', 'Cybersecurity', 'Computer Vision', 'AI Safety'].map((skill, idx) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-300 smart-hover relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + 0.4, duration: 0.5 }}
                    whileHover={{ 
                      scale: 1.08,
                      borderColor: 'rgba(255,255,255,0.5)',
                      backgroundColor: 'rgba(255,255,255,0.08)'
                    }}
                  >
                    {/* Shimmer effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Enhanced Timeline */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Circular Photo - Larger in About */}
            <motion.div
              className="relative mb-8 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: 0.3, duration: 0.8, type: 'spring', stiffness: 60, damping: 15 }}
            >
              {/* Outer rotating border ring */}
              <motion.div
                className="absolute -inset-3 rounded-full border-2 border-transparent"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, linear: true }}
                style={{ borderImage: 'linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.2), transparent) 1' }}
              />

              {/* Multiple glow rings */}
              <motion.div
                className="absolute -inset-5 rounded-full bg-white/10 blur-2xl"
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              <motion.div
                className="absolute -inset-6 rounded-full bg-white/5 blur-3xl"
                animate={{ scale: [1.1, 1, 1.1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              {/* Photo container */}
              <motion.div
                className="relative w-64 h-64 md:w-72 md:h-72"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/new.png"
                  alt="Aman Joshi"
                  className="w-full h-full rounded-full object-cover border-4 border-white/30 shadow-2xl"
                  style={{ boxShadow: '0 0 60px rgba(255,255,255,0.15)' }}
                />

                {/* Animated inner rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-white/40"
                  whileHover={{ borderColor: 'rgba(255,255,255,0.7)' }}
                  transition={{ duration: 0.3 }}
                />

                {/* Rotating accent outer ring */}
                <motion.div
                  className="absolute -inset-2 rounded-full border-2 border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, linear: true }}
                />

                {/* Rotating inverse ring */}
                <motion.div
                  className="absolute -inset-4 rounded-full border border-white/15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, linear: true }}
                />

                {/* Pulsing glow on photo */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: ['0 0 20px rgba(255,255,255,0.1)', '0 0 40px rgba(255,255,255,0.2)', '0 0 20px rgba(255,255,255,0.1)'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            <p className="text-sm text-gray-400 uppercase tracking-wider font-medium">Journey</p>
            
            <div className="relative space-y-6 pl-8">
              {/* Animated connecting line */}
              <motion.div
                className="absolute left-0 top-0 w-1 bg-gradient-to-b from-white via-white/50 to-transparent rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />

              {timeline.map((event, idx) => (
                <motion.div
                  key={idx}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 + 0.3, duration: 0.6 }}
                  onMouseEnter={() => setHoveredTimeline(idx)}
                  onMouseLeave={() => setHoveredTimeline(null)}
                  variants={timelineItemVariant}
                >
                  {/* Timeline dot with multiple rings */}
                  <motion.div
                    className="absolute -left-9 top-1 w-5 h-5 rounded-full bg-white flex items-center justify-center"
                    whileHover={{ scale: 1.3 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full bg-black"
                      animate={hoveredTimeline === idx ? { scale: [1, 0.5] } : { scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.div>

                  {/* Glow ring when hovered */}
                  <motion.div
                    className="absolute -left-10 -top-1 w-7 h-7 rounded-full border border-white"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={hoveredTimeline === idx ? { scale: 1.5, opacity: 0 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Content card */}
                  <motion.div
                    className="rounded-lg border border-white/10 p-4 premium-bg smart-hover"
                    whileHover={{ 
                      borderColor: 'rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.08)',
                      y: -2
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated top border on hover */}
                    <motion.div
                      className="absolute top-0 left-0 h-0.5 bg-white rounded-t-lg"
                      initial={{ width: 0 }}
                      animate={hoveredTimeline === idx ? { width: '100%' } : { width: 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    <div className="flex items-start gap-3">
                      <motion.div
                        className="text-2xl mt-1"
                        animate={hoveredTimeline === idx ? { scale: 1.2, y: -2 } : { scale: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {event.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.p 
                          className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1"
                          animate={hoveredTimeline === idx ? { color: 'rgba(255,255,255,0.7)' } : { color: 'rgba(107,114,128,0.6)' }}
                        >
                          {event.year}
                        </motion.p>

                        <motion.p 
                          className="font-semibold text-white text-lg"
                          animate={hoveredTimeline === idx ? { x: 4 } : { x: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {event.title}
                        </motion.p>

                        <motion.p 
                          className="text-sm text-gray-400 mt-2"
                          animate={hoveredTimeline === idx ? { opacity: 1 } : { opacity: 0.8 }}
                        >
                          {event.desc}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Background glow effect */}
                  <motion.div
                    className="absolute -inset-x-4 -inset-y-2 rounded-lg bg-white/5 blur-lg -z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={hoveredTimeline === idx ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
