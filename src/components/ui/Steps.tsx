import { geistRegular } from "@/styles/fonts";
import StepsPoint from "@/components/ui/StepsPoint";
import SubHeading from "@/components/common/SubHeading";

export default function Steps() {
  return (
    <section className="pt-18!">
      <SubHeading
        spanText="How It Works"
        subHeading="Your Path to a Higher Band"
        subHeadingClass="ielts-band-text"
        desc="A smarter, faster way to master IELTS Writing."
        fontFamily={geistRegular.className}
      />
      <StepsPoint />
    </section>
  );
}
