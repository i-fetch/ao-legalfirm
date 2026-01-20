'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun, ChevronRight } from 'lucide-react'
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
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null)
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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileSubmenu(null)
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
                    className="w-full text-left text-sm text-foreground/70 hover:text-primary transition-colors py-2 px-2 rounded hover:bg-muted/50"
                  >
                    Schedule Consultation
                  </button>
                  <NavItem href="/contact">Office Information</NavItem>
                  <a
                    href="mailto:hello@aolegal.com"
                    className="block text-sm text-foreground/70 hover:text-primary py-2 px-2 rounded hover:bg-muted/50 transition-colors"
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
          <div className="md:hidden pb-6 pt-4 space-y-2 animate-in fade-in slide-in-from-top-2 max-h-[calc(100vh-80px)] overflow-y-auto">
            <MobileLink href="/" onClick={closeMobileMenu}>
              Home
            </MobileLink>

            <MobileGroupMenu title="About" submenu="about" onSubmenuChange={setMobileSubmenu} currentSubmenu={mobileSubmenu}>
              <MobileLink href="/about/mission" onClick={closeMobileMenu}>
                Mission & Vision
              </MobileLink>
              <MobileLink href="/about/history" onClick={closeMobileMenu}>
                History & Values
              </MobileLink>
              <MobileLink href="/team" onClick={closeMobileMenu}>
                Leadership Team
              </MobileLink>
            </MobileGroupMenu>

            <MobileGroupMenu title="Practice Areas" submenu="practice" onSubmenuChange={setMobileSubmenu} currentSubmenu={mobileSubmenu}>
              <MobileLink href="/practice/corporate" onClick={closeMobileMenu}>
                Corporate & Commercial Law
              </MobileLink>
              <MobileLink href="/practice/real-estate" onClick={closeMobileMenu}>
                Real Estate & Property Law
              </MobileLink>
              <MobileLink href="/practice/litigation" onClick={closeMobileMenu}>
                Litigation & Dispute Resolution
              </MobileLink>
              <MobileLink href="/practice/advisory" onClick={closeMobileMenu}>
                Legal Advisory & Secretarial
              </MobileLink>
            </MobileGroupMenu>

            <MobileGroupMenu title="Resources" submenu="resources" onSubmenuChange={setMobileSubmenu} currentSubmenu={mobileSubmenu}>
              <MobileLink href="/resources/blog" onClick={closeMobileMenu}>
                Blog & Insights
              </MobileLink>
              <MobileLink href="/resources/publications" onClick={closeMobileMenu}>
                Legal Publications
              </MobileLink>
              <MobileLink href="/resources/case-studies" onClick={closeMobileMenu}>
                Case Studies
              </MobileLink>
            </MobileGroupMenu>

            <MobileGroupMenu title="Contact" submenu="contact" onSubmenuChange={setMobileSubmenu} currentSubmenu={mobileSubmenu}>
              <button
                onClick={() => {
                  closeMobileMenu()
                  onConsultationClick()
                }}
                className="w-full text-left text-sm text-foreground/80 hover:text-primary py-2 px-4 rounded hover:bg-muted transition-colors"
              >
                Schedule Consultation
              </button>
              <MobileLink href="/contact" onClick={closeMobileMenu}>
                Office Information
              </MobileLink>
              <a
                href="mailto:hello@aolegal.com"
                onClick={closeMobileMenu}
                className="block text-sm text-foreground/80 hover:text-primary py-2 px-4 rounded hover:bg-muted transition-colors"
              >
                Send Email
              </a>
            </MobileGroupMenu>

            <div className="pt-4 border-t border-border/40">
              <Button
                onClick={() => {
                  closeMobileMenu()
                  onConsultationClick()
                }}
                className="w-full bg-primary text-primary-foreground"
              >
                Schedule Consultation
              </Button>
            </div>
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
      <NavigationMenuTrigger className="text-sm font-light text-foreground/70 hover:text-primary data-[state=open]:text-primary">
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <div className={cn(
          'p-4 space-y-1 bg-background border border-border rounded-lg shadow-xl backdrop-blur-sm',
          wide ? 'w-72' : 'w-56'
        )}>
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
      className="block text-sm font-light text-foreground py-3 px-3 rounded-md hover:bg-muted hover:text-foreground transition-all duration-200"
    >
      {children}
    </Link>
  )
}

function MobileGroupMenu({ title, submenu, onSubmenuChange, currentSubmenu, children }: any) {
  const isOpen = currentSubmenu === submenu

  return (
    <div className="space-y-1">
      <button
        onClick={() => onSubmenuChange(isOpen ? null : submenu)}
        className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors"
      >
        <span>{title}</span>
        <ChevronRight
          size={18}
          className={cn(
            'transition-transform duration-200',
            isOpen && 'rotate-90'
          )}
        />
      </button>

      {isOpen && (
        <div className="pl-4 space-y-1 border-l-2 border-primary/30 animate-in slide-in-from-top-2">
          {children}
        </div>
      )}
    </div>
  )
}

function MobileLink({ href, onClick, children }: any) {
  return (
    <Link
      href={href}
      onClick={() => onClick()}
      className="block text-sm text-foreground/80 hover:text-primary py-2 px-4 rounded hover:bg-muted transition-colors"
    >
      {children}
    </Link>
  )
}
