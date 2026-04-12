import Hero from "@/components/Hero";
import ScrollTank from "@/components/ScrollTank";
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
      <ScrollTank />
      <FeaturedPlants />
      <CategoryCards />
      <AboutSection />
      <Footer />
    </main>
  );
}
