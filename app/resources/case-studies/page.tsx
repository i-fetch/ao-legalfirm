'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function CaseStudiesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const caseStudies = [
    {
      id: 1,
      title: 'Successfully Navigated $50M Acquisition',
      description: 'Guided a mid-sized manufacturing company through a complex multi-jurisdictional acquisition.',
      challenge: 'Complex regulatory landscape and multiple stakeholder interests',
      outcome: 'Successfully completed acquisition with favorable terms for all parties',
      industry: 'Manufacturing',
      duration: '8 months'
    },
    {
      id: 2,
      title: 'Property Development Facilitation',
      description: 'Assisted a real estate developer in navigating zoning and regulatory requirements.',
      challenge: 'Complex zoning issues and neighbor opposition',
      outcome: 'Obtained all necessary approvals and cleared title issues',
      industry: 'Real Estate',
      duration: '6 months'
    },
    {
      id: 3,
      title: 'Commercial Dispute Resolution',
      description: 'Resolved a significant commercial dispute through strategic negotiation and mediation.',
      challenge: 'High-value dispute with multiple parties and conflicting interests',
      outcome: 'Achieved favorable settlement within client budget',
      industry: 'Commercial',
      duration: '4 months'
    },
    {
      id: 4,
      title: 'IP Protection for Tech Startup',
      description: 'Established comprehensive IP protection strategy for emerging technology company.',
      challenge: 'Limited budget and need for comprehensive coverage',
      outcome: 'Created scalable IP framework that scaled with company growth',
      industry: 'Technology',
      duration: '3 months'
    },
    {
      id: 5,
      title: 'Corporate Restructuring Success',
      description: 'Guided holding company through complex corporate restructuring.',
      challenge: 'Multiple subsidiaries across jurisdictions with tax implications',
      outcome: 'Successfully restructured operations with tax optimization',
      industry: 'Corporate',
      duration: '12 months'
    },
    {
      id: 6,
      title: 'Contract Negotiation - Enterprise Agreement',
      description: 'Negotiated major enterprise service agreement with favorable terms.',
      challenge: 'Disparate interests and complex service delivery requirements',
      outcome: 'Achieved favorable payment terms and liability protections',
      industry: 'Services',
      duration: '5 months'
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
      
     

      <Hero
                      title="Case Studies"
        subtitle="Learn how we've successfully helped clients achieve their legal objectives"
        image="/hero-section.jpg"
      />
      <main className="min-h-screen bg-background">
        {/* Case Studies */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Success Stories
              </h2>
              <p className="text-lg text-foreground/70">
                See how we've helped clients overcome complex legal challenges.
              </p>
            </motion.div>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 md:p-8 hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {study.title}
                        </h3>
                        <p className="text-foreground/70 mb-4">
                          {study.description}
                        </p>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Challenge</h4>
                            <p className="text-foreground/70">{study.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Outcome</h4>
                            <p className="text-primary">{study.outcome}</p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-1">
                        <div className="space-y-4">
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">Industry</p>
                            <p className="font-semibold text-foreground">{study.industry}</p>
                          </div>
                          <div>
                            <p className="text-sm text-foreground/60 mb-1">Duration</p>
                            <p className="font-semibold text-foreground">{study.duration}</p>
                          </div>
                        </div>
                      </div>
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
                Ready to Achieve Your Legal Goals?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Let us help you succeed. Schedule a consultation with our team today.
              </p>
              <Button
                size="lg"
                onClick={() => setConsultationOpen(true)}
                className="gap-2"
              >
                Schedule Consultation
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
