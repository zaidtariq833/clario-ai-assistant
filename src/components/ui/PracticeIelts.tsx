import { Grid } from "@mui/material";
import Image from "next/image";
import { ieltsPracPoints, ieltsScoreAndMistakes } from "../constants";

export default function PracticeIelts() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-14">
        <Grid
          container
          className="shadow-[0_4px_8px_3px_rgba(0,0,0,0.08)] rounded-4xl"
        >
          <Grid
            sm={5}
            className="flex flex-col justify-between bg-white rounded-l-4xl py-8 px-6"
          >
            <div>
              <h5 className="text-[26px] text-[#000000] font-bold">
                Practice IELTS tasks the smart way.
              </h5>
              <p className="text-[#535457] max-w-114 mt-5.25 text-[24px]">
                Real questions, instant scoring, and structured practice
                pathways.
              </p>
            </div>
            <div className="flex flex-col">
              {ieltsPracPoints?.map((point, index) => {
                return (
                  <>
                    <p className="text-[20px] py-5 border-b border-[#bfbfbf]">
                      {point}
                    </p>
                  </>
                );
              })}
            </div>
          </Grid>

          <Grid sm={7} className="bg-[#8163f7] rounded-r-4xl overflow-hidden">
            <Image
              src={"/assets/images/practice-ielts.png"}
              width={1170}
              height={780}
              alt="practice ielts"
              className="pl-8 pt-8 object-cover"
            />
          </Grid>
        </Grid>
        <Grid container className="mt-6 justify-between">
          {ieltsScoreAndMistakes?.map((prac, index) => (
            <Grid
              item
              sm={5.9}
              key={index}
              className="bg-white rounded-4xl shadow-[0_4px_8px_3px_rgba(0,0,0,0.08)]"
            >
              <div className="py-8 px-6">
                <h5 className="font-bold text-[26px] mb-2">{prac?.mainText}</h5>
                <p className="text-gray-600 text-[24px]">{prac?.paraText}</p>
              </div>

              <Image
                src={prac?.image}
                width={864}
                height={583}
                alt="smartphones"
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
