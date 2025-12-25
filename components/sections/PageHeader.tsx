import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
    className?: string;
}

export function PageHeader({ title, subtitle, image, className }: PageHeaderProps) {
    return (
        <div className={cn("relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-center", className)}>
            {/* Background */}
            <div className="absolute inset-0 z-0 bg-primary">
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover opacity-60"
                        priority
                    />
                )}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container-custom text-white pt-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">{title}</h1>
                {subtitle && (
                    <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto drop-shadow-md">
                        {subtitle}
                    </p>
                )}
            </div>
        </div>
    );
}
