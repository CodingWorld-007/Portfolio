import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'

const Hero = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 60,
        damping: 15,
      },
    },
  }

  return (
    <section id="home" className="relative min-h-screen pt-40 px-4 flex items-center justify-center overflow-hidden">
      {/* Intelligent background gradient */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, transparent 100%)',
          y: scrollY * 0.5,
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge with smart animation */}
        <motion.div
          className="inline-block mb-6"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
        >
          <div className="px-4 py-2 rounded-full border border-white/20 premium-bg">
            <span className="text-xs font-medium text-gray-300 tracking-widest uppercase">
              Available for exciting projects
            </span>
          </div>
        </motion.div>

        {/* Main Heading with sophisticated animation */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Crafting
            </motion.span>
            <motion.span
              className="block text-gradient"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Intelligent Systems
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle with intelligent copy */}
        <motion.p
          className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          AI & ML engineer building safety-critical systems. When engineering meets innovation, we create solutions that matter. Founder of Virtual Look. Patent holder. 2000+ students taught.
        </motion.p>

        {/* CTA with micro-interactions */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="#work"
            className="px-8 py-3 rounded-lg bg-white text-black font-medium flex items-center justify-center gap-2 group smart-hover"
            whileHover={{ scale: 1.05, backgroundColor: '#f0f0f0' }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Explore Work</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FiArrowRight size={18} />
            </motion.div>
          </motion.a>
          <motion.a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white/5 transition-colors"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Stats row with revealing animation */}
        <motion.div
          className="mt-16 pt-16 border-t border-white/10 grid grid-cols-3 md:grid-cols-5 gap-8"
          variants={itemVariants}
        >
          {[
            { value: '5+', label: 'Projects' },
            { value: '2', label: 'Patents' },
            { value: '92%', label: 'ML Accuracy' },
            { value: '2k+', label: 'Students' },
            { value: 'G20', label: 'Award' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Smart scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ opacity: 1 - scrollY / 400 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
            <div className="w-6 h-10 border border-gray-600 rounded-full flex justify-center p-2">
              <motion.div
                className="w-1 h-2 bg-white rounded-full"
                animate={{ y: [2, 6, 2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
