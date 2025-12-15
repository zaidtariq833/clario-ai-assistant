import Image from "next/image";

export default function Header() {
  return (
    <div className="mx-auto flex items-center bg-white justify-between max-w-[1280px] max-h-[64px] px-2 py-2 rounded-[14px] shadow-[0px_15px_14px_0px_rgba(20,33,131,0.03)]">
      <div>
        <Image src="/images/logo.png" width={117} height={36} alt="logo" />
      </div>

      <div className="flex gap-2">
        <button className="text-[#181d27] bg-[#fafafa] px-[18.27px] py-[9.13px] whitespace-nowrap rounded-[13.7px]">
          Sign in
        </button>

        <button className="px-[30px] py-[10px] bg-[#15171d] text-white rounded-xl">
          Start For Free
        </button>
      </div>
    </div>
  );
}
