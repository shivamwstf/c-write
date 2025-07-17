import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { DemoSection } from '@/components/sections/DemoSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ServicesSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}