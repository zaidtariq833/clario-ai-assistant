import Header from "@/components/layout/Header";
import Banner from "@/components/ui/Banner";
import IeltsFeatures from "@/components/ui/IeltsFeatures";
import LiveDemoSection from "@/components/ui/LiveDemoSection";
import Steps from "@/components/ui/Steps";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/images/main-bg.png')] pt-12.25 bg-cover">
        <Header />
        <Banner />
        <LiveDemoSection />
        <Steps />
      </div>
      <div className="bg-[#fbfcff]">
        <IeltsFeatures />
      </div>
    </>
  );
}
