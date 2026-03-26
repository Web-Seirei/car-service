import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <AdvantagesSection />
        <WorkflowSection />
        <GallerySection />
        <ReviewsSection />
        <BookingSection />
        <ContactsSection />
      </main>
      <Footer />
    </>
  );
}
