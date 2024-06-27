"use client";
import Image from "next/image";
import React from "react";
import image from "../../../assets/images/header1.jpg";
import Button from "../miniComponents/Button";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SimpleFadeIn from "../utils/SimpleFadeIn";

function HeroBanner1() {
  return (
    <div>
      <div className="relative  w-full bg-black">
        <SimpleFadeIn sequence={2}>
          <div className="hidden relative md:block object-cover h-[50vh] xl:h-[100vh] w-full">
            <Image
              src={image}
              priority={true}
              objectFit="cover"
              fill={true}
              alt="background image"
            />
          </div>
        </SimpleFadeIn>
        <SimpleFadeIn sequence={2}>
          <div className="relative md:hidden object-cover h-[85vh] w-full">
            <Image
              src={image}
              priority={true}
              alt="background image"
              objectFit="cover"
              fill={true}
            />
          </div>
        </SimpleFadeIn>
        <div className="absolute top-0 left-0 z-10 flex flex-col h-full w-full">
          <div className="w-full h-full bg-black/30 flex flex-col gap-3 md:gap-6 pl-8 md:p-20 justify-end pb-16 xl:pb-40">
            <SlideInFromBottom sequence={0}>
              <span className="text-4xl pr-[40%] md:p-0 md:text-6xl font-black">
                {"LET'S KEEP IT SIMPLE."}
              </span>
            </SlideInFromBottom>
            <SlideInFromBottom sequence={2}>
              <span className="text-xl md:text-2xl pr-[30%] md:p-0 md:-mt-4 md:mb-4 xl:mb-2">
                We are the best when it comes to Pre-owned Luxury Cars.
              </span>
            </SlideInFromBottom>
            {/* <label htmlFor="input">
              {" "}
              Input
              <input
                id="input"
                className="bg-none border-bottom border-2 w-[150px] border-white"
                type="text"
              />
            </label> */}
            <SimpleFadeIn sequence={12}>
              <Button
                link="/collection"
                title="EXPLORE"
                className="border-[1px] fill-white hover:bg-white hover:text-black hover:fill-black w-[180px] md:w-[280px] text-base md:text-xl"
              />
            </SimpleFadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner1;
