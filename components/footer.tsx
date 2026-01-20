'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/40 border-t border-border/30">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-serif font-bold text-primary">AO LEGAL</h3>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Premier legal counsel delivering strategic solutions for businesses and individuals.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Practice Areas</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/practice/corporate" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Corporate & Commercial Law
                </Link>
              </li>
              <li>
                <Link href="/practice/real-estate" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Real Estate & Property
                </Link>
              </li>
              <li>
                <Link href="/practice/litigation" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Litigation & Dispute Resolution
                </Link>
              </li>
              <li>
                <Link href="/practice/advisory" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Legal Advisory
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about/mission" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/resources/blog" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Blog & Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/60 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-foreground/60">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+2341234567890" className="hover:text-primary transition-colors">
                  +234 (0) 123 456 7890
                </a>
              </li>
              <li className="flex gap-3 text-sm text-foreground/60">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@aolegal.com" className="hover:text-primary transition-colors">
                  hello@aolegal.com
                </a>
              </li>
              <li className="flex gap-3 text-sm text-foreground/60">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Lagos, Nigeria</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <Separator className="my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-foreground/60">
            © {currentYear} AO Legal. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-foreground/60">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
