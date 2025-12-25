import { PageHeader } from "@/components/sections/PageHeader";
import { Intro } from "@/components/sections/Intro";
import Image from "next/image";

export default function AboutPage() {
    return (
        <>
            <PageHeader
                title="Our Story"
                subtitle="Born from a deep love for this island, SM Tours is dedicated to sharing the authentic soul of Sri Lanka with the world."
                image="https://images.unsplash.com/photo-1596701833777-6284cb5ee35d?q=80&w=2070&auto=format&fit=crop" // Tea plucker or culture
            />

            <section className="py-20 container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">A Journey of Passion</h2>
                        <p>
                            Founded by a team of local travel enthusiasts, SM Tours started with a simple vision:
                            to move beyond the standard tourist trail and offer genuine, immersive experiences.
                            We believe that travel is not just about seeing places, but feeling them.
                        </p>
                        <p>
                            Our guides are not just drivers; they are storytellers, historians, and local friends
                            who open doors to unique cultural moments that you won&apos;t find in guidebooks.
                        </p>
                    </div>
                    <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1546708773-e575a556da8e?q=80&w=2070"
                            alt="Sri Lanka Experience"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            <Intro />
        </>
    );
}
