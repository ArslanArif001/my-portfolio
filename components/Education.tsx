'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="education" ref={ref} className="py-16 sm:py-20 bg-white dark:bg-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-10">
            Education
          </h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl bg-mist dark:bg-navy ring-1 ring-slate-200 dark:ring-slate-700 p-6 sm:p-8 lg:p-10 shadow-lg"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy dark:text-white mb-2">
              Bachelor of Science in Computer Engineering
            </h3>
            <p className="text-slate-700 dark:text-white/80 text-base sm:text-lg font-medium mb-1">
              COMSATS University, Islamabad
            </p>
            <p className="text-slate-600 dark:text-white/60 text-sm sm:text-base">
              Sep 2017 – Sep 2021 | CGPA: 3.34
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

