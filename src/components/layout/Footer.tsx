import { geistMedium } from "@/styles/fonts";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-center justify-between py-5.5 px-12 md:-mt-25">
        <Image
          src={"/assets/images/logo.png"}
          width={117}
          height={36}
          alt="logo"
        />
        <div className="flex flex-col items-center mt-6.5 md:mt-0 md:flex-row gap-2.5">
          <span
            className={`${geistMedium.className} leading-6 md:leading-6 text-[16px] text-(--warm-gray)`}
          >
            Privacy Policy
          </span>
          <span className="hidden md:block md:text-(--warm-gray)">|</span>
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
