import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"] });
const _inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#0f172a',
}

export const metadata: Metadata = {
  title: 'AO LEGAL | Strategic Legal Solutions for Modern Businesses',
  description: 'Premium commercial law firm in Lagos. Corporate, real estate, litigation, and advisory services for businesses, startups, and high-net-worth individuals.',
  
  icons: {
    icon: [
      {
        url: '/logo_m.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo_m.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          storageKey="aolegal-theme"
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
