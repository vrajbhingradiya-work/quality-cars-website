import Image from "next/image";
import React from "react";
import defaultImage from "@/assets/images/header1.jpg";
import { title } from "process";
function OurUsp() {
  const cardInfo = [
    {
      image: defaultImage,
      title: {
        normal: "7600+",
        bold: " Happy Customers",
      },
      details:
        "At QC, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    },
    {
      image: defaultImage,
      title: {
        normal: "Jaipur's",
        bold: "Biggest Collection",
      },
      details:
        "At QC, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    },
    {
      image: defaultImage,
      title: {
        normal: "151 Quality",
        bold: " CheckPoints",
      },
      details:
        "At QC, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    },
    {
      image: defaultImage,
      title: {
        normal: "30 Luxury",
        bold: " Car Brands",
      },
      details:
        "At QC, we offer you comparisons across various parameters thereby helping you choose the ideal one.",
    },
  ];
  return (
    <div>
      <div className="tracking-wider text-xl text-black flex flex-col gap-12 bg-white p-6  md:p-16  xl:p-32 py-32 ">
        <div>
          <span className="text-4xl font-bold">OUR USPS</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 xl:gap-24">
          {cardInfo.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurUsp;

function Card({ card }: any) {
  return (
    <div className="flex flex-col gap-3 md:gap-6 text-center justify-center items-center">
      <Image
        src={card?.image}
        alt="image"
        className=" h-[400px] object-cover w-full rounded-xl md:rounded-3xl "
      />
      <p className="text-3xl ">
        {card?.title.normal}{" "}
        <span className="font-semibold text-2xl md:text-4xl">
          {card?.title.bold}
        </span>
      </p>
      <p className="text-base md:text-xl w-[80%] lg:w-[70%]">{card?.details}</p>
    </div>
  );
}
