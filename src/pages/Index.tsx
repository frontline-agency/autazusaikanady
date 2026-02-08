import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyUsSection from "@/components/WhyUsSection";
import ProcessSection from "@/components/ProcessSection";
import CostsSection from "@/components/CostsSection";
import SavingsSection from "@/components/SavingsSection";
import AuctionsSection from "@/components/AuctionsSection";
import ServicesSection from "@/components/ServicesSection";
import BlogSection from "@/components/BlogSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
      <WhyUsSection />
      <ProcessSection />
      <CostsSection />
      <SavingsSection />
      <AuctionsSection />
      <ServicesSection />
      <BlogSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
