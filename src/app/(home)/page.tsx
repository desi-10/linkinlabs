import Affiliates from "@/components/affiliates";
import Contact from "@/components/contact";
import CTA from "@/components/CTA";
import PlatformFeatures from "@/components/features";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import Services from "@/components/services";

export default function Home() {
  return (
    <section>
      <HeroSection />
      <HowItWorks />
      <Affiliates />
      <Services />
      <PlatformFeatures />
      <CTA />
      <Contact />
    </section>
  );
}
