"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RiDeleteBin5Line as DustbinIcon } from "react-icons/ri";
import defaultImage from "@/assets/images/header1.jpg";

import React, { useEffect } from "react";

import { useAppSelector } from "@/lib/hooks/hooks";
import SlideInFromBottom from "../utils/SlideInFromBottom";

function EmiCalculator({ isShowing, setIsShowing, selectedCar }: any) {
  const path = usePathname();

  const handleReset = () => {};
  const cars = useAppSelector((state) => state.car.cars);
  const [car, setCar] = React.useState(
    selectedCar ? selectedCar : { carModel: "", price: 0 }
  );

  const [annualInterestRate, setAnnualInterestRate] = React.useState(12);
  const [termPeriod, setTermPeriod] = React.useState(60);
  const [totalInterestPayment, setTotalInterestPayment] = React.useState(0);
  const [totalAmountToPay, setTotalAmountToPay] = React.useState(0);
  const [totalMonthlyPayment, setTotalMonthlyPayment] = React.useState(0);
  const [downPayment, setDownPayment] = React.useState(
    car.carModel === "" ? 0 : 0.2 * car?.price
  );
  // emi values calculation;
  useEffect(() => {
    setDownPayment(0.2 * car?.price);
  }, [car]);
  // Calculate EMI and related values when inputs change
  useEffect(() => {
    const principal = car.price - downPayment;
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numPayments = termPeriod;

    if (principal > 0 && monthlyInterestRate > 0 && numPayments > 0) {
      const emi =
        (principal *
          monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, numPayments)) /
        (Math.pow(1 + monthlyInterestRate, numPayments) - 1);

      const totalRepayment = emi * numPayments;
      const totalInterest = totalRepayment - principal;

      setTotalMonthlyPayment(Math.round(emi));
      setTotalInterestPayment(Math.round(totalInterest));
      setTotalAmountToPay(Math.round(downPayment + totalRepayment));
    }
  }, [downPayment, annualInterestRate, termPeriod, car]);

  return (
    <>
      {isShowing === true ? (
        <div
          className={`${
            path !== "/emi-calculator"
              ? "h-screen fixed w-full overflow-y-scroll overflow-hidden z-[50] top-0 left-0 pt-[40rem] p-6 md:p-0  md:pt-[20rem] lg:pt-[12rem] lg:pb-[4rem]"
              : "h-auto"
          } flex   justify-center items-center  w-full bg-black/80   `}
        >
          <SlideInFromBottom sequence={2}>
            <div
              className={`${
                path === "/emi-calculator"
                  ? "  lg:w-[85vw] max-w-[80vw] h-full md:h-auto m-2  my-12 md:my-16 md:mx-auto "
                  : "lg:w-[90vw]  "
              } bg-white  text-black w-full overflow-hidden rounded-xl p-2 md:p-4   `}
            >
              <div className="flex flex-col w-full gap-4   py-4 p-2 md:px-6">
                <div className="flex gap-4  items-center  w-full justify-between md:justify-end">
                  {/* reset motion.button */}
                  {/* <motion.button
                  whileTap={{ scale: 0.9 }}
                  className="btn group w-[100px] flex gap-2 items-center"
                  type="button"
                  onClick={handleReset}
                >
                  RESET
                  <ResetIcon className="fill-black group-hover:fill-white" />
                </motion.button> */}
                  {/* cross mark */}
                  <div
                    className={` ${
                      path === "/emi-calculator" ? "hidden" : ""
                    } flex  md:justify-end items-center md:pr-12  fill-black `}
                  >
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      className="h-full w-[25px]"
                      onClick={() => {
                        setIsShowing(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                      </svg>
                    </motion.button>
                  </div>
                </div>

                <div className="text-4xl md:text-5xl font-bold mt-4 text-center md:text-left">
                  EMI CALCULATOR
                </div>
                <div
                  className={`${
                    path !== "/emi-calculator"
                      ? "flex flex-col lg:flex-row  gap-4 w-full "
                      : "flex flex-col lg:flex-row  gap-4 w-full"
                  } text-xl mt-10`}
                >
                  <SelectedCarCard
                    allCars={cars}
                    car={car}
                    setCar={setCar}
                    reset={handleReset}
                  />
                  <form className="w-full rounded-xl border-2 border-[#f2f2f2] p-4 flex flex-col gap-4 items-center">
                    <div className="flex gap-4 w-full flex-col md:flex-row justify-between items-center text-left md:text-inherit ">
                      <label
                        className="w-full text-left md:w-auto "
                        htmlFor="down-payment"
                      >
                        Down Payment (Minimum 20%) :
                      </label>
                      <input
                        id="down-payment"
                        className="  w-full md:w-[200px] border-2 border-black/30 rounded-xl p-4 placeholder:text-black text-black"
                        type="Number"
                        value={downPayment}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          // const minValue = car.price * 0.2;
                          // const maxValue = car.price;
                          // if (value < minValue) {
                          //   setDownPayment(minValue);
                          // } else if (value > maxValue) {
                          //   setDownPayment(maxValue);
                          // } else {
                          //   setDownPayment(value);
                          // }
                          setDownPayment(value);
                        }}
                        min={0}
                        max={car.price}
                      />
                    </div>
                    <div className="flex gap-4 w-full flex-col md:flex-row justify-between items-center text-left md:text-inherit ">
                      <label
                        className="w-full text-left md:w-auto "
                        htmlFor="annual-interest-rate "
                      >
                        Annual Interest (%) :
                      </label>
                      <input
                        title="annual-interest-rate"
                        id="annual-interest-rate"
                        className="  w-full md:w-[200px] border-2 border-black/30 rounded-xl p-4 placeholder:text-black text-black"
                        type="Number"
                        value={annualInterestRate}
                        onChange={(e) => {
                          const newValue = Number(e.target.value);
                          // if (value < 7) {
                          //   setAnnualInterestRate(7);
                          // } else if (value > 15) {
                          //   setAnnualInterestRate(15);
                          // } else {
                          //   setAnnualInterestRate(value);
                          // }
                          setAnnualInterestRate(newValue);
                        }}
                        min={7}
                        max={15}
                      />
                    </div>
                    <div className="flex gap-4 w-full flex-col md:flex-row justify-between items-center text-left md:text-inherit ">
                      <label
                        className="w-full text-left md:w-auto "
                        htmlFor="term-period"
                      >
                        Term/Period (Months) :
                      </label>
                      <input
                        id="term-period"
                        className="  w-full md:w-[200px] border-2 border-black/30 rounded-xl p-4 placeholder:text-black text-black"
                        type="Number"
                        value={termPeriod}
                        onChange={(e) => {
                          const value = Number(e.target.value);
                          // if (value < 1) {
                          //   setTermPeriod(1);
                          // } else if (value > 84) {
                          //   setTermPeriod(84);
                          // } else {
                          //   setTermPeriod(value);
                          // }
                          setTermPeriod(value);
                        }}
                        min={1}
                        max={84}
                      />
                    </div>
                    <div className="w-full rounded-xl md:border-2 mt-6 md:mt-0 border-[#f2f2f2] border-t-4 p-2 py-4 md:p-4 md:px-8 flex flex-col gap-4 items-center">
                      <div className="flex gap-4 w-full flex-col md:flex-row justify-between items-center text-left md:text-inherit ">
                        <span className="w-full md:w-auto">
                          Total Interest Payment :
                        </span>
                        <span className="w-full md:w-auto">
                          ₹ {totalInterestPayment}
                        </span>
                      </div>
                      <div className="flex gap-4 w-full flex-col md:flex-row justify-between items-center text-left md:text-inherit ">
                        <span className="w-full md:w-auto">
                          Total Amount to Pay :
                        </span>
                        <span className="w-full md:w-auto">
                          ₹ {totalAmountToPay}
                        </span>
                      </div>
                      <div className="mt-6 md:mt-0 flex gap-4 w-full flex-col md:flex-row justify-between items-center text-left md:text-inherit md:p-4 font-medium ">
                        <div className=" items-end  justify-end w-full flex flex-col pr-4 border-r-2 border-[#f2f2f2]">
                          <span className="text-2xl md:text-3xl w-full md:w-auto">
                            EMI
                          </span>
                          <span className="w-full md:w-auto text-sm md:text-inherit">
                            Monthly Payment
                          </span>
                        </div>
                        <div className=" items-start  justify-start w-full flex flex-col border-r-2 border-[#f2f2f2]">
                          <span className="text-3xl">
                            ₹ {totalMonthlyPayment}
                          </span>
                          <span className="text-sm md:text-inherit">
                            Calculated on On Road Price
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </SlideInFromBottom>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default EmiCalculator;
function SelectedCarCard({
  allCars,
  reset,

  car,
  setCar,
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
  const path = usePathname();

  const [modelOptions, setModelOptions] = React.useState([]);

  const [carModel, setCarModel] = React.useState(
    car?.carModel ? car.carModel : "default"
  );

  const [carImage, setCarImage] = React.useState(defaultImage);

  const handleReset = () => {
    setBrand("default");
    setCarModel("default");
    reset();
  };

  return (
    <div className="text-black text-xl w-full md:p-6  flex justify-center items-center pb-4   ">
      <div
        className={` ${
          carModel !== "default" && brand !== "default"
            ? " w-[500px]"
            : "w-full  "
        } flex flex-col gap-3 w-[90%]`}
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-left text-xl md:text-3xl  ">
            {carModel !== "default" && brand !== "default"
              ? `${brand} - ${carModel}`
              : "SELECT A CAR"}
          </span>
          <button
            className={`${path !== "/emi-calculator" ? "hidden" : ""}`}
            aria-label="btn"
            type="button"
            onClick={handleReset}
          >
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
          } flex flex-col gap-3 mb-12 md:mb-0`}
        >
          <select
            title="brand"
            className="p-4 px-6 border-[1px] border-[#D9D9D9] rounded-md flex justify-between  items-center"
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
            className="p-4 px-6 border-[1px] border-[#D9D9D9] rounded-md flex justify-between  items-center "
            value={carModel}
            onChange={(e) => {
              setCarModel(e.target.value);
              console.log(brand);
              const selectedCar = allCars.filter(
                (car: any) =>
                  car.brand === brand && car.carModel === e.target.value
              );
              setCar(selectedCar[0]);
              setCarImage(selectedCar[0].images[0]);
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
            carModel !== "default" && brand !== "default"
              ? "hidden xl:block xl:max-h-[422px] xl:max-w-[750px]"
              : "hidden"
          }`}
        >
          <Image
            src={carImage}
            alt="car-image"
            height={422}
            width={750}
            objectFit="cover"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div
          className={` ${
            carModel !== "default" && brand !== "default"
              ? " max-h-[300px] w-full max-w-[500px] xl:hidden"
              : "hidden"
          }`}
        >
          <Image
            src={carImage}
            alt="car-image"
            height={300}
            width={500}
            objectFit="cover"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
