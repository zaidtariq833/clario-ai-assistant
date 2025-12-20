import Image from "next/image";
import QuestionBox from "./QuestionBox";
import Instructions from "./Instructions";
import ParaBox from "./ParaBox";
import SubmitEssay from "./SubmitEssay";
import { Grid } from "@mui/material";

export default function LiveDemoSection() {
  return (
    <div className="max-w-295.75 mx-auto mt-12 mb-16.75 border-[6px] rounded-[17px] border-[#e5edfe] shadow-[0_23.1px_51.71px_0_rgba(0,0,0,0.1),0_93.52px_93.52px_0_rgba(0,0,0,0.09),0_211.24px_126.53px_0_rgba(0,0,0,0.05),0_376.28px_150.73px_0_rgba(0,0,0,0.01),0_587.52px_163.93px_0_rgba(0,0,0,0)]">
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
      <div className="bg-white rounded-bl-[17px] rounded-br-[17px] p-3.5">
        <Grid container spacing={2}>
          <Grid item sm={9}>
            <QuestionBox />
          </Grid>
          <Grid item sm={3}>
            <Instructions />
          </Grid>
        </Grid>
        <Grid container spacing={2} className="items-end">
          <Grid item sm={9}>
            <ParaBox />
          </Grid>
          <Grid item sm={3}>
            <SubmitEssay />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
