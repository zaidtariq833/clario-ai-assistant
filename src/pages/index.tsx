import Header from "@/components/layout/Header";
import Banner from "@/components/ui/Banner";
import LiveDemoSection from "@/components/ui/LiveDemoSection";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/assets/images/main-bg.png')] pt-12.25 bg-cover">
        <Header />
        <Banner />
        <LiveDemoSection />
      </div>
    </>
  );
}
