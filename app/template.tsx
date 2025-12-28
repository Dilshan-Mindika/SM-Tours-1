"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

const images = [
    "/destinations/sigiriya-new.jpg",
    "/destinations/galle-new.jpg",
    "/destinations/ella-new.jpg",
    "/destinations/yala-new.jpg",
];

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const text = "AYUBOWAN";
    const letters = text.split("");

    return (
        <div className="relative">
            {/* Image Columns Overlay */}
            <div className="fixed inset-0 z-[9999] flex pointer-events-none">
                {images.map((src, i) => (
                    <motion.div
                        key={i}
                        className="relative h-full w-full bg-black overflow-hidden border-r border-white/5 last:border-r-0"
                        initial={{ y: 0 }}
                        animate={{
                            y: "-100%",
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1], // Quint easing
                                delay: 1.8 + (i * 0.1)
                            }
                        }}
                    >
                        {/* Image with Parallax/Zoom effect - DARKER */}
                        <motion.div
                            className="relative h-full w-full bg-black"
                            initial={{ scale: 1.2, opacity: 0.4 }}
                            animate={{
                                scale: 1,
                                opacity: 0.6, // Max opacity 60%
                                transition: { duration: 1.5 }
                            }}
                        >
                            <Image
                                src={src}
                                alt="Sri Lanka"
                                fill
                                className="object-cover opacity-60" // Double down on opacity
                                priority
                                sizes="25vw"
                            />
                            {/* Gradient Overlay for extra text protection */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/60" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Typography Overlay (Centered) */}
            <motion.div
                className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { duration: 0.5, delay: 1.5 }
                }}
            >
                {/* Greeting Text */}
                <div className="overflow-hidden mb-8 relative z-10">
                    <div className="flex gap-1 md:gap-4 justify-center">
                        {letters.map((letter, i) => (
                            <motion.span
                                key={i}
                                className="text-6xl md:text-[8rem] lg:text-[10rem] font-serif font-black text-white tracking-tight leading-none drop-shadow-[0_5px_5px_rgba(0,0,0,1)]"
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 0.8,
                                        ease: [0.33, 1, 0.68, 1],
                                        delay: 0.2 + (i * 0.05)
                                    }
                                }}
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </div>
                </div>

                {/* Subtext */}
                <motion.div
                    className="flex items-center gap-6 overflow-hidden relative z-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, delay: 1 }
                    }}
                >
                    <div className="h-[1px] w-16 md:w-32 bg-white box-shadow-lg" />
                    <p className="text-sm md:text-xl font-sans tracking-[0.6em] uppercase font-bold text-white drop-shadow-lg">
                        Welcome to Paradise
                    </p>
                    <div className="h-[1px] w-16 md:w-32 bg-white box-shadow-lg" />
                </motion.div>
            </motion.div>

            {/* Page Content Reveal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1.9 }
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
