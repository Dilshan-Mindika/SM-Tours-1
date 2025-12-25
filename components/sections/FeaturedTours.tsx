"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const tours = [
    {
        title: "Signature Sri Lanka",
        image: "/tours/signature.jpg",
        days: "14 Days",
        type: "Luxury"
    },
    {
        title: "Wilderness Echoes",
        image: "/tours/wildlife.jpg",
        days: "7 Days",
        type: "Wildlife"
    },
    {
        title: "Cultural Odyssey",
        image: "/tours/cultural.jpg",
        days: "10 Days",
        type: "Heritage"
    },
    {
        title: "Coastal Bliss",
        image: "/tours/beach.jpg",
        days: "5 Days",
        type: "Beach"
    },
];

export function FeaturedTours() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-20 mix-blend-difference text-white">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold leading-none">
                        Our Signature <br /> <span className="text-secondary">Journeys</span>
                    </h2>
                </div>

                <motion.div style={{ x }} className="flex gap-12 pl-[10vw]">
                    {tours.map((tour, index) => (
                        <div key={index} className="relative w-[80vw] md:w-[60vw] h-[70vh] shrink-0 group overflow-hidden border border-white/20">
                            <Image
                                src={tour.image}
                                alt={tour.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex justify-between items-end">
                                <div>
                                    <span className="text-secondary tracking-widest uppercase text-sm font-bold mb-2 block">{tour.type} | {tour.days}</span>
                                    <h3 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                                        {tour.title}
                                    </h3>
                                    <Link href={`/contact?tour=${encodeURIComponent(tour.title)}`}>
                                        <button className="bg-secondary text-black px-8 py-3 font-bold uppercase tracking-wider hover:bg-white transition-colors">
                                            View Itinerary
                                        </button>
                                    </Link>
                                </div>
                                <div className="hidden md:block">
                                    <ArrowRight className="h-20 w-20 text-white/20 group-hover:text-secondary transition-colors duration-500" />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Final CTA Card */}
                    <div className="relative w-[40vw] h-[70vh] shrink-0 flex flex-col justify-center items-center bg-white text-black p-12">
                        <h3 className="text-4xl font-serif font-bold text-center mb-6">Create Your Own Story</h3>
                        <Link href="/contact">
                            <button className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-secondary hover:text-black transition-colors">
                                Start Planning
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
