import StepsPoint from "./StepsPoint";

export default function Steps() {
  return (
    <section className="my-41.25">
      <span className="block mx-auto w-fit bg-white text-[1rem] px-4 rounded-[50px] py-2">
        How It Work
      </span>
      <h2 className="text-[3.5rem] text-center my-4 bg-linear-to-r from-[#000000] to-[#666666]/59 bg-clip-text text-transparent">
        Your Path to a Higher Band
      </h2>
      <p className="text-center mt-8 mb-12 text-2xl text-[#535457]">
        A smarter, faster way to master IELTS Writing.
      </p>
      <StepsPoint />
    </section>
  );
}
