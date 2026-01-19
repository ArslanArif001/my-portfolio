'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const softSkills = [
  { name: 'Agile & Scrum', description: 'Methodologies' },
  { name: 'Leadership & Mentoring', description: 'Team development' },
  { name: 'Incident Management', description: 'Awareness & response' },
  { name: 'Communication', description: 'Strong documentation' },
  { name: 'Collaboration', description: 'Cross-team problem-solving' },
]

export default function SoftSkills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="soft-skills" ref={ref} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-10">
            Soft Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-slate-850 ring-1 ring-slate-200 dark:ring-slate-700 text-center hover:ring-teal/50 hover:shadow-lg transition-all"
              >
                <h3 className="font-semibold text-navy dark:text-teal text-base mb-2">{skill.name}</h3>
                <p className="text-sm text-slate-600 dark:text-white/60">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

