'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function MissionPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our dealings, ensuring confidentiality and honest counsel.'
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering exceptional legal services through expertise and meticulous attention to detail.'
    },
    {
      title: 'Accountability',
      description: 'We take responsibility for our advice and actions, serving as trusted partners in our clients\' success.'
    },
    {
      title: 'Innovation',
      description: 'We embrace modern approaches to legal practice, combining traditional wisdom with contemporary solutions.'
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
      
      <Hero
        title="Our Mission & Vision"
        subtitle="Delivering strategic legal excellence that empowers businesses and protects individual interests"
        backgroundImage="linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.3) 100%)"
        height="large"
      />

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-primary">Our Mission</h2>
              <p className="text-foreground/70 leading-relaxed">
                To provide comprehensive, innovative, and client-centric legal solutions that enable our clients to navigate complex business challenges, protect their interests, and achieve their strategic objectives.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We are dedicated to fostering long-term partnerships built on trust, expertise, and a deep understanding of our clients' industries and goals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl font-serif font-bold text-primary">Our Vision</h2>
              <p className="text-foreground/70 leading-relaxed">
                To be recognized as a premier legal firm that sets industry standards for excellence, innovation, and client service while maintaining unwavering commitment to ethical practice.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                We envision a future where our counsel enables businesses to thrive responsibly and individuals to achieve justice and security.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="flex gap-4">
                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                          <p className="text-sm text-foreground/70">{value.description}</p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-lg bg-primary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Ready to Partner with Us?
            </h3>
            <p className="text-foreground/70 mb-6">
              Experience the difference that dedicated legal expertise can make for your business.
            </p>
            <Button
              onClick={() => setConsultationOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2"
            >
              Schedule a Consultation
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  )
}
