"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import useMeasure from "react-use-measure";

const CARD_WIDTH = 100;
const CARD_HEIGHT = 100;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;

const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
};

const CardCarousel = ({
  images = [
    {
      id: 1,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 2,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 3,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 4,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 5,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 6,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 7,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 1,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 2,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 3,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 4,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 5,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 6,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
    {
      id: 7,
      url: "https://i.ibb.co/Ttd7LZv/2024-MERCEDES-BENZ-EQA-250.jpg",
    },
  ],
  setSelectedImage,
}: any) => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);

  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;

  const CAN_SHIFT_LEFT = offset < 0;

  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (images.length - CARD_BUFFER);

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
    <section className="" ref={ref}>
      <div className="relative overflow-hidden p-4">
        {/* CARDS */}
        <div className="mx-auto max-w-6xl">
          {/* <p className="mb-4 text-2xl font-semibold">
            Everything. <span className="text-slate-500">Yes, even that.</span>
          </p> */}
          <motion.div
            animate={{
              x: offset,
            }}
            className="flex"
          >
            {images.map((image: any) => {
              return (
                <Card
                  setSelectedImage={setSelectedImage}
                  key={image}
                  url={image?.data?.image?.url}
                  image={image}
                />
              );
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
            className="absolute left-0 top-[30%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
            onClick={shiftLeft}
          >
            <FiChevronLeft />
          </motion.button>
          <motion.button
            initial={false}
            animate={{
              x: CAN_SHIFT_RIGHT ? "0%" : "100%",
            }}
            className="absolute right-0 top-[30%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
            onClick={shiftRight}
          >
            <FiChevronRight />
          </motion.button>
        </>
      </div>
    </section>
  );
};

const Card = ({ image, url, setSelectedImage }: any) => {
  return (
    <div
      style={{
        marginRight: MARGIN,
      }}
      className={`relative shrink-0 cursor-pointer rounded-2xl border-white border-[1px] shadow-md transition-all hover:scale-[1.015] hover:shadow-xl p-1 w-[${
        CARD_WIDTH + 10
      }px] h-[${CARD_HEIGHT + 10}px ]`}
      onClick={() => {
        setSelectedImage(image);
      }}
    >
      <div
        className="relative shrink-0 cursor-pointer rounded-2xl border-white border-[1px] shadow-md transition-all hover:scale-[1.015] hover:shadow-xlscale-[0.95]"
        style={{
          width: CARD_WIDTH,
          height: CARD_HEIGHT,

          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* <div className="absolute inset-0 z-20 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white transition-[backdrop-filter] hover:backdrop-blur-sm">
        <span className="text-xs font-semibold uppercase text-violet-300">
          {category}
        </span>
        <p className="my-2 text-3xl font-bold">{title}</p>
        <p className="text-lg text-slate-300">{description}</p>
      </div> */}
      </div>
    </div>
  );
};

export default CardCarousel;
