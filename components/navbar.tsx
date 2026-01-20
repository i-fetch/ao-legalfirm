'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

interface NavbarProps {
  onConsultationClick: () => void
}

export function Navbar({ onConsultationClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav className="sticky top-0 z-40 bg-background/98 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-serif font-bold text-primary tracking-tight">
            AO LEGAL
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" className="text-sm font-light text-foreground/70 hover:text-primary transition-colors px-3 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>

                {/* About Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary">
                    About
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-4 space-y-2">
                      <Link href="/about/mission" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Our Mission & Vision
                      </Link>
                      <Link href="/about/history" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        History & Values
                      </Link>
                      <Link href="/team" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Leadership Team
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Practice Areas Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary">
                    Practice Areas
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-4 space-y-2">
                      <Link href="/practice/corporate" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Corporate & Commercial Law
                      </Link>
                      <Link href="/practice/real-estate" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Real Estate & Property Law
                      </Link>
                      <Link href="/practice/litigation" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Litigation & Dispute Resolution
                      </Link>
                      <Link href="/practice/advisory" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Legal Advisory & Secretarial
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Our People Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary">
                    Our People
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-4 space-y-2">
                      <Link href="/team#partners" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Partners
                      </Link>
                      <Link href="/team#associates" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Associates
                      </Link>
                      <Link href="/team#counsel" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Counsel
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-4 space-y-2">
                      <Link href="/resources/blog" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Blog & Insights
                      </Link>
                      <Link href="/resources/publications" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Legal Publications
                      </Link>
                      <Link href="/resources/case-studies" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Case Studies
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Contact Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary">
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-4 space-y-2">
                      <button
                        onClick={onConsultationClick}
                        className="block text-sm text-foreground/70 hover:text-primary py-2 w-full text-left"
                      >
                        Schedule Consultation
                      </button>
                      <Link href="/contact" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Office Information
                      </Link>
                      <a href="mailto:hello@aolegal.com" className="block text-sm text-foreground/70 hover:text-primary py-2">
                        Send Email
                      </a>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-accent" />
                ) : (
                  <Moon size={20} className="text-accent" />
                )}
              </button>
            )}

            {/* CTA Button */}
            <Button
              onClick={onConsultationClick}
              className="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium px-6 py-2"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun size={20} className="text-accent" />
                ) : (
                  <Moon size={20} className="text-accent" />
                )}
              </button>
            )}
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-4 animate-in fade-in duration-200">
            <Link href="/" className="block text-sm font-light text-foreground/70 hover:text-primary py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            
            <div>
              <div className="text-sm font-light text-foreground/70 py-2 mb-2">About</div>
              <div className="space-y-2 pl-4 border-l border-border/30">
                <Link href="/about/mission" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  Our Mission & Vision
                </Link>
                <Link href="/about/history" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  History & Values
                </Link>
                <Link href="/team" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  Leadership Team
                </Link>
              </div>
            </div>

            <div>
              <div className="text-sm font-light text-foreground/70 py-2 mb-2">Practice Areas</div>
              <div className="space-y-2 pl-4 border-l border-border/30">
                <Link href="/practice/corporate" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  Corporate & Commercial Law
                </Link>
                <Link href="/practice/real-estate" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  Real Estate & Property Law
                </Link>
                <Link href="/practice/litigation" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  Litigation & Dispute Resolution
                </Link>
                <Link href="/practice/advisory" className="block text-sm text-foreground/70 hover:text-primary py-1" onClick={() => setMobileMenuOpen(false)}>
                  Legal Advisory & Secretarial
                </Link>
              </div>
            </div>

            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                onConsultationClick()
              }}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium"
            >
              Schedule Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  )

  function toggleTheme() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
}
