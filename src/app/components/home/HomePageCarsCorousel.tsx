"use client";
import { useAppSelector } from "@/lib/hooks/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import SimpleFadeIn from "../utils/SimpleFadeIn";

const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const HomePageCarsCarousel = () => {
  const cars = useAppSelector((state) => state.car.cars);
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (cars.length - CARD_BUFFER);

  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return;
    }
    setOffset((pv) => (pv += CARD_SIZE));
  };

  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return;
    }
    setOffset((pv) => (pv -= CARD_SIZE));
  };

  return (
    <section className="bg-white  xl:p-32 md:p-20  py-16" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <SimpleFadeIn sequence={4}>
          <div className="mb-4 text-4xl md:text-6xl flex flex-col md:flex-row gap-2 font-medium text-black/80 pb-8 text-center ">
            {/* <p className="">OUR FLEET</p> */}
            <span className="text-black font-bold"> OUR FLEET</span>
          </div>
        </SimpleFadeIn>
        <SimpleFadeIn sequence={6}>
          <div>
            <div className="mx-auto max-w-6xl ">
              <motion.div
                animate={{
                  x: offset,
                }}
                className="flex"
              >
                {cars.map((car) => {
                  return <Card key={car.carModel} car={car} />;
                })}
              </motion.div>
            </div>

            {/* BUTTONS */}
            <>
              <motion.button
                initial={false}
                animate={{
                  x: CAN_SHIFT_LEFT ? "0%" : "-100%",
                }}
                className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                onClick={shiftLeft}
              >
                <FiChevronLeft />
              </motion.button>
              <motion.button
                initial={false}
                animate={{
                  x: CAN_SHIFT_RIGHT ? "0%" : "100%",
                }}
                className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                onClick={shiftRight}
              >
                <FiChevronRight />
              </motion.button>
            </>
          </div>
        </SimpleFadeIn>
      </div>
    </section>
  );
};

const Card = ({ car }: any) => {
  return (
    <Link
      href={`/collection/${car?.id}`}
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl overflow-hidden"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
    >
      {" "}
      <div className=" relative h-full w-full overflow-hidden">
        <Image src={car?.images[0]} alt="image" objectFit="cover" fill={true} />
      </div>
      <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/30 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-lg font-semibold uppercase text-red-600">
          {car?.brand}
        </span>
        <p className="my-2 text-3xl font-bold">{car?.carModel}</p>
        {/* <p className="text-lg text-black">{car?.price}</p> */}
      </div>
    </Link>
  );
};

export default HomePageCarsCarousel;
