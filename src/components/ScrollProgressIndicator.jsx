import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ScrollProgressIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-white via-gray-400 to-white z-50 origin-left"
      style={{
        scaleX: scrollProgress / 100,
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 30,
        mass: 0.5,
      }}
    />
  )
}

export default ScrollProgressIndicator
