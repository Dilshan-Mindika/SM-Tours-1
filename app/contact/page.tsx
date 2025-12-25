"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/sections/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, UserCheck } from "lucide-react";

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
        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <UserCheck className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-8">
                    Thank you for reaching out. One of our travel experts will get back to you within 24 hours.
                </p>
                <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <Input
                    type="text"
                    id="name"
                    required
                    placeholder="John Doe"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <Input
                    type="email"
                    id="email"
                    required
                    placeholder="john@example.com"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                        type="tel"
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
                <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Travel Date (Approx)</label>
                    <Input
                        type="date"
                        id="date"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interested In</label>
                <Input
                    type="text"
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="e.g. Wildlife Tour, Ella..."
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your travel plans..."
                />
            </div>
            <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
        </form>
    );
}

export default function ContactPage() {
    return (
        <>
            <PageHeader
                title="Contact Us"
                subtitle="Start planning your dream Sri Lankan getaway today."
                image="https://images.unsplash.com/photo-1590664095641-7fa05f297864?q=80&w=2070"
            />

            <section className="py-20 container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Get in Touch</h2>
                            <p className="text-gray-600 leading-relaxed">
                                Whether you're ready to book or just looking for some inspiration,
                                we'd love to hear from you. Our team is available 24/7 to answer your questions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Visit Us</h3>
                                    <p className="text-gray-600">123 Tourism Dr, Colombo 03, Sri Lanka</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                                    <p className="text-gray-600">hello@smtours.lk</p>
                                    <p className="text-gray-600">bookings@smtours.lk</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Call Us</h3>
                                    <p className="text-gray-600">+94 77 123 4567</p>
                                    <p className="text-gray-600">+94 11 234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                                    <Clock className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1">Office Hours</h3>
                                    <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-600">Weekend: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400">Loading form...</div>}>
                            <ContactForm />
                        </Suspense>
                    </div>

                </div>
            </section>
        </>
    );
}
