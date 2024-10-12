"use client";
import React, { useEffect, useState } from "react";
import { CountUpStats } from "./CountUpStats";
import { useAppSelector } from "@/lib/hooks/hooks";
import { usePathname } from "next/navigation";
import { CollectionCarousel } from "./CollectionCarousel";
import Link from "next/link";
import { GrFormNextLink as LinkArrow } from "react-icons/gr";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";

function Collection() {
  const carsState = useAppSelector((state) => state.car.cars);
  const [cars, setCars] = useState(carsState);

  const path = usePathname();
  useEffect(() => {
    if (path === "/new-cars") {
      let newCars = carsState.filter((item) => item.isCarNew === true);
      setCars(newCars);
    }
  }, [path, carsState]);
  useEffect(() => {
    setCars(carsState);
  }, [carsState]);
  return cars.length !== 0 ? (
    <div className=" content-box">
      {cars.map((item, index) => (
        <div
          key={index}
          className="grid grid-cols-1 xl:grid-cols-3 justify-center items-center pt-12 border-b-[1px] border-white/50 pb-6 "
        >
          <div className="col-span-1 xl:col-span-2">
            <SlideInFromBottom sequence={index}>
              <CollectionCarousel car={item} />
            </SlideInFromBottom>
          </div>
          <CountUpStats car={item} />
        </div>
      ))}
    </div>
  ) : (
    <div></div>
  );
}

export default Collection;
