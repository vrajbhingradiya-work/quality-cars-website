"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoMdCalculator as CalculatorIcon } from "react-icons/io";
import { FiPlus as CompareIcon } from "react-icons/fi";
import EmiCalculator from "../../emi-calculator/EmiCalculator";
import { useAppDispatch } from "@/lib/hooks/hooks";
import { addToSelectedCars } from "@/lib/store/selectedCarSlice";

function ButtonsForStickyBar({ car }: any) {
  const dispatch = useAppDispatch();

  const [isShowing, setIsShowing] = React.useState(false);
  const router = useRouter();

  const handleCompareCarBtn = () => {
    dispatch(addToSelectedCars(car));

    router.push("/compare-cars");
  };
  const handleCalculateEmi = () => {
    dispatch(addToSelectedCars(car));

    setIsShowing(true);
  };
  const handleReserveThisCarBtn = () => {
    router.push("tel:9829407612");
  };
  return (
    <div className="">
      {!isShowing && (
        <div className="w-full md:flex grid grid-cols-2 gap-3 justify-between items-center tracking-wider font-medium">
          <button
            type="button"
            aria-label="btn"
            onClick={() => {
              handleCalculateEmi();
            }}
            className="w-full flex xl:flex-col gap-1 p-2 border-[#CCCCCC] border-2 rounded-xl items-center justify-between md:justify-center"
          >
            <CalculatorIcon className="h-[25px] w-[25px] fill-black" />
            <span className="text-xs md:text-[0.55rem]">EMI CALCULATOR</span>
          </button>
          <button
            type="button"
            aria-label="btn"
            onClick={() => {
              handleCompareCarBtn();
            }}
            className="flex xl:flex-col md:gap-1 p-2 border-[#CCCCCC] border-2 rounded-xl items-center justify-center gap-2"
          >
            <CompareIcon className="h-[25px] w-[25px] fill-black" />
            <span className="text-xs md:text-[0.55rem]">COMPARE</span>
          </button>
          <button
            type="button"
            aria-label="btn"
            onClick={() => {
              handleReserveThisCarBtn();
            }}
            className=" w-full col-span-2 md:w-[200px] xl:w-[300px] text-xs xl:text-sm xl:py-3 text-white bg-black hover:text-black hover:bg-white border-[1px] hover:border-black px-4 pl-6 py-4 flex justify-between items-center group transition ease-in-out duration-300 rounded-xl tracking-[.2em]"
          >
            RESERVE THIS CAR
          </button>
        </div>
      )}
      {isShowing && (
        <EmiCalculator
          isShowing={isShowing}
          setIsShowing={setIsShowing}
          selectedCar={car}
        />
      )}
    </div>
  );
}

export default ButtonsForStickyBar;
