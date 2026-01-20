'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, CheckCircle2, Building2, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function RealEstateLawPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const services = [
    {
      title: 'Property Acquisition & Sale',
      description: 'End-to-end legal services for buying and selling residential and commercial properties.'
    },
    {
      title: 'Conveyancing Services',
      description: 'Complete conveyancing support including documentation, registration, and transfer of property rights.'
    },
    {
      title: 'Property Development',
      description: 'Legal guidance for property development projects, from planning to completion.'
    },
    {
      title: 'Lease Negotiations',
      description: 'Expert negotiation and documentation of commercial and residential lease agreements.'
    },
    {
      title: 'Title Investigation & Clearing',
      description: 'Thorough title searches and resolution of title defects and encumbrances.'
    },
    {
      title: 'Property Dispute Resolution',
      description: 'Resolution of boundary disputes, landlord-tenant issues, and other property conflicts.'
    }
  ]

  const benefits = [
    'Extensive experience in property law and transactions',
    'Deep knowledge of local real estate regulations',
    'Efficient handling of complex property matters',
    'Protection of your property rights and investments'
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />

        <Hero
                title="Real Estate & Property Law"
                subtitle="Comprehensive legal services for property transactions and disputes"
                image="/hero-section.jpg"
            >
            </Hero>
      
     

      <main className="min-h-screen bg-background">
        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-lg text-foreground/70">
                We provide comprehensive real estate legal services for all property matters.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="flex gap-4">
                      <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-foreground/70">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center"
            >
              Why Choose Our Real Estate Practice
            </motion.h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground/70">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Need Real Estate Legal Assistance?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Schedule a consultation with our real estate law specialists.
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
