import Image from "next/image";
import QuestionBox from "./QuestionBox";
import Instructions from "./Instructions";
import ParaBox from "./ParaBox";
import SubmitEssay from "./SubmitEssay";
import { geistRegular } from "@/styles/fonts";

export default function LiveDemoSection() {
  return (
    <section className="editor-section">
      <div className="bg-(--light-periwinkle) flex items-center gap-[8.89px] justify-center py-2 rounded-t-[17px]">
        <Image
          src="/assets/icons/announcement-icon.svg"
          width={16}
          height={16}
          alt="announcement"
        />
        <p
          className={`${geistRegular.className} font-geist-regular text-(--raisin-black) text-[13px] leading-[1.095] text-center max-w-295.75`}
        >
          LIVE DEMO - TEST THE AI INSTANTLY
        </p>
      </div>

      <div className="bg-(--white) rounded-b-[17px] p-3.5">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
          <div className="sm:col-span-9">
            <QuestionBox />
          </div>
          <div className="sm:col-span-3">
            <Instructions />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end sm:-mt-5">
          <div className="sm:col-span-9">
            <ParaBox />
          </div>
          <div className="sm:col-span-3">
            <SubmitEssay />
          </div>
        </div>
      </div>
    </section>
  );
}
