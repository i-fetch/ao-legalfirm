'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, BookOpen, FileText, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function ResourcesPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const blogs = [
    {
      title: 'Recent Changes in Nigerian Corporate Law',
      date: 'January 15, 2024',
      category: 'Corporate Law',
      excerpt: 'An overview of recent legislative changes affecting corporate governance and business operations.',
      author: 'Adeniyi Okafor'
    },
    {
      title: 'Protecting Your Business Through Proper Contracts',
      date: 'January 10, 2024',
      category: 'Contract Law',
      excerpt: 'Essential tips for drafting and negotiating business contracts that protect your interests.',
      author: 'Kunle Oluwafemi'
    },
    {
      title: 'Alternative Dispute Resolution: A Strategic Approach',
      date: 'January 5, 2024',
      category: 'Litigation',
      excerpt: 'Understanding the benefits of ADR methods in resolving commercial disputes.',
      author: 'Chioma Adeyemi'
    }
  ]

  const publications = [
    {
      title: 'The Complete Guide to Business Registration in Nigeria',
      type: 'Guide',
      year: 2023
    },
    {
      title: 'Navigating Real Estate Transactions: A Practical Handbook',
      type: 'Handbook',
      year: 2023
    },
    {
      title: 'Corporate Governance Best Practices',
      type: 'White Paper',
      year: 2023
    },
    {
      title: 'Digital Legal Solutions and Compliance',
      type: 'Article',
      year: 2024
    }
  ]

  const caseStudies = [
    {
      title: 'Successful M&A Transaction',
      industry: 'Technology',
      description: 'Successfully navigated a complex $50M acquisition with regulatory approvals.'
    },
    {
      title: 'Commercial Dispute Resolution',
      industry: 'Real Estate',
      description: 'Resolved a multi-million naira property dispute through strategic arbitration.'
    },
    {
      title: 'Corporate Restructuring',
      industry: 'Financial Services',
      description: 'Managed complete corporate restructuring ensuring regulatory compliance.'
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
      
      <Hero
        title="Resources & Insights"
        subtitle="Stay informed with our latest legal insights, publications, and case studies"
        backgroundImage="linear-gradient(135deg, rgba(16, 185, 129, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)"
        height="large"
      />

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen size={18} />
                <span className="hidden sm:inline">Blog</span>
              </TabsTrigger>
              <TabsTrigger value="publications" className="flex items-center gap-2">
                <FileText size={18} />
                <span className="hidden sm:inline">Publications</span>
              </TabsTrigger>
              <TabsTrigger value="case-studies" className="flex items-center gap-2">
                <TrendingUp size={18} />
                <span className="hidden sm:inline">Case Studies</span>
              </TabsTrigger>
            </TabsList>

            {/* Blog Tab */}
            <TabsContent value="blog" className="space-y-6">
              {blogs.map((blog, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-xs text-foreground/60 mt-1">
                            {blog.date} • By {blog.author}
                          </p>
                        </div>
                        <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary whitespace-nowrap">
                          {blog.category}
                        </span>
                      </div>
                      <p className="text-foreground/70">{blog.excerpt}</p>
                      <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                        Read More →
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications" className="space-y-4">
              {publications.map((pub, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-xs text-foreground/60 mt-1">
                          {pub.type} • {pub.year}
                        </p>
                      </div>
                      <Button variant="ghost" className="text-primary p-0 h-auto">
                        Download
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </TabsContent>

            {/* Case Studies Tab */}
            <TabsContent value="case-studies" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow h-full">
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {study.industry}
                          </span>
                          <h3 className="font-semibold text-foreground text-lg mt-3">
                            {study.title}
                          </h3>
                        </div>
                        <p className="text-foreground/70 text-sm">{study.description}</p>
                        <Button variant="ghost" className="text-primary p-0 h-auto font-medium">
                          View Case Study →
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
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
              Need Expert Legal Advice?
            </h3>
            <p className="text-foreground/70 mb-6">
              Our team is ready to discuss your specific legal needs and provide tailored solutions.
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
