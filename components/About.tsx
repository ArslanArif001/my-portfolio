'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-8"
          >
            Professional Summary
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-white dark:bg-slate-850 ring-1 ring-slate-200 dark:ring-slate-700 shadow-lg"
          >
            <motion.p
              className="text-slate-700 dark:text-white/80 text-sm sm:text-base leading-relaxed mb-6"
              variants={itemVariants}
            >
              AWS Certified DevOps Engineer with <strong className="text-navy dark:text-teal">4+ years of experience</strong> building, deploying, and operating secure, scalable cloud platforms across AWS and Azure.
            </motion.p>

            <motion.h3
              className="font-semibold text-navy dark:text-teal text-lg mb-4"
              variants={itemVariants}
            >
              Specialized In:
            </motion.h3>
            <motion.div
              className="grid sm:grid-cols-2 gap-4 mb-6"
              variants={itemVariants}
            >
              <ul className="space-y-2 text-slate-700 dark:text-white/80 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">▸</span>
                  <span>Serverless and container-based architectures (EKS, Lambda, ECS, Fargate)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">▸</span>
                  <span>CI/CD automation and DevSecOps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">▸</span>
                  <span>High availability, disaster recovery, and FinOps optimization</span>
                </li>
              </ul>
              <ul className="space-y-2 text-slate-700 dark:text-white/80 text-sm sm:text-base">
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">▸</span>
                  <span>Observability, SLO/SLI tracking, and cloud governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">▸</span>
                  <span>Performance tuning and rapid deployments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal mt-1">▸</span>
                  <span>Mentoring teams and implementing enterprise-level DevOps practices</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="pt-4 border-t border-slate-200 dark:border-slate-700"
              variants={itemVariants}
            >
              <p className="text-slate-700 dark:text-white/80 text-sm sm:text-base">
                <strong className="text-navy dark:text-teal">Proven impact</strong> in performance tuning, rapid deployments, mentoring teams, and implementing enterprise-level DevOps practices.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

