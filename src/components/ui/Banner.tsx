import { geistRegular, interRegular } from "@/styles/fonts";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="mt-22.25">
      <p className={`${geistRegular.className} latest-product-text`}>
        Announcing our latest product launch
      </p>
      <h1 className={`${geistRegular.className} main-heading`}>
        Your AI IELTS Writing Coach —&nbsp;
        <span className="text-(--black) italic text-[86px] font-fangsong tracking-[-8px]">
          Instant Scores
        </span>
      </h1>
      <p
        className={`${interRegular.className} text-(--dark-gray) text-[1rem] text-center max-w-128.75 mx-auto leading-6.5 mb-10 tracking-normal`}
      >
        Instant scoring, corrections, and personalized guidance — practice
        smarter and boost your band.
      </p>
      <div className="flex items-center mb-12 text-[1rem] justify-center gap-3.25">
        <p
          className={`${geistRegular.className} leading-5.25 text-[1rem] text-(--black)`}
        >
          Try it live below — see how it works
        </p>
        <Image
          src="/assets/icons/down-arrow.svg"
          width={34}
          height={34}
          alt="down arrow"
          className="animate-bounce"
        />
      </div>
    </section>
  );
}
