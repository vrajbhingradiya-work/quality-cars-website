import Image from "next/image";
import React from "react";
import img1 from "../../../assets/images/home/howItWorks/howitworks-img1.png";
import img2 from "../../../assets/images/home/howItWorks/howitworks-img2.png";
import img3 from "../../../assets/images/home/howItWorks/howitworks-img3.png";

function HowToSell() {
  const steps = [
    {
      image: img1,
      title: "INSTANT VALUATION",
    },
    {
      image: img2,
      title: "BOOK AN APPOINTMENT",
    },
    {
      image: img3,
      title: "SELL YOUR CAR",
    },
  ];
  return (
    <div className="bg-black grid grid-cols-1 py-32 ">
      <div className="flex flex-col h-full items-center gap-16 p-16">
        <div
          className="flex flex-col items-center justify-center gap-8
        "
        >
          <span className="font-normal tracking-[0.1em] text-4xl text-center">
            HOW TO SELL YOUR USED CARS
          </span>
          <p className="flex flex-col items-center justify-center text-wrap text-center md:max-w-[700px]  text-xl text-[#888888]">
            <span>
              {
                "At QC, we strive to provide the quickest and most hassle free car selling service available. Getting a great deal on your vehicle can often be tricky, that’s why at Big Boys Toyz we’ll value your vehicle based on its condition and current market value."
              }
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1   md:grid-cols-3 gap-12  ">
          {steps.map((element, index) => {
            return <SvgCard element={element} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HowToSell;

function SvgCard({ element }: any) {
  return (
    <div className="flex flex-col justify-between items-center  h-[250px] w-[250px] overflow-hidden">
      <div className="h-[90%] w-[80%] flex justify-center">
        <Image
          className="object-contain h-[90%] w-[90%]"
          src={element.image}
          alt="icon"
        />
      </div>
      <div>
        <span className=" text-lg font-normal text-[#888888]">
          {element.title}
        </span>
      </div>
    </div>
  );
}
