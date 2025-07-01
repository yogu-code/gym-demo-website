import Image from "next/image";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutUs";
import ServicesSection from "@/components/Service";
import GymPricingSection from "@/components/Pricing";
import GymContactSection from "@/components/Contact";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <>
      <Hero />
      <section id="about">
        <AboutSection />
      </section>

      <section id="service">
        <ServicesSection />
      </section>

      <section id="pricing">
        <GymPricingSection />
      </section>

      <section id="contact">
        <GymContactSection />
      </section>
    </>
  );
}
