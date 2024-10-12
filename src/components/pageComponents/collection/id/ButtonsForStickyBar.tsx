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
          <div className="group">
            <button
              type="button"
              aria-label="btn"
              onClick={() => {
                handleCalculateEmi();
              }}
              className="w-[100%] xl:max-w-[120px] h-full xl:min-h-[75px] flex xl:flex-col gap-1 p-2 border-white/60  rounded-xl items-center justify-between md:justify-center text-white/60 bg-black group-hover:text-black group-hover:bg-white border-[1px] group-hover:border-black transition ease-in-out duration-300   "
            >
              <CalculatorIcon className="h-[25px] w-[25px] fill-white/60 group-hover:fill-black transition ease-in-out duration-300 rounded-xl t" />
              <span className="text-xs md:text-[0.55rem] ">EMI CALCULATOR</span>
            </button>
          </div>
          {/* <button
            type="button"
            aria-label="btn"
            onClick={() => {
              handleCompareCarBtn();
            }}
            className="flex xl:flex-col md:gap-1 p-2 border-white/60 border-2 rounded-xl items-center justify-center gap-2"
          >
            <CompareIcon className="h-[25px] w-[25px] fill-black" />
            <span className="text-xs md:text-[0.55rem]">COMPARE</span>
          </button> */}
          <button
            type="button"
            aria-label="btn"
            onClick={() => {
              handleReserveThisCarBtn();
            }}
            className=" w-[100%] xl:max-w-[150px] h-full xl:min-h-[75px] col-span-2 md:w-[200px] xl:w-[300px] text-xs xl:text-sm xl:py-2 text-white/60 bg-black hover:text-black hover:bg-white border-[1px] border-white/60 hover:border-black px-4 pl-6 py-4 flex justify-between items-center group transition ease-in-out duration-300 rounded-xl tracking-[.2em]"
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
