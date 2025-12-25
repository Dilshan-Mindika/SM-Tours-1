"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
    {
        question: "Is it safe to travel to Sri Lanka?",
        answer: "Absolutely. Sri Lanka is known for its hospitality and safety. We ensure all our tours adhere to the highest safety standards with experienced local guides."
    },
    {
        question: "Can I customize my itinerary?",
        answer: "Yes, 100%. All our packages are fully customizable. You can adjust the duration, destinations, and activities to suit your preferences."
    },
    {
        question: "What is the best time to visit?",
        answer: "Sri Lanka is a year-round destination. The west and south coasts are best from December to April, while the east coast shines from May to September."
    },
    {
        question: "Do you handle visa processing?",
        answer: "We provide full guidance and support for your ETA (Electronic Travel Authorization) application to ensure a smooth entry into the country."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-white border-t border-black/5">
            <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-4">
                    <h2 className="text-4xl font-serif font-bold text-black mb-6">Frequently Asked<br /><span className="text-secondary">Questions</span></h2>
                    <p className="text-gray-500 mb-8">Everything you need to know before you go.</p>
                </div>

                <div className="lg:col-span-8 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-black/10 pb-4">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center py-4 text-left group"
                            >
                                <span className="text-xl font-bold group-hover:text-secondary transition-colors">{faq.question}</span>
                                <Plus className={`h-6 w-6 text-black transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-4 text-gray-600 leading-relaxed max-w-2xl">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
