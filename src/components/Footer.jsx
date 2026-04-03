import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowUp, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'

const Footer = () => {
  const [hoveredLink, setHoveredLink] = React.useState(null)
  const [isScrolling, setIsScrolling] = React.useState(false)

  const scrollToTop = () => {
    setIsScrolling(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setTimeout(() => setIsScrolling(false), 1500)
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/CodingWorld-007', icon: FiGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/amanajjoshi', icon: FiLinkedin },
    { label: 'Resume', href: '/Aman_Joshi_Resume.pdf', icon: FiDownload, download: true },
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
    { label: 'Poetry', href: 'https://aman-joshi-poems.vercel.app/', external: true },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <footer className="relative bg-black overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gradient shimmer line */}
      <motion.div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        {/* Header Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Branding */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="relative inline-block mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-white/10 to-white/5 rounded-lg blur-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <h3 className="text-3xl font-bold text-white relative z-10">Aman Joshi</h3>
            </motion.div>
            
            <motion.p 
              className="text-sm text-gray-400 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Crafting intelligent systems that solve real problems. AI engineer, entrepreneur, educator.
            </motion.p>

            {/* Animated status indicator */}
            <motion.div
              className="flex items-center gap-2 mt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-gray-500">Available for opportunities</span>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : ''}
                  className={`flex items-center gap-2 text-sm ${link.label === 'Poetry' ? 'text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text font-semibold' : 'text-gray-400 hover:text-white'} transition-colors group`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.05, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <motion.span
                    className="w-0 h-px bg-white"
                    whileHover={{ width: 8 }}
                    transition={{ duration: 0.3 }}
                  />
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h4 className="text-sm font-semibold text-white mb-6 uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-3">
              <motion.a
                href="mailto:amanjoshi9891@gmail.com"
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white group"
                whileHover={{ x: 4 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-white"
                  whileHover={{ scale: 1.5 }}
                />
                <span>amanjoshi9891@gmail.com</span>
              </motion.a>
              
              <div className="text-sm text-gray-500">
                <p>📍 India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />

        {/* Social Links with Icons */}
        <motion.div
          className="flex justify-center gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {socialLinks.map((link, idx) => {
            const Icon = link.icon
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.download ? undefined : "_blank"}
                rel={link.download ? undefined : "noopener noreferrer"}
                download={link.download}
                className="relative group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4, duration: 0.5 }}
                onMouseEnter={() => setHoveredLink(link.label)}
                onMouseLeave={() => setHoveredLink(null)}
                whileHover={{ scale: 1.1 }}
              >
                {/* Background glow */}
                <motion.div
                  className="absolute -inset-3 rounded-lg bg-white/10 blur-lg opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Icon container with border */}
                <motion.div
                  className="relative w-10 h-10 rounded-lg border border-white/20 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors premium-bg"
                  whileHover={{ 
                    borderColor: 'rgba(255,255,255,0.5)',
                    backgroundColor: 'rgba(255,255,255,0.08)'
                  }}
                >
                  <motion.div
                    animate={hoveredLink === link.label ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                </motion.div>

                {/* Label tooltip */}
                <AnimatePresence>
                  {hoveredLink === link.label && (
                    <motion.div
                      className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-gray-300 whitespace-nowrap"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.p 
            className="text-xs text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            © {currentYear} Aman Joshi. Built with React, Vite & Framer Motion.
          </motion.p>

          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="relative p-3 rounded-lg border border-white/20 text-gray-400 hover:text-white transition-colors group smart-hover overflow-hidden"
            whileHover={{ 
              borderColor: 'rgba(255,255,255,0.5)',
              y: -4,
              scale: 1.05
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            {/* Multiple animated arrows */}
            <motion.div
              className="relative z-10 flex items-center justify-center"
              animate={isScrolling ? { y: -6 } : { y: [0, -3, 0] }}
              transition={{ duration: isScrolling ? 0.8 : 1.5, repeat: isScrolling ? 0 : Infinity }}
            >
              <FiArrowUp size={20} />
            </motion.div>

            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-lg bg-white/20 blur-lg opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Ripple on click */}
            <AnimatePresence>
              {isScrolling && (
                <motion.div
                  className="absolute inset-0 rounded-lg border border-white/50"
                  initial={{ scale: 0.8, opacity: 1 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom gradient line */}
      <motion.div
        className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
      />
    </footer>
  )
}

export default Footer
