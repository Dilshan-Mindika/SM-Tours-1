"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const destinations = [
    {
        name: "Sigiriya",
        image: "/destinations/sigiriya.jpg",
        id: "sigiriya",
        desc: "The Lion Rock Fortress"
    },
    {
        name: "Ella",
        image: "/destinations/ella.jpg",
        id: "ella",
        desc: "Misty Mountain Peaks"
    },
    {
        name: "Galle",
        image: "/destinations/galle.jpg",
        id: "galle",
        desc: "Portuguese Heritage"
    },
    {
        name: "Yala",
        image: "/destinations/yala.jpg",
        id: "yala",
        desc: "Safari & Wilderness"
    }
];

export function DestinationsPreview() {
    const [activeId, setActiveId] = useState<string | null>("sigiriya");

    return (
        <section className="py-24 bg-white text-black">
            <div className="container-custom mb-12 flex justify-between items-end">
                <div>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold leading-none">Curated <span className="text-secondary">Destinations</span></h2>
                </div>
                <Link href="/destinations" className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                    View All <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>

            <div className="h-[600px] w-full flex flex-col md:flex-row gap-2 px-4 md:px-0">
                {destinations.map((dest) => (
                    <motion.div
                        key={dest.id}
                        layout
                        onHoverStart={() => setActiveId(dest.id)}
                        onClick={() => setActiveId(dest.id)}
                        className={`relative rounded-none overflow-hidden cursor-pointer transition-all duration-500 ease-in-out ${activeId === dest.id ? 'flex-[3]' : 'flex-[1]'}`}
                    >
                        <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className="object-cover"
                        />
                        <div className={`absolute inset-0 transition-opacity duration-300 ${activeId === dest.id ? 'bg-black/20' : 'bg-black/60 hover:bg-black/40'}`} />

                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <h3 className={`font-bold font-serif text-white transition-all duration-300 ${activeId === dest.id ? 'text-4xl md:text-5xl mb-2' : 'text-2xl rotate-0 md:-rotate-90 md:origin-bottom-left md:translate-x-8 md:mb-12 whitespace-nowrap'}`}>
                                {dest.name}
                            </h3>
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: activeId === dest.id ? 1 : 0, height: activeId === dest.id ? 'auto' : 0 }}
                                className="overflow-hidden"
                            >
                                <p className="text-white/80 text-lg mb-4">{dest.desc}</p>
                                <div className="w-10 h-10 bg-secondary flex items-center justify-center">
                                    <ArrowUpRight className="text-black h-6 w-6" />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-8 flex justify-center md:hidden">
                <Link href="/destinations" className="flex items-center gap-2 font-bold uppercase tracking-widest hover:text-secondary transition-colors">
                    View All <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>
        </section>
    );
}
