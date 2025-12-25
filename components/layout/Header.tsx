"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Plane } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Tours", href: "/tours" },
    { name: "Destinations", href: "/destinations" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    // Determine if we are on a page that needs a dark header initially (all except maybe simple text pages)
    // For now assuming all pages have hero sections.

    return (
        <div className="fixed top-6 left-0 w-full z-50 px-4 md:px-0 flex justify-center pointer-events-none">
            <header
                className={cn(
                    "w-full max-w-5xl rounded-2xl border border-white/10 transition-all duration-300 pointer-events-auto",
                    isScrolled
                        ? "bg-primary/80 backdrop-blur-xl shadow-2xl py-3 px-6"
                        : "bg-black/20 backdrop-blur-md py-4 px-8"
                )}
            >
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <span className={cn(
                            "text-2xl font-serif font-bold tracking-tight transition-colors",
                            "text-white"
                        )}>
                            SM Tours<span className="text-secondary">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-secondary relative group",
                                    pathname === link.href ? "text-secondary" : "text-white/90"
                                )}
                            >
                                {link.name}
                                <span className={cn(
                                    "absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full",
                                    pathname === link.href ? "w-full" : ""
                                )} />
                            </Link>
                        ))}
                        <Button
                            size="sm"
                            className="bg-secondary text-primary hover:bg-secondary/90 font-semibold rounded-full px-6"
                            asChild
                        >
                            <Link href="/contact">Book Now</Link>
                        </Button>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-1 rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6 text-white" />
                        ) : (
                            <Menu className="h-6 w-6 text-white" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="flex flex-col gap-2 pb-2">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-base font-medium p-3 rounded-xl hover:bg-white/10 transition-colors block text-center",
                                            pathname === link.href ? "text-secondary bg-white/5" : "text-white"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button className="w-full bg-secondary text-primary hover:bg-secondary/90 rounded-xl" asChild>
                                    <Link href="/contact">Book Now</Link>
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </div>
    );
}
