'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, FileText, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function PublicationsPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const publications = [
    {
      id: 1,
      title: 'Corporate Governance Best Practices Guide',
      description: 'A comprehensive guide to establishing and maintaining strong corporate governance.',
      type: 'Whitepaper',
      year: '2026'
    },
    {
      id: 2,
      title: 'Real Estate Investment Framework',
      description: 'Strategic framework for evaluating and executing real estate investments.',
      type: 'eBook',
      year: '2026'
    },
    {
      id: 3,
      title: 'Dispute Resolution Handbook',
      description: 'Complete guide to alternative dispute resolution methods and their applications.',
      type: 'Handbook',
      year: '2025'
    },
    {
      id: 4,
      title: 'Legal Compliance Checklist for Startups',
      description: 'Essential compliance requirements for startup organizations.',
      type: 'Checklist',
      year: '2025'
    },
    {
      id: 5,
      title: 'Intellectual Property Protection Strategies',
      description: 'Detailed strategies for protecting and monetizing intellectual property.',
      type: 'Guide',
      year: '2025'
    },
    {
      id: 6,
      title: 'Contract Management Best Practices',
      description: 'Framework for effective contract management and risk mitigation.',
      type: 'Whitepaper',
      year: '2025'
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
        <Hero
                title="Legal Publications"
                subtitle="Professional guides, whitepapers, and resources from our expert team"
                image="/hero-section5.jpg"
            >
            </Hero>

    
      
      

      <main className="min-h-screen bg-background">
        {/* Publications */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Available Publications
              </h2>
              <p className="text-lg text-foreground/70">
                Download our professional guides and resources on various legal topics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow flex flex-col">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {pub.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex-grow">
                      {pub.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-grow">
                      {pub.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-foreground/60">
                        {pub.year}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Looking for Custom Research or Analysis?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Contact us to discuss your specific legal research needs.
              </p>
              <Button
                size="lg"
                onClick={() => setConsultationOpen(true)}
                className="gap-2"
              >
                Get in Touch
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  )
}
