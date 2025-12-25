"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";

export function VideoShowcase() {
    return (
        <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Placeholder for video content - using image for now but structure is ready for <video> */}
            <div className="absolute inset-0 opacity-60">
                {/* Simulated video poster */}
                <Image
                    src="https://images.unsplash.com/photo-1586506894677-4c7fa436b707?q=80&w=2070&auto=format&fit=crop"
                    alt="Video Thumbnail"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="absolute inset-0 bg-black/40" />

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="relative z-10 flex flex-col items-center cursor-pointer group"
            >
                <div className="w-24 h-24 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500 bg-white/10">
                    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center shadow-2xl shadow-secondary/50">
                        <Play className="fill-black text-black ml-1 h-8 w-8" />
                    </div>
                </div>
                <h2 className="mt-8 text-4xl md:text-6xl font-serif font-bold text-white tracking-wide drop-shadow-lg">
                    See the <span className="text-secondary">Unseen</span>
                </h2>
                <p className="mt-4 text-white/80 text-lg uppercase tracking-widest font-medium">
                    Watch the Experience
                </p>
            </motion.div>
        </section>
    );
}
