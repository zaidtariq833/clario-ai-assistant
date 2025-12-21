import Image from "next/image";
import { steps } from "../constants";
import { Grid } from "@mui/material";

export default function StepsPoint() {
  return (
    <div className="mx-18 mt-12 mb-18">
      {/* The Grid container now sits safely inside the margin */}
      <Grid container spacing={1}>
        {steps.map((step, index) => (
          <Grid item xs={12} lg={3} key={index}>
            <div className="bg-[#f5f6fc] rounded-3xl p-4 flex flex-col h-full">
              <p className="uppercase text-[#838383] text-sm">{step?.name}</p>
              <h6 className="text-[1.5rem] mt-3">{step?.mainText}</h6>

              <div className="grow flex items-center justify-center">
                <Image
                  src={step?.image}
                  width={261}
                  height={178}
                  alt="step image"
                />
              </div>

              <span className="bg-white text-[14px] block w-fit px-4 py-2 rounded-[4.5rem] mt-4">
                {step?.btnText}
              </span>
            </div>
            <div className="flex justify-end">
              <Image
                src={"/assets/icons/forward-arrow.svg"}
                width={40}
                height={40}
                alt="forwarded arrow"
                className="flex justify-end relative left-5 bottom-50"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
