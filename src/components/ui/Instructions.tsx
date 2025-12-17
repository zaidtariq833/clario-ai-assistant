import Image from "next/image";
import TaskRequirements from "./TaskRequirements";

export default function Instructions() {
  return (
    <>
      <div className="max-w-76.25 max-h-65.25 border-2 border-[#000000] rounded-[16px] px-4 py-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-1">
            <p className="text-[14px]">Time remaining</p>
            <Image
              src={"/assets/icons/alert-circle.svg"}
              width={12}
              height={12}
              alt="alert circle"
            />
          </div>
          <div>
            <span className="text-[#2563EB] text-[14px]">23:14</span>
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
        <div className="flex items-center justify-between py-2">
          <div className="flex gap-1">
            <h5 className="text-sm">Word Count</h5>
            <Image
              src={"/assets/icons/alert-circle.svg"}
              width={12}
              height={12}
              alt="alert circle"
            />
          </div>
          <div>
            <p className="text-[#000000] text-[14px]">0/250</p>
          </div>
        </div>
        <hr />
        <TaskRequirements />
      </div>
    </>
  );
}
