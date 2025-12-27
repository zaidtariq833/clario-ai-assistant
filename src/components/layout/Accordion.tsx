"use client";
import { FAQ } from "@/types";
import { FiPlus } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { geistMedium } from "@/styles/fonts";

type Props = {
  faq: FAQ;
  isOpen: boolean;
  onToggle: () => void;
};

export default function Accordions({ faq, isOpen, onToggle }: Props) {
  return (
    <div className="bg-(--ghost-white) rounded-xl overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-6 text-left focus:outline-none"
      >
        <span
          className={`${geistMedium.className} text-[18px] leading-tight text-(--black)`}
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
          <div className="px-6 pb-6 text-(--dim-gray) text-[16px] leading-6 pt-4">
            {faq.answer}
          </div>
        </div>
      </div>
    </div>
  );
}
