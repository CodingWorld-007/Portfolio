import React, { useEffect, useState } from 'react'

const ResponsiveOptimizer = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    isTouchDevice: false,
    hasReducedMotion: false,
    isHighDPI: false,
    screenWidth: 0,
  })

  useEffect(() => {
    const updateDeviceInfo = () => {
      const screenWidth = window.innerWidth
      const isMobile = screenWidth < 768
      const isTablet = screenWidth >= 768 && screenWidth < 1024
      const isDesktop = screenWidth >= 1024
      const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches
      const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const isHighDPI = window.devicePixelRatio >= 2

      const info = {
        isMobile,
        isTablet,
        isDesktop,
        isTouchDevice,
        hasReducedMotion,
        isHighDPI,
        screenWidth,
      }

      setDeviceInfo(info)

      // Store in window for component access
      window.__deviceInfo = info

      // Apply dynamic optimizations
      if (isMobile || isTablet) {
        document.documentElement.setAttribute('data-device', 'mobile')
      } else {
        document.documentElement.setAttribute('data-device', 'desktop')
      }

      if (hasReducedMotion) {
        document.documentElement.setAttribute('data-motion', 'reduce')
      }

      if (isTouchDevice) {
        document.documentElement.setAttribute('data-touch', 'true')
      }
    }

    // Initial check
    updateDeviceInfo()

    // Listen for window resize
    window.addEventListener('resize', updateDeviceInfo)

    // Listen for motion preference changes
    const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionMediaQuery.addEventListener('change', updateDeviceInfo)

    return () => {
      window.removeEventListener('resize', updateDeviceInfo)
      motionMediaQuery.removeEventListener('change', updateDeviceInfo)
    }
  }, [])

  return null // This component only handles device detection
}

export default ResponsiveOptimizer
