import Hero from "@/components/Hero";
import ScrollTank from "@/components/ScrollTank";
import AboutSection from "@/components/AboutSection";
import CategoryCards from "@/components/CategoryCards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollTank />
      <AboutSection />
      <CategoryCards />
      <Footer />
    </main>
  );
}
