import Image from "next/image";
import { taskReq } from "../constants";

export default function TaskRequirements() {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div className="py-4">
          <div className="flex items-center gap-1">
            <p className="text-[#667085] text-xs">Task Requirements</p>
            <Image
              src={"/assets/icons/alert-circle.svg"}
              width={12}
              height={12}
              alt="alert circle"
            />
          </div>
          <div className="px-6">
            <ul className="flex flex-col gap-3 mt-2">
              {taskReq?.map((task, index) => {
                return (
                  <li key={index} className="text-xs list-disc">
                    {task}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
