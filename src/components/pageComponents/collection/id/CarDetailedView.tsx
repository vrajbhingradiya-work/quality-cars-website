"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CardCarousel from "./CardCarousel";
import CarOverview from "./CarOverview";
import RelatedCars from "./RelatedCars";
import { useParams, useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks/hooks";
import { emiCalculatorFunction } from "@/helpers/emiCalculatorFunction";
import ButtonsForStickyBar from "./ButtonsForStickyBar";
function CarDetailedView() {
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
      // router.push("/");
    }
  }, [cars, setCar, router, id]);
  const [selectedImage, setSelectedImage]: any = useState(car?.images[0]);
  useEffect(() => {
    setSelectedImage(car?.images[0]);
  }, [car]);
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

  return car ? (
    <div className="content-box">
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-start py-6 font-medium">
          <div className="flex  justify-start items-center">
            <span className="text-4xl text-white/60">{car?.carModel}</span>
          </div>
          <div className="flex justify-start items-center">
            <span className="text-4xl text-white fill-white">₹ {carPrice}</span>
          </div>
        </div>
        <div className="flex justify-between items-center py-6 font-medium">
          <ButtonsForStickyBar car={car} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={selectedImage?.data?.image.url}
          alt="selected Image"
          width={600}
          height={400}
          className="object-cover w-[70%] rounded-xl"
        />
      </div>
      <div className="flex justify-center items-center ">
        <CardCarousel
          setSelectedImage={setSelectedImage}
          images={car?.images}
          selectedImage={selectedImage}
        />
      </div>
      <div className="flex justify-center items-center">
        <CarOverview car={car} />
      </div>
      <div className="flex justify-center items-center">
        <RelatedCars />
      </div>
    </div>
  ) : (
    <div></div>
  );
}

export default CarDetailedView;
