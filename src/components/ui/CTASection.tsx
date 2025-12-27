import { geistRegular, geistSemiBold } from "@/styles/fonts";

export default function CTASection() {
  return (
    <section className="overflow-hidden py-37">
      <h2
        className={`${geistSemiBold.className} leading-20.75 max-w-190.25 mx-auto! text-center text-[64px]`}
      >
        Ready to Improve Your IELTS Writing?
      </h2>
      <p
        className={`${geistRegular.className} leading-7.75 text-[#535457] text-center mt-4 text-[24px]`}
      >
        Start practicing with AI - free, fast and effective.
      </p>
      <button
        className={`${geistSemiBold.className} flex justify-center mt-14 mx-auto bg-[#000000] py-4 px-7 text-[#ffffff] rounded-[48px]`}
      >
        Start Writing for free
      </button>
    </section>
  );
}
