import Image from "next/image";
import { questionTags } from "@/components/constants";
import {
  geistRegular,
  interMedium,
  interRegular,
  interSemiBold,
} from "@/styles/fonts";

export default function QuestionBox() {
  return (
    <div className="border rounded-2xl px-4 py-4">
      <div className="flex items-center gap-1">
        <span className={`${geistRegular.className} text-base`}>Question</span>
        <Image
          src={"/assets/icons/alert-circle.svg"}
          width={16}
          height={16}
          alt="alert circle"
        />
      </div>
      <div className="my-4">
        <p
          className={`${interSemiBold.className} text-xl text-(--oxford-blue) mt-4 mb-3`}
        >
          Should Smartphones be banned in Classrooms?
        </p>
        <p
          className={`${interRegular.className} leading-5.5 text-base text-(--roman-silver)`}
        >
          Smartphones are now common in school, and many students bring them to
          class everyday. Some people believe that phones should be banned
          because they distract students, while others think they can be useful
          learning tools.
        </p>
      </div>
      <div className="flex items-center gap-2">
        {questionTags?.map((ques: string, index: number) => {
          return (
            <p
              key={index}
              className={`${interMedium.className} shadow-lightest text-(--roman-silver) py-0.5 px-2.5 rounded-[0.9375rem]`}
            >
              {ques}
            </p>
          );
        })}
      </div>
    </div>
  );
}
