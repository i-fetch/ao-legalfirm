'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, Briefcase, Users2, FileText, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function PracticeAreasPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const practiceAreas = [
    {
      id: 'corporate',
      title: 'Corporate & Commercial Law',
      icon: Briefcase,
      description: 'Strategic counsel for business transactions, contracts, and corporate governance.',
      services: [
        'Mergers & Acquisitions',
        'Contract Negotiation & Drafting',
        'Corporate Restructuring',
        'Business Registration & Compliance',
        'Joint Ventures & Partnerships',
        'Intellectual Property Protection'
      ]
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Property Law',
      icon: FileText,
      description: 'Legal services for property acquisition, development, and transactions.',
      services: [
        'Property Acquisition & Sale',
        'Conveyancing Services',
        'Property Development',
        'Lease Negotiations',
        'Title Investigation & Clearing',
        'Property Dispute Resolution'
      ]
    },
    {
      id: 'litigation',
      title: 'Litigation & Dispute Resolution',
      icon: Shield,
      description: 'Representation in disputes, arbitration, and litigation.',
      services: [
        'Commercial Litigation',
        'Contract Disputes',
        'Alternative Dispute Resolution',
        'Arbitration & Mediation',
        'Debt Recovery',
        'Appellate Practice'
      ]
    },
    {
      id: 'advisory',
      title: 'Legal Advisory & Secretarial',
      icon: Users2,
      description: 'Guidance on regulatory compliance, governance, and corporate administration.',
      services: [
        'Regulatory Compliance',
        'Corporate Governance',
        'Company Secretarial Services',
        'Board Meetings & Minutes',
        'Employment Law Advice',
        'Risk Management Consulting'
      ]
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
      
      <Hero
        title="Practice Areas"
        subtitle="Comprehensive legal solutions across all major practice areas"
        backgroundImage="linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
        height="large"
      />

      {/* Practice Areas */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="corporate" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
              {practiceAreas.map((area) => (
                <TabsTrigger key={area.id} value={area.id} className="text-xs sm:text-sm">
                  {area.title.split(' & ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {practiceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <TabsContent key={area.id} value={area.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                  >
                    {/* Area Header */}
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <Icon className="text-primary flex-shrink-0 mt-1" size={32} />
                        <div>
                          <h2 className="text-3xl font-serif font-bold text-foreground">{area.title}</h2>
                          <p className="text-foreground/70 mt-2">{area.description}</p>
                        </div>
                      </div>
                    </div>

                    {/* Services Grid */}
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Key Services</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {area.services.map((service, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            className="flex gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-foreground/80">{service}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Details Section */}
                    <Card className="p-6 bg-primary/5 border-primary/20">
                      <h3 className="font-semibold text-foreground mb-3">Why Choose Us for {area.title}?</h3>
                      <p className="text-foreground/70 text-sm">
                        Our team of specialized attorneys brings deep expertise and practical experience in {area.title.toLowerCase()}. We combine legal excellence with strategic business insight to deliver tailored solutions that protect your interests and advance your objectives.
                      </p>
                    </Card>

                    {/* CTA */}
                    <Button
                      onClick={() => setConsultationOpen(true)}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center justify-center gap-2"
                    >
                      Discuss Your Needs
                      <ArrowRight size={18} />
                    </Button>
                  </motion.div>
                </TabsContent>
              )
            })}
          </Tabs>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 p-8 rounded-lg bg-primary/10 border border-primary/20 text-center"
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-foreground/70 mb-6">
              Contact us today to discuss how we can help with your legal needs.
            </p>
            <Button
              onClick={() => setConsultationOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  )
}
