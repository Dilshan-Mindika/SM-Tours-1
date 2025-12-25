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
        <div className="group relative rounded-none overflow-hidden bg-white border border-black/10 shadow-sm hover:shadow-xl hover:shadow-black/10 transition-all duration-300 h-full flex flex-col hover:-translate-y-1">
            <Link href={`/tours/${id}`} className="block h-full flex flex-col">
                <div className="relative h-72 overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Strict Black Overlay for Text Readability */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />

                    <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end text-white z-10">
                        <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase bg-black text-white px-3 py-1">
                            <MapPin className="h-3 w-3 text-secondary" /> {category || location}
                        </div>
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                    <div className="mb-4">
                        <span className="text-secondary text-xs font-bold uppercase tracking-[0.15em] mb-3 block">Exclusive Tour</span>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-black group-hover:text-secondary transition-colors duration-300 leading-tight">
                            {title}
                        </h3>
                    </div>

                    {description && (
                        <p className="text-black/70 text-base mb-8 line-clamp-2 leading-relaxed font-light">
                            {description}
                        </p>
                    )}

                    <div className="mt-auto pt-6 border-t border-black/5 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-bold text-black/60">
                            <Clock className="h-4 w-4 text-secondary" /> {duration}
                        </div>
                        <div className="text-black font-bold text-sm flex items-center gap-2 group-hover:text-secondary transition-colors uppercase tracking-wider">
                            View Itinerary <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
