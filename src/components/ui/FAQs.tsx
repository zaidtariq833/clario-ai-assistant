"use client";
import { faqs } from "@/components/constants";
import { FAQ } from "@/types";
import Accordions from "@/components/layout/Accordion";
import { geistSemiBold } from "@/styles/fonts";
import { useState } from "react";

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="-mt-25 md:-mt-87.5 pb-18">
      <h2 className={`${geistSemiBold.className} faq-text`}>FAQs</h2>
      <div className="flex flex-col gap-3 mt-10 max-w-99 md:max-w-174 mx-auto">
        {faqs.map((faq: FAQ, index: number) => {
          return (
            <div key={index} className="px-6 rounded-lg">
              <Accordions
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />{" "}
            </div>
          );
        })}
      </div>
    </section>
  );
}
