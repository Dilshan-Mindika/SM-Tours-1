"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
    Map, Hotel, Car, Globe, Heart, Calendar,
    Shield, ArrowRight, Star
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/sections/PageHero";

// --- Data ---
const services = [
    {
        id: "planning",
        icon: Map,
        title: "Bespoke Planning",
        desc: "Itineraries crafted around your specific pace, interests, and travel style.",
        image: "/services/tour-guide.jpg",
        meta: "01"
    },
    {
        id: "stays",
        icon: Hotel,
        title: "Luxury Stays",
        desc: "Exclusive access to the island's finest boutique villas and resorts.",
        image: "/services/villa.jpg",
        meta: "02"
    },
    {
        id: "transport",
        icon: Car,
        title: "Premium Fleet",
        desc: "Travel in comfort with our luxury sedans, VIP vans, and 4x4 jeeps.",
        image: "/services/luxury-car.jpg",
        meta: "03"
    },
    {
        id: "logistics",
        icon: Globe,
        title: "VIP Logistics",
        desc: "Fast-track airport services, visa handling, and seamless transfers.",
        image: "/services/airport.jpg",
        meta: "04"
    },
    {
        id: "wellness",
        icon: Heart,
        title: "Wellness",
        desc: "Curated Ayurveda and yoga retreats at premier sanctuaries.",
        image: "/services/ayurveda.jpg",
        meta: "05"
    },
    {
        id: "events",
        icon: Calendar,
        title: "Events",
        desc: "Destination weddings and special celebrations managed to perfection.",
        image: "/services/wedding.jpg",
        meta: "06"
    }
];

const fleet = [
    {
        id: "sedan",
        name: "Luxury Sedan",
        model: "BMW 5 Series / Mercedes E-Class",
        capacity: "3 Pax",
        image: "/services/luxury-car.jpg"
    },
    {
        id: "van",
        name: "VIP Van",
        model: "Toyota KDH High-Roof",
        capacity: "6-8 Pax",
        image: "/services/luxury-car.jpg" // Premium Van Proxy
    },
    {
        id: "jeep",
        name: "Safari Defender",
        model: "Land Rover Defender / Toyota Hilux",
        capacity: "6 Pax",
        image: "/services/safari-jeep.jpg"
    },
    {
        id: "coach",
        name: "Executive Coach",
        model: "Luxury Tourist Bus",
        capacity: "20+ Pax",
        image: "/destinations/dest-nuwara-eliya.jpg" // Scenic Group Travel Vibe
    }
];



export default function ServicesPage() {
    return (
        <div className="bg-[#020202] min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
            {/* Ambient Noise Texture */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('/noise.png')] mix-blend-overlay" />

            <PageHero
                image="/destinations/dest-yala.jpg"
                title="SERVICE."
                subtitle="Excellence in Motion"
                description=""
            />
            <Marquee />
            <ServicesGrid />
            <InteractiveFleet />
            <ConciergeExtras />
        </div>
    );
}

function Marquee() {
    return (
        <div className="bg-secondary text-black py-4 overflow-hidden relative z-20 border-y border-white/10">
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 20, ease: "linear", repeat: Infinity }}
                className="whitespace-nowrap flex gap-12 font-black text-4xl md:text-6xl uppercase tracking-tighter"
            >
                {Array(8).fill("BESPOKE • LUXURY • PRIVATE • EXCLUSIVE • GLOBAL •").map((text, i) => (
                    <span key={i}>{text}</span>
                ))}
            </motion.div>
        </div>
    );
}

function ServicesGrid() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section className="py-32 px-4 md:px-8 relative z-20">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            hoveredId={hoveredId}
                            setHoveredId={setHoveredId}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({ service, index, hoveredId, setHoveredId }: any) {
    const isHovered = hoveredId === service.id;
    const isDimmed = hoveredId !== null && !isHovered;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={cn(
                "group relative h-[450px] overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 rounded-sm cursor-pointer",
                isDimmed && "opacity-30 blur-[2px]"
            )}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
        >
            {/* Image Layer - Reveals on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="flex justify-between items-start">
                    <span className="text-[120px] font-serif leading-none text-white/5 font-bold absolute -top-4 -left-4 select-none group-hover:text-white/10 transition-colors duration-500">
                        {service.meta}
                    </span>
                    <div className="ml-auto w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-colors duration-500">
                        <service.icon className="w-5 h-5 text-white group-hover:text-black" />
                    </div>
                </div>

                <div>
                    <h3 className="text-3xl font-serif font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-500">
                        {service.title}
                    </h3>
                    <p className="text-white/60 font-light leading-relaxed mb-6 group-hover:text-white/90 transition-colors">
                        {service.desc}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                        Details <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function InteractiveFleet() {
    const [activeFleet, setActiveFleet] = useState(fleet[0]);

    return (
        <section className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
            <div className="container-custom relative z-10">
                <h2 className="text-5xl md:text-8xl font-serif text-white mb-16">
                    The <span className="text-secondary italic">Fleet</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Interactive List */}
                    <div className="space-y-0">
                        {fleet.map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setActiveFleet(item)}
                                className={cn(
                                    "group py-8 border-b border-white/10 cursor-pointer transition-all duration-300",
                                    activeFleet.id === item.id ? "opacity-100 pl-4 border-white/50" : "opacity-40 hover:opacity-70"
                                )}
                            >
                                <div className="flex items-center justify-between">
                                    <h3 className="text-4xl font-serif font-light">{item.name}</h3>
                                    <ArrowRight className={cn(
                                        "w-6 h-6 transition-transform duration-300",
                                        activeFleet.id === item.id ? "text-secondary rotate-0" : "text-white/20 -rotate-45"
                                    )} />
                                </div>
                                <div className={cn(
                                    "overflow-hidden transition-all duration-500 ease-in-out",
                                    activeFleet.id === item.id ? "max-h-20 opacity-100 mt-2" : "max-h-0 opacity-0"
                                )}>
                                    <p className="text-white/60 text-lg font-light">{item.model}</p>
                                    <span className="text-xs font-bold uppercase tracking-widest text-secondary">{item.capacity}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Image Showcase */}
                    <div className="relative h-[600px] w-full rounded-sm overflow-hidden border border-white/10 hidden lg:block">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeFleet.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={activeFleet.image}
                                    alt={activeFleet.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                                <div className="absolute bottom-8 left-8">
                                    <h4 className="text-6xl font-serif font-bold text-white mb-2">{activeFleet.name}</h4>
                                    <p className="text-white/60 uppercase tracking-widest text-sm">Premium Class</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ConciergeExtras() {
    return (
        <section className="py-24 border-t border-white/5 bg-[#050505]">
            <div className="container-custom text-center">
                <h3 className="text-2xl font-light text-white/50 mb-12 uppercase tracking-[0.3em]">Concierge Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Connectivity", "Photography", "Insurance", "Exchange"].map((item, i) => (
                        <div key={i} className="p-6 border border-white/5 hover:border-secondary/30 transition-colors duration-300">
                            <p className="text-sm font-bold uppercase tracking-widest text-white">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
