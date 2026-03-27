import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiArrowRight, FiCheck, FiX, FiCopy } from 'react-icons/fi'
import useFormValidation from '../hooks/useFormValidation'
import emailjs from 'emailjs-com'

// Initialize EmailJS - Replace with your EmailJS Public Key
// Get it from: https://dashboard.emailjs.com/ (Account → API Keys)
const EMAILJS_PUBLIC_KEY = 'firolP4JZnyBzRVeW'
const EMAILJS_SERVICE_ID = 'service_0d275tc'
const EMAILJS_TEMPLATE_ID = 'template_pxzx0a7'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState(null)
  const [focusedField, setFocusedField] = useState(null)
  const [copiedEmail, setCopiedEmail] = useState(false)
  
  const { validateField, isFormValid } = useFormValidation()

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Real-time validation only after field is touched
    if (touched[name]) {
      const newErrors = validateField(name, { ...formData, [name]: value })
      setErrors(prev => ({ ...prev, ...newErrors }))
    }
  }

  const handleFocus = (field) => {
    setFocusedField(field)
    setTouched(prev => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field) => {
    setFocusedField(null)
    setTouched(prev => ({ ...prev, [field]: true }))
    
    // Validate on blur
    const newErrors = validateField(field, formData)
    setErrors(prev => ({ ...prev, ...newErrors }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all fields
    const nameError = validateField('name', formData)
    const emailError = validateField('email', formData)
    const messageError = validateField('message', formData)
    const allErrors = { ...nameError, ...emailError, ...messageError }
    
    setErrors(allErrors)
    setTouched({ name: true, email: true, message: true })
    
    if (Object.values(allErrors).some(e => e)) {
      return
    }
    
    setStatus('sending')
    
    // Send email via EmailJS
    const templateParams = {
        to_email: 'developer.amanjoshi@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        reply_to: formData.email,
      }

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      .then(() => {
        setStatus('success')
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setErrors({})
          setTouched({})
          setStatus(null)
        }, 2000)
      })
      .catch((error) => {
        console.error('Email send failed:', error)
        setStatus('error')
        setTimeout(() => {
          setStatus(null)
        }, 3000)
      })
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const links = [
    { icon: FiMail, label: 'Email', value: 'developer.amanjoshi@gmail.com', href: 'mailto:developer.amanjoshi@gmail.com' },
    { icon: FiLinkedin, label: 'LinkedIn', value: '@amanajjoshi', href: 'linkedin.com/in/amanajjoshi' },
    { icon: FiGithub, label: 'GitHub', value: 'View Profile', href: 'https://github.com/CodingWorld-007' },
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

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <motion.div 
            className="w-12 h-1 bg-white"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-300 mb-12">
              I'm always interested in hearing about new projects and opportunities. Whether you want to discuss AI safety, collaborate on a project, or just grab coffee, feel free to reach out!
            </p>

            <motion.div 
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
            >
              {links.map((link, idx) => (
                <motion.div
                  key={link.label}
                  variants={linkVariants}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4"
                >
                  {link.label === 'Email' ? (
                    <motion.button
                      onClick={() => copyToClipboard(link.value)}
                      className="w-full flex items-center gap-4 p-4 rounded-lg border border-white/10 premium-bg smart-hover group overflow-hidden relative"
                      whileHover={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <link.icon className="text-gray-400 group-hover:text-white transition-colors relative z-10" size={24} />
                      </motion.div>
                      
                      <div className="relative z-10 flex-1 text-left">
                        <p className="text-sm text-gray-500">{link.label}</p>
                        <p className="text-white font-medium">{link.value}</p>
                      </div>
                      
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={copiedEmail ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-green-400 relative z-10"
                      >
                        <FiCheck size={20} />
                      </motion.div>

                      <AnimatePresence mode="wait">
                        {!copiedEmail && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gray-500 group-hover:text-white transition-colors relative z-10"
                          >
                            <FiCopy size={18} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  ) : (
                    <motion.a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center gap-4 p-4 rounded-lg border border-white/10 premium-bg smart-hover group overflow-hidden relative"
                      whileHover={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      >
                        <link.icon className="text-gray-400 group-hover:text-white transition-colors relative z-10" size={24} />
                      </motion.div>
                      
                      <div className="relative z-10 flex-1 text-left">
                        <p className="text-sm text-gray-500">{link.label}</p>
                        <p className="text-white font-medium">{link.value}</p>
                      </div>
                      
                      <motion.div
                        initial={{ x: 0, opacity: 0 }}
                        whileHover={{ x: 4, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="text-gray-500 group-hover:text-white transition-colors relative z-10"
                      >
                        <FiArrowRight />
                      </motion.div>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {['name', 'email', 'message'].map((fieldName, idx) => (
              <motion.div
                key={fieldName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm text-gray-300 capitalize">{fieldName}</label>
                  <AnimatePresence mode="wait">
                    {touched[fieldName] && !errors[fieldName] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1 text-xs text-green-400"
                      >
                        <FiCheck size={14} />
                      </motion.div>
                    )}
                    {errors[fieldName] && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-1 text-xs text-red-400"
                      >
                        <FiX size={14} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="relative">
                  {fieldName === 'message' ? (
                    <textarea
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(fieldName)}
                      onBlur={() => handleBlur(fieldName)}
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border outline-none transition-all resize-none focus:bg-white/10 ${
                        errors[fieldName] && touched[fieldName]
                          ? 'border-red-500/50 focus:border-red-500'
                          : touched[fieldName] && !errors[fieldName]
                          ? 'border-green-500/50 focus:border-green-500'
                          : 'border-white/10 focus:border-white/20'
                      }`}
                      placeholder="Your message here... (min 10 characters)"
                    />
                  ) : (
                    <input
                      type={fieldName === 'email' ? 'email' : 'text'}
                      name={fieldName}
                      value={formData[fieldName]}
                      onChange={handleChange}
                      onFocus={() => handleFocus(fieldName)}
                      onBlur={() => handleBlur(fieldName)}
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border outline-none transition-all focus:bg-white/10 ${
                        errors[fieldName] && touched[fieldName]
                          ? 'border-red-500/50 focus:border-red-500'
                          : touched[fieldName] && !errors[fieldName]
                          ? 'border-green-500/50 focus:border-green-500'
                          : 'border-white/10 focus:border-white/20'
                      }`}
                      placeholder={fieldName === 'email' ? 'your@email.com' : 'Your name'}
                    />
                  )}
                  
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white via-gray-400 to-white rounded-full"
                    initial={{ width: 0 }}
                    animate={focusedField === fieldName ? { width: '100%' } : { width: 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Message character count for textarea */}
                  {fieldName === 'message' && (
                    <motion.p className="text-xs text-gray-500 mt-1">
                      {formData.message.length} / 500 characters
                    </motion.p>
                  )}
                </div>

                {/* Animated error message */}
                <AnimatePresence mode="wait">
                  {errors[fieldName] && touched[fieldName] && (
                    <motion.p
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-red-400 mt-1.5 flex items-center gap-1"
                    >
                      <FiX size={12} /> {errors[fieldName]}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            <motion.button
              type="submit"
              disabled={status === 'sending' || (touched.name && errors.name) || (touched.email && errors.email) || (touched.message && errors.message)}
              className="w-full px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
              whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
              whileTap={status !== 'sending' ? { scale: 0.98 } : {}}
            >
              <motion.span
                animate={status === 'sending' ? { opacity: [1, 0.5, 1] } : { opacity: 1 }}
                transition={{ duration: 1.5, repeat: status === 'sending' ? Infinity : 0 }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </motion.span>
            </motion.button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  ✓ Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  ✗ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
