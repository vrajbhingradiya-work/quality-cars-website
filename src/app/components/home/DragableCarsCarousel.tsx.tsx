"use client";

import { useAppSelector } from "@/lib/hooks/hooks";
import CustomCarousel from "./CustomCarousel";
import Image from "next/image";
import Link from "next/link";
import SimpleFadeIn from "../utils/SimpleFadeIn";

const DragableCarsCarousel = () => {
  const cars = useAppSelector((state) => state.car.cars);

  return (
    <section className="bg-white  xl:py-32  py-16">
      <div className="relative overflow-hidden ">
        {/* CARDS */}
        <SimpleFadeIn sequence={4}>
          <div className="mb-4 text-4xl md:text-6xl flex flex-col md:flex-row gap-2 font-medium text-black/80 pb-8 text-center ">
            {/* <p className="">OUR FLEET</p> */}
            <span className="text-black font-bold md:px-20 "> OUR FLEET</span>
          </div>
        </SimpleFadeIn>
        <div className="flex w-full">
          <CustomCarousel>
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </CustomCarousel>
        </div>
      </div>
    </section>
  );
};

export default DragableCarsCarousel;

function CarCard({ car }: any) {
  return (
    <Link
      href={`/collection/${car?.id}`}
      className=" relative overflow-hidden min-h-auto md:h-auto min-w-[85vw] max-h-[450px] md:min-w-[450px] md:max-w-[450px] flex flex-col  gap-4  bg-white mb-8 md:mb-0"
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
      {/* desktop */}
      <div className=" relative w-full h-[240px] md:h-[340px] xl:h-[460px] rounded-xl overflow-hidden">
        <Image
          src={car?.images[0]}
          objectFit="cover"
          priority={true}
          fill={true}
          alt="car-image"
        />
      </div>

      <div className=" flex flex-col justify-between gap-4  py-2 px-2   text-black font-medium tracking-wider">
        <div className="relative  md:h-auto  flex flex-col  gap-2  text-black font-medium tracking-wider">
          <p className="text-xl   text-wrap  md:text-3xl ">{car.carModel}</p>
        </div>
        <div className=" h-full  flex justify-between  items-start font-medium w-full text-[#69686D] text-sm  md:text-lg tracking-normal md:mb-4">
          <div className="flex  gap-1">
            <span className="text-[#565655]">KMS -</span>{" "}
            <span className="text-black">{car?.kmsDriven}</span>
          </div>
          <div className=" hidden md:block w-[1px] border-l-[2px] h-[20px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div
            className={`flex  gap-1 ${
              car?.fuelType == "electric" ? "hidden" : ""
            }`}
          >
            <span className="text-[#565655]">FUEL TYPE -</span>
            <span className="text-black">{car?.fuelType}</span>
          </div>
          <div className=" hidden md:block w-[1px] border-l-[2px] h-[20px] border-[#565655]/50">
            {/* straight slash seperator */}
          </div>
          <div className="flex  gap-1">
            <span className="text-[#565655]">REG. STATE - </span>
            <span className="text-black">{car?.regState}</span>
          </div>
          {/* <div className="hidden md:block w-[1px] border-l-[2px] h-[20px] border-[#565655]/50">
          </div>
          <div className="flex flex-col col-span-1 gap-1">
            
            <span className="text-[#565655]">OWNERSHIP </span>
            <span className="text-black">{car?.specs.ownership}</span>
          </div> */}

          <span className="flex gap-1 items-center text-white fill-white"></span>
        </div>
      </div>
    </Link>
  );
}
