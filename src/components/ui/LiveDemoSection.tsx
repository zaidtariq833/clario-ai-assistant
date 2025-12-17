import Image from "next/image";
import QuestionBox from "./QuestionBox";
import Instructions from "./Instructions";
import ParaBox from "./ParaBox";
import SubmitEssay from "./SubmitEssay";

export default function LiveDemoSection() {
  return (
    <div className="max-w-295.75 mx-auto max-h-209 mt-14 border-[6px] rounded-[17px] border-[#e5edfe] shadow-[0_23.1px_51.71px_0_rgba(0,0,0,0.1),0_93.52px_93.52px_0_rgba(0,0,0,0.09),0_211.24px_126.53px_0_rgba(0,0,0,0.05),0_376.28px_150.73px_0_rgba(0,0,0,0.01),0_587.52px_163.93px_0_rgba(0,0,0,0)]">
      <div className="bg-[#cfeafd] flex items-center gap-[8.89px] justify-center py-2 rounded-tl-[17px] rounded-tr-[17px]">
        <Image
          src={"/assets/icons/announcement-icon.svg"}
          width={16}
          height={16}
          alt={"announcement"}
        />
        <h6 className="text-[#1e1e1e] text-[13px] leading-[1.095] text-center max-w-1183px">
          LIVE DEMO - TEST THE AI INSTANTLY
        </h6>
      </div>
      <div className="bg-white grid grid-cols-[850px_1fr] rounded-bl-[17px] rounded-br-[17px] pt-4">
        <QuestionBox />
        <Instructions />
      </div>
      <div className="bg-white grid grid-cols-[850px_1fr] items-end rounded-bl-[17px] rounded-br-[17px] pt-4">
        <ParaBox />
        <SubmitEssay />
      </div>
    </div>
  );
}
