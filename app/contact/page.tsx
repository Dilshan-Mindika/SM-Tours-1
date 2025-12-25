"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from "lucide-react";

function ContactForm() {
    const searchParams = useSearchParams();
    const [interest, setInterest] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const tour = searchParams.get("tour");
        const dest = searchParams.get("destination");
        if (tour) setInterest(`Tour: ${tour}`);
        else if (dest) setInterest(`Destination: ${dest}`);
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
            >
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-black mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    Thank you for reaching out. One of our travel experts will get back to you within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="bg-black text-white px-8 py-3 font-bold uppercase tracking-wider hover:bg-secondary hover:text-black transition-colors"
                >
                    Send Another Message
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">Full Name *</label>
                    <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-black/10 focus:border-secondary outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">Email *</label>
                    <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 border-2 border-black/10 focus:border-secondary outline-none transition-colors"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">Phone</label>
                    <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 border-2 border-black/10 focus:border-secondary outline-none transition-colors"
                    />
                </div>
                <div>
                    <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">Travel Date</label>
                    <input
                        type="date"
                        className="w-full px-4 py-3 border-2 border-black/10 focus:border-secondary outline-none transition-colors"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">Interested In</label>
                <input
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. Wildlife Tour, Ella..."
                    className="w-full px-4 py-3 border-2 border-black/10 focus:border-secondary outline-none transition-colors"
                />
            </div>

            <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-black mb-2">Message *</label>
                <textarea
                    required
                    rows={5}
                    placeholder="Tell us about your travel plans..."
                    className="w-full px-4 py-3 border-2 border-black/10 focus:border-secondary outline-none transition-colors resize-none"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-black py-4 font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
            >
                {isSubmitting ? "Sending..." : (
                    <>
                        <Send className="h-5 w-5" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative h-[60vh] overflow-hidden bg-black">
                <div className="absolute inset-0">
                    <Image
                        src="/gallery/galle-fort.jpg"
                        alt="Contact Us"
                        fill
                        className="object-cover opacity-50"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
                </div>

                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">
                            Let's <span className="italic text-secondary">Connect</span>
                        </h1>
                        <div className="h-[2px] w-24 bg-secondary mx-auto mb-6" />
                        <p className="text-xl text-white/80 max-w-2xl">
                            Start planning your dream Sri Lankan adventure today
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-32 bg-white">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: MapPin, title: "Visit Us", info: ["123 Tourism Dr", "Colombo 03, Sri Lanka"], label: "LOCATION" },
                            { icon: Mail, title: "Email Us", info: ["hello@smtours.lk", "bookings@smtours.lk"], label: "EMAIL" },
                            { icon: Phone, title: "Call Us", info: ["+94 77 123 4567", "+94 11 234 5678"], label: "PHONE" },
                            { icon: Clock, title: "Office Hours", info: ["Mon-Fri: 9AM - 6PM", "Weekend: 10AM - 4PM"], label: "HOURS" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                                className="relative p-10 bg-white border-2 border-black/10 group hover:border-secondary transition-all duration-500 overflow-hidden"
                            >
                                {/* Corner Accent */}
                                <div className="absolute top-0 right-0 w-20 h-20 bg-secondary/10 -translate-y-10 translate-x-10 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform duration-500" />

                                {/* Label Badge */}
                                <div className="inline-block mb-6">
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/60 group-hover:text-secondary transition-colors">
                                        {item.label}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="w-16 h-16 bg-black group-hover:bg-secondary rounded-full flex items-center justify-center mb-8 transition-colors duration-500">
                                    <item.icon className="h-8 w-8 text-white group-hover:text-black transition-colors duration-500" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-serif font-bold mb-6 text-black">
                                    {item.title}
                                </h3>

                                {/* Separator */}
                                <div className="h-[2px] w-12 bg-secondary mb-6" />

                                {/* Info */}
                                <div className="space-y-2">
                                    {item.info.map((line, i) => (
                                        <p key={i} className="text-gray-600 text-sm leading-relaxed">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-32 bg-gray-50">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <MessageSquare className="h-12 w-12 text-secondary mx-auto mb-6" />
                            <h2 className="text-5xl md:text-7xl font-serif text-black mb-6">
                                Send Us a <span className="italic text-secondary">Message</span>
                            </h2>
                            <div className="h-[2px] w-16 bg-secondary mx-auto mb-6" />
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Whether you're ready to book or just looking for inspiration, we'd love to hear from you
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 md:p-12 shadow-2xl border-2 border-black/5"
                        >
                            <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400">Loading form...</div>}>
                                <ContactForm />
                            </Suspense>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-[400px] bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    <div className="text-center">
                        <MapPin className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-lg font-bold">Map Integration Placeholder</p>
                        <p className="text-sm">Colombo, Sri Lanka</p>
                    </div>
                </div>
            </section>
        </>
    );
}
