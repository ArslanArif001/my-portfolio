'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function Hero() {
  return (
    <section id="home" className="bg-navy dark:bg-ink text-white pt-[calc(var(--nav-height)+56px)] pb-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={itemVariants} className="text-center lg:text-left">
            <motion.p
              className="text-teal font-semibold text-sm sm:text-base mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              AWS Certified DevOps Engineer
            </motion.p>
            <motion.h1
              className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Hi, I'm <span className="text-teal">Arslan Arif</span>
            </motion.h1>
            <motion.p
              className="mt-4 text-xl sm:text-2xl text-teal font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Building and Scaling Secure, High-Performance Cloud Platforms
            </motion.p>
            <motion.p
              className="mt-3 text-white/80 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              AWS & Azure | DevOps & Cloud Automation Specialist
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-teal text-navy font-semibold hover:bg-teal/90 transition-colors text-center shadow-glow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-xl ring-1 ring-white/20 hover:ring-teal/50 transition-all text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </motion.div>
            <motion.div
              className="mt-8 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-white/80 text-sm sm:text-base justify-center lg:justify-start flex-wrap">
                <a
                  href="mailto:arslanarif5230@gmail.com"
                  className="flex items-center gap-2 hover:text-teal transition-colors group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>arslanarif5230@gmail.com</span>
                </a>
                <a
                  href="tel:+923053007088"
                  className="flex items-center gap-2 hover:text-teal transition-colors group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+92 305 3007088</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/arslan-ariff"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal transition-colors group"
                >
                  <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <div className="flex items-center gap-2 text-white/80">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Islamabad, Pakistan</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            className="order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative max-w-sm sm:max-w-md mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src="/assets/profile-placeholder.jpg"
                  alt="Arslan Arif"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-3xl ring-1 ring-white/10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 bg-teal text-navy rounded-2xl px-4 py-3 font-semibold shadow-glow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                Available for Opportunities
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

