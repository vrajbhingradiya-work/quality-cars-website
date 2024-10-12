"use client";
import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import Link from "next/link";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";

export const CountUpStats = ({ car }: any) => {
  return (
    <div className="  content-box grid grid-cols-1 ">
      <SlideInFromBottom sequence={0}>
        <h2 className="mb-8 text-center xl:text-left xl:w-[80%] text-3xl text-white/80 font-semibold  md:mb-8">
          {car?.carModel}
        </h2>
      </SlideInFromBottom>

      <div
        className=" grid-cols-4 xl:grid-cols-2 gap-4 gap-y-12 grid items-start justify-center  max-w-[90%] xl:max-w-full mx-auto xl:mx-0
       "
      >
        <SlideInFromBottom sequence={2}>
          <Stat
            num={car?.specs.manufacturingYear}
            suffix=""
            subheading="YEAR"
          />
        </SlideInFromBottom>
        {/* <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" /> */}
        <SlideInFromBottom sequence={4}>
          <Stat
            num={car?.price / 100000}
            decimals={1}
            suffix="L"
            subheading="OFFER PRICE"
          />
        </SlideInFromBottom>
        {/* <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" /> */}
        <SlideInFromBottom sequence={6}>
          <Stat
            num={0}
            suffix={car?.fuelType.slice(0, 7)}
            subheading="FUEL TYPE"
          />
        </SlideInFromBottom>
        {/* <div className="h-[1px] w-12 bg-indigo-200 sm:h-12 sm:w-[1px]" /> */}
        <SlideInFromBottom sequence={8}>
          <Stat
            num={0}
            suffix={car?.regState}
            subheading="REGISTRATION STATE"
          />
        </SlideInFromBottom>
      </div>
      <SlideInFromBottom sequence={10}>
        <DetailViewButton link={`/collection/${car?.id}`} />
      </SlideInFromBottom>
    </div>
  );
};

interface Props {
  num: number;
  suffix: string;
  decimals?: number;
  subheading: string;
}

const Stat = ({ num, suffix, decimals = 0, subheading }: Props) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (num !== 0 && !isInView) return;

    animate(0, num, {
      duration: 0.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value?.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <div className="flex w-full flex-col items-center xl:items-start py-2 xl:py-0 sm:py-0">
      <p className="mb-1 text-center text-2xl font-semibold xl:text-3xl">
        {num !== 0 && <span ref={ref}></span>}
        {suffix}
      </p>
      <p className="max-w-48 text-center text-sm xl:text-base  text-white/50 font-medium">
        {subheading}
      </p>
    </div>
  );
};

function DetailViewButton({ link }: any) {
  return (
    <Link
      href={link}
      className="group flex justify-center items-center w-full  max-w-[85%] mx-auto   xl:max-w-[100%] py-8    "
    >
      <div className="py-2 px-4 w-full  bg-white/50 text-white group-hover:bg-white rounded-lg  group-hover:scale-105 flex gap-4 justify-between items-center transition-all  duration-300 ease-in-out group-hover:fill-white group-hover:text-black">
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
