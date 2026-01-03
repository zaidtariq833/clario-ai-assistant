import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Banner from "@/components/ui/Banner";
import CTASection from "@/components/ui/CTASection";
import FAQs from "@/components/ui/FAQs";
import IeltsFeatures from "@/components/ui/IeltsFeatures";
import LiveDemoSection from "@/components/ui/LiveDemoSection";
import Steps from "@/components/ui/Steps";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <>
      <div className="banner-image">
        <Header />
        <div className="max-w-[clamp(768px,79.63%,1536px)] mx-auto">
          <Banner />
          <LiveDemoSection />
        </div>
        <Steps />
      </div>

      <div className="bg-(--ice-flow)">
        <IeltsFeatures />
        <Testimonials />
        <FAQs />
      </div>

      <div className="relative overflow-hidden bg-(--ice-flow)">
        <div className="lower-section" />
        <div className="blend-1" />
        <div className="blend-2" />
        <div className="relative z-10">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
