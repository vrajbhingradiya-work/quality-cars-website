"use client";
import React, { useEffect } from "react";
import ButtonsForStickyBar from "./ButtonsForStickyBar";

import { emiCalculatorFunction } from "@/app/helpers/emiCalculatorFunction";
import SlideInFromLeft from "../../utils/SlideInFromLeft";
import SimpleFadeIn from "../../utils/SimpleFadeIn";
function StickyBar({ car }: any) {
  const [carPrice, setCarPrice] = React.useState("0");
  const [carEmi, setCarEmi] = React.useState("0");
  const formatPrice = new Intl.NumberFormat("en-IN").format(car?.price);
  const formatCarEmi = new Intl.NumberFormat("en-IN").format(
    emiCalculatorFunction(car?.price)
  );

  useEffect(() => {
    setCarPrice(formatPrice);
    setCarEmi(formatCarEmi);
  }, [formatPrice, formatCarEmi]);

  return (
    <div className="sticky top-0 z-20 ">
      <div className="flex flex-col gap-6 xl:flex-row xl:justify-between items-center bg-white text-black py-6 md:px-32 p-8  tracking-wider">
        <div className="flex  flex-col xl:flex-row gap-6 font-medium">
          <SlideInFromLeft sequence={1.5}>
            <div className="flex flex-col gap-4 w-[300px] justify-center items-start">
              <span className="text-4xl">{car?.carModel.toUpperCase()}</span>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">₹ {carPrice}</span>

                <span className="text-black/40">EMI STARTS @ ₹{carEmi}</span>
              </div>
            </div>
          </SlideInFromLeft>
          <SlideInFromLeft sequence={3}>
            <div className="flex flex-col  w-[200px] text-sm">
              <div className="flex gap-2 justify-evenly">
                <span className="w-[50%]">REG. YEAR</span>
                <span className="w-[5%]">:</span>
                <span className="w-[40%]">{car?.regYear}</span>
              </div>
              <div className="flex gap-2 justify-evenly">
                <span className="w-[50%]">KMS</span>
                <span className="w-[5%]">:</span>
                <span className="w-[40%]">{car?.kmsDriven}</span>
              </div>
              <div className="flex gap-2 justify-evenly">
                <span className="w-[50%]">FUEL TYPE</span>
                <span className="w-[5%]">:</span>
                <span className="w-[40%]">{car?.fuelType}</span>
              </div>
              <div className="flex gap-2 justify-evenly">
                <span className="w-[50%]">REG. STATE</span>
                <span className="w-[5%]">:</span>
                <span className="w-[40%]">{car?.regState}</span>
              </div>
            </div>
          </SlideInFromLeft>
        </div>
        <div className="w-full md:w-auto">
          <SimpleFadeIn sequence={2}>
            <ButtonsForStickyBar car={car} />
          </SimpleFadeIn>
        </div>
      </div>
    </div>
  );
}

export default StickyBar;
