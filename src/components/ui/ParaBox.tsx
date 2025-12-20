"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import SubmitEssay from "./SubmitEssay";

export default function ParaBox() {
  const [essay, setEssay] = useState(
    "Start Typing your essay here - try it now!"
  );

  console.log(essay, "essay");
  return (
    <>
      <div className="border-2 flex items-baseline gap-2 border-[#b9c3ff] h-125 rounded-2xl px-4 pt-4 bg-[#f5f6fc]">
        <Image
          src="/assets/icons/para-mark.svg"
          width={12}
          height={12}
          alt="para mark"
          className="mt-1"
        />
        <textarea
          className="w-full h-full resize-none bg-transparent focus:outline-none text-base"
          name="essay"
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
        />
      </div>
    </>
  );
}
