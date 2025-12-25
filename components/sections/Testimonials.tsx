"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    { text: "Absolutely unforgettable. The attention to detail was unmatched.", author: "Sarah Jenkins, UK" },
    { text: "Sri Lanka is beautiful, but SM Tours made it magical.", author: "Mark & Lisa, Australia" },
    { text: "The best travel agency I've ever dealt with. Professional and personal.", author: "David Chen, Singapore" },
    { text: "Luxury redefined. Highly recommended for premium travelers.", author: "Elena Rossi, Italy" },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container-custom mb-12 text-center">
                <h2 className="text-4xl font-serif font-bold text-black mb-4">Voices of Delight</h2>
                <p className="text-gray-500">Don't just take our word for it.</p>
            </div>

            <div className="flex w-full overflow-hidden">
                <motion.div
                    className="flex gap-8 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                        <div key={index} className="w-[400px] h-[250px] bg-black text-white p-8 rounded-none border border-black flex flex-col justify-between shrink-0 hover:bg-secondary transition-colors group">
                            <Quote className="h-10 w-10 text-secondary group-hover:text-black transition-colors" />
                            <p className="text-xl font-medium whitespace-normal leading-relaxed">"{item.text}"</p>
                            <div className="border-t border-white/20 pt-4 group-hover:border-black/20">
                                <p className="text-sm font-bold uppercase tracking-wider">{item.author}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
