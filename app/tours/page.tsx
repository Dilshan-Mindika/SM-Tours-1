"use client";

import { useState } from "react";
import { PageHeader } from "@/components/sections/PageHeader";
import { TourCard } from "@/components/ui/TourCard";
import { cn } from "@/lib/utils";

const categories = ["All", "Cultural", "Wildlife", "Beach", "Nature", "Adventure"];

const tours = [
    {
        title: "Signature Sri Lanka",
        image: "https://images.unsplash.com/photo-1546708773-e575a556da8e?q=80&w=2070",
        duration: "10 Days",
        location: "Island wide",
        description: "The perfect blend of culture, nature, and relaxation covering all major highlights.",
        category: "Cultural"
    },
    {
        title: "Hill Country Escape",
        image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1974",
        duration: "5 Days",
        location: "Kandy, Ella, Nuwara Eliya",
        description: "Experience the cool climate, tea plantations, and scenic train rides.",
        category: "Nature"
    },
    {
        title: "Wild & Beach",
        image: "https://images.unsplash.com/photo-1590664095641-7fa05f297864?q=80&w=2070",
        duration: "7 Days",
        location: "Yala, Mirissa, Galle",
        description: "Thrilling wildlife safaris paired with relaxing days on the pristine southern coast.",
        category: "Wildlife"
    },
    {
        title: "Ancient Cities",
        image: "https://images.unsplash.com/photo-1580910547196-88009bacc241?q=80&w=2070", // Anuradhapura
        duration: "6 Days",
        location: "Anuradhapura, Polonnaruwa",
        description: "Step back in time and explore the UNESCO World Heritage sites of the Cultural Triangle.",
        category: "Cultural"
    },
    {
        title: "Coastal Paradise",
        image: "https://images.unsplash.com/photo-1534533994168-441a23f99881?q=80&w=2070", // Beach
        duration: "5 Days",
        location: "Bentota, Hikkaduwa",
        description: "Sun, sand, and sea. The ultimate relaxation getaway on golden shores.",
        category: "Beach"
    },
    {
        title: "Eco Trekking",
        image: "https://images.unsplash.com/photo-1597811802996-33939527ec56?q=80&w=2069", // Knuckles
        duration: "4 Days",
        location: "Knuckles, Sinharaja",
        description: "Off the beaten path hiking adventures in Sri Lanka's untouched rainforests.",
        category: "Adventure"
    }
];

export default function ToursPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTours = activeCategory === "All"
        ? tours
        : tours.filter(tour => tour.category === activeCategory ||
            (activeCategory === "Cultural" && tour.category === "Heritage") // mapping if needed
        );

    return (
        <>
            <PageHeader
                title="Our Exclusive Tours"
                subtitle="Curated experiences for every type of traveler. Choose your perfect journey."
                image="https://images.unsplash.com/photo-1460363589874-b659d46d2382?q=80&w=2069&auto=format&fit=crop" // Train/Greenery
            />

            <section className="py-16 container-custom min-h-[600px]">
                {/* Filters */}
                <div className="flex flex-wrap gap-2 justify-center mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                activeCategory === category
                                    ? "bg-primary text-white border-primary shadow-md"
                                    : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTours.map((tour) => (
                        <TourCard
                            key={tour.title}
                            {...tour}
                        />
                    ))}
                    {filteredTours.length === 0 && (
                        <div className="col-span-full text-center py-12 text-gray-500">
                            No tours found in this category.
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
