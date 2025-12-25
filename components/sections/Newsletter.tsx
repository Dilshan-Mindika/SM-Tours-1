"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
    return (
        <section className="py-24 bg-secondary text-black relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Unlock Exclusive Journey's</h2>
                <p className="text-lg font-medium mb-10 opacity-90">
                    Join our elite community of travelers. Get insider tips, hidden gem reveals, and early access to our seasonal curated tours.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                    <Input
                        placeholder="Enter your email address"
                        className="bg-white border-none h-14 text-black placeholder:text-gray-400 text-lg shadow-xl"
                    />
                    <Button size="lg" className="h-14 px-8 bg-black text-white hover:bg-black/80 font-bold uppercase tracking-wider shadow-xl">
                        Subscribe <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </form>

                <p className="mt-6 text-xs text-black/60 uppercase tracking-widest">
                    No Spam. Unsubscribe Anytime.
                </p>
            </div>
        </section>
    );
}
