"use client";

import { motion, useInView, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const stats = [
    {
        label: "Happy Travelers",
        value: 5000,
        suffix: "+",
        image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1974" // Happy tourist / Cinco Terre vibe? let's stick to generic travel joy
    },
    {
        label: "Years Experience",
        value: 10,
        suffix: "+",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021" // Journey/Road
    },
    {
        label: "Custom Tours",
        value: 1200,
        suffix: "+",
        image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=1976" // Planning/Map or Scenic
    },
    {
        label: "Local Guides",
        value: 50,
        suffix: "+",
        image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1974" // Friendly guide/Person
    },
];

export function Stats() {
    return (
        <section className="bg-black text-white relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[400px]">
                {stats.map((stat, index) => (
                    <StatItem key={index} stat={stat} index={index} />
                ))}
            </div>
        </section>
    );
}

function StatItem({ stat, index }: { stat: any, index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);

    const motionValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        duration: 2.5
    });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(stat.value);
        }
    }, [isInView, motionValue, stat.value]);

    useEffect(() => {
        const unsubscribe = motionValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
        return unsubscribe;
    }, [motionValue]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative h-[300px] lg:h-full border-r border-b border-white/10 last:border-r-0 lg:last:border-r-0 flex flex-col items-center justify-center cursor-pointer overflow-hidden group bg-black"
        >
            {/* Background Image Reveal */}
            <motion.div
                animate={{ opacity: isHovered ? 0.6 : 0, scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 z-0 grayscale"
            >
                <Image
                    src={stat.image}
                    alt={stat.label}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                <div className="text-5xl md:text-7xl font-bold font-serif mb-2 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/70 transition-all">
                        {displayValue}
                    </span>
                    <span className="text-secondary">{stat.suffix}</span>
                </div>
                <div className="h-[2px] w-8 bg-secondary mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/60 group-hover:text-white transition-colors">
                    {stat.label}
                </p>
            </div>

            {/* Hover Outline Effect */}
            <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-500 scale-95 group-hover:scale-100 z-20 pointer-events-none" />
        </motion.div>
    );
}
