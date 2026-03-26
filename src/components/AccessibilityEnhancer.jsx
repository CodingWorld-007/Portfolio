import React, { useEffect } from 'react'

const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Add visible focus styles for keyboard navigation
    const style = document.createElement('style')
    style.textContent = `
      /* Visible focus states for better accessibility */
      *:focus-visible {
        outline: 2px solid white;
        outline-offset: 2px;
        border-radius: 2px;
      }

      /* Better focus states for buttons and links */
      button:focus-visible,
      a:focus-visible {
        box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
      }

      /* Input focus states */
      input:focus-visible,
      textarea:focus-visible {
        outline: 2px solid white;
        outline-offset: 1px;
      }

      /* Skip to main content link (hidden but accessible) */
      .skip-to-main {
        position: absolute;
        top: -40px;
        left: 0;
        background: white;
        color: black;
        padding: 8px;
        text-decoration: none;
        z-index: 100;
      }

      .skip-to-main:focus {
        top: 0;
      }

      /* Reduced motion support */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
          scroll-behavior: auto !important;
        }
      }

      /* High contrast mode support */
      @media (prefers-contrast: more) {
        *:focus-visible {
          outline-width: 3px;
          outline-offset: 3px;
        }
      }

      /* Dark mode support (already applied but reinforced) */
      @media (prefers-color-scheme: dark) {
        body {
          background-color: #0a0a0a;
          color: #ffffff;
        }
      }
    `
    document.head.appendChild(style)

    // Enhanced semantic HTML warning for console
    const invalidSemanticElements = document.querySelectorAll('div[role="button"], div[role="link"]')
    if (invalidSemanticElements.length > 0) {
      console.warn('⚠️ Accessibility Warning: Found divs with role attributes. Consider using native HTML elements.')
    }

    // Check for images without alt text
    const imagesWithoutAlt = document.querySelectorAll('img:not([alt])')
    if (imagesWithoutAlt.length > 0) {
      console.warn(`⚠️ Accessibility Warning: Found ${imagesWithoutAlt.length} images without alt text.`)
    }

    // Keyboard trap detection
    const handleKeyboardTrap = (e) => {
      if (e.key === 'Tab') {
        const focusableElements = document.querySelectorAll(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
        )

        if (focusableElements.length === 0) {
          console.warn('⚠️ Accessibility Warning: No focusable elements found.')
        }
      }
    }

    window.addEventListener('keydown', handleKeyboardTrap)

    return () => {
      window.removeEventListener('keydown', handleKeyboardTrap)
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
    </>
  )
}

export default AccessibilityEnhancer
