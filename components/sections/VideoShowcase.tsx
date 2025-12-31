"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export function VideoShowcase() {
    return (
        <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Placeholder for video content - using image for now but structure is ready for <video> */}
            {/* YouTube Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <iframe
                    className="w-full h-full object-cover scale-150 pointer-events-none"
                    src="https://www.youtube.com/embed/8g9ccCkT-u0?autoplay=1&mute=1&controls=0&loop=1&playlist=8g9ccCkT-u0&start=10&end=120&rel=0&vq=hd1080"
                    title="SM Tours Experience"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ pointerEvents: "none" }}
                />
            </div>

            <div className="absolute inset-0 bg-black/20" />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
            >
                <div className="relative">
                    <div className="absolute inset-0 bg-secondary/50 rounded-full blur-xl animate-pulse opacity-0" />
                </div>

                <h2 className="mt-10 text-5xl md:text-7xl font-serif font-black text-white tracking-tight drop-shadow-2xl text-center">
                    See the <span className="text-secondary italic">Unseen</span>
                </h2>
                <div className="mt-6 flex items-center gap-3">
                    <div className="h-[1px] w-12 bg-white/50" />
                    <p className="text-white/90 text-sm uppercase tracking-[0.3em] font-bold">
                        Watch the Experience
                    </p>
                    <div className="h-[1px] w-12 bg-white/50" />
                </div>
            </motion.div>
        </section>
    );
}
