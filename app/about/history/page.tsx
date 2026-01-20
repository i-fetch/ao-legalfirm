'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { ArrowRight, Award, Users, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HistoryPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const milestones = [
    {
      year: '2015',
      title: 'Founded',
      description: 'AO Legal established with a vision to deliver world-class legal services.'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Expanded practice areas and opened corporate advisory division.'
    },
    {
      year: '2019',
      title: 'Recognition',
      description: 'Recognized as a leading legal firm by industry bodies and publications.'
    },
    {
      year: '2021',
      title: 'Innovation',
      description: 'Launched digital legal solutions and modernized client services.'
    },
    {
      year: '2023',
      title: 'Growth',
      description: 'Expanded team and launched international legal collaboration network.'
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Awarded Best Legal Firm for Corporate Practice and Client Service.'
    }
  ]

  const achievements = [
    {
      icon: Trophy,
      title: 'Industry Awards',
      description: '15+ awards for legal excellence and innovation'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ legal professionals with specialized expertise'
    },
    {
      icon: Award,
      title: 'Client Success',
      description: '500+ satisfied clients across various sectors'
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              History & Values
            </h1>
            <p className="text-lg text-foreground/70">
              A journey of excellence, integrity, and unwavering commitment to legal excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* About the Firm */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground">About AO Legal</h2>
            <p className="text-foreground/70 leading-relaxed text-lg">
              Founded in 2015, AO Legal has established itself as a premier legal practice dedicated to delivering exceptional counsel and strategic solutions. Our firm brings together accomplished legal minds with diverse backgrounds and specializations.
            </p>
            <p className="text-foreground/70 leading-relaxed text-lg">
              With a commitment to innovation and client-centric service, we have successfully served hundreds of clients, from startups to multinational corporations, in navigating complex legal landscapes and achieving their business objectives.
            </p>
          </motion.div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Key Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                      <Icon className="text-primary mx-auto mb-4" size={32} />
                      <h3 className="font-semibold text-foreground mb-2">{achievement.title}</h3>
                      <p className="text-sm text-foreground/70">{achievement.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">Our Journey</h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-1 h-12 bg-primary/20 my-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="font-semibold text-foreground text-lg">{milestone.title}</h3>
                    <p className="text-foreground/70 mt-2">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="p-8 rounded-lg bg-primary/10 border border-primary/20 text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Join Our Community
            </h3>
            <p className="text-foreground/70 mb-6">
              Experience the AO Legal difference and become part of our success story.
            </p>
            <Button
              onClick={() => setConsultationOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2"
            >
              Get Started Today
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
