import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { Plane, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 border-t border-white/10">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Brand Column */}
                <div className="space-y-4">
                    <Link href="/" className="flex items-center gap-2 text-white">
                        <Image src={logo} alt="SM Tours" className="h-16 w-auto object-contain" />
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-400">
                        Discover the pearl of the Indian Ocean with true local experts.
                        We craft personalized journeys to Sri Lanka's most breathtaking
                        destinations.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="https://www.facebook.com/share/1G7oBwmVtx/" target="_blank" className="hover:text-secondary transition-colors" aria-label="Facebook">
                            <Facebook className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.instagram.com/sm_tours__sri_lanka?igsh=MXA1dWh1NGxubjBlZg==" target="_blank" className="hover:text-secondary transition-colors" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                        </Link>
                        <Link href="https://www.tiktok.com/@sm_tours_sri_lanka?_r=1&_t=ZS-92tMdMHbRa8" target="_blank" className="hover:text-secondary transition-colors" aria-label="TikTok">
                            {/* Simple TikTok SVG Icon */}
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                        </Link>
                        <Link href="https://www.linkedin.com/in/sm-tours-%F0%9F%87%B1%F0%9F%87%B0-00223a34b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-secondary transition-colors" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </Link>
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
                        <li><Link href="/tours?cat=Wildlife" className="hover:text-secondary transition-colors">Wildlife Safari</Link></li>
                        <li><Link href="/tours?cat=Heritage" className="hover:text-secondary transition-colors">Cultural Triangle</Link></li>
                        <li><Link href="/tours?cat=Beach" className="hover:text-secondary transition-colors">Beach Bliss</Link></li>
                        <li><Link href="/tours?cat=Nature" className="hover:text-secondary transition-colors">Hill Country Escapes</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold mb-4 text-lg">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-secondary shrink-0" />
                            <span>No. 105, Kahanthota Road, Malabe, Sri Lanka</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="h-5 w-5 text-secondary shrink-0" />
                            <span>+94 77 640 4091</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="h-5 w-5 text-secondary shrink-0" />
                            <span>info@smtourssrilanka.com</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <Button variant="default" className="w-full bg-secondary text-black hover:bg-white font-bold" asChild>
                            <Link href="/contact">Inquire Now</Link>
                        </Button>
                    </div>
                </div>

            </div>

            <div className="container-custom mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Left Side: Copyright & Legal */}
                <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-neutral-500 font-medium">
                    <p>&copy; {new Date().getFullYear()} SM Tours. All rights reserved.</p>
                    <div className="hidden md:block w-1 h-1 rounded-full bg-neutral-800" />
                    <div className="flex gap-6">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Right Side: Developer Credit */}
                <div className="flex items-center justify-center md:justify-end gap-2 text-center md:text-right">
                    <span className="text-[10px] text-white/30 uppercase tracking-wider">Design & Develop by</span>
                    <Link
                        href="https://dilshanmindika.pro"
                        target="_blank"
                        className="text-sm font-black text-white hover:text-secondary tracking-widest uppercase transition-all duration-300 inline-block hover:scale-105"
                    >
                        DILA
                    </Link>
                </div>
            </div>
        </footer>
    );
}
