import { geistRegular } from "@/styles/fonts";
import { SubHeadingProps } from "@/types";

export default function SubHeading({
  spanText,
  subHeading,
  subHeadingClass,
  desc,
  fontFamily,
}: SubHeadingProps) {
  return (
    <>
      <span className={`${geistRegular.className} span-text`}>{spanText}</span>
      <h2 className={`${fontFamily} ${subHeadingClass}`}>{subHeading}</h2>
      {desc && (
        <p className={`${geistRegular.className} heading-description`}>
          {desc}
        </p>
      )}
    </>
  );
}
