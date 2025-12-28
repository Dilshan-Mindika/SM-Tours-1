"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Search, Compass, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Data with Bento Sizes & Atmospheric Meta ---
type DestinationSize = "normal" | "large" | "wide" | "tall";

interface Destination {
    id: string;
    name: string;
    category: string;
    image: string;
    desc: string;
    size: DestinationSize;
    meta: string;
}

const allDestinations: Destination[] = [
    {
        id: "sigiriya",
        name: "Sigiriya",
        category: "Heritage",
        image: "/destinations/dest-sigiriya.jpg",
        desc: "The Lion Rock fortress, a UNESCO World Heritage site standing majestic amidst the jungle.",
        size: "large",
        meta: "Ancient Fortress"
    },
    {
        id: "ella",
        name: "Ella",
        category: "Nature",
        image: "/destinations/dest-ella.jpg",
        desc: "A hiking paradise in the central highlands with the Nine Arch Bridge.",
        size: "tall",
        meta: "Mountain Bliss"
    },
    {
        id: "yala",
        name: "Yala",
        category: "Wildlife",
        image: "/destinations/dest-yala.jpg",
        desc: "The premier sanctuary for leopard sightings in the wild.",
        size: "wide",
        meta: "Leopard Safari"
    },
    {
        id: "galle",
        name: "Galle Fort",
        category: "Heritage",
        image: "/destinations/dest-galle.jpg",
        desc: "Dutch colonial walled city blending history with tropical charm.",
        size: "wide",
        meta: "Colonial Coast"
    },
    {
        id: "trincomalee",
        name: "Trincomalee",
        category: "Beach",
        image: "/destinations/dest-trincomalee.jpg",
        desc: "Pristine white sands and crystal clear waters of the East Coast.",
        size: "wide",
        meta: "Untouched Beach"
    },
    {
        id: "mirissa",
        name: "Mirissa",
        category: "Beach",
        image: "/destinations/dest-mirissa.jpg",
        desc: "Whale watching capital with a vibrant beach nightlife.",
        size: "normal",
        meta: "Whales & Surf"
    },
    {
        id: "kandy",
        name: "Kandy",
        category: "Heritage",
        image: "/destinations/dest-kandy.jpg",
        desc: "The sacred Temple of the Tooth amidst misty hills.",
        size: "normal",
        meta: "Spiritual Centre"
    },
    {
        id: "nuwara-eliya",
        name: "Nuwara Eliya",
        category: "Nature",
        image: "/destinations/dest-nuwara-eliya.jpg",
        desc: "'Little England' surrounded by lush tea plantations.",
        size: "normal",
        meta: "Tea Country"
    },
    {
        id: "anuradhapura",
        name: "Anuradhapura",
        category: "Heritage",
        image: "/destinations/dest-anuradhapura.jpg",
        desc: "One of the oldest continuously inhabited cities with vast ruins.",
        size: "normal",
        meta: "Sacred City"
    },
    {
        id: "colombo",
        name: "Colombo",
        category: "City",
        image: "/destinations/dest-colombo.jpg",
        desc: "A vibrant fusion of colonial heritage and modern urban life.",
        size: "normal",
        meta: "Urban Pulse"
    },
    {
        id: "udawalawe",
        name: "Udawalawe",
        category: "Wildlife",
        image: "/destinations/dest-udawalawe.jpg",
        desc: "Home to large herds of elephants and the Transit Home.",
        size: "normal",
        meta: "Elephant Gathering"
    },
    {
        id: "hikkaduwa",
        name: "Hikkaduwa",
        category: "Beach",
        image: "/destinations/dest-hikkaduwa.jpg",
        desc: "Famous for coral sanctuaries and sea turtles.",
        size: "normal",
        meta: "Coral Reefs"
    },
    {
        id: "arugam-bay",
        name: "Arugam Bay",
        category: "Beach",
        image: "/destinations/dest-arugam-bay.jpg",
        desc: "World-class surfing point with a laid-back vibe.",
        size: "normal",
        meta: "Surf City"
    },
    {
        id: "wilpattu",
        name: "Wilpattu",
        category: "Wildlife",
        image: "/destinations/dest-wilpattu.jpg",
        desc: "Land of natural lakes and secluded wildlife encounters.",
        size: "normal",
        meta: "Land of Lakes"
    },
    {
        id: "dambulla",
        name: "Dambulla",
        category: "Heritage",
        image: "/destinations/dest-dambulla.jpg",
        desc: "Ancient cave temple complex filled with Buddhist art.",
        size: "normal",
        meta: "Cave Temples"
    },
    {
        id: "minneriya",
        name: "Minneriya",
        category: "Wildlife",
        image: "/destinations/dest-minneriya.jpg",
        desc: "Site of 'The Gathering', a spectacular meeting of elephants.",
        size: "normal",
        meta: "The Gathering"
    },
    {
        id: "bentota",
        name: "Bentota",
        category: "Beach",
        image: "/destinations/dest-bentota.jpg",
        desc: "Luxury resorts meeting the river and the sea.",
        size: "normal",
        meta: "Luxury Escape"
    },
    {
        id: "unawatuna",
        name: "Unawatuna",
        category: "Beach",
        image: "/destinations/dest-unawatuna.jpg",
        desc: "A crescent bay perfect for swimming and relaxation.",
        size: "normal",
        meta: "Tropical Bay"
    }
];

const categories = ["All", "Heritage", "Nature", "Wildlife", "Beach", "City"];

// Animation Variants
const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 50, damping: 15 }
    },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } }
};

export default function DestinationsPage() {
    return (
        <div className="bg-[#020202] min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
            {/* Ambient Noise Texture */}
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('/noise.png')] mix-blend-overlay" />

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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax */}
            <motion.div style={{ y, scale: 1.1 }} className="absolute inset-0 z-0">
                <Image
                    src="/destinations/dest-ella.jpg"
                    alt="Sri Lanka Landscape"
                    fill
                    className="object-cover opacity-60 grayscale-[20%]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#020202]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)]" />
            </motion.div>

            {/* Editorial Typography */}
            <motion.div style={{ opacity, y: textY }} className="relative z-10 text-center px-4 w-full">
                <div className="overflow-hidden mb-2">
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-xs md:text-sm font-bold tracking-[0.6em] uppercase text-white/60"
                    >
                        The Pearl of the Indian Ocean
                    </motion.p>
                </div>

                <div className="relative">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="text-[18vw] leading-[0.85] font-serif font-black text-white mix-blend-overlay tracking-tighter"
                    >
                        CEYLON
                    </motion.h1>

                </div>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
            </motion.div>
        </section>
    );
}

function DestinationsBento() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    // Memoize filtering for performance
    const filteredDestinations = useMemo(() => {
        if (activeCategory === "All") return allDestinations;
        return allDestinations.filter(d => d.category === activeCategory);
    }, [activeCategory]);

    return (
        <section className="relative z-20 pb-40 px-4 md:px-8 -mt-20">
            <div className="max-w-[1800px] mx-auto">

                {/* Minimalist Filter Bar */}
                <div className="flex justify-center mb-20 sticky top-10 z-30 pointer-events-none">
                    <div className="pointer-events-auto bg-black/40 backdrop-blur-xl border border-white/5 rounded-full px-2 py-2 flex gap-1 shadow-2xl">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500",
                                    activeCategory === category
                                        ? "bg-white text-black shadow-lg"
                                        : "text-white/40 hover:text-white hover:bg-white/5"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Staggered Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] gap-6"
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
                    <div className="text-center py-40 text-white/20">
                        <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-20" />
                        <p className="uppercase tracking-widest text-sm">No Journeys Found</p>
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
    // Dynamic Spanning
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
            variants={itemVariants}
            className={cn(
                "group relative overflow-hidden bg-[#0A0A0A] rounded-sm cursor-pointer", // Rounded-sm for bolder look
                spanClasses[dest.size]
            )}
            onMouseEnter={() => setHoveredId(dest.id)}
            onMouseLeave={() => setHoveredId(null)}
        >
            <Link href={`/contact?destination=${encodeURIComponent(dest.name)}`} className="block h-full w-full relative">

                {/* Image Layer */}
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        scale: isHovered ? 1.1 : 1,
                        filter: isDimmed ? "grayscale(100%) brightness(0.4)" : "grayscale(0%) brightness(1)"
                    }}
                    transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }} // Smooth cubic-bezier
                >
                    <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Atmosphere Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Content Layer */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">

                    {/* Floating Meta Guide */}
                    <div className="absolute top-6 right-6 overflow-hidden">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0 }}
                            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                        >
                            <Compass className="w-3 h-3 text-secondary" />
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white">{dest.meta}</span>
                        </motion.div>
                    </div>

                    <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                        <motion.span
                            className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-secondary mb-2"
                            animate={{ opacity: isDimmed ? 0.3 : 1 }}
                        >
                            {dest.category}
                        </motion.span>

                        <h3 className={cn(
                            "font-serif font-bold text-white leading-[0.9] mb-3 transition-colors",
                            dest.size === 'large' ? "text-5xl md:text-6xl" : "text-3xl md:text-4xl",
                            isDimmed ? "text-white/30" : "text-white"
                        )}>
                            {dest.name}
                        </h3>

                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: isHovered ? "auto" : 0, opacity: isHovered ? 1 : 0 }}
                            className="overflow-hidden"
                        >
                            <p className="text-sm font-light text-white/80 leading-relaxed mb-4 max-w-[90%]">
                                {dest.desc}
                            </p>

                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white">
                                <span>Explore</span>
                                <ArrowRight className="w-4 h-4 text-secondary" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
