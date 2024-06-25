import Image from "next/image";
import React from "react";
import image from "@/assets/images/heroBanner2.jpg";
import Button from "../miniComponents/Button";
import IconBoxAndDetails from "../miniComponents/IconBoxAndDetails";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SimpleFadeIn from "../utils/SimpleFadeIn";

function HeroBanner2() {
  const iconsBoxes = [
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "Outright", line2: "Sale" },
    },
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "Best Offer", line2: "in 29 Minutes" },
    },
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "7600+ Satisified", line2: "Customers" },
    },
    {
      svg: (
        <svg
          className="h-[30px] w-[30px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 640 512"
        >
          <path d="M323.4 85.2l-96.8 78.4c-16.1 13-19.2 36.4-7 53.1c12.9 17.8 38 21.3 55.3 7.8l99.3-77.2c7-5.4 17-4.2 22.5 2.8s4.2 17-2.8 22.5l-20.9 16.2L512 316.8V128h-.7l-3.9-2.5L434.8 79c-15.3-9.8-33.2-15-51.4-15c-21.8 0-43 7.5-60 21.2zm22.8 124.4l-51.7 40.2C263 274.4 217.3 268 193.7 235.6c-22.2-30.5-16.6-73.1 12.7-96.8l83.2-67.3c-11.6-4.9-24.1-7.4-36.8-7.4C234 64 215.7 69.6 200 80l-72 48V352h28.2l91.4 83.4c19.6 17.9 49.9 16.5 67.8-3.1c5.5-6.1 9.2-13.2 11.1-20.6l17 15.6c19.5 17.9 49.9 16.6 67.8-2.9c4.5-4.9 7.8-10.6 9.9-16.5c19.4 13 45.8 10.3 62.1-7.5c17.9-19.5 16.6-49.9-2.9-67.8l-134.2-123zM16 128c-8.8 0-16 7.2-16 16V352c0 17.7 14.3 32 32 32H64c17.7 0 32-14.3 32-32V128H16zM48 320a16 16 0 1 1 0 32 16 16 0 1 1 0-32zM544 128V352c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V144c0-8.8-7.2-16-16-16H544zm32 208a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
        </svg>
      ),
      className: "text-black",
      details: { line1: "Hassle Free", line2: "Processing" },
    },
  ];
  return (
    <>
      <SimpleFadeIn sequence={0}>
        <div className="flex flex-col md:flex-row items-center gap-16 w-full h-full  justify-between bg-white xl:p-32 md:p-20 p-8 py-16">
          <div className=" flex flex-col  gap-12  w-full ">
            <div className="text-4xl md:text-6xl font-semibold tracking-wide">
              <SlideInFromBottom sequence={2}>
                <p className="  text-black">PLANNING TO SELL?</p>
              </SlideInFromBottom>
              <SlideInFromBottom sequence={4}>
                <p className="hollowLetters">SELL US YOUR CAR</p>
              </SlideInFromBottom>

              <SlideInFromBottom sequence={6}>
                <p className="hollowLetters">IN 29 MINUTES.</p>
              </SlideInFromBottom>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {iconsBoxes.map((icon, index) => (
                <SlideInFromBottom key={index} sequence={8 + index}>
                  <IconBoxAndDetails icon={icon} />
                </SlideInFromBottom>
              ))}
            </div>
            <SimpleFadeIn sequence={25}>
              <Button
                title="KNOW MORE"
                className="border-[1px] border-black/50 text-black fill-black/50 hover:bg-black hover:text-white hover:fill-white w-[180px] md:w-[280px] text-base md:text-xl"
                link="/sell-car"
              />
            </SimpleFadeIn>
          </div>
          <SimpleFadeIn sequence={5}>
            <div className="w-full  rounded-2xl overflow-hidden">
              <div className="relative hidden md:block h-full w-full ">
                <Image
                  objectFit="cover"
                  height={800}
                  width={1200}
                  src={image}
                  alt="showroom image"
                />
              </div>
            </div>
          </SimpleFadeIn>
        </div>
      </SimpleFadeIn>
    </>
  );
}

export default HeroBanner2;
