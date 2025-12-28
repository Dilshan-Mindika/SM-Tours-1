"use client";

import { useState, useMemo, useRef } from "react";
import { TourCard } from "@/components/ui/TourCard";
import { cn } from "@/lib/utils";
import { toursData, Tour } from "../../lib/tours-data";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Search, SlidersHorizontal, MapPin } from "lucide-react";
import Image from "next/image";

const categories = ["All", "Heritage", "Wildlife", "Beach", "Nature", "Adventure", "Family"];

const sortOptions = [
    { label: "Recommended", value: "recommended" },
    { label: "Duration: Low to High", value: "duration-asc" },
    { label: "Duration: High to Low", value: "duration-desc" },
];

export default function ToursPage() {
    return (
        <div className="bg-black min-h-screen">
            <HeroSection />
            <ToursGrid />
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
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[70vh] overflow-hidden bg-black">
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src="/tours/tours-hero-new.jpg"
                    alt="Exclusive Journeys"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative h-full flex flex-col items-center justify-center text-center px-4"
            >
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-secondary" />
                    <span className="text-secondary text-sm font-black uppercase tracking-[0.3em]">Curated Experiences</span>
                    <div className="h-[1px] w-12 bg-secondary" />
                </div>
                <h1 className="text-6xl md:text-9xl font-serif font-black text-white mb-8">
                    Exclusive <span className="italic text-secondary">Journeys</span>
                </h1>
                <p className="text-xl text-white/80 max-w-2xl font-light leading-relaxed">
                    Designed for the discerning traveler. Explore the unexplore in the Pearl of the Indian Ocean.
                </p>
            </motion.div>
        </section>
    );
}

function ToursGrid() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("recommended");

    // Helper to parse duration string
    const parseDuration = (duration: string) => {
        const match = duration.match(/(\d+)/);
        return match ? parseInt(match[0]) : 0;
    };

    const filteredAndSortedTours = useMemo(() => {
        let result = toursData;

        // 1. Filter by Category
        if (activeCategory !== "All") {
            result = result.filter((tour: Tour) => tour.category === activeCategory);
        }

        // 2. Filter by Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter((tour: Tour) =>
                tour.title.toLowerCase().includes(query) ||
                tour.description.toLowerCase().includes(query)
            );
        }

        // 3. Sort
        result = [...result].sort((a, b) => {
            if (sortOption === "duration-asc") {
                return parseDuration(a.duration) - parseDuration(b.duration);
            }
            if (sortOption === "duration-desc") {
                return parseDuration(b.duration) - parseDuration(a.duration);
            }
            return 0; // Keep original order for "recommended"
        });

        return result;
    }, [activeCategory, searchQuery, sortOption]);

    return (
        <section className="py-24 container-custom relative z-10 -mt-20">
            {/* Search & Filter Bar */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl mb-16 shadow-2xl">
                <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">

                    {/* Search */}
                    <div className="relative w-full lg:max-w-md group">
                        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40 group-focus-within:text-secondary transition-colors" />
                        <input
                            type="text"
                            placeholder="Find your perfect escape..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-14 pr-6 py-4 bg-black/50 border border-white/10 rounded-xl focus:outline-none focus:border-secondary/50 text-white placeholder:text-white/30 transition-all font-light"
                        />
                    </div>

                    {/* Categories - Desktop */}
                    <div className="hidden lg:flex gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border",
                                    activeCategory === category
                                        ? "bg-secondary text-black border-secondary"
                                        : "bg-transparent text-white/60 border-transparent hover:bg-white/5 hover:text-white"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Sort */}
                    <div className="relative w-full lg:w-auto min-w-[200px]">
                        <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="w-full pl-12 pr-10 py-4 bg-black/50 border border-white/10 rounded-xl appearance-none focus:outline-none focus:border-secondary/50 cursor-pointer text-white font-medium text-sm hover:bg-black/70 transition-colors"
                        >
                            {sortOptions.map(opt => (
                                <option key={opt.value} value={opt.value} className="bg-black text-white">{opt.label}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/50" />
                    </div>
                </div>

                {/* Categories - Mobile Scroll */}
                <div className="lg:hidden mt-6 overflow-x-auto pb-2 flex gap-2 scrollbar-hide">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap",
                                activeCategory === category
                                    ? "bg-secondary text-black border-secondary"
                                    : "bg-white/5 text-white/60 border-white/10"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Results Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8"
            >
                <AnimatePresence mode="popLayout">
                    {filteredAndSortedTours.length > 0 ? (
                        filteredAndSortedTours.map((tour: Tour) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={tour.id}
                            >
                                <TourCard
                                    id={tour.id}
                                    title={tour.title}
                                    image={tour.image}
                                    duration={tour.duration}
                                    location={tour.category}
                                    description={tour.description}
                                    category={tour.category}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full py-32 text-center text-white/50">
                            <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5">
                                <Search className="w-10 h-10 opacity-50" />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-white mb-2">No journeys found</h3>
                            <p className="max-w-md mx-auto mb-8 font-light">
                                We couldn't find any tours matching "<strong>{searchQuery}</strong>" in the <strong>{activeCategory}</strong> category.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                                className="text-secondary font-bold uppercase tracking-widest hover:text-white transition-colors border-b border-secondary hover:border-white pb-1"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
