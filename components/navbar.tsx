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
import { cn } from '@/lib/utils'

interface NavbarProps {
  onConsultationClick: () => void
}

export function Navbar({ onConsultationClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)

    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav
      className={cn(
        'sticky top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-border/40'
          : 'bg-background'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-bold tracking-tight text-primary"
          >
            AO LEGAL
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                <NavLink href="/">Home</NavLink>

                <NavDropdown label="About">
                  <NavItem href="/about/mission">Mission & Vision</NavItem>
                  <NavItem href="/about/history">History & Values</NavItem>
                  <NavItem href="/team">Leadership Team</NavItem>
                </NavDropdown>

                <NavDropdown label="Practice Areas" wide>
                  <NavItem href="/practice/corporate">
                    Corporate & Commercial Law
                  </NavItem>
                  <NavItem href="/practice/real-estate">
                    Real Estate & Property Law
                  </NavItem>
                  <NavItem href="/practice/litigation">
                    Litigation & Dispute Resolution
                  </NavItem>
                  <NavItem href="/practice/advisory">
                    Legal Advisory & Secretarial
                  </NavItem>
                </NavDropdown>

                <NavDropdown label="Resources">
                  <NavItem href="/resources/blog">Blog & Insights</NavItem>
                  <NavItem href="/resources/publications">
                    Legal Publications
                  </NavItem>
                  <NavItem href="/resources/case-studies">
                    Case Studies
                  </NavItem>
                </NavDropdown>

                <NavDropdown label="Contact">
                  <button
                    onClick={onConsultationClick}
                    className="w-full text-left text-sm text-foreground/70 hover:text-primary transition-colors py-2"
                  >
                    Schedule Consultation
                  </button>
                  <NavItem href="/contact">Office Information</NavItem>
                  <a
                    href="mailto:hello@aolegal.com"
                    className="block text-sm text-foreground/70 hover:text-primary py-2"
                  >
                    Send Email
                  </a>
                </NavDropdown>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="rounded-lg p-2 hover:bg-muted transition-colors"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-accent" />
                ) : (
                  <Moon className="h-5 w-5 text-accent" />
                )}
              </button>
            )}

            {/* CTA */}
            <Button
              onClick={onConsultationClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg hover:bg-muted"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5 text-accent" />
                ) : (
                  <Moon className="h-5 w-5 text-accent" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 pt-4 space-y-6 animate-in fade-in slide-in-from-top-2">
            <MobileLink href="/" onClick={setMobileMenuOpen}>
              Home
            </MobileLink>

            <MobileGroup title="About">
              <MobileLink href="/about/mission" onClick={setMobileMenuOpen}>
                Mission & Vision
              </MobileLink>
              <MobileLink href="/about/history" onClick={setMobileMenuOpen}>
                History & Values
              </MobileLink>
              <MobileLink href="/team" onClick={setMobileMenuOpen}>
                Leadership Team
              </MobileLink>
            </MobileGroup>

            <MobileGroup title="Practice Areas">
              <MobileLink href="/practice/corporate" onClick={setMobileMenuOpen}>
                Corporate & Commercial Law
              </MobileLink>
              <MobileLink href="/practice/real-estate" onClick={setMobileMenuOpen}>
                Real Estate & Property Law
              </MobileLink>
              <MobileLink href="/practice/litigation" onClick={setMobileMenuOpen}>
                Litigation & Dispute Resolution
              </MobileLink>
            </MobileGroup>

            <Button
              onClick={() => {
                setMobileMenuOpen(false)
                onConsultationClick()
              }}
              className="w-full bg-primary text-primary-foreground"
            >
              Schedule Consultation
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}

/* ---------------- helpers ---------------- */

function NavLink({ href, children }: any) {
  return (
    <NavigationMenuItem>
      <Link
        href={href}
        className="px-3 py-2 text-sm font-light text-foreground/70 hover:text-primary transition-colors"
      >
        {children}
      </Link>
    </NavigationMenuItem>
  )
}

function NavDropdown({ label, children, wide }: any) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className={cn('p-4 space-y-2', wide ? 'w-64' : 'w-48')}>
          {children}
        </div>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

function NavItem({ href, children }: any) {
  return (
    <Link
      href={href}
      className="block text-sm text-foreground/70 hover:text-primary py-2 transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileGroup({ title, children }: any) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground mb-2">
        {title}
      </div>
      <div className="space-y-2 border-l border-border/40 pl-4">
        {children}
      </div>
    </div>
  )
}

function MobileLink({ href, onClick, children }: any) {
  return (
    <Link
      href={href}
      onClick={() => onClick(false)}
      className="block text-sm text-foreground/80 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  )
}
