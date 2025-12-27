import { geistMedium } from "@/styles/fonts";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex items-center justify-between py-5.5 px-12 -mt-25">
        <Image
          src={"/assets/images/logo.png"}
          width={117}
          height={36}
          alt="logo"
        />
        <div className="flex gap-2.5">
          <span
            className={`${geistMedium.className} leading-6 text-[16px] text-(--warm-gray)`}
          >
            Privacy Policy
          </span>
          <span className="text-(--warm-gray)">|</span>
          <span
            className={`${geistMedium.className} leading-6 text-[16px] text-(--warm-gray)`}
          >
            Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
}
