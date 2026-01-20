'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ContactPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Lagos, Nigeria'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+234 (0) 123 456 7890'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@aolegal.com'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon - Fri: 9:00 AM - 5:00 PM'
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
              Get in Touch
            </h1>
            <p className="text-lg text-foreground/70">
              We're here to help. Reach out to discuss your legal needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
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
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    <p className="text-foreground/70 text-sm">{info.details}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+234 (0) 123 456 7890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your legal needs..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground inline-flex items-center justify-center gap-2"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle2 size={18} />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-serif font-bold text-foreground">Quick Actions</h2>
              
              <Card className="p-6 bg-primary/5 border-primary/20 space-y-4">
                <h3 className="font-semibold text-foreground">Schedule a Consultation</h3>
                <p className="text-foreground/70 text-sm">
                  Book a time to discuss your legal needs with one of our attorneys.
                </p>
                <Button
                  onClick={() => setConsultationOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Book Now
                </Button>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Practice Areas</h3>
                <p className="text-foreground/70 text-sm">
                  Learn more about our areas of specialization.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = '/practice'}
                >
                  Explore Practice Areas
                </Button>
              </Card>

              <Card className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Meet Our Team</h3>
                <p className="text-foreground/70 text-sm">
                  Get to know our experienced legal professionals.
                </p>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.location.href = '/team'}
                >
                  View Team
                </Button>
              </Card>

              <Card className="p-6 bg-muted/50 space-y-4">
                <h3 className="font-semibold text-foreground">Urgent Matter?</h3>
                <p className="text-foreground/70 text-sm">
                  For urgent legal matters, please call us directly.
                </p>
                <a
                  href="tel:+2341234567890"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  <Phone size={18} />
                  +234 (0) 123 456 7890
                </a>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ConsultationModal open={consultationOpen} onOpenChange={setConsultationOpen} />
    </>
  )
}
