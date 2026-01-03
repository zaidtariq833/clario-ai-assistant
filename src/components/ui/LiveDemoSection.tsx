import Image from "next/image";
import QuestionBox from "@/components/ui/QuestionBox";
import Instructions from "@/components/ui/Instructions";
import ParaBox from "@/components/ui/ParaBox";
import SubmitEssay from "@/components/ui/SubmitEssay";
import { geistRegular } from "@/styles/fonts";

export default function LiveDemoSection() {
  return (
    <section className="hidden md:block editor-section">
      <div className="live-demo-div">
        <Image
          src="/assets/icons/announcement-icon.svg"
          width={16}
          height={16}
          alt="announcement"
        />
        <p
          className={`${geistRegular.className} text-(--raisin-black) text-[0.8125rem] leading-[1.095] text-center max-w-295.75`}
        >
          LIVE DEMO - TEST THE AI INSTANTLY
        </p>
      </div>
      <div className="bg-(--white) rounded-b-[1.0625rem] p-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-start">
          <div className="sm:col-span-9 flex flex-col gap-4">
            <QuestionBox />
            <ParaBox />
          </div>

          <div className="sm:col-span-3 flex flex-col justify-between h-full min-h-full">
            <Instructions />
            <div className="mt-auto">
              <SubmitEssay />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
