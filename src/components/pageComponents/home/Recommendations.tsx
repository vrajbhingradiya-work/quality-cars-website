import Image from "next/image";
import React from "react";
import image1 from "../../../assets/images/car-logos/bmw.png";
import image2 from "../../../assets/images/car-logos/audi.png";
import image3 from "../../../assets/images/car-logos/porsche.png";
import image6 from "../../../assets/images/car-logos/land-rover.png";
import image5 from "../../../assets/images/car-logos/mini.png";
import image4 from "../../../assets/images/car-logos/jaguar.png";
import image7 from "../../../assets/images/car-logos/mercedes.png";
import image8 from "../../../assets/images/car-logos/volvo.png";
import image9 from "../../../assets/images/car-logos/toyota.png";
import image10 from "../../../assets/images/car-logos/jeep.png";
import image11 from "../../../assets/images/car-logos/ford.png";
import image12 from "../../../assets/images/car-logos/hyundai.png";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import SlideInFromLeft from "@/components/utils/SlideInFromLeft copy";
import Link from "next/link";

function Recommendations() {
  const RecommendationsCardData = [
    {
      colSpan: "col-span-1 xl:col-span-2",
      delay: 0,
      image: image2,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "",
      delay: 2,
      image: image1,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "",
      delay: 4,
      image: image3,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "",
      delay: 6,
      image: image4,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "",
      delay: 8,
      image: image5,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "",
      delay: 12,
      image: image7,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "col-span-1 xl:col-span-2 ",
      delay: 10,
      image: image10,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },

    {
      colSpan: "p-4",
      delay: 14,
      image: image9,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "pt-6",
      delay: 16,
      image: image8,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
    {
      colSpan: "pt-12",
      delay: 18,
      image: image11,
      title: "Drive your dream car home now ?",
      buttonText: "Checkout now!",
    },
  ];
  return (
    <div className="content-box py-32">
      <div className="flex flex-col gap-4 ">
        <div className="text-3xl py-4 pl-6 xl:pl-0">
          <SlideInFromBottom sequence={2}>
            <span>Our Recommendations</span>
          </SlideInFromBottom>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-2 xl:gap-6">
          {RecommendationsCardData.map((item, index) => (
            <TextOverImageCard item={item} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommendations;

function TextOverImageCard({ item, index }: any) {
  return (
    <div
      className={`relative max-h-[250px] min-h-[20vh] ${item.colSpan} bg-blur-[20px] bg-white/80 `}
    >
      <SlideInFromBottom sequence={item.delay + 2}>
        <Image
          src={item.image}
          alt="image"
          className="object-contain h-full w-full max-h-[250px] min-h-[20vh] object-center  "
        />
      </SlideInFromBottom>

      <div className="absolute z-10 top-0 left-0  h-full w-full flex flex-col justify-end items-start group ">
        <div className="flex flex-col justify-end h-full w-full group-hover:bg-white/10 transition-all group-hover:ease-in-out duration-500 p-6 gap-4">
          {/* <span className="text-3xl translate-y-8 group-hover:-translate-y-4 transition-all group-hover:ease-in-out duration-300">
            <SlideInFromLeft sequence={item.delay + 4}>
              <span className="w-0 group-hover:w-auto transition-all duration-300 ease-in-out">
                {item.title}
              </span>
            </SlideInFromLeft>
          </span> */}
          <span className="">
            <Link
              href="/collection"
              className="group-hover:opacity-100 opacity-0  transition-all group-hover:ease-in-out duration-300 max-w-[150px] py-2 px-4 bg-blue-600 text-white"
            >
              {item.buttonText}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
