"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hooks/hooks";
import LoadingIcon from "../loading/LoadingIcon";
import { emiCalculatorFunction } from "@/app/helpers/emiCalculatorFunction";
import SimpleFadeIn from "../utils/SimpleFadeIn";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SlideInFromLeft from "../utils/SlideInFromLeft";
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { IoIosCall as PhoneIcon } from "react-icons/io";
import { usePathname } from "next/navigation";

function Cars({ cars }: any) {
  const [totalResults, setTotalResults] = useState(9);
  const [loadingMoreCars, setLoadingMoreCars] = useState(false);

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
          {cars?.slice(0, totalResults).map((car: any, index: any) => (
            <SimpleFadeIn sequence={index * 3} key={index}>
              <CarCard car={car} key={index} />
            </SimpleFadeIn>
          ))}
        </div>
        {/* mobile */}
        <div className="md:hidden md:p-8 lg:px-16 md:py-16 flex flex-col justify-center   md:gap-16 items-center">
          {cars?.slice(0, totalResults).map((car: any, index: any) => (
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
      className=" relative overflow-hidden min-h-auto md:min-h-[510px] min-w-[100vw] md:min-w-[320px] md:max-w-[380px] flex flex-col  gap-4 md:rounded-xl bg-white md:bg-[#F4F4F4] mb-8 md:mb-0"
    >
      {car?.isBooked && (
        <div className="absolute z-10 top-6 -right-[1.25px] bg-[#E00F0E] rounded-l-xl p-4 py-1 font-[500] text-sm tracking-widest">
          BOOKED
        </div>
      )}
      {car?.isCarNew && (
        <div className="absolute z-10 left-6 -top-[1.25px] bg-[#E00F0E] rounded-b-xl p-4 px-2 font-[500] text-base tracking-widest">
          NEW
        </div>
      )}
      {car?.isSold && (
        <div className="absolute z-10 left-6 -top-[1.25px] bg-[#E00F0E] rounded-b-xl p-4 px-2 font-[500] text-base tracking-widest">
          SOLD
        </div>
      )}
      {/* desktop */}
      <div className="hidden md:block relative w-full  h-[240px] xl:h-[260px] rounded-t-xl overflow-hidden">
        <Image
          src={car?.images[0]}
          objectFit="cover"
          priority={true}
          fill={true}
          alt="car-image"
        />
      </div>
      {/* mobile */}
      <div className="md:hidden relative w-full h-[300px]   overflow-hidden">
        <Image
          src={car?.images[0]}
          objectFit="cover"
          priority={true}
          fill={true}
          alt="car-image"
        />
      </div>

      <div className=" flex flex-col justify-between gap-4  p-2 px-6  md:px-8 text-black font-medium tracking-wider">
        <div className="relative md:h-[150px] flex flex-col  gap-2  text-black font-medium tracking-wider">
          <div className="md:hidden absolute -top-12 right-2 flex justify-end gap-4">
            <Link href="https://wa.me/9829407612">
              <WhatsappIcon className="h-[45px] w-[45px] p-2 fill-white bg-green-500 rounded-full  shadow-md shadow-green-400" />
            </Link>
            <Link href="tel:9829407612">
              <PhoneIcon className="h-[45px] w-[45px] p-2 fill-white shadow-md shadow-red-400 bg-red-500 rounded-full" />
            </Link>
          </div>
          <p className={`${car.isSold ? "hidden" : ""} text-lg font-[600]`}>
            &#x20b9; {carPrice}
          </p>
          <p
            className={`${
              car.isSold ? "w-[1px] h-6" : "hidden"
            } text-lg font-[600]`}
          ></p>
          <p className="text-2xl md:text-3xl">{car.carModel}</p>
          <p
            className={`${
              car.isSold ? "hidden" : ""
            } mb-3 md:mb-8 flex items-center justify-start gap-2 text-[#8A8A8A] text-sm `}
          >
            <span className="underline ">EMI STARTS</span> @ &#x20b9; {carEmi}
          </p>
        </div>
        <div className=" h-full grid grid-cols-4 md:flex justify-between gap-3 items-start font-semibold w-full text-[#69686D] text-sm tracking-normal md:mb-4">
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
          <div className="hidden md:block w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div className="flex flex-col col-span-1 gap-1">
            {/* options */}
            <span className="text-[#565655]">OWNERSHIP </span>
            <span className="text-black">{car?.specs.ownership}</span>
          </div>

          <span className="flex gap-1 items-center text-white fill-white"></span>
        </div>
      </div>
    </Link>
  );
}
