"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks/hooks";
import { fetchCars, setCars } from "@/lib/store/carSlice";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { BsSliders2Vertical as FilterIcon } from "react-icons/bs";
import { VscDebugRestart as ResetIcon } from "react-icons/vsc";

import SlideInFromBottom from "../utils/SlideInFromBottom";
import { defaultFilterQueries } from "@/lib/defaultFilter";

function FilterSection({ cars, setCars }: any) {
  const results = cars.length;

  const [sort, setSort] = React.useState(0);
  const [isShowing, setIsShowing] = React.useState(false);

  useEffect(() => {
    if (results !== 0) {
      let sortedCars;
      // console.log("funtion called for sorting");
      switch (sort) {
        case 0:
          sortedCars = [...cars]; // Create a shallow copy of the array
          break;
        case 1:
          sortedCars = [...cars].sort((x: any, y: any) => y.price - x.price);
          break;
        case 2:
          sortedCars = [...cars].sort((x: any, y: any) => x.price - y.price);
          break;
        default:
          sortedCars = [...cars].sort((x: any, y: any) => x.price - y.price);
          break;
      }
      setCars(sortedCars); // Dispatch the new sorted array
    }
  }, [sort]);

  const [filterQueries, setFilterQueries] = React.useState(
    defaultFilterQueries(true)
  );

  return (
    <div
      className={` border-b-[1px] border-[#D9D9D9] bg-white py-6 md:px-16  w-full `}
    >
      <div className="flex  gap-2 md:gap-0 flex-row items-center justify-between w-full text-left">
        <span className="text-black text-3xl font-medium md:block hidden">
          TOTAL {results} RESULTS FOUND
        </span>
        <span className="text-black text-3xl font-medium md:hidden text-left w-full">
          COLLECTION
        </span>
        <div className="flex items-center justify-end gap-2 md:justify-between md:w-[400px] w-full text-black font-medium tracking-wide">
          <div className="flex gap-2 items-center justify-center ">
            <span className="hidden md:block">FILTERS:</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setIsShowing(!isShowing);
              }}
              className={` ${
                filterQueries?.regYear.title === "All" &&
                filterQueries?.brand.title === "" &&
                filterQueries?.isCarNew === false &&
                filterQueries?.kmsDriven.title === "" &&
                filterQueries?.price.title === "" &&
                filterQueries?.carType.title === ""
                  ? "fill-black"
                  : "fill-white bg-black"
              } rounded-md border-[1px] p-2 border-[#D9D9D9] `}
            >
              <FilterIcon
                className={` ${
                  filterQueries?.regYear.title === "All" &&
                  filterQueries?.brand.title === "" &&
                  filterQueries?.isCarNew === false &&
                  filterQueries?.kmsDriven.title === "" &&
                  filterQueries?.price.title === "" &&
                  filterQueries?.carType.title === ""
                    ? "fill-black"
                    : "fill-white bg-black"
                } h-4 md:h-6 w-4 md:w-6`}
              />
            </motion.button>
            <FilterOptions
              filterQueries={filterQueries}
              setFilterQueries={setFilterQueries}
              isShowing={isShowing}
              setIsShowing={setIsShowing}
            />
          </div>
          <div className="flex gap-2 items-center justify-center ">
            <label htmlFor="sort" className="hidden md:block">
              SORT BY:
            </label>
            <select
              id="sort"
              className="p-[0.3rem] md:p-2 px-4 border-[1px] border-[#D9D9D9] rounded-md flex justify-between w-[90px] md:w-[200px]  items-center"
              value={sort}
              onChange={(e) => {
                setSort(Number(e.target.value));
                console.log("sort", e.target.value);
              }}
            >
              <option value={0}>Price</option>
              <option value={1}>Price - High to Low</option>
              <option value={2}>Price - Low to High</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;

function FilterOptions({ isShowing, setIsShowing, setFilterQueries }: any) {
  const currentYear = new Date().getFullYear();
  const registrationYearOptions = [
    {
      title: "2000-2010",
      value: {
        rangeStart: 2000,
        rangeEnd: 2010,
      },
    },
    {
      title: "2010-2015",
      value: {
        rangeStart: 2010,
        rangeEnd: 2015,
      },
    },
    {
      title: "2015-2020",
      value: {
        rangeStart: 2015,
        rangeEnd: 2020,
      },
    },
    {
      title: "All",
      value: {
        rangeStart: currentYear - 100,
        rangeEnd: currentYear,
      },
    },
  ];

  const kmsDrivenOption = [
    {
      title: "Brand New",
      value: {
        rangeStart: 0,
        rangeEnd: 0,
      },
    },
    {
      title: "0-5000",
      value: {
        rangeStart: 0,
        rangeEnd: 5000,
      },
    },
    {
      title: "5000-10000",
      value: {
        rangeStart: 5000,
        rangeEnd: 10000,
      },
    },
    {
      title: "10000-15000",
      value: {
        rangeStart: 10000,
        rangeEnd: 15000,
      },
    },
    {
      title: "15000-20000",
      value: {
        rangeStart: 15000,
        rangeEnd: 20000,
      },
    },
    {
      title: "20000 & Above",
      value: {
        rangeStart: 20000,
        rangeEnd: 1000000,
      },
    },
  ];

  const budgetOptions = [
    {
      title: "Below 50L",
      value: {
        rangeStart: 0,
        rangeEnd: 5000000,
      },
    },
    {
      title: "50L to 1Cr",
      value: {
        rangeStart: 5000000,
        rangeEnd: 10000000,
      },
    },
    {
      title: "1Cr to 1.5Cr",
      value: {
        rangeStart: 10000000,
        rangeEnd: 15000000,
      },
    },
    {
      title: "1.5Cr & Above",
      value: {
        rangeStart: 15000000,
        rangeEnd: 500000000,
      },
    },
  ];

  const bodyTypeOptions = [
    {
      title: "SUV",
      img: "",
      value: "SUV",
    },
    {
      title: "Sedan",
      img: "",
      value: "SEDAN",
    },
    {
      title: "Convertible",
      img: "",
      value: "CONVERTIBLE",
    },
    {
      title: "Coupe",
      img: "",
      value: "COUPE",
    },
    {
      title: "Sports",
      img: "",
      value: "SPORT",
    },
    {
      title: "MUV-MPV",
      img: "",
      value: "MUV-MPV",
    },
    {
      title: "Hatchback",
      img: "",
      value: "HATCHBACK",
    },
    {
      title: "Bike",
      img: "",
      value: "BIKE",
    },
  ];
  const brandOptions = [
    {
      title: "MERCEDES",
      img: "",
      value: "MERCEDES",
    },
    {
      title: "VOLVO",
      img: "",
      value: "VOLVO",
    },
    {
      title: "BMW",
      img: "",
      value: "BMW",
    },
    {
      title: "AUDI",
      img: "",
      value: "AUDI",
    },
    {
      title: "LAND ROVER",
      img: "",
      value: "LAND ROVER",
    },
    {
      title: "FERRARI",
      img: "",
      value: "FERRARI",
    },
    {
      title: "PORSCHE",
      img: "",
      value: "PORSCHE",
    },
    {
      title: "TOYOTA",
      img: "",
      value: "TOYOTA",
    },
  ];

  const dispatch = useAppDispatch();

  const [selectedYearOption, setSelectedYearOption] = React.useState({
    title: "All",
    value: {
      rangeStart: currentYear - 100,
      rangeEnd: currentYear,
    },
  });
  const [selectedKmsDrivenOption, setSelectedKmsDrivenOption] = React.useState({
    title: "",
    value: {
      rangeStart: 0,
      rangeEnd: 2000000,
    },
  });
  const [selectedBudgetOption, setSelectedBudgetOption] = React.useState({
    title: "",
    value: {
      rangeStart: 0,
      rangeEnd: 1500000000,
    },
  });
  const [selectedBodyTypeOption, setSelectedBodyTypeOption] = React.useState({
    title: "",
    img: "",
    value: "",
  });
  const [selectedBrandOption, setSelectedBrandOption] = React.useState({
    title: "",
    img: "",
    value: "",
  });

  const handleReset = () => {
    setSelectedBrandOption({
      title: "",
      img: "",
      value: "",
    });
    setSelectedBodyTypeOption({
      title: "",
      img: "",
      value: "",
    });
    setSelectedBudgetOption({
      title: "",
      value: {
        rangeStart: 0,
        rangeEnd: 1500000000,
      },
    });
    setSelectedKmsDrivenOption({
      title: "",
      value: {
        rangeStart: 0,
        rangeEnd: 2000000,
      },
    });
    setSelectedYearOption({
      title: "All",
      value: {
        rangeStart: currentYear - 100,
        rangeEnd: currentYear,
      },
    });
    setFilterQueries(defaultFilterQueries);
  };

  const applyFilters = () => {
    const newFilterQueries = {
      regYear: selectedYearOption,
      kmsDriven: selectedKmsDrivenOption,
      price: selectedBudgetOption,
      carType: selectedBodyTypeOption,
      brand: selectedBrandOption,
      isCarNew: "",
    };
    setFilterQueries(newFilterQueries);
    dispatch(fetchCars(newFilterQueries));
    setIsShowing(false);
  };

  return (
    <>
      {isShowing ? (
        <div className="fixed z-20 top-0 left-0 flex  justify-center items-center h-full pt-[26rem] pb-6 md:pt-12 w-full bg-black/50 overflow-y-scroll ">
          <SlideInFromBottom sequence={4}>
            <div className="  bg-white w-[100%] rounded-xl text-black  lg:w-[900px] lg:rounded-xl">
              <div className="flex flex-col w-full gap-2 py-6 px-6 md:px-0">
                <div className="flex gap-4  items-center justify-between  md:justify-end">
                  {/* reset motion.button */}
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    className="btn group w-[100px] flex gap-2 items-center"
                    type="button"
                    onClick={handleReset}
                  >
                    RESET
                    <ResetIcon className="fill-black group-hover:fill-white" />
                  </motion.button>
                  {/* cross mark */}
                  <div className="flex justify-end items-center md:pr-12  fill-black ">
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      type="button"
                      className="h-full w-[25px]"
                      onClick={() => {
                        handleReset();
                        setIsShowing(!isShowing);
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
                <div className="flex flex-col gap-4 mt-6 md:pt-0 md:px-8">
                  <div className="flex flex-col w-full">
                    <span className="text-2xl">REGISTRATION YEAR</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-2">
                      {registrationYearOptions.map((element, index) => {
                        return (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            key={index}
                            onClick={() => {
                              setSelectedYearOption(element);
                            }}
                            className={`${
                              selectedYearOption?.title == element.title
                                ? "selected-btn"
                                : "btn"
                            }`}
                          >
                            {element.title}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-2xl">KMS Driven</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-2">
                      {kmsDrivenOption.map((element, index) => {
                        return (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            key={index}
                            onClick={() => {
                              setSelectedKmsDrivenOption(element);
                            }}
                            className={`${
                              selectedKmsDrivenOption?.title == element.title
                                ? "selected-btn"
                                : "btn"
                            }`}
                          >
                            {element.title}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-2xl">BUDGET</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-2 ">
                      {budgetOptions.map((element, index) => {
                        return (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            key={index}
                            onClick={() => {
                              setSelectedBudgetOption(element);
                            }}
                            className={`${
                              selectedBudgetOption?.title == element.title
                                ? "selected-btn"
                                : "btn"
                            }`}
                          >
                            {element.title}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <span className="text-2xl">BODY TYPE</span>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-2">
                      {bodyTypeOptions.map((element, index) => {
                        return (
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              setSelectedBodyTypeOption(element);
                            }}
                            key={index}
                            className={`${
                              selectedBodyTypeOption?.title == element.title
                                ? "selected-btn"
                                : "btn"
                            }`}
                          >
                            {element.title}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>
                  <select
                    title="x"
                    id="brandOption"
                    className="p-2 px-4 border-[1px] border-[#D9D9D9] rounded-md flex justify-between w-full items-center"
                    value={selectedBrandOption?.value}
                    onChange={(e) => {
                      setSelectedBrandOption({
                        title: e.target.value,
                        img: "",
                        value: e.target.value,
                      });
                    }}
                  >
                    <option value="">BRANDS</option>
                    {brandOptions.map((element, index) => {
                      return (
                        <option key={index} value={element.value}>
                          {element.title}
                        </option>
                      );
                    })}
                  </select>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="selected-btn  group w-full flex gap-2 items-center justify-center text-center"
                    type="button"
                    onClick={applyFilters}
                  >
                    APPLY
                  </motion.button>
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
