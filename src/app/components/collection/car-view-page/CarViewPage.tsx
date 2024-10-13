"use client";
import React, { useEffect } from "react";
import StickyBar from "./StickyBar";
import SwipeCarouselDesktop from "./SwipeCorouselDesktop";
import SwipeCorousel from "./SwipeCorousel";
import CarSummary from "./CarSummary";
import RelatedCars from "./RelatedCars";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks/hooks";

function CarViewPage() {
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

  return (
    <div className="overflow-hidden">
      <StickyBar car={car} />
      <div className="md:hidden">
        <SwipeCorousel car={car} />
      </div>
      <div className="hidden md:block">
        <SwipeCarouselDesktop car={car} />
      </div>
      <CarSummary car={car} />
      <div className="px-32 w-full bg-white">
        <div className="h-[1px] border-b-[1px] border-[#CCCCCC]"></div>
      </div>
      <RelatedCars />
    </div>
  );
}

export default CarViewPage;
