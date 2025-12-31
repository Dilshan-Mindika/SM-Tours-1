"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const destinations = [
    {
        name: "Sigiriya",
        image: "/destinations/sigiriya-new.jpg",
        id: "sigiriya",
        desc: "The Lion Rock Fortress"
    },
    {
        name: "Ella",
        image: "/destinations/ella-new.jpg",
        id: "ella",
        desc: "Misty Mountain Peaks"
    },
    {
        name: "Galle",
        image: "/destinations/galle-new.jpg",
        id: "galle",
        desc: "Portuguese Heritage"
    },
    {
        name: "Yala",
        image: "/destinations/yala-new.jpg",
        id: "yala",
        desc: "Safari & Wilderness"
    }
];

export function DestinationsPreview() {
    const [activeId, setActiveId] = useState<string | null>("sigiriya");
    const router = useRouter();

    const handleNavigation = (name: string) => {
        router.push(`/tours?search=${name}`);
    };

    return (
        <section className="py-24 bg-black text-white">
            <div className="flex flex-col lg:flex-row gap-4 h-[700px] w-full px-4 md:px-0 max-w-[1400px] mx-auto">
                {destinations.map((dest) => {
                    const isActive = activeId === dest.id;
                    return (
                        <div
                            key={dest.id}
                            onClick={() => handleNavigation(dest.name)}
                            className={cn(
                                "relative h-full transition-all duration-700 ease-[0.32,0.72,0,1] overflow-hidden cursor-pointer rounded-2xl border border-white/10 group",
                                isActive ? "flex-[3]" : "flex-[1] hover:flex-[1.2]"
                            )}
                            onMouseEnter={() => setActiveId(dest.id)}
                        >
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                                style={{
                                    filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                                    scale: isActive ? 1.1 : 1
                                }}
                            />
                            <div className={cn(
                                "absolute inset-0 transition-colors duration-500",
                                isActive ? "bg-black/10" : "bg-black/60 group-hover:bg-black/40"
                            )} />

                            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                                <h3 className={cn(
                                    "font-serif font-black text-white transition-all duration-500 origin-left leading-none",
                                    isActive
                                        ? "text-5xl md:text-7xl mb-4 translate-y-0"
                                        : "text-3xl rotate-0 lg:-rotate-90 lg:origin-bottom-left lg:absolute lg:bottom-10 lg:left-10 whitespace-nowrap opacity-80"
                                )}>
                                    {dest.name}
                                </h3>

                                <div className={cn(
                                    "overflow-hidden transition-all duration-500",
                                    isActive ? "opacity-100 max-h-[200px]" : "opacity-0 max-h-0"
                                )}>
                                    <p className="text-white/80 text-lg font-light mb-6 tracking-wide line-clamp-2">
                                        {dest.desc}
                                    </p>
                                    <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full hover:bg-white transition-colors duration-300">
                                        <ArrowUpRight className="text-black h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-8 flex justify-center lg:hidden">
                <Link href="/destinations" className="flex items-center gap-2 font-bold uppercase tracking-widest text-white hover:text-secondary transition-colors">
                    View All <ArrowUpRight className="h-5 w-5" />
                </Link>
            </div>
        </section>
    );
}

// The DestinationCard component is no longer used and can be removed if not used elsewhere.
// For this change, it's kept as is, but it's effectively orphaned.
function DestinationCard({ dest, isActive, onClick, onHover }: { dest: any, isActive: boolean, onClick: () => void, onHover: () => void }) {
    return (
        <motion.div
            layout
            onHoverStart={onHover}
            onClick={onClick}
            className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-[0.32,0.72,0,1] ${isActive ? 'flex-[3]' : 'flex-[1]'} border border-white/10 group`}
        >
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out"
                    style={{
                        filter: isActive ? 'grayscale(0%)' : 'grayscale(100%)',
                        scale: isActive ? 1.1 : 1
                    }}
                />
            </div>

            <div className={`absolute inset-0 transition-opacity duration-500 ${isActive ? 'bg-black/10' : 'bg-black/60 hover:bg-black/40'}`} />

            {/* Active Content */}
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className={`font-black font-serif text-white transition-all duration-500 origin-left ${isActive ? 'text-5xl md:text-7xl mb-4 translate-y-0' : 'text-3xl rotate-0 md:-rotate-90 md:translate-x-12 md:mb-16 whitespace-nowrap opacity-80'}`}>
                    {dest.name}
                </h3>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                    className="overflow-hidden"
                >
                    <p className="text-white/80 text-xl font-light mb-6 tracking-wide">{dest.desc}</p>
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full hover:bg-white transition-colors duration-300">
                        <ArrowUpRight className="text-black h-6 w-6" />
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

