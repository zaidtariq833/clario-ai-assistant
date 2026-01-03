import { geistRegular, geistSemiBold } from "@/styles/fonts";

export default function CTASection() {
  return (
    <section className="max-w-97.5 md:max-w-190.25 mx-auto! overflow-hidden pt-10 pb-10 md:py-37">
      <h2
        className={`${geistSemiBold.className} text-[3rem] leading-15.5 text-center md:leading-20.75 md:text-[4rem]`}
      >
        Ready to Improve Your IELTS Writing?
      </h2>
      <p
        className={`${geistRegular.className} text-center text-base mt-4 leading-5.25 md:leading-7.75 text-(--carbon-gray) md:text-2xl`}
      >
        Start practicing with AI - free, fast and effective.
      </p>
      <button
        className={`${geistSemiBold.className} flex justify-center mt-14 mb-10 mx-auto bg-(--black) py-4 px-7 text-(--white) rounded-[3rem]`}
      >
        Start Writing for free
      </button>
    </section>
  );
}
