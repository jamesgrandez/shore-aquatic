import Hero from "@/components/Hero";
import ShippingBanner from "@/components/ShippingBanner";
import AboutSection from "@/components/AboutSection";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";
import PlantMarquee from "@/components/PlantMarquee";
import FeaturedPlants from "@/components/FeaturedPlants";
import SaltwaterShowcase from "@/components/SaltwaterShowcase";
import RotiferHero from "@/components/RotiferHero";
import AnnouncementBar from "@/components/AnnouncementBar";

export default function Home() {
  return (
    <main>
      <Hero />
      <AnnouncementBar />
      <SaltwaterShowcase />
      <PlantMarquee />
      <ShippingBanner />
      <FeaturedPlants />
      <RotiferHero />
      <CategoryCards />
      <AboutSection />
      <Footer />
    </main>
  );
}
