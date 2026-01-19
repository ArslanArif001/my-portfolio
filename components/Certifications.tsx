'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    period: '2023–2026',
    image: '/assets/certs/aws-saa-badge.png',
    description: 'Validated expertise in designing distributed systems on AWS',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    period: '2023–2026',
    image: '/assets/certs/aws-ccp-badge.png',
    description: 'Foundational understanding of AWS cloud services',
  },
  {
    name: 'AWS Educate Badges',
    badges: 'Serverless, Security, Networking, Databases',
    image: '/assets/certs/aws-educate-badge.png',
    description: 'Continuous learning and cloud education',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="certs" ref={ref} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-3">
            AWS Certifications
          </h2>
          <p className="text-slate-700 dark:text-white/80 max-w-3xl mx-auto lg:mx-0 text-sm sm:text-base text-center lg:text-left mb-10">
            Validated expertise in AWS cloud architecture and DevOps practices.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group rounded-2xl bg-white dark:bg-slate-850 ring-1 ring-slate-200 dark:ring-slate-700 p-6 hover:ring-teal/50 hover:shadow-lg transition-all text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="font-semibold text-navy dark:text-white text-base mb-2">{cert.name}</h3>
                {cert.period && (
                  <p className="text-sm text-slate-600 dark:text-white/60 mb-2">{cert.period}</p>
                )}
                {cert.badges && (
                  <p className="text-sm text-slate-600 dark:text-white/60 mb-2">{cert.badges}</p>
                )}
                <p className="text-xs text-slate-500 dark:text-white/50">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

