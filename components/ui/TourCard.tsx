import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TourCardProps {
    id: string;
    title: string;
    image: string;
    duration: string;
    location: string;
    description?: string;
    category?: string;
}

export function TourCard({ id, title, image, duration, location, description, category }: TourCardProps) {
    return (
        <div className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all duration-500 h-full flex flex-col hover:-translate-y-2 hover:shadow-2xl hover:shadow-secondary/10">
            <Link href={`/tours/${id}`} className="block h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                    <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end z-10">
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] uppercase bg-secondary text-black px-3 py-1 rounded-sm">
                            <MapPin className="h-3 w-3" /> {category || location}
                        </div>
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="mb-4">
                        <span className="text-secondary/80 text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">Exclusive Journey</span>
                        <h3 className="text-2xl font-serif font-bold text-white group-hover:text-secondary transition-colors duration-300 leading-tight">
                            {title}
                        </h3>
                    </div>

                    {description && (
                        <p className="text-white/60 text-sm mb-8 line-clamp-3 leading-relaxed font-light">
                            {description}
                        </p>
                    )}

                    <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs font-bold text-white/50">
                            <Clock className="h-4 w-4 text-secondary" /> {duration}
                        </div>
                        <div className="text-white font-bold text-xs flex items-center gap-2 group-hover:text-secondary transition-colors uppercase tracking-widest">
                            Itinerary <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
