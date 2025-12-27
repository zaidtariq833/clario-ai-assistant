"use client";
import { geistRegular } from "@/styles/fonts";
import Image from "next/image";
import { useState } from "react";

export default function ParaBox() {
  const [essay, setEssay] = useState(
    "Start Typing your essay here - try it now!"
  );

  console.log(essay, "essay");
  return (
    <>
      <div className="border-2 flex items-baseline gap-2 border-(--tropical-blue) h-125 rounded-2xl px-4 pt-4 bg-(--ghost-white)">
        <Image
          src="/assets/icons/para-mark.svg"
          width={12}
          height={12}
          alt="para mark"
          className="mt-1"
        />
        <textarea
          className={`${geistRegular.className} leading-6.75 w-full h-full resize-none bg-transparent focus:outline-none text-base`}
          name="essay"
          value={essay}
          onChange={(e) => setEssay(e.target.value)}
        />
      </div>
    </>
  );
}
