import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Arslan Arif – AWS Certified DevOps Engineer',
  description: 'Portfolio of Arslan Arif – AWS Certified DevOps Engineer specializing in EKS, serverless architectures, CI/CD, Terraform, DevSecOps, and cloud-native AI/ML solutions.',
  icons: '/favicon.ico',
  openGraph: {
    title: 'Arslan Arif – AWS Certified DevOps Engineer',
    description: '4+ years building secure, scalable cloud platforms on AWS & Azure | Kubernetes | Serverless | IaC | Observability',
    type: 'website',
    images: ['/assets/og-cover.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Arslan Arif",
              "jobTitle": "AWS Certified DevOps Engineer",
              "url": "https://yourdomain.com",
              "email": "mailto:arslanarif5230@gmail.com",
              "telephone": "+923053007088",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Islamabad",
                "addressCountry": "PK"
              },
              "sameAs": ["https://www.linkedin.com/in/arslan-ariff"]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

