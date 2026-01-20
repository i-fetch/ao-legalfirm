'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function AboutPage() {
    const [consultationOpen, setConsultationOpen] = useState(false)

    return (
        <>
            <Navbar onConsultationClick={() => setConsultationOpen(true)} />
            <Hero
                title="About AO Legal"
                subtitle="Professional counsel with proven results"
                image="/hero-section2.jpg"
            >
            </Hero>



            <main className="min-h-screen bg-background">
                {/* About Section */}
                <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                                Who We Are
                            </h2>
                            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                                AO Legal is a full-service law firm dedicated to providing exceptional legal counsel and strategic advice to businesses and individuals. With years of combined experience across multiple practice areas, our team is committed to delivering results that exceed expectations.
                            </p>
                            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                                We believe in building long-term partnerships with our clients, understanding their unique challenges, and providing tailored solutions that drive business success. Our approach combines deep legal expertise with practical business acumen.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Navigation Cards */}
                <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
                    <div className="max-w-6xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-12 text-center"
                        >
                            Learn More About Us
                        </motion.h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Link href="/about/mission">
                                    <div className="p-8 bg-background rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-border/50 hover:border-primary/50">
                                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                                            Our Mission & Vision
                                        </h3>
                                        <p className="text-foreground/70 mb-6">
                                            Discover the values that guide us and our vision for the future of legal practice.
                                        </p>
                                        <div className="flex items-center gap-2 text-primary">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Link href="/about/history">
                                    <div className="p-8 bg-background rounded-lg hover:shadow-lg transition-shadow cursor-pointer border border-border/50 hover:border-primary/50">
                                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                                            History & Values
                                        </h3>
                                        <p className="text-foreground/70 mb-6">
                                            Explore our journey and the core values that define our firm's culture and approach.
                                        </p>
                                        <div className="flex items-center gap-2 text-primary">
                                            <span>Learn More</span>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
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
                                Let's Work Together
                            </h2>
                            <p className="text-lg text-foreground/70 mb-8">
                                Ready to experience the AO Legal difference? Contact us today to discuss how we can help.
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
