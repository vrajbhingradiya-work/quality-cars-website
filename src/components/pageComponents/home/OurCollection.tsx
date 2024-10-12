import Image from "next/image";
import React from "react";
import hatchbackImage from "../../../assets/images/hatchback.jpg";
import suvImage from "../../../assets/images/suv.jpg";
import sedanImage from "../../../assets/images/sedan.jpg";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";

function OurCollection() {
  const collectionCardsData = [
    // {
    //   colSpan: "col-span-1 xl:col-span-3",
    //   delay: 2,
    //   image: image1,

    //   buttonText: "SUV",
    // },
    // {
    //   colSpan: "col-span-1 xl:col-span-3",
    //   delay: 4,
    //   image: image1,

    //   buttonText: "SEDAN",
    // },
    {
      colSpan: "col-span-1 xl:col-span-2",
      delay: 2,
      image: sedanImage,

      buttonText: "SEDAN",
    },
    {
      colSpan: "col-span-1 xl:col-span-2",
      delay: 4,
      image: hatchbackImage,

      buttonText: "HATCHBACK",
    },
    {
      colSpan: "col-span-1 xl:col-span-2",
      delay: 6,
      image: suvImage,

      buttonText: "SUV",
    },
  ];
  return (
    <div className="content-box py-32">
      <div className="flex flex-col gap-4 ">
        <div className="text-3xl  py-4 pl-6 xl:pl-0">
          <SlideInFromBottom sequence={2}>
            <span>Our Collection</span>
          </SlideInFromBottom>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-6 gap-6 px-8 xl:px-0">
          {collectionCardsData.map((item, index) => (
            <TextOverImageCard item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurCollection;

function TextOverImageCard({ item, index }: any) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl max-h-[300px] h-[80vh] ${item.colSpan} cursor-pointer`}
    >
      <SlideInFromBottom sequence={item.delay + 2}>
        <Image
          src={item.image}
          alt="image"
          className="object-cover  w-full max-h-[300px] h-[80vh] "
        />
      </SlideInFromBottom>

      <div className="absolute z-10 top-0 left-0 max-h-[300px] h-[80vh] w-full flex flex-col justify-end items-start group">
        <div className="flex flex-col justify-end items-start p-4 gap-4 h-full w-full group-hover:bg-white/10 transition duration-500 ease-in-out">
          <div>
            <button className="max-w-[150px] py-2 px-4  text-transparent transition-all duration-500 ease-in-out group-hover:text-white text-6xl font-bold rounded-xl">
              {item.buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
