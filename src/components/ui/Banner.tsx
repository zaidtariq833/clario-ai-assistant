import Image from "next/image";

export default function Banner() {
  return (
    <div className="mt-[89px]">
      <p className="text-center bg-white rounded-[50px] w-fit mx-auto px-[28px] py-[3px] text-base mb-[6px]">
        Announcing our latest product launch
      </p>
      <h1 className="text-[86px] leading-[96px] tracking-[-4.3px] mx-auto max-w-[793px] mb-[11px]">
        Your AI IELTS Writing Coach - <i>Instant Scores</i>
      </h1>
      <p className="text-[#4d4d4d] text-base text-center max-w-[515px] mx-auto leading-[26px] mb-[40px] tracking-normal">
        Instant scroing, corrections, and personalized guidance - practice
        smarter and boost your band.
      </p>
      <div className="flex items-center text-[16px] justify-center gap-[13px]">
        <p>Try it live below - see how it works</p>
        <Image
          src={"/images/down-arrow.svg"}
          width={34}
          height={34}
          alt="down arrow"
        />
      </div>
    </div>
  );
}
