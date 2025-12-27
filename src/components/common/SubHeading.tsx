import { geistRegular } from "@/styles/fonts";

type Props = {
  spanText: string;
  subHeading: string;
  subHeadingClass: string;
  desc?: string;
  fontFamily: string;
};

export default function SubHeading({
  spanText,
  subHeading,
  subHeadingClass,
  desc,
  fontFamily,
}: Props) {
  return (
    <>
      <span className={`${geistRegular.className} span-text`}>{spanText}</span>

      <h2 className={`${fontFamily} ${subHeadingClass}`}>{subHeading}</h2>

      {desc && (
        <p
          className={`${geistRegular.className} text-center mt-4 mb-12 text-2xl leading-7.75 text-(--carbon-gray)`}
        >
          {desc}
        </p>
      )}
    </>
  );
}
