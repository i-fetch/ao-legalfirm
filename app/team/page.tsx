'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { ArrowRight, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TeamPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const team = {
    partners: [
      {
        name: 'Adeniyi Okafor, Esq.',
        title: 'Founding Partner',
        specialty: 'Corporate & Commercial Law',
        bio: '20+ years of experience in corporate law, mergers & acquisitions, and strategic business advisory. Adeniyi is a thought leader in Nigerian commercial law.',
        credentials: 'LLB (University of Lagos), BL (Nigerian Law School), LLM (Harvard Law School)'
      },
      {
        name: 'Chioma Adeyemi, Esq.',
        title: 'Senior Partner',
        specialty: 'Litigation & Dispute Resolution',
        bio: '18+ years of litigation experience with a strong track record in commercial disputes and appellate practice. Known for strategic advocacy.',
        credentials: 'LLB (Obafemi Awolowo University), BL (Nigerian Law School)'
      },
      {
        name: 'Tunde Bello, Esq.',
        title: 'Partner, Real Estate',
        specialty: 'Real Estate & Property Law',
        bio: 'Specialized in large-scale real estate transactions, property development, and conveyancing. Manages complex multi-party transactions.',
        credentials: 'LLB (University of Ibadan), BL (Nigerian Law School), Certified Real Estate Practitioner'
      }
    ],
    associates: [
      {
        name: 'Zainab Hassan, Esq.',
        title: 'Senior Associate',
        specialty: 'Corporate Governance & Compliance',
        bio: 'Provides innovative solutions in corporate governance, regulatory compliance, and company secretarial services.',
        credentials: 'LLB (Ahmadu Bello University), BL (Nigerian Law School)'
      },
      {
        name: 'Kunle Oluwafemi, Esq.',
        title: 'Associate',
        specialty: 'Corporate Law & Contracts',
        bio: 'Specializes in contract drafting, business registration, and commercial transactions.',
        credentials: 'LLB (Lagos State University), BL (Nigerian Law School)'
      },
      {
        name: 'Amara Eze, Esq.',
        title: 'Associate',
        specialty: 'Litigation & ADR',
        bio: 'Handles commercial litigation matters and alternative dispute resolution proceedings.',
        credentials: 'LLB (University of Nigeria), BL (Nigerian Law School)'
      }
    ]
  }

  const TeamCard = ({ member, index }: { member: typeof team.partners[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 hover:shadow-lg transition-shadow h-full">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-foreground text-lg">{member.name}</h3>
            <p className="text-sm text-primary font-medium">{member.title}</p>
            <p className="text-xs text-foreground/60 mt-1">{member.specialty}</p>
          </div>
          <p className="text-sm text-foreground/70">{member.bio}</p>
          <div className="pt-3 border-t border-border/30">
            <p className="text-xs text-foreground/60">{member.credentials}</p>
          </div>
          <div className="flex gap-2 pt-2">
            <button className="text-foreground/60 hover:text-primary transition-colors">
              <Linkedin size={16} />
            </button>
            <button className="text-foreground/60 hover:text-primary transition-colors">
              <Mail size={16} />
            </button>
          </div>
        </div>
      </Card>
    </motion.div>
  )

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
              Our Team
            </h1>
            <p className="text-lg text-foreground/70">
              Experienced legal professionals dedicated to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="partners" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="partners">Partners</TabsTrigger>
              <TabsTrigger value="associates">Associates</TabsTrigger>
            </TabsList>

            <TabsContent value="partners" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Senior Partners</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {team.partners.map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="associates" className="space-y-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8">Associates</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {team.associates.map((member, index) => (
                    <TeamCard key={index} member={member} index={index} />
                  ))}
                </div>
              </motion.div>
            </TabsContent>
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
              Meet Our Team
            </h3>
            <p className="text-foreground/70 mb-6">
              Connect with our experienced attorneys and discuss how we can serve you.
            </p>
            <Button
              onClick={() => setConsultationOpen(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center gap-2"
            >
              Schedule a Meeting
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
