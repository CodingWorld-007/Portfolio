import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgressIndicator from './components/ScrollProgressIndicator'
import KeyboardNavigation from './components/KeyboardNavigation'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import ResponsiveOptimizer from './components/ResponsiveOptimizer'

export default function App() {
  useEffect(() => {
    // Performance optimization: Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--motion-reduce', '1')
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full overflow-hidden"
    >
      <AccessibilityEnhancer />
      <ResponsiveOptimizer />
      <CustomCursor />
      <ScrollProgressIndicator />
      <KeyboardNavigation />
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </motion.div>
  )
}
