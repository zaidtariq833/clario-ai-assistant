"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import useBandCalculate from "@/hooks/useBandCalculate";
import { setIeltsScoreEstimate } from "@/store/slices/ieltsBandCalculateSlice";
import { geistRegular } from "@/styles/fonts";

export default function ParaBox() {
  const dispatch = useDispatch();
  const [essay, setEssay] = useState("");

  const {
    wordCount,
    lexicalBand,
    taskResponseBand,
    coherenceBand,
    grammarBand,
    overallBand,
    paragraphCount,
  } = useBandCalculate(essay);

  useEffect(() => {
    if (essay) {
      dispatch(
        setIeltsScoreEstimate({
          words: wordCount,
          cohesion: coherenceBand,
          lexicalResource: lexicalBand,
          taskResponse: taskResponseBand,
          grammarAccuracy: grammarBand,
          totalBand: overallBand,
          paragraphs: paragraphCount,
        })
      );
    }
  }, [essay]);

  return (
    <>
      <div className="border-2 flex gap-4 border-(--tropical-blue) h-125 rounded-2xl px-4 pt-4 bg-(--ghost-white)">
        <div className="flex items-baseline gap-2 w-full">
          <Image
            src="/assets/icons/para-mark.svg"
            width={12}
            height={12}
            alt="para mark"
            className="mt-1"
          />
          <textarea
            className={`${geistRegular.className} leading-6.75 w-full resize-none h-112.5 overflow-y-auto bg-transparent focus:outline-none text-base`}
            placeholder="Start typing your essay here - try it now!"
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
          />
        </div>
      </div>
    </>
  );
}
