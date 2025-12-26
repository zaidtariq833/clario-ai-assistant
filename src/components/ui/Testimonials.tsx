import { Grid } from "@mui/material";
import { testimonials } from "../constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

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
        className={`w-103.25 h-110.75 py-12.25 px-7.75 mb-6 ${bgCard} bg-center bg-cover bg-no-repeat`}
      >
        <h4 className="text-[24px]">{card?.heading}</h4>
        <p className="text-[20px] text-[#636363] mt-3.5">{card?.description}</p>

        {card?.personImage && (
          <div className="flex items-center gap-3 mt-23.5">
            <Image
              src={card.personImage}
              width={61}
              height={61}
              alt="person"
              className="rounded-full"
            />
            <span>{card?.learnerName}</span>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="pt-18">
      <span className="block mx-auto w-fit bg-white text-[1rem] px-4 rounded-[50px] py-2">
        Testimonials
      </span>

      <h2 className="text-[48px] mx-auto text-center my-4 bg-linear-to-r from-[#000000] to-[#666666]/59 bg-clip-text text-transparent relative z-10">
        Proven track of satisfied users
      </h2>
      <Grid container spacing={0}>
        <Grid sm={12} lg={4} className="place-items-end relative bottom-66">
          {col1.map(renderCard)}
        </Grid>
        <Grid sm={12} lg={4} className="place-items-center">
          {col2.map(renderCard)}
        </Grid>
        <Grid sm={12} lg={4} className="relative bottom-60">
          {col3.map(renderCard)}
        </Grid>
      </Grid>
    </section>
  );
}
