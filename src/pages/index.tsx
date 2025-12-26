import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Banner from "@/components/ui/Banner";
import CTASection from "@/components/ui/CTASection";
import FAQs from "@/components/ui/FAQs";
import IeltsFeatures from "@/components/ui/IeltsFeatures";
import LiveDemoSection from "@/components/ui/LiveDemoSection";
import Steps from "@/components/ui/Steps";
import Testimonials from "@/components/ui/Testimonials";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        component="div"
        className="bg-[url('/assets/images/main-bg.png')] bg-cover bg-center bg-no-repeat pt-12.25"
      >
        <Header />
        <Banner />
        <LiveDemoSection />
        <Steps />
      </Box>
      <Box component="div" className="bg-[#fbfcff]">
        <IeltsFeatures />
        <Testimonials />
        <FAQs />
      </Box>
      <Box
        component="div"
        className="bg-[url('/assets/images/footer-image.png')] bg-cover bg-center"
      >
        <Box className="pt-[148.5px]">
          <CTASection />
          <Footer />
        </Box>
      </Box>
    </>
  );
}
