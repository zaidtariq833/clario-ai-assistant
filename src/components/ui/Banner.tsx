import Image from "next/image";

export default function Banner() {
  return (
    <section className="mt-22.25">
      <p className="text-center bg-white rounded-[50px] w-fit mx-auto px-7 py-0.75 text-base mb-1.5">
        Announcing our latest product launch
      </p>
      <h1 className="text-[86px] leading-24 tracking-[-4.3px] mx-auto max-w-198.25 mb-2.75">
        Your AI IELTS Writing Coach - <i>Instant Scores</i>
      </h1>
      <p className="text-[#4d4d4d] text-base text-center max-w-128.75 mx-auto leading-6.5 mb-10 tracking-normal">
        Instant scroing, corrections, and personalized guidance - practice
        smarter and boost your band.
      </p>
      <div className="flex items-center text-[16px] justify-center gap-3.25">
        <p>Try it live below - see how it works</p>
        <Image
          src={"/assets/icons/down-arrow.svg"}
          width={34}
          height={34}
          alt="down arrow"
        />
      </div>
    </section>
  );
}
