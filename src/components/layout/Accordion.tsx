"use client";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { geistMedium } from "@/styles/fonts";
import { AccordionProps } from "@/types";

export default function Accordions({ faq, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="bg-(--ghost-white) rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 px-6 md:py-5 md:px-6 text-left focus:outline-none"
      >
        <span
          className={`${geistMedium.className} text-sm leading-4.5 md:text-lg md:leading-tight text-(--black)`}
        >
          {faq.question}
        </span>

        <div
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-90" : "rotate-0"
          }`}
        >
          {isOpen ? (
            <IoClose className="w-6 h-6" />
          ) : (
            <FiPlus className="w-6 h-6" />
          )}
        </div>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-(--dim-gray) text-sm leading-4.5 md:leading-6 md:pt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
