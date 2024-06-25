"use client";
import { useAppSelector } from "@/lib/hooks/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";
import SimpleFadeIn from "../../utils/SimpleFadeIn";

const CARD_WIDTH = 900;
const CARD_HEIGHT = 506;
const MARGIN = 40;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  md: 720,
  lg: 1024,
};

const SwipeCarouselDesktop = ({ car }: any) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg
      ? 3
      : width > BREAKPOINTS.sm
      ? 2
      : width > BREAKPOINTS.md
      ? 2
      : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (car?.images.length - CARD_BUFFER);

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
    <SimpleFadeIn sequence={2}>
      <section className="bg-black/30    md:py-4 p-4 " ref={ref}>
        <div className="relative overflow-hidden p-4 ">
          {/* CARDS */}

          <div className="mx-auto max-w-6xl  ">
            <motion.div
              animate={{
                x: offset,
              }}
              className="flex "
            >
              {car?.images.map((image: any) => {
                return <ImageCard key={image} image={image} />;
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
              className="absolute left-0 top-[45%] md:h-[100px] z-30 rounded-r-xl bg-black p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
              onClick={shiftLeft}
            >
              <FiChevronLeft />
            </motion.button>
            <motion.button
              initial={false}
              animate={{
                x: CAN_SHIFT_RIGHT ? "0%" : "100%",
              }}
              className="absolute right-0 top-[45%] h-[100px] z-30 rounded-l-xl bg-black p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
              onClick={shiftRight}
            >
              <FiChevronRight />
            </motion.button>
          </>
        </div>
      </section>
    </SimpleFadeIn>
  );
};

const ImageCard = ({ image }: any) => {
  return (
    <div
      className="relative shrink-0 cursor-pointer rounded-2xl bg-white shadow-md transition-all hover:scale-[1.015] hover:shadow-xl overflow-hidden"
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginRight: MARGIN,
      }}
    >
      <Image src={image} alt="image" fill={true} objectFit="cover" />
    </div>
  );
};

export default SwipeCarouselDesktop;
