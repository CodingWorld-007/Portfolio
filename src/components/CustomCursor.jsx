import React, { useEffect, useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  // Use refs to avoid state updates during mousemove (which causes lag)
  const positionRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef(null)

  // Update position smoothly with RAF instead of relying on event frequency
  const updatePosition = useCallback(() => {
    setMousePosition({ ...positionRef.current })
    animationFrameRef.current = requestAnimationFrame(updatePosition)
  }, [])

  useEffect(() => {
    // Simple mousemove that just updates the ref (no state = no lag!)
    const handleMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Optimized interactive element detection - simplified & debounced
    const handleMouseover = (e) => {
      const target = e.target
      const isInteractive = 
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.hasAttribute('role') && target.getAttribute('role') === 'button' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('smart-hover') ||
        target.classList.contains('group') ||
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.smart-hover') ||
        target.closest('.group')
      
      setIsHoveringInteractive(isInteractive)
    }

    const handleMouseout = () => {
      setIsHoveringInteractive(false)
    }

    // Start RAF loop
    animationFrameRef.current = requestAnimationFrame(updatePosition)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseenter', handleMouseEnter)
    window.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleMouseover, { passive: true })
    document.addEventListener('mouseout', handleMouseout, { passive: true })

    return () => {
      cancelAnimationFrame(animationFrameRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseenter', handleMouseEnter)
      window.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleMouseover)
      document.removeEventListener('mouseout', handleMouseout)
    }
  }, [updatePosition])

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* Main cursor circle - smooth linear position, spring for scale */}
      <motion.div
        className="fixed w-6 h-6 rounded-full border-2 border-white/80 pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
          scale: isHoveringInteractive ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: 'tween', duration: 0.02, ease: 'linear' }, // Smooth linear motion
          y: { type: 'tween', duration: 0.02, ease: 'linear' },
          scale: { type: 'spring', stiffness: 700, damping: 25, mass: 0.1 }, // Spring for interaction
          opacity: { duration: 0.15 }
        }}
      />

      {/* Outer glow ring - delayed smooth motion */}
      <motion.div
        className="fixed w-10 h-10 rounded-full border border-white/30 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHoveringInteractive ? 1.8 : 1,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          x: { type: 'tween', duration: 0.04, ease: 'linear' }, // Slight delay for trailing effect
          y: { type: 'tween', duration: 0.04, ease: 'linear' },
          scale: { type: 'spring', stiffness: 600, damping: 20, mass: 0.15 },
          opacity: { duration: 0.15 }
        }}
      />

      {/* Dot in center - snaps to cursor instantly */}
      <motion.div
        className="fixed w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHoveringInteractive ? 1.2 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          x: { type: 'tween', duration: 0.01, ease: 'linear' }, // Ultra-responsive center dot
          y: { type: 'tween', duration: 0.01, ease: 'linear' },
          scale: { type: 'spring', stiffness: 800, damping: 30, mass: 0.05 },
          opacity: { duration: 0.15 }
        }}
      />
    </>
  )
}

export default CustomCursor
