import React from "react";
import ExampleImage from "@/assets/images/header1.jpg";

import {
  FaCity,
  FaCalendarAlt,
  FaBolt,
  FaDoorOpen,
  FaRoad,
  FaCalendar,
  FaGasPump,
  FaRoute,
  FaPalette,
  FaRegUser,
} from "react-icons/fa";
import { PiEngine, PiSeatbelt } from "react-icons/pi";
import { GiComputerFan } from "react-icons/gi";
import { IoCarSportOutline, IoSettingsOutline } from "react-icons/io5";
import SlideInFromBottom from "@/components/utils/SlideInFromBottom";
import SlideInFromLeft from "@/components/utils/SlideInFromLeft copy";

const iconClassName =
  "min-h-[50px] min-w-[50px] p-2 fill-white/60 border-[1px] border-[#cccccc] rounded-lg";

function CarOverview({
  car = {
    id: "1",
    carType: "SUV",
    brand: "MERCEDES",
    carModel: "2024 MERCEDES BENZ EQA 250+",
    price: 6200000,
    regYear: 2024,
    kmsDriven: 2399,
    regState: "UNREGISTERED",
    fuelType: "ELECTRIC",

    images: [
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
      "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    ],
    specs: {
      engine: "ELECTRIC MOTORS",
      transmission: " 6 Speed",
      ownership: "NEW",
      peakTorque: "385 Nm",
      peakPower: "188 bhp",
      doors: "4",
      drive: "FWD",
      seatingCapacity: "5",
      manufacturingYear: 2024,
      exteriorColor: "POLAR WHITE",
    },
    isBooked: false,
    isSold: false,
    isCarNew: true,
    soldTo: "",
  },
}: any) {
  const carSpecs = [
    {
      svg: <FaCity className={iconClassName} />,
      title: "Reg. State",
      value: car.regState,
    },
    {
      svg: <IoCarSportOutline className={iconClassName} />,
      title: "Vehicle Type",
      value: car.carType.toUpperCase(),
    },
    {
      svg: <FaCalendarAlt className={iconClassName} />,
      title: "Registration Year",
      value: car.regYear,
    },
    {
      svg: <PiEngine className={iconClassName} />,
      title: "Engine",
      value: car.specs.engine,
    },
    {
      svg: <IoSettingsOutline className={iconClassName} />,
      title: "Transmission",
      value: car.specs.transmission,
    },
    {
      svg: <FaRegUser className={iconClassName} />,
      title: "Ownership",
      value: car.specs.ownership,
    },
    {
      svg: <GiComputerFan className={iconClassName} />,
      title: "Peak Torque",
      value: car.specs.peakTorque,
    },
    {
      svg: <FaBolt className={iconClassName} />,
      title: "Peak Power",
      value: car.specs.peakPower,
    },
    {
      svg: <FaDoorOpen className={iconClassName} />,
      title: "Doors",
      value: car.specs.doors,
    },
    {
      svg: <FaRoad className={iconClassName} />,
      title: "Drive",
      value: car.specs.drive,
    },
    {
      svg: <PiSeatbelt className={iconClassName} />,
      title: "Seating Capacity",
      value: car.specs.seatingCapacity,
    },
    {
      svg: <FaCalendar className={iconClassName} />,
      title: "Manufacturing Year",
      value: car.specs.manufacturingYear,
    },
    {
      svg: <FaGasPump className={iconClassName} />,
      title: "Fuel",
      value: car.fuelType,
    },
    {
      svg: <FaRoute className={iconClassName} />,
      title: "Kms done",
      value: car.kmsDriven,
    },
    {
      svg: <FaPalette className={iconClassName} />,
      title: "Exterior Color",
      value: car.specs.exteriorColor, // Assuming exterior color is not part of car object, this can be modified if provided
    },
  ];

  return (
    <div className="py-6 flex flex-col justify-center items-start w-full gap-4 text-white/50">
      <div className="text-3xl font-medium  py-6  border-b-[1px] border-white/90 w-full ">
        CAR OVERVIEW
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-4 gap-y-6 xl:gap-y-8 justify-start items-center w-full py-6 ">
        {carSpecs.map((spec, index) => (
          <SlideInFromLeft key={index} sequence={index > 0 ? index - 1 : index}>
            <IconAndTitle key={index} spec={spec} />
          </SlideInFromLeft>
        ))}
      </div>
    </div>
  );
}

export default CarOverview;

function IconAndTitle({ spec }: any) {
  return (
    <div className="flex gap-4  tracking-wider items-center justify-start text-center fill-white/50 ">
      {spec.svg}
      <div className="flex flex-col justify-start items-start w-full">
        <span className="text-white/50 font-bold w-full text-left ">
          {spec.title}
        </span>
        <span className="  font-medium text-sm w-full text-left  text-white/90">
          {spec.value}
        </span>
      </div>
    </div>
  );
}
