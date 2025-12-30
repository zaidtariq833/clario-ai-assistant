import { geistSemiBold } from "@/styles/fonts";
import PracticeIelts from "@/components/ui/PracticeIelts";
import SubHeading from "@/components/common/SubHeading";

export default function IeltsFeatures() {
  return (
    <section className="py-18">
      <SubHeading
        spanText="Key Features"
        subHeading="Designed to make IELTS writing easy."
        subHeadingClass="ielts-designed-text"
        fontFamily={geistSemiBold.className}
      />
      <PracticeIelts />
    </section>
  );
}
