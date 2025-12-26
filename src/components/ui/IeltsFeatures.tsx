import PracticeIelts from "./PracticeIelts";

export default function IeltsFeatures() {
  return (
    <section className="py-18">
      <span className="block mx-auto w-fit bg-white text-[1rem] px-4 rounded-[50px] py-2">
        Key Features
      </span>
      <h2 className="text-[48px] max-w-142.5 mx-auto text-center my-4 bg-linear-to-r from-[#000000] to-[#666666]/59 bg-clip-text text-transparent">
        Designed to make IELTS writing easy.
      </h2>
      {/* <StepsPoint /> */}
      <PracticeIelts />
    </section>
  );
}
