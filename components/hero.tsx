'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

interface HeroProps {
    title: string
    subtitle?: string
    image: string
    children?: React.ReactNode
    height?: 'small' | 'medium' | 'large'
}

export function Hero({
    title,
    subtitle,
    image,
    children,
    height = 'large'
}: HeroProps) {
    const ref = useRef<HTMLDivElement>(null)

    // ✅ Element-based scroll (smooth + performant)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    })

    // ✅ Subtle parallax (safe values)
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

    const heightClass = {
        small: 'h-[60vh] min-h-[320px]',
        medium: 'h-[70vh] min-h-[420px]',
        large: 'h-[85vh] min-h-[520px]'
    }[height]

    return (
        <section
            ref={ref}
            className={`relative w-full overflow-hidden ${heightClass}`}
        >
            {/* Background Image */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 will-change-transform"
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center max-w-4xl"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
                        {title}
                    </h1>

                    {subtitle && (
                        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow">
                            {subtitle}
                        </p>
                    )}

                    {children}
                </motion.div>
            </div>
        </section>
    )
}
