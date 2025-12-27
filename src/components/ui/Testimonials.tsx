import { testimonials } from "../constants";
import Image from "next/image";
import SubHeading from "../common/SubHeading";
import { geistBold, geistRegular, geistSemiBold } from "@/styles/fonts";

export default function Testimonials() {
  const col1 = testimonials.slice(0, 5);
  const col2 = testimonials.slice(5, 9);
  const col3 = testimonials.slice(9, 15);
  const renderCard = (card: (typeof testimonials)[0], index: number) => {
    const bgCard =
      card?.card === 1 || card?.card === 10
        ? "bg-[url('/assets/images/scalloped-linear-1.png')]"
        : card?.card === 5 || card?.card === 14
        ? "bg-[url('/assets/images/scalloped-linear-2.png')]"
        : "bg-[url('/assets/images/scalloped-shape.png')]";

    return (
      <div
        key={index}
        className={`w-103.25 h-110.75 pt-12.25 px-7.75 mb-[11.38px] ${bgCard} bg-center bg-cover bg-no-repeat`}
      >
        <h4 className={`${geistBold.className} leading-7.75 text-[24px]`}>
          {card?.heading}
        </h4>
        <p
          className={`${geistRegular.className} leading-[31.3px] text-[20px] text-(--neutral-gray) mt-3.5`}
        >
          {card?.description}
        </p>

        {card?.personImage && (
          <div className="flex items-center gap-3 mt-23.5">
            <Image
              src={card.personImage}
              width={61}
              height={61}
              alt="person"
              className="rounded-full"
            />
            <span
              className={`${geistSemiBold.className} text-[20px] leading-[31.3px]`}
            >
              {card?.learnerName}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="pt-18">
      <SubHeading
        spanText="Testimonials"
        subHeading="Proven track of satisfied users"
        subHeadingClass="proven-track-text"
        fontFamily={geistSemiBold.className}
      />
      <div className="flex justify-center gap-2">
        <div className="relative lg:bottom-66">{col1.map(renderCard)}</div>
        <div>{col2.map(renderCard)}</div>
        <div className="relative lg:bottom-60">{col3.map(renderCard)}</div>
      </div>
    </section>
  );
}
