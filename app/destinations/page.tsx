"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Search, Compass, Calendar, Star } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data with Bento Sizes ---
type DestinationSize = "normal" | "large" | "wide" | "tall";

interface Destination {
    id: string;
    name: string;
    category: string;
    image: string;
    desc: string;
    badges: string[];
    size: DestinationSize;
    meta: string; // e.g., "Best: Dec-Apr" or "3h from Colombo"
}

const allDestinations: Destination[] = [
    // Highlight: Sigiriya (Large)
    {
        id: "sigiriya",
        name: "Sigiriya",
        category: "Heritage",
        image: "/destinations/dest-sigiriya.jpg",
        desc: "The Lion Rock fortress, a UNESCO World Heritage site standing majestic amidst the jungle.",
        badges: ["History", "Iconic"],
        size: "large",
        meta: "Best: Jan-Apr"
    },
    // Highlight: Ella (Tall)
    {
        id: "ella",
        name: "Ella",
        category: "Nature",
        image: "/destinations/dest-ella.jpg",
        desc: "A hiking paradise in the central highlands with the Nine Arch Bridge.",
        badges: ["Hiking", "Views"],
        size: "tall",
        meta: "Cool Climate"
    },
    {
        id: "anuradhapura",
        name: "Anuradhapura",
        category: "Heritage",
        image: "/destinations/dest-anuradhapura.jpg",
        desc: "Ancient capital with well-preserved ruins.",
        badges: ["Ruins"],
        size: "normal",
        meta: "UNESCO Site"
    },
    // Highlight: Yala (Wide)
    {
        id: "yala",
        name: "Yala National Park",
        category: "Wildlife",
        image: "/destinations/dest-yala.jpg",
        desc: "The premier sanctuary for leopard sightings.",
        badges: ["Safari", "Leopards"],
        size: "wide",
        meta: "High Density"
    },
    {
        id: "kandy",
        name: "Kandy",
        category: "Heritage",
        image: "/destinations/dest-kandy.jpg",
        desc: "Cultural capital & Temple of the Tooth.",
        badges: ["Culture"],
        size: "normal",
        meta: "Sacred City"
    },
    {
        id: "galle",
        name: "Galle Fort",
        category: "Heritage",
        image: "/destinations/dest-galle.jpg",
        desc: "Dutch colonial walled city on the coast.",
        badges: ["Colonial"],
        size: "wide",
        meta: "UNESCO Fort"
    },
    {
        id: "mirissa",
        name: "Mirissa",
        category: "Beach",
        image: "/destinations/dest-mirissa.jpg",
        desc: "Whale watching and vibrant nightlife.",
        badges: ["Whales"],
        size: "normal",
        meta: "Season: Nov-Apr"
    },
    {
        id: "nuwara-eliya",
        name: "Nuwara Eliya",
        category: "Nature",
        image: "/destinations/dest-nuwara-eliya.jpg",
        desc: "Little England of Sri Lanka.",
        badges: ["Tea"],
        size: "normal",
        meta: "Mountains"
    },
    // Highlight: Trinco (Wide)
    {
        id: "trincomalee",
        name: "Trincomalee",
        category: "Beach",
        image: "/destinations/dest-trincomalee.jpg",
        desc: "Pristine white sands of the East Coast.",
        badges: ["East Coast"],
        size: "wide",
        meta: "Best: May-Sep"
    },
    {
        id: "colombo",
        name: "Colombo",
        category: "City",
        image: "/destinations/dest-colombo.jpg",
        desc: "Vibrant commercial capital.",
        badges: ["City"],
        size: "normal",
        meta: "Shopping"
    },
    {
        id: "udawalawe",
        name: "Udawalawe",
        category: "Wildlife",
        image: "/destinations/dest-udawalawe.jpg",
        desc: "Famous for elephant herds.",
        badges: ["Elephants"],
        size: "normal",
        meta: "Year-Round"
    },
    {
        id: "hikkaduwa",
        name: "Hikkaduwa",
        category: "Beach",
        image: "/destinations/dest-hikkaduwa.jpg",
        desc: "Coral reefs and sea turtles.",
        badges: ["Corals"],
        size: "normal",
        meta: "Snorkeling"
    },
    {
        id: "arugam-bay",
        name: "Arugam Bay",
        category: "Beach",
        image: "/destinations/dest-arugam-bay.jpg",
        desc: "World-class surfing spots.",
        badges: ["Surfing"],
        size: "normal",
        meta: "Surf Capital"
    },
    {
        id: "wilpattu",
        name: "Wilpattu",
        category: "Wildlife",
        image: "/destinations/dest-wilpattu.jpg",
        desc: "Land of lakes and leopards.",
        badges: ["Lakes"],
        size: "normal",
        meta: "Secluded"
    },
    {
        id: "dambulla",
        name: "Dambulla",
        category: "Heritage",
        image: "/destinations/dest-dambulla.jpg",
        desc: "Cave temple complex.",
        badges: ["Caves"],
        size: "normal",
        meta: "Ancient Art"
    },
    {
        id: "minneriya",
        name: "Minneriya",
        category: "Wildlife",
        image: "/destinations/dest-minneriya.jpg",
        desc: "The Great Elephant Gathering.",
        badges: ["Elephants"],
        size: "normal",
        meta: "Event: Aug-Sep"
    },
    {
        id: "bentota",
        name: "Bentota",
        category: "Beach",
        image: "/destinations/dest-bentota.jpg",
        desc: "Luxury resorts and water sports.",
        badges: ["Luxury"],
        size: "normal",
        meta: "Relaxation"
    },
    {
        id: "unawatuna",
        name: "Unawatuna",
        category: "Beach",
        image: "/destinations/dest-unawatuna.jpg",
        desc: "Calm waters and beach vibes.",
        badges: ["Beach"],
        size: "normal",
        meta: "Family Safe"
    },
];

const categories = ["All", "Heritage", "Nature", "Wildlife", "Beach", "City"];

export default function DestinationsPage() {
    return (
        <div className="bg-[#050505] min-h-screen text-white selection:bg-secondary selection:text-black">
            <HeroSection />
            <DestinationsBento />
        </div>
    );
}

function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[85vh] overflow-hidden bg-black flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                <Image
                    src="/destinations/dest-ella.jpg" // High impact image
                    alt="Sri Lanka"
                    fill
                    className="object-cover opacity-50 scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#050505]" />
            </motion.div>

            {/* Content */}
            <motion.div style={{ opacity }} className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <h1 className="text-[15vw] md:text-[180px] leading-none font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 tracking-tighter mix-blend-overlay opacity-90">
                        CEYLON
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl md:text-2xl text-white/80 font-light tracking-[0.2em] uppercase mt-[-2vw] md:mt-[-40px]"
                >
                    The Pearl of the Indian Ocean
                </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-white/40">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
            </motion.div>
        </section>
    );
}

function DestinationsBento() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    const filteredDestinations = allDestinations.filter(dest => {
        const matchesCategory = activeCategory === "All" || dest.category === activeCategory;
        const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            dest.desc.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="relative z-20 pb-32 px-4 md:px-8 -mt-20">
            <div className="max-w-[1600px] mx-auto">

                {/* Controls Header */}
                <div className="flex flex-col xl:flex-row gap-8 justify-between items-end mb-16 px-2">
                    {/* Search */}
                    <div className="relative w-full xl:max-w-md group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-white/30 group-focus-within:text-secondary transition-colors" />
                        </div>
                        <input
                            type="text"
                            placeholder="Find your paradise..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-secondary/50 focus:bg-white/10 text-white placeholder:text-white/20 transition-all font-light"
                        />
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "text-sm font-bold uppercase tracking-widest transition-all duration-300 relative pb-1",
                                    activeCategory === category
                                        ? "text-secondary"
                                        : "text-white/40 hover:text-white"
                                )}
                            >
                                {category}
                                <span className={cn(
                                    "absolute bottom-0 left-0 h-[2px] bg-secondary transition-all duration-300",
                                    activeCategory === category ? "w-full" : "w-0"
                                )} />
                            </button>
                        ))}
                    </div>
                </div>

                {/* The Bento Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] md:auto-rows-[350px] gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredDestinations.map((dest) => (
                            <BentoCard
                                key={dest.id}
                                dest={dest}
                                hoveredId={hoveredId}
                                setHoveredId={setHoveredId}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredDestinations.length === 0 && (
                    <div className="text-center py-32 text-white/30 font-light text-xl">
                        No destinations found matching your criteria.
                    </div>
                )}
            </div>
        </section>
    );
}

function BentoCard({ dest, hoveredId, setHoveredId }: {
    dest: Destination,
    hoveredId: string | null,
    setHoveredId: (id: string | null) => void
}) {
    // Determine grid span classes based on 'size'
    const spanClasses = {
        normal: "md:col-span-1 md:row-span-1",
        large: "md:col-span-2 md:row-span-2",
        wide: "md:col-span-2 md:row-span-1",
        tall: "md:col-span-1 md:row-span-2",
    };

    const isHovered = hoveredId === dest.id;
    const isDimmed = hoveredId !== null && !isHovered;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
                opacity: isDimmed ? 0.3 : 1,
                scale: isDimmed ? 0.98 : 1,
                filter: isDimmed ? "grayscale(100%)" : "grayscale(0%)"
            }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className={cn(
                "group relative overflow-hidden bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-500",
                spanClasses[dest.size]
            )}
            onMouseEnter={() => setHoveredId(dest.id)}
            onMouseLeave={() => setHoveredId(null)}
        >
            <Link href={`/contact?destination=${encodeURIComponent(dest.name)}`} className="block h-full w-full">

                {/* Image */}
                <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">

                    {/* Top Meta */}
                    <div className="flex justify-between items-start transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="px-3 py-1 bg-secondary text-black text-[10px] font-black uppercase tracking-widest">
                            {dest.category}
                        </span>
                        <div className="flex gap-2 text-white/80 text-xs">
                            <Compass className="w-4 h-4" />
                            <span>{dest.meta}</span>
                        </div>
                    </div>

                    {/* Bottom Info */}
                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className={cn(
                            "font-serif font-bold text-white mb-2 leading-none transition-transform duration-500 origin-left",
                            dest.size === 'large' ? "text-5xl group-hover:scale-90" : "text-3xl group-hover:scale-90"
                        )}>
                            {dest.name}
                        </h3>

                        <div className="overflow-hidden max-h-0 group-hover:max-h-[200px] transition-all duration-700 ease-out">
                            <p className="text-white/70 text-sm font-light leading-relaxed mb-6 mt-2 max-w-[90%]">
                                {dest.desc}
                            </p>
                            <div className="flex items-center gap-2 text-secondary text-xs font-bold uppercase tracking-widest">
                                Explore <ArrowRight className="w-4 h-4 ml-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
