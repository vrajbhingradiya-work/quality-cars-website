"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { emiCalculatorFunction } from "@/app/helpers/emiCalculatorFunction";
import SlideInFromBottom from "../../utils/SlideInFromBottom";
import SlideInFromLeft from "../../utils/SlideInFromLeft";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks/hooks";

function RelatedCars() {
  const router = useRouter();
  const cars = useAppSelector((state) => state.car.cars);
  const params = useParams();

  const id = Array.isArray(params.id)
    ? parseInt(params.id[0], 10)
    : parseInt(params.id, 10);

  const [car, setCar] = React.useState(cars[id - 1]);

  useEffect(() => {
    if (cars?.length !== 0 && id <= cars?.length) {
      setCar(cars[id - 1]);
    } else {
      router.push("/");
    }
  }, [cars, setCar, router, id]);

  const relatedCars = cars.filter(
    (e) => e.carType === car.carType && e.id !== car.id
  );

  return (
    <div
      className={`${
        relatedCars.length !== 0
          ? "flex flex-col gap-4 bg-white text-black lg:px-64 py-32 p-3 "
          : "hidden"
      }`}
    >
      <SlideInFromBottom sequence={1}>
        <div className="text-3xl font-medium text-black pb-8 w-full text-center md:text-left  ">
          RELATED CARS
        </div>
      </SlideInFromBottom>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
        {relatedCars?.slice(0, 9).map((car: any, index: any) => (
          <SlideInFromLeft sequence={index} key={index + 2}>
            <CarCard key={index} car={car} />
          </SlideInFromLeft>
        ))}
      </div>
    </div>
  );
}

export default RelatedCars;

function CarCard({ car }: any) {
  let carPrice = new Intl.NumberFormat("en-IN").format(car?.price);
  let carEmi = new Intl.NumberFormat("en-IN").format(
    emiCalculatorFunction(car?.price)
  );
  return (
    <Link
      href={`/collection/${car?.id}`}
      className=" relative  min-h-[500px] md:min-h-[550px] min-w-[320px] max-w-[380px] flex flex-col  gap-4 rounded-xl bg-[#F4F4F4]"
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
          <p className=" text-lg font-[600]">&#x20b9; {carPrice}</p>
          <p className="text-3xl md:text-3xl">{car.carModel}</p>
          <p className=" mb-3 md:mb-8 flex items-center justify-start gap-2 text-[#8A8A8A] text-base ">
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
