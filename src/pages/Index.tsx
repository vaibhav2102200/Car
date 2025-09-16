import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import VideoShowreel from "@/components/VideoShowreel";
import Features from "@/components/Features";
import BookingSection from "@/components/BookingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Services />
      
      <Features />
      <BookingSection />
      <Footer />
    </div>
  );
};

export default Index;
