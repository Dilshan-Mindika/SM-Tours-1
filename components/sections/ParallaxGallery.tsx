"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const galleryItems = [
    {
        src: "/gallery/sigiriya-rock.jpg",
        title: "Ancient Fortress",
        location: "Sigiriya Rock",
        span: "md:col-span-2 md:row-span-2",
        delay: 0
    },
    {
        src: "/gallery/tea-plantation.jpg",
        title: "Ceylon Tea",
        location: "Hill Country",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.1
    },
    {
        src: "/gallery/nine-arch.jpg",
        title: "Railway Legacy",
        location: "Nine Arch Bridge",
        span: "md:col-span-1 md:row-span-2",
        delay: 0.2
    },
    {
        src: "/gallery/galle-fort.jpg",
        title: "Colonial Heritage",
        location: "Galle Fort",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.15
    },
    {
        src: "/gallery/buddha-statue.jpg",
        title: "Buddhist Culture",
        location: "Sacred Sites",
        span: "md:col-span-2 md:row-span-1",
        delay: 0.25
    },
    {
        src: "/gallery/ella-train.jpg",
        title: "Scenic Railways",
        location: "Ella to Kandy",
        span: "md:col-span-1 md:row-span-1",
        delay: 0.3
    },
];

export function ParallaxGallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0.8]);

    return (
        <section ref={containerRef} className="py-32 bg-black relative overflow-hidden">
            {/* Animated Header */}
            <motion.div
                style={{ y: headerY, opacity }}
                className="container-custom mb-20 text-center relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl sm:text-6xl md:text-9xl font-serif text-white tracking-tight mb-6">
                        Explore <span className="italic text-secondary">Sri Lanka</span>
                    </h2>
                    <div className="flex items-center justify-center gap-4 mb-4">
                        <div className="h-[2px] w-16 bg-white/20" />
                        <div className="h-[2px] w-8 bg-secondary" />
                        <div className="h-[2px] w-16 bg-white/20" />
                    </div>
                    <p className="text-sm font-bold tracking-[0.35em] text-white/50 uppercase">
                        The Wonder of Asia
                    </p>
                </motion.div>
            </motion.div>

            {/* Masonry Grid */}
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[240px]">
                    {galleryItems.map((item, index) => (
                        <GalleryCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>

            {/* Ambient Effects */}
            <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white/5 rounded-full blur-[140px] pointer-events-none -z-10" />
        </section>
    );
}

function GalleryCard({ item, index }: { item: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 0.7,
                delay: item.delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
            className={`group relative overflow-hidden bg-white/5 backdrop-blur-sm ${item.span}`}
        >
            {/* Image Layer */}
            <div className="absolute inset-0">
                <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-[800ms] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index < 2}
                />
            </div>

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/10 transition-colors duration-700" />

            {/* Content */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Location Badge */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: item.delay + 0.2 }}
                        viewport={{ once: true }}
                        className="inline-block mb-3"
                    >
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-secondary px-3 py-1 bg-secondary/10 backdrop-blur-sm border border-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            {item.location}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white italic leading-tight mb-3">
                        {item.title}
                    </h3>

                    {/* Animated Underline */}
                    <div className="flex items-center gap-2">
                        <div className="h-[3px] w-0 bg-secondary group-hover:w-16 transition-all duration-700" />
                        <div className="h-[1px] w-0 bg-white/40 group-hover:w-8 transition-all duration-700 delay-100" />
                    </div>
                </div>
            </div>

            {/* Border Highlight */}
            <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-all duration-500 pointer-events-none" />

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-0 h-0 border-t-2 border-r-2 border-secondary/0 group-hover:border-secondary/50 group-hover:w-8 group-hover:h-8 transition-all duration-500" />
        </motion.div>
    );
}
