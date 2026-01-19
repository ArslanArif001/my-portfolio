'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const experiences = [
  {
    title: 'DevOps Engineer',
    company: 'Xperion',
    period: 'Oct 2025 – Present',
    location: 'Islamabad, Pakistan',
    points: [
      'Operate and scale enterprise-grade microservices platforms on AWS EKS supporting business-critical workloads',
      'Extend core platforms with AI/ML capabilities using ECS (GPU), serverless services, and managed AI offerings',
      'Provision and manage multi-environment AWS infrastructure using Terraform and CloudFormation',
      'Design and optimize CI/CD pipelines for apps and AI/ML model releases with automated validation, security checks, rollback strategies, and DevSecOps compliance',
      'Build cloud-native data platforms using S3 data lakes, Redshift, Athena, and OpenSearch',
      'Integrate Amazon SageMaker and Bedrock for AI-powered features',
      'Ensure reliability, observability, and SLO/SLI tracking across critical services',
      'Enforce security, governance, and FinOps best practices',
    ],
  },
  {
    title: 'Senior DevOps Engineer',
    company: 'Softoo',
    period: 'Apr 2025 – Oct 2025',
    location: 'Islamabad, Pakistan',
    points: [
      'Lead DevOps automation using AWS services and ECS, implementing IaC with CloudFormation and Terraform',
      'Optimize cost & performance with Savings Plans, auto-scaling, and right-sizing compute/storage',
      'Embed DevSecOps practices using GuardDuty, AWS Config, and security baselines',
      'Architect multi-region, enterprise-grade serverless systems with Lambda, API Gateway, Step Functions, DynamoDB, and Redis caching layers',
    ],
  },
  {
    title: 'DevOps Engineer',
    company: 'Softoo',
    period: 'Jan 2023 – Mar 2025',
    location: 'Islamabad, Pakistan',
    points: [
      'Designed and maintained CI/CD pipelines with CodePipeline, GitHub Actions, Azure DevOps, reducing deployments by 70%',
      'Migrated monolith apps to microservices using ECS Fargate and Lambda',
      'Implemented observability and SLO/SLI monitoring',
      'Supported ISO 27001 compliance, automated deployments, and DR design principles',
    ],
  },
  {
    title: 'Junior Cloud Engineer',
    company: 'Softoo',
    period: 'Jan 2022 – Dec 2022',
    location: 'Islamabad, Pakistan',
    points: [
      'Built foundational cloud infrastructure (VPC, EC2, RDS, IAM)',
      'Deployed containerized applications on ECS and LightSail',
      'Hosted static websites on S3 with deployment automation',
    ],
  },
  {
    title: 'Lab Trainer',
    company: 'Softoo Bootcamps',
    period: 'Oct 2022 – Mar 2023',
    location: 'Islamabad, Pakistan',
    points: [
      'Delivered hands-on AWS training on Solutions Architect concepts',
      'Mentored students on high availability, cost optimization, and cloud architecture best practices',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="experience" ref={ref} className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-10">
            Professional Experience
          </h2>
          <ol className="relative border-s-2 border-teal/40 dark:border-teal/60">
            {experiences.map((exp, index) => (
              <motion.li
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ms-4 sm:ms-6 mb-12 last:mb-0"
              >
                <div className="absolute -start-2 sm:-start-3 w-4 h-4 sm:w-6 sm:h-6 bg-teal rounded-full ring-6 sm:ring-8 ring-mist dark:ring-navy"></div>
                <div className="p-4 sm:p-6 rounded-xl bg-white dark:bg-slate-850 ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-teal/50 transition-all">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy dark:text-white">
                    {exp.title} · {exp.company}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-white/60 mt-1">
                    {exp.period} · {exp.location}
                  </p>
                  <ul className="mt-3 list-disc pl-4 sm:pl-5 text-slate-700 dark:text-white/80 space-y-2 text-sm sm:text-base">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}

