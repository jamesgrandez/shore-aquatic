import Hero from "@/components/Hero";
import ShippingBanner from "@/components/ShippingBanner";
import AboutSection from "@/components/AboutSection";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";
import PlantMarquee from "@/components/PlantMarquee";
import FeaturedPlants from "@/components/FeaturedPlants";

export default function Home() {
  return (
    <main>
      <Hero />
      <PlantMarquee />
      <ShippingBanner />
      <FeaturedPlants />
      <CategoryCards />
      <AboutSection />
      <Footer />
    </main>
  );
}
