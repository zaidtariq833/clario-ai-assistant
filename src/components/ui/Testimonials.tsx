import { testimonials } from "@/components/constants";
import Image from "next/image";
import SubHeading from "@/components/common/SubHeading";
import { geistBold, geistRegular, geistSemiBold } from "@/styles/fonts";
import { TestimonialCardType } from "@/types";

export default function Testimonials() {
  const col1 = testimonials.slice(0, 5);
  const col2 = testimonials.slice(5, 9);
  const col3 = testimonials.slice(9, 15);

  const renderCard = (card: TestimonialCardType, index: number) => {
    const bgCard =
      card.card === 1 || card.card === 10
        ? "bg-[url('/assets/images/scalloped-linear-1.png')]"
        : card.card === 5 || card.card === 14
        ? "bg-[url('/assets/images/scalloped-linear-2.png')]"
        : "bg-[url('/assets/images/scalloped-shape.png')]";

    const hideContent = [1, 5, 10, 14].includes(card.card);

    return (
      <div
        key={index}
        className={`px-7.75 py-8 ${bgCard} bg-no-repeat bg-size-[100%_100%]`}
      >
        <div className={hideContent ? "invisible" : ""}>
          <h4 className={`${geistBold.className} text-2xl leading-7.75`}>
            {card.heading}
          </h4>

          <p
            className={`${geistRegular.className} mt-3.5 text-xl leading-[1.95625rem] text-(--neutral-gray)`}
          >
            {card.description}
          </p>

          {card.personImage && (
            <div className="flex items-center gap-3 mt-12">
              <Image
                src={card.personImage}
                width={61}
                height={61}
                alt="person"
                className="rounded-full"
              />
              <span
                className={`${geistSemiBold.className} text-xl leading-[1.95625rem]`}
              >
                {card.learnerName}
              </span>
            </div>
          )}
        </div>
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

      <div className="md:max-w-[90.5%] mx-auto flex justify-center gap-2">
        <div className="flex flex-col gap-[0.71125rem] mx-1 -mt-85.75 sm:-mt-80 md:mt-0 md:mx-0 relative md:bottom-60">
          {col1.map(renderCard)}
        </div>

        <div className="hidden md:flex flex-col gap-[0.71125rem]">
          {col2.map(renderCard)}
        </div>

        <div className="hidden md:flex flex-col gap-[0.71125rem] relative md:bottom-60">
          {col3.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
