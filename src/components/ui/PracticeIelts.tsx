import Image from "next/image";
import { ieltsPracPoints, ieltsScoreAndMistakes } from "@/components/constants";
import { geistMedium, geistRegular, geistSemiBold } from "@/styles/fonts";
import { ieltsScoreAndMistakesType } from "@/types";

export default function PracticeIelts() {
  return (
    <>
      <section className="max-w-[90.5%] mx-auto mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-12 shadow-card rounded-4xl overflow-hidden">
          <div className="sm:col-span-5 bg-(--white) py-8 px-6">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h5
                  className={`${geistSemiBold.className} leading-7.25 md:leading-8.5 text-[1.375rem] md:text-[1.625rem] text-(--black)`}
                >
                  Practice IELTS tasks the smart way.
                </h5>
                <p
                  className={`${geistRegular.className} leading-5.25 md:leading-7.75 text-(--carbon-gray) max-w-114 mt-5.25 text-base md:text-[1.5rem]`}
                >
                  Real questions, instant scoring, and structured practice
                  pathways.
                </p>
              </div>

              <div className="flex flex-col mt-8">
                {ieltsPracPoints?.map((point: string, index: number) => (
                  <p
                    key={index}
                    className={`${
                      geistMedium.className
                    } leading-5.25 md:leading-6.5 text-(--black) text-base md:text-[1.25rem] pt-5 ${
                      index === 2 ? "pb-0" : "pb-5"
                    }
                    } border-b border-[#bfbfbf] last:border-b-0`}
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="sm:col-span-7 bg-(--soft-violet) overflow-hidden flex items-end">
            <Image
              src="/assets/images/practice-ielts.png"
              width={1170}
              height={780}
              alt="practice ielts"
              className="pl-8 pt-8 object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row mt-6 gap-6 justify-between">
          {ieltsScoreAndMistakes?.map(
            (prac: ieltsScoreAndMistakesType, index: number) => (
              <div
                key={index}
                className="md:mx-0 flex-1 bg-(--white) rounded-4xl shadow-card overflow-hidden flex flex-col"
              >
                <div className="py-8 px-6">
                  <h5
                    className={`${geistSemiBold.className} text-[1.375rem] md:text-[1.625rem] leading-7.25 md:leading-8.5 mb-2`}
                  >
                    {prac?.mainText}
                  </h5>
                  <p
                    className={`${geistRegular.className} text-(--carbon-gray) text-base md:text-2xl mt-5.25 leading-7.75`}
                  >
                    {prac?.paraText}
                  </p>
                </div>

                <div className="mt-auto">
                  <Image
                    src={prac?.image}
                    width={864}
                    height={583}
                    alt="smartphones"
                    className="w-full h-auto rounded-b-4xl object-cover"
                  />
                </div>
              </div>
            )
          )}
        </div>
      </section>
    </>
  );
}
