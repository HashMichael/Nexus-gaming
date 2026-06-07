import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LiveTicker from "@/components/LiveTicker";
import FeaturedGames from "@/components/FeaturedGames";
import Esports from "@/components/Esports";
import News from "@/components/News";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <LiveTicker />
      <FeaturedGames />
      <Esports />
      <News />
      <Community />
      <Footer />
    </main>
  );
}