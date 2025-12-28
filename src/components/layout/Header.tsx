import { geistMedium } from "@/styles/fonts";
import Image from "next/image";

export default function Header() {
  return (
    <header className="header">
      <div>
        <Image
          src="/assets/images/logo.png"
          width={117}
          height={36}
          alt="logo"
        />
      </div>

      <div className="flex gap-2">
        <button className={`${geistMedium.className} btn-signin`}>
          Sign in
        </button>
        <button
          className={`${geistMedium.className} text-[14px] btn-startfree`}
        >
          Start For Free
        </button>
      </div>
    </header>
  );
}
