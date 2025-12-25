import { PageHeader } from "@/components/sections/PageHeader";
import { Car, Map, UserCheck, Hotel, Plane, Camera } from "lucide-react";

const services = [
    {
        icon: Map,
        title: "Custom Tour Planning",
        desc: "We design itineraries from scratch based on your interests, budget, and pace.",
    },
    {
        icon: Car,
        title: "Luxury Transportation",
        desc: "Travel in comfort with our fleet of modern, air-conditioned vehicles and professional chauffeurs.",
    },
    {
        icon: UserCheck,
        title: "Private Guides",
        desc: "Knowledgeable, government-licensed guides to accompany you and enrich your journey.",
    },
    {
        icon: Hotel,
        title: "Accommodation Booking",
        desc: "From boutique villas to 5-star resorts, we handle all your stay arrangements.",
    },
    {
        icon: Plane,
        title: "Airport Transfers",
        desc: "Seamless pickup and drop-off services at Bandaranaike International Airport.",
    },
    {
        icon: Camera,
        title: "Special Interest Tours",
        desc: "Photography, bird watching, hiking, or culinary tours tailored to your passion.",
    },
];

export default function ServicesPage() {
    return (
        <>
            <PageHeader
                title="Our Services"
                subtitle="Experience seamless travel with our comprehensive range of tourism services."
                image="https://images.unsplash.com/photo-1575540325855-0361362e3dbe?q=80&w=2071&auto=format&fit=crop" // Surfer/Beach
            />

            <section className="py-24 container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                            <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                                <service.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
