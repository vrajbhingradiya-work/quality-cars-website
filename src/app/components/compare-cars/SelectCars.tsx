"use client";
import React, { useEffect } from "react";
import { RiDeleteBin5Line as DustbinIcon } from "react-icons/ri";
import defaultImage from "@/assets/images/header1.jpg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";

function SelectCars() {
  const [isComparisonChartVisible, setIsComparisonChartVisible] =
    React.useState(false);
  const cars = useAppSelector((state) => state.car.cars);
  const [car1, setCar1] = React.useState({});
  const [car2, setCar2] = React.useState({});

  const handleCompare = () => {
    setIsComparisonChartVisible(true);
  };
  return (
    <div>
      <div className="flex flex-col gap-8 py-16 px-32 bg-white tracking-wider">
        <span
          className={`${
            cars.length <= 2 ? "" : "hidden"
          } text-black/60 font-medium text-base`}
        >
          Please select at least 2 cars for comparison
        </span>
        <div
          className={`w-full grid  items-center gap-4 ${
            isComparisonChartVisible ? " grid-cols-3 gap-2" : "grid-cols-2"
          } `}
        >
          <div
            className={`w-full grid  items-center gap-4 ${
              isComparisonChartVisible ? " " : "hidden"
            } `}
          ></div>
          <SelectedCarCard
            car={car1}
            setCar={setCar1}
            allCars={cars}
            setIsComparisonChartVisible={setIsComparisonChartVisible}
          />
          <SelectedCarCard
            car={car2}
            setCar={setCar2}
            allCars={cars}
            setIsComparisonChartVisible={setIsComparisonChartVisible}
          />
        </div>
        <div className="flex items-center justify-center ">
          <button
            type="button"
            onClick={handleCompare}
            className={` ${
              isComparisonChartVisible ? "hidden" : false
            }  min-w-[200px] xl:min-w-[500px] max-w-[500px]  text-lg font-medium  text-white bg-black hover:text-black hover:bg-white border-[1px] hover:border-black px-4  py-4 flex justify-center items-center group transition ease-in-out duration-300 rounded-xl tracking-[.2em]`}
          >
            COMPARE NOW
          </button>
        </div>
      </div>
      {isComparisonChartVisible && <ComparisonChart car1={car1} car2={car2} />}
    </div>
  );
}

export default SelectCars;

function SelectedCarCard({
  allCars,

  car,
  setCar,
  setIsComparisonChartVisible,
}: any) {
  // create a direct setCar function.
  const brandOptions = [
    { title: "BMW" },
    { title: "AUDI" },
    {
      title: "LAND ROVER",
    },
    { title: "BMW" },
    { title: "AUDI" },
    {
      title: "LAND ROVER",
    },
  ];
  const [brand, setBrand] = React.useState(car?.brand ? car.brand : "default");

  const [modelOptions, setModelOptions] = React.useState([]);

  const [carModel, setCarModel] = React.useState(
    car?.carModel ? car.carModel : "default"
  );

  const [carImage, setCarImage] = React.useState(
    car?.images?.frontView ? car.images.frontView : defaultImage
  );

  const handleReset = () => {
    setBrand("default");
    setCarModel("default");
    setIsComparisonChartVisible(false);
  };

  return (
    <div className="text-black text-xl w-full p-6  flex justify-center items-center ">
      <div className="flex flex-col gap-3 lg:w-[400px] w-[200px]">
        <div className="flex justify-between items-center">
          <span className="font-medium text-left text-3xl">
            {carModel !== "default" && brand !== "default"
              ? `${brand} - ${carModel}`
              : "SELECT A CAR"}
          </span>
          <button aria-label="btn" type="button" onClick={handleReset}>
            <DustbinIcon
              className={` ${
                carModel !== "default" && brand !== "default" ? "" : "hidden"
              } bg-black/10 fill-black/70 hover:fill-white hover:bg-black transition duration-150 hover:ease-in-out h-[45px] w-[45px] p-3 rounded-lg cursor-pointer`}
            />
          </button>
        </div>
        <div
          className={` ${
            carModel === "default" || brand === "default" ? "" : "hidden"
          } flex flex-col gap-3 `}
        >
          <select
            title="brand"
            className="p-2 px-4 border-[1px] border-[#D9D9D9] rounded-md flex justify-between  items-center"
            value={brand}
            onChange={(e) => {
              setBrand(e.target.value);
              const carModelOptions = allCars.filter(
                (car: any) => car.brand === e.target.value
              );
              setModelOptions(carModelOptions);
            }}
          >
            <option value="default">SELECT BRAND</option>
            {brandOptions.map((option, index) => {
              return (
                <option key={index} value={option.title}>
                  {option.title}
                </option>
              );
            })}
          </select>
          <select
            disabled={brand == "default"}
            title="brand"
            className="p-2 px-4 border-[1px] border-[#D9D9D9] rounded-md flex justify-between  items-center "
            value={carModel}
            onChange={(e) => {
              setCarModel(e.target.value);
              console.log(brand);
              const selectedCar = allCars.filter(
                (car: any) =>
                  car.brand === brand && car.carModel === e.target.value
              );
              setCar(selectedCar[0]);
            }}
          >
            <option value="default">SELECT MODEL</option>

            {modelOptions.length > 0
              ? modelOptions.map((option: any, index: any) => {
                  return (
                    <option key={index} value={option.carModel}>
                      {option.carModel}
                    </option>
                  );
                })
              : ""}
          </select>
        </div>
        <div
          className={` ${
            carModel !== "default" && brand !== "default" ? "" : "hidden"
          }`}
        >
          <Image
            src={carImage}
            alt="car-image"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

function ComparisonChart({ car1, car2 }: any) {
  console.log("car1 ", car1);
  return (
    <div>
      <div className="flex flex-col gap-4 text-black bg-white px-16 tracking-wider pb-32 ">
        <span className="text-3xl font-medium ">OVERVIEW</span>
        <div className="flex flex-col gap-0 border-2 border-black/10 rounded-xl overflow-hidden">
          <div className="grid grid-cols-3 p-4 w-full text-center bg-[#cccccc]">
            <span className="font-medium text-left">VEHICLE TYPE</span>
            <span>{car1?.carType}</span>
            <span>{car2?.carType}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center">
            <span className="font-medium text-left">ENGINE</span>
            <span>{car1?.specs?.engine}</span>
            <span>{car2?.specs?.engine}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center bg-[#cccccc]">
            <span className="font-medium text-left">FUEL</span>
            <span>{car1?.fuelType}</span>
            <span>{car2?.fuelType}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center ">
            <span className="font-medium text-left">PEAK POWER</span>
            <span>{car1?.specs?.peakPower}</span>
            <span>{car2?.specs?.peakPower}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center bg-[#cccccc]">
            <span className="font-medium text-left">TRANSMISSION</span>
            <span>{car1?.specs?.transmission}</span>
            <span>{car2?.specs?.transmission}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center ">
            <span className="font-medium text-left">VEHICLE TYPE</span>
            <span>{car1?.carType}</span>
            <span>{car2?.carType}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center bg-[#cccccc]">
            <span className="font-medium text-left">VEHICLE TYPE</span>
            <span>{car1?.carType}</span>
            <span>{car2?.carType}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center ">
            <span className="font-medium text-left">VEHICLE TYPE</span>
            <span>{car1?.carType}</span>
            <span>{car2?.carType}</span>
          </div>
          <div className="grid grid-cols-3 p-4 w-full text-center bg-[#cccccc]">
            <span className="font-medium text-left">VEHICLE TYPE</span>
            <span>{car1?.carType}</span>
            <span>{car2?.carType}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
