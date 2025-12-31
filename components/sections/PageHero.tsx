"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface PageHeroProps {
    image: string;
    title: React.ReactNode;
    subtitle: string;
    description?: string;
    alt?: string;
}

export function PageHero({ image, title, subtitle, description, alt = "Hero Image" }: PageHeroProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax & Opacity Animations
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    return (
        <section ref={containerRef} className="relative h-[75vh] min-h-[600px] overflow-hidden bg-black flex items-center justify-center">

            {/* Background Layer */}
            <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover opacity-70"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
            </motion.div>

            {/* Content Layer */}
            <motion.div
                style={{ opacity }}
                className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto"
            >
                {/* Subtitle / Micro-header */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="flex items-center gap-3 mb-6"
                >
                    <div className="h-[1px] w-8 sm:w-12 bg-secondary" />
                    <span className="text-secondary text-xs sm:text-sm font-black uppercase tracking-[0.3em] whitespace-nowrap">
                        {subtitle}
                    </span>
                    <div className="h-[1px] w-8 sm:w-12 bg-secondary" />
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-8 leading-tight drop-shadow-2xl"
                >
                    {title}
                </motion.h1>

                {/* Description */}
                {description && (
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md"
                    >
                        {description}
                    </motion.p>
                )}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
