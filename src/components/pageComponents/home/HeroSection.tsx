import Image from "next/image";
import React from "react";
import image1 from "../../../assets/images/cars-front.jpg";
import image2 from "../../../assets/images/showroom-back.jpg";
import image3 from "../../../assets/images/3-cars.jpg";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import SimpleFadeIn from "@/components/utils/SimpleFadeIn";
import Link from "next/link";
import VideoComponent from "./Video";

function HeroSection() {
  return (
    <div className="h-[300vh]">
      {/* first image */}
      <div className="relative h-screen">
        {/* <Image
          src={image1}
          className="object-cover h-full w-full"
          alt="image-1"
        /> */}
        <VideoComponent src="/car-video.mp4" />
        <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black/30  pt-[4%]">
          <div className="flex flex-col  justify-center items-center">
            <span className="text-5xl tracking-[1rem]">
              <SlideInFromBottom sequence={2}>
                <span>LUXURY</span>
              </SlideInFromBottom>
            </span>
            <span className="text-3xl mb-8 mt-2 tracking-widest">
              <SlideInFromBottom sequence={4}>
                <span>IN MOTION</span>
              </SlideInFromBottom>
            </span>
            <span className=" ">
              <SlideInFromBottom sequence={8}>
                <Link
                  href="/collection"
                  className="bg-white text-secondary-dark rounded-full tracking-wider text-sm font-medium py-1 px-6"
                >
                  DISCOVER NOW
                </Link>
              </SlideInFromBottom>
            </span>
          </div>
        </div>{" "}
      </div>
      {/* first image */}
      <div className="relative h-screen">
        <Image
          src={image2}
          className="object-cover h-full w-full"
          alt="image-1"
        />
        <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black/40">
          <div className="flex flex-col  justify-center items-center">
            <span className="text-5xl tracking-[1rem]">
              <SlideInFromBottom sequence={2}>
                <span>MERCEDES GLS 450</span>
              </SlideInFromBottom>
            </span>

            <span className="text-3xl mb-8 mt-2 tracking-widest">
              <SlideInFromBottom sequence={4}>
                <span>A DIFFERENT CLASS</span>
              </SlideInFromBottom>
            </span>
            <span className=" ">
              <SlideInFromBottom sequence={8}>
                <Link
                  href="/collection"
                  className="bg-white text-secondary-dark rounded-full tracking-wider text-sm font-medium py-1 px-6"
                >
                  DISCOVER NOW
                </Link>
              </SlideInFromBottom>
            </span>
          </div>
        </div>{" "}
      </div>
      {/* first image */}
      <div className="relative h-screen">
        <Image
          src={image3}
          className="object-cover h-full w-full"
          alt="image-1"
        />
        <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center bg-black/20">
          <div className="flex flex-col  justify-center items-center">
            <span className="text-5xl tracking-[1rem] mb-8">
              <SlideInFromBottom sequence={2}>
                <span>ELEGANCE IN EVERY TURN</span>
              </SlideInFromBottom>
            </span>

            {/* <span className="text-3xl mb-8 mt-2 tracking-widest">
              <SlideInFromBottom sequence={4}>
                <span>IN MOTION</span>
              </SlideInFromBottom>
            </span> */}
            <span className=" ">
              <SlideInFromBottom sequence={8}>
                <Link
                  href="/collection"
                  className="bg-white text-secondary-dark rounded-full tracking-wider text-sm font-medium py-1 px-6"
                >
                  DISCOVER NOW
                </Link>
              </SlideInFromBottom>
            </span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default HeroSection;
