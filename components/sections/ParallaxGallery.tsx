"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const images = [
    { src: "https://images.unsplash.com/photo-1586506894677-4c7fa436b707?q=80&w=2070", y: [0, -100], x: "10%", w: "30rem" },
    { src: "https://images.unsplash.com/photo-1546708773-e575a556da8e?q=80&w=2070", y: [0, 100], x: "60%", w: "20rem" },
    { src: "https://images.unsplash.com/photo-1590664095641-7fa05f297864?q=80&w=2070", y: [0, -50], x: "30%", w: "25rem" },
    { src: "https://images.unsplash.com/photo-1555547432-d85c18684242?q=80&w=2080", y: [0, 150], x: "80%", w: "15rem" },
    { src: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1974", y: [0, -80], x: "5%", w: "22rem" },
];

export function ParallaxGallery() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black overflow-hidden flex flex-col justify-center items-center">
            <div className="text-center z-10 mix-blend-difference text-white mb-20 sticky top-1/2 -translate-y-1/2">
                <h2 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-none">
                    Wild <br /> Spirit
                </h2>
                <p className="mt-4 text-xl tracking-[0.5em] font-light">
                    Untamed Beauty
                </p>
            </div>

            {images.map((img, index) => (
                <ParallaxImage key={index} src={img.src} yRange={img.y} w={img.w} x={img.x} progress={scrollYProgress} />
            ))}
        </section>
    );
}

const ParallaxImage = ({ src, yRange, w, x, progress }: any) => {
    const y = useTransform(progress, [0, 1], yRange);
    return (
        <motion.div
            style={{ y, width: w, left: x }}
            className="absolute opacity-60 hover:opacity-100 transition-opacity duration-500 hover:z-20 grayscale hover:grayscale-0"
        >
            <div className="relative aspect-[3/4] overflow-hidden">
                <Image src={src} alt="Travel Moment" fill className="object-cover" />
            </div>
        </motion.div>
    );
};
