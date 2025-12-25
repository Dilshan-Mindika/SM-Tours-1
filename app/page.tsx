import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { FeaturedTours } from "@/components/sections/FeaturedTours";
import { DestinationsPreview } from "@/components/sections/DestinationsPreview";
import { Stats } from "@/components/sections/Stats";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Newsletter } from "@/components/sections/Newsletter";
import { ParallaxGallery } from "@/components/sections/ParallaxGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Intro />
      <ParallaxGallery />
      <FeaturedTours />
      <VideoShowcase />
      <DestinationsPreview />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </>
  );
}
