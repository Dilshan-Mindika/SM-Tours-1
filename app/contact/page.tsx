"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ArrowRight, Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { PageHero } from "@/components/sections/PageHero";

export default function ContactPage() {
    return (
        <div className="bg-[#020202] min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
            <div className="fixed inset-0 opacity-[0.03] pointer-events-none z-50 bg-[url('/noise.png')] mix-blend-overlay" />

            <PageHero
                image="/gallery/galle-fort.jpg"
                title="CONTACT."
                subtitle="Get in Touch"
                description=""
            />
            <ContactInfo />
            <InquirySection />
        </div>
    );
}

function ContactInfo() {
    const info = [
        { icon: MapPin, title: "Visit Us", lines: ["123 Tourism Dr", "Colombo 03, Sri Lanka"], label: "HQ" },
        { icon: Mail, title: "Email", lines: ["hello@smtours.lk", "bookings@smtours.lk"], label: "24/7" },
        { icon: Phone, title: "Call", lines: ["+94 77 123 4567", "+94 11 234 5678"], label: "Support" },
        { icon: Clock, title: "Hours", lines: ["Mon-Fri: 9AM - 6PM", "Weekend: 10AM - 4PM"], label: "Open" }
    ];

    return (
        <section className="py-20 relative z-10 -mt-20 px-4 md:px-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {info.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 bg-[#0A0A0A] border border-white/5 hover:border-white/20 transition-all duration-500 rounded-sm hover:-translate-y-2 overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                                        <item.icon className="w-5 h-5 text-white/70 group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-white/20 group-hover:text-secondary transition-colors">
                                        {item.label}
                                    </span>
                                </div>

                                <h3 className="text-xl font-serif font-bold text-white mb-4">{item.title}</h3>
                                <div className="space-y-1">
                                    {item.lines.map((line, i) => (
                                        <p key={i} className="text-sm text-white/50 font-light group-hover:text-white/80 transition-colors">
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function InquirySection() {
    return (
        <section className="py-16 md:py-32 relative">
            <div className="container-custom max-w-5xl">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16">

                    {/* Left: Text */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <span className="text-secondary text-xs font-bold uppercase tracking-[0.2em] mb-4 block">Inquiry</span>
                            <h2 className="text-4xl md:text-7xl font-serif text-white mb-6">
                                Plan Your <span className="italic text-white/50">Journey</span>
                            </h2>
                            <p className="text-white/60 font-light leading-relaxed">
                                Whether you're ready to book or just looking for inspiration, our travel experts are here to craft your perfect Sri Lankan escape.
                            </p>
                        </div>

                        <div className="hidden lg:block p-8 border border-white/10 bg-white/5 rounded-sm">
                            <p className="text-sm text-white/80 italic mb-4">"The journey of a thousand miles begins with a single step."</p>
                            <p className="text-xs text-white/40 uppercase tracking-widest">— Lao Tzu</p>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="lg:col-span-3">
                        <Suspense fallback={<div className="text-white/40">Loading form...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ContactForm() {
    const searchParams = useSearchParams();
    const [interest, setInterest] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    useEffect(() => {
        const tour = searchParams.get("tour");
        const dest = searchParams.get("destination");
        if (tour) setInterest(`Tour: ${tour}`);
        else if (dest) setInterest(`Destination: ${dest}`);
    }, [searchParams]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Collect form data
        const formData = {
            name: (e.target as any).name.value,
            email: (e.target as any).email.value,
            phone: (e.target as any).phone.value,
            date: (e.target as any).date.value,
            interest: interest,
            message: (e.target as any).message.value,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send message');
            }

            setSubmitted(true);
        } catch (error) {
            console.error(error);
            // Show the actual error message for debugging
            alert(error instanceof Error ? error.message : "Something went wrong");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-white/5 border border-white/10 rounded-sm"
            >
                <div className="w-20 h-20 bg-secondary text-black rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-white mb-4">Message Sent</h3>
                <p className="text-white/60 mb-8 max-w-xs mx-auto font-light">
                    Thank you. One of our travel experts will be in touch within 24 hours.
                </p>
                <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:text-secondary transition-colors border-b border-transparent hover:border-secondary pb-1"
                >
                    Send Another
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-[#0A0A0A] p-6 md:p-12 border border-white/10 rounded-sm w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-secondary transition-colors">name</label>
                    <input
                        name="name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors font-light"
                    />
                </div>
                <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-secondary transition-colors">email</label>
                    <input
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors font-light"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="group">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-secondary transition-colors">phone</label>
                    <input
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors font-light"
                    />
                </div>
                <div className="group relative">
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-secondary transition-colors">Date</label>
                    <div
                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                        className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 cursor-pointer flex items-center justify-between"
                    >
                        <span className={cn("font-light", !date && "text-white/40")}>
                            {date ? format(date, "PPP") : "Select a date"}
                        </span>
                        <CalendarIcon className="h-4 w-4 text-white/40" />
                    </div>
                    {/* Hidden input for form submission compatibility */}
                    <input
                        type="hidden"
                        name="date"
                        value={date ? format(date, "yyyy-MM-dd") : ""}
                    />

                    {isCalendarOpen && (
                        <div className="absolute z-50 mt-2 bg-[#0A0A0A] border border-white/10 rounded-lg shadow-xl p-2 left-0 md:left-auto md:right-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(newDate) => {
                                    setDate(newDate);
                                    setIsCalendarOpen(false);
                                }}
                                disabled={(date) => date < new Date()}
                                initialFocus
                            />
                        </div>
                    )}
                </div>
            </div>

            <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-secondary transition-colors">Interest</label>
                <input
                    name="interest"
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="E.g. Wildlife Tour, Ella..."
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors font-light"
                />
            </div>

            <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2 group-focus-within:text-secondary transition-colors">Message</label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your dream journey..."
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-secondary transition-colors resize-none font-light"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-white text-black py-5 text-sm font-black uppercase tracking-[0.2em] hover:bg-secondary transition-colors disabled:opacity-50 flex items-center justify-center gap-4 mt-8"
            >
                {isSubmitting ? "Sending..." : (
                    <>
                        Send Message <ArrowRight className="h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    );
}
