"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = "We don't just show you Sri Lanka. We invite you to live it. From the misty heights of Ella to the golden shores of Mirissa, every journey is a masterfully curated narrative of luxury, culture, and untold adventure.";

export function Intro() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = text.split(" ");

    return (
        <section ref={containerRef} className="py-32 bg-white text-black min-h-[50vh] flex items-center justify-center">
            <div className="container-custom max-w-4xl px-6">
                <p className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight flex flex-wrap gap-x-3 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        return <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />;
                    })}
                </p>

                <div className="mt-12 flex items-center gap-4">
                    <div className="h-[2px] w-24 bg-secondary" />
                    <span className="text-secondary uppercase tracking-widest font-bold text-sm">Our Philosophy</span>
                </div>
            </div>
        </section>
    );
}

const Word = ({ word, progress, range }: { word: string, progress: any, range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="relative transition-colors">
            {word}
        </motion.span>
    );
}
