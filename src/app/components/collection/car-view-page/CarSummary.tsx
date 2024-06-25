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
import SlideInFromBottom from "../../utils/SlideInFromBottom";

const iconClassName =
  "h-[80px] w-[80px] p-6 fill-black/60 border-[1px] border-[#cccccc] rounded-lg";

function CarSummary({
  car = {
    id: "5",
    carType: "Convertible",
    carModel: "Mazda MX-5 Miata",
    price: 270000,
    regYear: 2022,
    kmsDriven: 5000,
    regState: "NEVADA",
    fuelType: "PETROL",
    listingDate: new Date("2023-05-30"),
    images: {
      frontView: ExampleImage,
    },
    specs: {
      engine: "2.0L I4",
      transmission: "Manual",
      ownership: "First",
      peakTorque: "151 lb-ft",
      peakPower: "181 hp",
      doors: "2",
      drive: "RWD",
      seatingCapacity: "2",
      manufacturingYear: 2022,
    },
    isBooked: true,
    isSold: false,
    isNew: false,
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
      value: "Blue", // Assuming exterior color is not part of car object, this can be modified if provided
    },
  ];

  return (
    <div className="flex flex-col gap-4 bg-white text-black lg:px-64 py-8 md:py-32 w-full text-center md:text-left ">
      <div className="text-3xl font-medium text-black pb-8  ">CAR SUMMARY</div>
      <div className="px-16 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {carSpecs.map((spec, index) => (
          <SlideInFromBottom
            key={index}
            sequence={index > 0 ? index - 0.8 : index}
          >
            <IconAndTitle key={index} spec={spec} />
          </SlideInFromBottom>
        ))}
      </div>
    </div>
  );
}

export default CarSummary;

function IconAndTitle({ spec }: any) {
  return (
    <div className="flex flex-col  tracking-wider items-center justify-center text-center fill-black/50 ">
      {spec.svg}
      <span className="text-black/50 font-medium">{spec.title}</span>
      <span className="font-bold text-lg">{spec.value}</span>
    </div>
  );
}
