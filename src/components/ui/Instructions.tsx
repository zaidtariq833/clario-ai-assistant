import Image from "next/image";
import TaskRequirements from "./TaskRequirements";
import { geistMedium, geistRegular } from "@/styles/fonts";

export default function Instructions() {
  return (
    <>
      <div className="max-w-76.25 max-h-65.25 border-2 border-(--black) rounded-2xl px-4 py-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-1">
            <p className={`${geistRegular.className} text-[14px] leading-4.5`}>
              Time remaining
            </p>
            <Image
              src={"/assets/icons/alert-circle.svg"}
              width={12}
              height={12}
              alt="alert circle"
            />
          </div>
          <div>
            <span
              className={`${geistMedium.className} text-(--royal-blue) leading-4.5 text-[14px]`}
            >
              23:14
            </span>
          </div>
        </div>
        <div>
          <Image
            src={"/assets/images/timer-bar.png"}
            className="mx-auto"
            width={275}
            height={4}
            alt="timer bar"
          />
        </div>
        <div className="flex items-center justify-between pt-2 pb-4">
          <div className="flex gap-1">
            <h5 className={`${geistRegular.className} text-sm leading-4.5`}>
              Word Count
            </h5>
            <Image
              src={"/assets/icons/alert-circle.svg"}
              width={12}
              height={12}
              alt="alert circle"
            />
          </div>
          <div>
            <p
              className={`${geistRegular.className} text-(--black) text-[14px] leading-4.5`}
            >
              0/250
            </p>
          </div>
        </div>
        <hr className="text-(--cloud-grey)" />
        <TaskRequirements />
      </div>
    </>
  );
}
