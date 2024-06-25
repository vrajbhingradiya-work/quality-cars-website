import Image from "next/image";
import React from "react";
import image from "../../../assets/images/heroBanner2.jpg";
import Button from "../miniComponents/Button";
import { BiMessageCheck as Icon1 } from "react-icons/bi";
import { IoCarSportOutline as Icon2 } from "react-icons/io5";
import { GrDocumentText as Icon3 } from "react-icons/gr";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SimpleFadeIn from "../utils/SimpleFadeIn";
import IconBoxAndDetails4 from "../miniComponents/IconBoxAndDetails4";

function HeroBanner3() {
  const iconsBoxes = [
    {
      svg: <Icon1 className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] " />,

      className: "text-[#6D6D6D] fill-[#2F2F2F]",
      details: { line1: "Expert Review On Luxury Cars", line2: "" },
    },
    {
      svg: <Icon2 className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] " />,
      className: "text-[#6D6D6D] fill-[#2F2F2F]",
      details: { line1: "Compare Your Favorite Cars", line2: "" },
    },
    {
      svg: <Icon3 className="h-[25px] w-[25px] md:h-[30px] md:w-[30px] " />,
      className: "text-[#6D6D6D] fill-[#2F2F2F]  ",
      details: {
        line1: "More Than 317 Luxury Cars &",
        line2: "It's In Depth Specifications",
      },
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-16 w-full h-full  justify-between bg-black xl:p-32 md:p-20 p-8 py-16">
        <div className=" flex flex-col  gap-12  w-full ">
          <SlideInFromBottom sequence={2}>
            <div className="text-3xl md:text-6xl font-semibold tracking-wide text-white">
              <p className="  ">BROWSE QUALITY CARS</p>
              <p className="  ">DATABASE OF NEW LUXURY</p>
              <p className="  ">CARS IN INDIA</p>
            </div>
          </SlideInFromBottom>
          <div className="grid grid-cols-1 gap-8">
            {iconsBoxes.map((icon, index) => (
              <SlideInFromBottom sequence={2 + index} key={index}>
                <IconBoxAndDetails4 icon={icon} />
              </SlideInFromBottom>
            ))}
          </div>
          <SimpleFadeIn sequence={20}>
            <Button
              link="/collection"
              title="EXPLORE"
              className="bg-[#333333] fill-white hover:bg-[#1A1A1A] w-[180px] md:w-[280px] text-base md:text-xl "
            />
          </SimpleFadeIn>
        </div>
        <div className="w-full  rounded-xl md:rounded-2xl overflow-hidden">
          <SimpleFadeIn sequence={4}>
            <div className="relative h-full w-full ">
              <Image
                objectFit="cover"
                height={800}
                width={1200}
                src={image}
                alt="showroom image"
              />
            </div>
          </SimpleFadeIn>
        </div>
      </div>
    </>
  );
}

export default HeroBanner3;
