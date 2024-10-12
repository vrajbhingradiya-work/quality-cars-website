"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { emiCalculatorFunction } from "../../../../helpers/emiCalculatorFunction";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import SlideInFromLeft from "@/components/utils/SlideInFromLeft copy";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks/hooks";
import { SwipeCarousel } from "./SwipeCarousel";
import { TbManualGearbox as TransmissionIcon } from "react-icons/tb";
import { MdOutlineSpeed as KmsIcon } from "react-icons/md";
import { LuFuel as FuelIcon } from "react-icons/lu";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";
function RelatedCars() {
  const router = useRouter();
  const cars = useAppSelector((state) => state.car.cars);
  const params = useParams();

  const id = Array.isArray(params.id)
    ? parseInt(params.id[0], 10)
    : parseInt(params.id, 10);

  const [car, setCar] = React.useState(cars[id - 1]);

  useEffect(() => {
    if (cars.length !== 0 && id <= cars.length) {
      setCar(cars[id - 1]);
    } else {
      // router.push("/");
    }
  }, [cars, setCar, router, id]);

  const relatedCars = cars.filter(
    (e) => e.carType === car?.carType && e.id !== car?.id
  );

  return (
    <div className={`${relatedCars.length !== 0 ? "" : "hidden"}`}>
      <SlideInFromBottom sequence={1}>
        <div className="text-3xl font-medium text-white/60  py-6  border-b-[1px] border-white/90 w-full ">
          RELATED CARS
        </div>
      </SlideInFromBottom>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto py-12">
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
    <div className=" relative  min-h-[500px] md:min-h-[500px] min-w-[320px] max-w-[380px] flex flex-col  gap-4 rounded-xl bg-[#F4F4F4]">
      {car?.isBooked && (
        <div className="absolute z-10 top-6 -right-[1.25px] bg-black rounded-l-xl p-4 py-1 font-[500] text-sm tracking-widest">
          BOOKED
        </div>
      )}
      {car?.isNew && (
        <div className="absolute z-10 left-6 -top-[1.25px] bg-black rounded-b-xl p-4 px-2 font-[500] text-base tracking-widest">
          NEW
        </div>
      )}
      <div className="relative w-full h-[240px] xl:h-[260px] rounded-t-xl overflow-hidden">
        {/* <Image
          src={car?.images[0]}
          objectFit="cover"
          priority={true}
          fill={true}
          alt="car-image"
        /> */}

        <SwipeCarousel imgs={car?.images.slice(0, 3)} />
      </div>
      <Link href={`/collection/${car?.id}`}>
        <div className=" flex flex-col justify-between gap-2  p-2 px-6 text-black font-medium tracking-wider">
          <div className="md:h-[55px] flex flex-col  gap-2  text-black font-medium tracking-wider">
            <p className="text-3xl md:text-3xl">{car.carModel}</p>
          </div>
          <div className=" py-4 h-full grid grid-cols-2 md:flex justify-between gap-4 items-center font-semibold w-full text-[#69686D] text-base tracking-normal">
            <div
              className={`flex flex-col gap-1 ${
                car?.fuelType == "" ? "hidden" : ""
              }`}
            >
              <span className="text-[#565655] w-full flex justify-center items-center">
                <FuelIcon className="h-[23px] w-[23px]" />
              </span>
              <span className="text-black">{car?.fuelType}</span>
            </div>
            <div className=" hidden md:block w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
              {/* straight slash seperator */}
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[#565655]">
                <KmsIcon className="h-[25px] w-[25px]" />
              </span>
              <span className="text-black">{car?.kmsDriven}</span>
            </div>
            <div className=" hidden md:block w-[1px] border-l-[2px] h-[45px] border-[#565655]/50">
              {/* straight slash seperator */}
            </div>

            <div className={`flex flex-col gap-1 `}>
              <span className="text-[#565655]">
                <TransmissionIcon className="h-[25px] w-[25px]" />{" "}
              </span>
              <span className="text-black">
                {car?.fuelType.toLowerCase() == "electric"
                  ? "Auto"
                  : car?.specs.transmission.slice(0, 9)}
                {}
              </span>
            </div>

            <span className="flex gap-1 items-center text-white fill-white"></span>
          </div>
          <div className="h-[85px] w-full flex justify-between items-center py-4    text-black font-medium tracking-wider">
            <p className="  font-[600] text-2xl ">&#x20b9; {carPrice}</p>

            {/* <p className="text-3xl md:text-3xl">{car.carModel}</p> */}
            {/* <p className=" mb-3 md:mb-8 flex items-center justify-start gap-2 text-[#8A8A8A] text-base ">
              <span className="underline ">EMI STARTS</span> @ &#x20b9; {carEmi}
            </p> */}
            <DetailViewButton link={`/collection/${car.id}`} />
          </div>
        </div>
      </Link>
    </div>
  );
}

function DetailViewButton({ link }: any) {
  return (
    <Link
      href={link}
      className="group flex justify-center items-center w-full max-w-[150px]    "
    >
      <div className="p-4  bg-black text-white/50 rounded-xl  group-hover:scale-105 flex gap-4 justify-between items-center transition-all  duration-300 ease-in-out group-hover:fill-white group-hover:text-white">
        <div className="flex justify-start gap-3 items-center ">
          {/* {item.icon} */}
          <span className="flex items-center justify-center ">
            View Details
          </span>
        </div>
        <LinkArrow className=" h-6 w-6 transition-transform duration-500 group-hover:rotate-0 group-hover:translate-x-0  -translate-x-2 -rotate-45" />
      </div>
    </Link>
  );
}
