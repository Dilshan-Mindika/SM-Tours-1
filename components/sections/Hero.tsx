"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Zoom scale: Text starts normal size and zooms hugely
    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 25]);
    // Opacity: Text fades out as it zooms too close
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);

    // Background Image Animations
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* 1. Background Image - Parallax & Zoom */}
                <motion.div
                    style={{ scale: bgScale, y: bgY }}
                    className="absolute inset-0 z-0"
                >
                    <Image
                        src="/hero-bg.png"
                        alt="Immersive Sri Lanka"
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                {/* 2. Text Container */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative z-10 flex flex-col items-center justify-center mix-blend-overlay"
                >
                    <h1 className="text-[15vw] font-black tracking-tighter text-white leading-none text-center select-none">
                        SRI<br />LANKA
                    </h1>
                    <p className="mt-4 text-xl sm:text-2xl font-light tracking-[0.5em] text-white uppercase">
                        The Wonder of Asia
                    </p>
                </motion.div>

                {/* 3. Static Overlay Text (Optional) - Fades in LATER */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [0, 1]) }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none"
                >
                    <h2 className="text-6xl md:text-8xl font-serif font-bold text-white text-center drop-shadow-2xl">
                        Discover <br /> <span className="text-secondary italic">Pure Luxury</span>
                    </h2>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 z-30 text-white flex flex-col items-center gap-2"
                >
                    <span className="uppercase tracking-[0.3em] text-xs font-bold text-secondary">
                        Scroll to Explore
                    </span>
                    <div className="w-[1px] h-12 bg-secondary animate-pulse" />
                </motion.div>

            </div>
        </section>
    );
}
