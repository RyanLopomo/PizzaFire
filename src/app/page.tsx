import { About } from "../components/About";
import { CustomCursor } from "../components/CustomCursor";
import { Features } from "../components/Features";
import { Feedbacks } from "../components/Feedbacks";
import { FinalCTA } from "../components/FinalCTA";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { Footer } from "../components/Footer";
import { Gallery } from "../components/Gallery";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { LoadingScreen } from "../components/LoadingScreen";
import { MenuHighlights } from "../components/MenuHighlights";
import { ScrollProgress } from "../components/ScrollProgress";
import { SmoothScroll } from "../components/SmoothScroll";
import { PremiumMenu } from "../components/PremiumMenu";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
        <LoadingScreen />
        <ScrollProgress />
        <CustomCursor />
        <Header />
        <Hero />
        <Features />
        <MenuHighlights />
        <PremiumMenu />
        <About />
        <Gallery />
        <Feedbacks />
        <FinalCTA />
        <Footer />
        <FloatingWhatsApp />
      </main>
    </SmoothScroll>
  );
}