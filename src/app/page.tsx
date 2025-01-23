import Navbar from "@/components/header";
import HeroSection from "@/components/hero-section";
import SecondSection from "@/components/second-section";
import ReviewSection from "@/components/review-section";
import MarketCommunitySection from "@/components/market-community-section";
import Testimonials from "@/components/testimonials";
import TabSection from "@/components/tab-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <SecondSection />
      <ReviewSection />
      <MarketCommunitySection />
      <Testimonials />
      <TabSection/>
      <Footer/>
    </div>
  );
}
