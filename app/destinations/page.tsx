import { PageHeader } from "@/components/sections/PageHeader";
import Link from "next/link";
import Image from "next/image";

const destinations = [
    {
        name: "Sigiriya",
        image: "https://images.unsplash.com/photo-1620023604328-98e3b3c375c3?q=80&w=1974",
        desc: "The Lion Rock fortress, an ancient marvel.",
        type: "Heritage"
    },
    {
        name: "Kandy",
        image: "https://images.unsplash.com/photo-1588258219511-64eb629cb833?q=80&w=2070",
        desc: "The cultural capital and home to the Temple of the Tooth.",
        type: "Culture"
    },
    {
        name: "Ella",
        image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?q=80&w=1974",
        desc: "Scenic grandeur in the hill country.",
        type: "Nature"
    },
    {
        name: "Galle",
        image: "https://images.unsplash.com/photo-1555547432-d85c18684242?q=80&w=2080",
        desc: "A charming colonial fort town on the southern coast.",
        type: "Heritage"
    },
    {
        name: "Yala",
        image: "https://images.unsplash.com/photo-1546708773-e575a556da8e?q=80&w=2070",
        desc: "Leopards, elephants, and untamed wilderness.",
        type: "Wildlife"
    },
    {
        name: "Mirissa",
        image: "https://images.unsplash.com/photo-1534533994168-441a23f99881?q=80&w=2070",
        desc: "Whale watching and laid-back beach vibes.",
        type: "Beach"
    },
    {
        name: "Nuwara Eliya",
        image: "https://images.unsplash.com/photo-1534653299134-96a171b61581?q=80&w=2030", // Tea
        desc: "Little England, surrounded by tea plantations.",
        type: "Nature"
    },
    {
        name: "Anuradhapura",
        image: "https://images.unsplash.com/photo-1580910547196-88009bacc241?q=80&w=2070",
        desc: "The ancient capital of kings.",
        type: "Heritage"
    }
];

export default function DestinationsPage() {
    return (
        <>
            <PageHeader
                title="Destinations"
                subtitle="Explore the diverse landscapes of Sri Lanka, from ancient ruins to golden shores."
                image="https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?q=80&w=1920&auto=format&fit=crop" // Train or landscape
            />

            <section className="py-20 container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {destinations.map((dest) => (
                        <Link
                            key={dest.name}
                            href={`/contact?destination=${encodeURIComponent(dest.name)}`} // Linking to inquiry
                            className="group relative h-96 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all block"
                        >
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                            <div className="absolute bottom-0 left-0 p-6 text-white w-full transform transition-transform duration-300 group-hover:-translate-y-2">
                                <span className="text-xs font-light tracking-wider uppercase mb-1 block text-gray-300">{dest.type}</span>
                                <h3 className="text-2xl font-bold font-serif mb-2">{dest.name}</h3>
                                <p className="text-sm text-gray-200 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {dest.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}
