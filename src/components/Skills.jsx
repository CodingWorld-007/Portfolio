import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const categories = [
    {
      title: 'Languages',
      skills: ['Python', 'Java', 'C++', 'Kotlin', 'JavaScript', 'SQL', 'R'],
      color: 'from-blue-500/30',
    },
    {
      title: 'Machine Learning',
      skills: ['Classification', 'Computer Vision', 'Data Processing', 'TensorFlow', 'Model Training'],
      color: 'from-purple-500/30',
    },
    {
      title: 'Development',
      skills: ['Android', 'Flask', 'REST APIs', 'Firebase', 'Node.js', 'Backend Systems'],
      color: 'from-pink-500/30',
    },
    {
      title: 'Specializations',
      skills: ['AI Safety', 'Cybersecurity', 'Ethical Hacking', 'Real-time Systems', 'IoT'],
      color: 'from-orange-500/30',
    },
  ]

  const proficiencies = [
    { skill: 'ML Development', level: 94, years: '3+' },
    { skill: 'Python', level: 92, years: '4+' },
    { skill: 'Android Development', level: 88, years: '3+' },
    { skill: 'Computer Vision', level: 90, years: '2+' },
    { skill: 'Cybersecurity', level: 85, years: '2+' },
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
    <section id="skills" className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <motion.div 
            className="w-12 h-1 bg-white"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        {/* Skill Categories Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="border border-white/10 rounded-lg p-8 premium-bg hover:border-white/20 transition-all smart-hover">
                <h3 className="text-lg font-semibold text-white mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-4 py-2 rounded-lg border border-white/10 text-sm text-gray-300 hover:border-white/30 smart-hover"
                      whileHover={{ 
                        scale: 1.05,
                        borderColor: 'rgba(255,255,255,0.3)',
                        backgroundColor: 'rgba(255,255,255,0.05)'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Levels with animated bars */}
        <motion.div
          className="border-t border-white/10 pt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-white mb-8">Proficiency Levels</h3>
          <div className="space-y-8">
            {proficiencies.map((item, idx) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <p className="font-medium text-white">{item.skill}</p>
                    <p className="text-xs text-gray-500">{item.years} years experience</p>
                  </div>
                  <span className="text-lg font-bold text-gray-300">{item.level}%</span>
                </div>
                
                {/* Intelligent proficiency bar */}
                <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-white to-gray-400 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + idx * 0.1, duration: 0.8, ease: 'easeOut' }}
                  />
                  
                  {/* Shimmer effect on bar */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, delay: 0.8 + idx * 0.1, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expertise Summary */}
        <motion.div
          className="mt-16 pt-16 border-t border-white/10 grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {[
            { label: 'Core Skills', value: '15+' },
            { label: 'Years Experience', value: '3+' },
            { label: 'Projects Delivered', value: '6+' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 rounded-lg border border-white/10 premium-bg hover:border-white/20 transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <p className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
