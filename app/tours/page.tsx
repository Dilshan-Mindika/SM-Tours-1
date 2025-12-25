"use client";

import { useState, useMemo } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { TourCard } from "@/components/ui/TourCard";
import { cn } from "@/lib/utils";
import { toursData, Tour } from "../../lib/tours-data";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";

const categories = ["All", "Heritage", "Wildlife", "Beach", "Nature", "Adventure", "Family"];

const sortOptions = [
    { label: "Recommended", value: "recommended" },
    { label: "Duration: Short to Long", value: "duration-asc" },
    { label: "Duration: Long to Short", value: "duration-desc" },
];

export default function ToursPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("recommended");

    // Helper to parse duration string (e.g., "6 Days / 5 Nights" -> 6)
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
        <>
            <PageHeader
                title="Our Exclusive Journeys"
                subtitle="Curated itineraries designed to showcase the very best of Sri Lanka."
                image="/gallery/train-journey.jpg"
            />

            <section className="py-20 container-custom min-h-[800px]">

                {/* Search & Sort Controls */}
                <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 max-w-5xl mx-auto">

                    {/* Search Input */}
                    <div className="relative w-full md:max-w-md group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-black transition-colors" />
                        <input
                            type="text"
                            placeholder="Search tours (e.g. 'safari', 'ella', 'beach')..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all shadow-sm"
                        />
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative w-full md:w-auto min-w-[200px]">
                        <SlidersHorizontal className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value)}
                            className="w-full md:w-auto pl-10 pr-8 py-3 bg-white border border-gray-200 rounded-full appearance-none focus:outline-none focus:border-black cursor-pointer hover:border-gray-300 transition-all font-medium text-sm text-gray-700 shadow-sm"
                        >
                            {sortOptions.map(opt => (
                                <option key={opt.value} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-500" />
                    </div>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap gap-3 justify-center mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-xs md:text-sm font-bold uppercase tracking-wider transition-all duration-300 border",
                                activeCategory === category
                                    ? "bg-black text-white border-black shadow-lg scale-105"
                                    : "bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Results Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredAndSortedTours.length > 0 ? (
                            filteredAndSortedTours.map((tour: Tour) => (
                                <TourCard
                                    key={tour.id}
                                    title={tour.title}
                                    image={tour.image}
                                    duration={tour.duration}
                                    location={tour.category}
                                    description={tour.description}
                                    category={tour.category}
                                    id={tour.id}
                                />
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                                    <Search className="w-8 h-8 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No tours found</h3>
                                <p className="text-gray-500 max-w-md mx-auto">
                                    We couldn't find any tours matching "<strong>{searchQuery}</strong>" in the <strong>{activeCategory}</strong> category.
                                </p>
                                <button
                                    onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                                    className="mt-6 text-orange-600 font-medium hover:underline"
                                >
                                    Clear filters
                                </button>
                            </div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </section>
        </>
    );
}
