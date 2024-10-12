"use client";
import React, { useEffect, useState } from "react";
import PageNav from "./PageNav";
import FilterSection from "./FilterSection";
import Cars from "./Cars";
import SlideInFromBottom from "../utils/SlideInFromBottom";
import SimpleFadeIn from "../utils/SimpleFadeIn";
import { useAppSelector } from "@/lib/hooks/hooks";
import { usePathname } from "next/navigation";

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

  return (
    <div className="bg-white p-4 md:p-8 md:px-16 overflow-hidden ">
      <SimpleFadeIn sequence={4}>
        <PageNav />
      </SimpleFadeIn>
      <SimpleFadeIn sequence={8}>
        <FilterSection cars={cars} setCars={setCars} />
      </SimpleFadeIn>
      <SlideInFromBottom sequence={16}>
        <Cars cars={cars} />
      </SlideInFromBottom>
    </div>
  );
}

export default Collection;
