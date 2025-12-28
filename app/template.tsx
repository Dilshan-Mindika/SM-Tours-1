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
                        className="relative h-full w-full bg-black overflow-hidden border-r border-white/10 last:border-r-0"
                        initial={{ y: 0 }}
                        animate={{
                            y: "-100%",
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1], // Quint easing
                                delay: 1.5 + (i * 0.1) // Wait for text, then stagger
                            }
                        }}
                    >
                        {/* Image with Parallax/Zoom effect */}
                        <motion.div
                            className="relative h-full w-full"
                            initial={{ scale: 1.2, filter: "grayscale(100%) brightness(0.5)" }}
                            animate={{
                                scale: 1,
                                filter: "grayscale(0%) brightness(0.8)",
                                transition: { duration: 1.5 }
                            }}
                        >
                            <Image
                                src={src}
                                alt="Sri Lanka"
                                fill
                                className="object-cover"
                                priority
                                sizes="25vw"
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            {/* Typography Overlay (Centered) */}
            <motion.div
                className="fixed inset-0 z-[10000] flex flex-col items-center justify-center pointer-events-none mix-blend-difference text-white"
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { duration: 0.5, delay: 1.2 }
                }}
            >
                {/* Greeting Text */}
                <div className="overflow-hidden mb-2">
                    <div className="flex gap-1 md:gap-3">
                        {letters.map((letter, i) => (
                            <motion.span
                                key={i}
                                className="text-5xl md:text-9xl font-serif font-black tracking-tighter"
                                initial={{ y: "100%" }}
                                animate={{
                                    y: 0,
                                    transition: {
                                        duration: 0.6,
                                        ease: [0.33, 1, 0.68, 1],
                                        delay: 0.1 + (i * 0.05)
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
                    className="flex items-center gap-4 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, delay: 0.8 }
                    }}
                >
                    <div className="h-[1px] w-12 bg-white" />
                    <p className="text-xs md:text-sm font-sans tracking-[0.5em] uppercase font-bold">
                        Welcome to Paradise
                    </p>
                    <div className="h-[1px] w-12 bg-white" />
                </motion.div>
            </motion.div>

            {/* Page Content Reveal */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.5, delay: 1.6 }
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
