'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    title: 'Cloud Platforms',
    content: (
      <>
        <p><strong>AWS:</strong> EC2, S3, IAM, VPC, Subnets, Route Tables, Security Groups, NACLs, VPC Peering, RDS, Lambda, CloudFormation, CloudWatch, Route 53, ALB, Auto Scaling, SNS, SQS, EKS, ECS, ECR, Fargate, DynamoDB, Aurora, Redshift, CloudFront, Secrets Manager, Parameter Store, AppConfig, WAF, GuardDuty, Step Functions, System Manager, KMS, OpenSearch, Athena, SES, Security Hub, Organizations, Amplify, AWS SAM, AWS Inspector, AWS Shield, SageMaker, Bedrock</p>
        <p className="mt-2"><strong>Azure:</strong> VMs, Virtual Network, NSGs, Azure DevOps, Azure Pipelines, App Service, Functions, Blob Storage, Cosmos DB, Key Vault, SQL Database, Application Gateway, Azure Monitor</p>
      </>
    ),
  },
  {
    title: 'CI/CD & DevOps Tools',
    content: 'Jenkins, GitHub Actions, AWS CodePipeline, CodeBuild, CodeDeploy, Azure DevOps Pipelines, Bitbucket Pipelines, GitLab CI/CD, ArgoCD',
  },
  {
    title: 'Infrastructure as Code',
    content: 'Terraform, CloudFormation, Ansible, Serverless Framework',
  },
  {
    title: 'Containers & Orchestration',
    content: 'Docker, Kubernetes (deployments, services, Helm charts, kubectl), EKS',
  },
  {
    title: 'Scripting & Automation',
    content: 'Bash, Python, PowerShell',
  },
  {
    title: 'Monitoring & Observability',
    content: 'Prometheus, Grafana, CloudWatch, Azure Monitor, Application Insights, ELK Stack, Datadog, New Relic, SLO/SLI tracking, alerting strategy',
  },
  {
    title: 'Operating Systems & Networking',
    content: 'Linux (Ubuntu, CentOS, RHEL), DNS, TCP/IP, firewalls, VPN, load balancing, high availability, disaster recovery, enterprise networking',
  },
  {
    title: 'Security & Compliance',
    content: 'IAM best practices, Secrets Management (AWS Secrets Manager, HashiCorp Vault, Parameter Store, AppConfig), TLS/SSL, key rotation, least privilege access, DevSecOps fundamentals, ISO 27001, cloud governance',
  },
  {
    title: 'Database & Caching',
    content: 'RDS, DynamoDB, Aurora, Redshift, Cosmos DB, S3 data lakes, Redis/ElastiCache',
  },
  {
    title: 'Additional Tools',
    content: 'SonarQube, Nexus, Terraform Cloud, Helm, ArgoCD',
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" ref={ref} className="py-16 sm:py-20 bg-white dark:bg-slate-850">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy dark:text-white text-center lg:text-left mb-3">
            Technical Skills
          </h2>
          <p className="text-slate-700 dark:text-white/80 max-w-3xl mx-auto lg:mx-0 text-sm sm:text-base text-center lg:text-left mb-10">
            Comprehensive expertise across cloud platforms, DevOps tools, and enterprise technologies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="p-4 sm:p-6 rounded-2xl bg-mist dark:bg-navy ring-1 ring-slate-200 dark:ring-slate-700 hover:ring-teal/50 transition-all cursor-default"
              >
                <h3 className="font-semibold text-navy dark:text-teal text-base mb-3">{skill.title}</h3>
                <div className="text-xs sm:text-sm text-slate-700 dark:text-white/80 leading-relaxed">
                  {typeof skill.content === 'string' ? <p>{skill.content}</p> : skill.content}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

