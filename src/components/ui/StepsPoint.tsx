import Image from "next/image";
import { steps } from "../constants";
import { geistRegular, interLight } from "@/styles/fonts";

export default function StepsPoint() {
  return (
    <div className="mx-18 mt-12 mb-18 grid grid-cols-1 lg:grid-cols-4 gap-2">
      {steps.map((step, index) => (
        <div key={index} className="relative">
          <div className="bg-(--ghost-white) rounded-3xl p-4 flex flex-col h-full min-h-85.25">
            <p
              className={`${interLight.className} leading-6 uppercase text-(--gray-stone) text-[20px]`}
            >
              {step?.name}
            </p>

            <h6
              className={`${geistRegular.className} leading-6 text-[1.5rem] mt-3`}
            >
              {step?.mainText}
            </h6>

            <div className="grow flex items-center justify-center py-6">
              <Image
                src={step?.image}
                width={261}
                height={178}
                alt="step image"
                className="object-contain"
              />
            </div>

            <span
              className={`${geistRegular.className} leading-4.5 bg-(--white) text-[14px] block w-fit px-4 py-2 rounded-[4.5rem] mt-auto`}
            >
              {step?.btnText}
            </span>
          </div>

          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
            {index < steps.length - 1 && (
              <Image
                src="/assets/icons/forward-arrow.svg"
                width={40}
                height={40}
                alt="forward arrow"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
