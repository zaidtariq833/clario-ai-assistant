import Image from "next/image";
import { steps } from "@/components/constants";
import { geistRegular, interLight } from "@/styles/fonts";
import { StepsType } from "@/types";

export default function StepsPoint() {
  return (
    <div className="max-w-[90.5%] mx-auto mt-12 mb-18 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-col-4 gap-2">
      {steps.map((step: StepsType, index: number) => (
        <div key={index} className="relative">
          <div className="bg-(--ghost-white) rounded-3xl p-4 flex flex-col h-full min-h-85.25">
            <p
              className={`${interLight.className} leading-4.25 md:leading-6 uppercase text-(--gray-stone) text-sm md:text-xl`}
            >
              {step?.name}
            </p>

            <h6
              className={`${geistRegular.className} leading-7.75 md:leading-6 text-[1.5rem] mt-3`}
            >
              {step?.mainText}
            </h6>

            <div className="grow flex items-center justify-center md:py-6">
              <Image
                src={step?.image}
                width={261}
                height={178}
                alt="step image"
                className="object-contain"
              />
            </div>

            <span
              className={`${geistRegular.className} leading-4.5 bg-(--white) text-sm block w-fit px-4 py-2 rounded-[4.5rem] mt-auto`}
            >
              {step?.btnText}
            </span>
          </div>

          <div className="md:hidden lg:absolute flex top-0 relative z-20 lg:rotate-x-0 justify-center lg:-right-6 md:top-1/2 -translate-y-1/2 lg:z-10 lg:block">
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
