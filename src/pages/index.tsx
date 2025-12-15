import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Banner from "@/components/ui/Banner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <div className="bg-[url('/images/main-bg.png')] bg-cover">
        <Header />
        <Banner />
      </div>
    </>
  );
}
