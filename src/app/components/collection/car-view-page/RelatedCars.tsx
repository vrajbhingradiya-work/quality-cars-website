"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { emiCalculatorFunction } from "@/app/helpers/emiCalculatorFunction";
import { useAppSelector } from "@/lib/hooks/hooks";
import SlideInFromBottom from "../../utils/SlideInFromBottom";
import SimpleFadeIn from "../../utils/SimpleFadeIn";
import SlideInFromLeft from "../../utils/SlideInFromLeft";

function RelatedCars() {
  const relatedCars = useAppSelector((state) => state.car.cars);
  return (
    <div className="flex flex-col gap-4 bg-white text-black lg:px-64 py-32 p-3 ">
      <SlideInFromBottom sequence={1}>
        <div className="text-3xl font-medium text-black pb-8 w-full text-center md:text-left  ">
          RELATED CARS
        </div>
      </SlideInFromBottom>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
        {relatedCars.slice(0, 9).map((car, index) => (
          <SlideInFromLeft sequence={index} key={index + 8}>
            <CarCard key={index} car={car} />
          </SlideInFromLeft>
        ))}
      </div>
    </div>
  );
}

export default RelatedCars;

function CarCard({ car }: any) {
  let carPrice = new Intl.NumberFormat("en-IN").format(car.price);
  let carEmi = new Intl.NumberFormat("en-IN").format(
    emiCalculatorFunction(car.price)
  );
  return (
    <Link
      href={`/collection/${car?.id}`}
      className=" relative  min-h-[500px] md:min-h-[400px] min-w-[320px] max-w-[400px] flex flex-col gap-4 rounded-xl bg-[#F4F4F4]"
    >
      {car?.isBooked && (
        <div className="absolute z-10 top-6 -right-[1.25px] bg-[#E00F0E] rounded-l-xl p-4 py-1 font-[500] text-sm tracking-widest">
          BOOKED
        </div>
      )}
      {car?.isNew && (
        <div className="absolute z-10 left-6 -top-[1.25px] bg-[#E00F0E] rounded-b-xl p-4 px-2 font-[500] text-base tracking-widest">
          NEW
        </div>
      )}
      <div className="relative overflow-hidden w-full h-[300px] rounded-t-xl">
        <Image
          src={car?.images[0]}
          alt="car-image"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col gap-2 md:gap-4 p-2 px-6 text-black font-medium tracking-wider">
        <p className=" text-lg font-[600]">&#x20b9; {carPrice}</p>
        <p className="text-4xl md:text-5xl">{car.carModel}</p>
        <p className="-mt-2 mb-3 md:mb-8 flex items-center justify-start gap-2 text-[#8A8A8A] text-base ">
          <span className="underline ">EMI STARTS</span> @ &#x20b9; {carEmi}
        </p>
        <div className=" grid grid-cols-2 md:flex justify-between gap-4 items-center font-semibold w-full text-[#69686D] text-base tracking-normal">
          <div className="flex flex-col col-span-1 gap-1">
            {/* options */}
            <span className="text-[#565655]">REG.YEAR </span>
            <span className="text-black">{car?.regYear}</span>
          </div>
          <div className="hidden md:block w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#565655]">KMS</span>{" "}
            <span className="text-black">{car?.kmsDriven}</span>
          </div>
          <div className=" hidden md:block w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div
            className={`flex flex-col gap-1 ${
              car?.fuelType == "electric" ? "hidden" : ""
            }`}
          >
            <span className="text-[#565655]">FUEL TYPE </span>
            <span className="text-black">{car?.fuelType}</span>
          </div>
          <div className=" hidden md:block w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[#565655]">REG. STATE </span>
            <span className="text-black">{car?.regState}</span>
          </div>

          <span className="flex gap-1 items-center text-white fill-white"></span>
        </div>
      </div>
    </Link>
  );
}
