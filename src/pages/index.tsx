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
      <div
        className="bg-[url('/assets/images/main-bg.png')] bg-cover bg-[center_-40px] 
 bg-no-repeat pt-[49px]"
      >
        <Header />
        <Banner />
        <LiveDemoSection />
        <Steps />
      </div>

      <div className="bg-(--ice-flow)">
        <IeltsFeatures />
        <Testimonials />
        <FAQs />
      </div>

      <div className="relative overflow-hidden bg-[#FBFCFF]">
        <div
          className="
      absolute
      -top-68
      inset-x-0
      h-[900px]
      bg-[url('/assets/images/footer-image.png')]
      bg-center
      bg-cover
      bg-no-repeat
      z-0
    "
        />

        <div
          className="
      pointer-events-none
      absolute
      top-0
      inset-x-0
      h-[100px]
      z-[1]
      bg-gradient-to-b
      from-[#FBFCFF]
      via-[#FBFCFF]/90
      via-[#FBFCFF]/60
      to-transparent
    "
        />

        <div
          className="
      absolute
      top-0
      inset-x-0
      h-[500px]
      z-[2]
      bg-[radial-gradient(ellipse_at_top,#FBFCFF_0%,transparent_75%)]
      opacity-80
    "
        />

        <div className="relative z-10">
          <CTASection />
          <Footer />
        </div>
      </div>
    </>
  );
}
