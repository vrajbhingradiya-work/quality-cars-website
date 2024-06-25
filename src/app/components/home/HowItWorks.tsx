import Image from "next/image";
import React from "react";
import img1 from "../../../assets/images/home/howItWorks/howitworks-img1.png";
import img2 from "../../../assets/images/home/howItWorks/howitworks-img2.png";
import img3 from "../../../assets/images/home/howItWorks/howitworks-img3.png";
import img4 from "../../../assets/images/home/howItWorks/howitworks-img4.png";
import SlideInFromTop from "../utils/SlideInFromTop";
import SlideInFromBottom from "../utils/SlideInFromBottom";

function HowItWorks() {
  const steps = [
    {
      image: img1,
      title: "BROWSE FROM OUR COLLECTION",
    },
    {
      image: img2,
      title: "GET TO KNOW YOUR RIDE",
    },
    {
      image: img3,
      title: "PAY & BOOK ONLINE OR VISIT SHOWROOM",
    },
    {
      image: img4,
      title: "INSTANT PAYMENTS & TRANSFER",
    },
  ];
  return (
    <div className="bg-black min-h-[95vh] ">
      <div className="flex flex-col h-full items-center gap-16 md:p-16 p-8 py-16 text-center">
        <SlideInFromBottom sequence={4}>
          <div
            className="flex flex-col items-center justify-center gap-8
        "
          >
            <span className="font-normal tracking-[0.1em] text-4xl">
              HOW IT WORKS
            </span>
            <p className="flex flex-col items-center justify-center text-xl text-[#888888]">
              <span>
                {
                  "Buying used luxury cars in India was never this easy. You can now own your dream luxury car in just 4 simple"
                }
              </span>
              <span>
                {"steps at Quality Cars, India's trusted used car portal."}
              </span>
            </p>
          </div>
        </SlideInFromBottom>

        <div className="grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-4 gap-12  ">
          {steps.map((element, index) => {
            return (
              <SlideInFromBottom key={index} sequence={index + 4}>
                <SvgCard element={element} key={index} />
              </SlideInFromBottom>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;

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
