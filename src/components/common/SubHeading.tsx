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
        <p
          className={`${geistRegular.className} leading-5.25 max-w-59.5 md:max-w-[761px] mx-auto text-center md:mt-4 mb-12 text-[1rem] md:text-2xl md:leading-7.75 text-(--carbon-gray)`}
        >
          {desc}
        </p>
      )}
    </>
  );
}
