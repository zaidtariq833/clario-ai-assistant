import Image from "next/image";
import { questionTags } from "../constants";

export default function QuestionBox() {
  return (
    <div className="border-2 rounded-2xl px-4 py-4 mx-4 max-w-212.5 max-h-52.75">
      <div className="flex items-center gap-1">
        <span className="text-base">Question</span>
        <Image
          src={"/assets/icons/alert-circle.svg"}
          width={16}
          height={16}
          alt="alert circle"
        />
      </div>
      <div className="my-4">
        <p className="text-xl text-[#101828] mt-4 mb-3 font-bold">
          Should Smartphones be banned in Classrooms?
        </p>
        <p className="text-base text-[#667085] leading-5">
          Smartphones are now common in school, and many students bring them to
          class everyday. Some people believe that phones should be banned
          because they distract students, while others think they can be useful
          learning tools.
        </p>
      </div>
      <div className="flex items-center gap-2 ">
        {questionTags?.map((ques, index) => {
          return (
            <p
              key={index}
              className="shadow-[0_1px_1px_1px_rgba(0,0,0,0.03)] text-[#667085] py-0.5 px-2.5 rounded-[15px]"
            >
              {ques}
            </p>
          );
        })}
      </div>
    </div>
  );
}
