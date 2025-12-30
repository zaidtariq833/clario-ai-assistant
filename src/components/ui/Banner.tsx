import { geistRegular, interRegular } from "@/styles/fonts";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="mt-4 py-[143.98px] md:py-0 md:mt-22.25">
      <p className={`${geistRegular.className} latest-product-text`}>
        Announcing our latest product launch
      </p>
      <h1 className={`${geistRegular.className} main-heading`}>
        Your AI IELTS Writing Coach —&nbsp;
        <span className="instant-scores-heading">Instant Scores</span>
      </h1>
      <p className={`${interRegular.className} instant-scores-para`}>
        Instant scoring, corrections, and personalized guidance — practice
        smarter and boost your band.
      </p>
      <div className="hidden md:flex md:items-center md:mb-12 md:text-[1rem] md:justify-center md:gap-3.25">
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
      <button className="get-started-btn-banner">
        <p className="m-auto py-[13.5px] text-(--white)">
          Get Started - <span className="font-fangsong italic">For Free</span>
        </p>
      </button>
    </section>
  );
}
