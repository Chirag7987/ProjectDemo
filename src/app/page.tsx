import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import InteractiveFeaturePage from "@/components/NewFeature/InteractiveFeaturePage";
import TestimonialGrid from "@/components/NewFeature/TestimonialGrid ";
import TestimonialSection from "@/components/NewFeature/TestimonialSection";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <TestimonialSection />
      < InteractiveFeaturePage/>
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      < TestimonialGrid/>
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
