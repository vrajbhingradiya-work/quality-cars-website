"use client";
import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks/hooks";
import LoadingIcon from "../loading/LoadingIcon";
import { emiCalculatorFunction } from "@/app/helpers/emiCalculatorFunction";
import SimpleFadeIn from "../utils/SimpleFadeIn";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SlideInFromLeft from "../utils/SlideInFromLeft";

function Cars() {
  const [totalResults, setTotalResults] = useState(9);
  const [loadingMoreCars, setLoadingMoreCars] = useState(false);

  const cars = useAppSelector((state) => state.car.cars);

  return (
    <div className={` flex flex-col justify-center items-center`}>
      <p
        className={`${
          cars?.length === 0 ? "" : "hidden"
        } text-3xl md:text-6xl text-center w-full py-16 md:py-32 text-black `}
      >{`Unfortunately, no cars were found based on your search criteria.`}</p>

      <div
        className={`${
          cars?.length === 0 ? "hidden" : ""
        } flex flex-col justify-center items-center`}
      >
        {/* desktop */}
        <div className="hidden p-8 lg:px-16 md:py-16  justify-center  md:grid md:grid-cols-2  xl:grid-cols-3 gap-8 items-center">
          {cars?.slice(0, totalResults).map((car, index) => (
            <SimpleFadeIn sequence={index * 3} key={index}>
              <CarCard car={car} key={index} />
            </SimpleFadeIn>
          ))}
        </div>
        {/* mobile */}
        <div className="md:hidden p-8 lg:px-16 md:py-16 flex flex-col justify-center   gap-16 items-center">
          {cars?.slice(0, totalResults).map((car, index) => (
            <SlideInFromLeft sequence={index + 1} key={index}>
              <CarCard car={car} key={index} />
            </SlideInFromLeft>
          ))}
        </div>
        <SlideInFromBottom sequence={2}>
          <div
            className={` ${
              cars?.length < totalResults ? "hidden" : ""
            } w-full flex justify-center items-center py-8 pb-16`}
          >
            <button
              onClick={() => {
                setLoadingMoreCars(true);
                setTimeout(() => {
                  setLoadingMoreCars(false);
                  setTotalResults(totalResults + 9);
                }, 1000);
              }}
              className="bg-black p-6 w-[300px] rounded-lg   text-white   hover: border-2 border-black transition duration-500 ease-in-out"
            >
              {loadingMoreCars ? (
                <LoadingIcon color="white" size="35" />
              ) : (
                "SHOW MORE"
              )}
            </button>
          </div>
        </SlideInFromBottom>
      </div>
    </div>
  );
}

export default Cars;

function CarCard({ car }: any) {
  let carPrice = new Intl.NumberFormat("en-IN").format(car?.price);
  let carEmi = new Intl.NumberFormat("en-IN").format(
    emiCalculatorFunction(car?.price)
  );
  return (
    <Link
      href={`/collection/${car?.id}`}
      className=" relative overflow-hidden min-h-auto md:min-h-[550px] min-w-[320px] max-w-[380px] flex flex-col  gap-4 rounded-xl bg-[#F4F4F4]"
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
      {car?.isSold && (
        <div className="absolute z-10 left-6 -top-[1.25px] bg-[#E00F0E] rounded-b-xl p-4 px-2 font-[500] text-base tracking-widest">
          SOLD
        </div>
      )}
      <div className="relative w-full h-[240px] xl:h-[260px] rounded-t-xl overflow-hidden">
        <Image
          src={car?.images[0]}
          objectFit="cover"
          priority={true}
          fill={true}
          alt="car-image"
        />
      </div>
      <div className=" flex flex-col justify-between gap-2  p-2 px-6 text-black font-medium tracking-wider">
        <div className="md:h-[150px] flex flex-col  gap-2  text-black font-medium tracking-wider">
          <p className={`${car.isSold ? "hidden" : ""} text-lg font-[600]`}>
            &#x20b9; {carPrice}
          </p>
          <p className="text-3xl md:text-3xl">{car.carModel}</p>
          <p
            className={`${
              car.isSold ? "hidden" : ""
            } mb-3 md:mb-8 flex items-center justify-start gap-2 text-[#8A8A8A] text-base `}
          >
            <span className="underline ">EMI STARTS</span> @ &#x20b9; {carEmi}
          </p>
        </div>
        <div className=" h-full grid grid-cols-2 md:flex justify-between gap-4 items-center font-semibold w-full text-[#69686D] text-base tracking-normal">
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
