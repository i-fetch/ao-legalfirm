'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ConsultationModal } from '@/components/consultation-modal'
import { Hero } from '@/components/hero'
import { ArrowRight, Calendar, User, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function BlogPage() {
  const [consultationOpen, setConsultationOpen] = useState(false)

  const blogPosts = [
    {
      id: 1,
      title: 'Understanding Corporate Restructuring: A Comprehensive Guide',
      excerpt: 'Learn the key steps involved in corporate restructuring and how to navigate the legal complexities.',
      author: 'John Doe',
      date: 'January 15, 2026',
      category: 'Corporate Law',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Real Estate Investment: Legal Considerations You Should Know',
      excerpt: 'Explore important legal aspects to consider before making real estate investments.',
      author: 'Jane Smith',
      date: 'January 10, 2026',
      category: 'Real Estate',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'Resolving Disputes: Alternative Resolution Methods',
      excerpt: 'Discover how arbitration and mediation can save time and costs in dispute resolution.',
      author: 'Michael Johnson',
      date: 'January 5, 2026',
      category: 'Litigation',
      readTime: '7 min read'
    },
    {
      id: 4,
      title: 'Intellectual Property Protection in the Digital Age',
      excerpt: 'Essential strategies for protecting your intellectual property rights online and offline.',
      author: 'Sarah Williams',
      date: 'December 28, 2025',
      category: 'Corporate Law',
      readTime: '9 min read'
    },
    {
      id: 5,
      title: 'Contract Essentials: What Every Business Should Include',
      excerpt: 'Key clauses and provisions that should be in every business contract.',
      author: 'Robert Brown',
      date: 'December 20, 2025',
      category: 'Contracts',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Compliance Requirements for Growing Startups',
      excerpt: 'Navigate regulatory requirements as your startup grows and scales.',
      author: 'Emily Davis',
      date: 'December 15, 2025',
      category: 'Advisory',
      readTime: '8 min read'
    }
  ]

  return (
    <>
      <Navbar onConsultationClick={() => setConsultationOpen(true)} />
        <Hero
                title="Blog & Insights"
                subtitle="Legal insights and industry knowledge from our expert team"
                image="/hero-section.jpg"
            >
            </Hero>


      
      
      <main className="min-h-screen bg-background">
        {/* Blog Posts */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Latest Articles
              </h2>
              <p className="text-lg text-foreground/70">
                Stay informed with our latest legal insights and industry updates.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3 flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-foreground/70 mb-4 flex-grow">
                      {post.excerpt}
                    </p>
                    <div className="space-y-2 mb-4 text-sm text-foreground/60">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date} • {post.readTime}</span>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full gap-2"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Need Professional Legal Advice?
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Schedule a consultation with our legal experts to discuss your specific needs.
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
