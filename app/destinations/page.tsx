"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/sections/PageHeader";
import { MapPin, ArrowRight, Filter } from "lucide-react";

// Categorized Destinations Data - COMPREHENSIVE LIST
const allDestinations = [
    // HERITAGE (Cultural Triangle & History)
    {
        id: "sigiriya",
        name: "Sigiriya",
        category: "Heritage",
        image: "/destinations/sigiriya.jpg",
        desc: "The Lion Rock fortress, a UNESCO World Heritage site standing majestic amidst the jungle.",
        badges: ["History", "Architecture"]
    },
    {
        id: "anuradhapura",
        name: "Anuradhapura",
        category: "Heritage",
        image: "/destinations/redesign/anuradhapura.jpg",
        desc: "One of the oldest continuously inhabited cities in the world, known for its well-preserved ruins.",
        badges: ["Ruins", "Buddhism"]
    },
    {
        id: "polonnaruwa",
        name: "Polonnaruwa",
        category: "Heritage",
        image: "/destinations/redesign/polonnaruwa.jpg",
        desc: "The second most ancient of Sri Lanka's kingdoms, featuring monumental ancient stone structures.",
        badges: ["Ruins", "Kingdom"]
    },
    {
        id: "kandy",
        name: "Kandy",
        category: "Heritage",
        image: "/gallery/temple.jpg",
        desc: "The cultural capital, home to the sacred Temple of the Tooth Relic and botanical gardens.",
        badges: ["Temple", "Culture"]
    },
    {
        id: "galle",
        name: "Galle Fort",
        category: "Heritage",
        image: "/destinations/galle.jpg",
        desc: "A preserved Dutch colonial walled city on the southern coast, blending history with tropical charm.",
        badges: ["Colonial", "Coast"]
    },
    {
        id: "dambulla",
        name: "Dambulla",
        category: "Heritage",
        image: "/gallery/buddha-statue.jpg", // Using statue as proxy for cave temple
        desc: "Famous for the Golden Temple, a cave complex with well-preserved Buddhist statutes and paintings.",
        badges: ["Caves", "Art"]
    },
    {
        id: "jaffna",
        name: "Jaffna",
        category: "Heritage",
        image: "/destinations/redesign/jaffna.jpg",
        desc: "The northern capital, rich in Hindu culture, colonial history, and unique cuisine.",
        badges: ["Hindu", "Fort"]
    },

    // NATURE (Hill Country & Rainforests)
    {
        id: "ella",
        name: "Ella",
        category: "Nature",
        image: "/destinations/ella.jpg",
        desc: "A hiking paradise in the central highlands, famous for the Nine Arch Bridge and stunning views.",
        badges: ["Hiking", "Scenery"]
    },
    {
        id: "nuwara-eliya",
        name: "Nuwara Eliya",
        category: "Nature",
        image: "/destinations/redesign/nuwara-eliya.jpg",
        desc: "Known as 'Little England', a city in the hill country surrounded by lush tea plantations.",
        badges: ["Tea", "Cool Climate"]
    },
    {
        id: "horton-plains",
        name: "Horton Plains",
        category: "Nature",
        image: "/gallery/tea-fields.jpg", // Using generic high country
        desc: "A protected area in the central highlands covered by montane grassland and cloud forest.",
        badges: ["World's End", "Hiking"]
    },
    {
        id: "sinharaja",
        name: "Sinharaja Forest",
        category: "Nature",
        image: "/gallery/waterfall.jpg", // Using waterfall
        desc: "A biodiversity hotspot and UNESCO World Heritage Site, home to endemic species and lush rainforest.",
        badges: ["Rainforest", "Birding"]
    },
    {
        id: "knuckles",
        name: "Knuckles Range",
        category: "Nature",
        image: "/gallery/ella-train.jpg", // Scenic mountains feel
        desc: "A rugged mountain range offering some of the most scenic hiking trails and camping spots.",
        badges: ["Adventure", "Mountains"]
    },

    // WILDLIFE (National Parks)
    {
        id: "yala",
        name: "Yala National Park",
        category: "Wildlife",
        image: "/destinations/yala.jpg",
        desc: "The premier wildlife sanctuary, boasting the highest density of leopards in the world.",
        badges: ["Safari", "Leopards"]
    },
    {
        id: "udawalawe",
        name: "Udawalawe",
        category: "Wildlife",
        image: "/destinations/redesign/elephant.jpg",
        desc: "Famous for its large population of elephants and the Elephant Transit Home.",
        badges: ["Elephants", "Safari"]
    },
    {
        id: "wilpattu",
        name: "Wilpattu",
        category: "Wildlife",
        image: "/gallery/wild-new.jpg", // Leopard image
        desc: "The largest national park, known for its unique natural lakes and leopard sightings.",
        badges: ["Lakes", "Leopards"]
    },
    {
        id: "minneriya",
        name: "Minneriya",
        category: "Wildlife",
        image: "/services/safari-jeep.jpg", // Jeep image
        desc: "Famous for 'The Gathering', where hundreds of elephants congregate around the reservoir.",
        badges: ["Elephants", "Seasonal"]
    },

    // BEACH (Coastal)
    {
        id: "mirissa",
        name: "Mirissa",
        category: "Beach",
        image: "/destinations/redesign/mirissa.jpg",
        desc: "A tropical beach paradise famous for whale watching, surfing, and vibrant nightlife.",
        badges: ["Whales", "Surf"]
    },
    {
        id: "unawatuna",
        name: "Unawatuna",
        category: "Beach",
        image: "/gallery/beach-new.jpg", // Using generic beach
        desc: "A popular crescent-shaped beach known for its coral reefs and calm swimming waters.",
        badges: ["Swimming", "Reefs"]
    },
    {
        id: "hikkaduwa",
        name: "Hikkaduwa",
        category: "Beach",
        image: "/gallery/sunset-palm.jpg",
        desc: "Famous for its coral sanctuary, sea turtles, and golden sandy beaches.",
        badges: ["Corals", "Turtles"]
    },
    {
        id: "bentota",
        name: "Bentota",
        category: "Beach",
        image: "/destinations/redesign/bentota.jpg",
        desc: "A premier resort town known for water sports, luxury hotels, and river safaris.",
        badges: ["Luxury", "Water Sports"]
    },
    {
        id: "trincomalee",
        name: "Trincomalee",
        category: "Beach",
        image: "/destinations/redesign/trincomalee.jpg",
        desc: "Home to Nilaveli and Uppuveli beaches, offering pristine white sands and whale watching.",
        badges: ["East Coast", "Diving"]
    },
    {
        id: "arugam-bay",
        name: "Arugam Bay",
        category: "Beach",
        image: "/gallery/surf-beach.jpg",
        desc: "A world-renowned surfing destination on the east coast with a laid-back vibe.",
        badges: ["Surfing", "Chill"]
    },

    // CITY
    {
        id: "colombo",
        name: "Colombo",
        category: "City",
        image: "/destinations/redesign/colombo.jpg",
        desc: "The vibrant commercial capital, blending colonial architecture with modern skyscrapers.",
        badges: ["Capital", "Shopping"]
    },
];

const categories = ["All", "Heritage", "Nature", "Wildlife", "Beach", "City"];

export default function DestinationsPage() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredDestinations = activeCategory === "All"
        ? allDestinations
        : allDestinations.filter(d => d.category === activeCategory);

    return (
        <>
            <HeroSection />

            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container-custom">

                    {/* Filter Bar */}
                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                    ? "bg-black text-white shadow-lg scale-105"
                                    : "bg-white text-gray-500 hover:bg-gray-200"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredDestinations.map((dest) => (
                                <DestinationCard key={dest.id} dest={dest} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </>
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
        <section ref={containerRef} className="relative h-[60vh] overflow-hidden bg-black">
            <motion.div style={{ y }} className="absolute inset-0">
                <Image
                    src="/gallery/nine-arch.jpg"
                    alt="Destinations"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
            </motion.div>

            <motion.div
                style={{ opacity }}
                className="relative h-full flex flex-col items-center justify-center text-center px-4"
            >
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">
                        Explore <span className="italic text-secondary">Sri Lanka</span>
                    </h1>
                    <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
                        The Pearl of the Indian Ocean awaits, with adventures around every corner.
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
}

function DestinationCard({ dest }: { dest: typeof allDestinations[0] }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group relative h-[450px] rounded-sm overflow-hidden bg-black"
        >
            <Link href={`/contact?destination=${encodeURIComponent(dest.name)}`} className="block h-full w-full">
                {/* Image */}
                <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:opacity-60"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">

                    {/* Badges */}
                    <div className="flex gap-2 mb-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        {dest.badges.map(badge => (
                            <span key={badge} className="px-3 py-1 bg-secondary/90 text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                                {badge}
                            </span>
                        ))}
                    </div>

                    <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin className="h-4 w-4 text-secondary" />
                            <span className="text-secondary text-xs font-bold uppercase tracking-widest">{dest.category}</span>
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                            {dest.name}
                        </h3>
                        <p className="text-white/70 text-sm line-clamp-3 mb-6 group-hover:text-white transition-colors">
                            {dest.desc}
                        </p>

                        <div className="flex items-center gap-2 text-white text-sm font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Explore <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
