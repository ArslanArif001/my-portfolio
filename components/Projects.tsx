'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const projects = [
  {
    name: 'The Nursery App (TNA)',
    description: 'Event-driven serverless system using Lambda, SQS, Step Functions, DynamoDB. Automated deployments, Redis caching, observability, multi-environment operations, DR strategies.',
    image: '/assets/projects/tna-placeholder.jpg',
    tags: ['Lambda', 'SQS', 'Step Functions', 'DynamoDB', 'Redis'],
  },
  {
    name: 'YANI – AI-Powered Compliance Platform',
    description: 'Azure infrastructure with Terraform and DevOps pipelines, secrets management with Key Vault, centralized logging with Monitor, enterprise networking setup.',
    image: '/assets/projects/yani-placeholder.jpg',
    tags: ['Azure', 'Terraform', 'Key Vault', 'Azure Monitor'],
  },
  {
    name: 'Priveal – Private Markets Platform',
    description: 'Fully serverless backend with Lambda, API Gateway, S3, DynamoDB; Redis caching, CI/CD pipelines, CloudTrail auditing, cost-aware scaling.',
    image: '/assets/projects/priveal-placeholder.jpg',
    tags: ['Serverless', 'API Gateway', 'DynamoDB', 'CloudTrail'],
  },
  {
    name: 'USF – Universal Service Fund (Phase 1 & 2)',
    description: 'Phase 1 – Laravel on ECS with CI/CD; Phase 2 – serverless app with API Gateway, Lambda, DynamoDB, S3 data lake, Athena + Power BI, IAM & DR implementation.',
    image: '/assets/projects/usf-placeholder.jpg',
    tags: ['ECS', 'Lambda', 'Athena', 'Power BI'],
  },
  {
    name: 'Vvast – Shopify Backend Integrations',
    description: 'Real-time integration flows with EventBridge, Lambda, DynamoDB; DLQs, retries, CloudWatch alarms, SLO/SLI monitoring, automated CI/CD pipelines.',
    image: '/assets/projects/vvast-placeholder.jpg',
    tags: ['EventBridge', 'Lambda', 'SLO/SLI', 'CloudWatch'],
  },
  {
    name: 'Easefix – Local Professionals Marketplace',
    description: 'Migrated to scalable EC2 clusters, optimized RDS, blue/green deployments, end-to-end observability, WAF & GuardDuty security, automated secret rotation.',
    image: '/assets/projects/easefix-placeholder.jpg',
    tags: ['EC2', 'RDS', 'WAF', 'GuardDuty', 'Blue/Green'],
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 bg-white dark:bg-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-3">
            Selected Projects
          </h2>
          <p className="text-slate-700 dark:text-white/80 max-w-3xl mx-auto lg:mx-0 text-sm sm:text-base text-center lg:text-left mb-10">
            Enterprise-grade cloud platforms and infrastructure solutions I've designed and implemented.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl bg-white dark:bg-navy ring-1 ring-slate-200 dark:ring-slate-700 overflow-hidden hover:ring-teal/50 hover:shadow-lg transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="font-semibold text-navy dark:text-white text-lg mb-2">{project.name}</h3>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-white/80 leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-mist dark:bg-slate-850 text-slate-700 dark:text-white/80 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

