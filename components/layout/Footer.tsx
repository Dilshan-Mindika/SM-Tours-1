import Link from "next/link";
import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Brand Column */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <Plane className="h-6 w-6 text-secondary" />
                        <span className="text-xl font-serif font-bold">SM Tours</span>
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Discover the pearl of the Indian Ocean with true local experts.
                        We craft personalized journeys to Sri Lanka's most breathtaking
                        destinations.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="#" className="hover:text-secondary transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-secondary transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-secondary transition-colors"><Twitter className="h-5 w-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                        <li><Link href="/tours" className="hover:text-secondary transition-colors">Our Tours</Link></li>
                        <li><Link href="/destinations" className="hover:text-secondary transition-colors">Destinations</Link></li>
                        <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
                        <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                    </ul>
                </div>

                {/* Top Tours */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Top Experiences</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/tours" className="hover:text-secondary transition-colors">Wildlife Safari</Link></li>
                        <li><Link href="/tours" className="hover:text-secondary transition-colors">Cultural Triangle</Link></li>
                        <li><Link href="/tours" className="hover:text-secondary transition-colors">Beach Bliss</Link></li>
                        <li><Link href="/tours" className="hover:text-secondary transition-colors">Hill Country Escapes</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-secondary shrink-0" />
                            <span>123 Tourism Dr, Colombo 03, Sri Lanka</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-secondary shrink-0" />
                            <span>+94 77 123 4567</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-secondary shrink-0" />
                            <span>hello@smtours.lk</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <Button variant="default" className="w-full bg-secondary text-black hover:bg-white font-bold" asChild>
                            <Link href="/contact">Inquire Now</Link>
                        </Button>
                    </div>
                </div>

            </div>

            <div className="container-custom mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
                <p>&copy; {new Date().getFullYear()} SM Tours. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="hover:text-white">Privacy Policy</Link>
                    <Link href="#" className="hover:text-white">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
