'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  ArrowRight,
  Scale,
  Building2,
  Handshake,
  Briefcase,
  Target,
  Eye,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'

interface PracticeArea {
  icon: React.ComponentType<any>
  title: string
  description: string
}

interface WhyChooseItem {
  title: string
  description: string
}

interface TeamMember {
  name: string
  title: string
  bio: string
}

interface MissionItem {
  icon: React.ComponentType<any>
  title: string
  description: string
}

export default function Home() {
  const [consultationOpen, setConsultationOpen] = useState<boolean>(false)

  const { scrollY } = useScroll()

  // Multi-layer parallax effects
  const heroY = useTransform(scrollY, [0, 800], [0, 300])
  const overlayOpacity = useTransform(scrollY, [0, 500], [0.4, 0.7])
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1])
  const floatingY1 = useTransform(scrollY, [0, 800], [0, 50])
  const floatingY2 = useTransform(scrollY, [0, 800], [0, -50])

  const practiceAreas: PracticeArea[] = [
    { icon: Building2, title: 'Corporate & Commercial Law', description: 'Strategic counsel for business transactions, contracts, and corporate governance.' },
    { icon: Briefcase, title: 'Real Estate & Property Law', description: 'Legal services for property acquisition, development, and transactions.' },
    { icon: Scale, title: 'Litigation & Dispute Resolution', description: 'Representation in disputes, arbitration, and litigation.' },
    { icon: Handshake, title: 'Legal Advisory & Company Secretarial', description: 'Guidance on regulatory compliance, governance, and corporate administration in Nigeria.' }
  ]

  const missionItems: MissionItem[] = [
    { icon: Target, title: 'Our Mission', description: 'Our mission is to provide our clients with professional legal services of superior quality while exceeding their expectations and adding immeasurable value. The firm understands the sensitive requirements of our clients and it is this understanding that has made us what we are today.' },
    { icon: Eye, title: 'Our Vision', description: 'To be the most trusted and innovative legal partner for corporations, investors, and entrepreneurs seeking strategic growth.' },
    { icon: Heart, title: 'Our Values', description: 'Excellence, integrity, innovation, and client-centricity guide every decision we make and every service we deliver.' }
  ]

  const whyChooseUs: WhyChooseItem[] = [
    { title: 'Expertise', description: 'Decades of combined experience in commercial law and business advisory' },
    { title: 'Integrity', description: 'Uncompromising commitment to ethical practice and client confidentiality' },
    { title: 'Client-Centric', description: 'Your goals drive our strategy; we are your trusted legal partner' },
    { title: 'Strategic Thinking', description: 'Forward-looking counsel that protects and grows your business' }
  ]

  const team: TeamMember[] = [
    { name: 'Adeniyi Okafor, Esq.', title: 'Founding Partner', bio: '20+ years of experience in corporate law leading strategic initiatives.' },
    { name: 'Chioma Adeyemi, Esq.', title: 'Senior Partner', bio: 'Expert advocacy and 18+ years litigation experience.' },
    { name: 'Tunde Bello, Esq.', title: 'Partner, Real Estate', bio: 'Specializing in large-scale real estate transactions.' },
    { name: 'Zainab Hassan, Esq.', title: 'Associate', bio: 'Innovative solutions in corporate governance and compliance.' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />

      {/* Hero Section with Responsive Parallax */}
<section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

{/* Hero Image (full responsive) */}
<motion.div
  style={{ y: useTransform(scrollY, [0, 800], [0, 200]) }}
  className="absolute inset-0 w-full h-full flex items-center justify-center will-change-transform"
>
  <img
    src="/hero-section.jpg"
    alt="Hero Background"
    className="w-full h-full object-cover"
  />
</motion.div>

{/* Overlay for readability */}
<motion.div
  style={{ opacity: useTransform(scrollY, [0, 500], [0.4, 0.7]) }}
  className="absolute inset-0 bg-black/40"
/>

{/* Hero Text & Buttons */}
<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
  >
    Welcome to <br />
    <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
      AO Legal
    </span>
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.3 }}
    className="mt-6 text-lg md:text-xl text-white/75 max-w-3xl mx-auto font-light"
  >
    Expert legal guidance for corporations, real estate investors, and high-net-worth individuals seeking strategic counsel
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5 }}
    className="mt-10 flex flex-col sm:flex-row gap-6 justify-center"
  >
    <Button
      size="lg"
      onClick={() => setConsultationOpen(true)}
      className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground px-8 py-5 shadow-lg shadow-accent/25"
    >
      Schedule Consultation <ArrowRight className="ml-2" size={18} />
    </Button>
    <Button
      size="lg"
      variant="outline"
      onClick={() => document.getElementById('mission')?.scrollIntoView({ behavior: 'smooth' })}
      className="border border-white/30 text-balck px-8 py-5"
    >
      Explore Our Mission
    </Button>
  </motion.div>
</div>

</section>

      {/* Mission Section */}
      <section id="mission" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl opacity-40"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/20 to-accent/10 rounded-full blur-3xl opacity-40"
        />

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block px-6 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-light tracking-wide mb-6">
              Our Foundation
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6">
              Our Mission, Vision & Values
            </h2>
            <p className="text-lg text-foreground/60 font-light max-w-2xl mx-auto">
              Grounded in excellence and integrity, we guide our clients toward strategic success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {missionItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur" />
                <div className="relative bg-card/50 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 h-full">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={28} className="text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 font-light leading-relaxed text-lg">
                    {item.description}
                  </p>
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-primary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas, Team Section, Footer remain unchanged */}
      {/* ...You can keep the rest of your original component as is... */}

      <Footer />
    </div>
  )
}
