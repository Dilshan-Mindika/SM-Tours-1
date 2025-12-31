"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Heart, Globe, Users, ArrowRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";

export default function AboutPage() {
    return (
        <>
            <PageHero
                image="/about/about-hero-new.jpg"
                title={<span>Our <span className="italic text-secondary">Legacy</span></span>}
                subtitle="Since 2019"
                description="Curating extraordinary journeys through the heart of Sri Lanka."
            />
            <StorySection />
            <ValuesSection />
            <TimelineSection />
            <VisionSection />
            <CTASection />
        </>
    );
}

function StorySection() {
    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[160px] pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight">
                            Born from <br /><span className="italic text-secondary">Passion</span>
                        </h2>
                        <div className="h-[4px] w-20 bg-secondary mb-10" />
                        <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
                            <p>
                                Founded by a team of local travel enthusiasts, SM Tours emerged from a simple yet profound vision: to move beyond the standard tourist trail and offer genuine, immersive experiences of Sri Lanka.
                            </p>
                            <p>
                                We believe travel transcends mere sightseeing—it's about feeling the soul of a place. Each journey we craft is a carefully curated narrative, weaving together hidden gems, authentic cultural encounters, and breathtaking natural wonders.
                            </p>
                            <p>
                                Our guides aren't just drivers; they're storytellers, historians, and local friends who open doors to unique moments you won't find in guidebooks. They share insider knowledge passed down through generations.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[700px] rounded-2xl overflow-hidden group border border-white/10">
                            <Image
                                src="/about/about-story-new.jpg"
                                alt="Sri Lanka Experience"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-md border border-white/20 p-10 max-w-xs rounded-2xl">
                            <p className="text-6xl font-black text-secondary mb-2">6+</p>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white">Years of Excellence</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function ValuesSection() {
    const values = [
        {
            icon: Heart,
            title: "Authentic Soul",
            description: "Every journey celebrates genuine Sri Lankan culture, connecting you with local communities and traditions."
        },
        {
            icon: Award,
            title: "Gold Standard",
            description: "Meticulous attention to detail ensures seamless luxury experiences from arrival to departure."
        },
        {
            icon: Globe,
            title: "Sustainable Future",
            description: "We're committed to preserving Sri Lanka's natural beauty and supporting local conservation efforts."
        },
        {
            icon: Users,
            title: "Personalized Care",
            description: "No two trips are alike. We craft each itinerary to match your unique interests and pace religiously."
        }
    ];

    return (
        <section className="py-32 bg-black text-white relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[140px]" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-black mb-6">
                        Our <span className="italic text-secondary">Values</span>
                    </h2>
                    <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 rounded-2xl transition-all duration-500"
                        >
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary transition-colors duration-500">
                                <value.icon className="h-8 w-8 text-secondary group-hover:text-black transition-colors duration-500" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold mb-4">{value.title}</h3>
                            <p className="text-white/60 leading-relaxed font-light">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineSection() {
    const milestones = [
        { year: "2019", event: "Foundation", desc: "Started with a vision to showcase authentic Sri Lanka" },
        { year: "2022", event: "Expansion", desc: "Expanded our reach with expert local guides across the island" },
        { year: "2024", event: "Recognition", desc: "Awarded Best Tour Operator by Sri Lanka Tourism" },
        { year: "2025", event: "Innovation", desc: "Launching sustainable ultra-luxury eco-tours" }
    ];

    return (
        <section className="py-32 bg-black border-t border-white/5">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-5xl md:text-7xl font-serif font-black text-white mb-6">
                        Our <span className="italic text-secondary">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2 hidden md:block" />

                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`relative flex flex-col items-center mb-20 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'}`}>
                                <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl hover:border-secondary/50 transition-colors duration-500 group">
                                    <p className="text-5xl font-black font-serif mb-2 text-white group-hover:text-secondary transition-colors">{milestone.year}</p>
                                    <h3 className="text-2xl font-bold mb-3 text-white">{milestone.event}</h3>
                                    <p className="text-white/60 font-light">{milestone.desc}</p>
                                </div>
                            </div>
                            <div className="absolute left-1/2 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 hidden md:block ring-4 ring-black" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function VisionSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/about/about-vision-new.jpg"
                    alt="Vision"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center text-white"
                >
                    <MapPin className="h-20 w-20 text-white mx-auto mb-8 drop-shadow-lg" />
                    <h2 className="text-6xl md:text-8xl font-serif font-black mb-10 drop-shadow-xl">
                        Endless <span className="italic text-white">Horizons</span>
                    </h2>
                    <p className="text-2xl md:text-3xl font-light leading-relaxed mb-16 drop-shadow-md">
                        To be the bridge between curious travelers and the authentic heart of Sri Lanka, creating transformative journeys that inspire.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        <div>
                            <p className="text-6xl font-black text-white mb-2 drop-shadow-lg">5k+</p>
                            <p className="text-sm font-bold uppercase tracking-widest text-white/90">Tranquil Minds</p>
                        </div>
                        <div>
                            <p className="text-6xl font-black text-white mb-2 drop-shadow-lg">50+</p>
                            <p className="text-sm font-bold uppercase tracking-widest text-white/90">Expert Guides</p>
                        </div>
                        <div>
                            <p className="text-6xl font-black text-white mb-2 drop-shadow-lg">100%</p>
                            <p className="text-sm font-bold uppercase tracking-widest text-white/90">Satisfaction</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function CTASection() {
    return (
        <section className="py-32 bg-secondary text-black">
            <div className="container-custom text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-5xl md:text-8xl font-serif font-black mb-8 leading-tight">
                        Start Your <br /> Journey
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium opacity-80">
                        Let's craft an unforgettable Sri Lankan adventure tailored just for you
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-16 py-6 text-xl font-black uppercase tracking-widest inline-flex items-center gap-4 hover:bg-white hover:text-black transition-colors duration-300 shadow-2xl"
                        >
                            Plan Your Trip
                            <ArrowRight className="h-6 w-6" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
