'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, CheckCircle2, Briefcase, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function CorporateLawPage() {
    const [consultationOpen, setConsultationOpen] = useState(false)

    const services = [
        {
            title: 'Mergers & Acquisitions',
            description: 'Strategic counsel and comprehensive support for complex M&A transactions, from due diligence to closing.'
        },
        {
            title: 'Contract Negotiation & Drafting',
            description: 'Expert drafting and negotiation of commercial contracts that protect your interests.'
        },
        {
            title: 'Corporate Restructuring',
            description: 'Legal guidance for corporate reorganizations, spin-offs, and restructuring initiatives.'
        },
        {
            title: 'Business Registration & Compliance',
            description: 'Registration, incorporation, and ongoing compliance with corporate governance requirements.'
        },
        {
            title: 'Joint Ventures & Partnerships',
            description: 'Structuring and documentation for strategic business partnerships and joint ventures.'
        },
        {
            title: 'Intellectual Property Protection',
            description: 'Comprehensive IP strategies including patents, trademarks, copyrights, and confidentiality.'
        }
    ]

    const benefits = [
        'Experienced corporate counsel with deep industry knowledge',
        'Strategic approach to complex transactions',
        'Proactive compliance and risk management',
        'Cost-effective solutions for businesses of all sizes'
    ]

    return (
        <>
            <Navbar onConsultationClick={() => setConsultationOpen(true)} />

            <Hero
                title="Trusted Legal Solutions"
                subtitle="Professional counsel with proven results"
                image="/hero-section2.jpg"
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
                                We provide comprehensive corporate legal services tailored to your business needs.
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
                                            <Briefcase className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
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
                            Why Choose Our Corporate Practice
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
                                Ready to Discuss Your Legal Needs?
                            </h2>
                            <p className="text-lg text-foreground/70 mb-8">
                                Schedule a consultation with our corporate law specialists.
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
