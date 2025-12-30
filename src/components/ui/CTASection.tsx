import { geistRegular, geistSemiBold } from "@/styles/fonts";

export default function CTASection() {
  return (
    <section className="overflow-hidden pt-10 pb-10 md:py-37">
      <h2
        className={`${geistSemiBold.className} text-[48px] leading-15.5 text-center md:leading-20.75 md:max-w-190.25 md:mx-auto! md:text-[64px]`}
      >
        Ready to Improve Your IELTS Writing?
      </h2>
      <p
        className={`${geistRegular.className} text-center text-[16px] mt-4 leading-5.25 md:leading-7.75 text-(--carbon-gray) md:text-[24px]`}
      >
        Start practicing with AI - free, fast and effective.
      </p>
      <button
        className={`${geistSemiBold.className} flex justify-center mt-14 mb-10 mx-auto bg-(--black) py-4 px-7 text-(--white) rounded-[48px]`}
      >
        Start Writing for free
      </button>
    </section>
  );
}
