import HeroSection from "@/components/HeroSection";
import OurProcess from "@/components/OurProcess";
import RenovationServices from "@/components/RenovationServices";

export default function Home() {
  return (
    <main className="mt-20">
      <HeroSection />
      <RenovationServices />
      <OurProcess />
    </main>
  );
}
