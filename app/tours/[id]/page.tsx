"use client";

import { use, useState, useEffect } from "react";
import { toursData } from "@/lib/tours-data";

import { motion } from "framer-motion";
import { Check, Calendar, MapPin, Clock, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";

export default function TourDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const tour = toursData.find((t) => t.id === id);
    const [isBookingOpen, setIsBookingOpen] = useState(false);

    if (!tour) {
        return notFound();
    }

    return (
        <>
            {/* Custom Hero */}
            <section className="relative h-[80vh] w-full bg-black flex items-center justify-center overflow-hidden">
                <Image
                    src={tour.image}
                    alt={tour.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />

                <div className="relative z-10 text-center container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary tracking-[0.2em] font-bold uppercase mb-4 block">
                            {tour.category} Experience
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                            {tour.title}
                        </h1>
                        <div className="flex justify-center gap-6 text-white/90 font-medium">
                            <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-secondary" /> {tour.duration}</span>
                            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-secondary" /> Sri Lanka</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 container-custom bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Itinerary & Details */}
                    <div className="lg:col-span-2">
                        <div className="mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-6">Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed font-light">
                                {tour.description}
                            </p>
                        </div>

                        <div className="mb-12">
                            <h2 className="text-3xl font-serif font-bold mb-8">Daily Itinerary</h2>
                            <div className="border-l-2 border-secondary/30 pl-8 space-y-12">
                                {tour.itinerary.map((day, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Dot */}
                                        <span className="absolute -left-[41px] top-0 h-5 w-5 rounded-full bg-secondary border-4 border-white shadow-sm" />

                                        <span className="text-sm font-bold text-secondary uppercase tracking-wider mb-2 block">
                                            {day.day}
                                        </span>
                                        <h3 className="text-xl font-bold mb-3">{day.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {day.desc}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 bg-gray-50 p-8 border border-gray-100 rounded-sm shadow-sm">
                            <h3 className="text-2xl font-serif font-bold mb-6">Package Inclusions</h3>
                            <ul className="space-y-4 mb-8">
                                {tour.inclusions.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                                        <Check className="h-5 w-5 text-secondary shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                onClick={() => setIsBookingOpen(true)}
                                className="w-full bg-black text-white py-4 font-bold uppercase tracking-wider hover:bg-secondary hover:text-black transition-all flex items-center justify-center gap-2 group"
                            >
                                Book This Tour <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-xs text-center text-gray-400 mt-4">
                                No payment required to inquire.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Modal */}
            {isBookingOpen && (
                <BookingModal
                    tourTitle={tour.title}
                    onClose={() => setIsBookingOpen(false)}
                />
            )}
        </>
    );
}

function BookingModal({ tourTitle, onClose }: { tourTitle: string, onClose: () => void }) {
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        // Simulate loading
        await new Promise(r => setTimeout(r, 1500));
        setStatus("success");
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
            <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg p-8 relative rounded-sm shadow-2xl"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-black hover:rotate-90 transition-all"
                >
                    <X className="w-6 h-6" />
                </button>

                {status === "success" ? (
                    <div className="text-center py-12">
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold mb-3">Inquiry Sent!</h3>
                        <p className="text-gray-600 mb-8">
                            Thank you for your interest in <strong>{tourTitle}</strong>. Our team will contact you shortly with a personalized quote.
                        </p>
                        <button
                            onClick={onClose}
                            className="bg-black text-white px-8 py-3 uppercase font-bold text-sm tracking-wider"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-serif font-bold mb-1">Book Your Journey</h2>
                        <p className="text-sm text-gray-500 mb-6">Inquire about: <span className="text-secondary font-bold">{tourTitle}</span></p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">First Name</label>
                                    <input required className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase text-gray-500">Last Name</label>
                                    <input required className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Email Address</label>
                                <input type="email" required className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Travel Date (Approx)</label>
                                <input type="date" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" />
                            </div>

                            <div className="space-y-1">
                                <label className="text-xs font-bold uppercase text-gray-500">Message / Special Requests</label>
                                <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Tell us about your preferences..." />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-black text-white py-4 font-bold uppercase tracking-wider hover:bg-secondary hover:text-black transition-all mt-4 disabled:opacity-50"
                            >
                                {status === "submitting" ? "Sending..." : "Send Inquiry"}
                            </button>
                        </form>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}
