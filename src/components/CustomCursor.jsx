import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Check for interactive elements
    const handleMouseover = (e) => {
      const interactiveElements = [
        'button',
        'a',
        '[role="button"]',
        'input',
        'textarea',
        '.smart-hover',
        '.group'
      ]
      
      if (interactiveElements.some(selector => e.target.matches(selector) || e.target.closest(selector))) {
        setIsHoveringInteractive(true)
      }
    }

    const handleMouseout = () => {
      setIsHoveringInteractive(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseover)
    document.addEventListener('mouseout', handleMouseout)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseover)
      document.removeEventListener('mouseout', handleMouseout)
    }
  }, [])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor circle */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-white/80 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHoveringInteractive ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Outer glow ring */}
      <motion.div
        className="fixed w-10 h-10 rounded-full border border-white/30 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHoveringInteractive ? 1.8 : 1,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
          mass: 0.7,
        }}
      />

      {/* Dot in center */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHoveringInteractive ? 1.2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 30,
          mass: 0.3,
        }}
      />
    </>
  )
}

export default CustomCursor
