"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        image: "/hero-new.png",
        title: "SRI\nLANKA",
        subtitle: "The Wonder of Asia",
        alt: "Pristine Tropical Beach"
    },
    {
        id: 2,
        image: "/hero-sigiriya-new.png",
        title: "ANCIENT\nLEGACY",
        subtitle: "Walk Through History",
        alt: "Sigiriya Rock Fortress"
    },
    {
        id: 3,
        image: "/hero-wildlife-new.png",
        title: "WILD\nSPIRIT",
        subtitle: "Untamed Nature",
        alt: "Elephant in Yala National Park"
    },
    {
        id: 4,
        image: "/hero-train-new.png",
        title: "SCENIC\nESCAPES",
        subtitle: "Journey Through the Clouds",
        alt: "Train in Tea Plantations"
    }
];

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.4], [1, 25]);
    const opacity = useTransform(scrollYProgress, [0.1, 0.3], [1, 0]);
    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Slider */}
                <motion.div
                    style={{ scale: bgScale }}
                    className="absolute inset-0 z-0"
                >
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={slides[currentSlide].image}
                                alt={slides[currentSlide].alt}
                                fill
                                quality={100}
                                sizes="100vw"
                                className="object-cover"
                                priority
                            />

                            {/* Stronger Gradient Overlay for Text Visibility */}
                            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                            <div className="absolute inset-0 bg-black/20" />
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Text Content */}
                <motion.div
                    style={{ scale, opacity }}
                    className="relative z-10 flex flex-col items-center justify-center text-center px-4"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <h1 className="text-[15vw] md:text-[12vw] font-black tracking-tighter text-white leading-[0.9] select-none whitespace-pre-line drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="mt-4 text-xl sm:text-3xl font-light tracking-[0.5em] text-white uppercase drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                                {slides[currentSlide].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Slider Indicators */}
                <div className="absolute bottom-12 z-30 flex gap-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-1 rounded-full transition-all duration-500 ${currentSlide === index ? "w-12 bg-white" : "w-4 bg-white/30 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-28 z-30 flex flex-col items-center gap-2 pointer-events-none"
                >
                    <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-white/70">
                        Scroll to Explore
                    </span>
                    <div className="w-[1px] h-8 bg-white/50 animate-pulse" />
                </motion.div>

            </div>
        </section>
    );
}
