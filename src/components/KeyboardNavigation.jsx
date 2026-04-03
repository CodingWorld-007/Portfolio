import React, { useEffect } from 'react'

const KeyboardNavigation = () => {
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Cmd/Ctrl + K or / for quick navigation
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        showCommandPalette()
      }

      // / key for navigation menu
      if (e.key === '/' && !isInputFocused()) {
        e.preventDefault()
        showCommandPalette()
      }

      // Arrow keys for section navigation
      if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !isInputFocused()) {
        navigateSection(e.key === 'ArrowDown' ? 'next' : 'prev')
      }

      // Home and End keys
      if (e.key === 'Home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      if (e.key === 'End') {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' })
      }

      // H key for hero, A for about, W for work, S for skills, C for contact
      if (!isInputFocused()) {
        const sectionMap = {
          'h': 'hero',
          'a': 'about',
          'w': 'work',
          's': 'skills',
          'c': 'contact',
        }

        if (sectionMap[e.key.toLowerCase()]) {
          e.preventDefault()
          navigateToSection(sectionMap[e.key.toLowerCase()])
        }
      }

      // Tab key navigation (native support)
      if (e.key === 'Tab') {
        const focusedElement = document.activeElement
        if (focusedElement) {
          focusedElement.style.outline = '2px solid white'
          focusedElement.style.outlineOffset = '2px'
        }
      }
    }

    const showCommandPalette = () => {
      console.log('Command Palette: Press H=Hero, A=About, W=Work, S=Skills, C=Contact')
      // Optional: implement visual command palette UI here
    }

    const isInputFocused = () => {
      const activeElement = document.activeElement
      return activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA')
    }

    const navigateSection = (direction) => {
      const sections = ['hero', 'about', 'work', 'skills', 'contact', 'footer']
      const currentScroll = window.scrollY
      const viewportHeight = window.innerHeight

      let closestSection = 0
      let minDistance = Infinity

      const sectionElements = sections.map(id => {
        const el = document.getElementById(id)
        return el ? { id, offset: el.offsetTop } : null
      }).filter(Boolean)

      sectionElements.forEach((section) => {
        const distance = Math.abs(section.offset - currentScroll)
        if (distance < minDistance) {
          minDistance = distance
          closestSection = sectionElements.indexOf(section)
        }
      })

      let nextSection = direction === 'next' 
        ? (closestSection + 1) % sectionElements.length 
        : (closestSection - 1 + sectionElements.length) % sectionElements.length

      if (sectionElements[nextSection]) {
        const targetOffset = sectionElements[nextSection].offset
        window.scrollTo({ top: targetOffset, behavior: 'smooth' })
      }
    }

    const navigateToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return null // This component only handles keyboard events
}

export default KeyboardNavigation
