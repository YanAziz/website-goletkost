import Hero from "@/components/Hero";
import AllPropertiesKost from "@/components/AllPropertiesKost";
import AllPropertiesKontrakan from "@/components/AllPropertiesKontrakan";
import UnivSection from "@/components/UnivSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-100">
      <div className="max-padd-container">
        <Hero />
        <UnivSection />
        <AllPropertiesKost />
        <AllPropertiesKontrakan />
        <Footer />
      </div>
    </main>
  );
}
