import { geistRegular } from "@/styles/fonts";

export default function NavigatorButtons() {
  return (
    <div className="flex justify-center gap-5 mt-4">
      <button
        className={`${geistRegular.className} text-[14px] bg-(--white) w-[45%] border border-1 px-6 py-2 rounded-[10px] border-(--cloud-gray)`}
      >
        Go To Dashboard
      </button>
      <button
        className={`${geistRegular.className}} bg-(--violet) text-(--white) w-[45%] border border-1 border-(--violet) px-6 py-2 rounded-[10px]`}
      >
        Detailed Report
      </button>
    </div>
  );
}
